"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] flex flex-col md:flex-row bg-cream overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-[55%] pl-6 md:pl-16 lg:pl-24 pr-6 md:pr-12 pt-20 pb-12 flex flex-col justify-between z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-start space-y-4 mb-12">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Senior Advisory For Complex Leadership Moments
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-charcoal mb-8 max-w-2xl">
            For the alignment problems that stall transformations.
          </h1>

          <p className="text-charcoal/70 text-lg md:text-xl max-w-lg leading-relaxed mb-12">
            Most stalled decisions are not waiting for more analysis. They are
            waiting for the right people to align — in rooms where standard
            workshops are not enough.
          </p>

          <Link href="/contact">
            <button className="bg-[#2A372C] text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1E2520] transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-lg">
              Request a Confidential Conversation &rarr;
            </button>
          </Link>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 flex items-start space-x-6 border-t border-charcoal/10 pt-8 max-w-xl"
        >
          <div className="font-serif text-4xl text-gold shrink-0 italic pr-2 border-r border-charcoal/10">
            3<span className="text-3xl ml-0.5">T</span>
          </div>
          <p className="text-sm text-charcoal/60 leading-relaxed font-medium">
            Private advisory for governments, multilaterals, sovereign-backed
            institutions, family enterprises, and large private-sector
            organizations.
          </p>
        </motion.div>
      </div>

      {/* Right Image with Angled Cut */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:block w-full md:w-[55%] md:absolute md:right-0 md:top-0 md:bottom-0 h-[50vh] md:h-auto z-0"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src="/emptyOffice.png"
          alt="Office"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
