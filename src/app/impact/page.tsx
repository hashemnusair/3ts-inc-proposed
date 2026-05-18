import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Selected Impact — 3Ts Consulting",
  description:
    "Representative impact across leadership coaching, team alignment, organizational change, complex programs, and stakeholder engagement.",
  path: "/impact",
  image: "/og/impact.webp",
});

export default function ImpactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="site-gutter site-page-hero w-full">
        <div className="site-container-narrow">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Selected Impact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          
          <h1 className="site-heading-xl font-serif tracking-tight text-charcoal mb-10">
            Proven over time.
          </h1>
          
          <p className="text-charcoal/80 text-xl md:text-2xl leading-relaxed mb-14 font-serif italic max-w-3xl">
            Representative examples of the kinds of leadership, organizational, and stakeholder challenges supported across public, nonprofit, donor-funded, and multilateral contexts.
          </p>

          {/* Content Blocks */}
          <div className="space-y-12 mb-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-charcoal/10 pt-8">
              <h3 className="font-serif text-2xl text-gold">Leadership coaching & transition</h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                I coach leaders navigating new responsibilities, high-stakes communication, and complex management challenges. My work helps clients strengthen judgment, communicate with greater clarity, and lead with more confidence under pressure.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-charcoal/10 pt-8">
              <h3 className="font-serif text-2xl text-gold">Team alignment & facilitated retreats</h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                I design and facilitate retreats, working sessions, and leadership conversations that help teams clarify priorities, surface difficult issues, strengthen cohesion, and move toward practical action.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-charcoal/10 pt-8">
              <h3 className="font-serif text-2xl text-gold">Organizational change & transformation</h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                I support organizations and public institutions facing change, resistance, or misalignment. This includes helping leaders rethink structures, improve collaboration, and build more effective ways of working across teams and stakeholders.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 border-t border-charcoal/10 pt-8">
              <h3 className="font-serif text-2xl text-gold">Complex programs & stakeholders</h3>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                My work has included multi-stakeholder engagement across politically sensitive and operationally complex environments, bringing together government, civil society, donors, communities, and institutional actors around shared priorities and workable next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials sub-section */}
      <section className="site-gutter site-section w-full bg-[#f8f6f2]">
        <div className="site-container-narrow">
           <div className="flex flex-col items-start space-y-4 mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Selected client reflections
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-10 shadow-sm border border-charcoal/5 relative">
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-4">&ldquo;</span>
              <blockquote className="font-serif text-xl text-charcoal relative z-10 mb-6">
                Shareef has been a great coach for me as a new manager. He has provided me tools to work through customized strategies for dealing with new management situations and to empower my team.
              </blockquote>
              <cite className="text-gold text-sm uppercase tracking-widest font-medium not-italic">
                Andrew F., Division Lead, International Assistance – Energy Sector
              </cite>
            </div>

            <div className="bg-white p-10 shadow-sm border border-charcoal/5 relative">
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-4">&ldquo;</span>
              <blockquote className="font-serif text-xl text-charcoal relative z-10 mb-6">
                When I partnered with Shareef in a Program to strengthen the City of Portland’s approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do.
              </blockquote>
              <cite className="text-gold text-sm uppercase tracking-widest font-medium not-italic">
                Rose King, Principal, Hearts & Minds Communications
              </cite>
            </div>

            <div className="bg-white p-10 shadow-sm border border-charcoal/5 relative">
              <span className="font-serif text-6xl text-gold/20 absolute top-4 left-4">&ldquo;</span>
              <blockquote className="font-serif text-xl text-charcoal relative z-10 mb-6">
                Partnering with Shareef was a turning point for our leadership team… His ability to surface core values, strengthen team cohesion, and offer practical, research-based strategies empowered us to lead with clarity, cohesion and confidence.
              </blockquote>
              <cite className="text-gold text-sm uppercase tracking-widest font-medium not-italic">
                Will L., Principal, Public Middle School
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="site-gutter site-section w-full bg-[#111613]">
         <div className="max-w-3xl mx-auto text-center">
           <p className="text-cream text-xl md:text-2xl font-serif mb-10 leading-relaxed">
             If you are navigating a leadership, team, or organizational challenge and would like to explore whether I may be helpful, write to <a href="mailto:shareef@3ts-inc.com" className="text-gold underline underline-offset-4 hover:text-white transition-colors">shareef@3ts-inc.com</a>.
           </p>
           <Link href="/contact">
            <button className="border border-cream/20 text-cream px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream hover:text-[#111613] transition-all">
              Start a Conversation
            </button>
          </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
