"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "#skills" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 md:px-12 lg:px-24">
        <div className="flex items-center gap-2">
          <div className="size-8 purple-gradient-bg rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Alex Rivera</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name} // React richiede sempre una key univoca nei map
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex h-10 px-6 items-center justify-center rounded-xl purple-gradient-bg text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity">
            Hire Me
          </button>

          <button
            className="md:hidden flex items-center justify-center p-2 text-slate-900 dark:text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* MENU MOBILE: Ora è in absolute per non spingere la pagina */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-b border-primary/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name} // React richiede sempre una key univoca nei map
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <button className="sm:hidden mt-2 h-14 w-full flex items-center justify-center rounded-xl purple-gradient-bg text-white text-lg font-bold tracking-wide hover:opacity-90 transition-opacity">
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
