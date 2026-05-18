"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Testimonials() {
  return (
    <section className="relative w-full flex flex-col justify-between border-t border-[#edebe4]">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 z-0 bg-[#fcfbf9]">
        {/* Subtle overlay texture if desired */}
      </div>

      <div className="site-gutter site-section relative z-10 w-full max-w-6xl mx-auto flex-grow flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4 mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            What Clients Have Said
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
          <h2 className="site-heading-lg font-serif tracking-tight text-charcoal mt-6">
            Real evidence from real leaders.
          </h2>
        </div>

        {/* Vertical Stack instead of cramped grid */}
        <div className="space-y-14 min-[900px]:space-y-16 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-charcoal/10 pb-16 last:border-b-0"
            >
              {/* Big Quote Marker */}
              <div className="font-serif text-7xl md:text-8xl text-gold/20 leading-none -mt-4 select-none">
                &ldquo;
              </div>
              
              {/* Content container */}
              <div className="flex-grow">
                <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed italic mb-8 text-pretty">
                  {t.quote}
                </blockquote>
                
                <div className="flex flex-col">
                  <div className="text-charcoal text-lg font-semibold tracking-wide uppercase font-sans">
                    {t.author}
                  </div>
                  <div className="text-gold text-sm tracking-widest uppercase font-medium mt-1">
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to full testimonials page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center pt-8 border-t border-charcoal/10"
        >
          <Link href="/testimonials" className="group flex flex-col">
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              Visit Testimonials Page <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
