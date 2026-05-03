"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;

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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FHero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen bg-canvas-dark flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Wien &amp; Österreich · Persönlich vor Ort
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-canvas mb-6">
              Ihre Kunden suchen
              <br />
              Sie online — wir
              <br />
              <span className="text-white/55">sorgen dafür, dass</span>
              <br />
              sie Sie finden.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
              Geffen FlexCo erstellt professionelle Websites für kleine und
              mittlere Unternehmen in Wien und Österreich — schnell, ohne
              technischen Aufwand, persönlich begleitet.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollTo("kontakt")}
                className="px-7 py-3.5 bg-canvas text-ink rounded-full font-semibold text-sm hover:bg-canvas/90 transition-colors"
              >
                Kostenlos anfragen
              </button>
              <button
                onClick={() => scrollTo("pakete")}
                className="px-7 py-3.5 border border-white/20 text-canvas/80 rounded-full font-medium text-sm hover:border-white/40 hover:text-canvas transition-colors"
              >
                Pakete ansehen
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex flex-wrap gap-8">
              {[
                { value: "5–10", label: "Werktage bis live" },
                { value: "ab 490€", label: "Starter-Paket" },
                { value: "100%", label: "persönlich betreut" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-canvas text-xl font-bold font-display">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right: Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-white/5 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1A1A1A]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#141414]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/8 rounded px-3 py-1 text-white/30 text-xs font-mono">
                    www.mein-betrieb.at
                  </div>
                </div>
              </div>

              {/* Mock website */}
              <div className="bg-white">
                <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="h-2.5 w-24 bg-gray-900 rounded-sm" />
                  <div className="flex gap-3">
                    <div className="h-2 w-10 bg-gray-200 rounded" />
                    <div className="h-2 w-10 bg-gray-200 rounded" />
                    <div className="h-5 w-16 bg-gray-900 rounded-full" />
                  </div>
                </div>

                <div className="px-5 pt-6 pb-4 bg-gray-900">
                  <div className="h-3 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-white/15 rounded mb-4" />
                  <div className="h-2 w-full bg-white/8 rounded mb-1.5" />
                  <div className="h-2 w-4/5 bg-white/8 rounded mb-5" />
                  <div className="flex gap-2">
                    <div className="h-7 w-24 bg-white rounded-full" />
                    <div className="h-7 w-24 bg-white/10 border border-white/20 rounded-full" />
                  </div>
                </div>

                <div className="px-5 py-5">
                  <div className="h-2.5 w-32 bg-gray-900 rounded mb-4" />
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-3 border border-gray-100 rounded-lg">
                        <div className="w-5 h-5 bg-gray-100 rounded mb-2" />
                        <div className="h-1.5 w-full bg-gray-100 rounded mb-1" />
                        <div className="h-1.5 w-2/3 bg-gray-100 rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="bg-gray-50 rounded-xl p-4 flex gap-4 items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-1.5 w-3/4 bg-gray-300 rounded mb-1.5" />
                      <div className="h-1.5 w-1/2 bg-gray-200 rounded" />
                    </div>
                    <div className="h-7 w-20 bg-gray-900 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-white/25 text-xs tracking-widest uppercase">Mehr erfahren</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/25">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-canvas to-transparent" />
    </section>
  );
}
