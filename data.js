/* ============================================================
   data.js — 콘텐츠 데이터 뱅크 (v1.0)
   - 국어 낱말 게임(초성 퀴즈) 단어 뱅크
   - 영어 단어 퀴즈 뱅크
   - 수학 문제 생성기
   - 구구단 게임 생성기
   ============================================================ */

/* ---------- 국어: 초성 퀴즈 단어 뱅크 (난이도 1~5, 각 50개) ---------- */
var KOREAN_WORDS = {
     1: [
        { word: "사과", hint: "빨갛고 동그란 과일" },
        { word: "학교", hint: "공부하러 가는 곳" },
        { word: "친구", hint: "함께 노는 사람" },
        { word: "구름", hint: "하늘에 떠 있는 것" },
        { word: "나무", hint: "뿌리와 잎이 있는 식물" },
        { word: "우산", hint: "비 올 때 쓰는 것" },
        { word: "책상", hint: "공부할 때 쓰는 가구" },
        { word: "강아지", hint: "멍멍 짖는 동물" },
        { word: "바다", hint: "짠물이 가득한 곳" },
        { word: "연필", hint: "글씨 쓰는 도구" },
        { word: "바지", hint: "다리에 입는 옷" },
        { word: "모자", hint: "머리에 쓰는 것" },
        { word: "신발", hint: "발에 신는 것" },
        { word: "시계", hint: "시간을 알려주는 도구" },
        { word: "창문", hint: "방에 있는 유리로 된 문" },
        { word: "침대", hint: "잠을 자는 가구" },
        { word: "이불", hint: "잠잘 때 덮는 것" },
        { word: "베개", hint: "잠잘 때 머리를 받치는 것" },
        { word: "거울", hint: "얼굴을 비춰보는 물건" },
        { word: "식탁", hint: "밥을 먹는 탁자" },
        { word: "의자", hint: "앉는 가구" },
        { word: "접시", hint: "음식을 담는 그릇" },
        { word: "숟가락", hint: "밥을 떠먹는 도구" },
        { word: "젓가락", hint: "음식을 집는 도구" },
        { word: "컵", hint: "물을 마시는 그릇" },
        { word: "비누", hint: "몸을 씻을 때 쓰는 것" },
        { word: "칫솔", hint: "이를 닦는 도구" },
        { word: "수건", hint: "몸을 닦는 천" },
        { word: "가방", hint: "물건을 넣어 메는 것" },
        { word: "지갑", hint: "돈을 넣는 물건" },
        { word: "우유", hint: "소에게서 나오는 하얀 음료" },
        { word: "빵", hint: "밀가루로 구운 음식" },
        { word: "과자", hint: "간식으로 먹는 것" },
        { word: "사탕", hint: "달콤한 간식" },
        { word: "풍선", hint: "바람을 넣어 부풀리는 것" },
        { word: "인형", hint: "아이들이 가지고 노는 장난감" },
        { word: "공원", hint: "나무와 벤치가 있는 쉬는 곳" },
        { word: "병원", hint: "아프면 가는 곳" },
        { word: "약국", hint: "약을 사는 곳" },
        { word: "시장", hint: "물건을 사고파는 곳" },
        { word: "기차", hint: "철길을 달리는 탈것" },
        { word: "비행기", hint: "하늘을 나는 탈것" },
        { word: "버스", hint: "여러 사람이 타는 큰 차" },
        { word: "택시", hint: "돈을 내고 타는 차" },
        { word: "달력", hint: "날짜를 보여주는 것" },
        { word: "일기", hint: "하루 있었던 일을 적는 글" },
        { word: "편지", hint: "마음을 담아 쓰는 글" },
        { word: "그림", hint: "붓이나 연필로 그리는 것" },
        { word: "노래", hint: "부르는 음악" },
        { word: "동전", hint: "돈으로 쓰는 둥근 금속" }
          ],
     2: [
        { word: "무지개", hint: "비 온 뒤 하늘에 뜨는 일곱 빛깔" },
        { word: "도서관", hint: "책을 빌리는 곳" },
        { word: "냉장고", hint: "음식을 차갑게 보관하는 가전제품" },
        { word: "달리기", hint: "빠르게 뛰는 운동" },
        { word: "눈사람", hint: "겨울에 눈으로 만드는 것" },
        { word: "자전거", hint: "두 바퀴로 타는 탈것" },
        { word: "놀이터", hint: "그네와 미끄럼틀이 있는 곳" },
        { word: "김밥", hint: "밥과 재료를 김에 말아 만든 음식" },
        { word: "달걀", hint: "닭이 낳는 것" },
        { word: "안경", hint: "눈이 나쁠 때 쓰는 것" },
        { word: "우체국", hint: "편지를 부치는 곳" },
        { word: "소방차", hint: "불을 끄는 차" },
        { word: "경찰관", hint: "도둑을 잡고 질서를 지키는 사람" },
        { word: "미용실", hint: "머리를 자르는 곳" },
        { word: "수영장", hint: "물놀이를 하는 곳" },
        { word: "놀이공원", hint: "롤러코스터 같은 놀이기구가 있는 곳" },
        { word: "문구점", hint: "학용품을 파는 가게" },
        { word: "빵집", hint: "빵을 파는 가게" },
        { word: "편의점", hint: "늦게까지 문을 여는 작은 가게" },
        { word: "신호등", hint: "빨간불 초록불이 있는 것" },
        { word: "지하철", hint: "땅 밑으로 다니는 기차" },
        { word: "운동장", hint: "학교에서 뛰노는 넓은 곳" },
        { word: "체육관", hint: "실내에서 운동하는 곳" },
        { word: "급식실", hint: "학교에서 밥을 먹는 곳" },
        { word: "교무실", hint: "선생님들이 계신 곳" },
        { word: "보건실", hint: "다치면 가는 학교 안의 방" },
        { word: "알림장", hint: "학교에서 전달할 내용을 적는 공책" },
        { word: "받아쓰기", hint: "불러주는 말을 듣고 쓰는 것" },
        { word: "딱지치기", hint: "딱지를 쳐서 뒤집는 놀이" },
        { word: "술래잡기", hint: "술래가 친구들을 잡는 놀이" },
        { word: "숨바꼭질", hint: "숨은 사람을 찾는 놀이" },
        { word: "종이접기", hint: "종이를 접어 모양을 만드는 것" },
        { word: "색종이", hint: "여러 색깔의 종이" },
        { word: "크레파스", hint: "그림 그릴 때 쓰는 색칠 도구" },
        { word: "스케치북", hint: "그림을 그리는 공책" },
        { word: "리코더", hint: "불어서 소리내는 악기" },
        { word: "실로폰", hint: "두드려서 소리내는 악기" },
        { word: "태권도", hint: "발차기를 하는 우리나라 무술" },
        { word: "줄넘기", hint: "줄을 넘는 운동" },
        { word: "눈싸움", hint: "눈을 뭉쳐 던지는 놀이" },
        { word: "물놀이", hint: "물에서 노는 것" },
        { word: "텐트", hint: "캠핑할 때 치는 천막" },
        { word: "낚시터", hint: "물고기를 낚는 곳" },
        { word: "동물원", hint: "여러 동물을 볼 수 있는 곳" },
        { word: "식물원", hint: "여러 식물을 기르는 곳" },
        { word: "수족관", hint: "물고기를 구경하는 곳" },
        { word: "미끄럼틀", hint: "놀이터에 있는 미끄러지는 기구" },
        { word: "시소", hint: "둘이 마주 앉아 오르내리는 놀이기구" },
        { word: "방학숙제", hint: "방학 동안 내주는 학교 숙제" },
        { word: "알람시계", hint: "정해진 시간에 울리는 시계" }
          ],
     3: [
        { word: "대한민국", hint: "우리나라의 이름" },
        { word: "곤충채집", hint: "여름방학 숙제로 자주 하는 것" },
        { word: "온도계", hint: "온도를 재는 도구" },
        { word: "저금통", hint: "동전을 모으는 통" },
        { word: "태극기", hint: "우리나라 국기" },
        { word: "화산폭발", hint: "산에서 용암이 터져 나오는 현상" },
        { word: "지구본", hint: "지구 모양을 본떠 만든 모형" },
        { word: "탐험가", hint: "새로운 곳을 찾아다니는 사람" },
        { word: "현미경", hint: "아주 작은 것을 크게 보는 도구" },
        { word: "박물관", hint: "옛날 물건을 전시하는 곳" },
        { word: "삼국시대", hint: "고구려, 백제, 신라가 있던 시대" },
        { word: "자연재해", hint: "태풍이나 지진처럼 자연이 일으키는 피해" },
        { word: "화재대피", hint: "불이 났을 때 안전하게 피하는 것" },
        { word: "안전교육", hint: "위험을 피하는 방법을 배우는 교육" },
        { word: "소화기", hint: "불을 끄는 도구" },
        { word: "지진훈련", hint: "지진에 대비해 미리 해보는 훈련" },
        { word: "태양계", hint: "태양과 그 주위를 도는 행성들의 무리" },
        { word: "나침반", hint: "방향을 알려주는 도구" },
        { word: "돋보기", hint: "물체를 크게 보여주는 도구" },
        { word: "습도계", hint: "공기 중 습기를 재는 도구" },
        { word: "농기구", hint: "농사지을 때 쓰는 도구" },
        { word: "발전소", hint: "전기를 만드는 곳" },
        { word: "정수기", hint: "물을 깨끗하게 걸러주는 기계" },
        { word: "태양전지", hint: "태양빛으로 전기를 만드는 장치" },
        { word: "공룡화석", hint: "옛날 공룡의 흔적이 남은 돌" },
        { word: "유적지", hint: "옛날 사람들이 남긴 자취가 있는 곳" },
        { word: "세계지도", hint: "세계 여러 나라를 나타낸 지도" },
        { word: "위도경도", hint: "지구 위 위치를 나타내는 선" },
        { word: "사계절", hint: "봄 여름 가을 겨울" },
        { word: "기상청", hint: "날씨를 예보하는 기관" },
        { word: "일기예보", hint: "날씨를 미리 알려주는 방송" },
        { word: "온실가스", hint: "지구를 뜨겁게 만드는 기체" },
        { word: "곤충표본", hint: "곤충을 관찰하기 위해 보관한 것" },
        { word: "생물분류", hint: "생물을 종류별로 나누는 것" },
        { word: "먹이사슬", hint: "생물들이 서로 먹고 먹히는 관계" },
        { word: "광물자원", hint: "땅속에서 캐내는 자원" },
        { word: "민속촌", hint: "옛날 생활 모습을 볼 수 있는 마을" },
        { word: "전통시장", hint: "오래전부터 있던 물건 사고파는 곳" },
        { word: "국립공원", hint: "나라가 보호하는 자연 공원" },
        { word: "문화유산", hint: "후손에게 물려줄 소중한 문화" },
        { word: "세시풍속", hint: "명절마다 하는 전통 풍습" },
        { word: "강강술래", hint: "우리나라 전통 놀이 중 하나" },
        { word: "판소리", hint: "우리나라 전통 노래 이야기" },
        { word: "탈춤", hint: "탈을 쓰고 추는 우리 전통 춤" },
        { word: "씨름", hint: "두 사람이 힘을 겨루는 우리 전통 운동" },
        { word: "한지공예", hint: "한지로 만드는 전통 공예" },
        { word: "도자기", hint: "흙으로 빚어 구운 그릇" },
        { word: "온돌바닥", hint: "바닥을 데워 난방하는 우리 전통 방식" },
        { word: "향토음식", hint: "그 지역에서 전해오는 음식" },
        { word: "지역축제", hint: "그 지역에서 여는 축제" }
          ],
     4: [
        { word: "광합성", hint: "식물이 빛으로 양분을 만드는 과정" },
        { word: "삼각형", hint: "세 개의 변으로 이루어진 도형" },
        { word: "온실효과", hint: "지구가 점점 따뜻해지는 현상" },
        { word: "분수식", hint: "분자와 분모로 이루어진 수" },
        { word: "민주주의", hint: "국민이 나라의 주인이 되는 정치 제도" },
        { word: "생태계", hint: "생물과 환경이 서로 영향을 주고받는 체계" },
        { word: "화석연료", hint: "석탄, 석유처럼 옛날 생물로 만들어진 연료" },
        { word: "미세먼지", hint: "공기 중에 떠다니는 아주 작은 먼지" },
        { word: "재활용품", hint: "다시 사용할 수 있도록 만든 물건" },
        { word: "역사유적", hint: "옛날 사람들이 남긴 건축물이나 장소" },
        { word: "지방자치", hint: "지역 스스로 다스리는 제도" },
        { word: "삼권분립", hint: "국가 권력을 셋으로 나누는 제도" },
        { word: "국회의원", hint: "법을 만드는 일을 하는 사람" },
        { word: "대통령제", hint: "대통령이 나라를 이끄는 정치 제도" },
        { word: "선거권", hint: "투표할 수 있는 권리" },
        { word: "경제활동", hint: "물건을 만들고 사고파는 활동" },
        { word: "수요공급", hint: "물건을 원하는 양과 파는 양의 관계" },
        { word: "물가상승", hint: "물건값이 오르는 현상" },
        { word: "저작권", hint: "만든 사람의 권리를 보호하는 것" },
        { word: "특허권", hint: "새로운 발명을 보호하는 권리" },
        { word: "지구온난화", hint: "지구 평균 기온이 올라가는 현상" },
        { word: "일식현상", hint: "달이 해를 가리는 현상" },
        { word: "월식현상", hint: "지구가 달을 가리는 현상" },
        { word: "대류현상", hint: "열이 이동하며 순환하는 현상" },
        { word: "증발현상", hint: "물이 기체로 변하는 현상" },
        { word: "응결현상", hint: "기체가 액체로 변하는 현상" },
        { word: "화학반응", hint: "물질이 다른 물질로 변하는 반응" },
        { word: "전기회로", hint: "전기가 흐르는 길" },
        { word: "자기장", hint: "자석의 힘이 미치는 공간" },
        { word: "중력작용", hint: "물체를 끌어당기는 힘의 작용" },
        { word: "부력원리", hint: "물체를 물 위로 뜨게 하는 원리" },
        { word: "소화기관", hint: "음식을 소화시키는 몸속 기관" },
        { word: "순환기관", hint: "피를 순환시키는 몸속 기관" },
        { word: "호흡기관", hint: "숨을 쉬는 몸속 기관" },
        { word: "신경계", hint: "몸의 신호를 전달하는 체계" },
        { word: "유전자", hint: "생물의 특징을 전달하는 요소" },
        { word: "돌연변이", hint: "원래와 다르게 변한 특징" },
        { word: "진화론", hint: "생물이 오랜 시간 변화한다는 이론" },
        { word: "멸종위기", hint: "사라질 위험에 처한 상태" },
        { word: "서식지파괴", hint: "생물이 사는 곳이 사라지는 것" },
        { word: "탄소배출", hint: "이산화탄소를 내보내는 것" },
        { word: "신재생에너지", hint: "다시 만들어 쓸 수 있는 깨끗한 에너지" },
        { word: "풍력발전", hint: "바람의 힘으로 전기를 만드는 것" },
        { word: "수력발전", hint: "물의 힘으로 전기를 만드는 것" },
        { word: "원자력발전", hint: "원자핵 반응으로 전기를 만드는 것" },
        { word: "대체에너지", hint: "기존 에너지를 대신하는 에너지" },
        { word: "환경보호", hint: "자연을 지키고 아끼는 것" },
        { word: "분리배출", hint: "쓰레기를 종류별로 나누어 버리는 것" },
        { word: "탄소중립", hint: "이산화탄소 배출과 흡수를 맞추는 것" },
        { word: "친환경제품", hint: "환경을 생각해 만든 물건" }
          ],
     5: [
        { word: "지속가능성", hint: "환경을 지키며 오래 유지하는 성질" },
        { word: "인공지능", hint: "사람처럼 생각하도록 만든 컴퓨터 기술" },
        { word: "다문화사회", hint: "여러 나라의 문화가 함께 어울려 사는 사회" },
        { word: "기후변화", hint: "지구의 날씨 패턴이 크게 바뀌는 것" },
        { word: "헌법재판소", hint: "법이 헌법에 맞는지 판단하는 기관" },
        { word: "생물다양성", hint: "여러 종류의 생물이 함께 존재하는 정도" },
        { word: "정보통신망", hint: "정보를 주고받는 통신 연결망" },
        { word: "경제성장률", hint: "경제가 얼마나 성장했는지 나타내는 비율" },
        { word: "국제기구", hint: "여러 나라가 함께 만든 조직" },
        { word: "환경오염", hint: "자연이 더러워지고 훼손되는 것" },
        { word: "국제연합", hint: "세계 여러 나라가 모인 평화를 위한 기구" },
        { word: "세계무역기구", hint: "나라 간 무역을 관리하는 국제기구" },
        { word: "국내총생산", hint: "한 나라의 일 년간 생산한 것의 총합" },
        { word: "무역수지", hint: "수출과 수입의 차이" },
        { word: "자유무역협정", hint: "나라 간 무역 장벽을 낮추는 약속" },
        { word: "다국적기업", hint: "여러 나라에서 활동하는 큰 기업" },
        { word: "국제분쟁", hint: "나라 사이에 생기는 갈등" },
        { word: "난민문제", hint: "전쟁이나 재해로 고향을 떠난 사람들의 문제" },
        { word: "인권보호", hint: "사람이 가진 기본 권리를 지키는 것" },
        { word: "양성평등", hint: "남녀가 차별 없이 평등한 것" },
        { word: "사회복지", hint: "국민의 생활을 돕는 나라의 제도" },
        { word: "저출산고령화", hint: "아이는 줄고 노인은 늘어나는 현상" },
        { word: "정보격차", hint: "정보를 이용하는 능력의 차이" },
        { word: "사이버범죄", hint: "인터넷에서 일어나는 범죄" },
        { word: "개인정보보호", hint: "자신의 정보를 지키는 것" },
        { word: "가상현실", hint: "컴퓨터로 만든 가짜 현실 세계" },
        { word: "빅데이터", hint: "아주 많은 양의 정보 자료" },
        { word: "사물인터넷", hint: "물건들이 인터넷으로 연결되는 기술" },
        { word: "우주개발", hint: "우주를 연구하고 이용하는 활동" },
        { word: "인공위성", hint: "지구 주위를 도는 인공 장치" },
        { word: "신소재산업", hint: "새로운 재료를 개발하는 산업" },
        { word: "바이오산업", hint: "생명체를 이용해 만드는 산업" },
        { word: "자율주행", hint: "스스로 운전하는 자동차 기술" },
        { word: "로봇공학", hint: "로봇을 연구하고 만드는 학문" },
        { word: "우주쓰레기", hint: "우주에 떠도는 못 쓰는 물체" },
        { word: "미세플라스틱", hint: "아주 작게 쪼개진 플라스틱 조각" },
        { word: "해양오염", hint: "바다가 더러워지는 것" },
        { word: "사막화현상", hint: "땅이 점점 사막으로 변하는 현상" },
        { word: "생태계교란", hint: "원래 생태계의 균형이 깨지는 것" },
        { word: "외래생물", hint: "원래 그 지역에 없던 다른 곳에서 온 생물" },
        { word: "순환경제", hint: "자원을 아껴 다시 쓰는 경제 방식" },
        { word: "공정무역", hint: "생산자에게 정당한 대가를 주는 무역" },
        { word: "사회적기업", hint: "이익과 공익을 함께 추구하는 기업" },
        { word: "기본소득", hint: "모든 국민에게 조건 없이 주는 돈" },
        { word: "지방분권", hint: "권력을 지역으로 나누어 주는 것" },
        { word: "국민투표", hint: "국민이 직접 참여하는 투표" },
        { word: "언론자유", hint: "자유롭게 의견을 말하고 알릴 수 있는 자유" },
        { word: "사생활보호", hint: "개인의 사생활을 지켜주는 것" },
        { word: "세대갈등", hint: "서로 다른 세대 사이의 갈등" },
        { word: "지구촌시대", hint: "세계가 하나처럼 가까워진 시대" }
          ]
};

/* ---------- 영어: 단어 뜻 맞추기 뱅크 (학년제 1~10단계, 각 100개, 총 1,000낱말) ----------
   출처/검수: LLM 생성 후 스펠링·중복·아동 안전 필터 자동 검증 (build_english.js) */
var ENGLISH_WORDS = {
  1: [
    { word: "apple", meaning: "사과" },
    { word: "banana", meaning: "바나나" },
    { word: "cat", meaning: "고양이" },
    { word: "dog", meaning: "개" },
    { word: "book", meaning: "책" },
    { word: "mom", meaning: "엄마" },
    { word: "dad", meaning: "아빠" },
    { word: "baby", meaning: "아기" },
    { word: "milk", meaning: "우유" },
    { word: "egg", meaning: "달걀" },
    { word: "fish", meaning: "물고기" },
    { word: "bird", meaning: "새" },
    { word: "cow", meaning: "소" },
    { word: "pig", meaning: "돼지" },
    { word: "duck", meaning: "오리" },
    { word: "hen", meaning: "암탉" },
    { word: "bear", meaning: "곰" },
    { word: "lion", meaning: "사자" },
    { word: "fox", meaning: "여우" },
    { word: "frog", meaning: "개구리" },
    { word: "ant", meaning: "개미" },
    { word: "bee", meaning: "벌" },
    { word: "bug", meaning: "벌레" },
    { word: "sun", meaning: "해" },
    { word: "moon", meaning: "달" },
    { word: "star", meaning: "별" },
    { word: "sky", meaning: "하늘" },
    { word: "tree", meaning: "나무" },
    { word: "flower", meaning: "꽃" },
    { word: "grass", meaning: "풀" },
    { word: "leaf", meaning: "잎" },
    { word: "rain", meaning: "비" },
    { word: "snow", meaning: "눈" },
    { word: "water", meaning: "물" },
    { word: "fire", meaning: "불" },
    { word: "red", meaning: "빨강" },
    { word: "blue", meaning: "파랑" },
    { word: "green", meaning: "초록" },
    { word: "yellow", meaning: "노랑" },
    { word: "black", meaning: "검정" },
    { word: "white", meaning: "하양" },
    { word: "pink", meaning: "분홍" },
    { word: "hand", meaning: "손" },
    { word: "foot", meaning: "발" },
    { word: "head", meaning: "머리" },
    { word: "eye", meaning: "눈" },
    { word: "ear", meaning: "귀" },
    { word: "nose", meaning: "코" },
    { word: "mouth", meaning: "입" },
    { word: "hair", meaning: "머리카락" },
    { word: "arm", meaning: "팔" },
    { word: "leg", meaning: "다리" },
    { word: "hat", meaning: "모자" },
    { word: "shoe", meaning: "신발" },
    { word: "sock", meaning: "양말" },
    { word: "ball", meaning: "공" },
    { word: "doll", meaning: "인형" },
    { word: "car", meaning: "자동차" },
    { word: "bus", meaning: "버스" },
    { word: "bike", meaning: "자전거" },
    { word: "boat", meaning: "배" },
    { word: "house", meaning: "집" },
    { word: "door", meaning: "문" },
    { word: "window", meaning: "창문" },
    { word: "bed", meaning: "침대" },
    { word: "chair", meaning: "의자" },
    { word: "table", meaning: "탁자" },
    { word: "cup", meaning: "컵" },
    { word: "spoon", meaning: "숟가락" },
    { word: "fork", meaning: "포크" },
    { word: "plate", meaning: "접시" },
    { word: "bread", meaning: "빵" },
    { word: "rice", meaning: "밥" },
    { word: "meat", meaning: "고기" },
    { word: "soup", meaning: "국" },
    { word: "candy", meaning: "사탕" },
    { word: "cake", meaning: "케이크" },
    { word: "ice cream", meaning: "아이스크림" },
    { word: "juice", meaning: "주스" },
    { word: "tea", meaning: "차" },
    { word: "hot", meaning: "뜨거운" },
    { word: "cold", meaning: "차가운" },
    { word: "big", meaning: "큰" },
    { word: "small", meaning: "작은" },
    { word: "good", meaning: "좋은" },
    { word: "bad", meaning: "나쁜" },
    { word: "happy", meaning: "행복한" },
    { word: "sad", meaning: "슬픈" },
    { word: "up", meaning: "위" },
    { word: "down", meaning: "아래" },
    { word: "in", meaning: "안" },
    { word: "out", meaning: "밖" },
    { word: "yes", meaning: "응, 네" },
    { word: "no", meaning: "아니" },
    { word: "one", meaning: "하나" },
    { word: "two", meaning: "둘" },
    { word: "three", meaning: "셋" },
    { word: "four", meaning: "넷" },
    { word: "five", meaning: "다섯" },
    { word: "hello", meaning: "안녕" }
  ],
  2: [
    { word: "school", meaning: "학교" },
    { word: "teacher", meaning: "선생님" },
    { word: "student", meaning: "학생" },
    { word: "friend", meaning: "친구" },
    { word: "pencil", meaning: "연필" },
    { word: "eraser", meaning: "지우개" },
    { word: "ruler", meaning: "자" },
    { word: "crayon", meaning: "크레용" },
    { word: "desk", meaning: "책상" },
    { word: "bag", meaning: "가방" },
    { word: "paper", meaning: "종이" },
    { word: "glue", meaning: "풀" },
    { word: "scissors", meaning: "가위" },
    { word: "classroom", meaning: "교실" },
    { word: "lesson", meaning: "수업" },
    { word: "morning", meaning: "아침" },
    { word: "afternoon", meaning: "오후" },
    { word: "evening", meaning: "저녁" },
    { word: "night", meaning: "밤" },
    { word: "today", meaning: "오늘" },
    { word: "tomorrow", meaning: "내일" },
    { word: "yesterday", meaning: "어제" },
    { word: "week", meaning: "주, 일주일" },
    { word: "month", meaning: "달, 월" },
    { word: "year", meaning: "해, 년" },
    { word: "spring", meaning: "봄" },
    { word: "summer", meaning: "여름" },
    { word: "fall", meaning: "가을" },
    { word: "winter", meaning: "겨울" },
    { word: "wind", meaning: "바람" },
    { word: "cloud", meaning: "구름" },
    { word: "rainbow", meaning: "무지개" },
    { word: "river", meaning: "강" },
    { word: "mountain", meaning: "산" },
    { word: "sea", meaning: "바다" },
    { word: "beach", meaning: "해변" },
    { word: "park", meaning: "공원" },
    { word: "zoo", meaning: "동물원" },
    { word: "farm", meaning: "농장" },
    { word: "city", meaning: "도시" },
    { word: "town", meaning: "마을" },
    { word: "road", meaning: "길" },
    { word: "bridge", meaning: "다리" },
    { word: "train", meaning: "기차" },
    { word: "plane", meaning: "비행기" },
    { word: "ship", meaning: "배" },
    { word: "subway", meaning: "지하철" },
    { word: "kitchen", meaning: "부엌" },
    { word: "bedroom", meaning: "침실" },
    { word: "bathroom", meaning: "욕실" },
    { word: "garden", meaning: "정원" },
    { word: "wall", meaning: "벽" },
    { word: "floor", meaning: "바닥" },
    { word: "roof", meaning: "지붕" },
    { word: "clock", meaning: "시계" },
    { word: "phone", meaning: "전화기" },
    { word: "computer", meaning: "컴퓨터" },
    { word: "letter", meaning: "편지" },
    { word: "picture", meaning: "그림" },
    { word: "photo", meaning: "사진" },
    { word: "music", meaning: "음악" },
    { word: "song", meaning: "노래" },
    { word: "movie", meaning: "영화" },
    { word: "game", meaning: "놀이, 게임" },
    { word: "story", meaning: "이야기" },
    { word: "grape", meaning: "포도" },
    { word: "orange", meaning: "오렌지" },
    { word: "melon", meaning: "멜론" },
    { word: "peach", meaning: "복숭아" },
    { word: "pear", meaning: "배" },
    { word: "lemon", meaning: "레몬" },
    { word: "carrot", meaning: "당근" },
    { word: "potato", meaning: "감자" },
    { word: "onion", meaning: "양파" },
    { word: "tomato", meaning: "토마토" },
    { word: "corn", meaning: "옥수수" },
    { word: "bean", meaning: "콩" },
    { word: "chicken", meaning: "닭고기" },
    { word: "cheese", meaning: "치즈" },
    { word: "butter", meaning: "버터" },
    { word: "sugar", meaning: "설탕" },
    { word: "salt", meaning: "소금" },
    { word: "breakfast", meaning: "아침 식사" },
    { word: "lunch", meaning: "점심" },
    { word: "dinner", meaning: "저녁 식사" },
    { word: "family", meaning: "가족" },
    { word: "brother", meaning: "형제" },
    { word: "sister", meaning: "자매" },
    { word: "grandma", meaning: "할머니" },
    { word: "grandpa", meaning: "할아버지" },
    { word: "uncle", meaning: "삼촌" },
    { word: "aunt", meaning: "이모, 고모" },
    { word: "name", meaning: "이름" },
    { word: "age", meaning: "나이" },
    { word: "body", meaning: "몸" },
    { word: "face", meaning: "얼굴" },
    { word: "tooth", meaning: "이" },
    { word: "finger", meaning: "손가락" },
    { word: "knee", meaning: "무릎" },
    { word: "heart", meaning: "마음, 심장" }
  ],
  3: [
    { word: "country", meaning: "나라" },
    { word: "world", meaning: "세계" },
    { word: "nature", meaning: "자연" },
    { word: "forest", meaning: "숲" },
    { word: "lake", meaning: "호수" },
    { word: "field", meaning: "들판" },
    { word: "island", meaning: "섬" },
    { word: "desert", meaning: "사막" },
    { word: "weather", meaning: "날씨" },
    { word: "season", meaning: "계절" },
    { word: "sunny", meaning: "맑은" },
    { word: "cloudy", meaning: "흐린" },
    { word: "rainy", meaning: "비 오는" },
    { word: "windy", meaning: "바람 부는" },
    { word: "snowy", meaning: "눈 오는" },
    { word: "warm", meaning: "따뜻한" },
    { word: "cool", meaning: "시원한" },
    { word: "bright", meaning: "밝은" },
    { word: "dark", meaning: "어두운" },
    { word: "quiet", meaning: "조용한" },
    { word: "noisy", meaning: "시끄러운" },
    { word: "strong", meaning: "강한" },
    { word: "weak", meaning: "약한" },
    { word: "heavy", meaning: "무거운" },
    { word: "light", meaning: "가벼운" },
    { word: "tall", meaning: "키가 큰" },
    { word: "wide", meaning: "넓은" },
    { word: "narrow", meaning: "좁은" },
    { word: "deep", meaning: "깊은" },
    { word: "empty", meaning: "텅 빈" },
    { word: "full", meaning: "가득 찬" },
    { word: "hungry", meaning: "배고픈" },
    { word: "thirsty", meaning: "목마른" },
    { word: "tired", meaning: "피곤한" },
    { word: "busy", meaning: "바쁜" },
    { word: "free", meaning: "한가한, 자유로운" },
    { word: "kind", meaning: "친절한" },
    { word: "brave", meaning: "용감한" },
    { word: "honest", meaning: "정직한" },
    { word: "polite", meaning: "예의 바른" },
    { word: "lazy", meaning: "게으른" },
    { word: "smart", meaning: "똑똑한" },
    { word: "careful", meaning: "조심스러운" },
    { word: "pretty", meaning: "예쁜" },
    { word: "rich", meaning: "부유한" },
    { word: "poor", meaning: "가난한" },
    { word: "famous", meaning: "유명한" },
    { word: "special", meaning: "특별한" },
    { word: "different", meaning: "다른" },
    { word: "same", meaning: "같은" },
    { word: "easy", meaning: "쉬운" },
    { word: "hard", meaning: "어려운, 단단한" },
    { word: "important", meaning: "중요한" },
    { word: "answer", meaning: "대답" },
    { word: "question", meaning: "질문" },
    { word: "problem", meaning: "문제" },
    { word: "idea", meaning: "생각" },
    { word: "plan", meaning: "계획" },
    { word: "dream", meaning: "꿈" },
    { word: "hobby", meaning: "취미" },
    { word: "job", meaning: "직업, 일" },
    { word: "doctor", meaning: "의사" },
    { word: "nurse", meaning: "간호사" },
    { word: "farmer", meaning: "농부" },
    { word: "pilot", meaning: "조종사" },
    { word: "cook", meaning: "요리사" },
    { word: "driver", meaning: "운전사" },
    { word: "singer", meaning: "가수" },
    { word: "painter", meaning: "화가" },
    { word: "writer", meaning: "작가" },
    { word: "market", meaning: "시장" },
    { word: "store", meaning: "가게" },
    { word: "bank", meaning: "은행" },
    { word: "library", meaning: "도서관" },
    { word: "hospital", meaning: "병원" },
    { word: "museum", meaning: "박물관" },
    { word: "restaurant", meaning: "식당" },
    { word: "station", meaning: "역" },
    { word: "airport", meaning: "공항" },
    { word: "hotel", meaning: "호텔" },
    { word: "office", meaning: "사무실" },
    { word: "factory", meaning: "공장" },
    { word: "money", meaning: "돈" },
    { word: "price", meaning: "가격" },
    { word: "gift", meaning: "선물" },
    { word: "ticket", meaning: "표" },
    { word: "key", meaning: "열쇠" },
    { word: "map", meaning: "지도" },
    { word: "calendar", meaning: "달력" },
    { word: "newspaper", meaning: "신문" },
    { word: "magazine", meaning: "잡지" },
    { word: "dictionary", meaning: "사전" },
    { word: "notebook", meaning: "공책" },
    { word: "textbook", meaning: "교과서" },
    { word: "homework", meaning: "숙제" },
    { word: "test", meaning: "시험" },
    { word: "subject", meaning: "과목" },
    { word: "history", meaning: "역사" },
    { word: "science", meaning: "과학" },
    { word: "math", meaning: "수학" }
  ],
  4: [
    { word: "travel", meaning: "여행하다" },
    { word: "vacation", meaning: "방학, 휴가" },
    { word: "journey", meaning: "여정" },
    { word: "adventure", meaning: "모험" },
    { word: "culture", meaning: "문화" },
    { word: "language", meaning: "언어" },
    { word: "nation", meaning: "국가" },
    { word: "society", meaning: "사회" },
    { word: "environment", meaning: "환경" },
    { word: "energy", meaning: "에너지" },
    { word: "machine", meaning: "기계" },
    { word: "technology", meaning: "기술" },
    { word: "invention", meaning: "발명" },
    { word: "discovery", meaning: "발견" },
    { word: "experiment", meaning: "실험" },
    { word: "knowledge", meaning: "지식" },
    { word: "information", meaning: "정보" },
    { word: "education", meaning: "교육" },
    { word: "opinion", meaning: "의견" },
    { word: "reason", meaning: "이유" },
    { word: "result", meaning: "결과" },
    { word: "example", meaning: "예시" },
    { word: "chance", meaning: "기회" },
    { word: "choice", meaning: "선택" },
    { word: "decision", meaning: "결정" },
    { word: "promise", meaning: "약속" },
    { word: "message", meaning: "메시지" },
    { word: "experience", meaning: "경험" },
    { word: "memory", meaning: "기억" },
    { word: "future", meaning: "미래" },
    { word: "past", meaning: "과거" },
    { word: "present", meaning: "현재, 선물" },
    { word: "moment", meaning: "순간" },
    { word: "event", meaning: "사건, 행사" },
    { word: "accident", meaning: "사고" },
    { word: "danger", meaning: "위험" },
    { word: "safety", meaning: "안전" },
    { word: "health", meaning: "건강" },
    { word: "exercise", meaning: "운동" },
    { word: "practice", meaning: "연습" },
    { word: "effort", meaning: "노력" },
    { word: "success", meaning: "성공" },
    { word: "failure", meaning: "실패" },
    { word: "goal", meaning: "목표" },
    { word: "skill", meaning: "기술, 솜씨" },
    { word: "talent", meaning: "재능" },
    { word: "courage", meaning: "용기" },
    { word: "patience", meaning: "인내" },
    { word: "kindness", meaning: "친절" },
    { word: "honesty", meaning: "정직" },
    { word: "friendship", meaning: "우정" },
    { word: "relationship", meaning: "관계" },
    { word: "neighbor", meaning: "이웃" },
    { word: "stranger", meaning: "낯선 사람" },
    { word: "guest", meaning: "손님" },
    { word: "leader", meaning: "지도자" },
    { word: "member", meaning: "구성원" },
    { word: "team", meaning: "팀" },
    { word: "group", meaning: "무리, 집단" },
    { word: "crowd", meaning: "군중" },
    { word: "public", meaning: "대중" },
    { word: "population", meaning: "인구" },
    { word: "community", meaning: "공동체" },
    { word: "volunteer", meaning: "자원봉사자" },
    { word: "customer", meaning: "고객, 손님" },
    { word: "owner", meaning: "주인" },
    { word: "manager", meaning: "관리자" },
    { word: "engineer", meaning: "기술자" },
    { word: "scientist", meaning: "과학자" },
    { word: "artist", meaning: "예술가" },
    { word: "musician", meaning: "음악가" },
    { word: "actor", meaning: "배우" },
    { word: "reporter", meaning: "기자" },
    { word: "lawyer", meaning: "변호사" },
    { word: "designer", meaning: "디자이너" },
    { word: "invite", meaning: "초대하다" },
    { word: "decide", meaning: "결정하다" },
    { word: "explain", meaning: "설명하다" },
    { word: "describe", meaning: "묘사하다" },
    { word: "introduce", meaning: "소개하다" },
    { word: "suggest", meaning: "제안하다" },
    { word: "agree", meaning: "동의하다" },
    { word: "disagree", meaning: "반대하다" },
    { word: "compare", meaning: "비교하다" },
    { word: "improve", meaning: "향상시키다" },
    { word: "develop", meaning: "발전시키다" },
    { word: "create", meaning: "만들다, 창조하다" },
    { word: "discover", meaning: "발견하다" },
    { word: "imagine", meaning: "상상하다" },
    { word: "express", meaning: "표현하다" },
    { word: "solve", meaning: "해결하다" },
    { word: "protect", meaning: "보호하다" },
    { word: "respect", meaning: "존중하다" },
    { word: "believe", meaning: "믿다" },
    { word: "realize", meaning: "깨닫다" },
    { word: "receive", meaning: "받다" },
    { word: "offer", meaning: "권하다, 제안하다" },
    { word: "provide", meaning: "제공하다" },
    { word: "prepare", meaning: "준비하다" },
    { word: "continue", meaning: "계속하다" }
  ],
  5: [
    { word: "advice", meaning: "조언, 충고" },
    { word: "amount", meaning: "양, 총액" },
    { word: "appear", meaning: "나타나다, ~처럼 보이다" },
    { word: "borrow", meaning: "빌리다" },
    { word: "build", meaning: "짓다, 세우다" },
    { word: "cause", meaning: "원인, 일으키다" },
    { word: "certain", meaning: "확실한, 어떤" },
    { word: "choose", meaning: "고르다, 선택하다" },
    { word: "clever", meaning: "영리한, 똑똑한" },
    { word: "collect", meaning: "모으다, 수집하다" },
    { word: "common", meaning: "흔한, 공통의" },
    { word: "complete", meaning: "완성하다, 완전한" },
    { word: "contain", meaning: "담고 있다, 포함하다" },
    { word: "correct", meaning: "맞는, 바로잡다" },
    { word: "difficult", meaning: "어려운" },
    { word: "distance", meaning: "거리" },
    { word: "enough", meaning: "충분한, 충분히" },
    { word: "enter", meaning: "들어가다" },
    { word: "expect", meaning: "기대하다, 예상하다" },
    { word: "favorite", meaning: "가장 좋아하는" },
    { word: "finish", meaning: "끝내다, 마치다" },
    { word: "follow", meaning: "따라가다, 따르다" },
    { word: "forget", meaning: "잊다" },
    { word: "gather", meaning: "모으다, 모이다" },
    { word: "guess", meaning: "추측하다" },
    { word: "habit", meaning: "습관" },
    { word: "happen", meaning: "일어나다, 생기다" },
    { word: "healthy", meaning: "건강한" },
    { word: "hope", meaning: "희망, 바라다" },
    { word: "increase", meaning: "늘리다, 증가하다" },
    { word: "interest", meaning: "관심, 흥미" },
    { word: "join", meaning: "함께하다, 가입하다" },
    { word: "learn", meaning: "배우다" },
    { word: "level", meaning: "수준, 단계" },
    { word: "listen", meaning: "듣다, 귀 기울이다" },
    { word: "lonely", meaning: "외로운" },
    { word: "manage", meaning: "해내다, 관리하다" },
    { word: "mistake", meaning: "실수" },
    { word: "notice", meaning: "알아차리다, 알림" },
    { word: "perfect", meaning: "완벽한" },
    { word: "proud", meaning: "자랑스러운" },
    { word: "remember", meaning: "기억하다" },
    { word: "repeat", meaning: "반복하다" },
    { word: "return", meaning: "돌아가다, 돌려주다" },
    { word: "share", meaning: "나누다, 공유하다" },
    { word: "similar", meaning: "비슷한" },
    { word: "simple", meaning: "간단한, 단순한" },
    { word: "spend", meaning: "쓰다, 보내다" },
    { word: "strange", meaning: "이상한, 낯선" },
    { word: "succeed", meaning: "성공하다" },
    { word: "support", meaning: "지지하다, 돕다" },
    { word: "surprise", meaning: "놀라움, 놀라게 하다" },
    { word: "teach", meaning: "가르치다" },
    { word: "thick", meaning: "두꺼운, 빽빽한" },
    { word: "tidy", meaning: "깔끔한, 정돈된" },
    { word: "trust", meaning: "신뢰, 믿다" },
    { word: "understand", meaning: "이해하다" },
    { word: "useful", meaning: "유용한, 쓸모 있는" },
    { word: "usual", meaning: "평소의, 보통의" },
    { word: "visit", meaning: "방문하다" },
    { word: "voice", meaning: "목소리" },
    { word: "wonder", meaning: "궁금해하다, 경이" },
    { word: "arrive", meaning: "도착하다" },
    { word: "bring", meaning: "가져오다, 데려오다" },
    { word: "catch", meaning: "잡다, 붙잡다" },
    { word: "climb", meaning: "오르다, 기어오르다" },
    { word: "draw", meaning: "그리다, 끌다" },
    { word: "drive", meaning: "운전하다" },
    { word: "hold", meaning: "잡다, 들다" },
    { word: "hurry", meaning: "서두르다" },
    { word: "kick", meaning: "차다" },
    { word: "laugh", meaning: "웃다" },
    { word: "move", meaning: "움직이다, 이사하다" },
    { word: "pull", meaning: "당기다" },
    { word: "push", meaning: "밀다" },
    { word: "ride", meaning: "타다" },
    { word: "sell", meaning: "팔다" },
    { word: "sing", meaning: "노래하다" },
    { word: "speak", meaning: "말하다" },
    { word: "swim", meaning: "수영하다" },
    { word: "throw", meaning: "던지다" },
    { word: "touch", meaning: "만지다, 닿다" },
    { word: "turn", meaning: "돌다, 돌리다" },
    { word: "wait", meaning: "기다리다" },
    { word: "win", meaning: "이기다, 얻다" },
    { word: "worry", meaning: "걱정하다" },
    { word: "angry", meaning: "화난" },
    { word: "beautiful", meaning: "아름다운" },
    { word: "clear", meaning: "맑은, 분명한" },
    { word: "delicious", meaning: "맛있는" },
    { word: "exciting", meaning: "신나는, 흥미진진한" },
    { word: "fresh", meaning: "신선한" },
    { word: "funny", meaning: "웃기는, 재미있는" },
    { word: "gentle", meaning: "부드러운, 온화한" },
    { word: "loud", meaning: "시끄러운, 큰 소리의" },
    { word: "lovely", meaning: "사랑스러운" },
    { word: "nervous", meaning: "긴장한, 초조한" },
    { word: "quick", meaning: "빠른" },
    { word: "safe", meaning: "안전한" },
    { word: "sharp", meaning: "날카로운" }
  ],
  6: [
    { word: "ability", meaning: "능력" },
    { word: "achieve", meaning: "이루다, 성취하다" },
    { word: "active", meaning: "활동적인, 적극적인" },
    { word: "actual", meaning: "실제의" },
    { word: "admire", meaning: "존경하다, 감탄하다" },
    { word: "advance", meaning: "발전, 나아가다" },
    { word: "affect", meaning: "영향을 미치다" },
    { word: "ancient", meaning: "고대의, 오래된" },
    { word: "appreciate", meaning: "고마워하다, 진가를 알다" },
    { word: "attention", meaning: "주의, 관심" },
    { word: "attitude", meaning: "태도" },
    { word: "avoid", meaning: "피하다" },
    { word: "balance", meaning: "균형" },
    { word: "benefit", meaning: "이익, 혜택" },
    { word: "century", meaning: "세기, 백 년" },
    { word: "challenge", meaning: "도전, 어려운 일" },
    { word: "character", meaning: "성격, 등장인물" },
    { word: "communicate", meaning: "의사소통하다" },
    { word: "condition", meaning: "상태, 조건" },
    { word: "confident", meaning: "자신감 있는" },
    { word: "connect", meaning: "연결하다" },
    { word: "consider", meaning: "고려하다, 여기다" },
    { word: "control", meaning: "통제, 조절하다" },
    { word: "curious", meaning: "궁금한, 호기심 많은" },
    { word: "custom", meaning: "관습, 풍습" },
    { word: "damage", meaning: "손상, 피해" },
    { word: "difference", meaning: "차이" },
    { word: "direction", meaning: "방향, 지시" },
    { word: "disappear", meaning: "사라지다" },
    { word: "discuss", meaning: "토론하다, 논의하다" },
    { word: "effect", meaning: "효과, 영향" },
    { word: "encourage", meaning: "격려하다, 권하다" },
    { word: "especially", meaning: "특히" },
    { word: "familiar", meaning: "익숙한, 친숙한" },
    { word: "generation", meaning: "세대" },
    { word: "gradual", meaning: "점진적인" },
    { word: "guide", meaning: "안내하다, 안내자" },
    { word: "however", meaning: "그러나, 하지만" },
    { word: "huge", meaning: "거대한" },
    { word: "human", meaning: "인간, 인간의" },
    { word: "influence", meaning: "영향, 영향을 주다" },
    { word: "instead", meaning: "대신에" },
    { word: "invent", meaning: "발명하다" },
    { word: "judge", meaning: "판단하다, 심판" },
    { word: "local", meaning: "지역의, 현지의" },
    { word: "material", meaning: "재료, 물질" },
    { word: "measure", meaning: "측정하다, 재다" },
    { word: "method", meaning: "방법" },
    { word: "modern", meaning: "현대의, 근대의" },
    { word: "natural", meaning: "자연의, 자연스러운" },
    { word: "obvious", meaning: "분명한, 명백한" },
    { word: "occasion", meaning: "경우, 특별한 때" },
    { word: "opportunity", meaning: "기회" },
    { word: "ordinary", meaning: "평범한, 보통의" },
    { word: "organize", meaning: "조직하다, 정리하다" },
    { word: "original", meaning: "원래의, 독창적인" },
    { word: "particular", meaning: "특정한, 특별한" },
    { word: "patient", meaning: "참을성 있는, 환자" },
    { word: "perhaps", meaning: "아마도" },
    { word: "personal", meaning: "개인의, 개인적인" },
    { word: "positive", meaning: "긍정적인" },
    { word: "possible", meaning: "가능한" },
    { word: "precious", meaning: "귀중한, 소중한" },
    { word: "prefer", meaning: "선호하다, 더 좋아하다" },
    { word: "pressure", meaning: "압력, 부담" },
    { word: "prevent", meaning: "막다, 예방하다" },
    { word: "process", meaning: "과정" },
    { word: "produce", meaning: "생산하다, 만들어 내다" },
    { word: "progress", meaning: "진전, 발전" },
    { word: "purpose", meaning: "목적" },
    { word: "quality", meaning: "질, 품질" },
    { word: "quantity", meaning: "양, 수량" },
    { word: "reduce", meaning: "줄이다" },
    { word: "regular", meaning: "규칙적인, 정기적인" },
    { word: "remain", meaning: "남다, 계속 ~이다" },
    { word: "responsible", meaning: "책임이 있는" },
    { word: "sense", meaning: "감각, 느낌" },
    { word: "sincere", meaning: "진실한, 진심 어린" },
    { word: "situation", meaning: "상황" },
    { word: "solution", meaning: "해결책, 용액" },
    { word: "source", meaning: "원천, 출처" },
    { word: "spread", meaning: "퍼지다, 펼치다" },
    { word: "standard", meaning: "기준, 표준" },
    { word: "strength", meaning: "힘, 강점" },
    { word: "stress", meaning: "스트레스, 강조하다" },
    { word: "system", meaning: "체계, 시스템" },
    { word: "tradition", meaning: "전통" },
    { word: "unique", meaning: "독특한, 유일한" },
    { word: "valuable", meaning: "귀중한, 값진" },
    { word: "variety", meaning: "다양성, 종류" },
    { word: "various", meaning: "다양한, 여러 가지의" },
    { word: "whole", meaning: "전체의, 모든" },
    { word: "wisdom", meaning: "지혜" },
    { word: "freedom", meaning: "자유" },
    { word: "justice", meaning: "정의, 공정" },
    { word: "peace", meaning: "평화" },
    { word: "wealth", meaning: "부, 재산" },
    { word: "behavior", meaning: "행동, 행실" },
    { word: "curiosity", meaning: "호기심" },
    { word: "imagination", meaning: "상상력" }
  ],
  7: [
    { word: "abstract", meaning: "추상적인" },
    { word: "accurate", meaning: "정확한" },
    { word: "acquire", meaning: "얻다, 습득하다" },
    { word: "adapt", meaning: "적응하다, 조정하다" },
    { word: "adequate", meaning: "충분한, 적절한" },
    { word: "analyze", meaning: "분석하다" },
    { word: "appropriate", meaning: "적절한, 알맞은" },
    { word: "approach", meaning: "접근하다, 접근법" },
    { word: "approximate", meaning: "대략의, 근사한" },
    { word: "argument", meaning: "논쟁, 주장" },
    { word: "aspect", meaning: "측면, 양상" },
    { word: "assume", meaning: "가정하다, 추정하다" },
    { word: "attempt", meaning: "시도, 시도하다" },
    { word: "aware", meaning: "알고 있는, 인식하는" },
    { word: "capable", meaning: "할 수 있는, 유능한" },
    { word: "circumstance", meaning: "상황, 환경" },
    { word: "combine", meaning: "결합하다, 합치다" },
    { word: "complex", meaning: "복잡한" },
    { word: "concept", meaning: "개념" },
    { word: "conclude", meaning: "결론을 내리다, 끝맺다" },
    { word: "conflict", meaning: "갈등, 충돌" },
    { word: "consequence", meaning: "결과, 영향" },
    { word: "considerable", meaning: "상당한" },
    { word: "consistent", meaning: "일관된, 한결같은" },
    { word: "constant", meaning: "끊임없는, 일정한" },
    { word: "contrast", meaning: "대조, 대비" },
    { word: "contribute", meaning: "기여하다, 이바지하다" },
    { word: "convince", meaning: "설득하다, 확신시키다" },
    { word: "crucial", meaning: "결정적인, 중대한" },
    { word: "definite", meaning: "확실한, 분명한" },
    { word: "demonstrate", meaning: "보여 주다, 증명하다" },
    { word: "deny", meaning: "부인하다, 거절하다" },
    { word: "depend", meaning: "의존하다, ~에 달려 있다" },
    { word: "determine", meaning: "결정하다, 알아내다" },
    { word: "distinguish", meaning: "구별하다" },
    { word: "diverse", meaning: "다양한" },
    { word: "dramatic", meaning: "극적인" },
    { word: "efficient", meaning: "효율적인" },
    { word: "eliminate", meaning: "없애다, 제거하다" },
    { word: "emphasize", meaning: "강조하다" },
    { word: "enormous", meaning: "거대한, 막대한" },
    { word: "ensure", meaning: "보장하다, 확실히 하다" },
    { word: "establish", meaning: "설립하다, 확립하다" },
    { word: "estimate", meaning: "추정하다, 어림잡다" },
    { word: "evaluate", meaning: "평가하다" },
    { word: "eventually", meaning: "결국, 마침내" },
    { word: "evidence", meaning: "증거" },
    { word: "examine", meaning: "조사하다, 검토하다" },
    { word: "exception", meaning: "예외" },
    { word: "expand", meaning: "확장하다, 넓히다" },
    { word: "explore", meaning: "탐험하다, 탐구하다" },
    { word: "extreme", meaning: "극단적인, 극심한" },
    { word: "feature", meaning: "특징, 특색" },
    { word: "flexible", meaning: "유연한, 융통성 있는" },
    { word: "frequent", meaning: "잦은, 빈번한" },
    { word: "function", meaning: "기능, 작동하다" },
    { word: "fundamental", meaning: "근본적인, 기본적인" },
    { word: "generate", meaning: "만들어 내다, 발생시키다" },
    { word: "genuine", meaning: "진짜의, 진심의" },
    { word: "identify", meaning: "확인하다, 알아보다" },
    { word: "immediate", meaning: "즉각적인" },
    { word: "impact", meaning: "영향, 충격" },
    { word: "indicate", meaning: "나타내다, 가리키다" },
    { word: "individual", meaning: "개인, 개개의" },
    { word: "inevitable", meaning: "피할 수 없는, 필연적인" },
    { word: "initial", meaning: "처음의, 초기의" },
    { word: "intense", meaning: "강렬한, 격렬한" },
    { word: "interpret", meaning: "해석하다, 통역하다" },
    { word: "involve", meaning: "포함하다, 관련시키다" },
    { word: "justify", meaning: "정당화하다" },
    { word: "maintain", meaning: "유지하다" },
    { word: "major", meaning: "주요한, 큰" },
    { word: "moreover", meaning: "게다가, 더욱이" },
    { word: "motivate", meaning: "동기를 부여하다" },
    { word: "negative", meaning: "부정적인" },
    { word: "objective", meaning: "객관적인, 목표" },
    { word: "observe", meaning: "관찰하다, 준수하다" },
    { word: "obtain", meaning: "얻다, 구하다" },
    { word: "occur", meaning: "일어나다, 발생하다" },
    { word: "overcome", meaning: "극복하다" },
    { word: "participate", meaning: "참여하다" },
    { word: "perceive", meaning: "인식하다, 감지하다" },
    { word: "permanent", meaning: "영구적인" },
    { word: "phenomenon", meaning: "현상" },
    { word: "potential", meaning: "잠재력, 잠재적인" },
    { word: "previous", meaning: "이전의" },
    { word: "principle", meaning: "원칙, 원리" },
    { word: "priority", meaning: "우선순위" },
    { word: "reflect", meaning: "반영하다, 반사하다" },
    { word: "reject", meaning: "거절하다, 거부하다" },
    { word: "relevant", meaning: "관련 있는, 적절한" },
    { word: "reliable", meaning: "믿을 수 있는" },
    { word: "represent", meaning: "나타내다, 대표하다" },
    { word: "require", meaning: "요구하다, 필요로 하다" },
    { word: "resource", meaning: "자원" },
    { word: "reveal", meaning: "드러내다, 밝히다" },
    { word: "significant", meaning: "중요한, 상당한" },
    { word: "specific", meaning: "구체적인, 특정한" },
    { word: "strategy", meaning: "전략" },
    { word: "structure", meaning: "구조" }
  ],
  8: [
    { word: "category", meaning: "범주, 분류" },
    { word: "commit", meaning: "저지르다, 전념하다" },
    { word: "consist", meaning: "구성되다, 이루어지다" },
    { word: "define", meaning: "정의하다, 규정하다" },
    { word: "distinct", meaning: "뚜렷한, 별개의" },
    { word: "enable", meaning: "가능하게 하다" },
    { word: "essential", meaning: "필수적인, 본질적인" },
    { word: "factor", meaning: "요인, 요소" },
    { word: "figure", meaning: "수치, 인물, 형태" },
    { word: "ignore", meaning: "무시하다" },
    { word: "imply", meaning: "암시하다, 함축하다" },
    { word: "issue", meaning: "문제, 쟁점" },
    { word: "perspective", meaning: "관점, 시각" },
    { word: "predict", meaning: "예측하다" },
    { word: "primary", meaning: "주요한, 최초의" },
    { word: "promote", meaning: "촉진하다, 승진시키다" },
    { word: "propose", meaning: "제안하다" },
    { word: "pursue", meaning: "추구하다, 쫓다" },
    { word: "recognize", meaning: "인식하다, 인정하다" },
    { word: "region", meaning: "지역, 지방" },
    { word: "regard", meaning: "여기다, 간주하다" },
    { word: "relate", meaning: "관련시키다, 연관되다" },
    { word: "remarkable", meaning: "주목할 만한, 놀라운" },
    { word: "respond", meaning: "반응하다, 응답하다" },
    { word: "sufficient", meaning: "충분한" },
    { word: "suitable", meaning: "적합한, 알맞은" },
    { word: "summarize", meaning: "요약하다" },
    { word: "survive", meaning: "살아남다, 생존하다" },
    { word: "tend", meaning: "경향이 있다" },
    { word: "transform", meaning: "변형시키다, 바꾸다" },
    { word: "typical", meaning: "전형적인, 일반적인" },
    { word: "ultimate", meaning: "궁극적인, 최종의" },
    { word: "vary", meaning: "다르다, 달라지다" },
    { word: "vast", meaning: "광대한, 막대한" },
    { word: "adopt", meaning: "채택하다, 입양하다" },
    { word: "characteristic", meaning: "특징, 특유의" },
    { word: "component", meaning: "구성 요소, 부품" },
    { word: "distribute", meaning: "분배하다, 배포하다" },
    { word: "abandon", meaning: "버리다, 포기하다" },
    { word: "absorb", meaning: "흡수하다" },
    { word: "abundant", meaning: "풍부한" },
    { word: "accompany", meaning: "동반하다, 함께 가다" },
    { word: "accomplish", meaning: "성취하다, 이루다" },
    { word: "adjust", meaning: "조정하다, 적응하다" },
    { word: "advantage", meaning: "이점, 장점" },
    { word: "apply", meaning: "적용하다, 지원하다" },
    { word: "approve", meaning: "승인하다, 찬성하다" },
    { word: "arise", meaning: "발생하다, 생기다" },
    { word: "arrange", meaning: "배열하다, 준비하다" },
    { word: "assign", meaning: "할당하다, 맡기다" },
    { word: "assist", meaning: "돕다" },
    { word: "associate", meaning: "연관 짓다, 어울리다" },
    { word: "attain", meaning: "달성하다, 이루다" },
    { word: "attach", meaning: "붙이다, 첨부하다" },
    { word: "available", meaning: "이용할 수 있는" },
    { word: "boundary", meaning: "경계" },
    { word: "brief", meaning: "간단한, 짧은" },
    { word: "capacity", meaning: "용량, 수용력" },
    { word: "classify", meaning: "분류하다" },
    { word: "compensate", meaning: "보상하다" },
    { word: "compose", meaning: "구성하다, 작곡하다" },
    { word: "conduct", meaning: "수행하다, 행동" },
    { word: "constrain", meaning: "제약하다, 제한하다" },
    { word: "construct", meaning: "건설하다, 구성하다" },
    { word: "consume", meaning: "소비하다" },
    { word: "contract", meaning: "계약" },
    { word: "convey", meaning: "전달하다, 운반하다" },
    { word: "cope", meaning: "대처하다" },
    { word: "criterion", meaning: "기준" },
    { word: "decade", meaning: "십 년" },
    { word: "decline", meaning: "감소하다, 거절하다" },
    { word: "defend", meaning: "방어하다, 옹호하다" },
    { word: "demand", meaning: "요구하다, 수요" },
    { word: "detect", meaning: "감지하다, 발견하다" },
    { word: "device", meaning: "장치, 기기" },
    { word: "dimension", meaning: "차원, 크기" },
    { word: "disclose", meaning: "공개하다, 드러내다" },
    { word: "domestic", meaning: "국내의, 가정의" },
    { word: "duration", meaning: "지속 기간" },
    { word: "emerge", meaning: "나타나다, 드러나다" },
    { word: "enforce", meaning: "시행하다, 집행하다" },
    { word: "engage", meaning: "참여시키다, 관여하다" },
    { word: "equip", meaning: "갖추다, 장비하다" },
    { word: "evolve", meaning: "진화하다, 발전하다" },
    { word: "exhibit", meaning: "전시하다, 보이다" },
    { word: "expense", meaning: "비용, 지출" },
    { word: "expert", meaning: "전문가" },
    { word: "expose", meaning: "노출시키다, 드러내다" },
    { word: "extend", meaning: "확장하다, 연장하다" },
    { word: "external", meaning: "외부의" },
    { word: "foundation", meaning: "기초, 토대" },
    { word: "fragile", meaning: "깨지기 쉬운, 연약한" },
    { word: "gain", meaning: "얻다, 획득하다" },
    { word: "generous", meaning: "관대한, 너그러운" },
    { word: "grant", meaning: "부여하다, 승인하다" },
    { word: "hesitate", meaning: "망설이다, 주저하다" },
    { word: "highlight", meaning: "강조하다" },
    { word: "identical", meaning: "동일한" },
    { word: "illustrate", meaning: "설명하다, 예시하다" },
    { word: "inhabit", meaning: "거주하다, 서식하다" }
  ],
  9: [
    { word: "accumulate", meaning: "축적하다, 모으다" },
    { word: "acknowledge", meaning: "인정하다, 시인하다" },
    { word: "advocate", meaning: "옹호하다, 지지자" },
    { word: "alter", meaning: "바꾸다, 변경하다" },
    { word: "ambiguous", meaning: "모호한, 애매한" },
    { word: "anticipate", meaning: "예상하다, 기대하다" },
    { word: "apparent", meaning: "명백한, 겉보기의" },
    { word: "arbitrary", meaning: "임의의, 자의적인" },
    { word: "assess", meaning: "평가하다, 사정하다" },
    { word: "attribute", meaning: "~의 탓으로 돌리다, 속성" },
    { word: "autonomy", meaning: "자율성, 자치" },
    { word: "coherent", meaning: "일관된, 논리 정연한" },
    { word: "collapse", meaning: "붕괴하다, 무너지다" },
    { word: "comprehend", meaning: "이해하다, 파악하다" },
    { word: "comprehensive", meaning: "포괄적인, 종합적인" },
    { word: "compromise", meaning: "타협하다, 절충" },
    { word: "conceive", meaning: "생각해 내다, 구상하다" },
    { word: "confront", meaning: "직면하다, 맞서다" },
    { word: "consecutive", meaning: "연속적인" },
    { word: "consensus", meaning: "합의, 의견 일치" },
    { word: "constitute", meaning: "구성하다, ~이 되다" },
    { word: "contemporary", meaning: "현대의, 동시대의" },
    { word: "contradict", meaning: "모순되다, 반박하다" },
    { word: "contrary", meaning: "반대의, 대조되는" },
    { word: "controversy", meaning: "논란, 논쟁" },
    { word: "cooperate", meaning: "협력하다, 협동하다" },
    { word: "correspond", meaning: "일치하다, 상응하다" },
    { word: "cultivate", meaning: "기르다, 재배하다" },
    { word: "deceive", meaning: "속이다, 기만하다" },
    { word: "dedicate", meaning: "바치다, 헌신하다" },
    { word: "deliberate", meaning: "고의의, 신중한" },
    { word: "derive", meaning: "끌어내다, 유래하다" },
    { word: "deteriorate", meaning: "악화되다, 저하되다" },
    { word: "diminish", meaning: "줄어들다, 감소시키다" },
    { word: "dominate", meaning: "지배하다, 우세하다" },
    { word: "elaborate", meaning: "정교한, 상세히 설명하다" },
    { word: "empirical", meaning: "경험적인, 실증적인" },
    { word: "endure", meaning: "견디다, 지속되다" },
    { word: "enhance", meaning: "향상시키다, 높이다" },
    { word: "evident", meaning: "분명한, 명백한" },
    { word: "evoke", meaning: "불러일으키다, 환기하다" },
    { word: "exceed", meaning: "초과하다, 넘어서다" },
    { word: "explicit", meaning: "명시적인, 분명한" },
    { word: "exploit", meaning: "이용하다, 착취하다" },
    { word: "extract", meaning: "추출하다, 발췌" },
    { word: "facilitate", meaning: "촉진하다, 용이하게 하다" },
    { word: "feasible", meaning: "실현 가능한" },
    { word: "fluctuate", meaning: "변동하다, 오르내리다" },
    { word: "foster", meaning: "육성하다, 촉진하다" },
    { word: "framework", meaning: "체계, 틀" },
    { word: "hypothesis", meaning: "가설" },
    { word: "impose", meaning: "부과하다, 강요하다" },
    { word: "incentive", meaning: "동기, 유인책" },
    { word: "infer", meaning: "추론하다, 유추하다" },
    { word: "inherent", meaning: "내재된, 고유한" },
    { word: "initiate", meaning: "시작하다, 개시하다" },
    { word: "innovative", meaning: "혁신적인" },
    { word: "integrate", meaning: "통합하다, 융합하다" },
    { word: "intricate", meaning: "복잡한, 정교한" },
    { word: "intrinsic", meaning: "본질적인, 고유한" },
    { word: "legitimate", meaning: "정당한, 합법적인" },
    { word: "manipulate", meaning: "조작하다, 다루다" },
    { word: "mutual", meaning: "상호의, 서로의" },
    { word: "notion", meaning: "개념, 생각" },
    { word: "obscure", meaning: "모호한, 무명의" },
    { word: "optimal", meaning: "최적의" },
    { word: "plausible", meaning: "그럴듯한, 타당한" },
    { word: "precise", meaning: "정확한, 정밀한" },
    { word: "presume", meaning: "추정하다, 가정하다" },
    { word: "prevail", meaning: "만연하다, 우세하다" },
    { word: "profound", meaning: "심오한, 깊은" },
    { word: "prominent", meaning: "두드러진, 저명한" },
    { word: "prospect", meaning: "전망, 가능성" },
    { word: "provoke", meaning: "유발하다, 자극하다" },
    { word: "reinforce", meaning: "강화하다, 보강하다" },
    { word: "reluctant", meaning: "꺼리는, 마지못한" },
    { word: "render", meaning: "~하게 만들다, 제공하다" },
    { word: "resemble", meaning: "닮다, 비슷하다" },
    { word: "restore", meaning: "복구하다, 회복시키다" },
    { word: "restrain", meaning: "억제하다, 제지하다" },
    { word: "retain", meaning: "유지하다, 보유하다" },
    { word: "rigid", meaning: "엄격한, 경직된" },
    { word: "sacrifice", meaning: "희생하다, 희생" },
    { word: "scarce", meaning: "부족한, 드문" },
    { word: "sophisticated", meaning: "정교한, 세련된" },
    { word: "spontaneous", meaning: "자발적인, 즉흥적인" },
    { word: "subjective", meaning: "주관적인" },
    { word: "subsequent", meaning: "그다음의, 후속의" },
    { word: "substantial", meaning: "상당한, 실질적인" },
    { word: "subtle", meaning: "미묘한, 섬세한" },
    { word: "sustain", meaning: "지속하다, 지탱하다" },
    { word: "tackle", meaning: "다루다, 씨름하다" },
    { word: "tangible", meaning: "유형의, 명백한" },
    { word: "tolerate", meaning: "참다, 용인하다" },
    { word: "transition", meaning: "전환, 이행" },
    { word: "underlie", meaning: "기초가 되다, 근저에 있다" },
    { word: "undergo", meaning: "겪다, 받다" },
    { word: "valid", meaning: "타당한, 유효한" },
    { word: "vulnerable", meaning: "취약한, 상처받기 쉬운" },
    { word: "yield", meaning: "산출하다, 양보하다" }
  ],
  10: [
    { word: "adhere", meaning: "고수하다, 들러붙다" },
    { word: "aesthetic", meaning: "미적인, 심미적인" },
    { word: "affluent", meaning: "부유한, 풍족한" },
    { word: "aggregate", meaning: "총계, 종합하다" },
    { word: "alleviate", meaning: "완화하다, 경감하다" },
    { word: "allocate", meaning: "할당하다, 배분하다" },
    { word: "ambivalent", meaning: "양가적인, 상반된 감정의" },
    { word: "analogous", meaning: "유사한, 비슷한" },
    { word: "anonymous", meaning: "익명의" },
    { word: "apathy", meaning: "무관심, 냉담" },
    { word: "articulate", meaning: "명료하게 표현하다" },
    { word: "ascertain", meaning: "확인하다, 규명하다" },
    { word: "aspiration", meaning: "열망, 포부" },
    { word: "augment", meaning: "늘리다, 증대하다" },
    { word: "authentic", meaning: "진정한, 진짜의" },
    { word: "benevolent", meaning: "자애로운, 인자한" },
    { word: "candid", meaning: "솔직한, 진솔한" },
    { word: "coincide", meaning: "동시에 일어나다, 일치하다" },
    { word: "commemorate", meaning: "기념하다, 추모하다" },
    { word: "commodity", meaning: "상품, 원자재" },
    { word: "compelling", meaning: "설득력 있는, 강렬한" },
    { word: "compile", meaning: "편집하다, 모으다" },
    { word: "complacent", meaning: "현실에 안주하는, 자기만족의" },
    { word: "comply", meaning: "따르다, 준수하다" },
    { word: "conceal", meaning: "숨기다, 감추다" },
    { word: "conform", meaning: "순응하다, 따르다" },
    { word: "connotation", meaning: "함축, 내포된 의미" },
    { word: "conscientious", meaning: "양심적인, 성실한" },
    { word: "consolidate", meaning: "통합하다, 강화하다" },
    { word: "conspicuous", meaning: "눈에 띄는, 두드러진" },
    { word: "contingent", meaning: "~에 달린, 우발적인" },
    { word: "conventional", meaning: "관습적인, 전통적인" },
    { word: "cumulative", meaning: "누적되는, 점증하는" },
    { word: "decipher", meaning: "해독하다, 판독하다" },
    { word: "deficit", meaning: "적자, 부족" },
    { word: "degrade", meaning: "저하시키다, 격하하다" },
    { word: "delineate", meaning: "묘사하다, 윤곽을 그리다" },
    { word: "depict", meaning: "묘사하다, 그리다" },
    { word: "deplete", meaning: "고갈시키다, 소모하다" },
    { word: "deviate", meaning: "벗어나다, 일탈하다" },
    { word: "differentiate", meaning: "구별하다, 차별화하다" },
    { word: "discern", meaning: "식별하다, 분별하다" },
    { word: "discrepancy", meaning: "불일치, 차이" },
    { word: "disperse", meaning: "흩어지다, 분산시키다" },
    { word: "disseminate", meaning: "퍼뜨리다, 유포하다" },
    { word: "distort", meaning: "왜곡하다, 비틀다" },
    { word: "diverge", meaning: "갈라지다, 벗어나다" },
    { word: "elicit", meaning: "이끌어내다, 유도하다" },
    { word: "eloquent", meaning: "웅변의, 유창한" },
    { word: "embody", meaning: "구현하다, 상징하다" },
    { word: "endeavor", meaning: "노력, 시도하다" },
    { word: "endorse", meaning: "지지하다, 보증하다" },
    { word: "entail", meaning: "수반하다, 필요로 하다" },
    { word: "equivalent", meaning: "동등한, 상응하는" },
    { word: "eradicate", meaning: "근절하다, 뿌리 뽑다" },
    { word: "exemplify", meaning: "예시하다, 전형이 되다" },
    { word: "exert", meaning: "발휘하다, 행사하다" },
    { word: "exquisite", meaning: "정교한, 우아한" },
    { word: "fabricate", meaning: "조작하다, 제작하다" },
    { word: "formulate", meaning: "공식화하다, 만들어 내다" },
    { word: "gregarious", meaning: "사교적인, 무리 짓는" },
    { word: "hierarchy", meaning: "위계, 계층 구조" },
    { word: "impartial", meaning: "공정한, 편견 없는" },
    { word: "imperative", meaning: "필수적인, 긴요한" },
    { word: "implement", meaning: "시행하다, 도구" },
    { word: "inadvertent", meaning: "무심코 한, 우연한" },
    { word: "incessant", meaning: "끊임없는, 쉴 새 없는" },
    { word: "incorporate", meaning: "포함하다, 통합하다" },
    { word: "indispensable", meaning: "필수 불가결한" },
    { word: "induce", meaning: "유도하다, 유발하다" },
    { word: "ingenious", meaning: "기발한, 독창적인" },
    { word: "innate", meaning: "타고난, 선천적인" },
    { word: "insight", meaning: "통찰력, 이해" },
    { word: "intangible", meaning: "무형의, 만질 수 없는" },
    { word: "integrity", meaning: "진실성, 온전함" },
    { word: "intervene", meaning: "개입하다, 중재하다" },
    { word: "intuitive", meaning: "직관적인" },
    { word: "irrational", meaning: "비이성적인, 불합리한" },
    { word: "juxtapose", meaning: "나란히 놓다, 병치하다" },
    { word: "lucid", meaning: "명료한, 또렷한" },
    { word: "meticulous", meaning: "꼼꼼한, 세심한" },
    { word: "mitigate", meaning: "완화하다, 경감하다" },
    { word: "nuance", meaning: "미묘한 차이, 뉘앙스" },
    { word: "obsolete", meaning: "구식의, 쓸모없어진" },
    { word: "paradigm", meaning: "패러다임, 전형" },
    { word: "paradox", meaning: "역설, 모순" },
    { word: "perpetuate", meaning: "영속시키다, 지속시키다" },
    { word: "pertinent", meaning: "적절한, 관련 있는" },
    { word: "pervasive", meaning: "만연한, 널리 퍼진" },
    { word: "pragmatic", meaning: "실용적인, 현실적인" },
    { word: "precede", meaning: "앞서다, 선행하다" },
    { word: "predominant", meaning: "지배적인, 우세한" },
    { word: "proliferate", meaning: "급증하다, 확산하다" },
    { word: "prone", meaning: "~하기 쉬운, ~의 경향이 있는" },
    { word: "reciprocal", meaning: "상호간의, 호혜적인" },
    { word: "redundant", meaning: "불필요한, 중복된" },
    { word: "refute", meaning: "반박하다, 논박하다" },
    { word: "resilient", meaning: "회복력 있는, 탄력 있는" },
    { word: "scrutinize", meaning: "면밀히 살피다, 정밀 검토하다" },
    { word: "skeptical", meaning: "회의적인, 의심하는" }
  ]
};

/* ---------- 영어: 문장 문제 (학년제 1~10단계, 각 20개, 총 200문항)
   1~5단계(초1~중1)=빈칸 채우기(fill, meaning=한국어 뜻 '뜻 보기'용), 6~10단계(중2~고3)=문장 뜻 고르기(meaning) */
var ENGLISH_SENTENCES = {
  1: [
    { type: "fill", sentence: "I have a ___ .", answer: "cat", choices: ["cat","run","big","the"], meaning: "나는 고양이가 있어요." },
    { type: "fill", sentence: "The ___ is hot.", answer: "sun", choices: ["sun","box","pen","hat"], meaning: "해는 뜨거워요." },
    { type: "fill", sentence: "I can ___ .", answer: "jump", choices: ["jump","blue","milk","door"], meaning: "나는 뛸 수 있어요." },
    { type: "fill", sentence: "This is my ___ .", answer: "mom", choices: ["mom","sit","red","up"], meaning: "이 사람은 우리 엄마예요." },
    { type: "fill", sentence: "A dog can ___ .", answer: "run", choices: ["run","cup","desk","apple"], meaning: "개는 달릴 수 있어요." },
    { type: "fill", sentence: "I like ___ .", answer: "milk", choices: ["milk","tall","open","she"], meaning: "나는 우유를 좋아해요." },
    { type: "fill", sentence: "The sky is ___ .", answer: "blue", choices: ["blue","fish","book","walk"], meaning: "하늘은 파래요." },
    { type: "fill", sentence: "I see a ___ .", answer: "bird", choices: ["bird","eat","cold","yes"], meaning: "나는 새를 봐요." },
    { type: "fill", sentence: "My ___ is red.", answer: "ball", choices: ["ball","swim","warm","go"], meaning: "내 공은 빨간색이에요." },
    { type: "fill", sentence: "I am a ___ .", answer: "boy", choices: ["boy","big","fly","new"], meaning: "나는 남자아이예요." },
    { type: "fill", sentence: "The cat is ___ .", answer: "small", choices: ["small","play","hand","one"], meaning: "그 고양이는 작아요." },
    { type: "fill", sentence: "I can ___ a book.", answer: "read", choices: ["read","tree","nice","two"], meaning: "나는 책을 읽을 수 있어요." },
    { type: "fill", sentence: "We ___ at school.", answer: "play", choices: ["play","moon","soft","he"], meaning: "우리는 학교에서 놀아요." },
    { type: "fill", sentence: "The ___ is big.", answer: "tree", choices: ["tree","sad","fast","it"], meaning: "그 나무는 커요." },
    { type: "fill", sentence: "I eat an ___ .", answer: "apple", choices: ["apple","sing","hot","we"], meaning: "나는 사과를 먹어요." },
    { type: "fill", sentence: "A fish can ___ .", answer: "swim", choices: ["swim","cake","good","my"], meaning: "물고기는 헤엄칠 수 있어요." },
    { type: "fill", sentence: "My hat is ___ .", answer: "yellow", choices: ["yellow","fork","clap","us"], meaning: "내 모자는 노란색이에요." },
    { type: "fill", sentence: "The baby can ___ .", answer: "cry", choices: ["cry","desk","warm","on"], meaning: "아기는 울 수 있어요." },
    { type: "fill", sentence: "I have two ___ .", answer: "hands", choices: ["hands","sing","cold","in"], meaning: "나는 손이 두 개 있어요." },
    { type: "fill", sentence: "The moon is ___ .", answer: "white", choices: ["white","cup","talk","at"], meaning: "달은 하얘요." }
  ],
  2: [
    { type: "fill", sentence: "My sister goes to ___ every day.", answer: "school", choices: ["school","water","happy","under"], meaning: "우리 언니는 매일 학교에 가요." },
    { type: "fill", sentence: "We play soccer in the ___ .", answer: "park", choices: ["park","milk","read","cold"], meaning: "우리는 공원에서 축구를 해요." },
    { type: "fill", sentence: "I ___ my teeth every morning.", answer: "brush", choices: ["brush","chair","green","seven"], meaning: "나는 매일 아침 이를 닦아요." },
    { type: "fill", sentence: "The bird can ___ in the sky.", answer: "fly", choices: ["fly","cup","warm","desk"], meaning: "새는 하늘을 날 수 있어요." },
    { type: "fill", sentence: "My favorite color is ___ .", answer: "green", choices: ["green","jump","door","many"], meaning: "내가 가장 좋아하는 색은 초록색이에요." },
    { type: "fill", sentence: "I drink ___ when I am thirsty.", answer: "water", choices: ["water","open","tall","fast"], meaning: "나는 목이 마르면 물을 마셔요." },
    { type: "fill", sentence: "We eat lunch at ___ o'clock.", answer: "twelve", choices: ["twelve","apple","happy","clean"], meaning: "우리는 12시에 점심을 먹어요." },
    { type: "fill", sentence: "My dad reads a book every ___ .", answer: "night", choices: ["night","shoe","warm","sing"], meaning: "우리 아빠는 매일 밤 책을 읽어요." },
    { type: "fill", sentence: "The rabbit has long ___ .", answer: "ears", choices: ["ears","play","cold","open"], meaning: "토끼는 귀가 길어요." },
    { type: "fill", sentence: "I feel ___ when I see my friends.", answer: "happy", choices: ["happy","desk","water","seven"], meaning: "나는 친구들을 보면 행복해요." },
    { type: "fill", sentence: "We wear a coat when it is ___ .", answer: "cold", choices: ["cold","read","jump","door"], meaning: "우리는 추울 때 외투를 입어요." },
    { type: "fill", sentence: "My mom cooks in the ___ .", answer: "kitchen", choices: ["kitchen","summer","yellow","pencil"], meaning: "우리 엄마는 부엌에서 요리를 해요." },
    { type: "fill", sentence: "I write with a ___ .", answer: "pencil", choices: ["pencil","happy","fast","warm"], meaning: "나는 연필로 써요." },
    { type: "fill", sentence: "The flowers are ___ in spring.", answer: "pretty", choices: ["pretty","water","seven","chair"], meaning: "봄에는 꽃들이 예뻐요." },
    { type: "fill", sentence: "We sleep at ___ .", answer: "night", choices: ["night","green","apple","clean"], meaning: "우리는 밤에 잠을 자요." },
    { type: "fill", sentence: "I ___ my hands before dinner.", answer: "wash", choices: ["wash","door","tall","cold"], meaning: "나는 저녁을 먹기 전에 손을 씻어요." },
    { type: "fill", sentence: "A cow gives us ___ .", answer: "milk", choices: ["milk","chair","happy","seven"], meaning: "소는 우리에게 우유를 줘요." },
    { type: "fill", sentence: "The sun is bright in the ___ .", answer: "day", choices: ["day","read","warm","open"], meaning: "낮에는 해가 밝아요." },
    { type: "fill", sentence: "My brother likes to ___ pictures.", answer: "draw", choices: ["draw","cold","water","desk"], meaning: "우리 형은 그림 그리는 것을 좋아해요." },
    { type: "fill", sentence: "We have four ___ in a year.", answer: "seasons", choices: ["seasons","pencils","chairs","doors"], meaning: "일 년에는 네 계절이 있어요." }
  ],
  3: [
    { type: "fill", sentence: "My family will ___ to the beach this weekend.", answer: "travel", choices: ["travel","kitchen","yellow","between"], meaning: "우리 가족은 이번 주말에 바닷가로 여행을 갈 거예요." },
    { type: "fill", sentence: "She is good at ___ the piano.", answer: "playing", choices: ["playing","chair","seven","under"], meaning: "그 아이는 피아노를 잘 쳐요." },
    { type: "fill", sentence: "We should ___ the classroom after the party.", answer: "clean", choices: ["clean","apple","warm","story"], meaning: "우리는 파티가 끝나고 교실을 청소해야 해요." },
    { type: "fill", sentence: "I usually ___ up at seven in the morning.", answer: "wake", choices: ["wake","door","green","milk"], meaning: "나는 보통 아침 7시에 일어나요." },
    { type: "fill", sentence: "The library is ___ to the school.", answer: "next", choices: ["next","cold","happy","fast"], meaning: "도서관은 학교 옆에 있어요." },
    { type: "fill", sentence: "He wants to ___ a doctor when he grows up.", answer: "become", choices: ["become","pencil","bright","clean"], meaning: "그 아이는 커서 의사가 되고 싶어 해요." },
    { type: "fill", sentence: "Please ___ me the salt.", answer: "pass", choices: ["pass","warm","story","green"], meaning: "소금 좀 건네주세요." },
    { type: "fill", sentence: "We learned about animals in ___ class.", answer: "science", choices: ["science","kitchen","umbrella","chair"], meaning: "우리는 과학 시간에 동물에 대해 배웠어요." },
    { type: "fill", sentence: "I am ___ than my little brother.", answer: "taller", choices: ["taller","warmly","happily","quickly"], meaning: "나는 남동생보다 키가 커요." },
    { type: "fill", sentence: "The movie was so funny that we ___ a lot.", answer: "laughed", choices: ["laughed","cleaned","opened","closed"], meaning: "그 영화가 너무 웃겨서 우리는 많이 웃었어요." },
    { type: "fill", sentence: "Can you ___ me with my homework?", answer: "help", choices: ["help","door","warm","milk"], meaning: "내 숙제 좀 도와줄 수 있어요?" },
    { type: "fill", sentence: "We take a ___ to school every day.", answer: "bus", choices: ["bus","story","green","clean"], meaning: "우리는 매일 버스를 타고 학교에 가요." },
    { type: "fill", sentence: "The weather is ___ today, so let's go outside.", answer: "sunny", choices: ["sunny","chair","seven","pencil"], meaning: "오늘 날씨가 화창하니까 밖에 나가요." },
    { type: "fill", sentence: "My hobby is ___ stamps.", answer: "collecting", choices: ["collecting","kitchen","warmly","between"], meaning: "내 취미는 우표 모으기예요." },
    { type: "fill", sentence: "She ___ her grandmother last Sunday.", answer: "visited", choices: ["visited","cleaned","jumped","opened"], meaning: "그 아이는 지난 일요일에 할머니를 찾아뵈었어요." },
    { type: "fill", sentence: "Wash your hands ___ you eat.", answer: "before", choices: ["before","warm","story","green"], meaning: "밥 먹기 전에 손을 씻으세요." },
    { type: "fill", sentence: "The train is faster ___ the bus.", answer: "than", choices: ["than","door","clean","milk"], meaning: "기차는 버스보다 빨라요." },
    { type: "fill", sentence: "I want to ___ how to swim this summer.", answer: "learn", choices: ["learn","chair","seven","warm"], meaning: "나는 이번 여름에 수영하는 법을 배우고 싶어요." },
    { type: "fill", sentence: "There are many ___ in the zoo.", answer: "animals", choices: ["animals","kitchens","pencils","umbrellas"], meaning: "동물원에는 동물이 많아요." },
    { type: "fill", sentence: "He ran ___ to catch the ball.", answer: "quickly", choices: ["quickly","chair","story","green"], meaning: "그 아이는 공을 잡으려고 빠르게 달렸어요." }
  ],
  4: [
    { type: "fill", sentence: "If it rains tomorrow, we will ___ our trip.", answer: "cancel", choices: ["cancel","garden","quiet","between"], meaning: "내일 비가 오면 우리는 여행을 취소할 거예요." },
    { type: "fill", sentence: "She has been ___ English for three years.", answer: "studying", choices: ["studying","travel","become","quickly"], meaning: "그 아이는 삼 년 동안 영어를 공부해 왔어요." },
    { type: "fill", sentence: "The teacher asked us to ___ our ideas with the class.", answer: "share", choices: ["share","garden","sunny","quiet"], meaning: "선생님은 우리에게 반 친구들과 생각을 나누라고 하셨어요." },
    { type: "fill", sentence: "I was so tired that I ___ asleep on the sofa.", answer: "fell", choices: ["fell","cleaned","learned","visited"], meaning: "나는 너무 피곤해서 소파에서 잠들었어요." },
    { type: "fill", sentence: "We should ___ water to protect the environment.", answer: "save", choices: ["save","garden","quiet","sunny"], meaning: "우리는 환경을 보호하기 위해 물을 아껴야 해요." },
    { type: "fill", sentence: "He is the most ___ student in our class.", answer: "diligent", choices: ["diligent","garden","quickly","between"], meaning: "그 아이는 우리 반에서 가장 부지런한 학생이에요." },
    { type: "fill", sentence: "My sister and I ___ a room together.", answer: "share", choices: ["share","travel","become","quiet"], meaning: "나와 언니는 방을 함께 써요." },
    { type: "fill", sentence: "The story was so ___ that I read it twice.", answer: "interesting", choices: ["interesting","garden","sunny","quiet"], meaning: "그 이야기가 너무 재미있어서 나는 두 번 읽었어요." },
    { type: "fill", sentence: "Could you ___ your opinion more clearly?", answer: "explain", choices: ["explain","garden","travel","sunny"], meaning: "당신의 의견을 좀 더 분명하게 설명해 줄 수 있어요?" },
    { type: "fill", sentence: "We are planning to ___ a school festival next month.", answer: "hold", choices: ["hold","garden","quiet","become"], meaning: "우리는 다음 달에 학교 축제를 열 계획이에요." },
    { type: "fill", sentence: "Everyone should ___ the rules of the game.", answer: "follow", choices: ["follow","garden","sunny","quickly"], meaning: "모두가 게임 규칙을 지켜야 해요." },
    { type: "fill", sentence: "The scientists made an important ___ .", answer: "discovery", choices: ["discovery","garden","travel","become"], meaning: "과학자들이 중요한 발견을 했어요." },
    { type: "fill", sentence: "I need to ___ my mistake and try again.", answer: "correct", choices: ["correct","garden","quiet","sunny"], meaning: "나는 내 실수를 바로잡고 다시 해 봐야 해요." },
    { type: "fill", sentence: "She spoke ___ so that everyone could understand.", answer: "clearly", choices: ["clearly","garden","travel","become"], meaning: "그 아이는 모두가 알아들을 수 있게 또박또박 말했어요." },
    { type: "fill", sentence: "We ___ a lot of information for our project.", answer: "gathered", choices: ["gathered","traveled","became","cleaned"], meaning: "우리는 과제를 위해 많은 정보를 모았어요." },
    { type: "fill", sentence: "The bridge ___ the two parts of the city.", answer: "connects", choices: ["connects","gardens","travels","becomes"], meaning: "그 다리는 도시의 두 부분을 이어 줘요." },
    { type: "fill", sentence: "He decided to ___ the club after school.", answer: "join", choices: ["join","garden","quiet","sunny"], meaning: "그 아이는 방과 후에 동아리에 들기로 했어요." },
    { type: "fill", sentence: "Reading books can ___ your vocabulary.", answer: "improve", choices: ["improve","garden","travel","become"], meaning: "책을 읽으면 어휘력이 좋아질 수 있어요." },
    { type: "fill", sentence: "They ___ the problem by working together.", answer: "solved", choices: ["solved","traveled","gardened","became"], meaning: "그들은 힘을 합쳐 문제를 해결했어요." },
    { type: "fill", sentence: "The nurse told him to ___ well and drink water.", answer: "rest", choices: ["rest","garden","travel","sunny"], meaning: "간호사가 그에게 잘 쉬고 물을 많이 마시라고 했어요." }
  ],
  5: [
    { type: "fill", sentence: "Although he was nervous, he ___ gave a great speech.", answer: "still", choices: ["still","garden","quickly","between"], meaning: "그 아이는 긴장했지만 그래도 멋진 발표를 했어요." },
    { type: "fill", sentence: "The more you practice, the ___ you will become.", answer: "better", choices: ["better","garden","travel","sunny"], meaning: "연습을 많이 할수록 더 잘하게 될 거예요." },
    { type: "fill", sentence: "She suggested that we ___ the meeting until Friday.", answer: "postpone", choices: ["postpone","garden","travel","become"], meaning: "그 아이는 회의를 금요일로 미루자고 제안했어요." },
    { type: "fill", sentence: "Regular exercise can ___ your health.", answer: "benefit", choices: ["benefit","garden","travel","sunny"], meaning: "꾸준한 운동은 건강에 도움이 될 수 있어요." },
    { type: "fill", sentence: "He apologized for the ___ he had caused.", answer: "trouble", choices: ["trouble","garden","travel","sunny"], meaning: "그 아이는 자기가 일으킨 문제에 대해 사과했어요." },
    { type: "fill", sentence: "The experiment ___ that plants need sunlight.", answer: "proved", choices: ["proved","gardened","traveled","became"], meaning: "그 실험은 식물이 햇빛을 필요로 한다는 것을 증명했어요." },
    { type: "fill", sentence: "We need to ___ between the two plans carefully.", answer: "choose", choices: ["choose","garden","travel","sunny"], meaning: "우리는 두 가지 계획 중에서 신중하게 골라야 해요." },
    { type: "fill", sentence: "The volunteers worked hard to ___ the community.", answer: "support", choices: ["support","garden","travel","sunny"], meaning: "자원봉사자들은 마을을 돕기 위해 열심히 일했어요." },
    { type: "fill", sentence: "His explanation was clear and easy to ___ .", answer: "understand", choices: ["understand","garden","travel","become"], meaning: "그 아이의 설명은 분명하고 이해하기 쉬웠어요." },
    { type: "fill", sentence: "The company will ___ a new product next year.", answer: "release", choices: ["release","garden","travel","sunny"], meaning: "그 회사는 내년에 새 제품을 내놓을 거예요." },
    { type: "fill", sentence: "Despite the rain, the crowd remained ___ .", answer: "cheerful", choices: ["cheerful","garden","travel","sunny"], meaning: "비가 왔는데도 사람들은 즐거워했어요." },
    { type: "fill", sentence: "You should ___ the instructions before you start.", answer: "review", choices: ["review","garden","travel","sunny"], meaning: "시작하기 전에 설명을 다시 살펴봐야 해요." },
    { type: "fill", sentence: "The bridge was ___ to allow bigger ships to pass.", answer: "raised", choices: ["raised","gardened","traveled","became"], meaning: "더 큰 배가 지나갈 수 있도록 다리를 들어 올렸어요." },
    { type: "fill", sentence: "Her hard work finally ___ off with a prize.", answer: "paid", choices: ["paid","gardened","traveled","became"], meaning: "그 아이의 노력은 마침내 상으로 결실을 맺었어요." },
    { type: "fill", sentence: "We should ___ the needs of others, not just our own.", answer: "consider", choices: ["consider","garden","travel","sunny"], meaning: "우리는 우리만이 아니라 다른 사람의 필요도 생각해야 해요." },
    { type: "fill", sentence: "The recipe ___ two cups of flour.", answer: "requires", choices: ["requires","gardens","travels","becomes"], meaning: "그 요리법에는 밀가루 두 컵이 필요해요." },
    { type: "fill", sentence: "He kept calm and ___ the difficult situation well.", answer: "handled", choices: ["handled","gardened","traveled","became"], meaning: "그 아이는 침착하게 어려운 상황을 잘 해결했어요." },
    { type: "fill", sentence: "Their teamwork ___ the project a success.", answer: "made", choices: ["made","gardened","traveled","became"], meaning: "그들의 협동이 그 과제를 성공으로 이끌었어요." },
    { type: "fill", sentence: "The article ___ the causes of climate change.", answer: "describes", choices: ["describes","gardens","travels","becomes"], meaning: "그 글은 기후 변화의 원인을 설명해요." },
    { type: "fill", sentence: "We must ___ our natural resources for the future.", answer: "protect", choices: ["protect","garden","travel","sunny"], meaning: "우리는 미래를 위해 자연 자원을 지켜야 해요." }
  ],
  6: [
    { type: "meaning", sentence: "I usually walk to school with my friends.", answer: "나는 보통 친구들과 걸어서 학교에 간다.", choices: ["나는 보통 친구들과 걸어서 학교에 간다.","나는 가끔 혼자 버스를 탄다.","나는 친구들과 자전거를 탄다.","나는 학교에서 친구들을 만난다."] },
    { type: "meaning", sentence: "She is reading a book in the living room.", answer: "그녀는 거실에서 책을 읽고 있다.", choices: ["그녀는 거실에서 책을 읽고 있다.","그녀는 방에서 잠을 자고 있다.","그녀는 부엌에서 요리하고 있다.","그녀는 도서관에서 공부하고 있다."] },
    { type: "meaning", sentence: "We are going to visit my grandparents this weekend.", answer: "우리는 이번 주말에 조부모님을 방문할 것이다.", choices: ["우리는 이번 주말에 조부모님을 방문할 것이다.","우리는 지난 주말에 여행을 갔다.","우리는 내일 부모님과 저녁을 먹는다.","우리는 주말마다 집에서 쉰다."] },
    { type: "meaning", sentence: "He wants to be a soccer player in the future.", answer: "그는 미래에 축구 선수가 되고 싶어 한다.", choices: ["그는 미래에 축구 선수가 되고 싶어 한다.","그는 지금 축구를 하고 있다.","그는 야구 선수를 좋아한다.","그는 축구 경기를 보러 갔다."] },
    { type: "meaning", sentence: "The weather was very cold yesterday.", answer: "어제는 날씨가 매우 추웠다.", choices: ["어제는 날씨가 매우 추웠다.","오늘은 날씨가 매우 덥다.","내일은 비가 올 것이다.","어제는 바람이 많이 불었다."] },
    { type: "meaning", sentence: "My brother is better at math than I am.", answer: "내 남동생은 나보다 수학을 더 잘한다.", choices: ["내 남동생은 나보다 수학을 더 잘한다.","나는 남동생보다 수학을 더 잘한다.","내 남동생은 나만큼 영어를 잘한다.","나는 수학보다 영어를 더 좋아한다."] },
    { type: "meaning", sentence: "Please turn off the light before you leave.", answer: "나가기 전에 불을 꺼 주세요.", choices: ["나가기 전에 불을 꺼 주세요.","들어오기 전에 문을 닫아 주세요.","나가기 전에 창문을 열어 주세요.","자기 전에 불을 켜 주세요."] },
    { type: "meaning", sentence: "I have already finished my homework.", answer: "나는 이미 숙제를 끝냈다.", choices: ["나는 이미 숙제를 끝냈다.","나는 아직 숙제를 시작하지 않았다.","나는 숙제를 하는 것을 잊었다.","나는 지금 숙제를 하고 있다."] },
    { type: "meaning", sentence: "They played basketball after school.", answer: "그들은 방과 후에 농구를 했다.", choices: ["그들은 방과 후에 농구를 했다.","그들은 수업 시간에 축구를 했다.","그들은 아침에 야구를 했다.","그들은 주말에 배구를 했다."] },
    { type: "meaning", sentence: "This is the most delicious cake I have ever eaten.", answer: "이것은 내가 지금까지 먹어 본 가장 맛있는 케이크이다.", choices: ["이것은 내가 지금까지 먹어 본 가장 맛있는 케이크이다.","이것은 내가 처음 만들어 본 케이크이다.","이것은 내가 가장 싫어하는 케이크이다.","이것은 내가 어제 산 케이크이다."] },
    { type: "meaning", sentence: "She sings very well in the school choir.", answer: "그녀는 학교 합창단에서 노래를 아주 잘한다.", choices: ["그녀는 학교 합창단에서 노래를 아주 잘한다.","그녀는 학교 밴드에서 기타를 친다.","그녀는 노래 듣는 것을 좋아한다.","그녀는 합창단에 들어가고 싶어 한다."] },
    { type: "meaning", sentence: "We should recycle paper and plastic.", answer: "우리는 종이와 플라스틱을 재활용해야 한다.", choices: ["우리는 종이와 플라스틱을 재활용해야 한다.","우리는 종이와 플라스틱을 버려야 한다.","우리는 종이만 사용해야 한다.","우리는 플라스틱을 더 많이 사야 한다."] },
    { type: "meaning", sentence: "He was late because he missed the bus.", answer: "그는 버스를 놓쳐서 늦었다.", choices: ["그는 버스를 놓쳐서 늦었다.","그는 일찍 일어나서 일찍 왔다.","그는 버스를 타서 제시간에 왔다.","그는 아파서 학교에 못 왔다."] },
    { type: "meaning", sentence: "Can you help me carry these boxes?", answer: "이 상자들을 옮기는 것을 도와줄 수 있니?", choices: ["이 상자들을 옮기는 것을 도와줄 수 있니?","이 상자들을 열어 봐도 되니?","이 상자들이 무엇인지 아니?","이 상자들을 어디에 둘까?"] },
    { type: "meaning", sentence: "My favorite season is spring because flowers bloom.", answer: "내가 가장 좋아하는 계절은 꽃이 피는 봄이다.", choices: ["내가 가장 좋아하는 계절은 꽃이 피는 봄이다.","내가 가장 좋아하는 계절은 눈이 오는 겨울이다.","나는 여름에 꽃을 심는 것을 좋아한다.","나는 가을에 낙엽을 보는 것을 좋아한다."] },
    { type: "meaning", sentence: "The children are excited about the field trip.", answer: "아이들은 현장 학습에 대해 신이 나 있다.", choices: ["아이들은 현장 학습에 대해 신이 나 있다.","아이들은 시험에 대해 걱정하고 있다.","아이들은 방학을 기다리고 있다.","아이들은 수업이 지루하다고 느낀다."] },
    { type: "meaning", sentence: "I forgot to bring my umbrella today.", answer: "나는 오늘 우산을 가져오는 것을 잊었다.", choices: ["나는 오늘 우산을 가져오는 것을 잊었다.","나는 오늘 우산을 새로 샀다.","나는 오늘 우산을 친구에게 빌려주었다.","나는 오늘 우산이 필요하지 않았다."] },
    { type: "meaning", sentence: "We watched an interesting movie last night.", answer: "우리는 어젯밤에 재미있는 영화를 봤다.", choices: ["우리는 어젯밤에 재미있는 영화를 봤다.","우리는 오늘 아침에 뉴스를 봤다.","우리는 지루한 영화를 봤다.","우리는 영화관에 가지 못했다."] },
    { type: "meaning", sentence: "He practices the piano every evening.", answer: "그는 매일 저녁 피아노를 연습한다.", choices: ["그는 매일 저녁 피아노를 연습한다.","그는 가끔 기타를 친다.","그는 아침마다 노래를 부른다.","그는 피아노를 배우고 싶어 한다."] },
    { type: "meaning", sentence: "Please be quiet during the test.", answer: "시험 시간 동안 조용히 해 주세요.", choices: ["시험 시간 동안 조용히 해 주세요.","시험이 끝나면 이야기해도 됩니다.","시험 전에 책을 읽어 주세요.","수업 시간에 손을 들어 주세요."] }
  ],
  7: [
    { type: "meaning", sentence: "If I had more time, I would learn to play the guitar.", answer: "시간이 더 있다면 나는 기타 치는 법을 배울 텐데.", choices: ["시간이 더 있다면 나는 기타 치는 법을 배울 텐데.","나는 시간이 날 때마다 기타를 친다.","나는 기타를 배우기 위해 시간을 냈다.","시간이 없어서 나는 기타를 팔았다."] },
    { type: "meaning", sentence: "The book that I borrowed from the library is very useful.", answer: "내가 도서관에서 빌린 그 책은 매우 유용하다.", choices: ["내가 도서관에서 빌린 그 책은 매우 유용하다.","내가 서점에서 산 그 책은 재미있다.","도서관에 있는 책들은 모두 오래되었다.","나는 도서관에서 책을 빌리지 못했다."] },
    { type: "meaning", sentence: "She was so tired that she fell asleep during the movie.", answer: "그녀는 너무 피곤해서 영화를 보다가 잠이 들었다.", choices: ["그녀는 너무 피곤해서 영화를 보다가 잠이 들었다.","그녀는 영화가 지루해서 일찍 나왔다.","그녀는 피곤했지만 영화를 끝까지 봤다.","그녀는 잠을 자기 위해 영화를 껐다."] },
    { type: "meaning", sentence: "We need to protect the environment for future generations.", answer: "우리는 미래 세대를 위해 환경을 보호해야 한다.", choices: ["우리는 미래 세대를 위해 환경을 보호해야 한다.","우리는 환경을 개발하여 돈을 벌어야 한다.","미래 세대는 환경에 관심이 없다.","우리는 이미 환경을 충분히 보호했다."] },
    { type: "meaning", sentence: "He apologized to his friend for being rude.", answer: "그는 무례하게 굴었던 것에 대해 친구에게 사과했다.", choices: ["그는 무례하게 굴었던 것에 대해 친구에게 사과했다.","그는 친구가 무례해서 화를 냈다.","그는 친구에게 도움을 요청했다.","그는 친구와 함께 사과를 나눠 먹었다."] },
    { type: "meaning", sentence: "The more we practice, the more confident we become.", answer: "연습을 많이 할수록 우리는 더 자신감을 갖게 된다.", choices: ["연습을 많이 할수록 우리는 더 자신감을 갖게 된다.","우리는 자신감이 있어서 연습이 필요 없다.","연습을 해도 자신감은 생기지 않는다.","우리는 연습보다 휴식이 더 중요하다."] },
    { type: "meaning", sentence: "Although it was raining, they continued the game.", answer: "비가 오고 있었지만 그들은 경기를 계속했다.", choices: ["비가 오고 있었지만 그들은 경기를 계속했다.","비가 와서 그들은 경기를 취소했다.","날씨가 좋아서 경기를 시작했다.","그들은 비가 그치기를 기다렸다."] },
    { type: "meaning", sentence: "I have never seen such a beautiful sunset before.", answer: "나는 전에 그렇게 아름다운 노을을 본 적이 없다.", choices: ["나는 전에 그렇게 아름다운 노을을 본 적이 없다.","나는 매일 아름다운 노을을 본다.","나는 노을을 보는 것을 좋아하지 않는다.","나는 아름다운 일출을 처음 봤다."] },
    { type: "meaning", sentence: "The teacher encouraged us to ask questions freely.", answer: "선생님은 우리에게 자유롭게 질문하라고 격려했다.", choices: ["선생님은 우리에게 자유롭게 질문하라고 격려했다.","선생님은 우리에게 질문하지 말라고 하셨다.","우리는 선생님께 질문하기가 두려웠다.","선생님은 질문에 답하지 않으셨다."] },
    { type: "meaning", sentence: "He decided to join the volunteer club to help others.", answer: "그는 다른 사람들을 돕기 위해 봉사 동아리에 들어가기로 했다.", choices: ["그는 다른 사람들을 돕기 위해 봉사 동아리에 들어가기로 했다.","그는 봉사 동아리를 그만두기로 했다.","그는 친구를 따라 운동 동아리에 갔다.","그는 다른 사람의 도움을 받고 싶어 했다."] },
    { type: "meaning", sentence: "Reading regularly can improve your writing skills.", answer: "규칙적으로 독서를 하면 글쓰기 실력을 향상시킬 수 있다.", choices: ["규칙적으로 독서를 하면 글쓰기 실력을 향상시킬 수 있다.","글쓰기는 독서와 아무 관계가 없다.","글을 많이 쓰면 독서 실력이 는다.","독서는 시간 낭비일 뿐이다."] },
    { type: "meaning", sentence: "She promised to return the money by next week.", answer: "그녀는 다음 주까지 돈을 갚겠다고 약속했다.", choices: ["그녀는 다음 주까지 돈을 갚겠다고 약속했다.","그녀는 다음 주에 돈을 빌리려고 한다.","그녀는 돈을 갚는 것을 잊어버렸다.","그녀는 돈을 갚지 않겠다고 말했다."] },
    { type: "meaning", sentence: "The scientist explained how the experiment worked.", answer: "그 과학자는 실험이 어떻게 이루어지는지 설명했다.", choices: ["그 과학자는 실험이 어떻게 이루어지는지 설명했다.","그 과학자는 실험을 실패했다.","그 과학자는 실험을 하지 않기로 했다.","학생들은 실험을 이해하지 못했다."] },
    { type: "meaning", sentence: "We should be kind to people who are different from us.", answer: "우리는 우리와 다른 사람들에게 친절해야 한다.", choices: ["우리는 우리와 다른 사람들에게 친절해야 한다.","우리는 우리와 비슷한 사람만 도와야 한다.","다른 사람들은 우리에게 친절하지 않다.","우리는 서로 다른 점을 무시해야 한다."] },
    { type: "meaning", sentence: "He worked hard so that he could achieve his goal.", answer: "그는 목표를 이룰 수 있도록 열심히 노력했다.", choices: ["그는 목표를 이룰 수 있도록 열심히 노력했다.","그는 목표가 없어서 게을렀다.","그는 열심히 했지만 목표를 잊었다.","그의 목표는 쉬는 것이었다."] },
    { type: "meaning", sentence: "The museum was closed, so we went to the park instead.", answer: "박물관이 문을 닫아서 우리는 대신 공원에 갔다.", choices: ["박물관이 문을 닫아서 우리는 대신 공원에 갔다.","우리는 박물관과 공원을 모두 갔다.","박물관이 열려 있어서 우리는 안으로 들어갔다.","우리는 공원 대신 박물관을 선택했다."] },
    { type: "meaning", sentence: "It is important to listen carefully when others speak.", answer: "다른 사람이 말할 때 주의 깊게 듣는 것이 중요하다.", choices: ["다른 사람이 말할 때 주의 깊게 듣는 것이 중요하다.","다른 사람의 말을 무시하는 것이 편하다.","말하는 것이 듣는 것보다 중요하다.","우리는 조용히 있을 필요가 없다."] },
    { type: "meaning", sentence: "The students were divided into four groups for the project.", answer: "학생들은 그 과제를 위해 네 개의 모둠으로 나뉘었다.", choices: ["학생들은 그 과제를 위해 네 개의 모둠으로 나뉘었다.","학생들은 과제를 혼자서 했다.","학생들은 두 팀으로 경기를 했다.","학생들은 과제를 포기했다."] },
    { type: "meaning", sentence: "She felt nervous before the important interview.", answer: "그녀는 중요한 면접을 앞두고 긴장했다.", choices: ["그녀는 중요한 면접을 앞두고 긴장했다.","그녀는 면접이 끝나서 기뻤다.","그녀는 면접에 관심이 없었다.","그녀는 면접에서 편안함을 느꼈다."] },
    { type: "meaning", sentence: "We planned our trip carefully to save money.", answer: "우리는 돈을 아끼기 위해 여행 계획을 신중하게 세웠다.", choices: ["우리는 돈을 아끼기 위해 여행 계획을 신중하게 세웠다.","우리는 돈을 많이 쓰기로 했다.","우리는 여행 계획을 세우지 못했다.","우리는 갑자기 여행을 떠났다."] }
  ],
  8: [
    { type: "meaning", sentence: "Despite facing many difficulties, she never gave up on her dream.", answer: "많은 어려움에 직면했음에도 그녀는 결코 자신의 꿈을 포기하지 않았다.", choices: ["많은 어려움에 직면했음에도 그녀는 결코 자신의 꿈을 포기하지 않았다.","어려움이 없었기 때문에 그녀는 꿈을 이루었다.","그녀는 어려움 때문에 꿈을 포기했다.","그녀는 꿈을 꾼 적이 없었다."] },
    { type: "meaning", sentence: "The report suggests that regular exercise reduces stress.", answer: "그 보고서는 규칙적인 운동이 스트레스를 줄여 준다고 시사한다.", choices: ["그 보고서는 규칙적인 운동이 스트레스를 줄여 준다고 시사한다.","그 보고서는 운동이 스트레스를 늘린다고 주장한다.","그 보고서는 운동과 스트레스가 무관하다고 한다.","그 보고서는 휴식이 스트레스를 줄인다고 한다."] },
    { type: "meaning", sentence: "He would rather stay home than go out in this cold weather.", answer: "그는 이렇게 추운 날씨에 외출하느니 차라리 집에 있겠다고 한다.", choices: ["그는 이렇게 추운 날씨에 외출하느니 차라리 집에 있겠다고 한다.","그는 추운 날씨에도 외출하는 것을 좋아한다.","그는 집보다 밖이 더 편하다고 느낀다.","그는 날씨와 상관없이 항상 외출한다."] },
    { type: "meaning", sentence: "The new policy is expected to benefit small businesses.", answer: "그 새로운 정책은 소규모 사업체에 이익을 줄 것으로 예상된다.", choices: ["그 새로운 정책은 소규모 사업체에 이익을 줄 것으로 예상된다.","그 새로운 정책은 대기업에만 유리하다.","그 정책은 사업체에 손해를 끼칠 것이다.","그 정책은 아직 시행되지 않았다."] },
    { type: "meaning", sentence: "By the time we arrived, the concert had already started.", answer: "우리가 도착했을 때는 콘서트가 이미 시작된 상태였다.", choices: ["우리가 도착했을 때는 콘서트가 이미 시작된 상태였다.","우리는 콘서트가 시작되기 전에 도착했다.","콘서트는 우리가 떠난 후에 시작되었다.","우리는 콘서트에 가지 못했다."] },
    { type: "meaning", sentence: "She is not only intelligent but also very hardworking.", answer: "그녀는 똑똑할 뿐만 아니라 매우 성실하기도 하다.", choices: ["그녀는 똑똑할 뿐만 아니라 매우 성실하기도 하다.","그녀는 똑똑하지만 게으르다.","그녀는 성실하지만 똑똑하지는 않다.","그녀는 똑똑하지도 성실하지도 않다."] },
    { type: "meaning", sentence: "The government plans to invest more money in education.", answer: "정부는 교육에 더 많은 돈을 투자할 계획이다.", choices: ["정부는 교육에 더 많은 돈을 투자할 계획이다.","정부는 교육 예산을 줄이려고 한다.","정부는 교육에 관심이 없다.","정부는 이미 교육에 충분히 투자했다."] },
    { type: "meaning", sentence: "Unless we act now, the problem will only get worse.", answer: "우리가 지금 행동하지 않으면 그 문제는 더 나빠지기만 할 것이다.", choices: ["우리가 지금 행동하지 않으면 그 문제는 더 나빠지기만 할 것이다.","우리가 행동하면 문제는 저절로 사라진다.","그 문제는 이미 해결되었다.","우리는 그 문제에 대해 걱정할 필요가 없다."] },
    { type: "meaning", sentence: "The author describes his childhood in vivid detail.", answer: "그 작가는 자신의 어린 시절을 생생하게 자세히 묘사한다.", choices: ["그 작가는 자신의 어린 시절을 생생하게 자세히 묘사한다.","그 작가는 어린 시절을 기억하지 못한다.","그 작가는 미래에 대해 상상하며 쓴다.","그 작가는 자신의 이야기를 숨긴다."] },
    { type: "meaning", sentence: "It is essential to consider both sides of the argument.", answer: "논쟁의 양쪽 측면을 모두 고려하는 것이 필수적이다.", choices: ["논쟁의 양쪽 측면을 모두 고려하는 것이 필수적이다.","한쪽 의견만 듣는 것이 더 낫다.","논쟁은 피하는 것이 가장 좋다.","양쪽 의견은 고려할 필요가 없다."] },
    { type: "meaning", sentence: "The company apologized for the delay in shipping.", answer: "그 회사는 배송 지연에 대해 사과했다.", choices: ["그 회사는 배송 지연에 대해 사과했다.","그 회사는 배송이 빨랐다고 자랑했다.","그 회사는 배송을 취소했다.","고객이 회사에 사과했다."] },
    { type: "meaning", sentence: "He gradually realized that honesty was the best policy.", answer: "그는 정직이 최선의 방책임을 점차 깨달았다.", choices: ["그는 정직이 최선의 방책임을 점차 깨달았다.","그는 거짓말이 더 편하다고 생각했다.","그는 정직이 무엇인지 몰랐다.","그는 처음부터 정직했다."] },
    { type: "meaning", sentence: "The teacher praised the student for her creative idea.", answer: "선생님은 그 학생의 창의적인 생각을 칭찬했다.", choices: ["선생님은 그 학생의 창의적인 생각을 칭찬했다.","선생님은 학생의 생각을 비판했다.","학생은 선생님을 칭찬했다.","선생님은 학생에게 벌을 주었다."] },
    { type: "meaning", sentence: "Many people believe that technology makes life easier.", answer: "많은 사람들은 기술이 삶을 더 편리하게 만든다고 믿는다.", choices: ["많은 사람들은 기술이 삶을 더 편리하게 만든다고 믿는다.","많은 사람들은 기술이 삶을 어렵게 한다고 생각한다.","사람들은 기술에 관심이 없다.","기술은 삶에 아무런 영향을 주지 않는다."] },
    { type: "meaning", sentence: "She managed to solve the puzzle after several attempts.", answer: "그녀는 여러 번의 시도 끝에 그 퍼즐을 풀어냈다.", choices: ["그녀는 여러 번의 시도 끝에 그 퍼즐을 풀어냈다.","그녀는 첫 시도에 퍼즐을 풀었다.","그녀는 퍼즐 풀기를 포기했다.","그녀는 퍼즐을 풀 수 없었다."] },
    { type: "meaning", sentence: "The article points out the importance of a balanced diet.", answer: "그 기사는 균형 잡힌 식단의 중요성을 지적한다.", choices: ["그 기사는 균형 잡힌 식단의 중요성을 지적한다.","그 기사는 다이어트가 위험하다고 말한다.","그 기사는 음식에 대해 다루지 않는다.","그 기사는 운동의 중요성만 강조한다."] },
    { type: "meaning", sentence: "We must respect the opinions of those who disagree with us.", answer: "우리는 우리와 의견이 다른 사람들의 생각을 존중해야 한다.", choices: ["우리는 우리와 의견이 다른 사람들의 생각을 존중해야 한다.","우리와 다른 의견은 무시해도 된다.","같은 의견을 가진 사람만 존중해야 한다.","의견이 다르면 다투어야 한다."] },
    { type: "meaning", sentence: "The experiment failed, but it provided valuable lessons.", answer: "그 실험은 실패했지만 값진 교훈을 주었다.", choices: ["그 실험은 실패했지만 값진 교훈을 주었다.","그 실험은 성공하여 상을 받았다.","그 실험에서 배울 점은 없었다.","그 실험은 진행되지 않았다."] },
    { type: "meaning", sentence: "He devoted his life to helping people in need.", answer: "그는 어려움에 처한 사람들을 돕는 데 자신의 삶을 바쳤다.", choices: ["그는 어려움에 처한 사람들을 돕는 데 자신의 삶을 바쳤다.","그는 자신만을 위해 살았다.","그는 도움이 필요했지만 받지 못했다.","그는 다른 사람을 돕기를 거부했다."] },
    { type: "meaning", sentence: "The two friends have known each other since childhood.", answer: "그 두 친구는 어린 시절부터 서로 알고 지내 왔다.", choices: ["그 두 친구는 어린 시절부터 서로 알고 지내 왔다.","그 두 친구는 최근에 처음 만났다.","그들은 친구가 아니라 형제이다.","그들은 서로를 잘 알지 못한다."] }
  ],
  9: [
    { type: "meaning", sentence: "Had she known about the traffic, she would have left earlier.", answer: "교통 상황을 알았더라면 그녀는 더 일찍 떠났을 것이다.", choices: ["교통 상황을 알았더라면 그녀는 더 일찍 떠났을 것이다.","그녀는 교통 상황을 알고 일찍 떠났다.","그녀는 교통 상황에 관심이 없었다.","그녀는 일찍 떠났지만 길이 막혔다."] },
    { type: "meaning", sentence: "The research indicates a strong correlation between sleep and memory.", answer: "그 연구는 수면과 기억 사이에 강한 상관관계가 있음을 보여 준다.", choices: ["그 연구는 수면과 기억 사이에 강한 상관관계가 있음을 보여 준다.","그 연구는 수면과 기억이 무관하다고 밝혔다.","그 연구는 기억이 수면을 방해한다고 한다.","그 연구는 아직 결론을 내리지 못했다."] },
    { type: "meaning", sentence: "Rather than complaining, he chose to find a practical solution.", answer: "불평하기보다 그는 실질적인 해결책을 찾기로 선택했다.", choices: ["불평하기보다 그는 실질적인 해결책을 찾기로 선택했다.","그는 해결책을 찾지 못하고 불평만 했다.","그는 문제를 무시하기로 했다.","그는 다른 사람에게 책임을 떠넘겼다."] },
    { type: "meaning", sentence: "The novel explores the complex relationship between memory and identity.", answer: "그 소설은 기억과 정체성 사이의 복잡한 관계를 탐구한다.", choices: ["그 소설은 기억과 정체성 사이의 복잡한 관계를 탐구한다.","그 소설은 단순한 사랑 이야기를 다룬다.","그 소설은 역사적 전쟁을 배경으로 한다.","그 소설은 미래의 기술을 예측한다."] },
    { type: "meaning", sentence: "Critics argue that the policy overlooks the needs of rural communities.", answer: "비평가들은 그 정책이 농촌 지역 사회의 필요를 간과한다고 주장한다.", choices: ["비평가들은 그 정책이 농촌 지역 사회의 필요를 간과한다고 주장한다.","비평가들은 그 정책이 농촌을 잘 돕는다고 칭찬한다.","그 정책은 도시만을 무시한다.","비평가들은 그 정책에 관심이 없다."] },
    { type: "meaning", sentence: "Not until he lost his job did he realize the value of hard work.", answer: "직장을 잃고 나서야 비로소 그는 노력의 가치를 깨달았다.", choices: ["직장을 잃고 나서야 비로소 그는 노력의 가치를 깨달았다.","그는 직장을 잃기 전에 노력의 가치를 알았다.","그는 노력의 가치를 끝내 깨닫지 못했다.","그는 직장을 잃지 않았다."] },
    { type: "meaning", sentence: "The committee postponed the decision due to insufficient evidence.", answer: "위원회는 증거가 불충분하여 결정을 미루었다.", choices: ["위원회는 증거가 불충분하여 결정을 미루었다.","위원회는 충분한 증거를 바탕으로 결정했다.","위원회는 증거 없이 서둘러 결정했다.","위원회는 결정을 취소했다."] },
    { type: "meaning", sentence: "Her argument was so persuasive that even her critics agreed.", answer: "그녀의 주장은 매우 설득력이 있어서 비판자들조차 동의했다.", choices: ["그녀의 주장은 매우 설득력이 있어서 비판자들조차 동의했다.","그녀의 주장은 약해서 아무도 동의하지 않았다.","비판자들은 끝까지 그녀에게 반대했다.","그녀는 주장을 펼치지 못했다."] },
    { type: "meaning", sentence: "The scientist emphasized the need for further investigation.", answer: "그 과학자는 추가적인 조사가 필요하다는 점을 강조했다.", choices: ["그 과학자는 추가적인 조사가 필요하다는 점을 강조했다.","그 과학자는 조사가 이미 충분하다고 말했다.","그 과학자는 조사를 중단하자고 제안했다.","그 과학자는 조사에 반대했다."] },
    { type: "meaning", sentence: "Despite the risks involved, they decided to pursue the venture.", answer: "수반되는 위험에도 불구하고 그들은 그 사업을 추진하기로 결정했다.", choices: ["수반되는 위험에도 불구하고 그들은 그 사업을 추진하기로 결정했다.","위험이 없어서 그들은 쉽게 결정했다.","그들은 위험 때문에 사업을 포기했다.","그들은 사업에 대해 논의하지 않았다."] },
    { type: "meaning", sentence: "The documentary sheds light on the lives of ordinary workers.", answer: "그 다큐멘터리는 평범한 노동자들의 삶을 조명한다.", choices: ["그 다큐멘터리는 평범한 노동자들의 삶을 조명한다.","그 다큐멘터리는 유명 인사들을 다룬다.","그 다큐멘터리는 노동자들을 비판한다.","그 다큐멘터리는 아무도 주목하지 않았다."] },
    { type: "meaning", sentence: "He tends to underestimate the effort required for such tasks.", answer: "그는 그런 일에 요구되는 노력을 과소평가하는 경향이 있다.", choices: ["그는 그런 일에 요구되는 노력을 과소평가하는 경향이 있다.","그는 노력의 중요성을 항상 과대평가한다.","그는 그런 일에 많은 노력을 기울인다.","그는 노력에 대해 생각하지 않는다."] },
    { type: "meaning", sentence: "The findings challenge widely held assumptions about human behavior.", answer: "그 연구 결과는 인간 행동에 대해 널리 받아들여진 가정에 이의를 제기한다.", choices: ["그 연구 결과는 인간 행동에 대해 널리 받아들여진 가정에 이의를 제기한다.","그 연구 결과는 기존의 가정을 그대로 확인해 준다.","그 연구는 인간 행동과 관련이 없다.","그 연구 결과는 무시되었다."] },
    { type: "meaning", sentence: "She remained composed even in the face of harsh criticism.", answer: "그녀는 혹독한 비판 앞에서도 침착함을 유지했다.", choices: ["그녀는 혹독한 비판 앞에서도 침착함을 유지했다.","그녀는 비판을 받고 크게 화를 냈다.","그녀는 비판이 두려워 도망쳤다.","그녀는 비판을 전혀 받지 않았다."] },
    { type: "meaning", sentence: "The invention revolutionized the way people communicate.", answer: "그 발명품은 사람들이 소통하는 방식에 혁명을 일으켰다.", choices: ["그 발명품은 사람들이 소통하는 방식에 혁명을 일으켰다.","그 발명품은 소통을 더 어렵게 만들었다.","그 발명품은 널리 쓰이지 않았다.","그 발명품은 소통과 관계가 없다."] },
    { type: "meaning", sentence: "It is widely acknowledged that education shapes a nation's future.", answer: "교육이 한 나라의 미래를 형성한다는 것은 널리 인정되고 있다.", choices: ["교육이 한 나라의 미래를 형성한다는 것은 널리 인정되고 있다.","교육은 나라의 미래와 무관하다고 여겨진다.","교육의 가치는 아직 논의되지 않았다.","사람들은 교육을 중요하게 여기지 않는다."] },
    { type: "meaning", sentence: "The manager attributed the success to the team's dedication.", answer: "그 관리자는 성공을 팀의 헌신 덕분으로 돌렸다.", choices: ["그 관리자는 성공을 팀의 헌신 덕분으로 돌렸다.","그 관리자는 성공을 혼자만의 공으로 여겼다.","그 관리자는 실패의 원인을 팀에게 돌렸다.","그 관리자는 팀의 노력을 무시했다."] },
    { type: "meaning", sentence: "The two theories, though different, are not mutually exclusive.", answer: "그 두 이론은 서로 다르지만 상호 배타적이지는 않다.", choices: ["그 두 이론은 서로 다르지만 상호 배타적이지는 않다.","그 두 이론은 완전히 동일하다.","그 두 이론은 결코 함께 성립할 수 없다.","그 두 이론은 아무런 차이가 없다."] },
    { type: "meaning", sentence: "Volunteering abroad broadened her understanding of other cultures.", answer: "해외에서의 봉사 활동은 다른 문화에 대한 그녀의 이해를 넓혀 주었다.", choices: ["해외에서의 봉사 활동은 다른 문화에 대한 그녀의 이해를 넓혀 주었다.","해외 봉사는 그녀에게 아무런 영향을 주지 못했다.","그녀는 봉사 활동을 하지 못했다.","그녀는 자국 문화에만 관심을 두었다."] },
    { type: "meaning", sentence: "The author's tone shifts from optimistic to reflective in the final chapter.", answer: "작가의 어조는 마지막 장에서 낙관적인 것에서 사색적인 것으로 바뀐다.", choices: ["작가의 어조는 마지막 장에서 낙관적인 것에서 사색적인 것으로 바뀐다.","작가의 어조는 처음부터 끝까지 변하지 않는다.","작가의 어조는 슬픔에서 기쁨으로 바뀐다.","마지막 장에는 작가의 어조가 드러나지 않는다."] }
  ],
  10: [
    { type: "meaning", sentence: "The prevailing assumption that technological progress inevitably enhances human welfare has been increasingly called into question.", answer: "기술 진보가 필연적으로 인간의 복지를 향상시킨다는 지배적인 가정이 점점 더 의문시되고 있다.", choices: ["기술 진보가 필연적으로 인간의 복지를 향상시킨다는 지배적인 가정이 점점 더 의문시되고 있다.","기술 진보가 인간의 복지를 향상시킨다는 것은 이미 완전히 입증되었다.","사람들은 기술 진보가 복지에 무관하다고 오래전부터 믿어 왔다.","기술 진보에 대한 관심은 최근 들어 크게 줄어들었다."] },
    { type: "meaning", sentence: "Far from being a passive recipient of information, the reader actively constructs meaning from the text.", answer: "독자는 정보의 수동적인 수용자이기는커녕, 텍스트로부터 의미를 능동적으로 구성한다.", choices: ["독자는 정보의 수동적인 수용자이기는커녕, 텍스트로부터 의미를 능동적으로 구성한다.","독자는 텍스트의 의미를 그대로 수동적으로 받아들일 뿐이다.","독자는 텍스트에서 어떤 의미도 만들어 내지 못한다.","텍스트는 독자에게 아무런 정보도 전달하지 않는다."] },
    { type: "meaning", sentence: "The study's conclusions, while compelling, rest on assumptions that warrant closer scrutiny.", answer: "그 연구의 결론은 설득력이 있기는 하지만, 더 면밀한 검토를 요하는 가정에 기반하고 있다.", choices: ["그 연구의 결론은 설득력이 있기는 하지만, 더 면밀한 검토를 요하는 가정에 기반하고 있다.","그 연구의 결론은 검토가 전혀 필요 없을 만큼 완벽하다.","그 연구의 결론은 설득력이 없어 폐기되었다.","그 연구는 어떤 가정도 세우지 않았다."] },
    { type: "meaning", sentence: "What distinguishes an expert from a novice is not merely knowledge but the ability to apply it flexibly.", answer: "전문가를 초보자와 구별짓는 것은 단순한 지식이 아니라 그것을 유연하게 적용하는 능력이다.", choices: ["전문가를 초보자와 구별짓는 것은 단순한 지식이 아니라 그것을 유연하게 적용하는 능력이다.","전문가와 초보자의 차이는 오직 지식의 양에 있다.","초보자도 전문가만큼 유연하게 지식을 적용할 수 있다.","지식은 전문성과 아무런 관련이 없다."] },
    { type: "meaning", sentence: "The policy, though well-intentioned, produced consequences that were the opposite of what its designers had envisioned.", answer: "그 정책은 좋은 의도였음에도 불구하고 설계자들이 구상했던 것과 정반대의 결과를 낳았다.", choices: ["그 정책은 좋은 의도였음에도 불구하고 설계자들이 구상했던 것과 정반대의 결과를 낳았다.","그 정책은 설계자들이 의도한 대로 정확히 실현되었다.","그 정책은 애초에 나쁜 의도로 만들어졌다.","그 정책은 아무런 결과도 낳지 못했다."] },
    { type: "meaning", sentence: "Rarely does a single discovery transform an entire field as profoundly as this one did.", answer: "단 하나의 발견이 이것만큼 깊이 있게 한 분야 전체를 변화시키는 일은 드물다.", choices: ["단 하나의 발견이 이것만큼 깊이 있게 한 분야 전체를 변화시키는 일은 드물다.","하나의 발견이 한 분야를 바꾸는 일은 흔하게 일어난다.","이 발견은 그 분야에 거의 영향을 주지 못했다.","그 분야는 어떤 발견으로도 변하지 않았다."] },
    { type: "meaning", sentence: "The apparent simplicity of the design belies the complexity of the engineering behind it.", answer: "그 디자인의 겉보기 단순함은 그 이면에 있는 공학의 복잡함을 감추고 있다.", choices: ["그 디자인의 겉보기 단순함은 그 이면에 있는 공학의 복잡함을 감추고 있다.","그 디자인은 단순한 만큼 공학적으로도 단순하다.","그 디자인은 겉보기에도 매우 복잡하다.","그 디자인에는 공학적 요소가 전혀 없다."] },
    { type: "meaning", sentence: "Critics contend that the reform addresses the symptoms rather than the root causes of inequality.", answer: "비평가들은 그 개혁이 불평등의 근본 원인이 아니라 증상을 다룰 뿐이라고 주장한다.", choices: ["비평가들은 그 개혁이 불평등의 근본 원인이 아니라 증상을 다룰 뿐이라고 주장한다.","비평가들은 그 개혁이 근본 원인을 완벽히 해결한다고 본다.","그 개혁은 불평등과 무관하다고 여겨진다.","비평가들은 그 개혁을 전적으로 지지한다."] },
    { type: "meaning", sentence: "It is precisely because the problem seems intractable that innovative approaches become necessary.", answer: "바로 그 문제가 해결하기 어려워 보이기 때문에 혁신적인 접근법이 필요해지는 것이다.", choices: ["바로 그 문제가 해결하기 어려워 보이기 때문에 혁신적인 접근법이 필요해지는 것이다.","그 문제는 쉽게 풀리므로 새로운 접근이 필요 없다.","혁신적인 접근법은 문제를 더 어렵게 만든다.","그 문제는 애초에 존재하지 않는다."] },
    { type: "meaning", sentence: "The author suggests that our perception of time is shaped as much by culture as by biology.", answer: "저자는 시간에 대한 우리의 인식이 생물학만큼이나 문화에 의해서도 형성된다고 시사한다.", choices: ["저자는 시간에 대한 우리의 인식이 생물학만큼이나 문화에 의해서도 형성된다고 시사한다.","저자는 시간 인식이 오직 생물학에 의해서만 결정된다고 본다.","저자는 문화가 시간 인식과 무관하다고 주장한다.","저자는 시간 인식에 대해 아무런 견해가 없다."] },
    { type: "meaning", sentence: "Had the warning signs been heeded, the crisis might well have been averted.", answer: "경고 신호에 주의를 기울였더라면 그 위기는 충분히 피할 수 있었을지도 모른다.", choices: ["경고 신호에 주의를 기울였더라면 그 위기는 충분히 피할 수 있었을지도 모른다.","경고 신호를 무시했지만 위기는 일어나지 않았다.","경고 신호는 위기와 아무런 관련이 없었다.","위기는 어떤 경우에도 피할 수 없었다."] },
    { type: "meaning", sentence: "The novel resists easy interpretation, inviting readers to grapple with its ambiguities.", answer: "그 소설은 손쉬운 해석을 거부하며, 독자들이 그 모호함과 씨름하도록 이끈다.", choices: ["그 소설은 손쉬운 해석을 거부하며, 독자들이 그 모호함과 씨름하도록 이끈다.","그 소설은 누구나 쉽게 이해할 수 있도록 명료하게 쓰였다.","그 소설에는 모호한 부분이 전혀 없다.","독자들은 그 소설을 해석할 필요가 없다."] },
    { type: "meaning", sentence: "Economists disagree over whether the downturn reflects a temporary correction or a structural shift.", answer: "경제학자들은 그 경기 침체가 일시적인 조정을 반영하는지 아니면 구조적 변화를 반영하는지를 두고 의견이 엇갈린다.", choices: ["경제학자들은 그 경기 침체가 일시적인 조정을 반영하는지 아니면 구조적 변화를 반영하는지를 두고 의견이 엇갈린다.","경제학자들은 그 침체가 일시적이라는 데 모두 동의한다.","경제학자들은 경기 침체에 관심이 없다.","그 경기 침체는 어떤 변화도 반영하지 않는다."] },
    { type: "meaning", sentence: "The more we learn about the brain, the more we appreciate how much remains unknown.", answer: "뇌에 대해 더 많이 알수록 우리는 얼마나 많은 것이 여전히 알려지지 않았는지를 더 깊이 실감한다.", choices: ["뇌에 대해 더 많이 알수록 우리는 얼마나 많은 것이 여전히 알려지지 않았는지를 더 깊이 실감한다.","뇌에 대해 알면 알수록 모든 것이 명확해진다.","우리는 뇌에 대해 이미 모든 것을 알고 있다.","뇌 연구는 더 이상 필요하지 않다."] },
    { type: "meaning", sentence: "His refusal to conform to convention was, paradoxically, what earned him widespread respect.", answer: "관습에 순응하기를 거부한 그의 태도가 역설적이게도 그에게 폭넓은 존경을 안겨 준 요인이었다.", choices: ["관습에 순응하기를 거부한 그의 태도가 역설적이게도 그에게 폭넓은 존경을 안겨 준 요인이었다.","그는 관습을 철저히 따랐기 때문에 존경받았다.","그의 태도는 사람들의 반감만을 샀다.","그는 존경을 받은 적이 없다."] },
    { type: "meaning", sentence: "The evidence, taken together, points to a conclusion that few had anticipated.", answer: "그 증거들을 종합해 보면 거의 아무도 예상하지 못했던 결론에 이르게 된다.", choices: ["그 증거들을 종합해 보면 거의 아무도 예상하지 못했던 결론에 이르게 된다.","그 증거들은 모두가 예상했던 결론을 확인해 준다.","그 증거들은 어떤 결론에도 이르지 못한다.","그 증거들은 서로 모순되어 쓸모가 없다."] },
    { type: "meaning", sentence: "Language does not merely describe reality; it actively shapes how we perceive it.", answer: "언어는 단지 현실을 묘사하는 데 그치지 않고, 우리가 현실을 인식하는 방식을 능동적으로 형성한다.", choices: ["언어는 단지 현실을 묘사하는 데 그치지 않고, 우리가 현실을 인식하는 방식을 능동적으로 형성한다.","언어는 단지 현실을 있는 그대로 묘사할 뿐이다.","언어는 현실 인식과 아무런 관련이 없다.","현실은 언어에 의해 전혀 영향을 받지 않는다."] },
    { type: "meaning", sentence: "The initiative succeeded not because of abundant resources but in spite of their scarcity.", answer: "그 계획은 풍부한 자원 덕분이 아니라 자원의 부족에도 불구하고 성공했다.", choices: ["그 계획은 풍부한 자원 덕분이 아니라 자원의 부족에도 불구하고 성공했다.","그 계획은 풍부한 자원 덕분에 쉽게 성공했다.","그 계획은 자원 부족으로 실패했다.","그 계획에는 자원이 필요하지 않았다."] },
    { type: "meaning", sentence: "To dismiss such concerns as mere pessimism would be to ignore the lessons of history.", answer: "그러한 우려를 한낱 비관론으로 치부하는 것은 역사의 교훈을 무시하는 일이 될 것이다.", choices: ["그러한 우려를 한낱 비관론으로 치부하는 것은 역사의 교훈을 무시하는 일이 될 것이다.","그러한 우려는 비관론에 불과하므로 무시해야 한다.","역사는 그러한 우려와 아무 관련이 없다.","그러한 우려는 이미 충분히 논의되었다."] },
    { type: "meaning", sentence: "The theory gained acceptance only after decades of resistance from the scientific community.", answer: "그 이론은 과학계의 수십 년에 걸친 저항 끝에야 비로소 받아들여졌다.", choices: ["그 이론은 과학계의 수십 년에 걸친 저항 끝에야 비로소 받아들여졌다.","그 이론은 발표되자마자 즉시 받아들여졌다.","그 이론은 끝내 과학계에서 거부되었다.","과학계는 그 이론에 관심을 보이지 않았다."] }
  ]
};


/* ---------- 유틸 ---------- */
function randInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(arr) {
     var a = arr.slice();
     for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
     }
     return a;
}

/* ---------- 수학 문제 생성기 (난이도 1~5) ---------- */
function generateMathProblem(level) {
     var a, b, c, q, ans, ops;
     switch (level) {
        case 1: // 1자리 덧셈/뺄셈 (받아올림 없음)
         ops = shuffleArray(["+", "-"])[0];
                 if (ops === "+") {
                            a = randInt(1, 5); b = randInt(1, 4 - (a > 5 ? 0 : 0));
                            a = randInt(1, 8); b = randInt(1, 9 - a);
                            q = a + " + " + b; ans = a + b;
                 } else {
                            a = randInt(2, 9); b = randInt(1, a);
                            q = a + " - " + b; ans = a - b;
                 }
                 break;
        case 2: // 2자리 덧셈/뺄셈 (받아올림 포함)
         ops = shuffleArray(["+", "-"])[0];
                 a = randInt(10, 99); b = randInt(10, 99);
                 if (ops === "-" && b > a) { var t = a; a = b; b = t; }
                 q = a + " " + ops + " " + b; ans = ops === "+" ? a + b : a - b;
                 break;
        case 3: // 2자리x1자리 곱셈 / 나눗셈(나머지 없음)
         ops = shuffleArray(["*", "/"])[0];
                 if (ops === "*") {
                            a = randInt(10, 50); b = randInt(2, 9);
                            q = a + " × " + b; ans = a * b;
                 } else {
                            b = randInt(2, 9); ans = randInt(2, 20); a = b * ans;
                            q = a + " ÷ " + b; 
                 }
                 break;
        case 4: // 3자리 덧셈/뺄셈, 2자리x2자리 곱셈
         ops = shuffleArray(["+", "-", "*"])[0];
                 if (ops === "*") {
                            a = randInt(11, 30); b = randInt(11, 30);
                            q = a + " × " + b; ans = a * b;
                 } else {
                            a = randInt(100, 999); b = randInt(100, 999);
                            if (ops === "-" && b > a) { var t2 = a; a = b; b = t2; }
                            q = a + " " + ops + " " + b; ans = ops === "+" ? a + b : a - b;
                 }
                 break;
        case 5: // 혼합 연산 (괄호, 나머지 있는 나눗셈)
         var pattern = randInt(1, 3);
                 if (pattern === 1) {
                            a = randInt(2, 12); b = randInt(2, 12); c = randInt(1, 20);
                            q = "(" + a + " + " + b + ") × " + c;
                            ans = (a + b) * c;
                 } else if (pattern === 2) {
                            a = randInt(20, 99); b = randInt(2, 9);
                            q = a + " ÷ " + b + " (몫을 정수로, 나머지는 버림)";
                            ans = Math.floor(a / b);
                 } else {
                            a = randInt(50, 300); b = randInt(2, 20); c = randInt(2, 20);
                            q = a + " - " + b + " × " + c;
                            ans = a - b * c;
                 }
                 break;
     }
     return { question: q, answer: ans };
}

/* ---------- 구구단 게임 생성기 (난이도 1~5) ---------- */
function getGugudanRange(level) {
     if (level === 1) return [2, 3, 4];
     if (level === 2) return [2, 3, 4, 5, 6];
     if (level === 3) return [2, 3, 4, 5, 6, 7, 8, 9];
     if (level === 4) return [2, 3, 4, 5, 6, 7, 8, 9];
     return [2, 3, 4, 5, 6, 7, 8, 9];
}
function generateGugudanProblem(level) {
     var range = getGugudanRange(level);
     var a = range[randInt(0, range.length - 1)];
     var b = randInt(1, 9);
     // 난이도 5: 곱셈/역산(나눗셈) 혼합
  if (level === 5 && Math.random() < 0.5) {
         var product = a * b;
         return { question: product + " ÷ " + a + " = ?", answer: b };
  }
     return { question: a + " × " + b + " = ?", answer: a * b };
}

/* ---------- 낱말/영어 퀴즈용 보기 만들기 (오답 3개 + 정답 1개) ---------- */
function buildChoices(correctMeaning, allBank) {
     var pool = [];
     for (var lvl in allBank) {
            allBank[lvl].forEach(function (item) {
                     var m = item.meaning !== undefined ? item.meaning : item.word;
                     if (m !== correctMeaning && pool.indexOf(m) === -1) pool.push(m);
            });
     }
     var wrongs = shuffleArray(pool).slice(0, 3);
     var choices = shuffleArray(wrongs.concat([correctMeaning]));
     return choices;
}

/* ============================================================
   요정이 챗봇 응답 데이터 (규칙 기반, 실제 AI 아님)
   - 키워드 매칭으로만 동작하는 안전한 스크립트 챗봇
   - 우선순위가 높은 카테고리부터 순서대로 검사
   ============================================================ */
var MASCOT_CATEGORIES = [
   {
          name: "greeting",
          keywords: ["안녕", "하이", "헬로", "반가워"],
          replies: [
                   "안녕! 나는 공부요정이야 🧚 오늘도 만나서 반가워!",
                   "안녕하세요! 오늘 하루도 힘차게 시작해볼까?",
                   "하이하이! 요정이가 기다리고 있었어 ✨"
                 ]
   },
   {
          name: "bye",
          keywords: ["안녕히", "잘가", "빠이", "다음에 봐", "또 만나"],
          replies: [
                   "다음에 또 놀러 와! 안녕~ 👋",
                   "잘 가! 오늘도 애썼어, 다음에 또 봐!",
                   "빠이빠이! 요정이가 기다리고 있을게 🧚"
                 ]
   },
   {
          name: "thanks",
          keywords: ["고마워", "고맙", "땡큐"],
          replies: [
                   "천만에! 언제든 불러줘 😊",
                   "그렇게 말해주니 요정이도 기분 좋다!",
                   "고맙긴, 우리 계속 같이 공부하자!"
                 ]
   },
   {
          name: "topic_kamen_rider",
          keywords: ["가면라이더", "라이더"],
          replies: [
                   "가면라이더 좋아하는구나! 요즘은 '가면라이더 젯츠'가 방영 중이래. 어떤 라이더를 제일 좋아해?",
                   "가면라이더는 1971년부터 이어져 온 정말 오래된 시리즈래! 새로운 라이더가 나올 때마다 신기하지 않아?",
                   "변신 벨트로 변신하는 장면 볼 때마다 두근두근하지! 나도 구경하고 싶다 😄"
                 ]
   },
   {
          name: "topic_power_rangers",
          keywords: ["파워레인저", "전대"],
          replies: [
                   "파워레인저 팬이구나! 요즘은 '파워레인저 넘버원포스'가 방영 중이래. 어떤 색 레인저가 제일 멋있어?",
                   "다섯 명이 힘을 합쳐서 커다란 로봇으로 합체하는 장면이 제일 신나지?",
                   "파워레인저는 일본 슈퍼전대 시리즈를 미국에서 새롭게 만든 거래, 신기하지!"
                 ]
   },
   {
          name: "topic_roblox",
          keywords: ["로블록스", "로블럭스"],
          replies: [
                   "로블록스 하는구나! 요즘 피쉬잇이랑 블록스피스, 입양하세요 같은 게임이 인기가 많대. 뭐 하고 놀아?",
                   "로블록스에서 친구들이랑 같이 놀 때가 제일 재밌지! 그런데 낯선 사람이 이상한 말을 걸면 꼭 부모님께 먼저 말씀드리는 게 좋아.",
                   "브룩헤븐이나 99 나이트 인 더 포레스트도 인기가 많다던데, 해봤어?"
                 ]
   },
   {
          name: "compliment_mascot",
          keywords: ["귀여워", "예쁘다", "좋아해", "최고야"],
          replies: [
                   "히히 고마워! 나도 네가 최고라고 생각해 ⭐",
                   "정말?! 요정이 기분이 하늘을 날아갈 것 같아!",
                   "네가 그렇게 말해주니 오늘 하루가 행복해졌어!"
                 ]
   },
   {
          name: "feeling_tired",
          keywords: ["힘들어", "지쳤", "피곤", "하기싫", "귀찮"],
          replies: [
                   "많이 힘들었구나. 잠깐 쉬었다가 다시 해도 괜찮아!",
                   "오늘은 조금만 해도 충분해. 무리하지 마!",
                   "힘든 날도 있는 법이야. 물 한 잔 마시고 다시 해볼까?"
                 ]
   },
   {
          name: "feeling_hard",
          keywords: ["어려워", "모르겠", "못하겠", "틀렸", "실수"],
          replies: [
                   "틀려도 괜찮아! 틀리면서 배우는 거야 💪",
                   "어려운 문제는 난이도를 한 단계 낮춰서 연습해봐도 좋아!",
                   "천천히 해도 돼. 요정이는 너를 응원하고 있어!"
                 ]
   },
   {
          name: "feeling_good",
          keywords: ["재밌", "신나", "좋아", "잘했", "최고", "이겼"],
          replies: [
                   "우와 신난다! 그 기분 그대로 계속 가보자 🎉",
                   "잘하고 있어! 요정이도 덩달아 기분이 좋아지네!",
                   "역시! 오늘 컨디션이 최고인가 봐!"
                 ]
   },
   {
          name: "how_are_you",
          keywords: ["뭐해", "잘 지내", "잘지내", "심심"],
          replies: [
                   "나는 여기서 너 오기만 기다리고 있었지! 심심하면 문제 풀러 갈까?",
                   "요정이는 오늘도 신나! 너는 오늘 기분이 어때?",
                   "심심하면 낱말 게임이나 구구단 게임 어때? 재밌을 거야!"
                 ]
   },
   {
          name: "who_are_you",
          keywords: ["누구야", "이름이 뭐", "너는 누구"],
          replies: [
                   "나는 공부요정이야! 네가 공부할 때 옆에서 응원해주는 친구지 🧚",
                   "요정이라고 불러줘! 앞으로 잘 부탁해!"
                 ]
   },
   {
          name: "subject_math",
          keywords: ["수학", "덧셈", "뺄셈", "곱셈", "나눗셈"],
          replies: [
                   "수학이 궁금하구나! 홈 화면에서 수학 카드를 눌러봐 ➕",
                   "수학은 매일 조금씩 하면 실력이 쑥쑥 늘어! 한번 도전해볼까?"
                 ]
   },
   {
          name: "subject_korean",
          keywords: ["국어", "낱말", "초성"],
          replies: [
                   "낱말 게임 좋아! 초성 힌트 보고 낱말 맞히는 재미가 쏠쏠하지 🔤",
                   "국어 낱말 게임에서 새로운 단어를 많이 배워 보자!"
                 ]
   },
   {
          name: "subject_english",
          keywords: ["영어", "english"],
          replies: [
                   "영어 단어 공부하러 갈까? 4지선다라서 어렵지 않을 거야 🔠",
                   "영어는 매일 몇 개씩만 외워도 금방 늘어!"
                 ]
   },
   {
          name: "subject_gugudan",
          keywords: ["구구단"],
          replies: [
                   "구구단 게임 재밌지! 빠르게 풀다 보면 저절로 외워져 🎮",
                   "구구단은 반복이 최고야. 오늘도 한 판 해볼까?"
                 ]
   }
   ];

var MASCOT_FALLBACK = [
     "오호, 그렇구나! 오늘은 어떤 과목을 공부해볼까?",
     "재밌는 이야기네! 우리 문제 풀면서 더 이야기하자 😊",
     "그렇구나! 요정이는 항상 네 편이야. 힘내자!",
     "음... 그건 선생님이나 부모님이랑 이야기해보는 것도 좋을 것 같아. 우리는 같이 공부하는 거 어때?"
   ];

var MASCOT_DYNAMIC_KEYWORDS = {
     sticker: ["스티커", "몇 개 모았", "몇개 모았"],
     recommend: ["뭐 할까", "뭐할까", "추천해줘", "뭐 공부", "뭐공부", "무슨 공부"]
};

/* ============================================================
   국어 문장 학습 콘텐츠 (v1.5)
   - 난이도 1~2: 빈칸 채우기 (문장 속 낱말 완성, 각 50개)
   - 난이도 3~5: 상황 판단 객관식 (생활 속 올바른 행동 고르기, 각 50개)
   ============================================================ */
var SENTENCE_FILL_BLANK = {
     1: [
        { "sentence": "나는 매일 아침 학교에 ___.", "answers": ["간다"] },
        { "sentence": "우리 가족은 함께 저녁을 ___.", "answers": ["먹는다"] },
        { "sentence": "겨울에는 눈이 자주 ___.", "answers": ["온다"] },
        { "sentence": "친구와 함께 놀이터에서 ___.", "answers": ["논다"] },
        { "sentence": "아침에 일어나면 이불을 ___.", "answers": ["갠다"] },
        { "sentence": "학교가 끝나면 집으로 ___.", "answers": ["돌아간다", "간다"] },
        { "sentence": "비가 오는 날에는 우산을 ___.", "answers": ["쓴다"] },
        { "sentence": "밥을 먹기 전에 손을 ___.", "answers": ["씻는다"] },
        { "sentence": "잠을 자기 전에 이를 ___.", "answers": ["닦는다"] },
        { "sentence": "책을 읽으면 아는 것이 ___.", "answers": ["많아진다", "늘어난다"] },
        { "sentence": "나는 아침에 일찍 ___.", "answers": ["일어난다"] },
        { "sentence": "우리는 체육 시간에 운동장에서 ___.", "answers": ["뛴다"] },
        { "sentence": "나는 매일 밤 아홉 시에 ___.", "answers": ["잔다"] },
        { "sentence": "학교 종이 울리면 교실로 ___.", "answers": ["들어간다"] },
        { "sentence": "나는 국어 시간에 책을 소리 내어 ___.", "answers": ["읽는다"] },
        { "sentence": "미술 시간에 나는 그림을 ___.", "answers": ["그린다"] },
        { "sentence": "나는 음악 시간에 노래를 ___.", "answers": ["부른다"] },
        { "sentence": "급식실에서 나는 밥을 맛있게 ___.", "answers": ["먹는다"] },
        { "sentence": "나는 방과 후에 숙제를 ___.", "answers": ["한다"] },
        { "sentence": "나는 주말에 가족과 나들이를 ___.", "answers": ["간다"] },
        { "sentence": "나는 친구와 함께 공을 ___.", "answers": ["찬다"] },
        { "sentence": "나는 매일 강아지와 산책을 ___.", "answers": ["한다"] },
        { "sentence": "겨울이 되면 나무에 눈이 ___.", "answers": ["쌓인다"] },
        { "sentence": "봄이 되면 꽃이 활짝 ___.", "answers": ["핀다"] },
        { "sentence": "여름에는 날씨가 아주 ___.", "answers": ["덥다"] },
        { "sentence": "가을에는 나뭇잎이 붉게 ___.", "answers": ["물든다"] },
        { "sentence": "나는 도서관에서 책을 조용히 ___.", "answers": ["읽는다"] },
        { "sentence": "나는 매일 알림장을 꼼꼼히 ___.", "answers": ["쓴다"] },
        { "sentence": "시험을 볼 때는 문제를 잘 ___.", "answers": ["읽는다"] },
        { "sentence": "나는 발표할 때 큰 목소리로 ___.", "answers": ["말한다"] },
        { "sentence": "나는 자기 전에 양치질을 꼭 ___.", "answers": ["한다"] },
        { "sentence": "나는 아침마다 이부자리를 스스로 ___.", "answers": ["정리한다"] },
        { "sentence": "나는 학교 갈 때 가방을 미리 ___.", "answers": ["챙긴다"] },
        { "sentence": "나는 친구 생일에 축하 카드를 ___.", "answers": ["쓴다"] },
        { "sentence": "우리 반은 매주 청소를 함께 ___.", "answers": ["한다"] },
        { "sentence": "나는 화분에 물을 매일 ___.", "answers": ["준다"] },
        { "sentence": "나는 신호등이 초록불일 때 길을 ___.", "answers": ["건넌다"] },
        { "sentence": "나는 계단을 오를 때 난간을 ___.", "answers": ["잡는다"] },
        { "sentence": "나는 밥을 먹은 후 그릇을 스스로 ___.", "answers": ["정리한다"] },
        { "sentence": "나는 놀이터에서 그네를 신나게 ___.", "answers": ["탄다"] },
        { "sentence": "나는 줄넘기를 백 번 넘게 ___.", "answers": ["한다"] },
        { "sentence": "나는 겨울에 눈사람을 재미있게 ___.", "answers": ["만든다"] },
        { "sentence": "나는 여름 방학에 수영장에서 ___.", "answers": ["수영한다"] },
        { "sentence": "나는 봄 소풍에서 도시락을 맛있게 ___.", "answers": ["먹는다"] },
        { "sentence": "나는 매일 일기를 한 줄이라도 ___.", "answers": ["쓴다"] },
        { "sentence": "나는 색종이로 종이비행기를 ___.", "answers": ["접는다"] },
        { "sentence": "나는 컴퓨터로 타자 연습을 열심히 ___.", "answers": ["한다"] },
        { "sentence": "나는 친구에게 인사를 밝게 ___.", "answers": ["한다"] },
        { "sentence": "나는 버스를 탈 때 자리를 양보 ___.", "answers": ["한다"] },
        { "sentence": "나는 매일 저녁 일기예보를 ___.", "answers": ["확인한다"] }
          ],
     2: [
        { "sentence": "친구가 넘어졌을 때는 손을 내밀어 ___.", "answers": ["도와준다", "돕는다"] },
        { "sentence": "모르는 문제가 있으면 선생님께 ___.", "answers": ["여쭤본다", "질문한다"] },
        { "sentence": "약속을 했으면 반드시 ___.", "answers": ["지킨다"] },
        { "sentence": "잘못을 했을 때는 솔직하게 ___.", "answers": ["사과한다"] },
        { "sentence": "다른 사람의 물건을 쓸 때는 먼저 ___.", "answers": ["물어본다", "허락을 구한다"] },
        { "sentence": "길을 건널 때는 좌우를 ___.", "answers": ["살핀다"] },
        { "sentence": "쓰레기는 정해진 곳에 ___.", "answers": ["버린다"] },
        { "sentence": "친구가 슬퍼하면 옆에서 ___.", "answers": ["위로한다"] },
        { "sentence": "도서관에서는 목소리를 낮춰 ___.", "answers": ["말한다"] },
        { "sentence": "숙제는 미루지 않고 미리 ___.", "answers": ["한다", "끝낸다"] },
        { "sentence": "친구가 실수를 했을 때는 너그럽게 ___.", "answers": ["이해한다"] },
        { "sentence": "공공장소에서는 다른 사람을 배려하며 ___.", "answers": ["행동한다"] },
        { "sentence": "급식을 먹을 때는 편식하지 않고 골고루 ___.", "answers": ["먹는다"] },
        { "sentence": "물건을 빌렸으면 고맙다는 인사를 꼭 ___.", "answers": ["한다"] },
        { "sentence": "어른을 만나면 공손하게 ___.", "answers": ["인사한다"] },
        { "sentence": "규칙을 어기면 다음부터는 조심하겠다고 ___.", "answers": ["다짐한다"] },
        { "sentence": "팀 활동을 할 때는 서로 힘을 합쳐 ___.", "answers": ["협력한다"] },
        { "sentence": "다른 사람의 의견도 끝까지 ___.", "answers": ["들어준다"] },
        { "sentence": "화가 나도 친구에게 함부로 말하지 ___.", "answers": ["않는다"] },
        { "sentence": "실수로 친구를 다치게 했으면 진심으로 ___.", "answers": ["사과한다"] },
        { "sentence": "위험한 장난은 하지 않도록 ___.", "answers": ["조심한다"] },
        { "sentence": "공동 물건은 다음 사람을 위해 깨끗이 ___.", "answers": ["사용한다"] },
        { "sentence": "급한 일이 있을 때는 어른에게 먼저 ___.", "answers": ["알린다"] },
        { "sentence": "몸이 아프면 참지 말고 선생님께 ___.", "answers": ["말씀드린다"] },
        { "sentence": "새로운 친구가 전학 오면 반갑게 ___.", "answers": ["맞아준다"] },
        { "sentence": "어려운 이웃을 보면 작은 힘이라도 ___.", "answers": ["보탠다"] },
        { "sentence": "친구의 비밀은 함부로 다른 사람에게 ___.", "answers": ["말하지 않는다"] },
        { "sentence": "급식 줄은 새치기하지 않고 순서대로 ___.", "answers": ["기다린다"] },
        { "sentence": "도서관에서 책을 다 읽으면 제자리에 ___.", "answers": ["꽂아둔다"] },
        { "sentence": "학용품이 없는 친구에게는 나누어 ___.", "answers": ["쓴다"] },
        { "sentence": "놀이 기구는 순서를 지켜서 ___.", "answers": ["탄다"] },
        { "sentence": "다른 사람의 발표를 들을 때는 끝까지 조용히 ___.", "answers": ["경청한다"] },
        { "sentence": "교실에서는 뛰지 않고 천천히 ___.", "answers": ["걷는다"] },
        { "sentence": "잘못된 소문은 사실인지 먼저 ___.", "answers": ["확인한다"] },
        { "sentence": "인터넷에서 예의 없는 말은 하지 ___.", "answers": ["않는다"] },
        { "sentence": "온라인에서 알게 된 사람과는 개인정보를 함부로 ___.", "answers": ["나누지 않는다"] },
        { "sentence": "모둠 활동에서 맡은 역할은 끝까지 책임지고 ___.", "answers": ["해낸다"] },
        { "sentence": "실패하더라도 포기하지 않고 다시 ___.", "answers": ["도전한다"] },
        { "sentence": "선생님 말씀은 집중해서 ___.", "answers": ["듣는다"] },
        { "sentence": "어려운 문제는 친구와 함께 의논해서 ___.", "answers": ["풀어본다"] },
        { "sentence": "공공시설을 이용할 때는 소중하게 ___.", "answers": ["다룬다"] },
        { "sentence": "자연에서는 쓰레기를 함부로 버리지 ___.", "answers": ["않는다"] },
        { "sentence": "동물을 만나면 다치지 않게 조심히 ___.", "answers": ["대한다"] },
        { "sentence": "친구가 화났을 때는 이유를 먼저 ___.", "answers": ["물어본다"] },
        { "sentence": "새로운 규칙이 생기면 이유를 이해하고 ___.", "answers": ["따른다"] },
        { "sentence": "다른 문화를 가진 친구도 차별 없이 ___.", "answers": ["존중한다"] },
        { "sentence": "실수를 한 친구를 놀리지 않고 ___.", "answers": ["감싸준다"] },
        { "sentence": "위급한 상황에서는 침착하게 어른에게 ___.", "answers": ["알린다"] },
        { "sentence": "자신의 생각과 달라도 친구의 의견을 ___.", "answers": ["존중한다"] },
        { "sentence": "하루를 마치면 오늘 배운 것을 스스로 ___.", "answers": ["되돌아본다"] }
          ]
};

var SENTENCE_SITUATIONS = {
     3: [
        {
                 "situation": "친구가 내 연필을 자주 빌려 가서 자꾸 망가뜨려요. 나는 어떻게 해야 할까요?",
                 "choices": ["화가 나서 친구를 때린다", "부모님이나 선생님께 이 상황을 말씀드린다", "아무 말도 하지 않고 계속 참는다", "친구의 물건을 몰래 망가뜨린다"],
                 "answer": "부모님이나 선생님께 이 상황을 말씀드린다"
        },
        {
                 "situation": "학교에 준비물을 안 가져와서 곤란해요. 어떻게 해야 할까요?",
                 "choices": ["선생님께 솔직하게 말씀드린다", "친구 것을 몰래 가져간다", "그냥 수업을 안 듣는다", "거짓말로 아프다고 한다"],
                 "answer": "선생님께 솔직하게 말씀드린다"
        },
        {
                 "situation": "복도에서 뛰다가 친구와 부딪혔어요. 어떻게 해야 할까요?",
                 "choices": ["못 본 척 지나간다", "친구 탓을 한다", "괜찮은지 물어보고 사과한다", "화를 내며 소리친다"],
                 "answer": "괜찮은지 물어보고 사과한다"
        },
        {
                 "situation": "인터넷에서 모르는 사람이 이름, 학교, 주소 같은 개인정보를 물어봐요. 어떻게 해야 할까요?",
                 "choices": ["알려주지 않고 부모님께 말씀드린다", "궁금해할 것 같아서 다 알려준다", "친한 친구에게만 알려준다", "재미로 거짓 정보를 알려준다"],
                 "answer": "알려주지 않고 부모님께 말씀드린다"
        },
        {
                 "situation": "친구가 준비물을 안 가져와서 속상해 해요. 어떻게 해야 할까요?",
                 "choices": ["모른 척한다", "놀린다", "내 것을 나눠 쓴다", "다른 친구에게 소문낸다"],
                 "answer": "내 것을 나눠 쓴다"
        },
        {
                 "situation": "수업 시간에 화장실이 급해요. 어떻게 해야 할까요?",
                 "choices": ["손을 들고 선생님께 여쭤본다", "조용히 몰래 나간다", "참고 아무 말도 안 한다", "옆 친구에게만 말하고 나간다"],
                 "answer": "손을 들고 선생님께 여쭤본다"
        },
        {
                 "situation": "친구의 필통에서 예쁜 지우개를 발견했어요. 어떻게 해야 할까요?",
                 "choices": ["허락을 받고 구경만 한다", "몰래 가져간다", "친구 몰래 써 본다", "다른 친구에게 자랑하듯 보여준다"],
                 "answer": "허락을 받고 구경만 한다"
        },
        {
                 "situation": "학교 계단에서 친구들이 서로 밀치며 장난을 쳐요. 나는 어떻게 해야 할까요?",
                 "choices": ["같이 밀친다", "위험하니 그만하자고 말한다", "못 본 척한다", "더 세게 밀친다"],
                 "answer": "위험하니 그만하자고 말한다"
        },
        {
                 "situation": "급식실에서 새치기하는 친구를 봤어요. 어떻게 해야 할까요?",
                 "choices": ["나도 새치기한다", "순서를 지켜달라고 부드럽게 말한다", "큰 소리로 망신을 준다", "그냥 참고 아무 말 안 한다"],
                 "answer": "순서를 지켜달라고 부드럽게 말한다"
        },
        {
                 "situation": "체육 시간에 팀을 나누는데 나만 뽑히지 않았어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 경기를 안 한다", "속상하지만 선생님께 말씀드리고 참여 방법을 찾는다", "다른 친구를 탓한다", "혼자 집에 가버린다"],
                 "answer": "속상하지만 선생님께 말씀드리고 참여 방법을 찾는다"
        },
        {
                 "situation": "친구가 내 그림을 보고 못 그렸다고 놀려요. 어떻게 해야 할까요?",
                 "choices": ["속상한 마음을 솔직히 말한다", "친구의 그림을 찢는다", "똑같이 놀린다", "아무 말 없이 계속 참는다"],
                 "answer": "속상한 마음을 솔직히 말한다"
        },
        {
                 "situation": "수업 준비물을 깜빡한 친구가 빌려달라고 해요. 나도 하나뿐인데 어떻게 해야 할까요?",
                 "choices": ["못 본 척한다", "상황을 설명하고 같이 쓸 방법을 찾는다", "화를 낸다", "선생님께 친구를 이른다"],
                 "answer": "상황을 설명하고 같이 쓸 방법을 찾는다"
        },
        {
                 "situation": "교실 바닥에 물이 쏟아져 있는 것을 발견했어요. 어떻게 해야 할까요?",
                 "choices": ["그냥 지나간다", "선생님께 알리고 미끄러지지 않게 조심하라고 알린다", "재미있어서 밟고 논다", "다른 친구에게만 몰래 알려준다"],
                 "answer": "선생님께 알리고 미끄러지지 않게 조심하라고 알린다"
        },
        {
                 "situation": "친구가 아파 보이는데 계속 참고 수업을 들어요. 어떻게 해야 할까요?",
                 "choices": ["신경 쓰지 않는다", "선생님께 알려서 도움을 받게 한다", "놀린다", "소문을 낸다"],
                 "answer": "선생님께 알려서 도움을 받게 한다"
        },
        {
                 "situation": "미술 준비물로 산 색연필을 친구가 실수로 부러뜨렸어요. 어떻게 해야 할까요?",
                 "choices": ["화를 내며 소리 지른다", "속상하지만 실수였다는 것을 이해하고 이야기한다", "친구 물건을 부순다", "아무 말 없이 절교한다"],
                 "answer": "속상하지만 실수였다는 것을 이해하고 이야기한다"
        },
        {
                 "situation": "도서관에서 큰 소리로 떠드는 친구를 봤어요. 어떻게 해야 할까요?",
                 "choices": ["같이 떠든다", "조용히 해달라고 부탁한다", "못 들은 척한다", "선생님께 몰래 이르고 놀린다"],
                 "answer": "조용히 해달라고 부탁한다"
        },
        {
                 "situation": "학교 앞 횡단보도에 초록불이 깜빡여요. 어떻게 해야 할까요?",
                 "choices": ["빨리 뛰어서 건넌다", "다음 신호를 기다린다", "눈을 감고 건넌다", "친구를 밀며 먼저 건넌다"],
                 "answer": "다음 신호를 기다린다"
        },
        {
                 "situation": "낯선 어른이 길을 물으며 같이 가자고 해요. 어떻게 해야 할까요?",
                 "choices": ["따라간다", "정중히 거절하고 어른에게 도움을 요청한다", "혼자 멀리 데려다준다", "대답하지 않고 계속 따라간다"],
                 "answer": "정중히 거절하고 어른에게 도움을 요청한다"
        },
        {
                 "situation": "친구가 준비물이 없어서 수업에 참여하지 못하고 있어요. 어떻게 해야 할까요?",
                 "choices": ["혼자 다 쓴다", "함께 나눠 쓰자고 말한다", "선생님께 이른다", "못 본 척한다"],
                 "answer": "함께 나눠 쓰자고 말한다"
        },
        {
                 "situation": "쉬는 시간에 다친 친구를 발견했어요. 어떻게 해야 할까요?",
                 "choices": ["사진을 찍고 웃는다", "선생님께 바로 알린다", "그냥 지나간다", "친구들에게 소문을 낸다"],
                 "answer": "선생님께 바로 알린다"
        },
        {
                 "situation": "교실에 친구의 지갑이 떨어져 있는 것을 발견했어요. 어떻게 해야 할까요?",
                 "choices": ["그냥 가진다", "선생님께 가져다 드린다", "안에 든 돈을 쓴다", "다른 친구에게 준다"],
                 "answer": "선생님께 가져다 드린다"
        },
        {
                 "situation": "놀이터에서 어린 동생이 넘어져 울고 있어요. 어떻게 해야 할까요?",
                 "choices": ["못 본 척 논다", "괜찮은지 살펴보고 도와준다", "더 크게 운다고 놀린다", "그냥 자리를 피한다"],
                 "answer": "괜찮은지 살펴보고 도와준다"
        },
        {
                 "situation": "수업 시간에 옆 친구가 자꾸 말을 걸어 집중이 안 돼요. 어떻게 해야 할까요?",
                 "choices": ["같이 계속 이야기한다", "수업 끝나고 이야기하자고 조용히 말한다", "화를 내며 소리친다", "선생님 몰래 무시한다"],
                 "answer": "수업 끝나고 이야기하자고 조용히 말한다"
        },
        {
                 "situation": "체험학습에서 줄을 서다가 친구가 새치기를 했어요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 새치기한다", "차례를 지켜달라고 말한다", "크게 화를 낸다", "선생님께 몰래 이르고 흉을 본다"],
                 "answer": "차례를 지켜달라고 말한다"
        },
        {
                 "situation": "친구가 준비물을 잃어버려서 속상해해요. 어떻게 해야 할까요?",
                 "choices": ["잘 챙기지 못했다고 나무란다", "같이 찾아보고 위로해준다", "무시한다", "소문을 낸다"],
                 "answer": "같이 찾아보고 위로해준다"
        },
        {
                 "situation": "미술 시간에 물감이 옷에 튀어서 친구가 걱정해요. 어떻게 해야 할까요?",
                 "choices": ["놀린다", "괜찮다고 안심시켜 준다", "모른 척한다", "선생님께 친구가 잘못했다고 이른다"],
                 "answer": "괜찮다고 안심시켜 준다"
        },
        {
                 "situation": "쉬는 시간에 친구들이 나만 빼고 게임 이야기를 해요. 어떻게 해야 할까요?",
                 "choices": ["화를 내며 자리를 뜬다", "나도 끼워달라고 자연스럽게 물어본다", "뒤에서 험담한다", "다른 친구를 험담하며 끼어든다"],
                 "answer": "나도 끼워달라고 자연스럽게 물어본다"
        },
        {
                 "situation": "학교 텃밭에서 기른 채소를 친구가 허락 없이 뽑았어요. 어떻게 해야 할까요?",
                 "choices": ["크게 화를 낸다", "이유를 물어보고 함께 선생님께 말씀드린다", "나도 몰래 뽑는다", "못 본 척한다"],
                 "answer": "이유를 물어보고 함께 선생님께 말씀드린다"
        },
        {
                 "situation": "체육 시간에 규칙을 어기고 반칙하는 친구를 봤어요. 어떻게 해야 할까요?",
                 "choices": ["나도 반칙한다", "규칙을 지키자고 말한다", "심판에게 몰래 화풀이한다", "못 본 척 계속 넘어간다"],
                 "answer": "규칙을 지키자고 말한다"
        },
        {
                 "situation": "친구가 준 생일 선물이 마음에 들지 않아요. 어떻게 해야 할까요?",
                 "choices": ["싫은 티를 낸다", "고맙다는 마음을 표현한다", "바로 돌려준다", "다른 친구에게 험담한다"],
                 "answer": "고맙다는 마음을 표현한다"
        },
        {
                 "situation": "학교 화단의 꽃을 꺾고 노는 친구를 봤어요. 어떻게 해야 할까요?",
                 "choices": ["같이 꺾는다", "꽃을 소중히 하자고 말한다", "못 본 척한다", "선생님께 몰래 거짓말을 보탠다"],
                 "answer": "꽃을 소중히 하자고 말한다"
        },
        {
                 "situation": "친구와 같이 하던 놀이에서 규칙을 두고 다퉜어요. 어떻게 해야 할까요?",
                 "choices": ["놀이를 그만두고 화를 낸다", "서로 규칙을 이야기해서 맞춰본다", "억지로 내 규칙만 우긴다", "다른 친구들에게 험담한다"],
                 "answer": "서로 규칙을 이야기해서 맞춰본다"
        },
        {
                 "situation": "급식 시간에 짝꿍이 편식을 심하게 해요. 어떻게 해야 할까요?",
                 "choices": ["억지로 먹인다", "조금씩 먹어보라고 다정하게 권한다", "놀린다", "선생님께 이르고 흉본다"],
                 "answer": "조금씩 먹어보라고 다정하게 권한다"
        },
        {
                 "situation": "친구가 실수로 내 신발을 밟아서 더러워졌어요. 어떻게 해야 할까요?",
                 "choices": ["화를 내며 밀친다", "실수였음을 이해하고 사과를 받아들인다", "똑같이 밟는다", "하루 종일 말을 안 한다"],
                 "answer": "실수였음을 이해하고 사과를 받아들인다"
        },
        {
                 "situation": "반 친구들이 청소를 안 하고 몰래 도망가요. 나는 어떻게 해야 할까요?",
                 "choices": ["나도 같이 도망간다", "맡은 청소를 끝까지 한다", "다른 친구를 대신 시킨다", "화내며 소리친다"],
                 "answer": "맡은 청소를 끝까지 한다"
        },
        {
                 "situation": "인터넷 게임에서 모르는 사람이 계속 욕을 해요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 욕을 한다", "대화를 차단하고 어른에게 알린다", "계속 대화를 이어간다", "아무에게도 말하지 않는다"],
                 "answer": "대화를 차단하고 어른에게 알린다"
        },
        {
                 "situation": "친구가 아파서 결석했는데 숙제가 뭔지 몰라 걱정해요. 어떻게 해야 할까요?",
                 "choices": ["그냥 모른 척한다", "숙제를 알려주고 안부를 물어본다", "놀린다", "대신 틀린 것을 알려준다"],
                 "answer": "숙제를 알려주고 안부를 물어본다"
        },
        {
                 "situation": "체육대회에서 우리 반이 졌어요. 어떻게 해야 할까요?",
                 "choices": ["이긴 반을 비난한다", "최선을 다한 서로를 격려한다", "팀원 탓을 한다", "화내며 자리를 뜬다"],
                 "answer": "최선을 다한 서로를 격려한다"
        },
        {
                 "situation": "친구의 발표 내용에 실수가 있는 것을 발견했어요. 어떻게 해야 할까요?",
                 "choices": ["발표 중에 큰 소리로 지적한다", "발표가 끝난 뒤 조용히 알려준다", "웃으며 놀린다", "아무 말도 하지 않고 넘어간다"],
                 "answer": "발표가 끝난 뒤 조용히 알려준다"
        },
        {
                 "situation": "놀이 기구를 타려고 줄을 서 있는데 어린 동생이 무서워해요. 어떻게 해야 할까요?",
                 "choices": ["억지로 태운다", "괜찮다고 다독여주고 천천히 기다려준다", "놀린다", "무시하고 먼저 탄다"],
                 "answer": "괜찮다고 다독여주고 천천히 기다려준다"
        },
        {
                 "situation": "학급 회의에서 내 의견과 다른 결정이 내려졌어요. 어떻게 해야 할까요?",
                 "choices": ["화를 내며 반대한다", "다수의 의견을 존중하고 따른다", "규칙을 어긴다", "회의에 참여하지 않는다"],
                 "answer": "다수의 의견을 존중하고 따른다"
        },
        {
                 "situation": "친구가 실수로 급식을 쏟아 옷이 더러워졌어요. 어떻게 해야 할까요?",
                 "choices": ["놀리며 웃는다", "괜찮은지 물어보고 도와준다", "못 본 척 지나간다", "소문을 낸다"],
                 "answer": "괜찮은지 물어보고 도와준다"
        },
        {
                 "situation": "교실에서 물건이 없어져서 친구가 의심을 받고 있어요. 어떻게 해야 할까요?",
                 "choices": ["소문에 같이 동조한다", "사실 확인 없이 판단하지 말자고 말한다", "무조건 그 친구 탓을 한다", "모른 척한다"],
                 "answer": "사실 확인 없이 판단하지 말자고 말한다"
        },
        {
                 "situation": "등굣길에 무거운 짐을 든 할머니를 만났어요. 어떻게 해야 할까요?",
                 "choices": ["못 본 척 지나간다", "짐을 들어드리거나 도움을 여쭤본다", "웃으며 구경만 한다", "사진을 찍는다"],
                 "answer": "짐을 들어드리거나 도움을 여쭤본다"
        },
        {
                 "situation": "학교 앞에서 모르는 사람이 사탕을 주며 따라오라고 해요. 어떻게 해야 할까요?",
                 "choices": ["사탕을 받고 따라간다", "거절하고 바로 어른에게 알린다", "혼자 생각해보고 나중에 간다", "친구에게만 말한다"],
                 "answer": "거절하고 바로 어른에게 알린다"
        },
        {
                 "situation": "학교 대표로 뽑혔는데 자신이 없어서 걱정돼요. 어떻게 해야 할까요?",
                 "choices": ["무조건 포기한다", "선생님과 상의하며 최선을 다해본다", "다른 친구에게 미룬다", "거짓말로 아프다고 한다"],
                 "answer": "선생님과 상의하며 최선을 다해본다"
        },
        {
                 "situation": "친구가 나에게 거짓말을 한 것을 알게 됐어요. 어떻게 해야 할까요?",
                 "choices": ["크게 화내며 절교한다", "왜 그랬는지 차분히 물어본다", "나도 거짓말로 갚아준다", "다른 친구들에게 소문낸다"],
                 "answer": "왜 그랬는지 차분히 물어본다"
        },
        {
                 "situation": "청소 당번을 정했는데 한 친구가 매번 빠져요. 어떻게 해야 할까요?",
                 "choices": ["화내며 다투기만 한다", "이유를 물어보고 선생님과 함께 상의한다", "나도 빠진다", "그 친구를 따돌린다"],
                 "answer": "이유를 물어보고 선생님과 함께 상의한다"
        },
        {
                 "situation": "체육 시간에 다친 친구를 대신해 짐을 들어줘야 할지 고민이에요. 어떻게 해야 할까요?",
                 "choices": ["귀찮아서 모른 척한다", "기꺼이 도와준다", "대가를 요구한다", "다른 친구에게 미룬다"],
                 "answer": "기꺼이 도와준다"
        },
        {
                 "situation": "학급 문고에서 빌린 책을 실수로 더럽혔어요. 어떻게 해야 할까요?",
                 "choices": ["몰래 제자리에 둔다", "선생님께 솔직히 말씀드린다", "다른 책과 바꿔치기한다", "잃어버렸다고 거짓말한다"],
                 "answer": "선생님께 솔직히 말씀드린다"
        }
          ],

     4: [
        {
                 "situation": "친구들이 다른 친구 한 명을 따돌리고 놀리고 있어요. 나는 어떻게 해야 할까요?",
                 "choices": ["같이 놀린다", "못 본 척 지나간다", "선생님께 말씀드리고 그 친구를 도와준다", "나도 그 친구를 피한다"],
                 "answer": "선생님께 말씀드리고 그 친구를 도와준다"
        },
        {
                 "situation": "시험을 보는데 옆 친구가 답을 보여달라고 해요. 어떻게 해야 할까요?",
                 "choices": ["몰래 보여준다", "정중히 거절하고 각자 최선을 다하자고 말한다", "큰 소리로 선생님께 이른다", "일부러 틀린 답을 보여준다"],
                 "answer": "정중히 거절하고 각자 최선을 다하자고 말한다"
        },
        {
                 "situation": "길에서 지갑을 주웠어요. 어떻게 해야 할까요?",
                 "choices": ["그냥 가진다", "친구랑 나눠 가진다", "선생님이나 경찰서에 가져다 드린다", "아무도 모르게 버린다"],
                 "answer": "선생님이나 경찰서에 가져다 드린다"
        },
        {
                 "situation": "친구가 비밀이라며 거짓말이나 물건 훔치기 같은 나쁜 행동을 같이 하자고 해요. 어떻게 해야 할까요?",
                 "choices": ["친구니까 그냥 같이 한다", "단호히 거절하고 필요하면 어른께 알린다", "못 이기는 척 따라간다", "다른 친구에게만 몰래 말한다"],
                 "answer": "단호히 거절하고 필요하면 어른께 알린다"
        },
        {
                 "situation": "온라인 게임에서 모르는 사람이 직접 만나자고 해요. 어떻게 해야 할까요?",
                 "choices": ["혼자 몰래 만나러 간다", "절대 만나지 않고 부모님께 알린다", "친구랑 같이라면 만난다", "대답하지 않고 계속 대화만 한다"],
                 "answer": "절대 만나지 않고 부모님께 알린다"
        },
        {
                 "situation": "친구들이 SNS에서 한 친구를 험담하는 단체 채팅방에 나를 초대했어요. 어떻게 해야 할까요?",
                 "choices": ["같이 험담한다", "참여하지 않고 나가겠다고 말한다", "조용히 읽기만 한다", "다른 친구에게 채팅 내용을 퍼뜨린다"],
                 "answer": "참여하지 않고 나가겠다고 말한다"
        },
        {
                 "situation": "모둠 발표 준비를 나 혼자 다 했는데 다른 친구들이 발표만 하겠다고 해요. 어떻게 해야 할까요?",
                 "choices": ["화를 내며 발표를 망친다", "역할을 다시 나누자고 제안한다", "참고 계속 혼자 다 한다", "선생님께 친구들을 험담한다"],
                 "answer": "역할을 다시 나누자고 제안한다"
        },
        {
                 "situation": "친구가 나에게 다른 친구의 험담을 하며 동조를 요구해요. 어떻게 해야 할까요?",
                 "choices": ["같이 험담한다", "험담에 동조하지 않고 화제를 바꾼다", "그 자리를 떠나며 소문을 낸다", "험담 내용을 더 퍼뜨린다"],
                 "answer": "험담에 동조하지 않고 화제를 바꾼다"
        },
        {
                 "situation": "온라인 수업 중 친구가 화면을 몰래 캡처해 놀리는 사진을 만들었어요. 어떻게 해야 할까요?",
                 "choices": ["재미있어서 같이 퍼뜨린다", "그만하라고 말하고 선생님께 알린다", "못 본 척한다", "나도 다른 친구 사진을 캡처한다"],
                 "answer": "그만하라고 말하고 선생님께 알린다"
        },
        {
                 "situation": "친한 친구가 시험에서 부정행위를 했다고 몰래 털어놨어요. 어떻게 해야 할까요?",
                 "choices": ["비밀로 하고 넘어간다", "정직하게 말할 것을 권하고 필요하면 선생님과 상의한다", "이용해서 협박한다", "바로 다른 친구들에게 소문낸다"],
                 "answer": "정직하게 말할 것을 권하고 필요하면 선생님과 상의한다"
        },
        {
                 "situation": "학급 반장 선거에서 내가 뽑히지 않았어요. 어떻게 해야 할까요?",
                 "choices": ["뽑힌 친구를 질투하며 방해한다", "축하해주고 내 역할에서 최선을 다한다", "결과에 불복해 소란을 피운다", "선생님께 불공평하다고 우긴다"],
                 "answer": "축하해주고 내 역할에서 최선을 다한다"
        },
        {
                 "situation": "친구가 SNS에 내 허락 없이 사진을 올렸어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 친구의 계정을 해킹한다", "삭제를 정중히 요청한다", "아무 말 없이 참는다", "똑같이 몰래 사진을 올려 되갚는다"],
                 "answer": "삭제를 정중히 요청한다"
        },
        {
                 "situation": "모둠 활동 점수를 잘 받으려고 한 친구가 다른 모둠 답을 몰래 베끼자고 해요. 어떻게 해야 할까요?",
                 "choices": ["좋은 점수를 위해 따른다", "거절하고 스스로 해결하자고 말한다", "혼자만 베낀다", "선생님 몰래 다른 모둠에게 알려준다"],
                 "answer": "거절하고 스스로 해결하자고 말한다"
        },
        {
                 "situation": "친구가 게임 아이템을 사려고 부모님 카드번호를 몰래 쓰자고 해요. 어떻게 해야 할까요?",
                 "choices": ["같이 사용한다", "단호히 거절하고 부모님께 허락을 구하라고 말한다", "대신 사용해준다", "다른 친구에게도 알려준다"],
                 "answer": "단호히 거절하고 부모님께 허락을 구하라고 말한다"
        },
        {
                 "situation": "반에서 유행하는 놀이가 위험해 보이는데 친구들이 하자고 해요. 어떻게 해야 할까요?",
                 "choices": ["무리에 끼기 위해 그냥 따른다", "위험성을 이야기하고 안전한 대안을 제안한다", "혼자만 안 한다고 말없이 빠진다", "다른 친구에게 강요한다"],
                 "answer": "위험성을 이야기하고 안전한 대안을 제안한다"
        },
        {
                 "situation": "친구가 자신의 성적을 속여서 부모님께 말했다고 자랑해요. 어떻게 해야 할까요?",
                 "choices": ["부럽다고 나도 따라 한다", "정직이 더 중요하다고 조심스럽게 말한다", "못 들은 척한다", "소문을 내서 창피를 준다"],
                 "answer": "정직이 더 중요하다고 조심스럽게 말한다"
        },
        {
                 "situation": "학교 폭력을 목격했는데 신고하면 보복이 두려워요. 어떻게 해야 할까요?",
                 "choices": ["무서워서 아무에게도 말하지 않는다", "안전한 방법으로 어른에게 알린다", "같이 가담한다", "SNS에 익명으로 소문만 낸다"],
                 "answer": "안전한 방법으로 어른에게 알린다"
        },
        {
                 "situation": "친구들이 한 친구의 별명을 놀리듯 부르며 웃어요. 어떻게 해야 할까요?",
                 "choices": ["같이 별명을 부르며 웃는다", "그만하자고 말하고 그 친구 편이 되어준다", "모른 척 자리를 피한다", "다른 별명을 더 붙인다"],
                 "answer": "그만하자고 말하고 그 친구 편이 되어준다"
        },
        {
                 "situation": "조별 과제 마감이 촉박한데 한 친구가 계속 잠수를 타요. 어떻게 해야 할까요?",
                 "choices": ["화내며 그 친구를 험담한다", "연락해서 상황을 확인하고 선생님과 상의한다", "몫까지 참고 다 떠맡는다", "과제를 포기한다"],
                 "answer": "연락해서 상황을 확인하고 선생님과 상의한다"
        },
        {
                 "situation": "친구가 온라인에서 만난 사람에게 용돈을 보내주라는 부탁을 받았대요. 어떻게 해야 할까요?",
                 "choices": ["도와주라고 부추긴다", "사기일 수 있으니 부모님과 상의하라고 말한다", "모른 척한다", "나도 돈을 보낸다"],
                 "answer": "사기일 수 있으니 부모님과 상의하라고 말한다"
        },
        {
                 "situation": "학급 문집에 실릴 내 글이 친구 것과 비슷하다는 오해를 받았어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 억울함을 숨긴다", "침착하게 사실을 설명하고 증거를 보여준다", "그냥 인정하고 넘어간다", "친구를 탓하며 다툰다"],
                 "answer": "침착하게 사실을 설명하고 증거를 보여준다"
        },
        {
                 "situation": "체육대회 반 대표 선수를 뽑는데 친한 친구가 실력이 부족해도 뽑아달라고 부탁해요. 어떻게 해야 할까요?",
                 "choices": ["우정을 위해 무조건 들어준다", "공정한 기준으로 뽑자고 솔직하게 말한다", "다른 친구들 몰래 편법을 쓴다", "결정을 회피한다"],
                 "answer": "공정한 기준으로 뽑자고 솔직하게 말한다"
        },
        {
                 "situation": "SNS에서 친구가 유행하는 위험한 챌린지에 참여하자고 해요. 어떻게 해야 할까요?",
                 "choices": ["인기를 위해 따라 한다", "위험성을 설명하고 거절한다", "몰래 혼자 해본다", "다른 친구에게 강요한다"],
                 "answer": "위험성을 설명하고 거절한다"
        },
        {
                 "situation": "학교에서 친구의 숙제를 대신 해주면 용돈을 주겠다고 제안받았어요. 어떻게 해야 할까요?",
                 "choices": ["돈을 받고 해준다", "스스로 하는 것이 중요하다고 말하며 거절한다", "반값만 받고 해준다", "다른 친구에게 대신 시킨다"],
                 "answer": "스스로 하는 것이 중요하다고 말하며 거절한다"
        },
        {
                 "situation": "친구가 부모님 몰래 게임을 오래 하려고 거짓말을 꾸며달라고 부탁해요. 어떻게 해야 할까요?",
                 "choices": ["부탁을 들어준다", "거짓말은 도와줄 수 없다고 솔직히 말한다", "반만 거짓말해준다", "다른 핑계를 대신 만들어준다"],
                 "answer": "거짓말은 도와줄 수 없다고 솔직히 말한다"
        },
        {
                 "situation": "반 친구들이 다수결로 정한 규칙이 나에게만 불리하게 느껴져요. 어떻게 해야 할까요?",
                 "choices": ["무조건 규칙을 어긴다", "이유를 설명하며 다시 논의하자고 제안한다", "화내며 참여를 거부한다", "몰래 규칙을 피해간다"],
                 "answer": "이유를 설명하며 다시 논의하자고 제안한다"
        },
        {
                 "situation": "친구가 나에게만 비밀을 털어놨는데 다른 친구가 그 비밀을 캐물어요. 어떻게 해야 할까요?",
                 "choices": ["재미로 말해준다", "친구의 비밀을 지켜준다", "조금만 말해준다", "소문을 부풀려 말한다"],
                 "answer": "친구의 비밀을 지켜준다"
        },
        {
                 "situation": "학급 회장이 특정 친구들만 편애하는 것 같아요. 어떻게 해야 할까요?",
                 "choices": ["뒤에서 험담만 한다", "정중하게 상황을 이야기하고 개선을 요청한다", "나도 편을 갈라 행동한다", "무시하고 넘어간다"],
                 "answer": "정중하게 상황을 이야기하고 개선을 요청한다"
        },
        {
                 "situation": "친구가 몰래 다른 친구의 SNS 비밀번호를 알아냈다고 자랑해요. 어떻게 해야 할까요?",
                 "choices": ["재미있다고 부추긴다", "잘못된 행동임을 알리고 그만두라고 말한다", "나도 알려달라고 한다", "모른 척 넘어간다"],
                 "answer": "잘못된 행동임을 알리고 그만두라고 말한다"
        },
        {
                 "situation": "체험학습에서 친구가 몰래 가져온 위험한 물건을 봤어요. 어떻게 해야 할까요?",
                 "choices": ["못 본 척한다", "위험하다고 알리고 선생님께 말씀드린다", "같이 가지고 논다", "다른 친구에게만 몰래 알린다"],
                 "answer": "위험하다고 알리고 선생님께 말씀드린다"
        },
        {
                 "situation": "친구가 시험 스트레스로 심하게 예민해져 나에게 짜증을 내요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 화를 낸다", "이해하려 노력하고 대화로 풀어본다", "절교를 선언한다", "다른 친구에게 험담한다"],
                 "answer": "이해하려 노력하고 대화로 풀어본다"
        },
        {
                 "situation": "온라인 모둠 과제방에서 한 친구가 계속 욕설을 써요. 어떻게 해야 할까요?",
                 "choices": ["같이 욕을 한다", "그만하라고 요청하고 선생님께 알린다", "아무 말도 하지 않는다", "캡처해서 다른 곳에 퍼뜨린다"],
                 "answer": "그만하라고 요청하고 선생님께 알린다"
        },
        {
                 "situation": "반 친구들이 새로 전학 온 친구를 은근히 따돌려요. 어떻게 해야 할까요?",
                 "choices": ["눈치 보며 같이 따돌린다", "먼저 다가가 함께 어울리자고 한다", "모른 척한다", "소문을 더 퍼뜨린다"],
                 "answer": "먼저 다가가 함께 어울리자고 한다"
        },
        {
                 "situation": "나눠 가진 조별 점수가 불공평하다고 느껴져요. 어떻게 해야 할까요?",
                 "choices": ["화내며 조원을 비난한다", "기여도를 근거로 차분히 이야기한다", "참고 넘어간다", "선생님 몰래 점수를 조작한다"],
                 "answer": "기여도를 근거로 차분히 이야기한다"
        },
        {
                 "situation": "친구가 부모님이 이혼했다고 놀림을 받고 있어요. 어떻게 해야 할까요?",
                 "choices": ["같이 놀린다", "그만하라고 말하고 친구를 위로한다", "모른 척한다", "소문을 더 퍼뜨린다"],
                 "answer": "그만하라고 말하고 친구를 위로한다"
        },
        {
                 "situation": "학급 규칙을 정할 때 소수의 의견이 무시당하는 것 같아요. 어떻게 해야 할까요?",
                 "choices": ["다수 의견만 따르자고 강요한다", "소수 의견도 들어보자고 제안한다", "회의를 무시한다", "몰래 규칙을 어긴다"],
                 "answer": "소수 의견도 들어보자고 제안한다"
        },
        {
                 "situation": "체육 시간에 친구가 다쳤는데 경기에 지장이 될까 봐 숨기려 해요. 어떻게 해야 할까요?",
                 "choices": ["같이 숨긴다", "선생님께 알려 치료받게 한다", "모른 척한다", "다른 친구에게만 말한다"],
                 "answer": "선생님께 알려 치료받게 한다"
        },
        {
                 "situation": "친구가 SNS 팔로워 수를 늘리려고 거짓 정보를 올려요. 어떻게 해야 할까요?",
                 "choices": ["재미있다고 같이 퍼뜨린다", "사실이 아니라고 알려주고 삭제를 권한다", "모른 척 넘어간다", "나도 따라 한다"],
                 "answer": "사실이 아니라고 알려주고 삭제를 권한다"
        },
        {
                 "situation": "조별 발표에서 실수한 친구를 다른 친구들이 비난해요. 어떻게 해야 할까요?",
                 "choices": ["같이 비난한다", "실수를 이해해주고 격려한다", "모른 척한다", "뒤에서 험담한다"],
                 "answer": "실수를 이해해주고 격려한다"
        },
        {
                 "situation": "친구가 힘든 일이 있다며 학원을 빠지고 놀자고 계속 부탁해요. 어떻게 해야 할까요?",
                 "choices": ["무조건 따라 빠진다", "걱정을 이해하되 스스로 해결책을 찾도록 돕는다", "무시하고 거절만 한다", "다른 친구에게 소문낸다"],
                 "answer": "걱정을 이해하되 스스로 해결책을 찾도록 돕는다"
        },
        {
                 "situation": "학교 앞에서 산 물건에 문제가 있어 환불을 요구해야 해요. 어떻게 해야 할까요?",
                 "choices": ["화내며 소리친다", "침착하게 상황을 설명하고 요청한다", "그냥 포기한다", "물건을 부순다"],
                 "answer": "침착하게 상황을 설명하고 요청한다"
        },
        {
                 "situation": "반 친구가 몰래 다른 친구의 그림을 따라 그려서 대회에 냈어요. 어떻게 해야 할까요?",
                 "choices": ["모른 척 넘어간다", "문제라고 알려주고 정직하게 해결하도록 권한다", "같이 따라 한다", "소문만 낸다"],
                 "answer": "문제라고 알려주고 정직하게 해결하도록 권한다"
        },
        {
                 "situation": "친구가 실수로 학교 기물을 파손했는데 들키지 않았어요. 어떻게 해야 할까요?",
                 "choices": ["모르는 척 넘어가자고 한다", "선생님께 사실대로 말씀드리자고 권한다", "다른 사람 탓으로 돌리자고 한다", "소문을 낸다"],
                 "answer": "선생님께 사실대로 말씀드리자고 권한다"
        },
        {
                 "situation": "온라인 수업 중 친구가 대신 출석 체크를 해달라고 부탁해요. 어떻게 해야 할까요?",
                 "choices": ["부탁을 들어준다", "정직하지 않은 방법이라 거절한다", "조건을 걸고 해준다", "다른 친구에게 대신 시킨다"],
                 "answer": "정직하지 않은 방법이라 거절한다"
        },
        {
                 "situation": "친구들이 SNS 투표로 반에서 인기투표를 하며 순위를 매겨요. 어떻게 해야 할까요?",
                 "choices": ["재미로 같이 참여한다", "다른 사람에게 상처가 될 수 있다고 이야기한다", "모른 척한다", "순위를 더 부풀린다"],
                 "answer": "다른 사람에게 상처가 될 수 있다고 이야기한다"
        },
        {
                 "situation": "조별 과제에서 내가 낸 아이디어를 다른 친구가 자기 것이라고 발표해요. 어떻게 해야 할까요?",
                 "choices": ["화내며 소리친다", "차분히 사실을 이야기하고 바로잡는다", "참고 넘어간다", "똑같이 다른 친구 아이디어를 가로챈다"],
                 "answer": "차분히 사실을 이야기하고 바로잡는다"
        },
        {
                 "situation": "친구가 자신이 잘못한 일을 나에게 뒤집어씌우려고 해요. 어떻게 해야 할까요?",
                 "choices": ["억울해도 그냥 참는다", "사실대로 침착하게 설명한다", "똑같이 다른 친구 탓을 한다", "화내며 다툰다"],
                 "answer": "사실대로 침착하게 설명한다"
        },
        {
                 "situation": "학급 투표로 정한 결과에 불만인 친구들이 결과를 무시하자고 해요. 어떻게 해야 할까요?",
                 "choices": ["같이 무시한다", "정해진 결과를 존중하자고 말한다", "화내며 반대한다", "몰래 투표함을 바꾼다"],
                 "answer": "정해진 결과를 존중하자고 말한다"
        },
        {
                 "situation": "SNS에서 친구가 나에 대한 안 좋은 소문을 퍼뜨리고 있다는 걸 알았어요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 소문을 퍼뜨려 되갚는다", "직접 만나서 오해를 풀어본다", "무시하고 참기만 한다", "다른 친구들에게 하소연하며 편을 가른다"],
                 "answer": "직접 만나서 오해를 풀어본다"
        },
        {
                 "situation": "조별 과제 회의에 계속 늦는 친구 때문에 진행이 어려워요. 어떻게 해야 할까요?",
                 "choices": ["화내며 배제시킨다", "이유를 물어보고 함께 해결 방법을 찾는다", "몰래 그 친구 몫까지 다 한다", "선생님께 몰래 험담한다"],
                 "answer": "이유를 물어보고 함께 해결 방법을 찾는다"
        }
          ],

     5: [
        {
                 "situation": "내가 실수로 친구의 소중한 물건을 망가뜨렸어요. 어떻게 해야 할까요?",
                 "choices": ["모르는 척한다", "솔직히 말하고 진심으로 사과한다", "다른 친구 탓으로 돌린다", "조용히 버리고 못 본 척한다"],
                 "answer": "솔직히 말하고 진심으로 사과한다"
        },
        {
                 "situation": "친한 친구가 다른 친구와만 놀고 나를 자꾸 빼놓아서 속상해요. 어떻게 해야 할까요?",
                 "choices": ["화내며 절교를 선언한다", "내 마음을 솔직하게 이야기해본다", "다른 친구들에게 그 친구 험담을 한다", "아무 말 없이 계속 혼자 지낸다"],
                 "answer": "내 마음을 솔직하게 이야기해본다"
        },
        {
                 "situation": "모둠 과제를 하는데 한 친구만 참여를 안 해요. 어떻게 해야 할까요?",
                 "choices": ["그 친구 몫까지 화내며 대신 다 한다", "선생님께 이르고 그 친구를 비난한다", "친구에게 상황을 이야기하고 같이 할 방법을 찾는다", "그냥 포기하고 과제를 안 낸다"],
                 "answer": "친구에게 상황을 이야기하고 같이 할 방법을 찾는다"
        },
        {
                 "situation": "동생이 내 물건을 허락 없이 써서 화가 났어요. 어떻게 해야 할까요?",
                 "choices": ["동생을 크게 혼낸다", "차분히 이야기하고 다음엔 허락을 구해달라고 말한다", "동생 물건을 몰래 망가뜨린다", "부모님께 동생을 크게 혼내달라고 한다"],
                 "answer": "차분히 이야기하고 다음엔 허락을 구해달라고 말한다"
        },
        {
                 "situation": "온라인에서 누군가 나를 놀리는 댓글을 달았어요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 심한 말로 되받아친다", "캡처해두고 부모님이나 선생님께 알린다", "아무에게도 말하지 않고 혼자 참는다", "다른 친구들에게 그 사람을 욕하자고 한다"],
                 "answer": "캡처해두고 부모님이나 선생님께 알린다"
        },
        {
                 "situation": "친구가 몰래 다른 친구의 일기장을 보여달라고 해요. 어떻게 해야 할까요?",
                 "choices": ["재미로 보여준다", "사생활이니 보여줄 수 없다고 말한다", "일부만 보여준다", "대신 내용을 말해준다"],
                 "answer": "사생활이니 보여줄 수 없다고 말한다"
        },
        {
                 "situation": "학급 임원 선거에서 상대 후보를 험담하는 글이 SNS에 올라와요. 어떻게 해야 할까요?",
                 "choices": ["재미로 공유한다", "사실이 아니면 바로잡고 정정을 요청한다", "무시하고 넘어간다", "나도 험담을 보탠다"],
                 "answer": "사실이 아니면 바로잡고 정정을 요청한다"
        },
        {
                 "situation": "친구가 성적을 비교하며 나를 은근히 무시해요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 무시한다", "내 감정을 솔직하게 표현하고 대화를 청한다", "참고 계속 무시당한다", "다른 친구에게 험담한다"],
                 "answer": "내 감정을 솔직하게 표현하고 대화를 청한다"
        },
        {
                 "situation": "조별 과제에서 내가 낸 의견이 무시당하고 다른 친구 의견만 채택됐어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 협조를 거부한다", "이유를 물어보고 내 생각을 다시 제안해본다", "삐져서 참여하지 않는다", "뒤에서 험담한다"],
                 "answer": "이유를 물어보고 내 생각을 다시 제안해본다"
        },
        {
                 "situation": "친구가 부모님께 혼날까 봐 성적표를 조작하려고 해요. 어떻게 해야 할까요?",
                 "choices": ["도와준다", "솔직하게 말씀드리는 것이 낫다고 조언한다", "모른 척한다", "같이 방법을 찾아준다"],
                 "answer": "솔직하게 말씀드리는 것이 낫다고 조언한다"
        },
        {
                 "situation": "SNS에서 유명해지고 싶은 친구가 위험한 영상을 찍자고 해요. 어떻게 해야 할까요?",
                 "choices": ["같이 촬영한다", "위험성을 설명하며 다른 방법을 제안한다", "구경만 한다", "촬영은 안 하고 올리기만 도와준다"],
                 "answer": "위험성을 설명하며 다른 방법을 제안한다"
        },
        {
                 "situation": "친구 사이에 오해가 생겨 서로 말을 안 하고 지내요. 어떻게 해야 할까요?",
                 "choices": ["계속 모른 척한다", "먼저 다가가 대화로 오해를 풀어본다", "다른 친구들에게 험담한다", "절교를 선언한다"],
                 "answer": "먼저 다가가 대화로 오해를 풀어본다"
        },
        {
                 "situation": "학급 자치회에서 결정한 안건이 내 생각과 달라요. 어떻게 해야 할까요?",
                 "choices": ["무시하고 따르지 않는다", "절차를 존중하되 다음 회의에 의견을 낸다", "화내며 규칙을 어긴다", "몰래 다른 친구들을 선동한다"],
                 "answer": "절차를 존중하되 다음 회의에 의견을 낸다"
        },
        {
                 "situation": "친구가 인터넷에서 알게 된 사람에게 사진을 보내려 해요. 어떻게 해야 할까요?",
                 "choices": ["재미로 같이 보낸다", "위험할 수 있다고 말리고 부모님과 상의하게 한다", "모른 척한다", "나도 궁금해서 부추긴다"],
                 "answer": "위험할 수 있다고 말리고 부모님과 상의하게 한다"
        },
        {
                 "situation": "조별 과제 점수가 낮게 나와 팀원들끼리 서로 탓을 해요. 어떻게 해야 할까요?",
                 "choices": ["남 탓만 한다", "각자의 역할을 되짚어보고 개선점을 찾자고 제안한다", "화내며 다툰다", "조용히 무시하고 넘어간다"],
                 "answer": "각자의 역할을 되짚어보고 개선점을 찾자고 제안한다"
        },
        {
                 "situation": "친구가 유명 유튜버의 영상을 그대로 베껴서 과제로 냈어요. 어떻게 해야 할까요?",
                 "choices": ["모른 척 넘어간다", "저작권 문제라고 알려주고 스스로 하도록 권한다", "같이 베낀다", "선생님께 몰래 소문을 낸다"],
                 "answer": "저작권 문제라고 알려주고 스스로 하도록 권한다"
        },
        {
                 "situation": "온라인 채팅에서 친구가 나에게만 부정적인 말을 계속해요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 부정적으로 답한다", "대화를 멈추고 직접 만나 이야기하자고 제안한다", "아무 말 없이 계속 받아준다", "다른 곳에 캡처해서 퍼뜨린다"],
                 "answer": "대화를 멈추고 직접 만나 이야기하자고 제안한다"
        },
        {
                 "situation": "학급 대표로 나갈 대회 준비를 하는데 부담감이 너무 커요. 어떻게 해야 할까요?",
                 "choices": ["무조건 포기한다", "선생님이나 부모님께 부담감을 솔직히 말씀드린다", "억지로 참으며 숨긴다", "다른 친구에게 대신 시킨다"],
                 "answer": "선생님이나 부모님께 부담감을 솔직히 말씀드린다"
        },
        {
                 "situation": "친구가 다이어트를 한다며 며칠째 밥을 거의 안 먹어요. 어떻게 해야 할까요?",
                 "choices": ["대단하다고 부추긴다", "걱정된다고 말하고 어른께 알린다", "모른 척한다", "같이 굶어본다"],
                 "answer": "걱정된다고 말하고 어른께 알린다"
        },
        {
                 "situation": "반 친구들이 특정 친구를 SNS 단체방에서 빼고 자기들끼리만 대화해요. 어떻게 해야 할까요?",
                 "choices": ["같이 빼고 대화한다", "그 친구도 함께할 수 있게 챙긴다", "모른 척한다", "다른 친구에게 이야기하며 소문낸다"],
                 "answer": "그 친구도 함께할 수 있게 챙긴다"
        },
        {
                 "situation": "친구가 부모님 지갑에서 몰래 돈을 가져왔다고 자랑해요. 어떻게 해야 할까요?",
                 "choices": ["부럽다고 부추긴다", "잘못된 행동이라고 말하고 돌려놓기를 권한다", "모른 척한다", "같이 나눠 쓴다"],
                 "answer": "잘못된 행동이라고 말하고 돌려놓기를 권한다"
        },
        {
                 "situation": "학급 문제를 투표로 정했는데 결과에 불복하는 친구가 계속 항의해요. 어떻게 해야 할까요?",
                 "choices": ["같이 항의한다", "절차의 공정함을 설명하며 진정시킨다", "무시한다", "다수 편에 서서 비난한다"],
                 "answer": "절차의 공정함을 설명하며 진정시킨다"
        },
        {
                 "situation": "친구가 힘든 가정 사정을 털어놨는데 다른 친구가 자꾸 캐물어요. 어떻게 해야 할까요?",
                 "choices": ["아는 대로 말해준다", "친구의 사생활이라며 이야기를 돌린다", "조금만 말해준다", "소문을 낸다"],
                 "answer": "친구의 사생활이라며 이야기를 돌린다"
        },
        {
                 "situation": "조별 발표 전날 친구가 갑자기 아파서 참여하지 못하게 됐어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 비난한다", "역할을 나누고 상황을 선생님께 알린다", "발표를 포기한다", "그 친구를 뺀 채 몰래 진행한다"],
                 "answer": "역할을 나누고 상황을 선생님께 알린다"
        },
        {
                 "situation": "친구가 SNS에서 유행하는 자극적인 장난 영상을 따라 하자고 해요. 어떻게 해야 할까요?",
                 "choices": ["인기를 위해 따라 한다", "문제가 될 수 있다고 설명하며 거절한다", "혼자 몰래 해본다", "다른 친구에게 시킨다"],
                 "answer": "문제가 될 수 있다고 설명하며 거절한다"
        },
        {
                 "situation": "학교 대표 선발에서 친한 친구가 아닌 다른 친구가 더 실력이 좋아요. 어떻게 해야 할까요?",
                 "choices": ["우정을 위해 친한 친구를 추천한다", "실력을 기준으로 공정하게 판단한다", "결정을 회피한다", "두 친구 모두와 멀어진다"],
                 "answer": "실력을 기준으로 공정하게 판단한다"
        },
        {
                 "situation": "친구가 온라인에서 산 물건이 사기였다는 것을 알게 됐어요. 어떻게 해야 할까요?",
                 "choices": ["그냥 넘어가라고 한다", "부모님과 상의해서 신고 방법을 알아보자고 권한다", "모른 척한다", "나도 같은 곳에서 사본다"],
                 "answer": "부모님과 상의해서 신고 방법을 알아보자고 권한다"
        },
        {
                 "situation": "학급 봉사활동에서 몇몇 친구만 일을 안 하고 놀아요. 어떻게 해야 할까요?",
                 "choices": ["화내며 몰아세운다", "역할을 다시 나누자고 차분히 제안한다", "나도 같이 논다", "선생님께 몰래 험담한다"],
                 "answer": "역할을 다시 나누자고 차분히 제안한다"
        },
        {
                 "situation": "친구가 SNS 팔로워들에게 나에 대한 거짓 소문을 올렸어요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 되갚는다", "직접 만나 사실을 바로잡자고 제안한다", "무시하고 참는다", "다른 친구들에게 하소연만 한다"],
                 "answer": "직접 만나 사실을 바로잡자고 제안한다"
        },
        {
                 "situation": "친구가 시험 전날 나에게 답을 알려달라고 애원해요. 어떻게 해야 할까요?",
                 "choices": ["우정을 생각해 알려준다", "정직하지 못한 방법이라 거절하고 같이 공부하자고 한다", "조건을 걸고 알려준다", "대신 다른 친구에게 시킨다"],
                 "answer": "정직하지 못한 방법이라 거절하고 같이 공부하자고 한다"
        },
        {
                 "situation": "조별 과제에서 능력 차이로 역할 배분에 갈등이 생겼어요. 어떻게 해야 할까요?",
                 "choices": ["능력이 부족한 친구를 배제한다", "서로의 강점을 살려 역할을 다시 나눈다", "화내며 다툰다", "혼자 다 떠맡는다"],
                 "answer": "서로의 강점을 살려 역할을 다시 나눈다"
        },
        {
                 "situation": "친구가 SNS에서 만난 사람과 실제로 만나기로 약속했다고 해요. 어떻게 해야 할까요?",
                 "choices": ["재미있겠다며 부추긴다", "위험할 수 있으니 부모님과 상의하라고 강력히 권한다", "같이 가주겠다고 한다", "모른 척한다"],
                 "answer": "위험할 수 있으니 부모님과 상의하라고 강력히 권한다"
        },
        {
                 "situation": "학급 회의에서 내가 낸 의견을 다른 친구가 비웃었어요. 어떻게 해야 할까요?",
                 "choices": ["똑같이 비웃는다", "감정을 솔직히 말하고 존중을 요청한다", "다시는 의견을 내지 않는다", "뒤에서 험담한다"],
                 "answer": "감정을 솔직히 말하고 존중을 요청한다"
        },
        {
                 "situation": "친구가 학원 숙제를 대신 해달라고 돈을 준다고 해요. 어떻게 해야 할까요?",
                 "choices": ["돈을 받고 해준다", "스스로 하는 것이 중요하다며 거절한다", "반값만 받고 해준다", "다른 친구에게 대신 시킨다"],
                 "answer": "스스로 하는 것이 중요하다며 거절한다"
        },
        {
                 "situation": "친구가 몰래 시험지를 촬영해서 다른 친구들에게 공유하려 해요. 어떻게 해야 할까요?",
                 "choices": ["같이 공유받는다", "부정행위이니 그만두라고 말한다", "모른 척한다", "나도 다른 시험지를 촬영한다"],
                 "answer": "부정행위이니 그만두라고 말한다"
        },
        {
                 "situation": "온라인 모임에서 익명이라는 이유로 친구들이 서로를 심하게 놀려요. 어떻게 해야 할까요?",
                 "choices": ["같이 놀린다", "익명이어도 예의를 지키자고 말한다", "조용히 나간다", "캡처해서 다른 곳에 퍼뜨린다"],
                 "answer": "익명이어도 예의를 지키자고 말한다"
        },
        {
                 "situation": "학급 특별활동에서 내가 원하지 않는 역할을 억지로 맡게 됐어요. 어떻게 해야 할까요?",
                 "choices": ["무조건 거부하고 참여하지 않는다", "이유를 설명하고 조정을 요청한다", "억지로 참으며 불만만 쌓는다", "다른 친구에게 대신 시킨다"],
                 "answer": "이유를 설명하고 조정을 요청한다"
        },
        {
                 "situation": "친구가 SNS에서 유명해지려고 남을 속이는 콘텐츠를 만들자고 해요. 어떻게 해야 할까요?",
                 "choices": ["재미로 같이 만든다", "다른 사람에게 피해를 줄 수 있다고 설명하며 거절한다", "구경만 한다", "아이디어만 제공한다"],
                 "answer": "다른 사람에게 피해를 줄 수 있다고 설명하며 거절한다"
        },
        {
                 "situation": "조별 과제 결과를 발표하는데 실수한 부분을 다른 친구가 내 탓으로 돌려요. 어떻게 해야 할까요?",
                 "choices": ["억울해도 참는다", "침착하게 사실을 설명하고 함께 책임을 나눈다", "똑같이 남 탓을 한다", "화내며 다툰다"],
                 "answer": "침착하게 사실을 설명하고 함께 책임을 나눈다"
        },
        {
                 "situation": "친구가 몸이 안 좋은데도 대회 준비 때문에 계속 무리해요. 어떻게 해야 할까요?",
                 "choices": ["대단하다고 부추긴다", "건강이 우선이라고 말하며 쉬기를 권한다", "모른 척한다", "같이 무리한다"],
                 "answer": "건강이 우선이라고 말하며 쉬기를 권한다"
        },
        {
                 "situation": "학급 규칙을 어긴 친구를 선생님께 알릴지 고민이에요. 어떻게 해야 할까요?",
                 "choices": ["무조건 모른 척 덮어준다", "친구에게 먼저 이야기하고 스스로 알리도록 권한다", "바로 소문을 낸다", "협박하듯 이용한다"],
                 "answer": "친구에게 먼저 이야기하고 스스로 알리도록 권한다"
        },
        {
                 "situation": "친구가 SNS 댓글로 다른 반 친구와 갈등이 생겨 다투고 있어요. 어떻게 해야 할까요?",
                 "choices": ["편을 갈라 부추긴다", "직접 만나 대화로 풀어보라고 권한다", "모른 척한다", "온라인 다툼을 더 부추긴다"],
                 "answer": "직접 만나 대화로 풀어보라고 권한다"
        },
        {
                 "situation": "조별 활동에서 성과를 혼자 차지하려는 친구가 있어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 다툰다", "팀 전체의 기여를 인정받도록 차분히 이야기한다", "포기하고 넘어간다", "똑같이 성과를 독차지하려 한다"],
                 "answer": "팀 전체의 기여를 인정받도록 차분히 이야기한다"
        },
        {
                 "situation": "친구가 온라인에서 산 계정 정보를 몰래 팔려고 해요. 어떻게 해야 할까요?",
                 "choices": ["같이 판매를 돕는다", "문제가 될 수 있다고 말리고 그만두라고 한다", "모른 척한다", "나도 따라 한다"],
                 "answer": "문제가 될 수 있다고 말리고 그만두라고 한다"
        },
        {
                 "situation": "학급 대표 회의에서 내 제안이 채택되지 않아 실망했어요. 어떻게 해야 할까요?",
                 "choices": ["화내며 회의를 방해한다", "실망감을 인정하되 다음 기회를 준비한다", "다시는 의견을 내지 않는다", "뒤에서 다른 친구들을 선동한다"],
                 "answer": "실망감을 인정하되 다음 기회를 준비한다"
        },
        {
                 "situation": "친구가 SNS에 다른 친구를 비하하는 밈을 만들어 퍼뜨려요. 어떻게 해야 할까요?",
                 "choices": ["재미로 공유한다", "상처가 될 수 있다고 알리고 삭제를 권한다", "모른 척한다", "나도 비슷한 것을 만든다"],
                 "answer": "상처가 될 수 있다고 알리고 삭제를 권한다"
        },
        {
                 "situation": "조별 과제에서 의견 차이로 팀이 둘로 나뉘어 갈등이 생겼어요. 어떻게 해야 할까요?",
                 "choices": ["한쪽 편만 든다", "중재자가 되어 공통점을 찾아본다", "무시하고 혼자 진행한다", "갈등을 더 부추긴다"],
                 "answer": "중재자가 되어 공통점을 찾아본다"
        },
        {
                 "situation": "친구가 스트레스를 풀려고 다른 친구를 놀리는 것을 정당화해요. 어떻게 해야 할까요?",
                 "choices": ["이해한다며 같이 놀린다", "스트레스 해소 방법이 될 수 없다고 말한다", "모른 척한다", "다른 방법으로 놀리라고 조언한다"],
                 "answer": "스트레스 해소 방법이 될 수 없다고 말한다"
        },
        {
                 "situation": "학급 예산을 쓰는 문제로 친구들 의견이 갈려요. 어떻게 해야 할까요?",
                 "choices": ["목소리 큰 쪽 의견만 따른다", "다양한 의견을 모아 투표로 정하자고 제안한다", "화내며 논쟁만 한다", "혼자 결정해버린다"],
                 "answer": "다양한 의견을 모아 투표로 정하자고 제안한다"
        },
        {
                 "situation": "친구가 실수를 인정하지 않고 계속 변명만 해요. 어떻게 해야 할까요?",
                 "choices": ["화내며 몰아세운다", "진솔하게 대화하며 인정할 기회를 준다", "포기하고 관계를 끊는다", "다른 친구들에게 험담한다"],
                 "answer": "진솔하게 대화하며 인정할 기회를 준다"
        }
          ]
};
