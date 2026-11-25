import { Reveal } from "./reveal";
import { ClosureNotice, HoursList, OpenStatus } from "./open-status";
import { site } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-cream py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal as="p" className="eyebrow text-muted">
              Visit us
            </Reveal>
            <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(2.4rem,5vw,4.4rem)] text-brand">
              <span id="visit-title">
                On Martway Street, <em className="italic text-muted">in the heart of Mission.</em>
              </span>
            </Reveal>

            <Reveal delay={140} className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <h3 className="eyebrow text-[0.62rem] text-muted">Address</h3>
                <address className="mt-3 not-italic leading-relaxed text-ink">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </div>
              <div>
                <h3 className="eyebrow text-[0.62rem] text-muted">Orders &amp; questions</h3>
                <a href={`mailto:${site.email}`} className="link-draw mt-3 inline-block pb-0.5 text-ink">
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <div className="flex items-baseline justify-between">
                <h3 className="eyebrow text-[0.62rem] text-muted">Hours</h3>
                <OpenStatus fallback="" className="text-sm text-ink" />
              </div>
              <HoursList className="mt-2" />
              <ClosureNotice className="mt-4 text-sm text-brass" />
            </Reveal>

            <Reveal delay={260} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener"
                className="eyebrow bg-brand px-7 py-4 text-[0.68rem] text-cream transition-colors duration-300 hover:bg-ink"
              >
                Get directions
              </a>
              <a href={site.links.googleMaps} target="_blank" rel="noopener" className="link-draw eyebrow pb-1 text-[0.66rem] text-brand">
                Open in Google Maps
              </a>
            </Reveal>
            <Reveal as="p" delay={300} className="mt-8 text-sm leading-relaxed text-muted">
              Wheelchair-accessible entrance, seating, restroom and parking.
            </Reveal>
          </div>

          <Reveal variant="image" delay={120} className="relative min-h-[420px] overflow-hidden bg-sand lg:col-span-7 lg:min-h-0">
            <iframe
              title="Map showing Levant Bakery & Café at 6518 Martway St, Mission, KS"
              src={site.links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(0.35)_sepia(0.12)_contrast(1.02)]"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
