import Navbar from "@/components/Navbar";
import WhyAndImpact from "@/components/WhyAndImpact";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Approach — 3Ts Consulting",
  description:
    "How 3Ts helps sponsors move through fragile alignment, stalled decisions, and rooms that need design before the meeting begins.",
  path: "/approach",
  image: "/og/approach.webp",
});

export default function ApproachPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Our Approach
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Moving through the patterns that stall progress.
          </h1>
        </div>
      </section>

      <section className="w-full px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.72fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="border-t border-charcoal/10 pt-8 order-2 lg:order-1">
            <p className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Before the room begins
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-charcoal mb-6">
              The visible meeting is usually the smallest part of the work.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              3Ts works upstream: clarifying what is at stake, listening for the
              narratives beneath positions, designing the sequence of the room,
              and helping sponsors translate alignment into action.
            </p>
          </div>
          <div className="relative h-[380px] md:h-[520px] bg-charcoal overflow-hidden shadow-[0_24px_70px_-30px_rgba(0,0,0,0.22)] order-1 lg:order-2">
            <Image
              src="/approach-advisory.webp"
              alt="Confidential advisory materials arranged for stakeholder alignment"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-charcoal/10 via-transparent to-charcoal/20" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </div>
        </div>
      </section>

      <WhyAndImpact />
      <Footer />
    </main>
  );
}
