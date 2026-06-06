"use client";

import { useState } from "react";
import { impactIntro, impactQualifier, impactSections } from "@/lib/shareefContent";

export default function ImpactAccordions() {
  const [openSection, setOpenSection] = useState(impactSections[0]?.id ?? "");

  return (
    <>
      <section className="w-full bg-[#111613] px-6 py-32 text-cream md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Impact
            </span>
            <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
              Compact review, full evidence.
            </h1>
          </div>
          <div className="self-end space-y-8">
            <p className="font-serif text-2xl italic leading-relaxed text-cream/86">
              {impactIntro}
            </p>
            <p className="text-lg leading-relaxed text-cream/66">
              {impactQualifier}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl space-y-6">
          {impactSections.map((section, sectionIndex) => {
            const isOpen = openSection === section.id;
            return (
              <article
                key={section.id}
                className="border border-charcoal/10 bg-[#f8f6f2]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenSection(isOpen ? "" : section.id)}
                  className="flex w-full items-center justify-between gap-8 p-6 text-left md:p-8"
                >
                  <span>
                    <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      0{sectionIndex + 1} · {section.eyebrow}
                    </span>
                    <span className="block font-serif text-2xl leading-tight text-charcoal md:text-4xl">
                      {section.title}
                    </span>
                  </span>
                  <span className="shrink-0 font-serif text-4xl text-gold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-charcoal/10 p-6 md:p-8">
                      {section.intro ? (
                        <p className="mb-8 max-w-4xl text-lg leading-relaxed text-charcoal/72">
                          {section.intro}
                        </p>
                      ) : null}
                      <div className="space-y-6">
                        {section.cases.map((item) => (
                          <div key={item.title} className="bg-cream p-6">
                            <h3 className="mb-4 font-serif text-2xl leading-snug text-charcoal">
                              {item.title}
                            </h3>
                            {item.body ? (
                              <p className="text-base leading-relaxed text-charcoal/72">
                                {item.body}
                              </p>
                            ) : null}
                            {item.results?.length ? (
                              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                                {item.results.map((result) => (
                                  <li
                                    key={result}
                                    className="border-l border-gold/50 pl-4 text-sm font-medium leading-relaxed text-charcoal/78"
                                  >
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      {section.closing ? (
                        <p className="mt-8 font-serif text-2xl italic leading-snug text-charcoal">
                          {section.closing}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
