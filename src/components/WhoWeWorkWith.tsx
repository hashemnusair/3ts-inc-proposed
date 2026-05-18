"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Bank,
  Globe,
  Shield,
  Users,
  Buildings,
} from "@phosphor-icons/react";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const clients = [
  { icon: Bank, text: "Governments & Multilaterals" },
  { icon: Shield, text: "Sovereign-backed institutions" },
  { icon: Users, text: "Family enterprises" },
  { icon: Buildings, text: "Large private-sector organizations" },
  { icon: Globe, text: "Non-Profit & Public-Sector Organizations" },
];

export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="site-gutter site-section w-full scroll-mt-28 bg-[#111613] border-t border-[#111613] text-cream">
      <div className="site-container flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content (Text & Typography) */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-20 z-10 flex flex-col justify-center mb-16 lg:mb-0">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Who We Work With
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="site-heading-lg font-serif tracking-tight text-cream mb-8"
          >
            Trusted when the room is complex.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="site-copy text-cream/62 max-w-lg"
          >
            3Ts works with the sponsors and senior leaders of transformations,
            reforms, and consequential leadership transitions — across
            governments, multilaterals, sovereign-backed institutions, family
            enterprises, and large private-sector organizations.
            <br />
            <br />
            <span className="font-medium text-cream">
              There is no &ldquo;one size fits all.&rdquo; Every engagement is tailored to meet your specific needs, challenges, and goals.
            </span>
          </motion.p>
        </div>

        {/* Right Content (Vertical List) */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex flex-col space-y-0 relative"
        >
          {/* Subtle vertical line connecting the list items visually */}
          <div className="absolute left-6 top-12 bottom-12 w-px bg-cream/10 -z-10 hidden md:block"></div>
          
          {clients.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center gap-6 border-b border-cream/10 py-6 min-[900px]:py-7 last:border-0 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-cream/[0.04] border border-cream/10 flex items-center justify-center shrink-0 shadow-[0_4px_10px_-5px_rgba(0,0,0,0.2)] group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
                <item.icon size={24} weight="light" className="text-cream/72 group-hover:text-gold transition-colors duration-300" />
              </div>
              <div className="text-xl md:text-2xl font-serif text-cream/78 group-hover:text-cream transition-colors duration-300">
                {item.text}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
