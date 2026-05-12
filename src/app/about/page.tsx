import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Leadership
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Shareef Samir Khatib
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-charcoal/80 mb-16 italic">
            Senior Facilitator | Organizational Development Practitioner | Executive Coach
          </h2>
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/70 prose-strong:text-charcoal max-w-none">
            <p className="lead text-xl mb-8">
              Senior facilitator, OD practitioner, and executive coach with 18+ years of international experience convening diverse actors around complex, high-stakes challenges in politically sensitive environments.
            </p>
            <p className="mb-8">
              Authority gained in having led multi-country portfolios ($27M–$161M) across the Middle East, North Africa, Sub-Saharan Africa, and South/Southeast Asia, holding responsibility for outcomes and the stakeholders affected by them. British and Jordanian national; Arabic and French speaker; experienced working across the Arab world and other Muslim-majority and fragile contexts.
            </p>
            <h3 className="text-2xl mt-12 mb-6">Facilitation Practice</h3>
            <p className="mb-8">
              Disciplined, calm, and highly engaged with content. I listen for underlying narratives, draw out connections across disparate viewpoints, and play back synthesis to help senior teams make informed choices. I provide a unique combination of respect, authority and humility: encouraging candid and provocative exchange, while maintaining cohesion and dignity. I work pragmatically with planning committees to translate insights into meaningful design and results for participants.
            </p>
          </div>
        </div>
      </section>

      {/* Shareef's Quote */}
      <section className="w-full bg-[#111613] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-serif text-5xl text-gold/40 mb-6">&ldquo;</div>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-snug tracking-tight mb-8">
            I hope that together we can contribute to a world where collaboration, cooperation, and kindness thrive.
          </blockquote>
          <div className="w-12 h-[2px] bg-gold/60 mx-auto mb-6"></div>
          <p className="text-gold text-sm tracking-[0.2em] uppercase font-semibold">
            Shareef Samir Khatib
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
