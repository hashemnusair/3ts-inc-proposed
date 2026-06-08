import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mawzun Brand Options — 3Ts Consulting",
  description:
    "Preview two ways to integrate the Mawzun Advisory name and logo without changing the current live site.",
  path: "/mawzun-options",
  image: "/og/home.webp",
});

const options = [
  {
    number: "01",
    label: "Literal Rename",
    href: "/mawzun-options/name-swap",
    description:
      "Current site language and structure with the brand name changed to Mawzun Advisory (مَوزُون), plus the supplied logo placed into the system.",
  },
  {
    number: "02",
    label: "Full Rebrand",
    href: "/mawzun-options/full-rebrand",
    description:
      "Same site structure, copy, components, and interactions, but with a fuller Mawzun visual system built around the logo, deep teal, ivory, and quieter gold.",
  },
];

export default function MawzunOptionsPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 text-charcoal md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-5">
          <div className="relative h-20 w-20 overflow-hidden border border-charcoal/10">
            <Image
              src="/mawzun-logo.png"
              alt="Mawzun Advisory logo"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Brand Preview
            </span>
            <h1 className="mt-3 font-serif text-5xl leading-tight md:text-7xl">
              Mawzun Advisory options.
            </h1>
          </div>
        </div>

        <p className="mb-16 max-w-3xl text-lg leading-relaxed text-charcoal/68">
          Two isolated routes for reviewing the Mawzun direction. The current
          live site remains unchanged; these are only examples for comparison.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {options.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group flex min-h-[360px] flex-col justify-between border border-charcoal/10 bg-[#f8f6f2] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-[0_24px_70px_-42px_rgba(0,0,0,0.28)] md:p-10"
            >
              <div>
                <p className="mb-8 font-serif text-5xl text-gold">
                  {option.number}
                </p>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {option.label}
                </p>
                <p className="max-w-xl text-base leading-relaxed text-charcoal/68">
                  {option.description}
                </p>
              </div>
              <p className="mt-12 text-sm font-semibold uppercase tracking-[0.15em] text-gold">
                View option{" "}
                <span className="inline-block transition-transform group-hover:translate-x-2">
                  &rarr;
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
