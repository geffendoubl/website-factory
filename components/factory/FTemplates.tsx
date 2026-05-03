"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { templates, type Template } from "@/lib/templates";

/* ─── Photo block that sits in the hero right column ─── */
function PhotoBlock({
  bg,
  accent,
  imageBg,
  industry,
  image,
}: {
  bg: string;
  accent: string;
  imageBg: string;
  industry: string;
  image?: string;
}) {
  if (image) {
    return (
      <div
        className="relative rounded-lg overflow-hidden flex-shrink-0"
        style={{ width: 80, height: 68 }}
      >
        <Image src={image} alt={industry} fill className="object-cover" sizes="80px" />
      </div>
    );
  }

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
            style={{ background: `linear-gradient(to top, ${imageBg}, transparent)` }}
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
      {(t.phone || t.badge) && (
        <div
          className="flex items-center justify-between px-3 py-[5px]"
          style={{ backgroundColor: t.accent, fontSize: "6.5px" }}
        >
          {t.badge && <span className="font-bold text-white">{t.badge}</span>}
          {t.phone && (
            <span className="text-white font-semibold ml-auto">{t.phone}</span>
          )}
        </div>
      )}

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

      {t.image ? (
        /* Photo-backed hero — full bleed */
        <div
          className="relative"
          style={{
            height: 100,
            backgroundImage: `url(${t.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* gradient overlay — dark at bottom, subtle at top */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${t.bg}F5 0%, ${t.bg}99 45%, ${t.bg}44 75%, transparent 100%)`,
            }}
          />
          {/* Text anchored to bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
            <div
              className="font-bold text-white leading-tight mb-1"
              style={{ fontSize: "9px", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              {t.headline}
            </div>
            <div
              className="mb-2"
              style={{ fontSize: "6px", color: "rgba(255,255,255,0.65)" }}
            >
              {t.tagline}
            </div>
            <div className="flex gap-1.5 items-center">
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
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {t.secondaryCta}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Default split hero */
        <div
          className="flex items-center gap-3 px-3 py-4"
          style={{ backgroundColor: t.bg }}
        >
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
          <PhotoBlock bg={t.bg} accent={t.accent} imageBg={t.imageBg} industry={t.industry} />
        </div>
      )}

      {/* Photo strip when multiple images are available */}
      {t.image && t.image2 && (
        <div
          className="grid gap-0.5"
          style={{
            height: 38,
            gridTemplateColumns: t.image3 ? "1fr 1fr 1fr" : "1fr 1fr",
          }}
        >
          {[t.image, t.image2, ...(t.image3 ? [t.image3] : [])].map((src, i) => (
            <div
              key={i}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      )}

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
              <div
                className="rounded mb-1.5"
                style={{ width: 16, height: 14, backgroundColor: t.accent, opacity: 0.18 }}
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
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-1 rounded-full border border-border bg-canvas-warm text-ink-muted text-xs font-medium">
          {t.industry}
        </span>
      </div>

      <Link
        href={`/vorlagen/${t.slug}`}
        className="block rounded-xl overflow-hidden border border-border shadow-sm group-hover:shadow-lg group-hover:border-border-strong transition-all duration-300 mb-4 relative"
      >
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
        <MiniWebsite t={t} />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-canvas-dark/0 group-hover:bg-canvas-dark/60 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-canvas text-ink text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
            Vollständige Vorschau ansehen →
          </span>
        </div>
      </Link>

      <p className="text-ink-soft text-sm leading-relaxed mb-3 flex-1">
        {t.benefit}
      </p>

      <Link
        href={`/vorlagen/${t.slug}`}
        className="w-full py-2.5 rounded-lg border border-ink text-ink text-xs font-semibold hover:bg-ink hover:text-canvas transition-colors duration-200 text-center"
      >
        Vorschau ansehen
      </Link>
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
                Klicken Sie auf ein Beispiel, um die vollständige Vorschau zu sehen — und zu verstehen, was für Ihren Betrieb möglich ist.
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
          Alle Beispiele dienen der Veranschaulichung — keine echten Kundenprojekte. Ihre Website wird individuell auf Ihren Betrieb zugeschnitten.
        </motion.p>
      </div>
    </section>
  );
}
