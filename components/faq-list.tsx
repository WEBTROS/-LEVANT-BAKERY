"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";

/** Single-open accordion. Height animates via grid-template-rows (0fr → 1fr), no JS measuring. */
export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <ul className="border-b border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q-${i}`;
        const panelId = `${base}-a-${i}`;
        return (
          <li key={f.q} className="group/faq border-t border-line">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[2.25rem_1fr_auto] items-center gap-3 py-6 text-left sm:grid-cols-[3.5rem_1fr_auto] sm:gap-4 sm:py-7"
              >
                <span
                  aria-hidden
                  className={`font-display text-lg italic tabular-nums transition-colors duration-500 ${
                    isOpen ? "text-brass" : "text-muted/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`display text-[1.45rem] leading-tight transition-colors duration-500 sm:text-[1.85rem] ${
                    isOpen ? "text-brand" : "text-ink/80 group-hover/faq:text-brand"
                  }`}
                >
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className={`relative flex size-10 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-out-soft sm:size-11 ${
                    isOpen
                      ? "rotate-180 border-brand bg-brand text-cream"
                      : "border-brand/25 text-brand group-hover/faq:border-brand"
                  }`}
                >
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span
                    className={`absolute h-3.5 w-px bg-current transition-transform duration-500 ease-out-soft ${
                      isOpen ? "scale-y-0" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-soft ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pl-[calc(2.25rem+0.75rem)] pr-12 leading-[1.8] text-muted sm:pl-[calc(3.5rem+1rem)] sm:pr-16">
                  {f.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
