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
      <section className="site-gutter site-page-hero w-full">
        <div className="site-container-narrow">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Services
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="site-heading-xl font-serif tracking-tight text-charcoal mb-10">
            Structured interventions for complex alignment problems.
          </h1>
        </div>
      </section>

      <section className="site-gutter w-full pb-[clamp(4rem,6vw,6rem)]">
        <div className="site-container grid lg:grid-cols-[1fr_0.72fr] gap-10 lg:gap-14 items-end">
          <div className="relative h-[clamp(24rem,38vw,32rem)] bg-charcoal overflow-hidden shadow-[0_24px_70px_-30px_rgba(0,0,0,0.22)]">
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

        <div className="site-container mt-12 border-y border-charcoal/10 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
              How a conversation becomes movement
            </p>
            <ol className="grid grid-cols-5 gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 text-center">
              {["Listen", "Map", "Design", "Convene", "Follow through"].map(
                (step) => (
                  <li
                    key={step}
                    className="bg-cream px-3 py-3 text-[10px] font-medium uppercase tracking-[0.13em] text-charcoal/58 md:min-w-32"
                  >
                    {step}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
      </section>

      <section className="site-gutter site-section-tight w-full bg-[#111613]">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="relative h-[clamp(27rem,42vw,35rem)] overflow-hidden bg-charcoal shadow-[0_24px_70px_-30px_rgba(0,0,0,0.5)]">
            <Image
              src="/shareef-presenting.webp"
              alt="Shareef Khatib facilitating a working session"
              fill
              className="object-cover object-[center_35%] grayscale-[35%] contrast-105 brightness-90"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111613]/45 via-transparent to-transparent" />
            <div className="absolute inset-0 border border-cream/10 pointer-events-none" />
            <div className="absolute bottom-5 left-5 border-l border-gold/50 pl-4 text-[9px] font-medium uppercase tracking-[0.18em] text-cream/45">
              Field note: facilitated working session
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                In the room
              </span>
              <div className="h-[2px] w-12 bg-gold/60"></div>
            </div>
            <p className="site-heading-md mb-8 font-serif text-cream">
              The service is not only the framework. It is the judgment inside
              the room.
            </p>
            <p className="text-base leading-relaxed text-cream/68 md:text-lg">
              Shareef designs the intervention, prepares the stakeholders, and
              then holds the conversation with enough structure for movement and
              enough care for candor. That combination is what turns a meeting
              into a consequential working session.
            </p>
          </div>
        </div>
      </section>

      <WhatWeDo />
      <Footer />
    </main>
  );
}
