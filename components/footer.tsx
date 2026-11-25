import Image from "next/image";
import { navLinks, site } from "@/lib/site";
import { FacebookIcon, GoogleIcon, InstagramIcon } from "./social-icons";
import logo from "@/public/images/logo-cream.png";

const social = [
  { label: "Instagram", href: site.links.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.links.facebook, Icon: FacebookIcon },
  { label: "Google reviews & directions", href: site.links.googleMaps, Icon: GoogleIcon },
];

const preorderHref = `mailto:${site.email}?subject=${encodeURIComponent("Preorder request — Levant Bakery")}`;

export function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Closing call to action */}
        <div className="flex flex-col gap-8 border-b border-cream/15 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-[0.62rem] text-cream/50">See you soon</p>
            <p className="display mt-5 max-w-3xl text-[clamp(2.1rem,4.4vw,3.8rem)]">
              Fresh from the oven, <em className="italic text-brass">Tuesday through Sunday.</em>
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={site.links.directions}
              target="_blank"
              rel="noopener"
              className="eyebrow bg-cream px-7 py-4 text-[0.68rem] text-brand transition-colors duration-300 hover:bg-sand"
            >
              Get directions
            </a>
            <a href={preorderHref} className="link-draw eyebrow pb-1 text-[0.68rem] text-cream">
              Email a preorder →
            </a>
          </div>
        </div>

        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          {/* Brand + socials */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start lg:col-span-5 lg:flex-col xl:flex-row">
            <Image loading="eager"
              src={logo}
              alt={`${site.name} logo — Sweet & Savory, est. 2026`}
              className="h-auto w-32 shrink-0 sm:w-36"
              sizes="144px"
            />
            <div className="sm:pt-2">
              <p className="font-display text-[1.6rem] leading-snug">A little taste of the Levant, baked in Mission.</p>
              <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-cream/60">
                A women-owned, family-run bakery &amp; café serving croissants, Middle Eastern pastries, house-made
                syrups and tea to Mission, Prairie Village, Overland Park and the wider Kansas City area.
              </p>
              <ul className="mt-7 flex gap-3" aria-label="Social media">
                {social.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                      title={label}
                      className="flex size-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-[background-color,color,border-color,transform] duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-cream hover:bg-cream hover:text-espresso"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-[1.35fr_1fr_0.8fr] lg:col-span-7 lg:col-start-6">
            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow text-[0.62rem] text-cream/50">Visit</h2>
              <address className="mt-5 not-italic leading-relaxed text-cream/85">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <a href={`mailto:${site.email}`} className="link-draw mt-4 inline-block pb-0.5 text-cream/85">
                {site.email}
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-[0.62rem] text-cream/50">Hours</h2>
              <dl className="mt-5 space-y-1.5 whitespace-nowrap text-cream/85">
                <div className="flex gap-3">
                  <dt className="w-16">Tue–Sat</dt>
                  <dd>7 AM – 3 PM</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16">Sun</dt>
                  <dd>9 AM – 3 PM</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-16">Mon</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>

            <nav aria-label="Footer">
              <h2 className="eyebrow text-[0.62rem] text-cream/50">Explore</h2>
              <ul className="mt-5 space-y-1.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="link-draw pb-0.5 text-cream/85 hover:text-cream">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="overflow-hidden" aria-hidden>
          <p className="display select-none whitespace-nowrap text-center text-[19vw] leading-[0.8] tracking-[0.06em] text-cream/[0.06] lg:text-[15.5rem]">
            LEVANT
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/15 py-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.established} {site.name}. All rights reserved.
          </p>
          <p>Women-owned · Family-run · Mission, Kansas</p>
        </div>
      </div>
    </footer>
  );
}
