"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  homeImpactStats,
  homePatterns,
  homeServices,
  homepageTestimonials,
} from "@/lib/shareefContent";

type MawzunVariant = "name-swap" | "full-rebrand";

const brandName = "Mawzun Advisory (مَوزُون)";

const variantCopy = {
  "name-swap": {
    label: "Option 01",
    title: "Literal Rename",
    description:
      "Keeps the current 3Ts design language and changes the name throughout, with the supplied logo added carefully rather than forcing a larger redesign.",
  },
  "full-rebrand": {
    label: "Option 02",
    title: "Full Rebrand",
    description:
      "Keeps the site structure, copy, sections, and interactions, but rebuilds the visual system around the Mawzun mark: deep teal, ivory, quieter gold, and a more logo-led identity.",
  },
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function MawzunPreview({
  variant,
}: {
  variant: MawzunVariant;
}) {
  const [activeService, setActiveService] = useState(0);
  const full = variant === "full-rebrand";
  const option = variantCopy[variant];

  return (
    <main
      className={cx(
        "min-h-screen overflow-hidden",
        full ? "bg-[#274342] text-[#fbf4e8]" : "bg-cream text-charcoal"
      )}
    >
      <div
        className={cx(
          "border-b px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] md:px-16 lg:px-24",
          full
            ? "border-[#fbf4e8]/10 bg-[#1f3635] text-[#d7ba83]"
            : "border-charcoal/10 bg-[#f8f6f2] text-gold"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span>{option.label}</span>
          <Link
            href="/mawzun-options"
            className={cx(
              "transition-colors",
              full ? "hover:text-[#fbf4e8]" : "hover:text-charcoal"
            )}
          >
            Compare options
          </Link>
        </div>
      </div>

      <nav
        className={cx(
          "px-6 py-5 md:px-16 lg:px-24",
          full ? "bg-[#274342]" : "bg-cream"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className={cx(
                "relative h-14 w-14 overflow-hidden",
                full ? "ring-1 ring-[#fbf4e8]/15" : "ring-1 ring-charcoal/10"
              )}
            >
              <Image
                src="/mawzun-logo.png"
                alt="Mawzun Advisory logo"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p
                className={cx(
                  "font-serif text-xl leading-none",
                  full ? "text-[#fbf4e8]" : "text-charcoal"
                )}
              >
                Mawzun Advisory
              </p>
              <p
                className={cx(
                  "mt-1 text-xs font-semibold uppercase tracking-[0.22em]",
                  full ? "text-[#d7ba83]" : "text-gold"
                )}
              >
                مَوزُون
              </p>
            </div>
          </div>

          <div
            className={cx(
              "hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] md:flex",
              full ? "text-[#fbf4e8]/64" : "text-charcoal/60"
            )}
          >
            <span>Approach</span>
            <span>Services</span>
            <span>Impact</span>
            <span>Contact</span>
          </div>
        </div>
      </nav>

      <section
        className={cx(
          "px-6 pb-24 pt-14 md:px-16 md:pb-28 md:pt-20 lg:px-24",
          full ? "bg-[#274342]" : "bg-cream"
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <div>
            <span
              className={cx(
                "mb-8 block text-xs font-semibold uppercase tracking-[0.2em]",
                full ? "text-[#d7ba83]" : "text-gold"
              )}
            >
              {option.title}
            </span>
            <h1
              className={cx(
                "max-w-5xl font-serif text-5xl leading-[0.98] tracking-tight md:text-7xl lg:text-8xl",
                full ? "text-[#fbf4e8]" : "text-charcoal"
              )}
            >
              {brandName}
            </h1>
            <p
              className={cx(
                "mt-10 max-w-3xl text-lg leading-relaxed md:text-xl",
                full ? "text-[#fbf4e8]/72" : "text-charcoal/70"
              )}
            >
              Senior advisory for high-stakes alignment in transformation
              settings.
            </p>
            <p
              className={cx(
                "mt-6 max-w-3xl text-base leading-relaxed",
                full ? "text-[#fbf4e8]/58" : "text-charcoal/62"
              )}
            >
              {option.description}
            </p>
          </div>

          <div
            className={cx(
              "relative aspect-square overflow-hidden",
              full
                ? "bg-[#1f3635] shadow-[0_36px_100px_-54px_rgba(0,0,0,0.72)]"
                : "border border-charcoal/10 bg-[#f8f6f2]"
            )}
          >
            <Image
              src="/mawzun-logo.png"
              alt="Mawzun Advisory logo"
              fill
              sizes="(min-width: 1024px) 36vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        className={cx(
          "px-6 py-24 md:px-16 lg:px-24",
          full ? "bg-[#fbf4e8] text-[#213737]" : "bg-[#f8f6f2]"
        )}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start gap-4">
            <span
              className={cx(
                "text-xs font-semibold uppercase tracking-[0.2em]",
                full ? "text-[#a9824a]" : "text-gold"
              )}
            >
              What We Do
            </span>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              The same advisory offers, carried through the Mawzun identity.
            </h2>
          </div>

          <div
            className={cx(
              "hidden h-[30rem] overflow-hidden border md:flex",
              full ? "border-[#213737]/15 bg-[#fbf4e8]" : "border-charcoal/10"
            )}
          >
            {homeServices.map((service, index) => {
              const isActive = activeService === index;
              return (
                <motion.div
                  key={service.id}
                  style={{ flexBasis: 0 }}
                  animate={{ flexGrow: isActive ? 2.7 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActiveService(index)}
                  className={cx(
                    "relative min-w-[4.5rem] overflow-hidden border-l first:border-l-0",
                    full
                      ? "border-[#213737]/12"
                      : "border-charcoal/10",
                    isActive
                      ? full
                        ? "bg-white"
                        : "bg-[#fcfbf9]"
                      : full
                        ? "bg-[#f6ecdd]"
                        : "bg-cream"
                  )}
                >
                  <button
                    type="button"
                    aria-label={service.title}
                    aria-expanded={isActive}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className="absolute inset-0 z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d7ba83]"
                  />
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: isActive ? 0 : 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-between py-8"
                  >
                    <span
                      className={cx(
                        "font-serif text-3xl",
                        full ? "text-[#a9824a]" : "text-gold"
                      )}
                    >
                      {service.number}
                    </span>
                    <span className="font-serif text-xl [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                      {service.title}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-45 [writing-mode:vertical-rl] rotate-180">
                      {service.essence}
                    </span>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.45, delay: isActive ? 0.12 : 0 }}
                    aria-hidden={!isActive}
                    className="absolute inset-0 flex flex-col justify-between p-10 lg:p-12"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={cx(
                          "font-serif text-5xl",
                          full ? "text-[#a9824a]" : "text-gold"
                        )}
                      >
                        {service.number}
                      </span>
                      <span
                        className={cx(
                          "text-right text-[11px] font-semibold uppercase tracking-[0.2em]",
                          full ? "text-[#a9824a]" : "text-gold/80"
                        )}
                      >
                        {service.essence} · {service.duration}
                      </span>
                    </div>
                    <div className="max-w-md">
                      <h3 className="mb-5 font-serif text-3xl lg:text-4xl">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-72 lg:text-[0.95rem]">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div
            className={cx(
              "grid gap-4 md:hidden",
              full ? "text-[#213737]" : "text-charcoal"
            )}
          >
            {homeServices.map((service) => (
              <div
                key={service.id}
                className={cx(
                  "border p-6",
                  full
                    ? "border-[#213737]/12 bg-white"
                    : "border-charcoal/10 bg-cream"
                )}
              >
                <div className="mb-5 flex items-center justify-between gap-5">
                  <span
                    className={cx(
                      "font-serif text-3xl",
                      full ? "text-[#a9824a]" : "text-gold"
                    )}
                  >
                    {service.number}
                  </span>
                  <span
                    className={cx(
                      "text-right text-[10px] font-semibold uppercase tracking-[0.18em]",
                      full ? "text-[#a9824a]" : "text-gold"
                    )}
                  >
                    {service.essence} · {service.duration}
                  </span>
                </div>
                <h3 className="mb-4 font-serif text-3xl leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-72">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={cx(
          "px-6 py-24 md:px-16 lg:px-24",
          full ? "bg-[#1f3635] text-[#fbf4e8]" : "bg-[#111613] text-cream"
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1fr]">
          <div>
            <span
              className={cx(
                "mb-8 block text-xs font-semibold uppercase tracking-[0.2em]",
                full ? "text-[#d7ba83]" : "text-gold"
              )}
            >
              Selected Impact
            </span>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Real progress you can actually measure.
            </h2>
          </div>
          <div className="grid gap-px sm:grid-cols-2">
            {homeImpactStats.map((stat) => (
              <div
                key={stat.text}
                className={cx(
                  "border p-7",
                  full
                    ? "border-[#fbf4e8]/12 bg-[#274342]"
                    : "border-cream/10 bg-[#151a17]"
                )}
              >
                <p
                  className={cx(
                    "mb-5 font-serif text-5xl",
                    full ? "text-[#d7ba83]" : "text-cream"
                  )}
                >
                  {stat.value}
                </p>
                <p className="text-sm leading-relaxed opacity-68">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={cx(
          "px-6 py-24 md:px-16 lg:px-24",
          full ? "bg-[#fbf4e8] text-[#213737]" : "bg-cream text-charcoal"
        )}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.65fr_1fr]">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Patterns Mawzun Advisory helps clients identify and navigate.
            </h2>
            <div className="space-y-4">
              {homePatterns.map((pattern, index) => (
                <div
                  key={pattern.id}
                  className={cx(
                    "flex items-center gap-6 border-b py-5",
                    full ? "border-[#213737]/12" : "border-charcoal/10"
                  )}
                >
                  <span
                    className={cx(
                      "font-serif text-3xl",
                      full ? "text-[#a9824a]" : "text-gold"
                    )}
                  >
                    0{index + 1}
                  </span>
                  <p className="font-serif text-xl leading-snug md:text-2xl">
                    {pattern.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <blockquote
            className={cx(
              "max-w-4xl border-l pl-8 font-serif text-2xl leading-relaxed md:text-3xl",
              full ? "border-[#a9824a]" : "border-gold"
            )}
          >
            “{homepageTestimonials[0].quote}”
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] opacity-58">
            {homepageTestimonials[0].author} · {homepageTestimonials[0].title}
          </p>
        </div>
      </section>

      <footer
        className={cx(
          "px-6 py-12 md:px-16 lg:px-24",
          full ? "bg-[#1f3635] text-[#fbf4e8]" : "bg-[#111613] text-cream"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden">
              <Image
                src="/mawzun-logo.png"
                alt="Mawzun Advisory logo"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-2xl">Mawzun Advisory</p>
              <p
                className={cx(
                  "mt-1 text-xs font-semibold uppercase tracking-[0.22em]",
                  full ? "text-[#d7ba83]" : "text-gold"
                )}
              >
                مَوزُون
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-58">
            This is an isolated preview route. The current public site remains
            unchanged on this branch unless this direction is selected.
          </p>
        </div>
      </footer>
    </main>
  );
}
