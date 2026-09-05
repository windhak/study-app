/* ============================================================
   app.js — 메인 애플리케이션 로직 (v1.7)
   저장소: localStorage (기기별 저장, 서버 불필요)
   ============================================================ */

/* ---------- 전역 상태 ---------- */
var STORAGE_PROFILES = "studyapp_profiles";
var STORAGE_LAST_PROFILE = "studyapp_lastProfileId";
var currentProfile = null;
var newProfilePhotoData = null;   // 새 프로필 생성 시 선택한 사진 (dataURL)
var photoChangeTargetId = null;   // 기존 프로필 사진 변경 대상 id

var quiz = {
  subject: null,      // 'math' | 'korean' | 'sentence' | 'english' | 'esentence' | 'gugudan'
  level: null,        // 국어·수학·구구단은 1~5, 영어·영어문장은 1~10(학년제)
  mode: null,         // 'time' | 'count'
  targetValue: null,  // 분 또는 문제수
  correct: 0,
  total: 0,
  startTime: null,
  endAt: null,         // time 모드일 때 종료 시각(ms)
  timerHandle: null,
  qEndAt: null,        // 현재 문제의 제한시간 종료 시각(ms) — 문제당 1분
  qTimerHandle: null,  // 문제당 카운트다운 setInterval 핸들
  currentProblem: null,
  currentSpeakText: null, // 영어 단어 발음 듣기용 텍스트
  usedWords: [],
  awaitingNext: false
};

/* 문제당 제한시간(초). 초과하면 오답 처리하고 다음 문제로 넘어간다. */
var QUESTION_SECONDS = 60;
/* 정답을 보여 주는 시간(ms) — 다음 문제로 넘어가기 전 잠깐 정답을 보여 준다. */
var REVEAL_MS = 3000;

var SUBJECT_LABEL = {
  math: "수학",
  korean: "국어 낱말 게임",
  sentence: "국어 문장",
  english: "영어 단어",
  esentence: "영어 문장",
  gugudan: "구구단 게임",
  wordchain: "끝말잇기"
};

/* 영어(단어·문장)는 학년제 10단계. 단계 번호(1~10) → 학년 라벨 */
var ENGLISH_GRADE_LABELS = ["초1", "초3", "초4", "초6", "중1", "중2", "중3", "고1", "고2", "고3"];
function isEnglishSubject(subject) {
  return subject === "english" || subject === "esentence";
}
function maxLevelFor(subject) {
  return isEnglishSubject(subject) ? 10 : 5;
}
/* 결과·기록 화면에 쓸 단계 표기. 영어는 학년 라벨을 함께 보여 준다. */
function levelDisplay(subject, level) {
  if (isEnglishSubject(subject)) {
    return level + "단계 · " + ENGLISH_GRADE_LABELS[level - 1];
  }
  return level + "단계";
}
var CHOSUNG = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

/* ---------- 조사 자동 선택 (받침 유무에 따라 골라 쓴다) ---------- */
/* 숫자로 끝날 때는 마지막 자리를 한글로 읽었을 때의 받침을 본다 (1→일, 3→삼 …) */
var DIGIT_HAS_JONG = [true, true, false, true, false, false, true, true, true, false];

function hasJongseong(value) {
  var str = String(value);
  if (str.length === 0) return false;
  var last = str.charAt(str.length - 1);
  if (last >= "0" && last <= "9") return DIGIT_HAS_JONG[parseInt(last, 10)];
  var code = last.charCodeAt(0) - 44032;
  if (code < 0 || code > 11171) return false;
  return (code % 28) !== 0;
}
/* 예) josa("사과", "은", "는") → "는" */
function josa(value, withJong, withoutJong) {
  return hasJongseong(value) ? withJong : withoutJong;
}
/* "로 / 으로"는 ㄹ 받침 뒤에서 "로"를 쓴다 (연필로, 학교로, 붓으로) */
function josaRo(value) {
  var str = String(value);
  if (str.length === 0) return "로";
  var last = str.charAt(str.length - 1);
  if (last >= "0" && last <= "9") return DIGIT_HAS_JONG[parseInt(last, 10)] ? "으로" : "로";
  var code = last.charCodeAt(0) - 44032;
  if (code < 0 || code > 11171) return "로";
  var jong = code % 28;
  return (jong === 0 || jong === 8) ? "로" : "으로";   /* 8 = ㄹ */
}

/* 정답 비교 — 띄어쓰기 차이는 맞은 것으로 본다.
   예) 정답이 "화석연료"여도 아이가 사전 표기대로 "화석 연료"라고 쓰면 정답 */
function sameAnswer(a, b) {
  return String(a).replace(/\s+/g, "") === String(b).replace(/\s+/g, "");
}

/* ---------- 새 버전 자동 감지 ----------
   GitHub Pages에 새로 배포하면, 새로고침을 직접 하지 않아도 알려 준다.
   ★ 배포할 때마다 아래 APP_VERSION 과 저장소 루트의 version.json 값을 함께 올릴 것. */
var APP_VERSION = "1.8.1";
var updateAvailable = false;

function checkForUpdate() {
  try {
    var xhr = new XMLHttpRequest();
    /* 캐시를 피해 항상 최신 version.json 을 읽는다 */
    xhr.open("GET", "version.json?_=" + Date.now(), true);
    try { xhr.setRequestHeader("Cache-Control", "no-cache"); } catch (e1) {}
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status < 200 || xhr.status >= 300) return;   /* 오프라인·실패는 조용히 무시 */
      var latest;
      try { latest = JSON.parse(xhr.responseText).version; } catch (e2) { return; }
      if (latest && latest !== APP_VERSION) {
        updateAvailable = true;
        refreshUpdateBanner();
      }
    };
    xhr.send();
  } catch (e) { /* 지원하지 않는 환경은 조용히 무시 */ }
}
/* 퀴즈·끝말잇기를 푸는 도중에는 진행이 날아가지 않게 배너를 숨긴다 */
function isBusyScreen() {
  if (quizIsActive()) return true;
  var wc = document.getElementById("screen-wc");
  return wc && wc.classList.contains("active");
}
function refreshUpdateBanner() {
  var banner = document.getElementById("updateBanner");
  if (!banner) return;
  if (updateAvailable && !isBusyScreen()) banner.classList.remove("hidden");
  else banner.classList.add("hidden");
}
function applyUpdate() {
  /* 새로고침하면 브라우저가 파일을 재검증해 새 버전을 받아 온다 */
  location.reload();
}

/* ---------- 화면 전환 ---------- */
function showScreen(id) {
  var screens = document.querySelectorAll(".screen");
  for (var i = 0; i < screens.length; i++) screens[i].classList.remove("active");
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
  refreshUpdateBanner();
}

/* ---------- 저장소 헬퍼 ---------- */
function loadProfiles() {
  try {
    var raw = localStorage.getItem(STORAGE_PROFILES);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveProfiles(list) {
  localStorage.setItem(STORAGE_PROFILES, JSON.stringify(list));
}
function getRecords(profileId) {
  try {
    var raw = localStorage.getItem("studyapp_records_" + profileId);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveRecordEntry(profileId, entry) {
  var list = getRecords(profileId);
  list.unshift(entry);
  if (list.length > 100) list = list.slice(0, 100);
  localStorage.setItem("studyapp_records_" + profileId, JSON.stringify(list));
}
function getStickerCount(profileId) {
  var v = localStorage.getItem("studyapp_stickers_" + profileId);
  return v ? parseInt(v, 10) : 0;
}
function addStickers(profileId, n) {
  var cur = getStickerCount(profileId);
  localStorage.setItem("studyapp_stickers_" + profileId, String(cur + n));
}

/* ---------- 프로필 사진 처리 ---------- */
function resizeImageFile(file, maxSize, callback) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var img = new Image();
    img.onload = function () {
      var w = img.width, h = img.height;
      if (w > h) {
        if (w > maxSize) { h = Math.round(h * (maxSize / w)); w = maxSize; }
      } else {
        if (h > maxSize) { w = Math.round(w * (maxSize / h)); h = maxSize; }
      }
      var canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL("image/jpeg", 0.8));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function handleNewPhotoSelect(inputEl) {
  var file = inputEl.files && inputEl.files[0];
  if (!file) return;
  resizeImageFile(file, 200, function (dataUrl) {
    newProfilePhotoData = dataUrl;
    var preview = document.getElementById("newPhotoPreview");
    preview.innerHTML = '<img src="' + dataUrl + '" alt="프로필 사진 미리보기">';
    document.getElementById("newPhotoRemoveBtn").classList.remove("hidden");
  });
}
function removeNewPhoto() {
  newProfilePhotoData = null;
  document.getElementById("newPhotoPreview").innerHTML = "👤";
  document.getElementById("newPhotoRemoveBtn").classList.add("hidden");
  document.getElementById("newProfilePhoto").value = "";
}
function changeProfilePhoto(id, event) {
  event.stopPropagation();
  photoChangeTargetId = id;
  document.getElementById("profilePhotoChangeInput").click();
}
function handleExistingPhotoSelect(inputEl) {
  var file = inputEl.files && inputEl.files[0];
  if (!file || !photoChangeTargetId) return;
  resizeImageFile(file, 200, function (dataUrl) {
    var profiles = loadProfiles();
    var p = profiles.filter(function (x) { return x.id === photoChangeTargetId; })[0];
    if (p) {
      p.photo = dataUrl;
      saveProfiles(profiles);
      renderProfileList();
    }
    photoChangeTargetId = null;
    inputEl.value = "";
  });
}

/* ---------- 프로필 화면 ---------- */
function renderProfileList() {
  var profiles = loadProfiles();
  var box = document.getElementById("profileList");
  box.innerHTML = "";
  if (profiles.length === 0) {
    var empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "아직 프로필이 없어요. 아래에서 새로 만들어 보세요!";
    box.appendChild(empty);
    return;
  }
  profiles.forEach(function (p) {
    var card = document.createElement("div");
    card.className = "profile-card";
    card.onclick = function () { selectProfile(p.id); };

    var avatarWrap = document.createElement("div");
    avatarWrap.className = "profile-avatar-wrap";

    var avatar;
    if (p.photo) {
      avatar = document.createElement("img");
      avatar.className = "profile-avatar has-photo";
      avatar.src = p.photo;
      avatar.alt = p.nickname;
    } else {
      avatar = document.createElement("div");
      avatar.className = "profile-avatar";
      avatar.textContent = p.nickname.charAt(0);
    }
    avatarWrap.appendChild(avatar);

    var editBtn = document.createElement("button");
    editBtn.className = "avatar-edit-btn";
    editBtn.type = "button";
    editBtn.textContent = "✎";
    editBtn.onclick = function (e) { changeProfilePhoto(p.id, e); };
    avatarWrap.appendChild(editBtn);

    var meta = document.createElement("div");
    meta.className = "profile-meta";
    var nm = document.createElement("div");
    nm.className = "profile-name";
    nm.textContent = p.nickname;
    var gr = document.createElement("div");
    gr.className = "profile-grade";
    var metaParts = [];
    if (p.school) metaParts.push(p.school);
    metaParts.push(p.grade + "학년");
    if (p.classNum) metaParts.push(p.classNum + "반");
    if (p.number) metaParts.push(p.number + "번");
    gr.textContent = metaParts.join(" ") + (p.realName ? " · " + p.realName : "");
    meta.appendChild(nm); meta.appendChild(gr);

    var del = document.createElement("button");
    del.className = "profile-delete";
    del.textContent = "삭제";
    del.onclick = function (e) { e.stopPropagation(); deleteProfile(p.id); };

    card.appendChild(avatarWrap);
    card.appendChild(meta);
    card.appendChild(del);
    box.appendChild(card);
  });
}
function createProfile() {
  var school = document.getElementById("newProfileSchool").value.trim();
  var grade = parseInt(document.getElementById("newProfileGrade").value, 10);
  var classNum = document.getElementById("newProfileClass").value.trim();
  var number = document.getElementById("newProfileNumber").value.trim();
  var realName = document.getElementById("newProfileRealName").value.trim();
  var nickname = document.getElementById("newProfileNickname").value.trim();

  if (!school) { alert("학교를 입력해 주세요."); return; }
  if (!realName) { alert("이름을 입력해 주세요."); return; }
  if (!nickname) { alert("프로필명을 입력해 주세요."); return; }

  var profiles = loadProfiles();
  var id = "p_" + Date.now();
  profiles.push({
    id: id,
    school: school,
    grade: grade,
    classNum: classNum ? parseInt(classNum, 10) : null,
    number: number ? parseInt(number, 10) : null,
    realName: realName,
    nickname: nickname,
    photo: newProfilePhotoData,
    createdAt: Date.now()
  });
  saveProfiles(profiles);

  document.getElementById("newProfileSchool").value = "";
  document.getElementById("newProfileClass").value = "";
  document.getElementById("newProfileNumber").value = "";
  document.getElementById("newProfileRealName").value = "";
  document.getElementById("newProfileNickname").value = "";
  document.getElementById("newProfileGrade").value = "3";
  removeNewPhoto();

  selectProfile(id);
}
function deleteProfile(id) {
  if (!confirm("이 프로필과 학습 기록을 삭제할까요?")) return;
  var profiles = loadProfiles().filter(function (p) { return p.id !== id; });
  saveProfiles(profiles);
  localStorage.removeItem("studyapp_records_" + id);
  localStorage.removeItem("studyapp_stickers_" + id);
  if (localStorage.getItem(STORAGE_LAST_PROFILE) === id) {
    localStorage.removeItem(STORAGE_LAST_PROFILE);
  }
  renderProfileList();
}
function selectProfile(id) {
  var profiles = loadProfiles();
  var p = profiles.filter(function (x) { return x.id === id; })[0];
  if (!p) return;
  currentProfile = p;
  localStorage.setItem(STORAGE_LAST_PROFILE, id);
  document.getElementById("topbarActions").style.display = "flex";
  goToHome();
}
function goToProfileSelect() {
  currentProfile = null;
  document.getElementById("topbarActions").style.display = "none";
  renderProfileList();
  showScreen("screen-profile");
}

/* ---------- 홈 화면 ---------- */
function goToHome() {
  document.getElementById("homeGreeting").textContent =
    currentProfile.nickname + "님, 안녕하세요! (" + currentProfile.school + " " + currentProfile.grade + "학년)";
  var homeAvatar = document.getElementById("homeAvatar");
  if (currentProfile.photo) {
    homeAvatar.innerHTML = '<img src="' + currentProfile.photo + '" alt="' + currentProfile.nickname + '">';
  } else {
    homeAvatar.textContent = currentProfile.nickname.charAt(0);
  }
  renderStickers();
  showScreen("screen-home");
}
function renderStickers() {
  var strip = document.getElementById("stickerStrip");
  strip.innerHTML = "";
  var count = getStickerCount(currentProfile.id);
  var total = 20;
  for (var i = 0; i < total; i++) {
    var s = document.createElement("div");
    s.className = "sticker" + (i < count ? " earned" : "");
    s.textContent = i < count ? "⭐" : "";
    strip.appendChild(s);
  }
}

/* ---------- 요정이 챗봇 (규칙 기반, 실제 AI 아님) ---------- */
var MASCOT_QUICK_REPLIES = ["안녕!", "심심해", "오늘 뭐 할까?", "스티커 몇 개야?", "수학 어려워"];

function goToMascotChat() {
  var win = document.getElementById("chatWindow");
  win.innerHTML = "";
  appendChatBubble("mascot", currentProfile.nickname + josa(currentProfile.nickname, "아", "야") +
    ", 안녕! 나는 공부요정이야 🧚 오늘 하고 싶은 말을 걸어 봐!");
  renderMascotQuickReplies();
  document.getElementById("chatInput").value = "";
  showScreen("screen-mascot");
  setTimeout(function () {
    var input = document.getElementById("chatInput");
    if (input) input.focus();
  }, 50);
}
function renderMascotQuickReplies() {
  var box = document.getElementById("chatQuickReplies");
  box.innerHTML = "";
  MASCOT_QUICK_REPLIES.forEach(function (text) {
    var chip = document.createElement("div");
    chip.className = "chat-quick-reply";
    chip.textContent = text;
    chip.onclick = function () { sendMascotMessage(text); };
    box.appendChild(chip);
  });
}
function appendChatBubble(role, text) {
  var win = document.getElementById("chatWindow");
  var bubble = document.createElement("div");
  bubble.className = "chat-bubble " + role;
  bubble.textContent = text;
  win.appendChild(bubble);
  win.scrollTop = win.scrollHeight;
}
function sendMascotMessage(presetText) {
  var input = document.getElementById("chatInput");
  var text = (presetText !== undefined ? presetText : input.value).trim();
  if (!text) return;
  appendChatBubble("user", text);
  input.value = "";
  var reply = getMascotReply(text);
  setTimeout(function () { appendChatBubble("mascot", reply); }, 400);
}
function getMascotReply(text) {
  var lower = text.toLowerCase();

  // 동적 응답: 스티커 개수, 오늘 추천 과목
  for (var i = 0; i < MASCOT_DYNAMIC_KEYWORDS.sticker.length; i++) {
    if (lower.indexOf(MASCOT_DYNAMIC_KEYWORDS.sticker[i]) !== -1) {
      var count = getStickerCount(currentProfile.id);
      return "지금까지 모은 스티커는 " + count + "개야! " + (count > 0 ? "정말 잘하고 있어 ⭐" : "오늘부터 하나씩 모아 보자!");
    }
  }
  for (var j = 0; j < MASCOT_DYNAMIC_KEYWORDS.recommend.length; j++) {
    if (lower.indexOf(MASCOT_DYNAMIC_KEYWORDS.recommend[j]) !== -1) {
      var subjects = ["수학", "국어 낱말 게임", "영어 단어", "구구단 게임"];
      var pick = subjects[randInt(0, subjects.length - 1)];
      return "오늘은 " + pick + " 어때? 홈 화면에서 카드를 눌러서 시작해 봐!";
    }
  }

  // 카테고리 순서대로 키워드 매칭
  for (var c = 0; c < MASCOT_CATEGORIES.length; c++) {
    var cat = MASCOT_CATEGORIES[c];
    for (var k = 0; k < cat.keywords.length; k++) {
      if (lower.indexOf(cat.keywords[k]) !== -1) {
        return cat.replies[randInt(0, cat.replies.length - 1)];
      }
    }
  }

  // 매칭 없으면 기본 응답
  return MASCOT_FALLBACK[randInt(0, MASCOT_FALLBACK.length - 1)];
}

/* ---------- 난이도 선택 화면 ---------- */
function goToDifficulty(subject) {
  quiz.subject = subject;
  document.getElementById("diffTitle").textContent = SUBJECT_LABEL[subject] + " - 난이도 선택";
  var english = isEnglishSubject(subject);
  var maxLevel = maxLevelFor(subject);
  document.getElementById("diffSub").textContent = english
    ? "학년에 맞는 단계를 골라 보세요 (1단계 초1 ~ 10단계 고3)"
    : "1단계(쉬움)부터 5단계(어려움)까지 중에서 골라 보세요";
  var grid = document.getElementById("levelGrid");
  grid.innerHTML = "";
  for (var lv = 1; lv <= maxLevel; lv++) {
    (function (level) {
      var btn = document.createElement("div");
      btn.className = "level-btn";
      var label = document.createElement("div");
      label.className = "lv-label";
      label.textContent = level + "단계";
      var sub = document.createElement("div");
      sub.className = "lv-stars";
      if (english) {
        /* 영어는 별점 대신 학년 라벨을 보여 준다 (10단계라 별 5개로는 부족) */
        sub.textContent = ENGLISH_GRADE_LABELS[level - 1];
      } else {
        var starStr = "";
        for (var s = 0; s < level; s++) starStr += "★";
        for (var s2 = level; s2 < 5; s2++) starStr += "☆";
        sub.textContent = starStr;
      }
      btn.appendChild(label);
      btn.appendChild(sub);
      btn.onclick = function () { goToSetup(level); };
      grid.appendChild(btn);
    })(lv);
  }
  showScreen("screen-difficulty");
}
function goToDifficultyBack() {
  goToDifficulty(quiz.subject);
}

/* ---------- 설정 화면 (시간/문제수) ---------- */
function goToSetup(level) {
  quiz.level = level;
  quiz.mode = "time";
  document.getElementById("setupModeTime").classList.add("selected");
  document.getElementById("setupModeCount").classList.remove("selected");
  document.getElementById("setupTimeBox").classList.remove("hidden");
  document.getElementById("setupCountBox").classList.add("hidden");
  document.getElementById("setupTimeValue").textContent = "5";
  document.getElementById("setupCountValue").textContent = "10";
  showScreen("screen-setup");
}
function selectSetupMode(mode) {
  quiz.mode = mode;
  document.getElementById("setupModeTime").classList.toggle("selected", mode === "time");
  document.getElementById("setupModeCount").classList.toggle("selected", mode === "count");
  document.getElementById("setupTimeBox").classList.toggle("hidden", mode !== "time");
  document.getElementById("setupCountBox").classList.toggle("hidden", mode !== "count");
}
function changeSetupValue(delta) {
  if (quiz.mode === "time") {
    var el = document.getElementById("setupTimeValue");
    var v = parseInt(el.textContent, 10) + delta;
    if (v < 1) v = 1; if (v > 30) v = 30;
    el.textContent = v;
  } else {
    var el2 = document.getElementById("setupCountValue");
    var v2 = parseInt(el2.textContent, 10) + delta * 5;
    if (v2 < 5) v2 = 5; if (v2 > 50) v2 = 50;
    el2.textContent = v2;
  }
}

/* ---------- 퀴즈 시작/문제 생성 ---------- */
function startQuiz() {
  /* 새 버전이 대기 중이면, 퀴즈를 시작하지 않고 먼저 최신 버전으로 적용한다 */
  if (updateAvailable) { applyUpdate(); return; }
  quiz.targetValue = quiz.mode === "time"
    ? parseInt(document.getElementById("setupTimeValue").textContent, 10)
    : parseInt(document.getElementById("setupCountValue").textContent, 10);
  quiz.correct = 0;
  quiz.total = 0;
  quiz.startTime = Date.now();
  quiz.usedWords = [];
  quiz.awaitingNext = false;

  if (quiz.mode === "time") {
    quiz.endAt = Date.now() + quiz.targetValue * 60 * 1000;
    quiz.timerHandle = setInterval(updateQuizTimer, 500);
  } else {
    document.getElementById("quizTimer").textContent = "";
  }

  showScreen("screen-quiz");
  nextProblem();
}
function updateQuizTimer() {
  var remain = quiz.endAt - Date.now();
  if (remain <= 0) {
    clearInterval(quiz.timerHandle);
    finishQuiz();
    return;
  }
  var mm = Math.floor(remain / 60000);
  var ss = Math.floor((remain % 60000) / 1000);
  document.getElementById("quizTimer").textContent =
    "남은 시간 " + mm + ":" + (ss < 10 ? "0" + ss : ss);
  updateProgressBarTime();
}
function updateProgressBarTime() {
  var total = quiz.targetValue * 60 * 1000;
  var elapsed = total - (quiz.endAt - Date.now());
  var pct = Math.min(100, Math.max(0, (elapsed / total) * 100));
  document.getElementById("quizProgressBar").style.width = pct + "%";
}
function updateProgressBarCount() {
  var pct = Math.min(100, (quiz.total / quiz.targetValue) * 100);
  document.getElementById("quizProgressBar").style.width = pct + "%";
}

/* ---------- 문제당 제한시간 (1분) ---------- */
function quizIsActive() {
  var el = document.getElementById("screen-quiz");
  return el && el.classList.contains("active");
}
function startQuestionTimer() {
  stopQuestionTimer();
  quiz.qEndAt = Date.now() + QUESTION_SECONDS * 1000;
  renderQuestionTimer();
  quiz.qTimerHandle = setInterval(updateQuestionTimer, 250);
}
function stopQuestionTimer() {
  if (quiz.qTimerHandle) { clearInterval(quiz.qTimerHandle); quiz.qTimerHandle = null; }
}
function updateQuestionTimer() {
  /* 퀴즈 화면을 벗어났으면(홈으로 나감 등) 타이머를 멈춘다 */
  if (!quizIsActive()) { stopQuestionTimer(); return; }
  if (quiz.awaitingNext) { stopQuestionTimer(); return; }
  if (Date.now() >= quiz.qEndAt) {
    stopQuestionTimer();
    onQuestionTimeout();
    return;
  }
  renderQuestionTimer();
}
function renderQuestionTimer() {
  var remainMs = Math.max(0, quiz.qEndAt - Date.now());
  var sec = Math.ceil(remainMs / 1000);
  var mm = Math.floor(sec / 60);
  var ss = sec % 60;
  var el = document.getElementById("quizQTimer");
  el.classList.remove("hidden");
  el.innerHTML = '<span class="qt-label">⏱ 남은 시간</span>' +
                 '<span class="qt-time">' + mm + ":" + (ss < 10 ? "0" + ss : ss) + '</span>';
  /* 10초 이하로 남으면 빨간색 + 두근두근 강조 */
  if (sec <= 10) el.classList.add("warn"); else el.classList.remove("warn");
}
function hideQuestionTimer() {
  var el = document.getElementById("quizQTimer");
  el.classList.add("hidden");
  el.classList.remove("warn");
  el.textContent = "";
}
function onQuestionTimeout() {
  if (quiz.awaitingNext) return;
  var correctAns = quiz.currentProblem.answer;
  /* 객관식이면 정답 보기를 표시하고 클릭을 막는다 */
  var buttons = document.querySelectorAll(".quiz-choice");
  if (buttons.length > 0) {
    var displayAns = Array.isArray(correctAns) ? correctAns[0] : correctAns;
    buttons.forEach(function (b) {
      b.onclick = null;
      if (b.textContent === displayAns) b.classList.add("correct");
    });
  }
  handleAnswerResult(false, correctAns, true);
}

function getChosungHint(word) {
  var out = "";
  for (var i = 0; i < word.length; i++) {
    var code = word.charCodeAt(i);
    if (code >= 44032 && code <= 55203) {
      var idx = Math.floor((code - 44032) / 588);
      out += CHOSUNG[idx] + " ";
    } else {
      out += word.charAt(i) + " ";
    }
  }
  return out.trim();
}

function nextProblem() {
  if (quiz.mode === "count" && quiz.total >= quiz.targetValue) {
    finishQuiz();
    return;
  }
  quiz.awaitingNext = false;
  document.getElementById("quizFeedback").textContent = "";
  document.getElementById("quizFeedback").className = "quiz-feedback";
  if (quiz.mode === "count") updateProgressBarCount();

  var inputArea = document.getElementById("quizInputArea");
  var hintEl = document.getElementById("quizHint");
  var qEl = document.getElementById("quizQuestion");
  var speakBtn = document.getElementById("speakWordBtn");
  hintEl.textContent = "";
  speakBtn.classList.add("hidden");
  quiz.currentSpeakText = null;
  qEl.classList.remove("small");

  if (quiz.subject === "math") {
    var p = generateMathProblem(quiz.level);
    quiz.currentProblem = p;
    qEl.textContent = p.question + " =";
    renderTextInput(inputArea, "숫자를 입력하세요");
  } else if (quiz.subject === "gugudan") {
    var g = generateGugudanProblem(quiz.level);
    quiz.currentProblem = g;
    qEl.textContent = g.question;
    renderTextInput(inputArea, "답을 입력하세요");
  } else if (quiz.subject === "korean") {
    var bank = KOREAN_WORDS[quiz.level];
    var pick = pickUnusedWord(bank, "word");
    quiz.currentProblem = { answer: pick.word };
    qEl.textContent = getChosungHint(pick.word);
    hintEl.textContent = "힌트: " + pick.hint;
    renderTextInput(inputArea, "낱말을 입력하세요");
  } else if (quiz.subject === "sentence") {
    if (quiz.level <= 2) {
      var sbank = SENTENCE_FILL_BLANK[quiz.level];
      var spick = pickUnusedWord(sbank, "sentence");
      quiz.currentProblem = { answer: spick.answers };
      qEl.classList.add("small");
      qEl.textContent = spick.sentence;
      hintEl.textContent = "빈칸에 알맞은 낱말을 써 보세요";
      renderTextInput(inputArea, "정답을 입력하세요");
    } else {
      var stbank = SENTENCE_SITUATIONS[quiz.level];
      var stpick = pickUnusedWord(stbank, "situation");
      quiz.currentProblem = { answer: stpick.answer };
      qEl.classList.add("small");
      qEl.textContent = stpick.situation;
      hintEl.textContent = "가장 알맞은 행동을 골라 보세요";
      var stchoices = shuffleArray(stpick.choices);
      renderChoiceInput(inputArea, stchoices);
    }
  } else if (quiz.subject === "english") {
    var ebank = ENGLISH_WORDS[quiz.level];
    var epick = pickUnusedWord(ebank, "word");
    quiz.currentProblem = { answer: epick.meaning };
    quiz.currentSpeakText = epick.word;
    qEl.textContent = epick.word;
    hintEl.textContent = "이 영어 단어의 뜻은 무엇일까요?";
    speakBtn.classList.remove("hidden");
    var choices = buildChoices(epick.meaning, ENGLISH_WORDS);
    renderChoiceInput(inputArea, choices);
  } else if (quiz.subject === "esentence") {
    var esbank = ENGLISH_SENTENCES[quiz.level];
    var espick = pickUnusedWord(esbank, "sentence");
    quiz.currentProblem = { answer: espick.answer };
    qEl.classList.add("small");
    qEl.textContent = espick.sentence;
    if (espick.type === "meaning") {
      hintEl.textContent = "이 문장의 뜻을 골라 보세요";
      quiz.currentSpeakText = espick.sentence;   /* 문장 읽어 주기 */
      speakBtn.classList.remove("hidden");
    } else {
      hintEl.textContent = "빈칸에 알맞은 단어를 골라 보세요";
    }
    renderChoiceInput(inputArea, shuffleArray(espick.choices));
  }
  startQuestionTimer();
}
function speakCurrentWord() {
  if (!quiz.currentSpeakText) return;
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    var utter = new SpeechSynthesisUtterance(quiz.currentSpeakText);
    utter.lang = "en-US";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  } catch (e) { /* 음성 합성을 지원하지 않는 기기는 조용히 무시 */ }
}
function pickUnusedWord(bank, key) {
  var remaining = bank.filter(function (w) { return quiz.usedWords.indexOf(w[key]) === -1; });
  if (remaining.length === 0) { quiz.usedWords = []; remaining = bank; }
  var pick = remaining[randInt(0, remaining.length - 1)];
  quiz.usedWords.push(pick[key]);
  return pick;
}

function renderTextInput(container, placeholder) {
  container.innerHTML =
    '<input type="text" class="quiz-input" id="quizAnswerInput" placeholder="' + placeholder + '" autocomplete="off">' +
    '<button class="btn btn-primary" id="quizSubmitBtn">확인</button>';
  var input = document.getElementById("quizAnswerInput");
  document.getElementById("quizSubmitBtn").onclick = submitTextAnswer;
  input.onkeydown = function (e) { if (e.key === "Enter") submitTextAnswer(); };
  setTimeout(function () { input.focus(); }, 50);
}
function renderChoiceInput(container, choices) {
  container.innerHTML = '<div class="quiz-choice-grid" id="quizChoiceGrid"></div>';
  var grid = document.getElementById("quizChoiceGrid");
  choices.forEach(function (c) {
    var b = document.createElement("div");
    b.className = "quiz-choice";
    b.textContent = c;
    b.onclick = function () { submitChoiceAnswer(c, b); };
    grid.appendChild(b);
  });
}
function submitTextAnswer() {
  if (quiz.awaitingNext) return;
  var input = document.getElementById("quizAnswerInput");
  var raw = input.value.trim();
  if (raw === "") return;
  var correctAns = quiz.currentProblem.answer;
  var isCorrect;
  if (typeof correctAns === "number") {
    isCorrect = parseInt(raw, 10) === correctAns;
  } else if (Array.isArray(correctAns)) {
    isCorrect = false;
    for (var ai = 0; ai < correctAns.length; ai++) {
      if (sameAnswer(raw, correctAns[ai])) { isCorrect = true; break; }
    }
  } else {
    isCorrect = sameAnswer(raw, correctAns);
  }
  handleAnswerResult(isCorrect, correctAns);
}
function submitChoiceAnswer(chosen, btnEl) {
  if (quiz.awaitingNext) return;
  var correctAns = quiz.currentProblem.answer;
  var isCorrect = chosen === correctAns;
  var buttons = document.querySelectorAll(".quiz-choice");
  buttons.forEach(function (b) {
    b.onclick = null;
    if (b.textContent === correctAns) b.classList.add("correct");
    else if (b === btnEl && !isCorrect) b.classList.add("wrong");
  });
  handleAnswerResult(isCorrect, correctAns);
}
function handleAnswerResult(isCorrect, correctAns, timedOut) {
  quiz.awaitingNext = true;
  stopQuestionTimer();
  hideQuestionTimer();
  quiz.total += 1;
  if (isCorrect) quiz.correct += 1;
  var fb = document.getElementById("quizFeedback");
  var displayAns = Array.isArray(correctAns) ? correctAns[0] : correctAns;
  if (isCorrect) {
    fb.textContent = "정답이에요! 🎉 (정답: " + displayAns + ")";
    fb.className = "quiz-feedback ok";
  } else {
    var head = timedOut ? "시간 초과예요! 정답은 " : "아쉬워요! 정답은 ";
    /* 문장형 정답(마침표·물음표 등으로 끝남)에는 "이에요/예요"를 붙이지 않고 따옴표로 보여 준다 */
    if (/[.?!]$/.test(String(displayAns))) {
      fb.textContent = head + "“" + displayAns + "”";
    } else {
      fb.textContent = head + displayAns + josa(displayAns, "이에요", "예요");
    }
    fb.className = "quiz-feedback no";
  }
  if (quiz.mode === "count") updateProgressBarCount();
  setTimeout(function () {
    if (quiz.mode === "time" && Date.now() >= quiz.endAt) { finishQuiz(); return; }
    nextProblem();
  }, REVEAL_MS);
}

/* ---------- 결과 처리 ---------- */
function finishQuiz() {
  if (quiz.timerHandle) clearInterval(quiz.timerHandle);
  stopQuestionTimer();
  hideQuestionTimer();
  var elapsedSec = Math.round((Date.now() - quiz.startTime) / 1000);
  var accuracy = quiz.total > 0 ? Math.round((quiz.correct / quiz.total) * 100) : 0;

  var earned = 0;
  if (quiz.total > 0 && accuracy >= 70) earned += 1;
  if (accuracy === 100) earned += 1;
  if (earned > 0) addStickers(currentProfile.id, earned);

  saveRecordEntry(currentProfile.id, {
    date: new Date().toISOString(),
    subject: quiz.subject,
    level: quiz.level,
    mode: quiz.mode,
    targetValue: quiz.targetValue,
    correct: quiz.correct,
    total: quiz.total,
    elapsedSec: elapsedSec
  });

  document.getElementById("resultScore").textContent = quiz.correct + " / " + quiz.total;
  document.getElementById("resultDetail").textContent =
    SUBJECT_LABEL[quiz.subject] + " · " + levelDisplay(quiz.subject, quiz.level) + " · 정답률 " + accuracy + "% · " +
    Math.floor(elapsedSec / 60) + "분 " + (elapsedSec % 60) + "초";
  document.getElementById("resultEmoji").textContent = accuracy >= 90 ? "🏆" : accuracy >= 70 ? "🎉" : "💪";

  var stickerBox = document.getElementById("resultStickers");
  stickerBox.innerHTML = "";
  for (var i = 0; i < earned; i++) {
    var s = document.createElement("div");
    s.className = "sticker earned";
    s.textContent = "⭐";
    stickerBox.appendChild(s);
  }
  showScreen("screen-result");
}
function retrySameSetup() {
  showScreen("screen-quiz");
  quiz.correct = 0; quiz.total = 0; quiz.startTime = Date.now(); quiz.usedWords = [];
  document.getElementById("quizProgressBar").style.width = "0%";
  if (quiz.mode === "time") {
    quiz.endAt = Date.now() + quiz.targetValue * 60 * 1000;
    quiz.timerHandle = setInterval(updateQuizTimer, 500);
  }
  nextProblem();
}

/* ---------- 기록 화면 ---------- */
function goToRecords() {
  var records = getRecords(currentProfile.id);
  var totalSessions = records.length;
  var totalCorrect = 0, totalProblems = 0;
  records.forEach(function (r) {
    if (r.subject === "wordchain") return;   /* 끝말잇기는 정답률 개념이 없어 통계에서 제외 */
    totalCorrect += r.correct;
    totalProblems += r.total;
  });
  var avgAcc = totalProblems > 0 ? Math.round((totalCorrect / totalProblems) * 100) : 0;

  var summary = document.getElementById("recordSummary");
  summary.innerHTML =
    '<div class="record-box"><div class="num">' + totalSessions + '</div><div class="lbl">학습 횟수</div></div>' +
    '<div class="record-box"><div class="num">' + totalProblems + '</div><div class="lbl">푼 문제 수</div></div>' +
    '<div class="record-box"><div class="num">' + avgAcc + '%</div><div class="lbl">평균 정답률</div></div>' +
    '<div class="record-box"><div class="num">' + getStickerCount(currentProfile.id) + '</div><div class="lbl">획득 스티커</div></div>';

  var log = document.getElementById("recordLog");
  log.innerHTML = "";
  if (records.length === 0) {
    log.innerHTML = '<div class="empty-state">아직 학습 기록이 없어요. 문제를 풀어 보세요!</div>';
  } else {
    records.slice(0, 30).forEach(function (r) {
      var item = document.createElement("div");
      item.className = "record-log-item";
      var d = new Date(r.date);
      var dateStr = (d.getMonth() + 1) + "/" + d.getDate() + " " +
        (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":" +
        (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes());
      var titleStr, valueStr;
      if (r.subject === "wordchain") {
        titleStr = SUBJECT_LABEL[r.subject] + " · " + r.level;
        valueStr = "낱말 " + r.correct + "개";
      } else {
        titleStr = SUBJECT_LABEL[r.subject] + " · " + levelDisplay(r.subject, r.level);
        valueStr = r.correct + " / " + r.total;
      }
      item.innerHTML =
        '<div><div class="rl-subject">' + titleStr + '</div>' +
        '<div class="rl-date">' + dateStr + '</div></div>' +
        '<div>' + valueStr + '</div>';
      log.appendChild(item);
    });
  }
  showScreen("screen-records");
}

/* ============================================================
   끝말잇기 (v1.7)
   - 아이의 낱말은 사전에 없어도 "연결만 되면" 인정한다
   - 카테고리는 보너스 점수용 (사전에 있는 낱말만 보너스 대상)
   - 두음법칙 양방향 허용 / 한 게임 안에서 중복 금지
   - 한 턴 60초 + "모르겠어요" 버튼, 목표 없는 무한 모드
   ============================================================ */

var WC_TURN_SECONDS = 60;
var WC_WIN_BONUS = 30;      /* 요정이를 막았을 때 라운드 승리 보너스 */

/* 사전에 없는 낱말을 받았을 때의 응답. 뜻은 모른다고 솔직히 말하되 그대로 이어간다.
   ("{W}" 자리에 아이가 낸 낱말이 들어간다) */
/* {W}=낱말, {은는}/{이가}=받침에 맞는 조사 (wcFillWord 가 채운다) */
var WC_UNKNOWN_REPLIES = [
  "\u201c{W}\u201d… 음, 무슨 뜻인지는 모르겠어. 그래도 끝말은 맞으니까 이어갈게!",
  "\u201c{W}\u201d{이가} 무슨 뜻이야? 요정이는 모르는 낱말이야. 그래도 계속 가 보자!",
  "\u201c{W}\u201d! 뜻은 잘 모르겠지만 이어가는 건 문제없어. 내 차례!",
  "\u201c{W}\u201d{은는} 요정이가 아직 못 배운 낱말이야. 뜻은 모르지만 그냥 이어갈게!",
  "\u201c{W}\u201d… 처음 듣는 낱말이라 뜻을 모르겠어. 나중에 알려 줘! 일단 이어갈게!"
];
/* 사전에 없는 낱말을 받았는데 이을 낱말까지 없을 때 */
var WC_UNKNOWN_GIVEUP_REPLIES = [
  "\u201c{W}\u201d… 뜻도 모르겠고 이어질 낱말도 못 찾겠어. 네가 이겼어! 🏆",
  "\u201c{W}\u201d{이가} 뭔지도 모르는데 다음 낱말까지 안 떠올라… 완전히 졌어! 🏆"
];
/* 문구의 자리표시자를 낱말과 알맞은 조사로 채운다 */
function wcFillWord(tpl, word) {
  return tpl.replace("{W}", word)
            .replace("{은는}", josa(word, "은", "는"))
            .replace("{이가}", josa(word, "이", "가"));
}
var WC_HANGUL_BASE = 44032;
var WC_CHO_N = 2, WC_CHO_R = 5, WC_CHO_O = 11;      /* ㄴ, ㄹ, ㅇ */
var WC_PALATAL = [2, 3, 6, 7, 12, 17, 20];          /* ㅑㅒㅕㅖㅛㅠㅣ */
var WC_STORAGE_BEST = "studyapp_wcbest_";

var wordchain = {
  catId: 0,
  catName: "자유",
  chain: [],          /* [{ w: 낱말, by: "fairy"|"me", bonus: true/false }] */
  used: {},
  myCount: 0,
  bonusCount: 0,
  wins: 0,            /* 요정이를 막은 횟수 */
  round: 1,
  turnEndAt: null,
  timerHandle: null,
  startTime: null,
  locked: false,      /* 요정이가 생각하는 동안 입력 잠금 */
  lastWasUnknown: false,  /* 직전에 아이가 사전 밖 낱말을 냈는지 */
  finished: false
};

/* ---------- 한글 분해/조립 · 두음법칙 ---------- */
function wcDecompose(ch) {
  var code = ch.charCodeAt(0) - WC_HANGUL_BASE;
  if (code < 0 || code > 11171) return null;
  return { cho: Math.floor(code / 588), jung: Math.floor((code % 588) / 28), jong: code % 28 };
}
function wcCompose(cho, jung, jong) {
  return String.fromCharCode(WC_HANGUL_BASE + cho * 588 + jung * 28 + jong);
}
function wcIsPalatal(jung) {
  for (var i = 0; i < WC_PALATAL.length; i++) if (WC_PALATAL[i] === jung) return true;
  return false;
}
/* 끝 글자로 시작할 수 있는 글자들 (두음법칙 양방향 허용) */
function wcStartVariants(ch) {
  var out = [ch];
  var d = wcDecompose(ch);
  if (!d) return out;
  var pal = wcIsPalatal(d.jung);
  if (d.cho === WC_CHO_R) {
    out.push(wcCompose(pal ? WC_CHO_O : WC_CHO_N, d.jung, d.jong));
  } else if (d.cho === WC_CHO_N) {
    if (pal) out.push(wcCompose(WC_CHO_O, d.jung, d.jong));
    out.push(wcCompose(WC_CHO_R, d.jung, d.jong));
  } else if (d.cho === WC_CHO_O && pal) {
    out.push(wcCompose(WC_CHO_R, d.jung, d.jong));
    out.push(wcCompose(WC_CHO_N, d.jung, d.jong));
  }
  var seen = {}, res = [];
  for (var i = 0; i < out.length; i++) {
    if (!seen[out[i]]) { seen[out[i]] = true; res.push(out[i]); }
  }
  return res;
}
function wcNormalize(s) {
  return String(s).replace(/\s+/g, "").replace(/[.,!?~]/g, "").trim();
}
function wcIsHangulOnly(s) {
  for (var i = 0; i < s.length; i++) {
    var c = s.charCodeAt(i);
    if (c < WC_HANGUL_BASE || c > 55203) return false;
  }
  return s.length > 0;
}

/* ---------- 사전 조회 ---------- */
/* 요정이가 아는 낱말인지 (Tier 1 + Tier 2). 아이의 정답 판정에는 쓰지 않는다. */
function wcInDict(word) {
  if (WORDCHAIN_CAT_OF[word] !== undefined) return true;
  var list = WORDCHAIN_EXT_BY_FIRST[word.charAt(0)];
  if (list) {
    for (var i = 0; i < list.length; i++) if (list[i] === word) return true;
  }
  return false;
}
/* 끝 글자 ch 뒤에 올 수 있는, 아직 안 쓴 낱말들 (index 를 지정해 티어를 고른다) */
function wcCandidatesIn(index, ch, extraUsed) {
  var variants = wcStartVariants(ch), out = [], i, j, list, w;
  for (i = 0; i < variants.length; i++) {
    list = index[variants[i]];
    if (!list) continue;
    for (j = 0; j < list.length; j++) {
      w = list[j];
      if (wordchain.used[w]) continue;
      if (extraUsed && extraUsed[w]) continue;
      out.push(w);
    }
  }
  return out;
}
function wcCandidates(ch, extraUsed) {
  return wcCandidatesIn(WORDCHAIN_BY_FIRST, ch, extraUsed);
}
function wcCandidatesExt(ch, extraUsed) {
  return wcCandidatesIn(WORDCHAIN_EXT_BY_FIRST, ch, extraUsed);
}
/* 그 낱말을 냈을 때 요정이가 이을 수 있는 낱말 개수 (두 티어 합산) */
function wcNextCount(word) {
  var extra = {};
  extra[word] = true;
  var ch = word.charAt(word.length - 1);
  return wcCandidates(ch, extra).length + wcCandidatesExt(ch, extra).length;
}

/* ---------- 요정이의 낱말 선택 ---------- */
function wcPickFairyWord(ch) {
  /* 초등 어휘(Tier 1)를 먼저 쓰고, 이을 낱말이 없을 때만 확장 어휘(Tier 2)로 내려간다 */
  var pick = wcPickFrom(wcCandidates(ch));
  if (pick !== null) return pick;
  return wcPickFrom(wcCandidatesExt(ch));
}
function wcPickFrom(cands) {
  var safe = [], easy = [], hard = [], i, n;
  for (i = 0; i < cands.length; i++) {
    n = wcNextCount(cands[i]);
    if (n === 0) continue;                 /* 한방단어는 절대 쓰지 않음 */
    safe.push(cands[i]);
    if (n >= 8) easy.push(cands[i]);
    else if (n <= 4) hard.push(cands[i]);
  }
  if (safe.length === 0) return null;      /* 이을 낱말이 없음 → 항복 */

  /* --- 여기서부터 후보를 단계적으로 좁힌다 (각 단계는 결과가 비면 건너뛴다) --- */
  var pool;
  /* 1단계: 이어가기 난이도 — 80% 쉬운 낱말 / 20% 조금 생각해야 하는 낱말 */
  if (Math.random() < 0.2 && hard.length > 0) pool = hard;
  else pool = easy.length > 0 ? easy : safe;

  /* 2단계: 초등 어휘 우선 (중급 추상어보다 아이가 아는 낱말을 먼저) */
  var elementary = [];
  for (i = 0; i < pool.length; i++) {
    if (WORDCHAIN_EASY[pool[i]]) elementary.push(pool[i]);
  }
  if (elementary.length > 0) pool = elementary;

  /* 3단계: 2~3글자 우선 (긴 한자어 회피) */
  var shortPool = [];
  for (i = 0; i < pool.length; i++) {
    if (pool[i].length <= 3) shortPool.push(pool[i]);
  }
  if (shortPool.length > 0) pool = shortPool;

  /* 주제 모드면 같은 주제 낱말을 우선 (분위기 유지) */
  if (wordchain.catId !== 0) {
    var themed = [];
    for (i = 0; i < pool.length; i++) {
      if (WORDCHAIN_CAT_OF[pool[i]] === wordchain.catId) themed.push(pool[i]);
    }
    if (themed.length > 0 && Math.random() < 0.7) pool = themed;
  }
  return pool[randInt(0, pool.length - 1)];
}
function wcPickStartWord() {
  var pool = [], i, w;
  for (i = 0; i < WORDCHAIN_WORDS.length; i++) {
    w = WORDCHAIN_WORDS[i];
    if (w.length !== 2) continue;
    if (wordchain.used[w]) continue;
    if (wordchain.catId !== 0 && WORDCHAIN_CAT_OF[w] !== wordchain.catId) continue;
    if (wcNextCount(w) < 8) continue;
    pool.push(w);
  }
  if (pool.length === 0) {
    for (i = 0; i < WORDCHAIN_WORDS.length; i++) {
      w = WORDCHAIN_WORDS[i];
      if (wordchain.used[w]) continue;
      if (wcNextCount(w) >= 5) pool.push(w);
    }
  }
  if (pool.length === 0) return null;
  return pool[randInt(0, pool.length - 1)];
}

/* ---------- 화면: 주제 선택 ---------- */
function goToWordChainCategory() {
  wcEnsureIndex();
  var grid = document.getElementById("wcCategoryGrid");
  grid.innerHTML = "";
  WORDCHAIN_CATEGORIES.forEach(function (cat) {
    var best = wcGetBest(cat.id);
    var btn = document.createElement("div");
    btn.className = "wc-cat-btn";
    btn.innerHTML =
      '<div class="wc-cat-emoji">' + cat.emoji + '</div>' +
      '<div class="wc-cat-body"><div class="wc-cat-name">' + cat.name + '</div>' +
      '<div class="wc-cat-desc">' + cat.desc + '</div></div>' +
      '<div class="wc-cat-best">' + (best.words > 0 ? "최고 낱말 " + best.words + "개" : "") + '</div>';
    btn.onclick = function () { startWordChain(cat.id, cat.name); };
    grid.appendChild(btn);
  });
  showScreen("screen-wc-category");
}

/* ---------- 최고 기록 ---------- */
function wcGetBest(catId) {
  try {
    var raw = localStorage.getItem(WC_STORAGE_BEST + currentProfile.id);
    var all = raw ? JSON.parse(raw) : {};
    var v = all[catId];
    return v ? v : { words: 0, score: 0 };
  } catch (e) { return { words: 0, score: 0 }; }
}
function wcSaveBest(catId, words, score) {
  try {
    var raw = localStorage.getItem(WC_STORAGE_BEST + currentProfile.id);
    var all = raw ? JSON.parse(raw) : {};
    var cur = all[catId] || { words: 0, score: 0 };
    var isNew = false;
    if (words > cur.words) { cur.words = words; isNew = true; }
    if (score > cur.score) { cur.score = score; isNew = true; }
    all[catId] = cur;
    localStorage.setItem(WC_STORAGE_BEST + currentProfile.id, JSON.stringify(all));
    return isNew;
  } catch (e) { return false; }
}

/* ---------- 게임 시작 ---------- */
function startWordChain(catId, catName) {
  wcEnsureIndex();
  wordchain.catId = catId;
  wordchain.catName = catName;
  wordchain.chain = [];
  wordchain.used = {};
  wordchain.myCount = 0;
  wordchain.bonusCount = 0;
  wordchain.wins = 0;
  wordchain.round = 1;
  wordchain.startTime = Date.now();
  wordchain.finished = false;
  wordchain.locked = false;
  wordchain.lastWasUnknown = false;

  document.getElementById("wcChainWindow").innerHTML = "";
  document.getElementById("wcInput").value = "";
  document.getElementById("wcTitle").textContent = "🔗 끝말잇기 · " + catName;
  wcUpdateScoreBar();
  showScreen("screen-wc");

  var first = wcPickStartWord();
  wcAddChainWord(first, "fairy");
  wcAppendBubble("fairy", "내가 먼저 시작할게! \u201c" + first + "\u201d");
  wcStartTurnTimer();
  wcFocusInput();
}
function wcFocusInput() {
  setTimeout(function () {
    var el = document.getElementById("wcInput");
    if (el) el.focus();
  }, 50);
}

/* ---------- 말풍선 / 체인 ---------- */
function wcAppendBubble(role, text) {
  var win = document.getElementById("wcChainWindow");
  var b = document.createElement("div");
  b.className = "chat-bubble " + (role === "fairy" ? "mascot" : "user");
  b.textContent = text;
  win.appendChild(b);
  win.scrollTop = win.scrollHeight;
}
function wcAddChainWord(word, by) {
  var bonus = (wordchain.catId !== 0 && WORDCHAIN_CAT_OF[word] === wordchain.catId);
  wordchain.chain.push({ w: word, by: by, bonus: bonus });
  wordchain.used[word] = true;
  if (by === "me") {
    wordchain.myCount += 1;
    if (bonus) wordchain.bonusCount += 1;
  }
  wcUpdateScoreBar();
}
function wcScore() {
  return wordchain.myCount * 10 + wordchain.bonusCount * 5 + wordchain.wins * WC_WIN_BONUS;
}
function wcUpdateScoreBar() {
  var last = wordchain.chain.length > 0 ? wordchain.chain[wordchain.chain.length - 1].w : "";
  var nextCh = last ? last.charAt(last.length - 1) : "";
  var variants = nextCh ? wcStartVariants(nextCh) : [];
  var tailCh = variants.length > 0 ? variants[variants.length - 1] : nextCh;
  document.getElementById("wcNextChar").innerHTML = variants.length > 1
    ? "다음은 <b>" + variants.join("</b> 또는 <b>") + "</b>" + josaRo(tailCh) + " 시작!"
    : (nextCh ? "다음은 <b>" + nextCh + "</b>" + josaRo(nextCh) + " 시작!" : "");
  document.getElementById("wcScoreInfo").textContent =
    "낱말 " + wordchain.myCount + "개 · " + wcScore() + "점" +
    (wordchain.wins > 0 ? " · 🏆" + wordchain.wins : "");
}

/* ---------- 턴 타이머 ---------- */
function wcStartTurnTimer() {
  wcStopTurnTimer();
  wordchain.turnEndAt = Date.now() + WC_TURN_SECONDS * 1000;
  wcTickTimer();
  wordchain.timerHandle = setInterval(wcTickTimer, 500);
}
function wcStopTurnTimer() {
  if (wordchain.timerHandle) { clearInterval(wordchain.timerHandle); wordchain.timerHandle = null; }
}
function wcTickTimer() {
  if (wordchain.finished) return;
  var remain = wordchain.turnEndAt - Date.now();
  var el = document.getElementById("wcTimer");
  if (remain <= 0) {
    el.textContent = "시간 종료!";
    wcStopTurnTimer();
    finishWordChain("timeout");
    return;
  }
  var sec = Math.ceil(remain / 1000);
  el.textContent = "남은 시간 " + sec + "초";
  el.className = "quiz-timer" + (sec <= 10 ? " wc-hurry" : "");
}

/* ---------- 아이의 낱말 제출 ---------- */
function submitWordChainWord() {
  if (wordchain.finished || wordchain.locked) return;
  var input = document.getElementById("wcInput");
  var word = wcNormalize(input.value);
  if (word === "") return;

  var lastEntry = wordchain.chain[wordchain.chain.length - 1];
  var lastCh = lastEntry.w.charAt(lastEntry.w.length - 1);
  var allowed = wcStartVariants(lastCh);

  /* 1) 한글 2글자 이상 */
  if (word.length < 2 || !wcIsHangulOnly(word)) {
    wcRetry("한글 두 글자 이상으로 써 줘!");
    return;
  }
  /* 2) 첫 글자 확인 (두음법칙 허용) */
  var okStart = false;
  for (var i = 0; i < allowed.length; i++) if (word.charAt(0) === allowed[i]) okStart = true;
  if (!okStart) {
    var lastAllowed = allowed[allowed.length - 1];
    wcRetry("\u201c" + allowed.join("\u201d 또는 \u201c") + "\u201d" + josaRo(lastAllowed) +
            " 시작하는 낱말이어야 해!");
    return;
  }
  /* 3) 중복 확인 */
  if (wordchain.used[word]) {
    wcRetry("\u201c" + word + "\u201d" + josa(word, "은", "는") + " 벌써 썼어! 다른 낱말로 해 보자");
    return;
  }
  /* 사전에 없어도 연결만 되면 인정한다 (v1.7) */
  var known = wcInDict(word);

  /* 통과 */
  input.value = "";
  wcAddChainWord(word, "me");
  var entry = wordchain.chain[wordchain.chain.length - 1];
  wcAppendBubble("me", word + (entry.bonus ? "  ✨+5" : ""));
  /* 모르는 낱말에 대한 반응은 요정이 차례에서 한다 (이을 수 있는지 확인한 뒤 말해야 자연스럽다) */
  wordchain.lastWasUnknown = !known;
  wcStopTurnTimer();
  wordchain.locked = true;
  document.getElementById("wcTimer").textContent = "요정이가 생각하는 중…";
  setTimeout(wcFairyTurn, 700);
}
function wcRetry(msg) {
  wcAppendBubble("fairy", msg);
  var input = document.getElementById("wcInput");
  input.value = "";
  wcFocusInput();
}

/* ---------- 요정이의 차례 ---------- */
function wcFairyTurn() {
  if (wordchain.finished) return;
  var lastEntry = wordchain.chain[wordchain.chain.length - 1];
  var lastCh = lastEntry.w.charAt(lastEntry.w.length - 1);
  var pick = wcPickFairyWord(lastCh);

  if (pick === null) {
    /* 요정이가 막혔다 → 라운드 승리 보너스를 주고 새 낱말로 계속 (무한 모드) */
    wordchain.wins += 1;
    wordchain.round += 1;
    wcUpdateScoreBar();
    if (wordchain.lastWasUnknown) {
      wcAppendBubble("fairy",
        wcFillWord(WC_UNKNOWN_GIVEUP_REPLIES[randInt(0, WC_UNKNOWN_GIVEUP_REPLIES.length - 1)],
                   lastEntry.w) + " +" + WC_WIN_BONUS + "점");
    } else {
      wcAppendBubble("fairy", "우와… \u201c" + lastEntry.w + "\u201d 다음을 못 찾겠어. 이 라운드는 네가 이겼어! 🏆 +" + WC_WIN_BONUS + "점");
    }
    var fresh = wcPickStartWord();
    if (fresh === null) {                       /* 사전을 거의 다 써버린 경우 */
      wordchain.locked = false;
      finishWordChain("clear");
      return;
    }
    wordchain.lastWasUnknown = false;
    wcAddChainWord(fresh, "fairy");
    wcAppendBubble("fairy", wordchain.round + "라운드 시작! \u201c" + fresh + "\u201d");
    wordchain.locked = false;
    wcStartTurnTimer();
    wcFocusInput();
    return;
  }
  if (wordchain.lastWasUnknown) {
    wcAppendBubble("fairy",
      wcFillWord(WC_UNKNOWN_REPLIES[randInt(0, WC_UNKNOWN_REPLIES.length - 1)], lastEntry.w));
  }
  wcAddChainWord(pick, "fairy");
  wcAppendBubble("fairy", wordchain.lastWasUnknown ? "그럼 나는 \u201c" + pick + "\u201d!" : pick);
  wordchain.lastWasUnknown = false;
  wordchain.locked = false;
  wcStartTurnTimer();
  wcFocusInput();
}

/* ---------- 포기 ---------- */
function giveUpWordChain() {
  if (wordchain.finished) return;
  finishWordChain("giveup");
}

/* ---------- 결과 ---------- */
function finishWordChain(reason) {
  if (wordchain.finished) return;
  wordchain.finished = true;
  wcStopTurnTimer();

  var score = wcScore();
  var elapsedSec = Math.round((Date.now() - wordchain.startTime) / 1000);

  var earned = 0;
  if (score >= 350) earned = 3;
  else if (score >= 200) earned = 2;
  else if (score >= 100) earned = 1;
  if (earned > 0) addStickers(currentProfile.id, earned);

  var isBest = wcSaveBest(wordchain.catId, wordchain.myCount, score);

  saveRecordEntry(currentProfile.id, {
    date: new Date().toISOString(),
    subject: "wordchain",
    level: wordchain.catName,
    mode: "endless",
    targetValue: null,
    correct: wordchain.myCount,
    total: wordchain.myCount,
    score: score,
    wins: wordchain.wins,
    reason: reason,
    elapsedSec: elapsedSec
  });

  document.getElementById("wcResultEmoji").textContent =
    wordchain.wins > 0 ? "🏆" : (score >= 200 ? "🎉" : "💪");
  document.getElementById("wcResultScore").textContent =
    "낱말 " + wordchain.myCount + "개 · " + score + "점";

  var reasonText =
    reason === "clear" ? "쓸 수 있는 낱말을 거의 다 썼어요!" :
    reason === "timeout" ? "시간이 다 됐어요." : "여기서 멈췄어요.";
  document.getElementById("wcResultDetail").textContent =
    wordchain.catName + " · " + reasonText +
    (wordchain.wins > 0 ? " · 요정이를 " + wordchain.wins + "번 막았어요 🏆" : "") +
    (wordchain.bonusCount > 0 ? " · 주제 보너스 " + wordchain.bonusCount + "개" : "") +
    " · " + Math.floor(elapsedSec / 60) + "분 " + (elapsedSec % 60) + "초";
  document.getElementById("wcResultBest").textContent =
    isBest ? "🎊 최고 기록을 새로 세웠어요!" : "내 최고 기록: 낱말 " + wcGetBest(wordchain.catId).words + "개";

  var stickerBox = document.getElementById("wcResultStickers");
  stickerBox.innerHTML = "";
  for (var i = 0; i < earned; i++) {
    var s = document.createElement("div");
    s.className = "sticker earned";
    s.textContent = "⭐";
    stickerBox.appendChild(s);
  }

  var listBox = document.getElementById("wcResultChain");
  listBox.innerHTML = "";
  wordchain.chain.forEach(function (e) {
    var chip = document.createElement("span");
    chip.className = "wc-chip " + (e.by === "me" ? "me" : "fairy") + (e.bonus ? " bonus" : "");
    chip.textContent = e.w;
    listBox.appendChild(chip);
  });

  showScreen("screen-wc-result");
}
function retryWordChain() {
  startWordChain(wordchain.catId, wordchain.catName);
}

/* ---------- 초기 진입 ---------- */
window.onload = function () {
  var lastId = localStorage.getItem(STORAGE_LAST_PROFILE);
  var profiles = loadProfiles();
  var last = profiles.filter(function (p) { return p.id === lastId; })[0];
  if (last) {
    selectProfile(last.id);
  } else {
    goToProfileSelect();
  }
  /* 실행 시 새 버전 확인, 그리고 앱으로 되돌아올 때마다 다시 확인 */
  checkForUpdate();
  if (document.addEventListener) {
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) checkForUpdate();
    });
  }
};
