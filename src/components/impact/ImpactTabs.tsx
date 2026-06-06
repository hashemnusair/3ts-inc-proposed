"use client";

import { useState } from "react";
import { impactSections } from "@/lib/shareefContent";
import ImpactHeader from "@/components/impact/ImpactHeader";

export default function ImpactTabs() {
  const [activeId, setActiveId] = useState(impactSections[0]?.id ?? "");

  return (
    <>
      <ImpactHeader />

      <section className="w-full px-6 pb-28 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div
            role="tablist"
            aria-label="Impact services"
            className="grid gap-3 border border-charcoal/10 bg-[#f8f6f2] p-3 shadow-[0_24px_70px_-58px_rgba(0,0,0,0.34)] sm:grid-cols-2 md:grid-cols-4"
          >
            {impactSections.map((section, index) => {
              const isActive = section.id === activeId;
              return (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(section.id)}
                  className={`group relative flex min-h-[96px] flex-col items-center justify-center gap-3 overflow-hidden border px-4 py-5 text-center transition-all duration-300 ${
                    isActive
                      ? "border-[#111613] bg-[#111613] text-cream shadow-[0_18px_34px_-26px_rgba(0,0,0,0.65)]"
                      : "border-charcoal/10 bg-cream text-charcoal/66 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:text-charcoal"
                  }`}
                >
                  <span
                    className={`font-serif text-2xl leading-none ${
                      isActive ? "text-gold" : "text-gold/74"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-[12rem] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em]">
                    {section.eyebrow}
                  </span>
                  <span
                    className={`absolute inset-x-5 bottom-0 h-0.5 transition-all duration-300 ${
                      isActive
                        ? "bg-gold"
                        : "bg-gold/0 group-hover:bg-gold/45"
                    }`}
                  />
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
