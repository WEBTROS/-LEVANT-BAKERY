import Image from "next/image";
import { Reveal } from "./reveal";
import { FaqList } from "./faq-list";
import { faqs, site } from "@/lib/site";
import tea from "@/public/images/tea-semolina-cake.jpg";

// FAQPage structured data so answers can surface directly in search.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-paper py-24 sm:py-32 lg:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal as="p" className="eyebrow text-muted">
              Questions, answered
            </Reveal>
            <Reveal as="h2" delay={80} className="display mt-6 text-[clamp(2.4rem,5vw,4.2rem)] text-brand">
              <span id="faq-title">
                Good to know <em className="italic text-muted">before you visit.</em>
              </span>
            </Reveal>

            {/* Small photo card with a direct line to the owners */}
            <Reveal delay={160} className="mt-10 hidden items-center gap-5 bg-cream p-4 pr-6 sm:flex lg:max-w-sm">
              <div className="relative size-20 shrink-0 overflow-hidden">
                <Image src={tea} alt="" fill sizes="80px" placeholder="blur" className="object-cover" />
              </div>
              <div>
                <p className="font-display text-xl leading-tight text-brand">Still have a question?</p>
                <a href={`mailto:${site.email}`} className="link-draw mt-1 inline-block pb-0.5 text-sm text-muted">
                  {site.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
          <FaqList />
          <p className="mt-8 text-sm text-muted sm:hidden">
            Still have a question?{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-4">
              Email us
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
