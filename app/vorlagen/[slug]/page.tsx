import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { templates, getTemplateBySlug, type Template } from "@/lib/templates";
import { TemplateBanner } from "@/components/vorlagen/TemplateBanner";

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTemplateBySlug(slug);
  if (!t) return {};
  return {
    title: `${t.brand} — Beispiel-Website von Geffen FlexCo`,
    description: `So könnte eine professionelle Website für ${t.industry} aussehen. Erstellt von Geffen FlexCo, Wien.`,
  };
}

/* ─── Fake website nav ─── */
function FakeNav({ t }: { t: Template }) {
  return (
    <nav className="bg-white border-b border-[#E5E5E5] sticky top-[52px] z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl text-gray-900">{t.brand}</span>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-gray-500 text-sm">Leistungen</span>
          <span className="text-gray-500 text-sm">Über uns</span>
          <span className="text-gray-500 text-sm">Kontakt</span>
          <a
            href="/#kontakt"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: t.accent }}
          >
            {t.cta}
          </a>
        </div>
        {/* Mobile */}
        <a
          href="/#kontakt"
          className="md:hidden px-4 py-2 rounded-full text-white text-sm font-semibold"
          style={{ backgroundColor: t.accent }}
        >
          {t.cta}
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function FakeHero({ t }: { t: Template }) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: t.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid gap-12 items-center ${t.image ? "lg:grid-cols-2" : ""}`}>
          <div className={t.image ? "" : "max-w-2xl"}>
            {t.badge && (
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-6"
                style={{ backgroundColor: `${t.accent}cc` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {t.badge}
              </div>
            )}
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: t.accent }}>
              {t.tagline}
            </p>
            <h1
              className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.headline}
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              {t.subline}
            </p>
            {t.phone && (
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${t.accent}33` }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: t.accent }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">{t.phone}</span>
              </div>
            )}
            <div className="flex flex-wrap gap-3">
              <a
                href="/#kontakt"
                className="px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-85"
                style={{ backgroundColor: t.accent }}
              >
                {t.cta}
              </a>
              <a
                href="/#kontakt"
                className="px-7 py-3.5 rounded-xl font-semibold text-base transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}
              >
                {t.secondaryCta}
              </a>
            </div>
          </div>

          {/* Real photo when available */}
          {t.image && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
              <Image
                src={t.image}
                alt={t.brand}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Subtle dark overlay at bottom edge for blend */}
              <div
                className="absolute inset-x-0 bottom-0 h-24"
                style={{ background: `linear-gradient(to top, ${t.bg}99, transparent)` }}
              />
            </div>
          )}
        </div>

        {/* Trust pills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {t.trust.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: t.accent }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function FakeServices({ t }: { t: Template }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: t.accent }}>
            Unsere Leistungen
          </p>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900" style={{ fontFamily: "Georgia, serif" }}>
            Was wir für Sie tun.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.services.map((s, i) => (
            <div
              key={s.label}
              className="p-7 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-lg font-bold text-white"
                style={{ backgroundColor: t.accent }}
              >
                {i + 1}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{s.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.detail}</p>
              {s.price && (
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${t.accent}18`, color: t.accent }}
                >
                  {s.price}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: t.accent }}
          >
            {t.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function FakeAbout({ t }: { t: Template }) {
  return (
    <section className="py-20" style={{ backgroundColor: "#F4F3F0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: t.accent }}>
              Über uns
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Warum {t.brand}?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.about}</p>
            {t.hours && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0" style={{ color: t.accent }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Öffnungszeiten</div>
                  <div className="text-gray-700 text-sm font-medium">{t.hours}</div>
                </div>
              </div>
            )}
          </div>

          {t.image2 || t.image ? (
            <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ height: 360 }}>
              <Image
                src={t.image2 ?? t.image!}
                alt={t.brand}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {t.trust.map((item, i) => (
                <div
                  key={item}
                  className={`p-5 rounded-2xl bg-white border border-gray-100 ${i === 0 ? "col-span-2" : ""}`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${t.accent}18` }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.accent }} />
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Photo strip (two images side by side) ─── */
function PhotoStrip({ image, image2, brand }: { image: string; image2: string; brand: string }) {
  return (
    <div className="grid grid-cols-2 gap-1" style={{ height: 320 }}>
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={brand}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="50vw"
        />
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={image2}
          alt={brand}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          sizes="50vw"
        />
      </div>
    </div>
  );
}

/* ─── CTA section ─── */
function FakeCTA({ t }: { t: Template }) {
  return (
    <section className="py-20" style={{ backgroundColor: t.bg }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="font-bold text-3xl md:text-4xl text-white mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Bereit loszulegen?
        </h2>
        <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
          Kontaktieren Sie uns — wir melden uns innerhalb von 24 Stunden.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {t.phone && (
            <a
              href={`tel:${t.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-base"
              style={{ backgroundColor: t.accent }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
              </svg>
              {t.phone}
            </a>
          )}
          <a
            href={`mailto:${t.email}`}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {t.email}
          </a>
        </div>
        <div className="mt-8 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          {t.address}
        </div>
      </div>
    </section>
  );
}

/* ─── Fake footer ─── */
function FakeFooter({ t }: { t: Template }) {
  return (
    <footer className="py-10 border-t" style={{ backgroundColor: t.bg, borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-white mb-1">{t.brand}</div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{t.address}</div>
        </div>
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          Website erstellt von{" "}
          <Link href="/" className="underline underline-offset-2 hover:opacity-60 transition-opacity" style={{ color: "rgba(255,255,255,0.45)" }}>
            Geffen FlexCo
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ─── What we need section ─── */
function WhatWeNeed({ t }: { t: Template }) {
  const required = [
    { icon: "🏷️", label: "Unternehmensname & Kurzbeschreibung", note: "Was macht Ihr Betrieb? Was macht ihn besonders?" },
    { icon: "🖼️", label: "Logo", note: "JPG oder PNG — falls keins vorhanden, erstellen wir ein Text-Logo." },
    { icon: "📞", label: "Kontaktdaten", note: "Telefon, E-Mail-Adresse und physische Adresse." },
    { icon: "🕐", label: "Öffnungszeiten", note: "Wann sind Sie erreichbar?" },
    { icon: "📋", label: "Leistungsliste", note: "Was bieten Sie an? Kurze Beschreibungen und ggf. Preise." },
    { icon: "📸", label: "3–5 Fotos", note: "Ihr Geschäft, Ihre Arbeit, Ihr Team. Kein Profi nötig — wir helfen bei der Auswahl. Optional: Fotoshooting buchbar." },
  ];

  const optional = [
    "Preisliste oder Speisekarte (PDF oder Text)",
    "Bestehende Texte oder Inhalte von alter Website",
    "Google-Bewertungslink",
    "Instagram- oder Facebook-Account",
    "Gewünschte Farbwelt oder Referenz-Websites",
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Divider with context */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-[#E4E2DD]" />
          <span className="text-ink-muted text-xs font-medium uppercase tracking-widest whitespace-nowrap px-2">
            Von Ihnen zu uns
          </span>
          <div className="h-px flex-1 bg-[#E4E2DD]" />
        </div>

        <div className="mb-10">
          <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
            Was wir von Ihnen brauchen
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.15] mb-5">
            Das ist alles, was Sie
            <br />
            mitbringen müssen.
          </h2>
          <p className="text-ink-soft text-lg leading-relaxed max-w-xl">
            Kein technisches Wissen, keine Vorbereitung. Sie erzählen uns, wer Sie sind —
            wir erledigen den Rest. Das ist alles, was wir benötigen:
          </p>
        </div>

        {/* Required */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {required.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 p-5 rounded-2xl border border-border bg-canvas-warm"
            >
              <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <div className="font-semibold text-ink text-sm mb-1">{item.label}</div>
                <div className="text-ink-muted text-sm leading-relaxed">{item.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional */}
        <div className="p-6 rounded-2xl border border-border bg-canvas mb-12">
          <p className="text-ink-muted text-xs font-semibold uppercase tracking-widest mb-4">
            Optional — falls vorhanden
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {optional.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5 text-ink-muted">
                  <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.3" />
                  <path d="M4.5 7l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 md:p-10 text-center"
          style={{ backgroundColor: t.bg }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
            Bereit für Ihre eigene Website?
          </h3>
          <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            Schreiben Sie uns kurz — wir melden uns innerhalb von 24 Stunden mit einer klaren Einschätzung.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#kontakt"
              className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: t.accent }}
            >
              Website anfragen
            </Link>
            <Link
              href="/#pakete"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Pakete & Preise ansehen
            </Link>
          </div>
          <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Einmaliger Fixpreis · Keine versteckten Kosten · Antwort in 24h
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTemplateBySlug(slug);

  if (!t) notFound();

  return (
    <>
      <TemplateBanner industry={t.industry} />
      <FakeNav t={t} />
      <FakeHero t={t} />
      <FakeServices t={t} />
      {t.image && t.image2 && <PhotoStrip image={t.image} image2={t.image2} brand={t.brand} />}
      <FakeAbout t={t} />
      <FakeCTA t={t} />
      <FakeFooter t={t} />
      <WhatWeNeed t={t} />
    </>
  );
}
