// Convert places.js to JSON with coordinates for the map
// Coordinates are approximate, good enough for a city map

const { LISTS, PLACES } = require("./places");

const COORDS = {
  // Hotels
  "Town Hall Hotel London": [51.5279, -0.0552],
  "The Culpeper London": [51.5168, -0.0742],
  "The Standard London": [51.5318, -0.1240],
  "Bermonds Locke London": [51.4995, -0.0780],
  "One Hundred Shoreditch London": [51.5246, -0.0773],
  "Boundary London Shoreditch": [51.5237, -0.0729],

  // Show / Venues
  "Café OTO London": [51.5498, -0.0752],
  "Royal Albert Hall London": [51.5009, -0.1774],
  "Barbican Centre London": [51.5200, -0.0937],
  "Hayward Gallery London": [51.5064, -0.1158],
  "Tate Modern London": [51.5076, -0.0994],
  "Design Museum London": [51.4995, -0.1721],
  "Serpentine Gallery London": [51.5050, -0.1749],
  "Ormside Projects London": [51.4878, -0.0560],
  "Venue MOT London": [51.4870, -0.0545],
  "Avalon Cafe Bermondsey London": [51.4790, -0.0470],
  "FOLD London Canning Town": [51.5130, -0.0070],
  "Hundred Years Gallery London": [51.5290, -0.0810],
  "The Horse Hospital London": [51.5230, -0.1235],
  "BFI Southbank London": [51.5065, -0.1145],
  "ICA London": [51.5060, -0.1310],
  "IKLECTIK Peckham Levels London": [51.4700, -0.0665],
  "SET Dalston London": [51.5480, -0.0740],
  "The Carpet Shop Peckham London": [51.4710, -0.0680],
  "EartH Hackney London": [51.5485, -0.0755],
  "Matchstick Piehouse Deptford London": [51.4740, -0.0270],
  "Chisenhale Gallery London": [51.5320, -0.0410],
  "Whitechapel Gallery London": [51.5155, -0.0705],
  "Gasworks Gallery London": [51.4860, -0.1180],
  "Auto Italia South East London": [51.5270, -0.0600],
  "White Cube Bermondsey London": [51.4990, -0.0830],
  "South London Gallery Peckham": [51.4730, -0.0790],
  "Wellcome Collection London": [51.5258, -0.1340],

  // Heavy food
  "Singburi Royal Thai Shoreditch London": [51.5240, -0.0770],
  "Mangal 2 Dalston London": [51.5490, -0.0730],
  "Rochelle Canteen Shoreditch London": [51.5260, -0.0755],
  "Brilliant Corners Dalston London": [51.5470, -0.0750],
  "Jumbi Peckham London": [51.4710, -0.0660],
  "St. JOHN Restaurant London": [51.5200, -0.1020],
  "Quality Chop House London": [51.5240, -0.1090],
  "Casa Fofo Dalston London": [51.5505, -0.0665],
  "Angelina Dalston London": [51.5480, -0.0740],
  "Pidgin Hackney London": [51.5410, -0.0570],
  "Oren Dalston London": [51.5510, -0.0690],
  "The Good Front Room Dalston London": [51.5470, -0.0735],
  "Levan Peckham London": [51.4690, -0.0690],
  "Hausu Peckham London": [51.4720, -0.0650],
  "40 Maltby Street London": [51.4980, -0.0790],
  "BunBunBun Vietnamese London": [51.5380, -0.0780],
  "Tayyabs Whitechapel London": [51.5150, -0.0620],
  "The Marksman Hackney London": [51.5290, -0.0680],
  "Koya Ko Broadway Market London": [51.5360, -0.0620],
  "INIS Hackney Wick London": [51.5380, -0.0260],
  "Barge East Hackney Wick London": [51.5390, -0.0250],
  "Tonkotsu Haggerston London": [51.5370, -0.0750],
  "Sutton and Sons Hackney London": [51.5400, -0.0560],

  // Light food
  "E Pellicci Bethnal Green London": [51.5270, -0.0590],
  "The Dusty Knuckle Dalston London": [51.5460, -0.0720],
  "Towpath Cafe London": [51.5380, -0.0770],
  "Pavilion Café Victoria Park London": [51.5360, -0.0380],
  "Brunswick East Dalston London": [51.5500, -0.0720],
  "Banh Dalston London": [51.5440, -0.0760],
  "Voodoo Rays Dalston London": [51.5480, -0.0755],
  "Ridley Road Market Dalston London": [51.5490, -0.0760],

  // Cafe
  "Batch Baby De Beauvoir London": [51.5390, -0.0770],
  "Climpson and Sons Broadway Market London": [51.5350, -0.0615],
  "Allpress Espresso Dalston London": [51.5480, -0.0740],
  "Gallery Cafe St Margaret's House London": [51.5270, -0.0480],
  "Mare Street Market London": [51.5430, -0.0550],
  "WatchHouse Bermondsey London": [51.4990, -0.0820],
  "South London Louie Peckham London": [51.4730, -0.0790],

  // Alcohol
  "Satan's Whiskers Bethnal Green London": [51.5270, -0.0600],
  "A Bar with Shapes for a Name London": [51.5310, -0.0640],
  "The Last Tuesday Society London": [51.5430, -0.0490],
  "Noble Rot Lamb's Conduit Street London": [51.5220, -0.1180],
  "Space Talk London": [51.5210, -0.0950],
  "Goodbye Horses De Beauvoir London": [51.5400, -0.0780],
  "Chiave Shoreditch London": [51.5237, -0.0729],
  "Waltz Bar Shoreditch London": [51.5220, -0.0830],
  "Coupette Bethnal Green London": [51.5270, -0.0585],
  "The Palm Tree London": [51.5310, -0.0380],
  "Chesham Arms London": [51.5460, -0.0440],
  "The Laughing Heart Hackney London": [51.5310, -0.0660],

  // Etc
  "World of Echo Records 128 Columbia Road London": [51.5290, -0.0655],
  "Honest Jon's Records Portobello Road London": [51.5150, -0.2050],
  "Phonica Records Soho London": [51.5140, -0.1370],
  "Donlon Books London": [51.5350, -0.0605],
  "Tenderbooks London": [51.5110, -0.1270],
  "Housmans Bookshop London": [51.5310, -0.1240],
  "Novelty Automation London": [51.5180, -0.1185],
  "Viktor Wynd Museum of Curiosities London": [51.5430, -0.0490],
  "God's Own Junkyard London": [51.5880, -0.0200],
  "Dennis Severs' House London": [51.5200, -0.0750],
  "Sir John Soane's Museum London": [51.5170, -0.1175],
  "Kristina Records London": [51.5450, -0.0440],
  "Inverted Audio Record Store Peckham London": [51.4700, -0.0665],
  "Sounds of the Universe Soho London": [51.5140, -0.1360],
  "Claire de Rouen Books Shoreditch London": [51.5260, -0.0775],
  "Bookartbookshop London": [51.5270, -0.0870],
  "London Centre for Book Arts": [51.5370, -0.0270],
  "Hunterian Museum London": [51.5170, -0.1175],
  "Grant Museum of Zoology London": [51.5250, -0.1340],
  "Cinema Museum London": [51.4890, -0.1100],
  "BFI Mediatheque London": [51.5065, -0.1145],
};

const CATEGORY_META = {
  hotel:   { label: "Hotels", color: "#6366f1", emoji: "🏨" },
  show:    { label: "Venues & Exhibitions", color: "#ec4899", emoji: "🎵" },
  heavy:   { label: "Restaurants", color: "#ef4444", emoji: "🍽️" },
  light:   { label: "Quick Eats & Breakfast", color: "#f97316", emoji: "🥪" },
  cafe:    { label: "Cafes", color: "#a16207", emoji: "☕" },
  alcohol: { label: "Bars & Pubs", color: "#8b5cf6", emoji: "🍸" },
  etc:     { label: "Shops, Books & Oddities", color: "#059669", emoji: "📀" },
};

const data = PLACES.map((p, i) => {
  const coord = COORDS[p.query];
  if (!coord) {
    console.error(`Missing coords: ${p.query}`);
    return null;
  }
  const name = p.query
    .replace(/ London$/, "")
    .replace(/ Dalston$/, "")
    .replace(/ Shoreditch$/, "")
    .replace(/ Peckham$/, "")
    .replace(/ Bethnal Green$/, "")
    .replace(/ Hackney$/, "");
  return {
    id: i,
    name,
    query: p.query,
    category: p.category,
    note: p.note,
    lat: coord[0],
    lng: coord[1],
  };
}).filter(Boolean);

const output = { categories: CATEGORY_META, places: data };
require("fs").writeFileSync(
  require("path").join(__dirname, "data.json"),
  JSON.stringify(output, null, 2)
);
console.log(`Generated ${data.length} places`);
