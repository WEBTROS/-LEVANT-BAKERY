import Image from "next/image";
import { Reveal } from "./reveal";
import { drinks } from "@/lib/site";
import lounge from "@/public/images/cafe-lounge.jpg";
import corner from "@/public/images/cafe-window-corner.jpg";
import latte from "@/public/images/iced-latte.jpg";

const extras = [
  { title: "Book swap", text: "Bring a book, take a book — the shelf is always changing." },
  { title: "Featured artists", text: "Work from local artists, on rotation along our walls." },
  { title: "Window seats", text: "Leather armchairs and morning light on Martway Street." },
];

export function Cafe() {
  return (
    <section id="cafe" aria-labelledby="cafe-title" className="overflow-hidden bg-espresso py-24 text-cream sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal as="p" className="eyebrow text-cream/60">
              The café
            </Reveal>
            <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(2.4rem,5.4vw,4.8rem)]">
              <span id="cafe-title">
                A room made for <em className="italic text-brass">lingering.</em>
              </span>
            </Reveal>
          </div>
          <Reveal as="p" delay={160} className="max-w-md leading-[1.8] text-cream/70 lg:col-span-5 lg:justify-self-end">
            Hunter-green walls, gilded frames, velvet banquettes and leather armchairs by the window. Come for a
            croissant, stay for a second cup.
          </Reveal>
        </div>

        {/* Asymmetric gallery */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-5 lg:grid-cols-12">
          <Reveal variant="image" className="parallax relative col-span-2 aspect-[4/5] overflow-hidden bg-[#2f2219] sm:aspect-[16/11] lg:col-span-7 lg:aspect-auto lg:h-[min(78vh,760px)]">
            <Image
              src={lounge}
              alt="Café lounge with framed hunting prints, brass lamp, bentwood chairs and red velvet seating"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[50%_55%]"
            />
          </Reveal>
          <div className="col-span-2 grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-5 lg:grid-cols-1 lg:grid-rows-[1.25fr_1fr]">
            <Reveal variant="image" delay={120} className="relative aspect-[3/4] overflow-hidden bg-[#2f2219] lg:aspect-auto">
              <Image
                src={corner}
                alt="Window corner with plaid curtains, a leather armchair and a marble side table"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover object-[50%_60%]"
              />
            </Reveal>
            <Reveal variant="image" delay={220} className="relative aspect-[3/4] overflow-hidden bg-[#2f2219] lg:aspect-auto">
              <Image
                src={latte}
                alt="Iced latte layered with house-made syrup on a marble table"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover object-[50%_45%]"
              />
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-16 sm:mt-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal as="h3" className="eyebrow text-cream/60">
              At the bar
            </Reveal>
            <ul className="mt-6">
              {drinks.map((d, i) => (
                <Reveal
                  as="li"
                  key={d.name}
                  delay={i * 80}
                  className="flex flex-col gap-1 border-b border-cream/15 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="display text-[1.6rem] sm:text-[1.75rem]">{d.name}</span>
                  <span className="text-sm text-cream/55">{d.note}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal as="h3" className="eyebrow text-cream/60">
              Stay a while
            </Reveal>
            <ul className="mt-6">
              {extras.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 100} className="border-b border-cream/15 py-5">
                  <span className="display block text-[1.6rem] sm:text-[1.75rem]">{e.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-cream/55">{e.text}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
