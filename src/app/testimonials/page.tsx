import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Working with Shareef was such a pleasure, and was so impactful for me. At the outset, I had doubts: prior experiences of coaching had caused me to question my instincts. I shared this concern with Shareef, who made me feel heard and safe enough to give coaching another try, and I’m really glad I did. When I started coaching, I was in the process of growing my team, and hoping to build my confidence as a leader. Shareef supported me to think about topics including body language and polarity of thinking, and through probing but supportive questions, helped me to reframe my own internal dialogue. He also encouraged me to draw on the areas where I already felt secure in my own abilities, helping me to remember the skills that I knew I already had in my wheelhouse and to recognize how these could be applied to the leadership of a new and expanding team. By the end of the 6-week coaching programme, my confidence in my own intuition and as a leader had increased significantly. I was able to recognize and celebrate my strengths, sit comfortably with the idea of making and learning from mistakes and access a level of self-assuredness that I’d been craving for a long time. I’ve been left less reliant on external validation, free of much of the self-doubt I had been experiencing for years and with actionable strategies to manage these challenges should they reoccur in future. Thank you so much Shareef – your support has been transformational!",
    author: "Penny D.",
    title: "Head of Fundraising, Settle UK",
  },
  {
    quote:
      "When I had to prepare for a big presentation to a 1000+ crowd of colleagues and experts, Shareef’s help was a game-changer. His mixture of experience, empathy, and clear guidance turned my rushed prep into a confident and polished performance. Shareef’s support helped me refine my strategy and sharpen my message, ensuring my presentation had maximum impact. Shareef’s unassuming yet effective coaching style, stress management tips, and composure techniques have also made a huge difference in my workplace experience. He combines professionalism with a deep understanding of clients’ needs. His dedication and ability to help me conquer nerves and feel confident allowed me to overcome my fear of public speaking, and has allowed me to be generally more grounded and ready to tackle professional challenges ahead.",
    author: "Hannah D.",
    title: "International Program Manager, Multilateral Donor",
  },
  {
    quote:
      "Shareef has been a great coach for me as a new manager. He has provided me tools to work through customized strategies for dealing with new management situations and to empower my team. His wealth of personal leadership experience provides great context for how to approach challenging management situations and his coaching style has given me assurance that my intrinsic ability can manifest into strong, empathetic leadership for my team.",
    author: "Andrew F.",
    title: "Division Lead, International Assistance – Energy Sector",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      {/* Header */}
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#f8f6f2]">
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
          <p className="text-charcoal/80 text-xl md:text-2xl font-serif italic max-w-3xl leading-relaxed">
            Client experiences working with Shareef on complex leadership, communication, and organizational transitions.
          </p>
        </div>
      </section>

      {/* Real Testimonial Section (Premium Layout) */}
      <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-24">
            {testimonials.map((t, i) => (
              <div key={i} className="relative flex flex-col border-b border-charcoal/5 pb-24 last:border-0 last:pb-0">
                <div className="font-serif text-8xl md:text-9xl text-gold/10 absolute -top-8 -left-4 leading-none pointer-events-none select-none">
                  &ldquo;
                </div>
                
                <div className="relative z-10 pl-6 md:pl-12">
                  <blockquote className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-12">
                    {t.quote}
                  </blockquote>
                  
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-px bg-gold/40"></div>
                     <div>
                        <div className="text-charcoal font-bold tracking-widest uppercase text-sm">
                          {t.author}
                        </div>
                        <div className="text-gold text-sm italic mt-1 font-serif">
                          {t.title}
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Footer Break for contrast */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#111613] relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 mix-blend-overlay z-0">
            <Image
              src="/vaseANDfooter.png"
              alt="Decorative graphic"
              fill
              className="object-cover object-center"
            />
         </div>
         <div className="max-w-4xl mx-auto text-center relative z-10 py-12">
            <h3 className="text-cream font-serif text-3xl md:text-4xl mb-8 tracking-tight">
              Ready to design your engagement?
            </h3>
            <a href="/contact" className="inline-block border border-cream/30 text-cream px-10 py-4 text-sm tracking-widest uppercase hover:bg-cream hover:text-[#111613] transition-all">
              Request a Consultation
            </a>
         </div>
      </section>

      <Footer />
    </main>
  );
}
