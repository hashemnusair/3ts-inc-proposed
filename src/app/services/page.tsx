import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services — 3Ts Consulting",
  description:
    "Structured advisory interventions for alignment reads, decision sprints, retained advisory, and first 90 day leadership transitions.",
  path: "/services",
  image: "/og/services.webp",
});

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Services
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Structured interventions for complex alignment problems.
          </h1>
        </div>
      </section>

      <section className="w-full px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.72fr] gap-10 lg:gap-16 items-end">
          <div className="relative h-[380px] md:h-[520px] bg-charcoal overflow-hidden shadow-[0_24px_70px_-30px_rgba(0,0,0,0.22)]">
            <Image
              src="/services-intervention.webp"
              alt="Structured advisory materials arranged for a decision sprint"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/15 via-transparent to-charcoal/20" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </div>
          <div className="border-t border-charcoal/10 pt-8">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Designed, not improvised
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-charcoal mb-6">
              Each engagement is built around the actual decision, room, or
              transition in front of the client.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              The work may begin as a diagnostic, become a sprint, or stay with
              the sponsor through a longer transformation. The constant is
              careful preparation, confidential judgment, and follow-through.
            </p>
          </div>
        </div>
      </section>

      <WhatWeDo />
      <Footer />
    </main>
  );
}
