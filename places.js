// 카테고리별 Google Maps 리스트 이름
const LISTS = {
  hotel: "런던 호텔",
  light: "런던 가벼운 밥",
  heavy: "런던 무거운 밥",
  cafe: "런던 카페",
  alcohol: "런던 알코올",
  show: "런던 전시 / 공연",
  etc: "런던 기타, 쇼핑",
};

// 장소 목록 — query는 Google Maps 검색어
const PLACES = [
  // ==========================================
  // 호텔 / 숙소
  // ==========================================
  {
    query: "Town Hall Hotel London",
    category: "hotel",
    note: "1순위. Bethnal Green. 구 시청 건물, 건축/아카이브 감성. Café OTO·Dalston·Shoreditch 접근성 좋음",
  },
  {
    query: "The Culpeper London",
    category: "hotel",
    note: "Spitalfields. pub+bistro+5rooms+rooftop. Brick Lane·Shoreditch 접근성",
  },
  {
    query: "The Standard London",
    category: "hotel",
    note: "King's Cross. Brutalist 디자인 호텔. St Pancras 옆. 중앙권 이상한 낮 일정용",
  },
  {
    query: "Bermonds Locke London",
    category: "hotel",
    note: "Bermondsey. 아파트형. MOT/Ormside/Peckham 남쪽 밤 동선용",
  },
  {
    query: "One Hundred Shoreditch London",
    category: "hotel",
    note: "Shoreditch High Street. 편하지만 상업화됨. Town Hall > Culpeper > 여기 순",
  },
  {
    query: "Boundary London Shoreditch",
    category: "hotel",
    note: "Redchurch St. Victorian warehouse 17실. Conran 디자인. 루프탑",
  },

  // ==========================================
  // 전시 / 공연
  // ==========================================
  {
    query: "Café OTO London",
    category: "show",
    note: "취향 1순위. 7/10 I-D.A Projects (A+), 7/13 Tomeka Reid (A), 7/14-15 James Brandon Lewis (A-), 7/17-18 Kurdish Sound Archive (A-)",
  },
  {
    query: "Royal Albert Hall London",
    category: "show",
    note: "BBC Proms — 7/17 First Night Yunchan Lim (A), 7/18 Prog Rock, 7/19 Boléro (A)",
  },
  {
    query: "Barbican Centre London",
    category: "show",
    note: "Project a Black Planet 전시 (6/11–9/6), Album Art Analysis 7/10",
  },
  {
    query: "Hayward Gallery London",
    category: "show",
    note: "Anish Kapoor (6/16–10/18). Southbank 동선",
  },
  {
    query: "Tate Modern London",
    category: "show",
    note: "Tracey Emin / Frida Kahlo 전시",
  },
  {
    query: "Design Museum London",
    category: "show",
    note: "Wes Anderson: The Archives (~7/26). 취향 기준 전시 1순위",
  },
  {
    query: "Serpentine Gallery London",
    category: "show",
    note: "David Hockney (~8/23). Hyde Park / Royal Albert Hall 동선",
  },
  {
    query: "Ormside Projects London",
    category: "show",
    note: "South Bermondsey. arts & music project space. TheOverload식 취향 필수",
  },
  {
    query: "Venue MOT London",
    category: "show",
    note: "South Bermondsey. industrial estate 클럽. 젊은 아티스트/프로모터",
  },
  {
    query: "Avalon Cafe Bermondsey London",
    category: "show",
    note: "South Bermondsey. café/music/arts centre 하이브리드. strictly not a club",
  },
  {
    query: "FOLD London Canning Town",
    category: "show",
    note: "라인업 맞으면 강추. 24h dance floor, 900 cap. 라인업 보고 가는 곳",
  },
  {
    query: "Hundred Years Gallery London",
    category: "show",
    note: "Hoxton. 소규모 실험음악/즉흥/사운드아트. Café OTO보다 더 작은 갤러리형",
  },
  {
    query: "The Horse Hospital London",
    category: "show",
    note: "Bloomsbury. underground/avant-garde 아트 베뉴. 이상한 낮/저녁 일정",
  },
  {
    query: "BFI Southbank London",
    category: "show",
    note: "world cinema, archive, experimental film",
  },
  {
    query: "ICA London",
    category: "show",
    note: "contemporary culture. film/music/exhibitions/talks 교차",
  },
  {
    query: "IKLECTIK Peckham Levels London",
    category: "show",
    note: "Peckham Levels. sonic laboratory. 모듈러 신스/사운드아트/노이즈. Cafe OTO의 남쪽 쌍둥이",
  },
  {
    query: "SET Dalston London",
    category: "show",
    note: "27a Dalston Lane. 매일 밤 프로그래밍. 실험/전자/즉흥. Bird On The Wire",
  },
  {
    query: "The Carpet Shop Peckham London",
    category: "show",
    note: "Peckham. Corsica Studios 팀. Funktion-One. 7/12 Oroko Radio night 확정",
  },
  {
    query: "EartH Hackney London",
    category: "show",
    note: "Dalston. multi-venue arts hub. Theatre+Hall+Kitchen 3개 공간",
  },
  {
    query: "Matchstick Piehouse Deptford London",
    category: "show",
    note: "Deptford. 150-cap workers' co-op. 2025 재오픈. DIY/풀뿌리",
  },
  {
    query: "Chisenhale Gallery London",
    category: "show",
    note: "Bow. non-profit. Jasper Marsalis 전시 7/10 오픈. Town Hall Hotel 도보권",
  },
  {
    query: "Whitechapel Gallery London",
    category: "show",
    note: "Whitechapel. 1901 Arts & Crafts. Backyard Biennial 여름 페스티벌",
  },
  {
    query: "Gasworks Gallery London",
    category: "show",
    note: "Vauxhall. non-profit+레지던시. Thuy Tien Nguyen 7/9 오픈",
  },
  {
    query: "Auto Italia South East London",
    category: "show",
    note: "Bethnal Green. 아티스트 런 프로젝트 스페이스. Town Hall Hotel 근처",
  },
  {
    query: "White Cube Bermondsey London",
    category: "show",
    note: "Bermondsey St. 유럽 최대 상업 갤러리. Georg Baselitz 6월~8월",
  },
  {
    query: "South London Gallery Peckham",
    category: "show",
    note: "Peckham Rd. 1891~. Fire Station 별관 포함",
  },
  {
    query: "Wellcome Collection London",
    category: "show",
    note: "Euston. 무료. Audrey Amiss + Rudy Loewe 7/10 오픈. 의학/몸/죽음. 1.5-2시간",
  },

  // ==========================================
  // 무거운 밥
  // ==========================================
  {
    query: "Singburi Royal Thai Shoreditch London",
    category: "heavy",
    note: "cult Thai. Leytonstone에서 Shoreditch로 이전. Montacute Yards",
  },
  {
    query: "Mangal 2 Dalston London",
    category: "heavy",
    note: "Dalston ocakbasi. Café OTO/Brilliant Corners 동선",
  },
  {
    query: "Rochelle Canteen Shoreditch London",
    category: "heavy",
    note: "옛 학교 bike shed. 계절 메뉴, 조용한 런던 감성 점심",
  },
  {
    query: "Brilliant Corners Dalston London",
    category: "heavy",
    note: "Japanese restaurant + music venue. audiophile sound system, vinyl DJs, izakaya food",
  },
  {
    query: "Jumbi Peckham London",
    category: "heavy",
    note: "Afro-Caribbean hi-fi bar & restaurant. 남쪽 일정 1순위",
  },
  {
    query: "St. JOHN Restaurant London",
    category: "heavy",
    note: "nose-to-tail cuisine. 런던 기관",
  },
  {
    query: "Quality Chop House London",
    category: "heavy",
    note: "1869년부터. 오래된 British cuisine",
  },
  {
    query: "Casa Fofo Dalston London",
    category: "heavy",
    note: "Dalston. 8코스 서프라이즈 테이스팅 65GBP. 매일 아침 새 메뉴. 예약 필요",
  },
  {
    query: "Angelina Dalston London",
    category: "heavy",
    note: "56 Dalston Lane. 이탈리안-일본 카이세키 13코스. 5주마다 메뉴 교체",
  },
  {
    query: "Pidgin Hackney London",
    category: "heavy",
    note: "52 Wilton Way. 매주 바뀌는 4코스. Michelin 추천",
  },
  {
    query: "Oren Dalston London",
    category: "heavy",
    note: "Shacklewell Lane. 지중해/중동 sharing plates. 콘크리트 산업 공간",
  },
  {
    query: "The Good Front Room Dalston London",
    category: "heavy",
    note: "Dalston Square. 카리비안 파인 다이닝 small plates. 2026.2 신규 오픈",
  },
  {
    query: "Levan Peckham London",
    category: "heavy",
    note: "Modern European bistro. comté fries. Peckham Rye 근처",
  },
  {
    query: "Hausu Peckham London",
    category: "heavy",
    note: "전 기차역 대합실. 아시안x유럽 small plates. 컬트 일본 호러영화 이름",
  },
  {
    query: "40 Maltby Street London",
    category: "heavy",
    note: "Bermondsey. 와인 창고 레스토랑. walk-in only. natural wine. 수-토",
  },
  {
    query: "BunBunBun Vietnamese London",
    category: "heavy",
    note: "134B Kingsland Rd. 런던 유일 bun cha Hanoi. Kingsland Rd 베트남 1순위",
  },

  // ==========================================
  // 가벼운 밥
  // ==========================================
  {
    query: "E Pellicci Bethnal Green London",
    category: "light",
    note: "아침/브런치 1순위. 100년+ East London caff. Britalian",
  },
  {
    query: "The Dusty Knuckle Dalston London",
    category: "light",
    note: "Dalston 주차장. 소셜 엔터프라이즈 베이커리. 감자 사워도우. 매일 매진",
  },
  {
    query: "Towpath Cafe London",
    category: "light",
    note: "Regent's Canal, De Beauvoir. 계절 캐널사이드 카페. Vittles 챔피언. 3-11월. walk-in only",
  },
  {
    query: "Pavilion Café Victoria Park London",
    category: "light",
    note: "Victoria Park 호숫가. classic caff. 로컬 전설",
  },
  {
    query: "Brunswick East Dalston London",
    category: "light",
    note: "gochujang 에그번. 모던하지만 허세 없음",
  },

  // ==========================================
  // 카페
  // ==========================================
  // (추후 추가)

  // ==========================================
  // 알코올
  // ==========================================
  {
    query: "Satan's Whiskers Bethnal Green London",
    category: "alcohol",
    note: "동쪽 칵테일 1순위. daily changing menu, hip-hop soundtrack",
  },
  {
    query: "A Bar with Shapes for a Name London",
    category: "alcohol",
    note: "Bauhaus/미니멀 디자인 칵테일 바. functional minimalism",
  },
  {
    query: "The Last Tuesday Society London",
    category: "alcohol",
    note: "Hackney. Museum of Curiosities + Absinthe Parlour. 가장 weird한 술집",
  },
  {
    query: "Noble Rot Lamb's Conduit Street London",
    category: "alcohol",
    note: "와인 바/레스토랑. 1701년 타운하우스",
  },
  {
    query: "Space Talk London",
    category: "alcohol",
    note: "Barbican 근처. DJ set/listening session. audiophile scene",
  },
  {
    query: "Goodbye Horses De Beauvoir London",
    category: "alcohol",
    note: "De Beauvoir. 리스닝 바 최대 발견. Tannoy Lancaster 쿼드. vinyl 4000장. natural wine. BC 졸업생",
  },
  {
    query: "Chiave Shoreditch London",
    category: "alcohol",
    note: "Redchurch St. Arda Audio 커스텀 스피커. 칵테일+DJ. 2층 구조",
  },
  {
    query: "Waltz Bar Shoreditch London",
    category: "alcohol",
    note: "Scrutton St. 일본식 칵테일+재즈. Bill Evans 미학. 72절기 메뉴. 2025~",
  },
  {
    query: "Coupette Bethnal Green London",
    category: "alcohol",
    note: "423 Bethnal Green Rd. World's 50 Best. Champagne Piña Colada. Satan's Whiskers 대안 1순위",
  },
  {
    query: "The Palm Tree London",
    category: "alcohol",
    note: "Mile End Park. THE 진짜 East End 펍. Grade II. 40년+ 같은 가족. 주말 재즈. 현금만. 블리츠 생존",
  },
  {
    query: "Chesham Arms London",
    category: "alcohol",
    note: "Homerton. 커뮤니티가 구출한 150년 펍. CAMRA Cider Pub of the Year 2025. 벽난로",
  },
  {
    query: "The Laughing Heart Hackney London",
    category: "alcohol",
    note: "277 Hackney Rd. natural wine. 셰프/바텐더 단골. 2am까지",
  },

  // ==========================================
  // 기타, 쇼핑 (레코드샵 / 책방 / novelty)
  // ==========================================
  {
    query: "World of Echo Records 128 Columbia Road London",
    category: "etc",
    note: "레코드샵 1순위. 128 Columbia Road. experimental/post-punk/dub/leftfield. Thu-Sun만",
  },
  {
    query: "Honest Jon's Records Portobello Road London",
    category: "etc",
    note: "1974년. jazz/reggae/soul/funk/outernational. Coal Drops Yard 지점도 있음",
  },
  {
    query: "Phonica Records Soho London",
    category: "etc",
    note: "클럽/전자음악 vinyl 1순위. Soho",
  },
  {
    query: "Donlon Books London",
    category: "etc",
    note: "Broadway Market. 아트북/사진/문화이론/카운터컬처. The Wire stockist",
  },
  {
    query: "Tenderbooks London",
    category: "etc",
    note: "Cecil Court. artist books/zines/photobooks. 중앙권 예술서점",
  },
  {
    query: "Housmans Bookshop London",
    category: "etc",
    note: "King's Cross. 1945년~. 영국 최장수 radical bookshop",
  },
  {
    query: "Novelty Automation London",
    category: "etc",
    note: "Holborn. satirical home-made arcade machines. 괴상한 인디 아케이드",
  },
  {
    query: "Viktor Wynd Museum of Curiosities London",
    category: "etc",
    note: "Hackney. 오컬트/taxidermy/curiosity cabinet. Last Tuesday Society 병행",
  },
  {
    query: "God's Own Junkyard London",
    category: "etc",
    note: "Walthamstow. 유럽 최대 네온 컬렉션. salvaged signs/movie props",
  },
  {
    query: "Dennis Severs' House London",
    category: "etc",
    note: "Spitalfields. 1724년 집을 imaginary Huguenot family로 재구성. 시간 캡슐",
  },
  {
    query: "Sir John Soane's Museum London",
    category: "etc",
    note: "Holborn. 건축가의 집+수집광 미로. 1837년 상태 보존",
  },
  {
    query: "Kristina Records London",
    category: "etc",
    note: "194 Well St, Homerton. ambient/drone/avant-garde jazz. Wire stockist",
  },
  {
    query: "Inverted Audio Record Store Peckham London",
    category: "etc",
    note: "Holdrons Arcade, Rye Lane. dub techno/ambient 특화. Basic Channel, Astral Industries. 목-토 12-6",
  },
  {
    query: "Sounds of the Universe Soho London",
    category: "etc",
    note: "7 Broadwick St. Soul Jazz 매장. dub/reggae/world/funk+전자. 지하 재즈 레어",
  },
  {
    query: "Claire de Rouen Books Shoreditch London",
    category: "etc",
    note: "11A Kingsland Rd. 2026.5 신규 오픈. 사진/아트북. 미로형 공간",
  },
  {
    query: "Bookartbookshop London",
    category: "etc",
    note: "17 Pitfield St, Old Street. pataphysics/Atlas Press. 실험 출판. 목-토 12-6",
  },
  {
    query: "London Centre for Book Arts",
    category: "etc",
    note: "Fish Island, Hackney Wick. 활판/리소/제본. 갤러리+연구도서관+숍. 월-토 10-6",
  },
  {
    query: "Hunterian Museum London",
    category: "etc",
    note: "Lincoln's Inn Fields. 인체 해부학 3500+ 표본. curiosity cabinet. 무료. 사전예약 추천",
  },
  {
    query: "Grant Museum of Zoology London",
    category: "etc",
    note: "UCL, Euston. 10만 동물 표본. Wunderkammer. 무료. Hunterian과 도보 15분",
  },
  {
    query: "Cinema Museum London",
    category: "etc",
    note: "Kennington. dead media 파라다이스. Chaplin 구빈원. 사전예약 필수. 7/11(토) 타겟",
  },
  {
    query: "BFI Mediatheque London",
    category: "etc",
    note: "BFI Southbank 내. 18만+ 아카이브 무료 열람. Radiophonic Workshop, 실험 TV",
  },

  // ==========================================
  // Round 3 추가분 (88~)
  // ==========================================

  // --- 카페 ---
  {
    query: "Batch Baby De Beauvoir London",
    category: "cafe",
    note: "Rose Lipman Building. 비영리. Sprudge 세계 최우수 신규카페 2022. 게스트 로스터",
  },
  {
    query: "Climpson and Sons Broadway Market London",
    category: "cafe",
    note: "Broadway Market. East London 커피 개척자 2002~. 전 정육점. Dusty Knuckle 음식",
  },
  {
    query: "Allpress Espresso Dalston London",
    category: "cafe",
    note: "56 Dalston Lane. 1930s warehouse. 로스팅 유리 관람. 영화 상영회",
  },
  {
    query: "Gallery Cafe St Margaret's House London",
    category: "cafe",
    note: "Bethnal Green. 비건카페+아트센터. 전시/라이브/영화/스포큰워드",
  },
  {
    query: "Mare Street Market London",
    category: "cafe",
    note: "117 Mare St, Hackney. Flying Horse커피+Stranger Than Paradise레코드+갤러리 한 건물",
  },
  {
    query: "WatchHouse Bermondsey London",
    category: "cafe",
    note: "199 Bermondsey St. 19세기 8각형 경비초소. 10석. Maltby Street 동선",
  },
  {
    query: "South London Louie Peckham London",
    category: "cafe",
    note: "South London Gallery 안 카페. Redemption Roasters. 갤러리 무료",
  },

  // --- 무거운 밥 추가 ---
  {
    query: "Tayyabs Whitechapel London",
    category: "heavy",
    note: "Whitechapel. 1979~. 전설의 lamb chops. BYOB. 15-20파운드. food nerd 필수",
  },
  {
    query: "The Marksman Hackney London",
    category: "heavy",
    note: "254 Hackney Rd. Michelin Pub of the Year. St. JOHN alumni. 일요일 로스트 최강",
  },
  {
    query: "Koya Ko Broadway Market London",
    category: "heavy",
    note: "Broadway Market Mews. Koya 분점. 수제 우동. 금-일 영업",
  },
  {
    query: "INIS Hackney Wick London",
    category: "heavy",
    note: "Fish Island 캐널사이드. British-Irish. 2024 오픈. Hackney Wick 현재 1순위",
  },
  {
    query: "Barge East Hackney Wick London",
    category: "heavy",
    note: "125년 네덜란드 바지선 레스토랑. 테이스팅 55파운드. 캐널사이드",
  },
  {
    query: "Tonkotsu Haggerston London",
    category: "heavy",
    note: "Arch 334, Haggerston. 12시간 돈코츠 라멘. 자체 제면. railway arch",
  },
  {
    query: "Sutton and Sons Hackney London",
    category: "heavy",
    note: "218 Graham Rd. 생선가게→chippy. 비건 메뉴도 우수. East London fish&chips 1순위",
  },

  // --- 가벼운 밥 / 야식 추가 ---
  {
    query: "Banh Dalston London",
    category: "light",
    note: "592 Kingsland Rd. 반미 샌드위치. 10파운드 미만. 런던 최고급 반미",
  },
  {
    query: "Voodoo Rays Dalston London",
    category: "light",
    note: "95 Kingsland High St. NYC 피자 바이 더 슬라이스. 금토 새벽1시까지. Cafe OTO 후 야식",
  },
  {
    query: "Ridley Road Market Dalston London",
    category: "light",
    note: "Dalston Kingsland 역 앞. 150+ 노점. 괴즐레메/제르크치킨/터키시. 현금. 월-토",
  },
];

module.exports = { LISTS, PLACES };
