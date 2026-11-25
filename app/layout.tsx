import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site, hours } from "@/lib/site";

// Self-hosted variable fonts (next/font/google fails under `next dev` on this setup).
// Cormorant mirrors the high-contrast serif of the LEVANT wordmark;
// Jost mirrors the airy, wide-tracked "BAKERY" / "EST. 2026" lettering.
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-latin-wght-normal.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/cormorant-latin-wght-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const jost = localFont({
  src: "./fonts/jost-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-jost",
  display: "swap",
});

const title = "Levant Bakery & Café — Middle Eastern Bakery & Café in Mission, KS";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "bakery Mission KS",
    "café Mission Kansas",
    "Middle Eastern bakery Kansas City",
    "Levantine bakery",
    "croissants Mission KS",
    "za'atar croissant",
    "coffee shop Johnson County",
    "Kansas City bakery",
    "family owned bakery",
    "women owned café",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Inside Levant Bakery & Café in Mission, Kansas" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  category: "food",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hhmm = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "@id": `${site.url}/#bakery`,
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  image: [`${site.url}/images/cafe-interior.jpg`, `${site.url}/images/strawberry-cheese-danish.jpg`],
  logo: `${site.url}/images/logo-square.jpg`,
  servesCuisine: ["Middle Eastern", "Levantine", "Pastries", "Coffee", "Tea"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.links.googleMaps,
  openingHoursSpecification: hours
    .map((h, i) => ({ h, i }))
    .filter(({ h }) => h.open !== null)
    .map(({ h, i }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames[i]}`,
      opens: hhmm(h.open!),
      closes: hhmm(h.close!),
    })),
  sameAs: [site.links.instagram, site.links.facebook, site.links.googleMaps],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wheelchair-accessible entrance", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair-accessible seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair-accessible restroom", value: true },
  ],
  areaServed: ["Mission, KS", "Prairie Village, KS", "Overland Park, KS", "Kansas City metro"],
  slogan: "Sweet & Savory",
  foundingDate: String(site.established),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
