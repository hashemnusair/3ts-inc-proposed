"use client";

import { motion } from "framer-motion";

const patterns = [
  "When the stakes are high and alignment is fragile.",
  "When a consequential decision is stalled by competing priorities.",
  "When the room needs design before the meeting begins.",
  "When a new senior leader needs judgment in a politically sensitive first chapter.",
];

const impacts = [
  {
    value: "16%",
    text: "Improvement in measured leadership scores across 18 World Bank cohorts",
  },
  {
    value: "$161M",
    text: "Afghanistan portfolio led to on-time operational closeout",
  },
  {
    value: "43%",
    text: "Reduction in predicted gun violence over three months in Portland",
  },
  {
    value: "8",
    text: "Fragile- and conflict-affected countries advised at senior leadership level",
  },
];

export default function WhyAndImpact() {
  return (
    <section className="w-full bg-[#f8f6f2] flex flex-col">
      {/* WHY Section */}
      <div className="w-full py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Left */}
          <div className="w-full lg:w-1/3 pr-0 lg:pr-12 mb-16 lg:mb-0">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Why Clients Bring Us In
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-charcoal"
            >
              Patterns we help clients move through.
            </motion.h2>
          </div>

          {/* Right */}
          <div className="w-full lg:w-2/3 border-t border-[#edebe4]">
            {patterns.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center border-b border-[#edebe4] py-8 group cursor-pointer hover:bg-white/40 transition-colors px-4"
              >
                <div className="w-24 shrink-0 font-serif text-3xl text-gold text-center border-r border-[#edebe4] mr-8">
                  0{index + 1}
                </div>
                <div className="flex-grow text-charcoal/80 font-serif text-xl md:text-2xl pr-8">
                  {pattern}
                </div>
                <div className="shrink-0 text-gold font-light opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  &rarr;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* IMPACT Section */}
      <div className="w-full py-24 px-6 md:px-16 lg:px-24 bg-[#111613] border-t border-[#111613]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          {/* Left */}
          <div className="w-full lg:w-1/4 pr-0 lg:pr-12 mb-16 lg:mb-0">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Selected Impact
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-cream"
            >
              Outcomes that matter. Evidence that endures.
            </motion.h2>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-0">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex flex-col items-center text-center lg:items-start lg:text-left ${
                  index !== 0 ? "lg:border-l lg:border-cream/10 lg:pl-8" : ""
                }`}
              >
                <div className="font-serif text-6xl md:text-7xl text-cream mb-4 tracking-tighter">
                  {impact.value}
                </div>
                <div className="w-8 h-px bg-gold/60 mb-6 hidden lg:block"></div>
                <p className="text-cream/70 text-sm md:text-base leading-relaxed">
                  {impact.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
