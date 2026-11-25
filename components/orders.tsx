import Image from "next/image";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";
import pie from "@/public/images/apple-pie.jpg";
import cake from "@/public/images/sweet-potato-date-cake.jpg";

const subject = encodeURIComponent("Preorder request — Levant Bakery");
const body = encodeURIComponent(
  "Hi Levant team,\n\nI'd like to preorder:\n\n- Item(s):\n- Quantity:\n- Pickup date & time:\n- Name & phone:\n\nThank you!",
);

export function Orders() {
  return (
    <section aria-labelledby="orders-title" className="bg-cream py-24 sm:py-32 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-6">
          <Reveal variant="image" className="relative aspect-[3/4] overflow-hidden bg-sand">
            <Image loading="eager"
              src={pie}
              alt="Homemade lattice apple pie with crumb topping on a gilded stand"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal variant="image" delay={140} className="relative mt-12 aspect-[3/4] overflow-hidden bg-sand sm:mt-20">
            <Image loading="eager"
              src={cake}
              alt="Sweet potato date bundt cake with brown butter glaze on a gold cake stand"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal as="p" className="eyebrow text-muted">
            Preorders
          </Reveal>
          <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(2.3rem,4.6vw,4rem)] text-brand">
            <span id="orders-title">
              Whole pies &amp; cakes <em className="italic text-muted">for your table.</em>
            </span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 leading-[1.8] text-muted">
            From 12&Prime; homemade apple pies to sweet potato &amp; date bundt cakes with brown butter glaze, we take
            preorders for holidays, gatherings and the occasional ordinary Tuesday. Send us a note with what you&apos;d
            like and when you&apos;d like to pick it up.
          </Reveal>
          <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${site.email}?subject=${subject}&body=${body}`}
              className="eyebrow bg-brand px-7 py-4 text-[0.68rem] text-cream transition-colors duration-300 hover:bg-ink"
            >
              Email a preorder
            </a>
            <a href={`mailto:${site.email}`} className="link-draw pb-0.5 text-muted">
              {site.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
