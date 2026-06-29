import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Jens Burghold / KI-Strategien.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <LegalPageShell title="Datenschutzerklärung">
      <section>
        <h2 className="text-xl font-bold text-foreground">1. Verantwortlicher</h2>
        <p className="mt-3">
          Jens Burghold / KI-Strategien
          <br />
          Gustav-Tauschek-Straße 2
          <br />
          99099 Erfurt
          <br />
          Telefon: +49 361 4229616
          <br />
          E-Mail: jens@proficio-digitaldruck.de
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">
          2. Bereitstellung der Website
        </h2>
        <p className="mt-3">
          Beim Aufruf dieser Website werden technisch erforderliche
          Verbindungsdaten verarbeitet. Dazu können IP-Adresse, Zeitpunkt,
          aufgerufene Seite, übertragene Datenmenge, Referrer sowie Angaben zu
          Browser und Betriebssystem gehören. Die Verarbeitung dient dem
          sicheren und stabilen Betrieb der Website.
        </p>
        <p className="mt-3">
          Die Website wird über Vercel bereitgestellt. Soweit Vercel Daten in
          unserem Auftrag verarbeitet, erfolgt dies auf Grundlage einer
          Vereinbarung zur Auftragsverarbeitung. Eine Verarbeitung außerhalb des
          Europäischen Wirtschaftsraums kann nicht vollständig ausgeschlossen
          werden und wird auf die hierfür vorgesehenen datenschutzrechtlichen
          Garantien gestützt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">
          3. Kontaktaufnahme und Proficio-Fachcheck
        </h2>
        <p className="mt-3">
          Wenn Sie das Formular verwenden oder uns per E-Mail beziehungsweise
          Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der
          Anfrage. Dazu gehören insbesondere Name, Unternehmen, geschäftliche
          Kontaktdaten sowie die von Ihnen übermittelten Angaben zu Produktion,
          Volumen, Anwendungen und Investitionshorizont.
        </p>
        <p className="mt-3">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage der
          Vorbereitung eines Vertrags oder einer Vermittlung dient. In anderen
          Fällen erfolgt die Verarbeitung auf Grundlage unseres berechtigten
          Interesses an der Bearbeitung geschäftlicher Anfragen gemäß Art. 6 Abs.
          1 lit. f DSGVO.
        </p>
        <p className="mt-3">
          Der Formularversand erfolgt serverseitig über das bei all-inkl
          eingerichtete E-Mail-Postfach. Die Daten werden nicht in einer
          separaten Lead-Datenbank gespeichert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">
          4. Weitergabe an Umsetzungspartner
        </h2>
        <p className="mt-3">
          Ihre Formulardaten werden nicht automatisch an Händler oder andere
          Umsetzungspartner weitergegeben. Eine Weitergabe erfolgt erst, nachdem
          der konkrete Empfänger mit Ihnen abgestimmt wurde und Sie der
          Weitergabe ausdrücklich zugestimmt haben. Umfang und Zweck der
          Weitergabe werden dabei transparent benannt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">
          5. Speicherdauer
        </h2>
        <p className="mt-3">
          Wir speichern personenbezogene Daten nur so lange, wie dies für die
          Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen. Entfällt der Zweck und besteht keine
          Aufbewahrungspflicht, werden die Daten gelöscht.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">
          6. Cookies und Reichweitenmessung
        </h2>
        <p className="mt-3">
          In der aktuellen Version werden keine Marketing-Cookies und keine
          externen Analyse- oder Trackingdienste eingesetzt. Sollte sich dies
          ändern, wird diese Datenschutzerklärung vor dem Einsatz angepasst und
          – soweit erforderlich – eine Einwilligung eingeholt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-foreground">7. Ihre Rechte</h2>
        <p className="mt-3">
          Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf
          Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei
          einer Datenschutzaufsichtsbehörde beschweren.
        </p>
        <p className="mt-3">
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an
          jens@proficio-digitaldruck.de.
        </p>
      </section>

      <p className="border-t border-border pt-6 text-sm">
        Stand: 29. Juni 2026
      </p>
    </LegalPageShell>
  );
}
