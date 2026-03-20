"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 md:px-12 lg:px-24">
        {/* PARTE SINISTRA: Logo e Nome */}
        <div className="flex items-center gap-2">
          <div className="size-8 purple-gradient-bg rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Matteo Lombardi</h2>
        </div>

        {/* PARTE DESTRA: Menu Desktop + Bottone Mobile */}
        <div className="flex items-center gap-10">
          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottone Mobile (Nascosto su PC) */}
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

      {/* MENU MOBILE*/}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-b border-primary/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
