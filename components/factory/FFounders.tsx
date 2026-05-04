"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const founders = [
  {
    initials: "FS",
    name: "Florian Schwarz",
    role: "Webentwicklung & Umsetzung",
    bio: "Verantwortlich für saubere technische Umsetzung, schnelle Ladezeiten und zuverlässige Website-Strukturen.",
  },
  {
    initials: "SG",
    name: "Sam Geffen",
    role: "Kundenstrategie, Inhalte & Projektbetreuung",
    bio: "Verantwortlich für Kundenverständnis, klare Inhalte, Fotos vor Ort und einen reibungslosen Ablauf.",
  },
];

function FounderCard({
  founder,
  index,
  inView,
}: {
  founder: (typeof founders)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 + index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col p-6 rounded-2xl border border-border bg-canvas shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      {/* Avatar */}
      <div className="mb-5">
        <div className="w-16 h-16 rounded-2xl bg-canvas-warm border border-border flex items-center justify-center">
          <span className="font-display text-xl font-bold text-ink-soft tracking-tight">
            {founder.initials}
          </span>
        </div>
      </div>

      {/* Name + role */}
      <div className="mb-3">
        <h3 className="font-semibold text-ink text-lg leading-tight mb-1">
          {founder.name}
        </h3>
        <p className="text-yellow text-xs font-semibold uppercase tracking-wide">
          {founder.role}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-4" />

      {/* Bio */}
      <p className="text-ink-soft text-sm leading-relaxed flex-1">
        {founder.bio}
      </p>

      {/* Location badge */}
      <div className="mt-5 inline-flex items-center gap-1.5 text-ink-muted text-xs">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Wien, Österreich
      </div>
    </motion.div>
  );
}

export function FFounders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-canvas" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-yellow text-sm font-semibold uppercase tracking-widest mb-4">
              Persönlich. Direkt. Wien.
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] mb-6">
              Zwei Ansprechpartner.
              <br />
              Ein klarer Ablauf.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-8">
              Florian Schwarz und Sam Geffen begleiten jedes Projekt persönlich —
              von der ersten Analyse über Fotos vor Ort bis zur fertigen Website.
              Ohne Agentur-Overhead, ohne komplizierte Prozesse und ohne lange
              Wartezeiten. Direkt, schnell und mit Fokus auf das, was lokale
              Betriebe wirklich brauchen: einen professionellen Auftritt, der
              Vertrauen schafft und Anfragen bringt.
            </p>

            {/* Local trust line */}
            <div className="flex items-center gap-2 text-ink-muted text-sm mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow" />
              Persönlich in Wien und Umgebung vor Ort.
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-full bg-green text-canvas text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              Kostenlose Erstberatung starten
            </button>
          </motion.div>

          {/* Right: founder cards */}
          <div className="flex flex-col gap-4">
            {founders.map((founder, i) => (
              <FounderCard
                key={founder.name}
                founder={founder}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
