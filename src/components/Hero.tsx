"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] flex flex-col overflow-hidden">
      {/* Full Background Image — responsive */}
      <div className="absolute inset-0 z-0">
        {/* Mobile portrait image */}
        <Image
          src="/3TsHeroBGmobile.png"
          alt="Executive boardroom"
          fill
          priority
          className="object-cover md:hidden"
          sizes="100vw"
        />
        {/* Desktop wide image */}
        <Image
          src="/3TsHeroBG.png"
          alt="Executive boardroom"
          fill
          priority
          className="object-cover hidden md:block"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-40 md:pt-56 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8 max-w-2xl">
            For the alignment problems that stall transformations.
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-lg leading-relaxed mb-10 md:mb-12">
            Grounded in neuroscience, governance, and 20 years of global experience — helping leadership teams navigate complexity and move forward with clarity.
          </p>

          <Link href="/contact">
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Request a Confidential Conversation &rarr;
            </button>
          </Link>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24 flex items-start space-x-6 border-t border-white/15 pt-8 max-w-xl"
        >
          <div className="font-serif text-4xl text-gold shrink-0 italic pr-2 border-r border-white/15">
            3<span className="text-3xl ml-0.5">T</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed font-medium">
            Private advisory for governments, multilaterals, sovereign-backed
            institutions, family enterprises, and large private-sector
            organizations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
