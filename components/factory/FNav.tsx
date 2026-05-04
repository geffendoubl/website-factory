"use client";

import { useState, useEffect } from "react";

export function FNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-canvas border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="font-display text-xl font-black tracking-tight">
            <span className={scrolled ? "text-ink" : "text-canvas"}>Web</span>
            <span className="text-blue">flix</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Pakete", id: "pakete" },
            { label: "Ablauf", id: "ablauf" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? "text-ink-soft" : "text-canvas/80"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("kontakt")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              scrolled
                ? "bg-blue text-canvas hover:opacity-85"
                : "bg-canvas text-ink hover:bg-canvas/90"
            }`}
          >
            Website besprechen
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Menü öffnen"
        >
          <div className="flex flex-col gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-0.5 w-5 transition-all duration-200 ${
                  scrolled ? "bg-ink" : "bg-canvas"
                } ${
                  menuOpen && i === 0
                    ? "translate-y-2 rotate-45"
                    : menuOpen && i === 1
                    ? "opacity-0"
                    : menuOpen && i === 2
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-canvas border-t border-border px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Pakete", id: "pakete" },
            { label: "Ablauf", id: "ablauf" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium text-ink-soft hover:text-ink"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("kontakt")}
            className="mt-2 px-5 py-3 rounded-full bg-blue text-canvas text-sm font-semibold text-center"
          >
            Website besprechen
          </button>
        </div>
      )}
    </header>
  );
}
