import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Jens Burghold / KI-Strategien.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPageShell title="Impressum">
      <section>
        <h2 className="text-xl font-bold text-foreground">Angaben gemäß § 5 DDG</h2>
        <p className="mt-3">
          Jens Burghold / KI-Strategien
          <br />
          Inhaber: Jens Burghold
          <br />
          Gustav-Tauschek-Straße 2
          <br />
          99099 Erfurt
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
        <p className="mt-3">
          Telefon:{" "}
          <a className="text-primary underline" href="tel:+493614229616">
            +49 361 4229616
          </a>
          <br />
          E-Mail:{" "}
          <a
            className="text-primary underline"
            href="mailto:jens@proficio-digitaldruck.de"
          >
            jens@proficio-digitaldruck.de
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">Umsatzsteuer</h2>
        <p className="mt-3">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          DE457721808
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">
          Verantwortlich für den Inhalt
        </h2>
        <p className="mt-3">
          Jens Burghold
          <br />
          Gustav-Tauschek-Straße 2
          <br />
          99099 Erfurt
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">Hinweis zu Marken</h2>
        <p className="mt-3">
          Diese Website ist ein eigenständiges Informations- und
          Vermittlungsangebot und keine offizielle Website von Xerox. Xerox® und
          Proficio™ sind Marken von Xerox beziehungsweise der jeweiligen
          Rechteinhaber. Die Nennung dient der sachlichen Beschreibung der
          behandelten Produkte.
        </p>
      </section>
    </LegalPageShell>
  );
}
