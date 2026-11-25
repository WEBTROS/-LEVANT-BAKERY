"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./reveal";
import { menu, site } from "@/lib/site";

type Tab = "sweet" | "savory";

export function Menu() {
  const [tab, setTab] = useState<Tab>("sweet");
  // Stagger cards only on tab switches; the first appearance is handled by the scroll reveal.
  const [switched, setSwitched] = useState(false);

  return (
    <section id="menu" aria-labelledby="menu-title" className="bg-cream py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal as="p" className="eyebrow text-muted">
              From the pastry case
            </Reveal>
            <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(2.4rem,5vw,4.4rem)] text-brand">
              <span id="menu-title">
                A rotating menu, <em className="italic text-muted">baked fresh daily.</em>
              </span>
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 max-w-lg leading-relaxed text-muted">
              The counter changes with the morning. These are a few of the bakes our neighbors keep coming back for.
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div role="tablist" aria-label="Menu category" className="relative inline-grid grid-cols-2 border border-brand/25 p-1">
              <span
                aria-hidden
                className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-brand transition-transform duration-500 ease-out-soft"
                style={{ transform: tab === "savory" ? "translateX(100%)" : "none" }}
              />
              {(["sweet", "savory"] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  id={`tab-${t}`}
                  aria-selected={tab === t}
                  aria-controls={`panel-${t}`}
                  onClick={() => {
                    setTab(t);
                    setSwitched(true);
                  }}
                  className={`eyebrow relative z-10 px-8 py-3.5 text-[0.68rem] transition-colors duration-500 sm:px-10 ${
                    tab === t ? "text-cream" : "text-brand hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative mt-14 sm:mt-16">
          {(["sweet", "savory"] as const).map((t) => (
            <div
              key={t}
              id={`panel-${t}`}
              role="tabpanel"
              aria-labelledby={`tab-${t}`}
              hidden={tab !== t}
            >
              <ul className="rail -mx-5 flex snap-x snap-mandatory scroll-px-5 sm:scroll-px-8 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4">
                {menu[t].map((item, i) => (
                  <li
                    key={item.name}
                    className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-auto"
                    style={switched ? { animation: `rise 0.9s var(--ease-out-soft) ${i * 90}ms both` } : undefined}
                  >
                    <article className="group">
                      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                        <Image loading="eager"
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 1024px) 24vw, (min-width: 768px) 46vw, 78vw"
                          className="object-cover transition-transform duration-[1.4s] ease-out-soft group-hover:scale-[1.06]"
                        />
                      </div>
                      <h3 className="display mt-5 text-[1.65rem] text-brand">{item.name}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.note}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-brand/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-muted">
            Want to know what&apos;s in the case today? We post the morning bake on Instagram.
          </p>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener"
            className="eyebrow shrink-0 border border-brand px-7 py-4 text-[0.68rem] text-brand transition-colors duration-300 hover:bg-brand hover:text-cream"
          >
            Today&apos;s bake · {site.links.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
