import Image from "next/image";
import { OpenStatus } from "./open-status";
import { rating, site } from "@/lib/site";
import pastryTable from "@/public/images/hero-pastry-table.jpg";
import interior from "@/public/images/cafe-interior.jpg";
import cakeCroissants from "@/public/images/hero-cake-croissants.jpg";

// Background loop, in order. `pos` frames each photo on desktop; `posMobile` on phones (portrait crop).
const slides = [
  {
    src: pastryTable,
    alt: "Pastries, a glazed bundt cake on a gold stand and filled buns on a marble table inside Levant Bakery & Café",
    pos: "object-[50%_60%]",
    posMobile: "max-md:object-[74%_50%]",
  },
  {
    src: interior,
    alt: "Inside Levant Bakery & Café: hunter-green walls, gilded frames, marble café tables and a vintage rug",
    pos: "object-[50%_42%]",
    posMobile: "max-md:object-[50%_42%]",
  },
  {
    src: cakeCroissants,
    alt: "Glazed cake, croissants, pastries and an iced latte on a marble table by the café window",
    pos: "object-[50%_62%]",
    posMobile: "max-md:object-[60%_50%]",
  },
];

export function Hero() {
  return (
    <section id="top" aria-label="Welcome" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-espresso text-cream">
      {/* Background loop: three photos crossfade with a slow zoom — pure CSS (see .hero-slide in globals.css).
          No blur placeholder: the first photo is preloaded and the others load eagerly so every fade lands on a ready image. */}
      <div className="hero-media absolute inset-0 -z-20">
        {slides.map((slide, i) => (
          <div key={i} className="hero-slide" style={{ ["--i" as string]: i }}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={i === 0}
              loading={i === 0 ? undefined : "eager"}
              fetchPriority={i === 0 ? undefined : "low"}
              sizes="100vw"
              quality={75}
              className={`hero-zoom object-cover ${slide.pos} ${slide.posMobile}`}
            />
          </div>
        ))}
      </div>
      {/* Legibility shading only where text sits: a light band under the nav,
          a side fade behind the copy, and a short fade under the info strip. The rest of the photo stays bright. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(27,18,13,0.38)_0%,rgba(27,18,13,0)_18%,rgba(27,18,13,0)_62%,rgba(27,18,13,0.55)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(27,18,13,0.5)_0%,rgba(27,18,13,0.22)_45%,rgba(27,18,13,0)_70%)] max-md:bg-[linear-gradient(180deg,rgba(27,18,13,0.1)_8%,rgba(27,18,13,0.42)_30%,rgba(27,18,13,0.5)_60%,rgba(27,18,13,0.62)_100%)]"
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <div className="my-auto max-w-[56rem] py-8 sm:py-10 [text-shadow:0_1px_24px_rgba(20,12,8,0.35)]">
          <p className="hero-rise eyebrow text-cream/85" style={{ ["--d" as string]: "150ms" }}>
            Bakery &amp; Café · Mission, Kansas
          </p>
          <h1
            className="hero-rise display mt-5 text-[clamp(2.7rem,min(6.6vw,11svh),6.5rem)] font-medium leading-[1.02]"
            style={{ ["--d" as string]: "260ms" }}
          >
            Sweet &amp; savory,
            <br />
            <em className="font-normal italic">baked every morning.</em>
          </h1>
          <p
            className="hero-rise mt-6 max-w-[44rem] text-[clamp(1.02rem,1.35vw,1.25rem)] leading-[1.7] text-cream/90 [text-wrap:balance]"
            style={{ ["--d" as string]: "420ms" }}
          >
            Made from scratch by a family-owned Levantine bakery on Martway Street — rotating pastries, Middle
            Eastern flavors, house-made syrups and tea.
          </p>
          <div className="hero-rise mt-9 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ ["--d" as string]: "560ms" }}>
            <a
              href="#menu"
              className="eyebrow bg-cream px-7 py-4 text-[0.7rem] text-brand transition-colors duration-300 hover:bg-sand"
            >
              See what&apos;s baking
            </a>
            <a
              href={site.links.directions}
              target="_blank"
              rel="noopener"
              className="link-draw eyebrow pb-1 text-[0.7rem] text-cream"
            >
              Get directions →
            </a>
          </div>
        </div>

        {/* At-a-glance strip: live status · address · rating */}
        <div
          className="hero-rise grid grid-cols-2 border-t border-cream/25 py-5 text-[0.82rem] text-cream/90 sm:grid-cols-3 sm:py-6 sm:text-sm"
          style={{ ["--d" as string]: "720ms" }}
        >
          <OpenStatus fallback="Tue–Sat 7–3 · Sun 9–3" className="col-span-2 mb-2 sm:col-span-1 sm:mb-0" />
          <a href={site.links.googleMaps} target="_blank" rel="noopener" className="link-draw justify-self-start pb-0.5 sm:justify-self-center">
            {site.address.street}, {site.address.city}
          </a>
          <a
            href={`${site.links.googleMaps}`}
            target="_blank"
            rel="noopener"
            className="link-draw justify-self-end pb-0.5"
          >
            <span className="text-brass" aria-hidden>
              ★
            </span>{" "}
            {rating.score} · {rating.count} Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
