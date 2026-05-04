"use client";

export function FFooter() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-canvas-dark text-white/40 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display text-xl font-black tracking-tight block mb-3">
              <span className="text-canvas">Web</span>
              <span className="text-blue">flix</span>
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Professionelle Websites für kleine und mittlere Unternehmen in
              Wien und Österreich. Persönlich betreut, schnell umgesetzt.
            </p>
            <p className="text-white/25 text-xs mt-5">
              Persönlich in Wien betreut. Digital überall erreichbar.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Pakete", id: "pakete" },
                { label: "Zusatzleistungen", id: undefined },
                { label: "Ablauf", id: "ablauf" },
                { label: "FAQ", id: "faq" },
                { label: "Kontakt", id: "kontakt" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      item.id
                        ? scrollTo(item.id)
                        : window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href="mailto:sam@geffen.de"
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  sam@geffen.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+436601234567"
                  className="text-white/40 hover:text-white/70 transition-colors"
                >
                  +43 660 123 4567
                </a>
              </li>
              <li className="text-white/30">Wien, Österreich</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Webflix · Samuel Geffen · Wien
          </p>
          <div className="flex gap-6">
            {["Impressum", "Datenschutz"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-white/25 hover:text-white/50 text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
