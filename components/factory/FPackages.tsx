"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Package = {
  name: string;
  tagline: string;
  price: string;
  deliveryDays: string;
  includesAll?: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
};

const packages: Package[] = [
  {
    name: "Starter",
    tagline: "Für Betriebe, die einfach online präsent sein müssen.",
    price: "490",
    deliveryDays: "5–7 Werktage",
    features: [
      "Einseitige Website (Onepager)",
      "Unternehmensinformationen",
      "Kontaktdaten & Kontaktformular",
      "Google Maps Einbindung",
      "WhatsApp- & Anruf-Button",
      "Mobil optimiert",
      "Impressum & Datenschutz (Basis)",
    ],
    cta: "Starter anfragen",
    highlighted: false,
  },
  {
    name: "Business",
    tagline: "Für Betriebe, die einen vollständigen professionellen Auftritt brauchen.",
    price: "890",
    deliveryDays: "7–10 Werktage",
    includesAll: "Starter",
    features: [
      "Bis zu 5 Unterseiten",
      "Leistungen / Speisekarte / Preise",
      "FAQ-Sektion",
      "Erweiterte Anfrageformulare",
      "SEO-Grundsetup",
      "Google-Bewertungen Einbindung",
      "Domain & Launch-Unterstützung",
      "2 Korrekturschleifen",
    ],
    cta: "Business anfragen",
    highlighted: true,
    badge: "Am häufigsten gewählt",
  },
  {
    name: "Premium",
    tagline: "Für Betriebe, die online wirklich überzeugen wollen.",
    price: "1.390",
    deliveryDays: "Priorisiert",
    includesAll: "Business",
    features: [
      "Individuelles Premium-Design",
      "Erweiterte Bildergalerien",
      "Instagram-Einbindung",
      "Professionelle Texterstellung",
      "Referenzen & Bewertungssektion",
      "Conversion-optimiertes Layout",
      "30 Tage After-Launch-Support",
    ],
    cta: "Premium anfragen",
    highlighted: false,
  },
];

function Check({ highlighted }: { highlighted: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="7"
        stroke="currentColor"
        strokeOpacity={highlighted ? 0.3 : 0.2}
      />
      <path
        d="M5 7.5l2 2 3-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FPackages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pakete" className="py-24 lg:py-32 bg-canvas-warm" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
            Transparente Preise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15]">
            Das passende Paket für Ihren Betrieb.
          </h2>
          <p className="mt-5 text-ink-soft text-lg max-w-xl mx-auto">
            Einmaliger Fixpreis. Keine versteckten Kosten, keine langen Verträge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: 0.1 + i * 0.1,
              }}
              className={`relative flex flex-col rounded-2xl ${
                pkg.highlighted
                  ? "bg-accent shadow-2xl shadow-accent/20"
                  : "bg-canvas border border-border"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 bg-canvas text-accent text-xs font-bold rounded-full shadow-sm border border-accent/20 whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`p-8 pb-6 ${pkg.highlighted ? "border-b border-white/8" : "border-b border-border"}`}>
                <h3
                  className={`font-display text-2xl font-bold mb-1.5 ${
                    pkg.highlighted ? "text-canvas" : "text-ink"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    pkg.highlighted ? "text-white/45" : "text-ink-muted"
                  }`}
                >
                  {pkg.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-4xl font-bold tracking-tight ${
                      pkg.highlighted ? "text-canvas" : "text-ink"
                    }`}
                  >
                    {pkg.price}€
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      pkg.highlighted ? "text-white/35" : "text-ink-muted"
                    }`}
                  >
                    einmalig
                  </span>
                </div>

                {/* Delivery badge */}
                <div className="mt-4 inline-flex items-center gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={pkg.highlighted ? "text-white/40" : "text-ink-muted"}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span
                    className={`text-xs font-medium ${
                      pkg.highlighted ? "text-white/40" : "text-ink-muted"
                    }`}
                  >
                    {pkg.deliveryDays}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8 pt-6 flex-1 flex flex-col">
                {pkg.includesAll && (
                  <div
                    className={`flex items-center gap-2 text-xs font-medium mb-5 pb-5 border-b ${
                      pkg.highlighted
                        ? "text-white/50 border-white/8"
                        : "text-ink-muted border-border"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="17 11 12 6 7 11" />
                      <polyline points="17 18 12 13 7 18" />
                    </svg>
                    Alles aus {pkg.includesAll}, plus:
                  </div>
                )}

                <ul className="flex flex-col gap-3 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        pkg.highlighted ? "text-white/65" : "text-ink-soft"
                      }`}
                    >
                      <span
                        className={
                          pkg.highlighted ? "text-white/40" : "text-ink-muted"
                        }
                      >
                        <Check highlighted={pkg.highlighted} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("selectPackage", { detail: pkg.name })
                    );
                    document
                      .getElementById("kontakt")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-8 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    pkg.highlighted
                      ? "bg-canvas text-accent font-bold hover:bg-white/90"
                      : "bg-accent text-canvas hover:opacity-85"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 space-y-4"
        >
          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Persönlich in Wien",
              "Einmaliger Fixpreis",
              "Keine Technikkenntnisse nötig",
              "Für Betriebe wie Cafés, Handwerker, Reinigung u.v.m.",
            ].map((pill) => (
              <span
                key={pill}
                className="px-3 py-1.5 rounded-full border border-border text-ink-muted text-xs font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="text-center text-ink-muted text-sm">
            Alle Preise zzgl. 20% MwSt. ·{" "}
            <button
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              Individuelles Angebot anfragen
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
