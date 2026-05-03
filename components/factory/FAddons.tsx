"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FAddons() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () =>
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 lg:py-32 bg-canvas" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
            Zusatzleistungen
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] max-w-2xl">
            Alles aus einer Hand — wenn Sie wollen.
          </h2>
          <p className="mt-5 text-ink-soft text-lg max-w-xl">
            Jedes Add-on lässt sich zu jedem Paket dazubuchen. Kein Zwang, keine
            Überraschungen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Photo — featured card spanning full width on its own row on lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="sm:col-span-2 lg:col-span-2 rounded-2xl border border-border bg-canvas-warm overflow-hidden"
          >
            <div className="p-6 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-canvas border border-border flex items-center justify-center text-ink-soft flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base mb-1">
                    Business-Fotografie vor Ort
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    Professionelle Unternehmensbilder für einen stärkeren ersten
                    Eindruck — Außenaufnahmen, Innenraum, Team, Produkte.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {/* Basic */}
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-ink font-semibold text-sm">Basic Visit</span>
                  <span className="font-display text-xl font-bold text-ink">€150</span>
                </div>
                <ul className="space-y-2">
                  {["15–20 bearbeitete Fotos", "Außen, Innen, Team", "Lieferung in 5 Werktagen"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-ink-soft">
                      <span className="w-1 h-1 rounded-full bg-ink-muted flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Full */}
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-ink font-semibold text-sm">Full Visit</span>
                  <span className="font-display text-xl font-bold text-ink">€300</span>
                </div>
                <ul className="space-y-2">
                  {["30+ bearbeitete Fotos", "Detailliertes Bilderset", "Produkte, Details, Atmosphäre"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-ink-soft">
                      <span className="w-1 h-1 rounded-full bg-ink-muted flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Monthly Care — highlighted addon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.14 }}
            className="relative rounded-2xl border-2 border-ink bg-canvas overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 bg-ink text-canvas text-[10px] font-semibold rounded-full">
                Empfohlen
              </span>
            </div>
            <div className="p-6">
              <div className="w-11 h-11 rounded-xl bg-canvas-warm border border-border flex items-center justify-center text-ink-soft mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-semibold text-ink text-base mb-1">
                Laufende Betreuung & Hosting
              </h3>
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display text-2xl font-bold text-ink">ab €39</span>
                <span className="text-ink-muted text-sm">/Monat</span>
              </div>
              <ul className="space-y-2 mb-0">
                {[
                  "Hosting & Domain",
                  "Sicherheit & Backups",
                  "Kleine Textänderungen",
                  "Uptime-Monitoring",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-ink-soft">
                    <span className="w-1 h-1 rounded-full bg-ink-muted flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Google Business */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="flex gap-4 p-6 rounded-2xl border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-canvas-warm flex items-center justify-center text-ink-soft flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-semibold text-ink text-sm">
                  Google Business Profil
                </h3>
                <span className="font-display font-bold text-ink text-base shrink-0">€120</span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Einrichtung & Optimierung Ihres Google-Eintrags — Fotos, Infos,
                Bewertungen, Konsistenz.
              </p>
            </div>
          </motion.div>

          {/* Menu PDF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.26 }}
            className="flex gap-4 p-6 rounded-2xl border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-canvas-warm flex items-center justify-center text-ink-soft flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-semibold text-ink text-sm">
                  Speisekarte / Preisliste als PDF
                </h3>
                <span className="font-display font-bold text-ink text-base shrink-0">€90</span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Professionell gestaltetes PDF — ideal für Cafés, Restaurants,
                Salons und Dienstleister.
              </p>
            </div>
          </motion.div>

          {/* Instagram Link Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.32 }}
            className="flex gap-4 p-6 rounded-2xl border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-canvas-warm flex items-center justify-center text-ink-soft flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-semibold text-ink text-sm">
                  Instagram Link-Page
                </h3>
                <span className="font-display font-bold text-ink text-base shrink-0">€60</span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed">
                Persönliche Linkseite für Ihre Instagram-Bio — alle wichtigen
                Links an einem Ort.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-ink-muted text-sm max-w-sm">
            Nicht sicher, was Sie brauchen? Wir beraten Sie kostenlos — ohne
            Verpflichtung.
          </p>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full border border-ink text-ink text-sm font-semibold hover:bg-ink hover:text-canvas transition-colors shrink-0"
          >
            Kostenlos beraten lassen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
