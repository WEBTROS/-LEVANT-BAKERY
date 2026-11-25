// Single source of truth for everything the page says about the business.
// Facts here come from the Google Business Profile, Instagram and Facebook
// pages as of November 2026. Update this file — not the components — when
// hours, items or reviews change.

export const site = {
  name: "Levant Bakery & Café",
  shortName: "Levant Bakery",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://levant-bakery.vercel.app",
  tagline: "Sweet & Savory",
  established: 2026,
  description:
    "Family-owned Levantine bakery & café in Mission, Kansas. Croissants, za'atar & feta pastries, Middle Eastern flavors, house-made syrups and tea — baked fresh every morning on Martway Street.",
  email: "levant.mission@gmail.com",
  address: {
    street: "6518 Martway St",
    city: "Mission",
    region: "KS",
    postalCode: "66202",
    country: "US",
  },
  geo: { lat: 39.0210942, lng: -94.6609843 },
  timeZone: "America/Chicago",
  links: {
    instagram: "https://www.instagram.com/levantmissionbakery/",
    instagramHandle: "@levantmissionbakery",
    facebook: "https://www.facebook.com/profile.php?id=61595636006105",
    googleMaps: "https://maps.google.com/?cid=8678114383579399317",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Levant+Bakery+%26+Caf%C3%A9%2C+6518+Martway+St%2C+Mission%2C+KS+66202",
    mapEmbed:
      "https://www.google.com/maps?q=Levant+Bakery+%26+Caf%C3%A9,+6518+Martway+St,+Mission,+KS+66202&z=16&output=embed",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/** 0 = Sunday … 6 = Saturday. Times are 24h minutes from midnight, local (America/Chicago). */
export type DayHours = { day: string; short: string; open: number | null; close: number | null };

export const hours: DayHours[] = [
  { day: "Sunday", short: "Sun", open: 9 * 60, close: 15 * 60 },
  { day: "Monday", short: "Mon", open: null, close: null },
  { day: "Tuesday", short: "Tue", open: 7 * 60, close: 15 * 60 },
  { day: "Wednesday", short: "Wed", open: 7 * 60, close: 15 * 60 },
  { day: "Thursday", short: "Thu", open: 7 * 60, close: 15 * 60 },
  { day: "Friday", short: "Fri", open: 7 * 60, close: 15 * 60 },
  { day: "Saturday", short: "Sat", open: 7 * 60, close: 15 * 60 },
];

/** One-off closures announced on social media (YYYY-MM-DD, local date). */
export const closures: { date: string; label: string }[] = [
  { date: "2026-11-26", label: "Closed for Thanksgiving" },
];

export const rating = {
  score: 4.9,
  count: 50,
  // Star distribution from the Google Business Profile.
  breakdown: [
    { stars: 5, count: 47 },
    { stars: 4, count: 0 },
    { stars: 3, count: 2 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ],
};

export type Review = { name: string; meta: string; when: string; text: string };

// Verbatim 5-star Google reviews; "…" marks where a review was shortened.
export const reviews: Review[] = [
  {
    name: "Fatimah Alrubaye",
    meta: "Local Guide",
    when: "November 2026",
    text: "Literally the prettiest cafe i've ever been to in my entire life. Not only that but everything is made fresh and from scratch with great prices!! The owner is so beautiful and kind and you can tell she really loves what she does. If you can only choose one cafe to go to in this city, this should be your pick!!",
  },
  {
    name: "Ana Ramirez",
    meta: "Local Guide",
    when: "November 2026",
    text: "Second day here in a row it is that good!! Sweet or savory, everything is amazing. The house made syrups are so tasty and the cafe is beautiful.",
  },
  {
    name: "Mataz Aldossary",
    meta: "Google review",
    when: "November 2026",
    text: "One of the best bakeries in town! Amazing food, great atmosphere, and excellent service. You can tell everything is made with love. Highly recommend stopping by!",
  },
  {
    name: "Michaela Martinez",
    meta: "Google review",
    when: "October 2026",
    text: "Was such a wonderful surprise!! Food and drinks were phenomenal (you have to try the spicy feta/veggie sandwich). Cannot wait to go back…",
  },
  {
    name: "Lisbet Padron",
    meta: "Google review",
    when: "November 2026",
    text: "Beautiful place and amazing customer service… don't let that stop you from trying their delicious pastries and teas.",
  },
];

export type MenuItem = { name: string; note: string; image: string; alt: string };

export const menu: { sweet: MenuItem[]; savory: MenuItem[] } = {
  sweet: [
    {
      name: "Strawberry Cheese Danish",
      note: "Laminated dough, sweet cream cheese and whole strawberries, finished with powdered sugar.",
      image: "/images/strawberry-cheese-danish.jpg",
      alt: "Strawberry cheese danishes and sourdough croissants on a marble counter",
    },
    {
      name: "Almond Croissant",
      note: "Twice-baked with almond cream and toasted flaked almonds.",
      image: "/images/almond-croissants.jpg",
      alt: "Almond croissants topped with flaked almonds",
    },
    {
      name: "Sourdough Sweet Bread",
      note: "Served warm with butter, honey and our house-made apricot jelly.",
      image: "/images/sourdough-sweet-bread.jpg",
      alt: "Sourdough sweet bread with butter, honey and apricot jelly on a green tray",
    },
    {
      name: "Sablé Cookies",
      note: "Buttery French shortbread sandwiched with jam and striped with chocolate.",
      image: "/images/sable-cookies.jpg",
      alt: "Jam-filled sablé cookies drizzled with chocolate",
    },
  ],
  savory: [
    {
      name: "Za'atar & Feta Croissant",
      note: "Wild thyme, sumac and sesame with salty feta. Ask for the spicy feta version too.",
      image: "/images/zaatar-feta-croissants.jpg",
      alt: "Za'atar feta and spicy feta croissants cooling on wire racks",
    },
    {
      name: "Msakhan Chicken Pastry",
      note: "Palestinian-style chicken with sumac and caramelised onion, rolled in flaky pastry.",
      image: "/images/msakhan-semolina.jpg",
      alt: "Msakhan chicken pastry rolls beside brown butter semolina cake",
    },
    {
      name: "Shakshuka Egg Wrap",
      note: "Eggs gently cooked in spiced tomato and pepper, wrapped warm to go.",
      image: "/images/shakshuka-egg-wrap.jpg",
      alt: "Shakshuka egg wrap and croissant on a green café tray",
    },
    {
      name: "Sausage Sourdough Roll",
      note: "Our sourdough, baked around a savory spiced sausage filling.",
      image: "/images/sausage-sourdough-roll.jpg",
      alt: "Savory sausage sourdough roll in a paper boat",
    },
  ],
};

export const drinks = [
  { name: "Lattes with house-made syrups", note: "Hot or iced — syrups cooked in-house" },
  { name: "Fresh mint tea", note: "Steeped to order" },
  { name: "Black tea, served in glass", note: "The way it's poured at home" },
  { name: "Espresso & cappuccino", note: "Pulled for slow mornings" },
];

export const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#cafe", label: "The Café" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

// Answers stick to facts from the café's Google profile and social posts.
export const faqs: { q: string; a: string }[] = [
  {
    q: "What are your opening hours?",
    a: "We're open Tuesday to Saturday from 7 AM to 3 PM, and Sunday from 9 AM to 3 PM. We're closed on Mondays. Holiday closures are posted on our Instagram first.",
  },
  {
    q: "Where are you, and is there parking?",
    a: "You'll find us at 6518 Martway St in Mission, Kansas. Wheelchair-accessible parking is available, and the entrance, seating and restroom are all wheelchair accessible.",
  },
  {
    q: "What kind of bakery is Levant?",
    a: "A family-owned bakery and café inspired by the Levant — the eastern Mediterranean. Expect sweet and savory bakes with Middle Eastern flavors, like za'atar & feta croissants, msakhan chicken pastry and brown butter semolina cake, alongside classic croissants and danishes.",
  },
  {
    q: "Does the menu change?",
    a: "Yes — our pastry case rotates daily, so there's always something new. We post the morning's bake on Instagram at @levantmissionbakery. Come early for the best selection.",
  },
  {
    q: "Can I preorder pies, cakes or pastry boxes?",
    a: "Absolutely. Email us at levant.mission@gmail.com with what you'd like, how many, and your preferred pickup date, and we'll confirm the details with you.",
  },
  {
    q: "What drinks do you serve?",
    a: "Hot and iced lattes made with our own house-made syrups, espresso and cappuccino, fresh mint tea, and black tea served in glass.",
  },
  {
    q: "What's the book swap?",
    a: "Bring a book you've finished and take one you haven't read. The shelf changes all the time, and the walls feature work from local artists on rotation.",
  },
];
