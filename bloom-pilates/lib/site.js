// Central place for shared content & navigation.

// IMPORTANT: update to the real production domain before launch.
export const siteUrl = "https://www.bloompilates.sk";

export const nav = [
  { href: "/", label: "Domov" },
  { href: "/o-nas", label: "O nás" },
  { href: "/lekcie", label: "Lekcie" },
  { href: "/cennik", label: "Cenník" },
  { href: "/rozvrh", label: "Rozvrh" },
  { href: "/kontakt", label: "Kontakt" },
];

export const studio = {
  name: "Bloom",
  tagline: "PILATES STUDIO",
  address: "Nám. hrdinov 12, 940 01 Nové Zámky",
  addressShort: "Nám. hrdinov 12, Nové Zámky",
  email: "ahoj@bloompilates.sk",
  phone: "+421 900 000 000",
  hoursWeek: "Po – Pia: 07:00 – 20:00",
  hoursWeekend: "So – Ne: Podľa rozvrhu",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  reservioUrl: "https://www.reservio.com",
  description:
    "Prémiové štúdio zamerané na reformer pilates, barre a individuálny prístup k vášmu zdraviu v Nových Zámkoch.",
  // Structured-data fields (update to exact values before launch)
  streetAddress: "Nám. hrdinov 12",
  postalCode: "940 01",
  city: "Nové Zámky",
  country: "SK",
  geo: { lat: 47.9904, lng: 18.1614 },
  priceRange: "€€",
};

// Light, on-brand studio photography (Unsplash) — one consistent shoot that matches
// the Figma mood. Swap for the studio's own photos before launch.
const U = (id, w) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  hero: U("1717500251997-80b234166d00", 1600), // wide bright studio, arched window
  reformer: U("1717500252642-ab69af027833", 800), // kneeling at push-through
  barre: U("1717500251716-27057c48ace4", 800), // standing stretch
  individual: U("1717500252106-2a9f83cc61ed", 800), // focused, straps
  why: U("1717500252709-05a73fc4f1da", 1000), // calm wide studio
  founder: U("1717500250411-9c523d269000", 900), // warm portrait
  ig1: U("1717500252573-d31d4bf5ddf1", 500),
  ig2: U("1717500252297-b09508db7ceb", 500),
  ig3: U("1717500252179-2811af29e4f7", 500),
  ig4: U("1717500251825-b397c67692a3", 500),
  ig5: U("1717500251833-d807c5753ded", 500),
  ig6: U("1717500250576-5ffefc5cfb93", 500),
};
