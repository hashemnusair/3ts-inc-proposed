"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/perspectives", label: "Perspectives" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

const menuVariants: any = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkContainerVariants: any = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const linkVariants: any = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full px-6 md:px-12 py-6 flex items-center justify-between"
        >
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex flex-col z-[70]">
              <span className={`font-serif text-2xl md:text-3xl tracking-tight transition-colors duration-500 ${isHome && !scrolled ? 'text-white' : 'text-charcoal'}`}>
                3Ts Consulting
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-widest text-gold mt-1 uppercase">
                Thoroughly. Thought. Through.
              </span>
            </Link>
            <div className={`hidden md:block w-px h-10 transition-colors duration-500 ${isHome && !scrolled ? 'bg-white/20' : 'bg-charcoal/20'}`}></div>
          </div>

          {/* Desktop Links */}
          <nav className={`hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${isHome && !scrolled ? 'text-white/80' : 'text-charcoal/80'}`}>
            {links.slice(0, 5).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`w-px h-10 transition-colors duration-500 ${isHome && !scrolled ? 'bg-white/20' : 'bg-charcoal/20'}`}></div>
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-500 ${isHome && !scrolled ? 'text-white/80' : 'text-charcoal/80'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`md:hidden flex items-center justify-center p-2 -mr-2 z-[70] hover:text-gold transition-colors duration-500 focus:outline-none group ${isHome && !scrolled && !isOpen ? 'text-white' : 'text-charcoal'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </button>
        </motion.div>
      </header>

      {/* Spacer to replace sticky flow — hidden on homepage where hero bleeds behind navbar */}
      {!isHome && <div className="w-full h-[96px] shrink-0"></div>}

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 h-[100dvh] bg-cream z-40 flex flex-col justify-center px-8 md:hidden overflow-hidden touch-none overscroll-none"
          >
            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-start space-y-8"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-charcoal hover:text-gold transition-colors inline-block relative group"
                  >
                    {link.label}
                    <div className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              variants={linkVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute bottom-12 left-8 border-t border-charcoal/10 pt-8 w-[calc(100%-4rem)]"
            >
              <a
                href="mailto:shareef@3ts-inc.com"
                className="text-gold text-sm tracking-[0.2em] uppercase font-medium"
              >
                shareef@3ts-inc.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
