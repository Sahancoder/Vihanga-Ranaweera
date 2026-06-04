"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

const firstName = site.name.split(" ")[0];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tight text-white transition-colors hover:text-accent"
        >
          {firstName}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm border border-line px-6 py-2.5 font-display text-xs font-semibold uppercase tracking-widest transition-all hover:border-accent hover:bg-accent hover:text-white md:inline-flex"
          >
            Contact
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm border border-line md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="space-y-1 border-t border-line px-4 pb-4 pt-2">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-4 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
