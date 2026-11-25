import Image from "next/image";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

const tiles = [
  { src: "/images/turnovers.jpg", alt: "Golden puff pastry turnovers on marble" },
  { src: "/images/msammen.jpg", alt: "Moroccan msammen flatbread and hand pies" },
  { src: "/images/strawberry-cheese-danish.jpg", alt: "Strawberry cheese danishes beside croissants" },
  { src: "/images/cafe-window-corner.jpg", alt: "Window seat with plaid curtains and leather armchair" },
  { src: "/images/almond-croissants.jpg", alt: "Almond croissants" },
  { src: "/images/sable-cookies.jpg", alt: "Jam sablé cookies with chocolate stripes" },
];

export function Instagram() {
  return (
    <section aria-labelledby="ig-title" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal as="p" className="eyebrow text-muted">
              Follow the daily bake
            </Reveal>
            <Reveal as="h2" delay={80} className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] text-brand">
              <a id="ig-title" href={site.links.instagram} target="_blank" rel="noopener" className="link-draw pb-1">
                {site.links.instagramHandle}
              </a>
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="max-w-sm text-muted sm:text-right">
            New bakes, seasonal specials and preorder announcements — posted first on Instagram.
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {tiles.map((t, i) => (
            <Reveal as="li" key={t.src} variant="image" delay={i * 70} className="relative aspect-square overflow-hidden bg-sand">
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener"
                aria-label={`${t.alt} — view on Instagram`}
                className="group block h-full w-full"
              >
                <Image loading="eager"
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover transition-[transform,filter] duration-[1.2s] ease-out-soft group-hover:scale-[1.06] group-hover:brightness-90"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
