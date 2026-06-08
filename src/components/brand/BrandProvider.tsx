"use client";

import { createContext, useContext } from "react";

type BrandMode = "default" | "mawzun-name" | "mawzun-full";

type BrandConfig = {
  mode: BrandMode;
  basePath: string;
  name: string;
  shortName: string;
  arabicName?: string;
  legalName: string;
  tagline: string;
  logoSrc?: string;
  logoAlt?: string;
};

const defaultBrand: BrandConfig = {
  mode: "default",
  basePath: "",
  name: "3Ts Consulting",
  shortName: "3Ts",
  legalName: "3Ts Consulting, Inc.",
  tagline: "Senior advisory for high-stakes alignment in transformation settings",
};

const BrandContext = createContext<BrandConfig>(defaultBrand);

export function BrandProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Partial<BrandConfig>;
}) {
  return (
    <BrandContext.Provider value={{ ...defaultBrand, ...value }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const brand = useContext(BrandContext);

  function href(path: string) {
    if (!brand.basePath) return path;
    if (path === "/") return brand.basePath;
    return `${brand.basePath}${path}`;
  }

  return { ...brand, href };
}
