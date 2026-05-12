import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const publicSector = [
  {
    quote:
      "Shareef knew how to navigate criticism and stay the course, transparently and frequently sharing information about the work, building relationships, and not bending to the pressure of the 'way things are always done.'",
    author: "Lisa Freeman",
    title: "Chief of Staff, Portland City Council",
  },
  {
    quote:
      "When I partnered with Shareef on a programme to strengthen the City of Portland's approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do.",
    author: "Rose King",
    title: "Principal, Hearts & Minds Communications",
  },
  {
    quote:
      "His ability to convene opposing political factions and establish a common ground was instrumental in the success of our governance reform portfolio. Truly rare emotional intelligence.",
    author: "Confidential Sponsor",
    title: "Multilateral Institution",
  },
];

const privateSector = [
  {
    quote:
      "Shareef has been a great coach for me as a new manager. He provided me tools to work through customized strategies for new management situations and to empower my team.",
    author: "Andrew F.",
    title: "Division Lead, International Assistance, Energy Sector",
  },
  {
    quote:
      "The alignment sprint he designed completely transformed our executive board's trajectory. We moved from three months of stalled debates to a definitive action plan in two weeks.",
    author: "Managing Partner",
    title: "Family Enterprise, GCC",
  },
  {
    quote:
      "Shareef provides the quiet judgment and strategic rigor needed when the stakes are highest. His advice is always calibrated and deeply insightful.",
    author: "Senior Executive",
    title: "Global Private-Sector Organization",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      {/* Hero (Light) */}
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Client Reflections
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Evidence that endures.
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            While most of our work remains strictly confidential, the outcomes and impacts of our engagements speak through the leaders we advise.
          </p>
        </div>
      </section>

      {/* Section 1 (Dark) */}
      <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-[#111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/vaseANDfooter.png"
            alt="Decorative vase"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#151a16]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-cream mb-16 pb-8 border-b border-cream/10">
            Public Sector & Governance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {publicSector.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                  &ldquo;
                </div>
                <p className="font-serif text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 grow">
                  {t.quote}
                </p>
                <div>
                  <div className="text-gold text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                    — {t.author}
                  </div>
                  <div className="text-cream/50 text-xs tracking-widest uppercase">
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 (Light) */}
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#f8f6f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-charcoal mb-16 pb-8 border-b border-charcoal/10">
            Private Sector & Executive Coaching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {privateSector.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                  &ldquo;
                </div>
                <p className="font-serif text-xl md:text-2xl text-charcoal/90 leading-relaxed mb-8 grow">
                  {t.quote}
                </p>
                <div>
                  <div className="text-charcoal text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                    — {t.author}
                  </div>
                  <div className="text-charcoal/50 text-xs tracking-widest uppercase">
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
