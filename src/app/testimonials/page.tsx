import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Testimonials — 3Ts Consulting",
  description:
    "Client reflections and case-study testimonials on working with Shareef Khatib through leadership, facilitation, organizational change, and complex programs.",
  path: "/testimonials",
  image: "/og/testimonials.webp",
});

const coachingTestimonials = [
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

const caseStudyTestimonials = [
  {
    heading: "Facilitation, Teambuilding & Training: Case Study & Testimonials",
    quote:
      "Partnering with Shareef was a turning point for our leadership team. I came to him seeking support around team development, re-centering our vision and mission, and navigating complex challenges impacting our outcomes. From day one, he brought deep expertise, sharp insight, and genuine care—helping us craft a clear, actionable plan that has led to measurable progress on goals for our school this year. When planning our full-day retreat, Shareef created a space where every voice was heard, every challenge named, and real solutions were developed. His ability to surface core values, strengthen team cohesion, and offer practical, research-based strategies empowered us to lead with clarity, cohesion and confidence. For any team looking to deepen its impact or solve persistent challenges, I wholeheartedly recommend Shareef. His work transforms people and outcomes.",
    author: "Will L.",
    title: "Principal, Public Middle School",
  },
  {
    heading: "Organizational Development & Change Management: Case studies and Testimonials",
    quote:
      "When I partnered with Shareef in a Program to strengthen the City of Portland’s approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do. Shareef didn’t just improve on what was already there—he challenged long-standing assumptions and boldly conceptualized a new path forward for the City client. His ability to present a novel, community-centered approach disrupted business as usual and pushed the City to reimagine how it shows up in this critical work. What stood out most was Shareef’s instinct for collaboration and his respect for the expertise others bring to the table. He engaged my team to provide technical assistance to community-based organizations doing frontline work—ensuring they had the tools and support to thrive. He recognized the value of strategic communications early on and worked with both City staff and CBOs to sharpen messaging and align on a shared approach. Together, we witnessed powerful results: clearer messaging, stronger partnerships, and a measurable shift in how the City and community worked together. Shareef is the kind of change-maker who not only sees what’s possible but helps others believe it and build it. I can’t recommend him enough as a partner in organizational development and transformational change.",
    author: "Rose King",
    title: "Principal, Hearts & Minds Communications",
  },
  {
    heading: "Program & Project Management: Case studies and Testimonials",
    quote:
      "I began working in public safety at the City of Portland in 2022 at the height of our gun violence emergency... That’s when I called Shareef. I knew from working with him in Afghanistan and Nigeria that he would know how to bring new thinking and solutions to our crisis... Shareef landed in Portland and within 3 months had done things that no one in our city had done before – he got money into the hands of community partners with the relationships and skills to keep people from shooting... Today, gun violence is down nearly 60% since 2022. I’m convinced we wouldn’t be where we are today without Shareef’s work.",
    author: "Lisa Freeman",
    title:
      "Chief of Staff for Portland City Councilor Sameer Kanal and Former Community Safety Division Manager",
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
            {coachingTestimonials.map((t, i) => (
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

      {/* Case Study Testimonials */}
      <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#f8f6f2]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Case Studies & Testimonials
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <div className="space-y-20">
            {caseStudyTestimonials.map((t) => (
              <article key={t.heading} className="border-t border-charcoal/10 pt-10">
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight tracking-tight mb-10">
                  {t.heading}
                </h2>

                <div className="relative bg-white px-6 py-10 md:p-12 border border-charcoal/5">
                  <div className="font-serif text-7xl md:text-8xl text-gold/10 absolute top-4 left-4 leading-none pointer-events-none select-none">
                    &ldquo;
                  </div>

                  <blockquote className="relative z-10 font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-10">
                    {t.quote}
                  </blockquote>

                  <div className="relative z-10 flex items-center gap-6">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
