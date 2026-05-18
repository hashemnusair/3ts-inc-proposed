"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  "The decision is technically clear, but politically stuck.",
  "The retreat cannot become another polite conversation.",
  "The right people are in the room, but they are not saying the real thing.",
  "A new senior leader needs early momentum without triggering resistance.",
  "A reform, program, or transformation is losing trust and pace.",
  "A public-facing issue needs a stronger narrative and steadier coordination.",
  "A capable team is carrying too much ambiguity, tension, or self-doubt.",
  "A crisis has exposed weak alignment across partners, teams, or institutions.",
];

export default function WhatPeopleCallAbout() {
  return (
    <section id="what-people-call-about" className="site-gutter site-section w-full scroll-mt-28 border-t border-[#edebe4] bg-[#f8f6f2]">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                What people usually call about
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h2 className="site-heading-lg max-w-2xl font-serif tracking-tight text-charcoal">
              The formal request is rarely the real problem.
            </h2>
            <p className="site-copy mt-8 max-w-lg text-charcoal/68">
              People often arrive with a retreat, a decision, a transition, or a
              sensitive meeting. The work begins by naming what is actually
              keeping movement from happening.
            </p>

            <div className="mt-14 hidden lg:block">
              <div className="relative h-[clamp(28rem,42vw,38rem)] overflow-hidden bg-charcoal shadow-[0_28px_80px_-42px_rgba(30,37,32,0.45)]">
                <Image
                  src="/shareef-presenting.webp"
                  alt="Shareef Khatib facilitating a working session"
                  fill
                  className="object-cover object-[center_30%] grayscale-[12%] contrast-105 brightness-90"
                  sizes="(min-width: 1440px) 39vw, (min-width: 1024px) 44vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                <div className="absolute bottom-7 left-7 right-7 max-w-[22rem] border-l border-gold/65 pl-5">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/52">
                    In the room
                  </div>
                  <div className="mt-2 font-serif text-2xl leading-tight text-cream">
                    Calm structure when the conversation could drift.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 hidden h-full w-px bg-charcoal/10 lg:block" />
            <div className="border-y border-charcoal/10">
              {problems.map((problem, index) => (
                <div
                  key={problem}
                  className="group grid gap-5 border-b border-charcoal/10 py-5 min-[900px]:py-6 last:border-b-0 md:grid-cols-[6rem_1fr]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl leading-none text-gold/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden h-px flex-1 bg-charcoal/12 md:block" />
                  </div>
                  <p className="max-w-3xl font-serif text-[clamp(1.45rem,2vw,2rem)] leading-snug text-charcoal/82 transition-colors duration-500 group-hover:text-charcoal">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
