"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, useInView } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export function FCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

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
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
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
    <section id="kontakt" className="py-24 lg:py-32 bg-canvas-warm" ref={ref}>
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
              Bereit für Ihre neue Website?
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-10">
              Stellen Sie sich kurz vor. Wir melden uns innerhalb von 24 Stunden
              mit einem unverbindlichen Angebot — ohne Verpflichtung,
              ohne Kleingedrucktes.
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
                  label: "Standort",
                  value: "Wien, Österreich",
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
                className="bg-canvas rounded-2xl border border-border p-8 flex flex-col gap-5"
              >
                {/* Package selector */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Paket-Interesse (optional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Starter", "Business", "Premium", "Noch unklar"].map(
                      (pkg) => (
                        <button
                          key={pkg}
                          type="button"
                          onClick={() =>
                            setSelectedPackage(pkg === selectedPackage ? "" : pkg)
                          }
                          className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                            selectedPackage === pkg
                              ? "bg-ink text-canvas border-ink"
                              : "border-border text-ink-soft hover:border-border-strong"
                          }`}
                        >
                          {pkg}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Max Mustermann"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      Unternehmen
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Muster GmbH"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                      Telefon
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

                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-2 uppercase tracking-wide">
                    Kurze Beschreibung
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Was macht Ihr Betrieb? Was wünschen Sie sich für Ihre Website?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-ink text-sm placeholder-ink-muted focus:border-border-strong outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-xs">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-ink text-canvas rounded-xl font-semibold text-sm hover:bg-ink-soft transition-colors disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Wird gesendet …"
                    : "Unverbindlich anfragen"}
                </button>

                <p className="text-ink-muted text-xs text-center">
                  Wir melden uns innerhalb von 24 Stunden. Kein Spam,
                  keine Weitergabe Ihrer Daten.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
