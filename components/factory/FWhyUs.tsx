"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "Persönliche Betreuung",
    desc: "Sie haben einen direkten Ansprechpartner — Samuel Geffen, persönlich in Wien. Kein Ticketsystem, keine anonyme Agentur.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Schnelle Umsetzung",
    desc: "Keine monatelangen Projekte. In der Regel ist Ihre Website in 5–10 Werktagen fertig und online.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Keine Technikkenntnisse nötig",
    desc: "Sie müssen nichts über Hosting, Domains oder Code wissen. Wir erledigen alles — und erklären, was Sie wissen müssen.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Spezialisiert auf kleine Betriebe",
    desc: "Wir arbeiten nicht für Konzerne. Unser Fokus sind Handwerker, Läden, Dienstleister und lokale Unternehmen — genau wie Ihr Betrieb.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Klare, faire Preise",
    desc: "Kein Stundensatz-Dschungel, keine bösen Überraschungen. Die Pakete sind fix kalkuliert — Sie wissen vorher, was es kostet.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Vor-Ort-Besuche möglich",
    desc: "Bei Bedarf kommen wir zu Ihnen — für die Erstbesprechung, Fotos oder die Abnahme. Weil manche Dinge persönlich einfach besser gehen.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function FWhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-canvas-warm" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
              Warum Geffen FlexCo
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] mb-6">
              Kein Agentur-
              <br />
              aufwand.
              <br />
              <span className="text-ink-muted">Nur Ergebnis.</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-10">
              Wir sind keine große Agentur mit vielen Projektleitern. Wir sind
              ein spezialisierter Anbieter für genau eine Sache: solide,
              professionelle Websites für lokale Betriebe in Österreich.
            </p>

            <div className="p-5 rounded-2xl bg-canvas border border-border">
              <p className="text-ink-soft text-base leading-relaxed">
                „Viele gute Betriebe sind online gar nicht auffindbar — und das
                wird unnötig kompliziert gemacht. Das kann einfacher gehen."
              </p>
              <p className="text-ink-muted text-sm mt-3">
                Samuel Geffen · Gründer, Geffen FlexCo · Wien
              </p>
            </div>
          </motion.div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.07,
                }}
                className="p-5 rounded-2xl bg-canvas border border-border hover:shadow-sm transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-canvas-warm flex items-center justify-center mb-4 text-ink-soft">
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-ink text-base mb-2">
                  {reason.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
