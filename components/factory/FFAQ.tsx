"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Wie lange dauert die Erstellung?",
    a: "Das Starter-Paket ist in der Regel in 5–7 Werktagen fertig, das Business-Paket in 7–10 Werktagen. Das setzt voraus, dass die notwendigen Inhalte — Logo, Texte, ein paar Fotos — zeitnah vorliegen. Beim Premium-Paket priorisieren wir die Umsetzung.",
  },
  {
    q: "Muss ich Texte selbst schreiben?",
    a: "Nein. Sie erzählen uns, was Ihr Betrieb macht und was Sie Ihren Kunden mitteilen wollen — wir formulieren daraus die fertigen Texte. Beim Business- und Premium-Paket ist eine stärkere Texteinarbeitung inklusive.",
  },
  {
    q: "Können Sie auch Fotos machen?",
    a: "Ja. Business-Fotografie ist ein optionales Add-on. Basic Visit (€150) umfasst 15–20 bearbeitete Fotos, Full Visit (€300) ein komplettes Bilderset mit 30+ Aufnahmen. Wir kommen direkt zu Ihnen vor Ort.",
  },
  {
    q: "Was ist mit Domain und Hosting?",
    a: "Das Business-Paket beinhaltet Domain- und Launch-Unterstützung. Wir richten alles für Sie ein und erklären, was Sie wissen müssen. Optional übernehmen wir mit unserem Betreuungspaket auch den laufenden Betrieb.",
  },
  {
    q: "Gibt es laufende monatliche Kosten?",
    a: "Die Pakete sind einmalige Fixpreise (490€, 890€ oder 1.390€). Laufende Kosten entstehen optional durch unser Betreuungspaket ab €39/Monat — inklusive Hosting, Sicherheit, Backups und kleinen Änderungen. Alles wird transparent besprochen.",
  },
  {
    q: "Kann ich die Website später selbst bearbeiten?",
    a: "Ja, das ist möglich. Ob und wie Sie Inhalte selbst aktualisieren können, besprechen wir beim ersten Gespräch — je nach Paket und Ihren Wünschen richten wir das entsprechend ein.",
  },
  {
    q: "Arbeiten Sie auch außerhalb von Wien?",
    a: "Grundsätzlich ja. Für persönliche Vor-Ort-Besuche sind wir in Wien und Umgebung tätig. Für Betriebe in anderen Teilen Österreichs und Deutschland arbeiten wir vollständig remote — das funktioniert für die meisten Projekte problemlos.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-ink font-medium text-base group-hover:text-ink-soft transition-colors">
          {q}
        </span>
        <span
          className={`w-7 h-7 rounded-full border border-border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ink-soft text-base leading-relaxed pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-canvas" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-ink-muted text-sm font-medium uppercase tracking-widest mb-4">
              Häufige Fragen
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink leading-[1.15] mb-6">
              Was Sie wissen wollen.
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mb-8">
              Weitere Fragen beantworten wir gerne persönlich — kostenlos und
              unverbindlich.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full border border-ink text-ink text-sm font-semibold hover:bg-ink hover:text-canvas transition-colors"
            >
              Frage stellen
            </button>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0), #F4F3F0)" }} />
    </section>
  );
}
