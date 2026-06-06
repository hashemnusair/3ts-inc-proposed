import { impactIntro, impactQualifier, impactSections } from "@/lib/shareefContent";

export default function ImpactEditorial() {
  return (
    <>
      <section className="w-full bg-[#f8f6f2] px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Impact
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
              Representative cases, organised by the problem they addressed.
            </h1>
          </div>

          <div className="self-end space-y-8">
            <p className="font-serif text-2xl italic leading-relaxed text-charcoal/82">
              {impactIntro}
            </p>
            <p className="text-lg leading-relaxed text-charcoal/72">
              {impactQualifier}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Impact service sections"
            className="sticky top-24 z-30 hidden border-y border-charcoal/10 bg-cream/92 py-4 backdrop-blur-md lg:block"
          >
            <div className="grid grid-cols-4 gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 text-center">
              {impactSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="bg-cream px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/62 transition-colors hover:bg-[#f8f6f2] hover:text-gold"
                >
                  {section.eyebrow}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="w-full px-6 pb-28 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl space-y-28">
          {impactSections.map((section, sectionIndex) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-36 border-t border-charcoal/10 pt-14"
            >
              <div className="mb-12 grid gap-10 lg:grid-cols-[0.38fr_1fr]">
                <div>
                  <p className="mb-5 font-serif text-6xl text-gold/80">
                    0{sectionIndex + 1}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {section.eyebrow}
                  </p>
                </div>
                <div>
                  <h2 className="mb-8 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-6xl">
                    {section.title}
                  </h2>
                  {section.intro ? (
                    <p className="max-w-4xl text-lg leading-relaxed text-charcoal/72">
                      {section.intro}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-px border border-charcoal/10 bg-charcoal/10">
                {section.cases.map((item, caseIndex) => (
                  <div
                    key={`${section.id}-${item.title}`}
                    className="grid gap-8 bg-cream p-7 transition-colors hover:bg-[#fcfbf9] md:p-10 lg:grid-cols-[0.18fr_1fr]"
                  >
                    <div className="font-serif text-4xl text-gold/70">
                      {caseIndex + 1}
                    </div>
                    <div>
                      <h3 className="mb-5 font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                        {item.title}
                      </h3>
                      {item.body ? (
                        <p className="max-w-4xl text-base leading-relaxed text-charcoal/72 md:text-lg">
                          {item.body}
                        </p>
                      ) : null}
                      {item.results?.length ? (
                        <ul className="mt-7 grid gap-3 md:grid-cols-2">
                          {item.results.map((result) => (
                            <li
                              key={result}
                              className="border-l border-gold/50 bg-[#f8f6f2] px-5 py-4 text-sm font-medium leading-relaxed text-charcoal/78"
                            >
                              {result}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>

              {section.closing ? (
                <p className="mt-10 border-l border-gold/50 pl-6 font-serif text-2xl italic leading-snug text-charcoal">
                  {section.closing}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
