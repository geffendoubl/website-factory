"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Online nicht gefunden",
    body: "Wenn Ihre Kunden googeln, erscheint die Konkurrenz — nicht Sie. Wer online nicht auffindbar ist, existiert für viele schlicht nicht.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="14" x="3" y="3" rx="2" /><path d="M3 9h18M9 21l3-3 3 3" />
      </svg>
    ),
    title: "Veraltete oder keine Website",
    body: "Eine WordPress-Site von vor zehn Jahren oder gar keine Website hinterlässt denselben schlechten Eindruck. Kunden entscheiden in Sekunden.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
      </svg>
    ),
    title: "Kein einfacher Kontaktweg",
    body: "Kunden, die Ihre Nummer oder ein Formular nicht sofort finden, fragen beim nächsten Betrieb nach. Kontakt muss in drei Sekunden möglich sein.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Anfragen bleiben aus",
    body: "Eine saubere Website arbeitet rund um die Uhr für Sie. Ohne sie verlieren Sie täglich Kunden, ohne es zu merken.",
  },
];

export function FPain() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32 bg-canvas" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
            Das Problem
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] max-w-2xl">
            Kunden entscheiden in Sekunden.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-2xl">
            Wer online nicht gefunden wird oder einen schlechten ersten Eindruck
            macht, verliert Aufträge — still und ohne es zu merken. Betrifft
            Cafés, Handwerker, Reinigungsbetriebe, Salons und viele andere.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: 0.1 + i * 0.07,
              }}
              className="group p-6 rounded-2xl border border-border bg-canvas shadow-card hover:shadow-card-hover hover:border-border-strong transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-soft flex items-center justify-center mb-4 text-blue group-hover:bg-blue group-hover:text-canvas transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-semibold text-ink text-base mb-2">
                {card.title}
              </h3>
              <p className="text-ink-soft text-base leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* WordPress callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.42 }}
          className="mt-8 p-5 rounded-2xl bg-green-soft border border-green/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p className="text-ink-soft text-base leading-relaxed">
            <span className="text-ink font-semibold">Einfache Firmenwebsites ohne komplizierte Systeme.</span>{" "}
            Kein WordPress, kein Baukastentool, kein technischer Aufwand für Sie.
          </p>
          <button
            onClick={() =>
              document.getElementById("pakete")?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 px-5 py-2.5 rounded-full bg-green text-canvas text-sm font-semibold hover:opacity-85 transition-opacity"
          >
            Preise ansehen
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0), #F4F3F0)" }} />
    </section>
  );
}
