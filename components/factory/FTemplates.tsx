"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Template = {
  industry: string;
  benefit: string;
  url: string;
  brand: string;
  headline: string;
  subline: string;
  services: [string, string, string];
  cta: string;
  headerBg: string;
  accentBg: string;
  badge: string | null;
  hours: string | null;
};

const templates: Template[] = [
  {
    industry: "Café & Restaurant",
    benefit: "Speisekarte, Reservierung und Öffnungszeiten — auf einen Blick.",
    url: "cafe-bergmann.at",
    brand: "Café Bergmann",
    headline: "Frisch gebacken, täglich für Sie da",
    subline: "Frühstück · Mittagskarte · Kaffee",
    services: ["Frühstückskarte", "Mittagsmenüs", "Catering"],
    cta: "Tisch reservieren",
    headerBg: "#2C1A0E",
    accentBg: "#A0522D",
    badge: null,
    hours: "Mo–Sa  7:00 – 18:00",
  },
  {
    industry: "Installateur & Handwerker",
    benefit: "Notfallnummer prominent, Leistungen klar, Anfrage in Sekunden.",
    url: "huber-sanitaer.at",
    brand: "Huber Sanitär",
    headline: "Schnell. Zuverlässig. Vor Ort.",
    subline: "Heizung · Sanitär · Notdienst",
    services: ["Heizungsservice", "Sanitärinstallation", "Notdienst 24/7"],
    cta: "Jetzt anrufen",
    headerBg: "#1A2C42",
    accentBg: "#D4500A",
    badge: "24h Notdienst",
    hours: null,
  },
  {
    industry: "Reinigung & Gebäudeservice",
    benefit: "Vertrauen auf den ersten Blick — Leistungen, Erfahrung, Anfrageformular.",
    url: "sauber-co.at",
    brand: "Sauber & Co.",
    headline: "Sauberkeit, auf die Sie sich verlassen",
    subline: "Büro · Haushalt · Umzugsreinigung",
    services: ["Büroreinigung", "Fensterreinigung", "Umzugsreinigung"],
    cta: "Angebot anfordern",
    headerBg: "#163B2A",
    accentBg: "#2E7D52",
    badge: "15 Jahre Erfahrung",
    hours: null,
  },
  {
    industry: "Fahrradladen",
    benefit: "Sortiment, Werkstatttermine und Öffnungszeiten digital erreichbar.",
    url: "rad-und-tat.at",
    brand: "Rad & Tat",
    headline: "Ihr Fahrrad in besten Händen",
    subline: "Verkauf · Werkstatt · E-Bikes",
    services: ["E-Bikes & Räder", "Reparatur & Service", "Zubehör & Teile"],
    cta: "Werkstatttermin",
    headerBg: "#1A2B1A",
    accentBg: "#3A7A3A",
    badge: null,
    hours: "Di–Fr  9:00 – 18:00  |  Sa  9:00 – 14:00",
  },
  {
    industry: "Kosmetikstudio",
    benefit: "Online-Buchung, Behandlungsübersicht und Preise auf einen Blick.",
    url: "studio-lumiere.at",
    brand: "Studio Lumière",
    headline: "Schönheit mit Sorgfalt",
    subline: "Kosmetik · Nails · Massage",
    services: ["Gesichtsbehandlung", "Naildesign", "Massagen"],
    cta: "Termin buchen",
    headerBg: "#2E1F1F",
    accentBg: "#8B5E5E",
    badge: null,
    hours: null,
  },
  {
    industry: "Arztpraxis",
    benefit: "Sprechzeiten, Fachrichtung und Online-Termin klar kommuniziert.",
    url: "praxis-dr-mayer.at",
    brand: "Praxis Dr. Mayer",
    headline: "Ihre Hausarztpraxis in Wien",
    subline: "Allgemeinmedizin · Online Terminbuchung",
    services: ["Allgemeinmedizin", "Vorsorgeuntersuchung", "Online Termine"],
    cta: "Termin vereinbaren",
    headerBg: "#152840",
    accentBg: "#1A5C9E",
    badge: "Kasse & Privat",
    hours: null,
  },
  {
    industry: "Dachdecker & Bau",
    benefit: "Leistungen, Referenzbilder und kostenloser Kostenvoranschlag.",
    url: "dach-und-fach.at",
    brand: "Dach & Fach GmbH",
    headline: "Ihr Dach in sicheren Händen",
    subline: "Flachdach · Steildach · Klempner",
    services: ["Flachdachsanierung", "Steildachdeckung", "Klempnerarbeiten"],
    cta: "Kostenlose Beratung",
    headerBg: "#251408",
    accentBg: "#8B3A0A",
    badge: "Kostenloser Kostenvoranschlag",
    hours: null,
  },
  {
    industry: "Lokales Geschäft",
    benefit: "Sortiment zeigen, Öffnungszeiten klar, online mehr Laufkundschaft.",
    url: "stadtladen-wien.at",
    brand: "Stadtladen Wien",
    headline: "Qualität aus der Nachbarschaft",
    subline: "Regionales · Lebensmittel · Geschenke",
    services: ["Regionale Produkte", "Geschenksets", "Lieferservice Wien"],
    cta: "Zum Sortiment",
    headerBg: "#231C0E",
    accentBg: "#6B4F1A",
    badge: null,
    hours: "Mo–Sa  9:00 – 19:00",
  },
];

function MiniWebsite({ t }: { t: Template }) {
  return (
    <div className="select-none" style={{ fontSize: 0 }}>
      {/* Mini Nav */}
      <div
        style={{ fontSize: "7px" }}
        className="flex items-center justify-between px-3 py-[7px] bg-white border-b border-gray-100"
      >
        <span className="font-bold text-gray-900 truncate">{t.brand}</span>
        <div className="flex gap-2 shrink-0">
          <span className="text-gray-300">Leistungen</span>
          <span className="text-gray-300">Kontakt</span>
        </div>
      </div>

      {/* Mini Hero */}
      <div
        className="px-3 py-3.5"
        style={{ backgroundColor: t.headerBg }}
      >
        {t.badge && (
          <div
            className="inline-block rounded px-1.5 py-[3px] mb-2 font-semibold"
            style={{
              fontSize: "6px",
              backgroundColor: t.accentBg,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {t.badge}
          </div>
        )}
        <div
          className="font-bold text-white leading-tight mb-1"
          style={{ fontSize: "9.5px" }}
        >
          {t.headline}
        </div>
        <div
          className="mb-3 leading-tight"
          style={{ fontSize: "7px", color: "rgba(255,255,255,0.5)" }}
        >
          {t.subline}
        </div>
        <div
          className="inline-flex items-center rounded px-2 py-[5px] font-semibold"
          style={{
            fontSize: "7px",
            backgroundColor: t.accentBg,
            color: "rgba(255,255,255,0.95)",
          }}
        >
          {t.cta}
        </div>
      </div>

      {/* Mini Services */}
      <div className="px-3 py-3 bg-white">
        <div
          className="uppercase tracking-wider text-gray-400 mb-2"
          style={{ fontSize: "6px" }}
        >
          Unsere Leistungen
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {t.services.map((s) => (
            <div
              key={s}
              className="rounded border border-gray-100 p-1.5 bg-gray-50"
            >
              <div
                className="rounded mb-1"
                style={{
                  width: 16,
                  height: 14,
                  backgroundColor: t.accentBg,
                  opacity: 0.25,
                }}
              />
              <div
                className="font-medium text-gray-700 leading-tight"
                style={{ fontSize: "6.5px" }}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini footer / hours */}
      <div className="px-3 py-2 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
        {t.hours ? (
          <span
            className="text-gray-400"
            style={{ fontSize: "6.5px" }}
          >
            {t.hours}
          </span>
        ) : (
          <span
            className="text-gray-400"
            style={{ fontSize: "6.5px" }}
          >
            Wien · Österreich · Jetzt anfragen
          </span>
        )}
        <div
          className="rounded-full px-2 py-[3px] font-semibold"
          style={{
            fontSize: "6px",
            backgroundColor: t.headerBg,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Kontakt
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ t, index, inView }: { t: Template; index: number; inView: boolean }) {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("selectPackage", { detail: "" }));
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: 0.05 + (index % 4) * 0.07,
      }}
      className="flex flex-col group"
    >
      {/* Industry label */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block px-2.5 py-1 rounded-full border border-border bg-canvas-warm text-ink-muted text-xs font-medium">
          {t.industry}
        </span>
      </div>

      {/* Browser mockup */}
      <div className="rounded-xl overflow-hidden border border-border shadow-sm group-hover:shadow-md group-hover:border-border-strong transition-all duration-300 mb-4 flex-1">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F0EFED] border-b border-border">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#D4D0C8]" />
            <div className="w-2 h-2 rounded-full bg-[#D4D0C8]" />
            <div className="w-2 h-2 rounded-full bg-[#D4D0C8]" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-white rounded px-2 py-[3px] text-[9px] text-ink-muted font-mono truncate border border-border">
              {t.url}
            </div>
          </div>
        </div>

        {/* Mini website */}
        <MiniWebsite t={t} />
      </div>

      {/* Benefit + CTA */}
      <p className="text-ink-soft text-xs leading-relaxed mb-3">
        {t.benefit}
      </p>

      <button
        onClick={handleClick}
        className="mt-auto w-full py-2.5 rounded-lg border border-ink text-ink text-xs font-semibold hover:bg-ink hover:text-canvas transition-colors duration-200"
      >
        So ähnlich anfragen
      </button>
    </motion.div>
  );
}

export function FTemplates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
            Beispiele
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15]">
                So könnte Ihre Website
                <br />
                aussehen.
              </h2>
              <p className="mt-5 text-ink-soft text-lg leading-relaxed max-w-xl">
                Viele Betriebe wissen nicht genau, was sie brauchen. Deshalb zeigen
                wir einfache Beispiele für moderne Firmenwebsites — keine echten
                Kundenprojekte, sondern Orientierung.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="shrink-0 px-6 py-3 rounded-full bg-ink text-canvas text-sm font-semibold hover:bg-ink-soft transition-colors"
            >
              Eigene Website anfragen
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((t, i) => (
            <TemplateCard key={t.industry} t={t} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-ink-muted text-sm">
            Diese Beispiele dienen ausschließlich zur Veranschaulichung — keine echten Kundenprojekte.
            <br className="hidden sm:block" />
            Ihre Website wird individuell auf Ihren Betrieb zugeschnitten.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
