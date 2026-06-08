"use client";

import Link from "next/link";
import { BrandProvider } from "@/components/brand/BrandProvider";

const options = [
  { href: "/mawzun-options/name-swap", label: "Literal Rename" },
  { href: "/mawzun-options/full-rebrand", label: "Full Rebrand" },
];

export default function MawzunPreviewShell({
  children,
  mode,
  basePath,
}: {
  children: React.ReactNode;
  mode: "mawzun-name" | "mawzun-full";
  basePath: string;
}) {
  const full = mode === "mawzun-full";

  return (
    <BrandProvider
      value={{
        mode,
        basePath,
        name: "Mawzun Advisory",
        shortName: "Mawzun",
        arabicName: "مَوزُون",
        legalName: "Mawzun Advisory",
        tagline:
          "Senior advisory for high-stakes alignment in transformation settings",
        logoSrc: "/mawzun-logo.png",
        logoAlt: "Mawzun Advisory logo",
      }}
    >
      <div className={full ? "mawzun-full" : "mawzun-name"}>
        <div className="fixed bottom-4 left-4 z-[80] flex max-w-[calc(100vw-2rem)] flex-wrap gap-2 rounded-none border border-charcoal/10 bg-cream/95 p-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-[0_18px_50px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md mawzun-preview-switcher">
          <Link className="px-3 py-2 text-gold" href="/mawzun-options">
            Options
          </Link>
          {options.map((option) => (
            <Link
              key={option.href}
              className={`px-3 py-2 transition-colors hover:text-gold ${
                basePath === option.href ? "bg-charcoal text-cream" : ""
              }`}
              href={option.href}
            >
              {option.label}
            </Link>
          ))}
        </div>
        {children}
      </div>
    </BrandProvider>
  );
}
