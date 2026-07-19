/* ============================================================
   data.js — 콘텐츠 데이터 뱅크 (v1.0)
   - 국어 낱말게임(초성퀴즈) 단어 뱅크
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

/* ---------- 영어: 단어 뜻 맞추기 뱅크 (난이도 1~5, 각 50개) ---------- */
var ENGLISH_WORDS = {
     1: [
        { word: "apple", meaning: "사과" },
        { word: "book", meaning: "책" },
        { word: "cat", meaning: "고양이" },
        { word: "dog", meaning: "개" },
        { word: "egg", meaning: "달걀" },
        { word: "fish", meaning: "물고기" },
        { word: "house", meaning: "집" },
        { word: "milk", meaning: "우유" },
        { word: "sun", meaning: "태양" },
        { word: "tree", meaning: "나무" },
        { word: "ball", meaning: "공" },
        { word: "bag", meaning: "가방" },
        { word: "bed", meaning: "침대" },
        { word: "bird", meaning: "새" },
        { word: "boy", meaning: "소년" },
        { word: "girl", meaning: "소녀" },
        { word: "cup", meaning: "컵" },
        { word: "car", meaning: "자동차" },
        { word: "day", meaning: "낮, 날" },
        { word: "doll", meaning: "인형" },
        { word: "door", meaning: "문" },
        { word: "ear", meaning: "귀" },
        { word: "eye", meaning: "눈" },
        { word: "face", meaning: "얼굴" },
        { word: "farm", meaning: "농장" },
        { word: "foot", meaning: "발" },
        { word: "game", meaning: "게임" },
        { word: "hand", meaning: "손" },
        { word: "hat", meaning: "모자" },
        { word: "key", meaning: "열쇠" },
        { word: "kite", meaning: "연" },
        { word: "lion", meaning: "사자" },
        { word: "map", meaning: "지도" },
        { word: "moon", meaning: "달" },
        { word: "nose", meaning: "코" },
        { word: "pen", meaning: "펜" },
        { word: "pig", meaning: "돼지" },
        { word: "rain", meaning: "비" },
        { word: "ring", meaning: "반지" },
        { word: "room", meaning: "방" },
        { word: "shoe", meaning: "신발" },
        { word: "star", meaning: "별" },
        { word: "table", meaning: "탁자" },
        { word: "toy", meaning: "장난감" },
        { word: "wind", meaning: "바람" },
        { word: "box", meaning: "상자" },
        { word: "cake", meaning: "케이크" },
        { word: "chair", meaning: "의자" },
        { word: "clock", meaning: "시계" },
        { word: "desk", meaning: "책상" }
          ],
     2: [
        { word: "school", meaning: "학교" },
        { word: "friend", meaning: "친구" },
        { word: "family", meaning: "가족" },
        { word: "morning", meaning: "아침" },
        { word: "window", meaning: "창문" },
        { word: "flower", meaning: "꽃" },
        { word: "bicycle", meaning: "자전거" },
        { word: "weather", meaning: "날씨" },
        { word: "kitchen", meaning: "부엌" },
        { word: "holiday", meaning: "휴일" },
        { word: "picture", meaning: "그림, 사진" },
        { word: "animal", meaning: "동물" },
        { word: "garden", meaning: "정원" },
        { word: "breakfast", meaning: "아침 식사" },
        { word: "dinner", meaning: "저녁 식사" },
        { word: "teacher", meaning: "선생님" },
        { word: "student", meaning: "학생" },
        { word: "classroom", meaning: "교실" },
        { word: "playground", meaning: "놀이터" },
        { word: "weekend", meaning: "주말" },
        { word: "birthday", meaning: "생일" },
        { word: "present", meaning: "선물" },
        { word: "umbrella", meaning: "우산" },
        { word: "sandwich", meaning: "샌드위치" },
        { word: "hamburger", meaning: "햄버거" },
        { word: "chicken", meaning: "닭고기" },
        { word: "butterfly", meaning: "나비" },
        { word: "mountain", meaning: "산" },
        { word: "village", meaning: "마을" },
        { word: "country", meaning: "나라" },
        { word: "city", meaning: "도시" },
        { word: "street", meaning: "거리" },
        { word: "market", meaning: "시장" },
        { word: "bathroom", meaning: "화장실" },
        { word: "bedroom", meaning: "침실" },
        { word: "backpack", meaning: "책가방" },
        { word: "notebook", meaning: "공책" },
        { word: "eraser", meaning: "지우개" },
        { word: "scissors", meaning: "가위" },
        { word: "crayon", meaning: "크레용" },
        { word: "balloon", meaning: "풍선" },
        { word: "rainbow", meaning: "무지개" },
        { word: "snowman", meaning: "눈사람" },
        { word: "swimming", meaning: "수영" },
        { word: "dancing", meaning: "춤추기" },
        { word: "singing", meaning: "노래하기" },
        { word: "cooking", meaning: "요리하기" },
        { word: "reading", meaning: "독서" },
        { word: "painting", meaning: "그림 그리기" },
        { word: "shopping", meaning: "쇼핑" }
          ],
     3: [
        { word: "library", meaning: "도서관" },
        { word: "science", meaning: "과학" },
        { word: "history", meaning: "역사" },
        { word: "musician", meaning: "음악가" },
        { word: "hospital", meaning: "병원" },
        { word: "airport", meaning: "공항" },
        { word: "customer", meaning: "손님" },
        { word: "vegetable", meaning: "채소" },
        { word: "adventure", meaning: "모험" },
        { word: "language", meaning: "언어" },
        { word: "computer", meaning: "컴퓨터" },
        { word: "calendar", meaning: "달력" },
        { word: "telephone", meaning: "전화기" },
        { word: "television", meaning: "텔레비전" },
        { word: "camera", meaning: "카메라" },
        { word: "restaurant", meaning: "식당" },
        { word: "vacation", meaning: "방학" },
        { word: "festival", meaning: "축제" },
        { word: "medicine", meaning: "약" },
        { word: "exercise", meaning: "운동" },
        { word: "dangerous", meaning: "위험한" },
        { word: "difficult", meaning: "어려운" },
        { word: "important", meaning: "중요한" },
        { word: "favorite", meaning: "좋아하는" },
        { word: "delicious", meaning: "맛있는" },
        { word: "beautiful", meaning: "아름다운" },
        { word: "wonderful", meaning: "멋진" },
        { word: "interesting", meaning: "흥미로운" },
        { word: "different", meaning: "다른" },
        { word: "several", meaning: "몇몇의" },
        { word: "another", meaning: "다른 하나" },
        { word: "everyone", meaning: "모든 사람" },
        { word: "something", meaning: "어떤 것" },
        { word: "tomorrow", meaning: "내일" },
        { word: "yesterday", meaning: "어제" },
        { word: "afternoon", meaning: "오후" },
        { word: "direction", meaning: "방향" },
        { word: "distance", meaning: "거리" },
        { word: "position", meaning: "위치" },
        { word: "sentence", meaning: "문장" },
        { word: "question", meaning: "질문" },
        { word: "answer", meaning: "답" },
        { word: "subject", meaning: "과목" },
        { word: "grandfather", meaning: "할아버지" },
        { word: "grandmother", meaning: "할머니" },
        { word: "neighbor", meaning: "이웃" },
        { word: "elephant", meaning: "코끼리" },
        { word: "dictionary", meaning: "사전" },
        { word: "furniture", meaning: "가구" },
        { word: "mystery", meaning: "수수께끼" }
          ],
     4: [
        { word: "environment", meaning: "환경" },
        { word: "community", meaning: "공동체" },
        { word: "government", meaning: "정부" },
        { word: "temperature", meaning: "온도" },
        { word: "experiment", meaning: "실험" },
        { word: "continent", meaning: "대륙" },
        { word: "population", meaning: "인구" },
        { word: "technology", meaning: "기술" },
        { word: "instrument", meaning: "악기, 도구" },
        { word: "discovery", meaning: "발견" },
        { word: "character", meaning: "성격, 등장인물" },
        { word: "situation", meaning: "상황" },
        { word: "condition", meaning: "상태" },
        { word: "solution", meaning: "해결책" },
        { word: "problem", meaning: "문제" },
        { word: "decision", meaning: "결정" },
        { word: "information", meaning: "정보" },
        { word: "education", meaning: "교육" },
        { word: "knowledge", meaning: "지식" },
        { word: "industry", meaning: "산업" },
        { word: "agriculture", meaning: "농업" },
        { word: "factory", meaning: "공장" },
        { word: "product", meaning: "제품" },
        { word: "material", meaning: "재료" },
        { word: "machine", meaning: "기계" },
        { word: "energy", meaning: "에너지" },
        { word: "electricity", meaning: "전기" },
        { word: "pollution", meaning: "오염" },
        { word: "recycling", meaning: "재활용" },
        { word: "protection", meaning: "보호" },
        { word: "disaster", meaning: "재해" },
        { word: "volcano", meaning: "화산" },
        { word: "earthquake", meaning: "지진" },
        { word: "hurricane", meaning: "허리케인" },
        { word: "pressure", meaning: "압력" },
        { word: "gravity", meaning: "중력" },
        { word: "magnetic", meaning: "자석의" },
        { word: "chemical", meaning: "화학의" },
        { word: "biology", meaning: "생물학" },
        { word: "ecology", meaning: "생태학" },
        { word: "astronomy", meaning: "천문학" },
        { word: "mathematics", meaning: "수학" },
        { word: "literature", meaning: "문학" },
        { word: "grammar", meaning: "문법" },
        { word: "vocabulary", meaning: "어휘" },
        { word: "paragraph", meaning: "문단" },
        { word: "dialogue", meaning: "대화" },
        { word: "audience", meaning: "청중" },
        { word: "performance", meaning: "공연" },
        { word: "exhibition", meaning: "전시회" }
          ],
     5: [
        { word: "civilization", meaning: "문명" },
        { word: "atmosphere", meaning: "대기" },
        { word: "responsibility", meaning: "책임감" },
        { word: "communication", meaning: "의사소통" },
        { word: "independence", meaning: "독립" },
        { word: "geography", meaning: "지리학" },
        { word: "opportunity", meaning: "기회" },
        { word: "achievement", meaning: "성취" },
        { word: "consequence", meaning: "결과" },
        { word: "imagination", meaning: "상상력" },
        { word: "democracy", meaning: "민주주의" },
        { word: "economy", meaning: "경제" },
        { word: "society", meaning: "사회" },
        { word: "culture", meaning: "문화" },
        { word: "tradition", meaning: "전통" },
        { word: "generation", meaning: "세대" },
        { word: "immigration", meaning: "이민" },
        { word: "globalization", meaning: "세계화" },
        { word: "innovation", meaning: "혁신" },
        { word: "invention", meaning: "발명" },
        { word: "exploration", meaning: "탐험" },
        { word: "navigation", meaning: "항해" },
        { word: "diplomacy", meaning: "외교" },
        { word: "negotiation", meaning: "협상" },
        { word: "legislation", meaning: "입법" },
        { word: "constitution", meaning: "헌법" },
        { word: "justice", meaning: "정의" },
        { word: "equality", meaning: "평등" },
        { word: "diversity", meaning: "다양성" },
        { word: "tolerance", meaning: "관용" },
        { word: "discrimination", meaning: "차별" },
        { word: "prejudice", meaning: "편견" },
        { word: "poverty", meaning: "빈곤" },
        { word: "inequality", meaning: "불평등" },
        { word: "unemployment", meaning: "실업" },
        { word: "inflation", meaning: "물가상승" },
        { word: "recession", meaning: "경기 침체" },
        { word: "investment", meaning: "투자" },
        { word: "corporation", meaning: "기업" },
        { word: "entrepreneur", meaning: "사업가" },
        { word: "conservation", meaning: "보존" },
        { word: "extinction", meaning: "멸종" },
        { word: "biodiversity", meaning: "생물다양성" },
        { word: "renewable", meaning: "재생 가능한" },
        { word: "sustainable", meaning: "지속 가능한" },
        { word: "artificial", meaning: "인공의" },
        { word: "intelligence", meaning: "지능" },
        { word: "algorithm", meaning: "알고리즘" },
        { word: "database", meaning: "데이터베이스" },
        { word: "cybersecurity", meaning: "사이버 보안" }
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
                   "잘가! 오늘도 애썼어, 다음에 또 봐!",
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
                   "히히 고마워! 나도 너가 최고라고 생각해 ⭐",
                   "정말?! 요정이 기분이 하늘을 날아갈 것 같아!",
                   "너가 그렇게 말해주니 오늘 하루가 행복해졌어!"
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
                   "역시! 오늘 컨디션이 최고인가봐!"
                 ]
   },
   {
          name: "how_are_you",
          keywords: ["뭐해", "잘 지내", "잘지내", "심심"],
          replies: [
                   "나는 여기서 너 오기만 기다리고 있었지! 심심하면 문제 풀러 갈까?",
                   "요정이는 오늘도 신나! 너는 오늘 기분이 어때?",
                   "심심하면 낱말게임이나 구구단 게임 어때? 재밌을 거야!"
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
                   "낱말게임 좋아! 초성 힌트 보고 낱말 맞히는 재미가 쏠쏠하지 🔤",
                   "국어 낱말게임에서 새로운 단어를 많이 배워보자!"
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
                 "situation": "체육 시간에 친구가 다쳤는데 경기에 지장 될까봐 숨기려 해요. 어떻게 해야 할까요?",
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
                 "situation": "친구가 부모님께 혼날까봐 성적표를 조작하려고 해요. 어떻게 해야 할까요?",
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
