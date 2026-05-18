"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-stage relative w-full flex flex-col overflow-hidden">
      {/* Full Background Image — responsive */}
      <div className="absolute inset-0 z-0">
        {/* Mobile portrait image */}
        <Image
          src="/3TsHeroBGmobile.png"
          alt="Executive boardroom"
          fill
          priority
          className="object-cover object-center min-[900px]:hidden"
          sizes="100vw"
        />
        {/* Desktop wide image */}
        <Image
          src="/3TsHeroBG.png"
          alt="Executive boardroom"
          fill
          priority
          className="hidden object-cover object-[58%_center] min-[900px]:block 2xl:object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="hero-gutter relative z-10 mx-auto flex w-full max-w-[120rem] flex-1 flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-copy"
        >
          <h1 className="site-heading-xl w-full max-w-[13ch] font-serif tracking-tight text-white mb-6 min-[900px]:mb-8 text-balance">
            For the alignment problems that stall transformations.
          </h1>

          <p className="w-full max-w-[34rem] text-white/70 text-base min-[900px]:text-lg leading-relaxed mb-8 min-[900px]:mb-10 text-pretty">
            Grounded in neuroscience, governance, and 20 years of global experience — helping leadership teams navigate complexity and move forward with clarity.
          </p>

          <Link href="/contact" className="block w-full max-w-[24rem] sm:inline-block sm:w-auto sm:max-w-full">
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 md:px-8 py-4 text-xs md:text-sm tracking-[0.1em] md:tracking-widest uppercase font-medium hover:bg-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-normal text-center leading-relaxed">
              Request a Confidential Conversation &rarr;
            </button>
          </Link>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-tagline mt-12 flex items-start gap-5 border-t border-white/15 pt-6 min-[900px]:mt-16 min-[900px]:gap-6 min-[900px]:pt-8"
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
