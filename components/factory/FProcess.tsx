"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Kurzes Gespräch",
    desc: "Wir lernen Ihr Unternehmen kennen — was Sie anbieten, wen Sie ansprechen wollen und was Ihnen wichtig ist. Kein technisches Fachwissen notwendig.",
  },
  {
    number: "02",
    title: "Inhalte sammeln",
    desc: "Sie schicken uns, was Sie haben: Logo, ein paar Fotos, vielleicht eine Beschreibung. Was fehlt, erarbeiten wir gemeinsam.",
  },
  {
    number: "03",
    title: "Website online",
    desc: "In der Regel ist Ihre fertige Website 5–10 Werktage nach dem Gespräch live. Sie müssen sich um nichts kümmern.",
  },
];

export function FProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ablauf" className="py-24 lg:py-32 bg-canvas-dark" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4">
            So einfach geht&apos;s
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-canvas leading-[1.15] max-w-xl">
            Von Null zur fertigen Website in drei Schritten.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-accent/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15 + i * 0.12,
              }}
              className="relative"
            >
              {/* Step number circle */}
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-accent/25">
                <span className="font-display text-canvas text-lg font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-canvas font-semibold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-white/45 text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-white/40 text-base max-w-md">
            Persönlich in Wien betreut. Digital überall erreichbar.
          </p>
          <button
            onClick={() =>
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3.5 bg-accent text-canvas rounded-full font-semibold text-sm hover:opacity-85 transition-opacity flex-shrink-0"
          >
            Jetzt starten
          </button>
        </motion.div>
      </div>
    </section>
  );
}
