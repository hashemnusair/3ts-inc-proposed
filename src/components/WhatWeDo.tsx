"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";

const engagements = [
  {
    number: "01",
    title: "Alignment Read",
    description:
      "A two-week senior diagnostic. Confidential interviews with the principals and key stakeholders, a map of where alignment is breaking, and a sponsor memo on what is actually at stake and what should happen next. Often the first engagement.",
  },
  {
    number: "02",
    title: "Decision Sprint",
    description:
      "A four-to-six-week engagement built around a specific stalled decision or consequential convening. Stakeholder preparation, decision architecture, the room itself, and a thirty-day decision tracker once the alignment is reached.",
  },
  {
    number: "03",
    title: "Retained Advisory",
    description:
      "Ongoing senior advisory through the life of a transformation, reform, or governance initiative. Confidential support for the sponsor, repeated convenings, principal coaching, and quiet judgment between the formal moments.",
  },
  {
    number: "04",
    title: "First 90 Days",
    description:
      "Three months of confidential support for newly-appointed senior leaders stepping into politically sensitive roles. Stakeholder mapping, sponsor coaching, and judgment through the early decisions that shape the rest of the tenure.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function WhatWeDo() {
  return (
    <section className="site-gutter site-section w-full bg-cream border-t border-[#edebe4]">
      <div className="site-container">
        <div className="flex flex-col items-start space-y-4 mb-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            What We Do
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="site-heading-lg font-serif tracking-tight text-charcoal max-w-4xl mb-14 min-[900px]:mb-16"
        >
          Our work is organized around four engagements, each designed for a
          different stage of the alignment problem.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 min-[1120px]:gap-6"
        >
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-[#fcfbf9] border border-charcoal/5 p-8 min-[900px]:p-10 xl:p-12 flex flex-col md:flex-row shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="flex items-start mb-6 md:mb-0 md:mr-10 shrink-0">
                <span className="font-serif text-4xl md:text-5xl text-gold">
                  {item.number}
                </span>
                <div className="w-px h-12 bg-charcoal/10 ml-6 hidden md:block mt-1"></div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex items-center"
        >
          <Link
            href="/approach"
            className="group flex flex-col"
          >
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              Read More About How We Work <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
