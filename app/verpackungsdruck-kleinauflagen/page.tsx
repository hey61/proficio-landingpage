import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: {
    absolute: "Verpackungsdruck in Kleinauflagen für Druckereien",
  },
  description:
    "Individuelle Verpackungen in Kleinauflage: Was Druckereien bei Material, Konfektionierung, Kalkulation und Investition beachten sollten.",
  alternates: { canonical: "/verpackungsdruck-kleinauflagen" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Verpackungsdruck in Kleinauflagen: Was Druckereien dafür wirklich brauchen",
  description:
    "Was Druckereien über Verpackungsmuster, individuelle Verpackungen in Kleinserie, Weiterverarbeitung und Konfektionierung wissen müssen.",
  author: { "@type": "Person", name: "Jens Burghold" },
  mainEntityOfPage:
    "https://www.proficio-digitaldruck.de/verpackungsdruck-kleinauflagen",
};

export default function PackagingPrintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopicPage
        eyebrow="Verpackung ist mehr als Druck"
        title="Verpackungsdruck in Kleinauflagen: Was Druckereien dafür wirklich brauchen"
        lead="Individuelle Verpackungen sind mehr als sauber bedruckte Bögen. Material, Konstruktion, Stanzen, Kleben und Lieferform entscheiden mit. Ich prüfe mit Ihnen, ob daraus für Ihren Betrieb ein Angebot wird – bevor Sie in Technik investieren."
        heroCtaLabel="Verpackungsangebot prüfen"
        introTitle="Nicht jede kleine Auflage ist automatisch ein gutes Geschäft"
        intro={[
          "Verpackungsmuster, Produktstarts, regionale Varianten und limitierte Serien sind Aufträge, die im klassischen Verpackungsdruck oft schwer unterzubringen sind. Für eine Digitaldruckerei kann das interessant sein.",
          "Der Druckbogen ist dabei nur die halbe Arbeit. Ich schaue deshalb zuerst auf reale Anfragen, Material, Format und Weiterverarbeitung. Die Maschine kommt später.",
        ]}
        challengesTitle="Wo die schöne Idee schnell teuer wird"
        challenges={[
          {
            title: "Der Auftrag endet nicht am Ausleger",
            text: "Stanzen, Rillen, Kleben und Konfektionierung gehören von Anfang an in den Preis. Sonst ist der Bogen gedruckt, aber die Verpackung noch lange nicht fertig.",
          },
          {
            title: "Ein Muster ist noch kein Markt",
            text: "Ein schönes Muster beeindruckt. Bezahlt wird aber erst, wenn ein Kunde, ein Anlass und ein Preis dahinterstehen.",
          },
          {
            title: "Materialfragen sind keine Fußnote",
            text: "Oberfläche, Haltbarkeit und Schutzanforderungen müssen zum Einsatz passen. Bei Lebensmittelkontakt ist eine fachliche Prüfung unverzichtbar.",
          },
        ]}
        opportunitiesTitle="Wo kleine Auflagen interessant werden"
        opportunitiesIntro="Muster, Kleinserien und Varianten passen zum Digitaldruck. Ob sie zu Ihrem Betrieb passen, entscheidet sich an Kunden, Material und Weiterverarbeitung."
        opportunities={[
          {
            title: "Verpackungsmuster",
            text: "Für Produktentwicklung, Präsentation, Freigabe oder einen ersten Markttest.",
          },
          {
            title: "Produktverpackungen in Kleinserie",
            text: "Für Manufakturen, neue Produktlinien, regionale Anbieter oder zeitlich begrenzte Angebote.",
          },
          {
            title: "Saisonale Varianten",
            text: "Für Aktionen, Events, Jubiläen und Kampagnen mit mehreren Motiven.",
          },
          {
            title: "Personalisierte Verpackungen",
            text: "Für unterschiedliche Regionen, Zielgruppen, Anlässe oder einzelne Empfänger.",
          },
        ]}
        decisionSection={{
          eyebrow: "Vor der Kalkulation",
          title: "Fünf Fragen, die vor der Maschine beantwortet sein müssen",
          intro:
            "Fehlt eine Antwort, ist das Angebot noch nicht fertig.",
          items: [
            {
              title: "Was soll verpackt werden?",
              text: "Produkt und Einsatz bestimmen Material, Oberfläche und Schutzanforderungen.",
            },
            {
              title: "Wie sieht die Verpackung aus?",
              text: "Format und Konstruktion müssen zum Produktionsweg passen.",
            },
            {
              title: "Welche Wirkung ist gewollt?",
              text: "Druck und Veredelung folgen dem Kundenfall, nicht dem verfügbaren Effekt.",
            },
            {
              title: "Wer macht sie fertig?",
              text: "Stanzen, Rillen, Kleben und Konfektionierung brauchen klare Zuständigkeiten.",
            },
            {
              title: "Wie geht sie zum Kunden?",
              text: "Flach, aufgerichtet, sortiert oder an mehrere Empfänger: Auch das gehört in den Preis.",
            },
          ],
        }}
        checkItems={[
          "Welche konkreten Verpackungsanfragen haben Sie heute schon?",
          "Was können Sie selbst zuverlässig produzieren – und wo brauchen Sie Partner?",
          "Wie wird aus Druck, Weiterverarbeitung und Konfektionierung ein sauber kalkulierter Preis?",
          "Reichen Anwendungen und Volumen für eine Investition – oder testen wir zuerst kleiner?",
        ]}
        technologyTitle="Wo Proficio ins Spiel kommen kann"
        technologyText={[
          "Die Xerox Proficio PX300 und PX500 können mit einer optionalen fünften Farbstation fluoreszierendes Pink, Clear oder Low-Gloss Clear einsetzen. Dadurch lassen sich auffällige Akzente und Oberflächenwirkungen direkt im digitalen Druck erzeugen.",
          "Das kann bei Verpackungsmustern und kleinen Serien interessant sein. Der Effekt allein verkauft jedoch keine Verpackung. Material, Format, Weiterverarbeitung und der konkrete Kundenfall müssen dazu passen.",
        ]}
        faqs={[
          {
            question: "Für welche Aufträge lohnt sich der genaue Blick?",
            answer:
              "Vor allem für Muster, Produktstarts, limitierte Serien und häufig wechselnde Varianten. Eine pauschale Mindestauflage gibt es nicht. Die Frage ist, ob sich der ganze Produktionsweg rechnen lässt.",
          },
          {
            question: "Was gehört in die Kalkulation?",
            answer:
              "In die Kalkulation gehören Material und Druck ebenso wie Datenprüfung, Musterbau, Rüstaufwand, Ausschuss, Stanzen, Rillen, Kleben, Konfektionierung und Lieferung.",
          },
          {
            question: "Was gilt bei Lebensmittelkontakt?",
            answer:
              "Material, Farbe, Verarbeitung und der konkrete Kontakt müssen fachlich geprüft werden. Ohne diese Prüfung würde ich keine Aussage zur Eignung treffen.",
          },
          {
            question: "Was brauchen Sie für eine erste Einschätzung?",
            answer:
              "Am hilfreichsten sind konkrete Anfragen: Verpackungsart, Format, Material, Auflage, Varianten und gewünschte Lieferform. Dazu Ihre vorhandene Produktion und mögliche Partner für die Weiterverarbeitung.",
          },
        ]}
        relatedLinks={[
          {
            href: "/spezialdruck-druckveredelung",
            label: "Spezialdruck und Druckveredelung",
          },
          {
            href: "/hausdruckerei-weiterentwickeln",
            label: "Hausdruckerei weiterentwickeln",
          },
        ]}
        closing={{
          title: "Haben Sie schon konkrete Verpackungsanfragen?",
          text: "Dann schaue ich mit Ihnen auf Material, Format, Weiterverarbeitung und Stückzahl. So sehen wir, ob ein eigenes Angebot trägt und welche Technik dafür wirklich gebraucht wird.",
          ctaLabel: "Verpackungsfall besprechen",
        }}
      />
    </>
  );
}
