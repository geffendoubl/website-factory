"use client";

import { motion } from "framer-motion";

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const industries = [
  "Cafés",
  "Handwerker",
  "Reinigungsbetriebe",
  "Fahrradläden",
  "Kosmetikstudios",
  "Arztpraxen",
  "Dachdecker",
  "Lokale Läden",
];

const trustPills = [
  { label: "Persönlich in Wien", dot: "bg-blue" },
  { label: "Klare Fixpreise", dot: "bg-yellow" },
  { label: "Keine Technikkenntnisse nötig", dot: "bg-green" },
  { label: "5–7 Werktage", dot: "bg-blue" },
];

export function FHero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-canvas-dark flex flex-col justify-center overflow-hidden">
      {/* Warm blue glow top-right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(43,111,212,0.15)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(22,163,74,0.07)_0%,_transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: Copy */}
        <div>
          {/* Eyebrow */}
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue/30 bg-blue/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              <span className="text-blue text-xs font-semibold tracking-wide">Professionelle Websites für Wien</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-canvas mb-5">
              Einfache Firmenwebsite
              <br />
              für Ihren Betrieb —
              <br />
              <span className="text-yellow">ab 490€, in Tagen online.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-white/55 text-lg leading-relaxed mb-3 max-w-lg">
              Wir erstellen saubere, mobile Websites für lokale Betriebe in Wien
              und Österreich. Ohne komplizierte Systeme, ohne technischen Aufwand
              für Sie.
            </p>
          </FadeUp>

          {/* Industry pills */}
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-2.5 py-1 rounded-full border border-white/12 text-white/40 text-xs"
                >
                  {ind}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.28}>
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => scrollTo("kontakt")}
                className="px-7 py-3.5 bg-blue text-canvas rounded-full font-semibold text-base hover:opacity-85 transition-opacity"
              >
                Unverbindlich anfragen
              </button>
              <button
                onClick={() => scrollTo("pakete")}
                className="px-7 py-3.5 border border-white/20 text-canvas/75 rounded-full font-medium text-base hover:border-white/35 hover:text-canvas transition-colors"
              >
                Pakete ansehen
              </button>
            </div>
          </FadeUp>

          {/* Trust pills — tricolor dots */}
          <FadeUp delay={0.36}>
            <div className="flex flex-wrap gap-2">
              {trustPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/45 text-xs font-medium"
                >
                  <span className={`w-1 h-1 rounded-full ${pill.dot} opacity-80`} />
                  {pill.label}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right: Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-blue/8 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A]">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#141414]">
                <div className="flex gap-1.5">
                  {[0,1,2].map(i => <div key={i} className="w-3 h-3 rounded-full bg-white/10" />)}
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/8 rounded px-3 py-1 text-white/30 text-xs font-mono">
                    www.mein-betrieb.at
                  </div>
                </div>
              </div>
              {/* Website preview */}
              <div className="bg-white">
                <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="h-2.5 w-24 bg-gray-900 rounded-sm" />
                  <div className="flex gap-3 items-center">
                    <div className="h-2 w-10 bg-gray-200 rounded" />
                    <div className="h-2 w-10 bg-gray-200 rounded" />
                    <div className="h-6 w-20 rounded-full" style={{ backgroundColor: "#2B6FD4" }} />
                  </div>
                </div>
                <div className="px-5 pt-6 pb-4" style={{ backgroundColor: "#1A1008" }}>
                  <div className="h-3 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-3 w-1/2 rounded mb-4" style={{ backgroundColor: "#CA8A0466" }} />
                  <div className="h-2 w-full bg-white/8 rounded mb-1.5" />
                  <div className="h-2 w-4/5 bg-white/8 rounded mb-5" />
                  <div className="flex gap-2">
                    <div className="h-7 w-28 rounded-full" style={{ backgroundColor: "#2B6FD4" }} />
                    <div className="h-7 w-24 bg-white/10 border border-white/20 rounded-full" />
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="h-2.5 w-32 bg-gray-900 rounded mb-4" />
                  <div className="grid grid-cols-3 gap-2">
                    {(["#EEF4FD","#FEFCE8","#F0FDF4"] as const).map((bg, i) => (
                      <div key={i} className="p-3 border border-gray-100 rounded-lg">
                        <div className="w-5 h-5 rounded mb-2" style={{ backgroundColor: bg }} />
                        <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
                        <div className="h-1.5 w-2/3 bg-gray-100 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <div className="rounded-xl p-4 flex gap-4 items-center" style={{ backgroundColor: "#F0FDF4" }}>
                    <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: "#16A34A55" }} />
                    <div className="flex-1">
                      <div className="h-1.5 w-3/4 bg-gray-300 rounded mb-1.5" />
                      <div className="h-1.5 w-1/2 bg-gray-200 rounded" />
                    </div>
                    <div className="h-7 w-20 rounded-full" style={{ backgroundColor: "#16A34A" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo("trust")}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, #FFFFFF, rgba(26,16,8,0))" }} />
    </section>
  );
}
