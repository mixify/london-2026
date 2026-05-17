// Category labels for Google Maps lists
const LISTS = {
  hotel: "런던 호텔",
  light: "런던 가벼운 밥",
  heavy: "런던 무거운 밥",
  cafe: "런던 카페",
  alcohol: "런던 알코올",
  show: "런던 전시 / 공연",
  etc: "런던 기타, 쇼핑",
};

const PLACES = [
  // ==========================================
  // Hotels
  // ==========================================
  {
    query: "Town Hall Hotel London",
    category: "hotel",
    note: "#1 pick. Bethnal Green. Edwardian town hall conversion, Design Hotels member. Best access to Cafe OTO / Dalston / Shoreditch",
  },
  {
    query: "The Culpeper London",
    category: "hotel",
    note: "Spitalfields. Pub + bistro + 5 rooms + rooftop garden. Near Brick Lane / Shoreditch",
  },
  {
    query: "The Standard London",
    category: "hotel",
    note: "King's Cross. 1974 Brutalist former Camden Town Hall Annex. Best for central access",
  },
  {
    query: "Bermonds Locke London",
    category: "hotel",
    note: "Bermondsey. Aparthotel. Best for MOT / Ormside / Peckham south nightlife route",
  },
  {
    query: "One Hundred Shoreditch London",
    category: "hotel",
    note: "Shoreditch High Street. Former Ace Hotel. Seed Library listening bar in basement",
  },
  {
    query: "Boundary London Shoreditch",
    category: "hotel",
    note: "Redchurch St. Victorian warehouse, 17 rooms, Conran-designed. Rooftop terrace",
  },

  // ==========================================
  // Venues & Exhibitions
  // ==========================================
  {
    query: "Café OTO London",
    category: "show",
    note: "Top priority. 7/10 I-D.A Projects / LAFMS (A+), 7/13 Tomeka Reid (A), 7/14-15 James Brandon Lewis (A-), 7/17-18 Kurdish Sound Archive (A-)",
  },
  {
    query: "Royal Albert Hall London",
    category: "show",
    note: "BBC Proms — 7/17 First Night Yunchan Lim (A), 7/18 Prog Rock, 7/19 Bolero (A)",
  },
  {
    query: "Barbican Centre London",
    category: "show",
    note: "Project a Black Planet exhibition (6/11–9/6). Album Art Analysis event 7/10",
  },
  {
    query: "Hayward Gallery London",
    category: "show",
    note: "Anish Kapoor (6/16–10/18). Southbank route",
  },
  {
    query: "Tate Modern London",
    category: "show",
    note: "Tracey Emin / Frida Kahlo exhibitions",
  },
  {
    query: "Design Museum London",
    category: "show",
    note: "Wes Anderson: The Archives (~7/26). Top exhibition pick for taste fit",
  },
  {
    query: "Serpentine Gallery London",
    category: "show",
    note: "David Hockney (~8/23). Hyde Park / Royal Albert Hall route",
  },
  {
    query: "Ormside Projects London",
    category: "show",
    note: "South Bermondsey. Arts & music project space. Essential for r/TheOverload taste",
  },
  {
    query: "Venue MOT London",
    category: "show",
    note: "South Bermondsey industrial estate. Time Out Best Club 2025. Hardware live sets, percussive/bass",
  },
  {
    query: "Avalon Cafe Bermondsey London",
    category: "show",
    note: "South Bermondsey. Cafe / music venue / arts centre hybrid. 'Strictly not a club.' Vinyl Hunter record shop inside",
  },
  {
    query: "FOLD London Canning Town",
    category: "show",
    note: "24h license, 900 cap. Artist-led, queer ethos. FUTUR.SHOCK season. Check lineup before going",
  },
  {
    query: "Hundred Years Gallery London",
    category: "show",
    note: "Hoxton. Small gallery-scale experimental / improv / sound art. Smaller than Cafe OTO. Sunday improv matinees",
  },
  {
    query: "The Horse Hospital London",
    category: "show",
    note: "Bloomsbury. Grade II listed former horse hospital. Underground / avant-garde exhibitions, film, music, performance. Wire stockist",
  },
  {
    query: "BFI Southbank London",
    category: "show",
    note: "World cinema, archive, experimental film. July: Black & South Asian Workshops season + 4K remasters",
  },
  {
    query: "ICA London",
    category: "show",
    note: "Contemporary culture — film / music / exhibitions / talks. Good bookshop (zines, small press)",
  },
  {
    query: "IKLECTIK Peckham Levels London",
    category: "show",
    note: "Peckham Levels. 'Sonic laboratory' — modular synth, sound art, noise. Cafe OTO's south twin. 450 cap. Recent bookings: Merzbow, Stephen O'Malley",
  },
  {
    query: "SET Dalston London",
    category: "show",
    note: "27a Dalston Lane. Bar + project space. Nightly programming — experimental electronic, improv, live, techno. Bird On The Wire promoter",
  },
  {
    query: "The Carpet Shop Peckham London",
    category: "show",
    note: "Peckham. Run by Corsica Studios team (Corsica closed 2026.3). Funktion-One 4-point. 7/12 Oroko Radio night confirmed",
  },
  {
    query: "EartH Hackney London",
    category: "show",
    note: "Dalston. Multi-venue arts hub — Theatre + Hall + Kitchen. Large-scale experimental / live electronic / leftfield bookings",
  },
  {
    query: "Matchstick Piehouse Deptford London",
    category: "show",
    note: "Deptford railway arches. 150 cap. Reopened 2025 as workers' co-op. DIY / grassroots arts programming",
  },
  {
    query: "Chisenhale Gallery London",
    category: "show",
    note: "Bow. Non-profit commissioning gallery. Jasper Marsalis exhibition opens 7/10. Walking distance from Town Hall Hotel. Free",
  },
  {
    query: "Whitechapel Gallery London",
    category: "show",
    note: "Whitechapel. 1901 Arts & Crafts building. Backyard Biennial — 8-week East End festival with 40+ partners",
  },
  {
    query: "Gasworks Gallery London",
    category: "show",
    note: "Vauxhall. Non-profit + international residencies. Thuy Tien Nguyen opens 7/9. Free. Wed-Sun 12-6",
  },
  {
    query: "Auto Italia South East London",
    category: "show",
    note: "Bethnal Green. Artist-run project space. Near Town Hall Hotel",
  },
  {
    query: "White Cube Bermondsey London",
    category: "show",
    note: "Bermondsey St. Europe's largest commercial gallery. Georg Baselitz Jun–Aug. Free",
  },
  {
    query: "South London Gallery Peckham",
    category: "show",
    note: "Peckham Rd. Founded 1891. Includes Fire Station annex. Free",
  },
  {
    query: "Wellcome Collection London",
    category: "show",
    note: "Euston. Free. Audrey Amiss + Rudy Loewe open 7/10. Medicine / body / death / outsider art. 1.5-2 hours",
  },

  // ==========================================
  // Restaurants (£30+)
  // ==========================================
  {
    query: "Singburi Royal Thai Shoreditch London",
    category: "heavy",
    note: "Cult Thai, moved from Leytonstone to Shoreditch. Bib Gourmand 2026. More polished than the original",
  },
  {
    query: "Mangal 2 Dalston London",
    category: "heavy",
    note: "Dalston ocakbasi. On the Cafe OTO / Brilliant Corners route",
  },
  {
    query: "Rochelle Canteen Shoreditch London",
    category: "heavy",
    note: "Former school bike shed. Seasonal daily-changing menu. Quiet London lunch energy",
  },
  {
    query: "Brilliant Corners Dalston London",
    category: "heavy",
    note: "Japanese izakaya + audiophile sound system + vinyl DJs + natural wine. Food, drinks, and music in one",
  },
  {
    query: "Jumbi Peckham London",
    category: "heavy",
    note: "Afro-Caribbean hi-fi bar & restaurant. Bradley Zero (Rhythm Section). #1 south London pick",
  },
  {
    query: "St. JOHN Restaurant London",
    category: "heavy",
    note: "Nose-to-tail cuisine. London institution",
  },
  {
    query: "Quality Chop House London",
    category: "heavy",
    note: "Since 1869. Heritage British cuisine",
  },
  {
    query: "Casa Fofo Dalston London",
    category: "heavy",
    note: "Dalston. 8-course surprise tasting £65. New menu every morning. Reservation required",
  },
  {
    query: "Angelina Dalston London",
    category: "heavy",
    note: "56 Dalston Lane. Italian-Japanese kaiseki 13 courses. Menu changes every 5 weeks. Hidden 6-seat bar. Reservation required",
  },
  {
    query: "Pidgin Hackney London",
    category: "heavy",
    note: "52 Wilton Way. Weekly changing 4-course menu — never the same twice. Michelin recommended",
  },
  {
    query: "Oren Dalston London",
    category: "heavy",
    note: "Shacklewell Lane. Mediterranean / Middle Eastern sharing plates. Concrete industrial space",
  },
  {
    query: "The Good Front Room Dalston London",
    category: "heavy",
    note: "Dalston Square. Caribbean fine dining small plates. Opened Feb 2026. Five Star Kitchen winner",
  },
  {
    query: "Levan Peckham London",
    category: "heavy",
    note: "Modern European bistro near Peckham Rye. Famous comté fries + saffron aioli",
  },
  {
    query: "Hausu Peckham London",
    category: "heavy",
    note: "Former train station waiting room. Asian x European small plates. Named after cult 1977 Japanese horror film",
  },
  {
    query: "40 Maltby Street London",
    category: "heavy",
    note: "Bermondsey. Wine warehouse restaurant. Natural wine + seasonal small plates. Walk-in only. Wed-Sat dinner, Thu-Sat lunch",
  },
  {
    query: "Tayyabs Whitechapel London",
    category: "heavy",
    note: "Whitechapel. Since 1979. Legendary lamb chops. BYOB. £15-20. Essential food nerd stop",
  },
  {
    query: "The Marksman Hackney London",
    category: "heavy",
    note: "254 Hackney Rd. Michelin Pub of the Year. St. JOHN alumni. Best Sunday roast in the area. Reservation required",
  },
  {
    query: "INIS Hackney Wick London",
    category: "heavy",
    note: "Fish Island canalside. British-Irish. Opened 2024. Current #1 in Hackney Wick",
  },
  {
    query: "Barge East Hackney Wick London",
    category: "heavy",
    note: "Restaurant on a restored 125-year-old Dutch barge. Tasting menu £55. Canalside",
  },

  // ==========================================
  // Quick Eats & Breakfast (<£20)
  // ==========================================
  {
    query: "E Pellicci Bethnal Green London",
    category: "light",
    note: "Breakfast #1. 100+ year East London caff. Britalian family-run",
  },
  {
    query: "The Dusty Knuckle Dalston London",
    category: "light",
    note: "Dalston car park. Social enterprise bakery. Legendary potato sourdough. Sells out daily. Tue-Sat 8:30-15:30",
  },
  {
    query: "Towpath Cafe London",
    category: "light",
    note: "Regent's Canal, De Beauvoir. Seasonal canalside cafe. Vittles champion. Walk-in only. Mar-Nov, Wed-Sun 9-17",
  },
  {
    query: "Pavilion Café Victoria Park London",
    category: "light",
    note: "Victoria Park lakeside. Classic caff. Local legend",
  },
  {
    query: "Brunswick East Dalston London",
    category: "light",
    note: "Gochujang egg buns. Modern but no pretension",
  },
  {
    query: "BunBunBun Vietnamese London",
    category: "light",
    note: "134B Kingsland Rd. Only proper bun cha Hanoi in London. #1 Vietnamese on Kingsland Road",
  },
  {
    query: "Koya Ko Broadway Market London",
    category: "light",
    note: "Broadway Market Mews. Koya offshoot. Handmade udon. Fri-Sun. £10-20",
  },
  {
    query: "Tonkotsu Haggerston London",
    category: "light",
    note: "Arch 334, Haggerston. 12-hour tonkotsu ramen. Noodles made on-site. Railway arch",
  },
  {
    query: "Sutton and Sons Hackney London",
    category: "light",
    note: "218 Graham Rd. Fishmonger turned chippy. Excellent vegan menu too. East London's best fish & chips. £10-15",
  },
  {
    query: "Banh Dalston London",
    category: "light",
    note: "592 Kingsland Rd. Banh mi sandwiches. Under £10. London's best banh mi per The Infatuation",
  },
  {
    query: "Voodoo Rays Dalston London",
    category: "light",
    note: "95 Kingsland High St. NYC pizza by the slice. Open until 1am Fri/Sat. 5 min walk from Cafe OTO — perfect post-gig",
  },
  {
    query: "Ridley Road Market Dalston London",
    category: "light",
    note: "Opposite Dalston Kingsland station. 150+ stalls. Gozleme, jerk chicken, Turkish food. Cash. Mon-Sat",
  },

  // ==========================================
  // Cafes
  // ==========================================
  {
    query: "Batch Baby De Beauvoir London",
    category: "cafe",
    note: "Rose Lipman Building. Non-profit. Sprudge Best New Cafe in the World 2022. Rotating guest roasters. Legendary toasties",
  },
  {
    query: "Climpson and Sons Broadway Market London",
    category: "cafe",
    note: "Broadway Market. East London coffee pioneer since 2002. Former butcher's shop. Dusty Knuckle food partner",
  },
  {
    query: "Allpress Espresso Dalston London",
    category: "cafe",
    note: "56 Dalston Lane. 1930s warehouse. Watch roasting through glass. Film screenings. Weekdays 8-16, weekends 9-16",
  },
  {
    query: "Gallery Cafe St Margaret's House London",
    category: "cafe",
    note: "Bethnal Green. Vegan cafe + community arts centre. Exhibitions, live music, film screenings, spoken word",
  },
  {
    query: "Mare Street Market London",
    category: "cafe",
    note: "117 Mare St, Hackney. Flying Horse Coffee + Stranger Than Paradise record shop + gallery under one roof",
  },
  {
    query: "WatchHouse Bermondsey London",
    category: "cafe",
    note: "199 Bermondsey St. Tiny octagonal 19th-century watchman's building. 10 seats. Maltby Street route. (Only this original location is worth visiting)",
  },
  {
    query: "South London Louie Peckham London",
    category: "cafe",
    note: "Inside South London Gallery. Redemption Roasters. Free gallery next door",
  },

  // ==========================================
  // Bars & Pubs
  // ==========================================
  {
    query: "Satan's Whiskers Bethnal Green London",
    category: "alcohol",
    note: "UK #1 cocktail bar (3 times). Daily changing menu, hip-hop soundtrack",
  },
  {
    query: "A Bar with Shapes for a Name London",
    category: "alcohol",
    note: "Bauhaus-principled cocktail bar. Functional minimalism. East London",
  },
  {
    query: "The Last Tuesday Society London",
    category: "alcohol",
    note: "Hackney. Museum of Curiosities + Absinthe Parlour. Weirdest bar in London",
  },
  {
    query: "Noble Rot Lamb's Conduit Street London",
    category: "alcohol",
    note: "Wine bar / restaurant in a 1701 townhouse. Wine, food & popular culture magazine",
  },
  {
    query: "Space Talk London",
    category: "alcohol",
    note: "Near Barbican. DJ sets / listening sessions. Audiophile scene",
  },
  {
    query: "Goodbye Horses De Beauvoir London",
    category: "alcohol",
    note: "Top discovery. Tannoy Lancaster quadrophonic, 4000 vinyl, natural wine, proper food. Brilliant Corners alumni (George de Vos). Wed-Sun",
  },
  {
    query: "Chiave Shoreditch London",
    category: "alcohol",
    note: "36 Redchurch St. Custom Arda Audio speakers. Upstairs cocktail bar / downstairs DJ + dance",
  },
  {
    query: "Waltz Bar Shoreditch London",
    category: "alcohol",
    note: "Scrutton St. Japanese cocktails + jazz listening. Named after Bill Evans' 'Waltz for Debby.' 72 micro-season menu. Opened 2025",
  },
  {
    query: "Coupette Bethnal Green London",
    category: "alcohol",
    note: "423 Bethnal Green Rd. World's 50 Best Bars. Champagne Piña Colada. Vintage Tiffany lamps. #1 alternative to Satan's Whiskers",
  },
  {
    query: "The Palm Tree London",
    category: "alcohol",
    note: "Mile End Park. THE real East End pub. Grade II listed. Same family 40+ years. Weekend live jazz. Cash only. No TVs. Survived the Blitz",
  },
  {
    query: "Chesham Arms London",
    category: "alcohol",
    note: "Homerton. Community-saved 150-year-old pub. CAMRA Cider Pub of the Year 2025. Working fireplace, beer garden",
  },
  {
    query: "The Laughing Heart Hackney London",
    category: "alcohol",
    note: "277 Hackney Rd. Natural wine bar. Chef/bartender industry favourite. Open until 2am",
  },

  // ==========================================
  // Shops, Books & Oddities
  // ==========================================
  {
    query: "World of Echo Records 128 Columbia Road London",
    category: "etc",
    note: "Record shop #1. 128 Columbia Road. Experimental / post-punk / dub / leftfield / esoteric. Thu-Sun only",
  },
  {
    query: "Honest Jon's Records Portobello Road London",
    category: "etc",
    note: "Since 1974. Jazz / reggae / soul / funk / outernational. Also Coal Drops Yard location",
  },
  {
    query: "Phonica Records Soho London",
    category: "etc",
    note: "Club / electronic vinyl specialist. Soho",
  },
  {
    query: "Donlon Books London",
    category: "etc",
    note: "Broadway Market. Art books / photography / cultural theory / counterculture. Wire stockist",
  },
  {
    query: "Tenderbooks London",
    category: "etc",
    note: "Cecil Court. Artist books / zines / photobooks. Central London art bookshop",
  },
  {
    query: "Housmans Bookshop London",
    category: "etc",
    note: "King's Cross. Since 1945. Britain's longest-running radical bookshop",
  },
  {
    query: "Novelty Automation London",
    category: "etc",
    note: "Holborn. Satirical handmade arcade machines. Weird indie arcade",
  },
  {
    query: "Viktor Wynd Museum of Curiosities London",
    category: "etc",
    note: "Hackney. Occult / taxidermy / curiosity cabinet. Combined with Last Tuesday Society Absinthe Parlour",
  },
  {
    query: "God's Own Junkyard London",
    category: "etc",
    note: "Walthamstow. Europe's largest neon sign collection. Salvaged signs / movie props",
  },
  {
    query: "Dennis Severs' House London",
    category: "etc",
    note: "Spitalfields. 1724 house reimagined as home of an imaginary Huguenot family. Time capsule",
  },
  {
    query: "Sir John Soane's Museum London",
    category: "etc",
    note: "Holborn. Architect's house + obsessive collector's labyrinth. Preserved as it was in 1837",
  },
  {
    query: "Kristina Records London",
    category: "etc",
    note: "194 Well St, Homerton. Ambient / drone / avant-garde jazz / dance. Wire stockist. Also serves coffee, wine, beer",
  },
  {
    query: "Inverted Audio Record Store Peckham London",
    category: "etc",
    note: "Holdrons Arcade, Rye Lane. Dub techno / ambient specialist. Stocks Basic Channel, Astral Industries, Ilian Tape. Thu-Sat 12-6, Sun 12-4",
  },
  {
    query: "Sounds of the Universe Soho London",
    category: "etc",
    note: "7 Broadwick St. Soul Jazz Records retail arm. Dub / reggae / world / funk + electronic. Basement jazz rarities. Open daily",
  },
  {
    query: "Claire de Rouen Books Shoreditch London",
    category: "etc",
    note: "11A Kingsland Rd. New space opened May 2026. Photography / art books. Labyrinthine multi-room with hidden staircase",
  },
  {
    query: "Bookartbookshop London",
    category: "etc",
    note: "17 Pitfield St, Old Street. Pataphysics, Atlas Press, experimental publishing. Tiny space. Thu-Sat 12-6 only",
  },
  {
    query: "London Centre for Book Arts",
    category: "etc",
    note: "Fish Island, Hackney Wick. Letterpress / risograph / bookbinding. Gallery + research library + shop. Mon-Sat 10-6. Walk-in",
  },
  {
    query: "Hunterian Museum London",
    category: "etc",
    note: "Lincoln's Inn Fields. 3500+ human anatomy specimens. 18th-century surgical collection. Free. Advance booking recommended",
  },
  {
    query: "Grant Museum of Zoology London",
    category: "etc",
    note: "UCL, Euston. 100,000 zoological specimens. Jar of moles, dodo bones. Wunderkammer. Free. 15 min walk from Hunterian — same afternoon",
  },
  {
    query: "Cinema Museum London",
    category: "etc",
    note: "Kennington. 1890s projectors, lobby cards, cinema seats. Charlie Chaplin's former workhouse. Dead media paradise. Booking required. Target: Sat 7/11",
  },
  {
    query: "BFI Mediatheque London",
    category: "etc",
    note: "Inside BFI Southbank. Free access to 180,000+ archive titles. Radiophonic Workshop, experimental TV, GPO Film Unit. Hauntological research station",
  },
];

module.exports = { LISTS, PLACES };
