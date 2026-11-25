import Image from "next/image";
import { Reveal } from "./reveal";
import counter from "@/public/images/pastry-counter.jpg";
import tea from "@/public/images/tea-semolina-cake.jpg";

const pillars = [
  {
    title: "Made from scratch",
    text: "Croissants, danishes, sourdough and cakes are made fresh in our kitchen — everything on the counter is homemade.",
  },
  {
    title: "House-made syrups",
    text: "Our lattes are sweetened with syrups we cook ourselves, poured alongside fresh mint and black teas.",
  },
  {
    title: "Family-owned",
    text: "A women-owned, family-run café that opened its doors to Mission neighbors in the fall of 2026.",
  },
];

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal as="p" className="eyebrow text-muted">
              Our story
            </Reveal>
            <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(2.4rem,5vw,4.4rem)] text-brand" >
              <span id="story-title">
                The Levant is where the olive tree grows. <em className="italic text-muted">We bake its flavors</em> into
                a Kansas morning.
              </span>
            </Reveal>
            <Reveal as="p" delay={160} className="mt-8 max-w-xl text-[1.05rem] leading-[1.8] text-muted">
              Za&apos;atar and salty feta folded into buttery croissants. Msakhan, msammen and semolina cake beside
              strawberry danishes and almond croissants. Levant Bakery &amp; Café brings the home baking of the eastern
              Mediterranean to Mission, Kansas — sweet and savory, made with love, on a menu that changes with the day.
            </Reveal>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
            <Reveal variant="image" className="parallax relative aspect-[4/5] w-[82%] overflow-hidden bg-sand">
              <Image loading="eager"
                src={counter}
                alt="The morning pastry counter: cinnamon knots, croissants and chocolate chip cookies"
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                placeholder="blur"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              variant="image"
              delay={220}
              className="absolute -bottom-10 right-0 aspect-[3/4] w-[44%] overflow-hidden border-[6px] border-paper bg-sand sm:border-[10px]"
            >
              <Image loading="eager"
                src={tea}
                alt="Black tea in a glass mug with a slice of brown butter semolina cake on a brass tray"
                fill
                sizes="(min-width: 1024px) 20vw, 44vw"
                placeholder="blur"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>

        <ol className="mt-24 grid gap-10 sm:mt-28 md:grid-cols-3 md:gap-8 lg:gap-12">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 110} className="border-t border-line pt-7">
              <span className="font-display text-lg italic text-brass">0{i + 1}</span>
              <h3 className="display mt-3 text-[1.9rem] text-brand">{p.title}</h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
