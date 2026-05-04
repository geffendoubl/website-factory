"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, useInView } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

const industries = [
  "Bäckerei",
  "Café & Restaurant",
  "Installateur & Handwerker",
  "Reinigung & Gebäudeservice",
  "Fahrradladen",
  "Kosmetikstudio",
  "Arztpraxis",
  "Dachdecker & Bau",
  "Lokales Geschäft",
  "Sonstiges",
];

function PillGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt === value ? "" : opt)}
          className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
            value === opt
              ? "bg-blue text-canvas border-blue"
              : "border-border text-ink-soft hover:border-border-strong"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function FCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [branche, setBranche] = useState("");
  const [hasWebsite, setHasWebsite] = useState("");
  const [wantsPhotos, setWantsPhotos] = useState("");
  const [contactPref, setContactPref] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      setSelectedPackage((e as CustomEvent<string>).detail ?? "");
    };
    window.addEventListener("selectPackage", handler);
    return () => window.removeEventListener("selectPackage", handler);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      branche,
      hasWebsite,
      wantsPhotos,
      contactPref,
      package: selectedPackage,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Unbekannter Fehler");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <section id="kontakt" className="relative py-24 lg:py-32 bg-canvas-warm" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] mb-6">
              Schreiben Sie kurz,
              <br />was Sie brauchen.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-10">
              Wir melden uns mit einer klaren Einschätzung — was sinnvoll ist,
              was es kostet und wie schnell es geht. Kein Verkaufsgespräch,
              keine Verpflichtung.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "+43 660 123 4567",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "E-Mail",
                  value: "sam@geffen.de",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Büro",
                  value: "Neustiftgasse 106/2/11, 1070 Wien",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+43 660 123 4567",
                  href: "https://wa.me/436601234567",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-canvas border border-border flex items-center justify-center text-ink-soft flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-ink-muted text-xs">{item.label}</div>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink text-sm font-medium hover:text-ink-soft transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-ink text-sm font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Meet booking */}
            <a
              href="https://meet.google.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 p-4 rounded-xl border border-border bg-canvas hover:border-border-strong hover:shadow-card transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-canvas-warm border border-border flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="1" y="1" width="8" height="8" rx="1.5" fill="#4285F4" />
                  <rect x="11" y="1" width="8" height="8" rx="1.5" fill="#34A853" />
                  <rect x="1" y="11" width="8" height="8" rx="1.5" fill="#FBBC05" />
                  <rect x="11" y="11" width="8" height="8" rx="1.5" fill="#EA4335" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-ink text-sm font-semibold group-hover:text-ink-soft transition-colors">
                  Gespräch direkt buchen
                </div>
                <div className="text-ink-muted text-xs">via Google Meet · kostenlos & unverbindlich</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-muted group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Google Maps */}
            <div className="mt-4 rounded-2xl overflow-hidden border border-border shadow-card">
              <iframe
                src="https://www.google.com/maps?q=Neustiftgasse+106,+1070+Wien,+Austria&output=embed&hl=de&z=16"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Webflix Büro — Neustiftgasse 106, 1070 Wien"
              />
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {status === "success" ? (
              <div className="bg-canvas rounded-2xl border border-border p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-canvas-warm border border-border flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-ink mb-3">
                  Nachricht gesendet.
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed max-w-xs mx-auto">
                  Vielen Dank. Wir melden uns innerhalb von 24 Stunden bei
                  Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-canvas rounded-2xl border border-border p-8 flex flex-col gap-6"
              >
                {/* Package selector */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Paket-Interesse (optional)
                  </label>
                  <PillGroup
                    options={["Starter", "Business", "Premium", "Noch unklar"]}
                    value={selectedPackage}
                    onChange={setSelectedPackage}
                  />
                </div>

                <div className="h-px bg-border" />

                {/* Firmenname + Ansprechpartner */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      Firmenname *
                    </label>
                    <input
                      name="company"
                      required
                      type="text"
                      placeholder="Muster GmbH"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      Ansprechpartner *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Telefon + E-Mail */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      Telefonnummer
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+43 660 …"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      E-Mail *
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="max@beispiel.at"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Branche */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Branche auswählen
                  </label>
                  <select
                    value={branche}
                    onChange={(e) => setBranche(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm focus:border-border-strong outline-none transition-colors appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888580' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="">Bitte wählen …</option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                {/* Haben Sie bereits eine Website? */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Haben Sie bereits eine Website?
                  </label>
                  <PillGroup
                    options={["Ja", "Nein"]}
                    value={hasWebsite}
                    onChange={setHasWebsite}
                  />
                </div>

                {/* Fotos */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Möchten Sie, dass wir auch Fotos machen?
                  </label>
                  <PillGroup
                    options={["Ja", "Nein"]}
                    value={wantsPhotos}
                    onChange={setWantsPhotos}
                  />
                </div>

                {/* Bevorzugter Kontakt */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Bevorzugter Kontakt
                  </label>
                  <PillGroup
                    options={["Rückruf", "WhatsApp", "Vor-Ort-Termin"]}
                    value={contactPref}
                    onChange={setContactPref}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-xs">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-blue text-canvas rounded-xl font-semibold text-sm hover:opacity-85 transition-opacity disabled:opacity-60"
                >
                  {status === "loading" ? "Wird gesendet …" : "Anfrage absenden"}
                </button>

                <div className="flex flex-col items-center gap-2">
                  <p className="text-ink-muted text-xs text-center">
                    Antwort innerhalb von 24 Stunden. Ihre Daten werden nicht weitergegeben.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <div className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span className="text-xs font-bold" style={{ color: "#635BFF" }}>Stripe</span>
                    </div>
                    <span className="text-border text-xs">·</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-black text-black" style={{ background: "#FFB3C7" }}>
                      Klarna
                    </span>
                    <span className="text-ink-muted text-xs">Ratenzahlung möglich</span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(244,243,240,0), #1A1008)" }} />
    </section>
  );
}
