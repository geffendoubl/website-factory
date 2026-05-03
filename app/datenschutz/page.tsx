import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – Geffen FlexCo",
  description: "Datenschutzerklärung gemäß DSGVO",
};

export default function Datenschutz() {
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

        <h1 className="font-display text-4xl text-ink mb-2">Datenschutz&shy;erklärung</h1>
        <p className="text-ink-muted text-sm mb-10">Gemäß DSGVO und DSG 2018</p>

        <div className="space-y-10 text-sm text-ink-soft leading-relaxed">
          <section>
            <h2 className="text-ink font-semibold text-base mb-3">1. Verantwortlicher</h2>
            <p>
              Geffen FlexCo, Samuel Geffen, Wien, Österreich<br />
              E-Mail: sam@geffen.de
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">2. Erhobene Daten</h2>
            <p>
              Wenn Sie das Kontaktformular auf unserer Website nutzen, erheben wir die von Ihnen
              eingegebenen Daten (Name, Unternehmen, Telefonnummer, E-Mail-Adresse, Nachricht).
              Diese werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">3. Zweck der Verarbeitung</h2>
            <p>
              Die erhobenen Daten werden verwendet, um Ihre Kontaktanfrage zu beantworten und
              Ihnen ein unverbindliches Angebot zukommen zu lassen. Eine Weitergabe an Dritte
              findet nicht statt.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">4. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung erfolgt auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sowie zur Erfüllung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">5. Speicherdauer</h2>
            <p>
              Ihre Daten werden gelöscht, sobald sie für den Zweck der Erhebung nicht mehr
              benötigt werden, spätestens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
              Zur Ausübung dieser Rechte wenden Sie sich bitte an: sam@geffen.de
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">7. Hosting</h2>
            <p>
              Diese Website wird über externe Hosting-Dienstleister betrieben. Beim Aufruf der
              Website werden automatisch technische Daten (IP-Adresse, Datum/Uhrzeit, aufgerufene
              Seiten) in Server-Logfiles gespeichert. Diese Daten werden nicht mit anderen
              Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">8. E-Mail-Versand</h2>
            <p>
              Für den Versand von E-Mails im Rahmen des Kontaktformulars nutzen wir den Dienst
              Resend (Resend Inc., USA). Eine Datenverarbeitung außerhalb der EU kann dabei nicht
              ausgeschlossen werden. Der Einsatz erfolgt auf Basis Ihrer Einwilligung.
            </p>
          </section>

          <section>
            <h2 className="text-ink font-semibold text-base mb-3">9. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, bei der österreichischen Datenschutzbehörde (
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2"
              >
                www.dsb.gv.at
              </a>
              ) Beschwerde einzulegen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
