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
    body: "Wenn Ihre Kunden googeln, erscheint die Konkurrenz — nicht Sie. Was nicht online ist, existiert für viele schlicht nicht.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="14" x="3" y="3" rx="2" /><path d="M3 9h18M9 21l3-3 3 3" />
      </svg>
    ),
    title: "Veralteter Auftritt",
    body: "Eine schlechte oder zehn Jahre alte Website wirkt unprofessioneller als gar keine. Der erste Eindruck entscheidet.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
      </svg>
    ),
    title: "Keine einfache Kontaktaufnahme",
    body: "Kunden, die Sie nicht in wenigen Sekunden erreichen können, fragen beim nächsten weiter. Formulare und Rufnummern müssen sofort sichtbar sein.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Anfragen bleiben aus",
    body: "Eine gut gemachte Website arbeitet rund um die Uhr für Sie — auch wenn Sie schlafen. Ohne sie verlieren Sie täglich potenzielle Kunden.",
  },
];

export function FPain() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-canvas" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
            Die Realität
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] max-w-2xl">
            Kunden entscheiden in Sekunden.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-2xl">
            Wer online nicht gefunden wird oder einen schlechten ersten Eindruck
            macht, verliert Aufträge — still und ohne es zu merken.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 + i * 0.07,
              }}
              className="group p-6 rounded-2xl border border-border hover:border-border-strong hover:shadow-sm transition-all duration-300 bg-canvas"
            >
              <div className="w-10 h-10 rounded-xl bg-canvas-warm flex items-center justify-center mb-4 text-ink-soft group-hover:bg-ink group-hover:text-canvas transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="font-semibold text-ink text-base mb-2">
                {card.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
