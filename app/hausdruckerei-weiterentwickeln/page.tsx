import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: {
    absolute: "Hausdruckerei weiterentwickeln: Leistungen, Prozesse, Nutzen",
  },
  description:
    "Hausdruckerei weiterentwickeln: interne Leistungen, Prozesse, Outsourcing und Investitionen prüfen – ohne die Diskussion auf den Seitenpreis zu verkürzen.",
  alternates: { canonical: "/hausdruckerei-weiterentwickeln" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Hausdruckerei weiterentwickeln: Leistungen, Prozesse und Wirtschaftlichkeit neu ordnen",
  description:
    "Wie interne Druckereien ihren Leistungsauftrag, Prozesse, Outsourcing und künftige Produktionstechnik prüfen.",
  author: { "@type": "Person", name: "Jens Burghold" },
  mainEntityOfPage:
    "https://www.proficio-digitaldruck.de/hausdruckerei-weiterentwickeln",
};

export default function InPlantPrintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopicPage
        eyebrow="Interner Nutzen muss sichtbar werden"
        title="Hausdruckerei weiterentwickeln: Leistungen, Prozesse und Wirtschaftlichkeit neu ordnen"
        lead="Eine Hausdruckerei ist nicht automatisch gut, weil sie günstig druckt. Sie muss für die Organisation konkrete Aufgaben schneller, sicherer oder einfacher lösen. Ich prüfe mit Ihnen diese Aufgaben – bevor über Outsourcing oder eine neue Maschine entschieden wird."
        heroCtaLabel="Hausdruckerei einordnen"
        introTitle="Die Frage ist nicht einfach: intern oder extern?"
        intro={[
          "Wenn nur der Preis pro Seite verglichen wird, sieht die Hausdruckerei schnell teuer aus. Eilaufträge, Abstimmung, Datenkorrekturen, Lager, Versand und vertrauliche Unterlagen tauchen in diesem Vergleich oft nicht auf.",
          "Trotzdem gehört nicht jede Leistung ins eigene Haus. Seltene Spezialproduktionen können extern besser aufgehoben sein. Die interne Druckerei braucht deshalb keinen Schutzraum, sondern einen klaren Auftrag: Was soll sie zuverlässig selbst leisten, was steuert sie und was gibt sie bewusst nach außen?",
        ]}
        challengesTitle="Wo interne Druckereien unnötig Arbeit verlieren"
        challenges={[
          {
            title: "Der Seitenpreis erzählt nur die halbe Geschichte",
            text: "Wer nur Papier, Farbe und Klick zählt, übersieht Beschaffung, Wartezeit, Korrekturschleifen, Lagerbestände und Eilkosten. Genau dort kann interner Nutzen entstehen.",
          },
          {
            title: "Der Auftrag wandert durch zu viele Hände",
            text: "Unklare Bestellwege, wechselnde Dateiformate und fehlende Freigaben kosten Zeit. Eine neue Maschine beseitigt diese Reibung nicht.",
          },
          {
            title: "Neue Technik soll ein unklares Problem lösen",
            text: "Wenn Auftraggeber, Produkte und Mengen nicht geklärt sind, wird die Investition zum Hoffnungsträger. Technik kann einen guten Prozess unterstützen, aber keinen fehlenden Leistungsauftrag ersetzen.",
          },
        ]}
        opportunitiesTitle="Aufgaben, bei denen Nähe einen Unterschied macht"
        opportunitiesIntro="Die Hausdruckerei muss nicht alles selbst drucken, um wichtig zu sein. Sie kann auch die Stelle sein, die Anforderungen klärt und den passenden Produktionsweg organisiert."
        opportunities={[
          {
            title: "Zeitkritische interne Unterlagen",
            text: "Wenn Termine feststehen und Änderungen bis kurz vor der Ausgabe möglich bleiben müssen.",
          },
          {
            title: "Personalisierte Kommunikation",
            text: "Wenn Daten, Varianten und kleine Mengen eng mit Fachabteilungen abgestimmt werden.",
          },
          {
            title: "Vertrauliche oder kontrollierte Dokumente",
            text: "Wenn klare Zuständigkeiten und kurze Wege wichtiger sind als der niedrigste Einzelpreis.",
          },
          {
            title: "Produktionssteuerung",
            text: "Wenn die Hausdruckerei intern berät, Standards festlegt und externe Druckdienstleistungen gezielt dazukauft.",
          },
        ]}
        decisionSection={{
          eyebrow: "Vom Bedarf bis zur Auslieferung",
          title: "Prozessoptimierung beginnt mit einem echten Auftrag",
          intro:
            "Kein großes Prozessbild zum Einstieg. Nehmen Sie einen typischen Auftrag und verfolgen Sie ihn vom Bedarf bis zur Auslieferung. Dort werden Wartezeiten und Doppelarbeit sichtbar.",
          items: [
            {
              title: "Auftragseingang",
              text: "Wer bestellt was, über welchen Weg und mit welchen Pflichtangaben?",
            },
            {
              title: "Datenprüfung",
              text: "Wer erkennt fehlende Formate, falsche Versionen oder ungeklärte Personalisierung?",
            },
            {
              title: "Freigabe",
              text: "Wer darf Inhalt, Menge und Ausführung verbindlich bestätigen?",
            },
            {
              title: "Produktion",
              text: "Was wird intern gedruckt und weiterverarbeitet, was geht nach außen?",
            },
            {
              title: "Auslieferung",
              text: "Wer sortiert, verpackt, verteilt oder versendet – und wie wird dieser Aufwand erfasst?",
            },
          ],
        }}
        checkEyebrow="Intern, extern oder gemeinsam"
        checkTitle="Intern, extern oder hybrid?"
        checkIntro="Outsourcing ist weder Niederlage noch automatische Einsparung. Seltene Spezialleistungen können extern richtig aufgehoben sein; zeitkritische, vertrauliche oder häufig wechselnde Aufgaben eher intern. Deshalb betrachten wir den Weg vom Auftrag bis zur Auslieferung."
        checkItems={[
          "Was ist zeitkritisch, vertraulich oder häufig zu ändern?",
          "Welche Leistungen werden so selten gebraucht, dass eigene Technik keinen Sinn ergibt?",
          "Wo entstehen durch externe Beschaffung neue Abstimmung, Mindestmengen oder Eilkosten?",
          "Welche Standards und Daten kann die Hausdruckerei intern sichern?",
          "Wer behält die Verantwortung gegenüber dem internen Auftraggeber?",
        ]}
        technologyTitle="Technik folgt dem künftigen Leistungsauftrag"
        technologyText={[
          "Vier Werte reichen für den Anfang: Durchlaufzeit, externe Beschaffungs- und Eilkosten, Lager und Nacharbeit sowie die Termintreue bei wichtigen internen Aufträgen. Diese Zahlen sollten aus dem Betrieb kommen. Pauschale Zielwerte helfen nicht, wenn Auftragsmix und Organisation anders aussehen.",
          "Ein Produktionsdrucksystem kann Personalisierung, flexible Kleinserien, hochwertige Farbanwendungen und besondere Medien unterstützen. Für eine Proficio PX300 oder PX500 müssen deshalb Volumen, Formate, Materialien, Spitzenlasten, Weiterverarbeitung und interne Serviceziele zusammen betrachtet werden.",
          "Im Zukunftscheck kläre ich mit Ihnen Aufgaben, Prozesse und den nächsten Prüfschritt. Verbindliche technische Auslegung, Testproduktion, Preis, Service und Vertrag gehören anschließend zum jeweiligen Umsetzungspartner.",
        ]}
        faqs={[
          {
            question: "Welche Aufgaben sollte eine Hausdruckerei intern behalten?",
            answer:
              "Vor allem Aufgaben, bei denen kurze Reaktionszeiten, Vertraulichkeit, viele Varianten oder enge Abstimmung wichtig sind. Das muss für jede Organisation anhand echter Aufträge geprüft werden.",
          },
          {
            question: "Was eignet sich für Outsourcing?",
            answer:
              "Seltene Spezialproduktionen, ungeeignete Formate oder stark schwankende Zusatzmengen können extern sinnvoller sein. Wichtig sind klare Übergaben, feste Qualitätsanforderungen und ein verlässlicher Ansprechpartner.",
          },
          {
            question: "Wie lässt sich der Nutzen einer Hausdruckerei zeigen?",
            answer:
              "Nicht nur mit Seitenpreisen. Durchlaufzeit, vermiedene Eilkosten, geringere Lagerbestände, weniger Nacharbeit und sichere Termine zeigen häufig mehr vom tatsächlichen Beitrag.",
          },
          {
            question: "Wann ist neue Digitaldrucktechnik sinnvoll?",
            answer:
              "Wenn ein klarer interner Leistungsauftrag besteht, wiederkehrende Anwendungen vorhanden sind und die Technik einen benannten Engpass löst. Eine Maschine allein schafft noch keine neue Rolle.",
          },
        ]}
        relatedLinks={[
          {
            href: "/verpackungsdruck-kleinauflagen",
            label: "Verpackungsdruck in Kleinauflagen",
          },
          {
            href: "/spezialdruck-druckveredelung",
            label: "Spezialdruck und Druckveredelung",
          },
        ]}
        closing={{
          title: "Welche Aufgabe soll Ihre Hausdruckerei künftig übernehmen?",
          text: "Dann schauen wir auf reale Aufträge, interne Auftraggeber, Engpässe und Fremdleistungen. So wird sichtbar, was intern bleiben sollte, was nach außen gehört und welche Technik dafür wirklich gebraucht wird.",
          ctaLabel: "Hausdruckerei-Fall besprechen",
        }}
      />
    </>
  );
}
