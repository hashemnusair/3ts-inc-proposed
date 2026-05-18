import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Shareef Khatib — 3Ts Consulting",
  description:
    "Shareef Khatib is a senior facilitator, organizational development practitioner, and executive coach with 18+ years across complex international contexts.",
  path: "/about",
  image: "/og/about.webp",
});

const credibility = [
  ["18+", "years of international experience"],
  ["$27M-$161M", "multi-country portfolios led"],
  ["18", "World Bank leadership cohorts delivered"],
  ["8", "fragile and conflict-affected countries advised"],
];

const competencies = [
  "Facilitation & Convening Design",
  "Multi-Stakeholder Dialogue in Politically Sensitive Contexts",
  "Strategic Reviews & Planning Sprints",
  "Executive Coaching",
  "Organizational Development & Change Leadership",
  "Operating Model & Process Redesign",
  "Inclusive Leadership & Psychological Safety",
  "Risk & Crisis Management",
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <section className="site-gutter site-page-hero w-full">
        <div className="site-container grid lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.75fr)] gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                About Shareef
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <h1 className="site-heading-xl w-full max-w-[20rem] md:max-w-none font-serif tracking-tight text-charcoal mb-8 min-[900px]:mb-10">
              Shareef Samir Khatib
            </h1>
            <h2 className="w-full max-w-[20rem] md:max-w-none text-xl md:text-2xl font-serif text-charcoal/80 mb-10 italic leading-relaxed">
              Senior Facilitator | Organizational Development Practitioner | Executive Coach
            </h2>
            <div className="w-full max-w-[20rem] md:max-w-none prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/70 prose-strong:text-charcoal">
              <p className="lead text-xl mb-8">
                Senior facilitator, OD practitioner, and executive coach with
                18+ years of international experience convening diverse actors
                around complex, high-stakes challenges in politically sensitive
                environments.
              </p>
              <p className="mb-8">
                Authority gained in having led multi-country portfolios
                ($27M-$161M) across the Middle East, North Africa,
                Sub-Saharan Africa, and South/Southeast Asia, holding
                responsibility for outcomes and the stakeholders affected by
                them. British and Jordanian national; Arabic and French speaker;
                experienced working across the Arab world and other
                Muslim-majority and fragile contexts.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32">
            <div className="relative h-[clamp(28rem,48vw,35rem)] bg-charcoal overflow-hidden shadow-[0_24px_70px_-28px_rgba(0,0,0,0.24)]">
              <Image
                src="/shareef-khatib.webp"
                alt="Shareef Samir Khatib"
                fill
                priority
                className="object-cover grayscale contrast-110 brightness-95"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-cream font-serif text-2xl leading-snug">
                  Quiet judgment for rooms where trust is fragile and decisions matter.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-charcoal/10 border-x border-b border-charcoal/10">
              {credibility.map(([value, label]) => (
                <div key={value} className="bg-[#f8f6f2] p-5">
                  <div className="font-serif text-2xl text-charcoal mb-2">
                    {value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.16em] leading-relaxed text-charcoal/55">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="site-gutter site-section w-full bg-[#f8f6f2] border-y border-[#edebe4]">
        <div className="site-container grid lg:grid-cols-[0.7fr_1fr] gap-12 lg:gap-16">
          <div>
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Practice
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <h2 className="site-heading-md font-serif tracking-tight text-charcoal">
              A practice built on accountability and trust.
            </h2>
          </div>

          <div className="space-y-8 text-charcoal/70 text-lg leading-relaxed">
            <p>
              3Ts Consulting offers confidential support for sponsors, repeated
              convenings, principal coaching, and judgment between formal
              moments. The practice is grounded in real-world operational
              leadership: Chief of Party roles, complex governance portfolios,
              crisis continuity, and senior stakeholder engagement across public,
              multilateral, nonprofit, and private-sector settings.
            </p>
            <p>
              Shareef is disciplined, calm, and highly engaged with content. He
              listens for underlying narratives, draws out connections across
              disparate viewpoints, and plays back synthesis to help senior teams
              make informed choices while maintaining cohesion and dignity.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-snug">
              The deeper aim is practical and human: contributing to a world
              where collaboration, cooperation, and kindness can thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="site-gutter site-section w-full">
        <div className="site-container grid lg:grid-cols-[0.75fr_1fr] gap-12 lg:gap-16">
          <div>
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Core Competencies
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <h2 className="site-heading-md font-serif tracking-tight text-charcoal">
              Support for the moments that shape what happens next.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
            {competencies.map((item) => (
              <div key={item} className="bg-cream p-6">
                <p className="font-serif text-xl text-charcoal leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shareef's Quote */}
      <section className="site-gutter site-section w-full bg-[#111613]">
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
