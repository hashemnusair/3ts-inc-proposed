import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LeadershipPage() {
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
            A practice built on accountability and trust.
          </h1>
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal/70 prose-strong:text-charcoal max-w-none">
            <p className="lead text-xl mb-8">
              3Ts Consulting is directed by Shareef Khatib, offering confidential support for sponsors, repeated convenings, principal coaching, and quiet judgment.
            </p>
            <p className="mb-8">
              With 18+ years of experience across the Gulf, the Levant, Africa, and Asia, the practice is grounded in real-world operational leadership. Shareef has served as Chief of Party on multi-country portfolios, navigating the complexities of governance, reform, and consequential transitions.
            </p>
            <h3 className="text-2xl mt-12 mb-6">Core Competencies</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Facilitation & Convening Design</li>
              <li>Multi-Stakeholder Dialogue in Politically Sensitive Contexts</li>
              <li>Strategic Reviews & Planning Sprints</li>
              <li>Executive Coaching (ICF/Co-Active)</li>
              <li>Organizational Development & Change Leadership</li>
              <li>Operating Model & Process Redesign</li>
              <li>Risk & Crisis Management</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
