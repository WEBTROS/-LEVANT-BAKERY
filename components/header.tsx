"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label={`${site.name} — back to top`} className={`group flex flex-col items-center leading-none ${className}`}>
      <span className="font-display text-[1.55rem] font-semibold tracking-[0.2em] sm:text-[1.7rem]">LEVANT</span>
      <span className="mt-1 flex items-center gap-2 text-[0.52rem] font-normal tracking-[0.42em]">
        <span aria-hidden className="h-px w-3 bg-current opacity-60" />
        BAKERY
        <span aria-hidden className="h-px w-3 bg-current opacity-60" />
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,box-shadow,padding] duration-500 ease-out-soft ${
          solid
            ? "bg-paper/95 py-3 text-brand shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
            : open
              ? "py-5 text-brand"
              : "py-5 text-cream"
        }`}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-12">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-8">
              {navLinks.slice(0, 3).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-draw eyebrow pb-1 text-[0.68rem]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Wordmark className="col-start-1 justify-self-start lg:col-start-2 lg:justify-self-center" />

          <div className="col-start-3 flex items-center justify-end gap-8">
            <ul className="hidden gap-8 lg:flex">
              {navLinks.slice(3).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-draw eyebrow pb-1 text-[0.68rem]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.links.directions}
              target="_blank"
              rel="noopener"
              className={`hidden border px-5 py-2.5 text-[0.68rem] eyebrow transition-colors duration-300 sm:inline-block ${
                solid
                  ? "border-brand bg-brand text-cream hover:bg-transparent hover:text-brand"
                  : "border-cream/70 hover:bg-cream hover:text-brand"
              } ${open ? "invisible" : ""}`}
            >
              Directions
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative -mr-2 flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span
                aria-hidden
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ease-out-soft ${
                  open ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                aria-hidden
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ease-out-soft ${
                  open ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-cream px-6 pt-28 pb-10 transition-[opacity,visibility] duration-500 ease-out-soft lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex-1">
          <ul className="space-y-1">
            {navLinks.map((l, i) => (
              <li
                key={l.href}
                className="transition-[opacity,transform] duration-700 ease-out-soft"
                style={{
                  transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(16px)",
                }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-4 font-display text-[2.4rem] leading-none text-brand"
                >
                  {l.label}
                  <span className="eyebrow text-[0.6rem] text-muted">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-4 text-sm text-muted">
          <p>
            {site.address.street}, {site.address.city}, {site.address.region}
            <br />
            Tue–Sat 7 AM–3 PM · Sun 9 AM–3 PM
          </p>
          <a
            href={site.links.directions}
            target="_blank"
            rel="noopener"
            className="eyebrow block bg-brand px-6 py-4 text-center text-[0.7rem] text-cream"
          >
            Get directions
          </a>
        </div>
      </div>
    </>
  );
}
