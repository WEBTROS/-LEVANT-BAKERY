import { Reveal } from "./reveal";
import { rating, reviews, site } from "@/lib/site";

// Short highlights Google surfaces from the review set.
const highlights = [
  "The cutest cafe decor and atmosphere with the most welcoming owners.",
  "The owner is so kind, and all of the food is homemade.",
  "Service was excellent, very nice and always easy to support a family-run place.",
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[0.18em] text-brass ${className}`} aria-hidden>
      ★★★★★
    </span>
  );
}

export function Reviews() {
  const [featured, ...rest] = reviews;
  const max = Math.max(...rating.breakdown.map((b) => b.count));

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-paper pb-24 sm:pb-32 lg:pb-40">
      {/* Marquee of review highlights */}
      <div className="marquee overflow-hidden border-b border-line py-7 sm:py-9" aria-label="Review highlights">
        <div className="marquee-track flex w-max">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {[...highlights, ...highlights].map((h, i) => (
                <li key={i} className="flex items-center whitespace-nowrap font-display text-[1.6rem] italic text-brand sm:text-[2.1rem]">
                  <span className="px-8 sm:px-12">“{h}”</span>
                  <span className="text-[0.9rem] not-italic text-brass" aria-hidden>
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Rating summary */}
          <div className="lg:col-span-4">
            <Reveal as="p" className="eyebrow text-muted">
              Google reviews
            </Reveal>
            <Reveal delay={80} className="mt-6 flex items-end gap-5">
              <span className="display text-[6.5rem] leading-[0.8] text-brand sm:text-[8rem]">{rating.score}</span>
              <span className="pb-2">
                <Stars className="block text-lg" />
                <span className="mt-1 block text-sm text-muted">{rating.count} reviews on Google</span>
              </span>
            </Reveal>
            <Reveal as="dl" delay={160} className="mt-10 space-y-2.5">
              {rating.breakdown.map((b) => (
                <div key={b.stars} className="grid grid-cols-[1.5rem_1fr_2rem] items-center gap-3 text-sm text-muted">
                  <dt className="tabular-nums">{b.stars}★</dt>
                  <dd className="h-[3px] bg-line">
                    <span className="block h-full bg-brand" style={{ width: `${(b.count / max) * 100}%` }} />
                  </dd>
                  <dd className="text-right tabular-nums">{b.count}</dd>
                </div>
              ))}
            </Reveal>
            <Reveal delay={220} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <a href={site.links.googleMaps} target="_blank" rel="noopener" className="link-draw eyebrow pb-1 text-[0.66rem] text-brand">
                Read all reviews →
              </a>
              <a href={site.links.googleMaps} target="_blank" rel="noopener" className="link-draw eyebrow pb-1 text-[0.66rem] text-muted">
                Leave a review
              </a>
            </Reveal>
          </div>

          {/* Featured testimonial */}
          <figure className="lg:col-span-7 lg:col-start-6">
            <Reveal as="span" className="block font-display text-[7rem] leading-[0.5] text-brass/60" aria-hidden>
              “
            </Reveal>
            <Reveal as="blockquote" delay={80} className="mt-2">
              <p id="reviews-title" className="display text-[clamp(1.8rem,3.1vw,2.85rem)] leading-[1.18] text-brand">
                {featured.text}
              </p>
            </Reveal>
            <Reveal as="figcaption" delay={160} className="mt-10 flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-cream font-display text-xl text-brand">
                {featured.name[0]}
              </span>
              <span>
                <span className="block font-medium text-ink">{featured.name}</span>
                <span className="block text-sm text-muted">
                  {featured.meta} · {featured.when}
                </span>
              </span>
            </Reveal>
          </figure>
        </div>

        {/* More testimonials */}
        <ul className="rail -mx-5 mt-20 flex snap-x snap-mandatory scroll-px-5 sm:scroll-px-8 gap-4 overflow-x-auto px-5 sm:-mx-8 sm:mt-24 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {rest.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={i * 90}
              className="flex w-[82%] shrink-0 snap-start flex-col justify-between bg-cream p-7 sm:w-[60%] md:w-auto lg:p-8"
            >
              <figure className="flex h-full flex-col">
                <Stars className="text-sm" />
                <blockquote className="mt-5 flex-1 leading-relaxed text-ink/85">
                  <p>“{r.text}”</p>
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <span className="block font-medium text-ink">{r.name}</span>
                  <span className="block text-sm text-muted">
                    {r.meta} · {r.when}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
