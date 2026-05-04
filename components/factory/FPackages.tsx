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
    badge: "Full-Service",
  },
];

function CheckIcon({ tier }: { tier: "starter" | "business" | "premium" }) {
  const ring =
    tier === "premium" ? "rgba(212,168,64,0.4)" : tier === "business" ? "rgba(43,111,212,0.35)" : "rgba(0,0,0,0.15)";
  const tick =
    tier === "premium" ? "#D4A840" : tier === "business" ? "#2B6FD4" : "rgba(0,0,0,0.3)";
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7.5" cy="7.5" r="7" stroke={ring} />
      <path d="M5 7.5l2 2 3-3.5" stroke={tick} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PackageCard({ pkg, index, inView }: { pkg: Package; index: number; inView: boolean }) {
  const tier = pkg.name === "Premium" ? "premium" : pkg.name === "Business" ? "business" : "starter" as "starter" | "business" | "premium";
  const P = tier === "premium";
  const B = tier === "business";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 + index * 0.1 }}
      className={
        P
          ? "relative flex flex-col rounded-2xl overflow-hidden shadow-premium"
          : B
          ? "relative flex flex-col rounded-2xl bg-canvas overflow-hidden shadow-blue-glow"
          : "relative flex flex-col rounded-2xl bg-canvas border border-border shadow-card overflow-hidden"
      }
      style={P ? { backgroundColor: "#0D0D10" } : undefined}
    >
      {/* Top accent stripe */}
      {B && <div className="h-1 bg-blue w-full flex-shrink-0" />}
      {P && (
        <div
          className="h-1 w-full flex-shrink-0"
          style={{ background: "linear-gradient(90deg, #C49830, #F0C060, #C49830)" }}
        />
      )}

      {/* Badge */}
      {pkg.badge && (
        <div className="absolute top-5 right-5 z-10">
          {P ? (
            <span
              className="px-3 py-1 text-[10px] font-bold rounded-full tracking-wide"
              style={{ background: "rgba(212,168,64,0.12)", color: "#D4A840", border: "1px solid rgba(212,168,64,0.28)" }}
            >
              {pkg.badge}
            </span>
          ) : (
            <span className="px-3 py-1 bg-blue text-canvas text-[10px] font-bold rounded-full">
              {pkg.badge}
            </span>
          )}
        </div>
      )}

      {/* Header */}
      <div
        className="p-8 pb-6"
        style={{ borderBottom: P ? "1px solid rgba(255,255,255,0.06)" : B ? "1px solid rgba(43,111,212,0.12)" : "1px solid #E4E2DD" }}
      >
        <h3
          className="font-display text-2xl font-bold mb-1.5"
          style={P ? { color: "rgba(255,255,255,0.92)" } : { color: "#0A0A0A" }}
        >
          {pkg.name}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={P ? { color: "rgba(255,255,255,0.36)" } : { color: "#888580" }}
        >
          {pkg.tagline}
        </p>

        <div className="mt-6 flex items-baseline gap-1">
          <span
            className="font-display text-4xl font-bold tracking-tight"
            style={P ? { color: "#D4A840" } : B ? { color: "#2B6FD4" } : { color: "#0A0A0A" }}
          >
            {pkg.price}€
          </span>
          <span
            className="text-sm ml-1"
            style={P ? { color: "rgba(255,255,255,0.25)" } : { color: "#888580" }}
          >
            einmalig
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-1.5">
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              style={P ? { color: "rgba(255,255,255,0.28)" } : { color: "#888580" }}
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span
              className="text-xs font-medium"
              style={P ? { color: "rgba(255,255,255,0.28)" } : { color: "#888580" }}
            >
              {pkg.deliveryDays}
            </span>
          </div>
          {/* Klarna monthly hint */}
          <span
            className="px-2 py-0.5 rounded text-[10px] font-black text-black"
            style={{ background: "#FFB3C7" }}
            title="Ratenzahlung mit Klarna verfügbar"
          >
            Klarna
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="p-8 pt-6 flex-1 flex flex-col">
        {pkg.includesAll && (
          <div
            className="flex items-center gap-2 text-xs font-medium mb-5 pb-5"
            style={{
              borderBottom: P ? "1px solid rgba(255,255,255,0.06)" : "1px solid #E4E2DD",
              color: P ? "rgba(255,255,255,0.32)" : "#888580",
            }}
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
              className="flex items-start gap-3 text-sm"
              style={P ? { color: "rgba(255,255,255,0.58)" } : { color: "#3D3D3D" }}
            >
              <CheckIcon tier={tier} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        {P ? (
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("selectPackage", { detail: pkg.name }));
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 w-full py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-85"
            style={{ background: "linear-gradient(135deg, #C49830, #F0C060)", color: "#1A1008" }}
          >
            {pkg.cta}
          </button>
        ) : B ? (
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("selectPackage", { detail: pkg.name }));
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 w-full py-3.5 rounded-xl font-semibold text-sm bg-blue text-canvas hover:opacity-85 transition-opacity"
          >
            {pkg.cta}
          </button>
        ) : (
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("selectPackage", { detail: pkg.name }));
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 w-full py-3.5 rounded-xl font-semibold text-sm bg-canvas-warm border border-border text-ink-soft hover:border-border-strong hover:text-ink transition-colors"
          >
            {pkg.cta}
          </button>
        )}
      </div>
    </motion.div>
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
            <PackageCard key={pkg.name} pkg={pkg} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 space-y-4"
        >
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
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
              className="underline underline-offset-2 hover:text-ink transition-colors"
            >
              Individuelles Angebot anfragen
            </button>
          </p>
          {/* Payment methods */}
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <span className="text-ink-muted text-xs">Sichere Zahlung via</span>
            <div className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs font-bold" style={{ color: "#635BFF" }}>Stripe</span>
            </div>
            <span className="text-border">·</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[11px] font-black text-black" style={{ background: "#FFB3C7" }}>
                Klarna
              </span>
              <span className="text-ink-muted text-xs">Ratenzahlung verfügbar</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
