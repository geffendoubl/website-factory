import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Geffen FlexCo",
  description: "Impressum gemäß § 5 ECG",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ink-muted text-sm mb-12 hover:text-ink transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-4xl text-ink mb-10">Impressum</h1>

        <div className="prose prose-sm text-ink-soft space-y-8">
          <section>
            <h2 className="text-ink font-semibold text-base mb-3">Angaben gemäß § 5 ECG</h2>
            <p className="leading-relaxed">
              Geffen FlexCo<br />
              Samuel Geffen<br />
              Wien, Österreich
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">Kontakt</h2>
            <p className="leading-relaxed">
              E-Mail:{" "}
              <a href="mailto:sam@geffen.de" className="text-ink underline underline-offset-2">
                sam@geffen.de
              </a>
              <br />
              Telefon: +43 660 123 4567
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">Unternehmensgegenstand</h2>
            <p className="leading-relaxed">
              Erstellung und Betreuung von Websites für kleine und mittlere Unternehmen.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">Haftungsausschluss</h2>
            <p className="leading-relaxed">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
              Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">Online-Streitbeilegung</h2>
            <p className="leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
