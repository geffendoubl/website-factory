"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Template = {
  industry: string;
  benefit: string;
  url: string;
  brand: string;
  tagline: string;
  headline: string;
  subline: string;
  phone: string | null;
  services: { label: string; detail: string }[];
  cta: string;
  secondaryCta: string;
  bg: string;
  accent: string;
  imageBg: string;
  badge: string | null;
  hours: string | null;
  trust: string[];
};

const templates: Template[] = [
  {
    industry: "Café & Restaurant",
    benefit: "Speisekarte, Reservierung und Öffnungszeiten — auf einen Blick.",
    url: "cafe-bergmann.at",
    brand: "Café Bergmann",
    tagline: "Frühstück · Mittagskarte · Kaffee",
    headline: "Frisch gebacken, täglich für Sie da",
    subline: "Warme Speisen, hausgemachte Kuchen und der beste Kaffee im Grätzl.",
    phone: null,
    services: [
      { label: "Frühstückskarte", detail: "tägl. ab 7:00 Uhr" },
      { label: "Mittagsmenü", detail: "Mo–Fr · ab 11:30" },
      { label: "Catering & Events", detail: "auf Anfrage" },
    ],
    cta: "Tisch reservieren",
    secondaryCta: "Speisekarte ansehen",
    bg: "#2A1A0E",
    accent: "#B5622A",
    imageBg: "#5C3317",
    badge: null,
    hours: "Mo–Sa  7:00–18:00  ·  So  8:00–14:00",
    trust: ["Seit 2009", "Wien, 7. Bezirk"],
  },
  {
    industry: "Installateur & Handwerker",
    benefit: "Notfallnummer prominent, Leistungen klar, Anfrage in Sekunden.",
    url: "huber-sanitaer.at",
    brand: "Huber Sanitär",
    tagline: "Heizung · Sanitär · Notdienst",
    headline: "Schnell. Zuverlässig. Vor Ort.",
    subline: "Installationen, Wartung und 24h-Notdienst für Wien und Umgebung.",
    phone: "+43 1 234 5678",
    services: [
      { label: "Heizungsservice", detail: "Wartung & Reparatur" },
      { label: "Sanitärinstallation", detail: "Bad, Küche, WC" },
      { label: "Notdienst 24/7", detail: "auch am Wochenende" },
    ],
    cta: "Jetzt anrufen",
    secondaryCta: "Anfrage senden",
    bg: "#192840",
    accent: "#D4500A",
    imageBg: "#253A55",
    badge: "24h Notdienst",
    hours: null,
    trust: ["Meisterbetrieb", "Wien & Niederösterreich"],
  },
  {
    industry: "Reinigung & Gebäudeservice",
    benefit: "Vertrauen auf den ersten Blick — Leistungen, Erfahrung, Anfrageformular.",
    url: "sauber-co.at",
    brand: "Sauber & Co.",
    tagline: "Büro · Haushalt · Umzugsreinigung",
    headline: "Sauberkeit, auf die Sie sich verlassen",
    subline: "Professionelle Reinigungsdienstleistungen für Betriebe und Privatkunden.",
    phone: "+43 664 123 4567",
    services: [
      { label: "Büroreinigung", detail: "tägl. oder wöchentl." },
      { label: "Fensterreinigung", detail: "innen & außen" },
      { label: "Umzugsreinigung", detail: "inkl. Besenrein" },
    ],
    cta: "Angebot anfordern",
    secondaryCta: "Alle Leistungen",
    bg: "#163B2A",
    accent: "#28A060",
    imageBg: "#1E5038",
    badge: "15 Jahre Erfahrung",
    hours: "Mo–Fr  7:00–17:00",
    trust: ["Versichert & zertifiziert", "Wien & Umgebung"],
  },
  {
    industry: "Fahrradladen",
    benefit: "Sortiment, Werkstatttermine und Öffnungszeiten digital erreichbar.",
    url: "rad-und-tat.at",
    brand: "Rad & Tat",
    tagline: "Verkauf · Werkstatt · E-Bikes",
    headline: "Ihr Fahrrad in besten Händen",
    subline: "Verkauf, Service und Reparatur für alle Fahrradtypen — E-Bikes, City, Rennrad.",
    phone: null,
    services: [
      { label: "E-Bikes & Räder", detail: "alle Marken & Typen" },
      { label: "Werkstatt & Service", detail: "Termin online buchen" },
      { label: "Zubehör & Ersatzteile", detail: "großes Lager" },
    ],
    cta: "Werkstatttermin",
    secondaryCta: "Sortiment ansehen",
    bg: "#1A2B1A",
    accent: "#3D8B3D",
    imageBg: "#243C24",
    badge: null,
    hours: "Di–Fr  9–18  ·  Sa  9–14",
    trust: ["Fachhandel seit 1998", "Wien, 15. Bezirk"],
  },
  {
    industry: "Kosmetikstudio",
    benefit: "Online-Buchung, Behandlungsübersicht und Preisliste auf einen Blick.",
    url: "studio-lumiere.at",
    brand: "Studio Lumière",
    tagline: "Kosmetik · Nails · Massage",
    headline: "Schönheit mit Sorgfalt",
    subline: "Individuelle Behandlungen in ruhiger Atmosphäre — nach Terminvereinbarung.",
    phone: null,
    services: [
      { label: "Gesichtsbehandlung", detail: "ab 55€ · 60 Min." },
      { label: "Naildesign", detail: "Gel, Acryl, Naturpflege" },
      { label: "Massagen", detail: "Rücken, Ganzkörper" },
    ],
    cta: "Termin buchen",
    secondaryCta: "Preisliste ansehen",
    bg: "#2E1E1E",
    accent: "#9B6060",
    imageBg: "#4A2E2E",
    badge: null,
    hours: "Di–Sa nach Vereinbarung",
    trust: ["Zertifizierte Kosmetikerin", "Wien, 1080"],
  },
  {
    industry: "Arztpraxis",
    benefit: "Sprechzeiten, Fachrichtung und Online-Termin klar und sofort sichtbar.",
    url: "praxis-dr-mayer.at",
    brand: "Dr. med. Mayer",
    tagline: "Allgemeinmedizin · Hausarzt",
    headline: "Ihre Hausarztpraxis in Wien",
    subline: "Persönliche Betreuung, kurze Wartezeiten und Online-Terminbuchung.",
    phone: "+43 1 876 5432",
    services: [
      { label: "Allgemeinmedizin", detail: "Kasse & Privat" },
      { label: "Vorsorgeuntersuchung", detail: "inkl. Blutbild" },
      { label: "Online Terminbuchung", detail: "rund um die Uhr" },
    ],
    cta: "Termin vereinbaren",
    secondaryCta: "Sprechzeiten",
    bg: "#132238",
    accent: "#1A6BB5",
    imageBg: "#1E3A5F",
    badge: "Kasse & Privat",
    hours: "Mo Di Do  8–12 & 14–17  ·  Fr  8–12",
    trust: ["Seit 2005 in Wien", "Barrierefreier Zugang"],
  },
  {
    industry: "Dachdecker & Bau",
    benefit: "Leistungen, Referenzfotos und kostenlose Beratung sofort buchbar.",
    url: "dach-und-fach.at",
    brand: "Dach & Fach GmbH",
    tagline: "Flachdach · Steildach · Klempner",
    headline: "Ihr Dach in sicheren Händen",
    subline: "Qualitätsarbeit auf jedem Dach — Neubau, Sanierung, Reparatur, Klempner.",
    phone: "+43 676 555 0123",
    services: [
      { label: "Flachdachsanierung", detail: "inkl. Abdichtung" },
      { label: "Steildachdeckung", detail: "Ziegel, Schiefer, Blech" },
      { label: "Klempnerarbeiten", detail: "Rinnen, Fallrohre" },
    ],
    cta: "Kostenlose Beratung",
    secondaryCta: "Referenzen ansehen",
    bg: "#221208",
    accent: "#A84010",
    imageBg: "#3A2010",
    badge: "Kostenloser Kostenvoranschlag",
    hours: null,
    trust: ["Meisterbetrieb", "Wien & Umgebung"],
  },
  {
    industry: "Lokales Geschäft",
    benefit: "Sortiment zeigen, Öffnungszeiten klar — mehr Laufkundschaft online.",
    url: "stadtladen-wien.at",
    brand: "Stadtladen Wien",
    tagline: "Regionales · Lebensmittel · Geschenke",
    headline: "Qualität aus der Nachbarschaft",
    subline: "Regionale Produkte, frische Waren und liebevoll zusammengestellte Geschenkkörbe.",
    phone: null,
    services: [
      { label: "Regionale Produkte", detail: "tägl. frische Lieferung" },
      { label: "Geschenkkörbe", detail: "individuell zusammengestellt" },
      { label: "Lieferservice Wien", detail: "ab 25€ Bestellwert" },
    ],
    cta: "Zum Sortiment",
    secondaryCta: "Öffnungszeiten",
    bg: "#211A0A",
    accent: "#7A5A1E",
    imageBg: "#3A2E10",
    badge: null,
    hours: "Mo–Fr  9–19  ·  Sa  9–17",
    trust: ["Familienbetrieb seit 1987", "Wien, 1060"],
  },
];

/* ─── Photo block that sits in the hero right column ─── */
function PhotoBlock({
  bg,
  accent,
  imageBg,
  industry,
}: {
  bg: string;
  accent: string;
  imageBg: string;
  industry: string;
}) {
  // Subtle scene lines vary by industry type
  const isFood = industry.includes("Café") || industry.includes("Geschäft");
  const isMedical = industry.includes("Arzt");
  const isOutdoor = industry.includes("Dach") || industry.includes("Fahr");

  return (
    <div
      className="relative rounded-lg overflow-hidden flex-shrink-0"
      style={{
        width: 80,
        height: 68,
        backgroundColor: imageBg,
        backgroundImage: `linear-gradient(145deg, ${accent}55 0%, ${imageBg} 60%, ${bg} 100%)`,
      }}
    >
      {/* Simulated scene content */}
      {isFood && (
        <>
          <div className="absolute inset-x-3 top-3 h-3 rounded-sm opacity-30 bg-white" />
          <div className="absolute inset-x-5 top-8 h-1.5 rounded-sm opacity-20 bg-white" />
          <div className="absolute bottom-2 left-3 right-3 h-5 rounded-sm opacity-15 bg-white" />
        </>
      )}
      {isMedical && (
        <>
          <div className="absolute left-3 top-3 w-8 h-8 rounded-full opacity-20 bg-white" />
          <div className="absolute right-3 top-4 w-5 h-5 rounded-full opacity-15 bg-white" />
          <div className="absolute bottom-3 left-3 right-3 h-2 rounded-sm opacity-20 bg-white" />
        </>
      )}
      {isOutdoor && (
        <>
          <div className="absolute inset-x-0 top-0 h-10 opacity-10 bg-white" />
          <div
            className="absolute inset-x-0 bottom-0 h-6"
            style={{
              background: `linear-gradient(to top, ${imageBg}, transparent)`,
            }}
          />
          <div className="absolute inset-x-3 top-3 h-5 rounded-t-lg opacity-25 bg-white" />
        </>
      )}
      {!isFood && !isMedical && !isOutdoor && (
        <>
          <div className="absolute inset-x-3 top-3 bottom-3 rounded opacity-15 bg-white" />
          <div className="absolute left-4 top-4 w-3 h-3 rounded-full opacity-30 bg-white" />
        </>
      )}
      {/* Subtle caption bar at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 px-2 py-1"
        style={{ background: "rgba(0,0,0,0.35)" }}
      >
        <div className="h-1 rounded-full opacity-50 bg-white" style={{ width: "60%" }} />
      </div>
    </div>
  );
}

/* ─── Full mini website ─── */
function MiniWebsite({ t }: { t: Template }) {
  return (
    <div className="select-none overflow-hidden" style={{ fontSize: 0 }}>

      {/* ── Top info bar (phone / badge) ── */}
      {(t.phone || t.badge) && (
        <div
          className="flex items-center justify-between px-3 py-[5px]"
          style={{ backgroundColor: t.accent, fontSize: "6.5px" }}
        >
          {t.badge && (
            <span className="font-bold text-white">{t.badge}</span>
          )}
          {t.phone && (
            <span className="text-white font-semibold ml-auto">{t.phone}</span>
          )}
        </div>
      )}

      {/* ── Nav ── */}
      <div
        className="flex items-center justify-between px-3 py-[7px] bg-white border-b"
        style={{ borderColor: "#EBEBEB", fontSize: "7px" }}
      >
        <span className="font-bold text-gray-900">{t.brand}</span>
        <div className="flex items-center gap-2.5">
          <span className="text-gray-400">Leistungen</span>
          <span className="text-gray-400">Über uns</span>
          <span
            className="px-2 py-[3px] rounded-full text-white font-semibold"
            style={{ backgroundColor: t.accent }}
          >
            {t.secondaryCta}
          </span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div
        className="flex items-center gap-3 px-3 py-4"
        style={{ backgroundColor: t.bg }}
      >
        {/* Left: text */}
        <div className="flex-1 min-w-0">
          <div
            className="mb-1.5 leading-tight text-white font-bold"
            style={{ fontSize: "9px" }}
          >
            {t.headline}
          </div>
          <div
            className="mb-1 leading-tight"
            style={{ fontSize: "6.5px", color: "rgba(255,255,255,0.55)" }}
          >
            {t.tagline}
          </div>
          <div
            className="mb-3 leading-relaxed"
            style={{ fontSize: "6px", color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}
          >
            {t.subline}
          </div>
          <div className="flex gap-1.5 items-center flex-wrap">
            <div
              className="px-2 py-[4px] rounded text-white font-semibold"
              style={{ fontSize: "6.5px", backgroundColor: t.accent }}
            >
              {t.cta}
            </div>
            <div
              className="px-2 py-[3.5px] rounded border font-medium"
              style={{
                fontSize: "6px",
                borderColor: "rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {t.secondaryCta}
            </div>
          </div>
        </div>

        {/* Right: photo block */}
        <PhotoBlock
          bg={t.bg}
          accent={t.accent}
          imageBg={t.imageBg}
          industry={t.industry}
        />
      </div>

      {/* ── Trust strip ── */}
      <div
        className="flex items-center gap-3 px-3 py-1.5 border-b"
        style={{ backgroundColor: "#FAFAFA", borderColor: "#EFEFEF", fontSize: "6px" }}
      >
        {t.trust.map((item) => (
          <span key={item} className="flex items-center gap-1 text-gray-500">
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ backgroundColor: t.accent }}
            />
            {item}
          </span>
        ))}
      </div>

      {/* ── Services ── */}
      <div className="px-3 py-3 bg-white">
        <div
          className="uppercase tracking-widest text-gray-400 mb-2"
          style={{ fontSize: "5.5px" }}
        >
          Unsere Leistungen
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {t.services.map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-2 border"
              style={{ borderColor: "#EFEFEF", backgroundColor: "#FAFAFA" }}
            >
              {/* Colored icon dot */}
              <div
                className="rounded mb-1.5"
                style={{
                  width: 16,
                  height: 14,
                  backgroundColor: t.accent,
                  opacity: 0.18,
                }}
              />
              <div
                className="font-semibold text-gray-800 leading-tight"
                style={{ fontSize: "6.5px" }}
              >
                {s.label}
              </div>
              <div
                className="text-gray-400 mt-0.5 leading-tight"
                style={{ fontSize: "5.5px" }}
              >
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer / hours ── */}
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ backgroundColor: t.bg, fontSize: "6px" }}
      >
        <span style={{ color: "rgba(255,255,255,0.35)" }}>
          {t.hours ?? "Wien · Österreich"}
        </span>
        <div
          className="px-2 py-[3px] rounded-full font-semibold"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
            fontSize: "5.5px",
          }}
        >
          Kontakt
        </div>
      </div>
    </div>
  );
}

/* ─── Card wrapper ─── */
function TemplateCard({
  t,
  index,
  inView,
}: {
  t: Template;
  index: number;
  inView: boolean;
}) {
  const handleClick = () => {
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
        <span className="px-2.5 py-1 rounded-full border border-border bg-canvas-warm text-ink-muted text-xs font-medium">
          {t.industry}
        </span>
      </div>

      {/* Browser mockup */}
      <div className="rounded-xl overflow-hidden border border-border shadow-sm group-hover:shadow-lg group-hover:border-border-strong transition-all duration-300 mb-4">
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#EDECEB] border-b border-[#DDDBD7]">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#D6D3CB]" />
            <div className="w-2 h-2 rounded-full bg-[#D6D3CB]" />
            <div className="w-2 h-2 rounded-full bg-[#D6D3CB]" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-white rounded px-2 py-[3px] text-[9px] text-ink-muted font-mono truncate border border-[#E4E2DE]">
              {t.url}
            </div>
          </div>
        </div>

        {/* Mini website */}
        <MiniWebsite t={t} />
      </div>

      {/* Benefit text */}
      <p className="text-ink-soft text-sm leading-relaxed mb-3 flex-1">
        {t.benefit}
      </p>

      {/* CTA */}
      <button
        onClick={handleClick}
        className="w-full py-2.5 rounded-lg border border-ink text-ink text-xs font-semibold hover:bg-ink hover:text-canvas transition-colors duration-200"
      >
        So ähnlich anfragen
      </button>
    </motion.div>
  );
}

/* ─── Section ─── */
export function FTemplates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 bg-canvas-warm" ref={ref}>
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
                Echte Betriebe in Wien und Österreich haben oft keine oder eine
                veraltete Website. Diese Beispiele zeigen, wie eine saubere,
                professionelle Firmenwebsite aussehen kann.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="shrink-0 px-6 py-3 rounded-full bg-ink text-canvas text-sm font-semibold hover:opacity-80 transition-opacity"
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center text-ink-muted text-sm"
        >
          Alle Beispiele dienen der Veranschaulichung — keine echten
          Kundenprojekte. Ihre Website wird individuell auf Ihren Betrieb
          zugeschnitten.
        </motion.p>
      </div>
    </section>
  );
}
