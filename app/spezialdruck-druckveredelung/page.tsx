import type { Metadata } from "next";
import TopicPage from "@/components/TopicPage";

export const metadata: Metadata = {
  title: {
    absolute: "Spezialdruck und digitale Druckveredelung für Druckereien",
  },
  description:
    "Spezialdruck und digitale Druckveredelung: Wie Druckereien aus fünfter Farbe, Musterbuch und konkreten Anwendungen ein verkaufbares Angebot machen.",
  alternates: { canonical: "/spezialdruck-druckveredelung" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Spezialdruck und digitale Druckveredelung: Vom Effekt zum Auftrag",
  description:
    "Wie Druckereien aus fünfter Farbe, Musterbuch und konkreten Anwendungen ein verkaufbares Angebot machen.",
  author: { "@type": "Person", name: "Jens Burghold" },
  mainEntityOfPage:
    "https://www.proficio-digitaldruck.de/spezialdruck-druckveredelung",
};

export default function SpecialtyPrintPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopicPage
        eyebrow="Wirkung verkauft sich nicht von allein"
        title="Spezialdruck und digitale Druckveredelung: Vom Effekt zum Auftrag"
        lead="Fluoreszierende Farben, transparente Akzente und Matt-Glanz-Kontraste fallen auf. Ein Auftrag entsteht daraus aber erst, wenn der Effekt zu einem Produkt, einem Kunden und einem vernünftigen Preis passt. Genau das kläre ich mit Ihnen vor der Investition."
        heroCtaLabel="Spezialdruck-Angebot prüfen"
        introTitle="Der Kunde kauft keine fünfte Farbe"
        intro={[
          "Ein Muster mit fluoreszierendem Pink zieht den Blick an. Clear und Low-Gloss Clear muss man oft im richtigen Licht sehen, bevor die Wirkung verständlich wird. Technisch ist das interessant. Für den Verkauf reicht es noch nicht.",
          "Der Kunde möchte keine zusätzliche Farbstation erklärt bekommen. Er möchte eine Einladung, die geöffnet wird, eine Verpackung, die am Regal auffällt, oder ein Mailing, das nicht sofort im Papierkorb landet. Spezialdruck beginnt für mich deshalb nicht beim Effekt, sondern bei der Anwendung.",
        ]}
        challengesTitle="Wo gute Muster im Alltag versanden"
        challenges={[
          {
            title: "Das Muster bleibt beim Verkäufer liegen",
            text: "Wenn nicht klar ist, welchem Kunden es gezeigt wird und welche Frage damit eröffnet werden soll, wird aus dem Musterbuch schnell nur Anschauungsmaterial.",
          },
          {
            title: "Der Aufpreis hat keine Geschichte",
            text: "„Sieht hochwertiger aus“ ist als Begründung zu dünn. Der Effekt braucht einen konkreten Zweck: mehr Aufmerksamkeit, eine erkennbare Produktlinie, eine limitierte Ausgabe oder eine besondere Ansprache.",
          },
          {
            title: "Jeder Auftrag wird wieder zum Versuch",
            text: "Besondere Ergebnisse müssen wiederholbar sein. Material, Datenaufbau, Farbwirkung und Freigabe gehören deshalb zum Angebot – nicht erst zur Fehlersuche in der Produktion.",
          },
        ]}
        opportunitiesTitle="Anwendungen, bei denen der Effekt eine Aufgabe hat"
        opportunitiesIntro="Nicht jede Anwendung braucht eine Veredelung. Manchmal ist gutes CMYK die bessere Lösung. Interessant wird Spezialdruck dort, wo der Unterschied für den Kunden sichtbar und für den Auftrag wichtig ist."
        opportunities={[
          {
            title: "Einladungen und Geschäftsausstattung",
            text: "Wenn der erste Eindruck Teil der Botschaft ist und kleine Auflagen üblich sind.",
          },
          {
            title: "Direktmailings",
            text: "Wenn Personalisierung und ein sichtbarer Akzent gemeinsam Aufmerksamkeit schaffen sollen.",
          },
          {
            title: "Verpackungsmuster und POS-Material",
            text: "Wenn eine Variante, ein Produktstart oder eine limitierte Serie erkennbar herausstechen muss.",
          },
          {
            title: "Spezielle Medien",
            text: "Wenn Menükarten, Hinweismedien oder andere Anwendungen ein Material brauchen, das nicht zum gewöhnlichen Bilderdruckpapier passt.",
          },
        ]}
        decisionSection={{
          eyebrow: "Muster, die ein Gespräch eröffnen",
          title: "Was in ein gutes Musterbuch für Druckveredelung gehört",
          intro:
            "Ein gutes Musterbuch zeigt nicht nur Farbfelder. Es hilft dem Vertrieb, ein Gespräch zu führen. Drei brauchbare Anwendungen sind mehr wert als zwanzig lose Effekte.",
          items: [
            {
              title: "Was ist das Produkt?",
              text: "Das Muster braucht eine konkrete Anwendung statt nur einer technischen Bezeichnung.",
            },
            {
              title: "Für wen ist es gedacht?",
              text: "Zielkunde und Anlass geben dem Verkäufer einen Grund, das Muster zu zeigen.",
            },
            {
              title: "Was wurde eingesetzt?",
              text: "Material und Effekt müssen eindeutig benannt und später reproduzierbar sein.",
            },
            {
              title: "Was soll man erkennen?",
              text: "Der Betrachter muss verstehen, welche Wirkung der Effekt für das Produkt übernimmt.",
            },
            {
              title: "Was ist zu beachten?",
              text: "Daten, Produktion und Preis gehören zur Erklärung des Musters dazu.",
            },
          ],
        }}
        checkEyebrow="Kalkulation und Wiederholung"
        checkTitle="Der Preis besteht nicht nur aus Toner und Klick"
        checkIntro="Zur Kalkulation gehören auch Datenprüfung, Musterentwicklung, Abstimmung, Freigabe und Qualitätssicherung. Dieser Aufwand darf nicht still im Auftrag verschwinden."
        checkItems={[
          "Welcher konkrete Kunde würde für diesen Unterschied mehr bezahlen – und warum?",
          "Welche zusätzliche Arbeit entsteht für Muster, Daten, Abstimmung und Freigabe?",
          "Ist das ein Einzelauftrag oder kann daraus ein wiederkehrendes Produkt werden?",
          "Gibt es weitere Bestandskunden, für die dieselbe Anwendung interessant wäre?",
          "Was muss mit Material und Kundendaten getestet werden, bevor etwas zugesagt wird?",
        ]}
        technologyTitle="Was die Proficio technisch beitragen kann"
        technologyText={[
          "Die Xerox Proficio PX300 und PX500 können mit einer optionalen fünften Farbstation Fluorescent Pink, Clear oder Low-Gloss Clear einsetzen. Damit lassen sich fluoreszierende Akzente, transparente Effekte und Matt-Glanz-Kontraste direkt in den digitalen Produktionsablauf einbeziehen.",
          "Ob diese Möglichkeit zu Ihrem Betrieb passt, entscheidet sich nicht an der Musterseite. Entscheidend sind vorhandene Kunden, wiederkehrende Anwendungen, sichere Produktionsabläufe und ein Vertrieb, der den Unterschied erklären kann.",
          "Im Zukunftscheck kläre ich mit Ihnen den Kundenfall, die Anwendung und den nächsten Prüfschritt. Verbindliche technische Auslegung, Testdruck, Preis, Service und Vertrag gehören anschließend zum jeweiligen Umsetzungspartner.",
        ]}
        faqs={[
          {
            question:
              "Was ist der Unterschied zwischen Spezialdruck und digitaler Druckveredelung?",
            answer:
              "Die Begriffe werden nicht immer einheitlich verwendet. Spezialdruck kann besondere Farben, Medien oder Anwendungen meinen. Bei digitaler Druckveredelung steht meist ein zusätzlicher visueller Effekt im Vordergrund. Wichtiger als die Bezeichnung ist der konkrete Produktionsweg.",
          },
          {
            question: "Wann ist eine fünfte Farbe wirklich sinnvoll?",
            answer:
              "Wenn es Anwendungen gibt, bei denen der Effekt einen erkennbaren Zweck erfüllt und wiederholt verkauft werden kann. Für einzelne Technikmuster allein würde ich keine Investition empfehlen.",
          },
          {
            question: "Wie wird aus einem Musterbuch ein Verkaufswerkzeug?",
            answer:
              "Indem jedes Muster einer Zielgruppe, einem Anlass und einem Produkt zugeordnet wird. Dazu braucht der Vertrieb eine kurze Nutzenargumentation und eine erste Preislogik.",
          },
          {
            question: "Wie lässt sich die Qualität wiederholen?",
            answer:
              "Durch festgelegte Materialien, saubere Druckdaten, dokumentierte Einstellungen und eine eindeutige Freigabe. Was nur zufällig einmal gut aussieht, ist noch kein verlässliches Angebot.",
          },
        ]}
        relatedLinks={[
          {
            href: "/verpackungsdruck-kleinauflagen",
            label: "Verpackungsdruck in Kleinauflagen",
          },
          {
            href: "/hausdruckerei-weiterentwickeln",
            label: "Hausdruckerei weiterentwickeln",
          },
        ]}
        closing={{
          title: "Haben Sie bereits Muster, aber noch kein klares Angebot?",
          text: "Dann sehen wir uns gemeinsam an, welche Effekte zu Ihren Kunden passen, welche Anwendungen sich daraus bauen lassen und was für eine sichere Kalkulation fehlt. Erst danach sprechen wir über die passende Technik.",
          ctaLabel: "Spezialdruck-Fall besprechen",
        }}
      />
    </>
  );
}
