"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () =>
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-5 left-4 right-4 z-40 md:hidden"
        >
          <button
            onClick={scrollToContact}
            className="w-full py-4 bg-ink text-canvas rounded-2xl font-semibold text-sm shadow-2xl shadow-black/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Unverbindlich anfragen
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
