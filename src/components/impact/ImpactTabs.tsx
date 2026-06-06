"use client";

import { useState } from "react";
import { impactIntro, impactQualifier, impactSections } from "@/lib/shareefContent";

export default function ImpactTabs() {
  const [activeId, setActiveId] = useState(impactSections[0]?.id ?? "");

  return (
    <>
      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Impact
          </span>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.8fr]">
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
              Choose the service lens. Keep the full case record.
            </h1>
            <div className="self-end space-y-8">
              <p className="font-serif text-2xl italic leading-relaxed text-charcoal/82">
                {impactIntro}
              </p>
              <p className="text-lg leading-relaxed text-charcoal/72">
                {impactQualifier}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-28 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div
            role="tablist"
            aria-label="Impact services"
            className="grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 md:grid-cols-4"
          >
            {impactSections.map((section) => {
              const isActive = section.id === activeId;
              return (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(section.id)}
                  className={`px-4 py-5 text-left text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "bg-[#111613] text-cream"
                      : "bg-cream text-charcoal/62 hover:bg-[#f8f6f2] hover:text-gold"
                  }`}
                >
                  {section.eyebrow}
                </button>
              );
            })}
          </div>

          {impactSections.map((section, sectionIndex) => {
            const isActive = section.id === activeId;
            return (
              <article
                key={section.id}
                role="tabpanel"
                hidden={!isActive}
                className="border-x border-b border-charcoal/10 bg-[#f8f6f2] p-7 md:p-10"
              >
                <div className="mb-10 grid gap-8 lg:grid-cols-[0.32fr_1fr]">
                  <div>
                    <p className="font-serif text-6xl text-gold/80">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {section.eyebrow}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-6 font-serif text-4xl leading-tight text-charcoal md:text-6xl">
                      {section.title}
                    </h2>
                    {section.intro ? (
                      <p className="max-w-4xl text-lg leading-relaxed text-charcoal/72">
                        {section.intro}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-6">
                  {section.cases.map((item) => (
                    <div key={item.title} className="bg-cream p-6 md:p-8">
                      <h3 className="mb-4 font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                        {item.title}
                      </h3>
                      {item.body ? (
                        <p className="max-w-4xl text-base leading-relaxed text-charcoal/72 md:text-lg">
                          {item.body}
                        </p>
                      ) : null}
                      {item.results?.length ? (
                        <ul className="mt-6 grid gap-3 md:grid-cols-2">
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
                  ))}
                </div>

                {section.closing ? (
                  <p className="mt-10 border-l border-gold/50 pl-6 font-serif text-2xl italic leading-snug text-charcoal">
                    {section.closing}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
