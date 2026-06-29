import Link from "next/link";

const opportunities = [
  {
    eyebrow: "Neues Geschäftsfeld",
    title: "Verpackungsdruck in Kleinauflagen",
    text: "Muster, limitierte Serien, personalisierte Verpackungen und POS-Anwendungen eröffnen Aufträge, bei denen Wirkung und Flexibilität wichtiger sind als der niedrigste Stückpreis.",
    href: "/verpackungsdruck-kleinauflagen",
    linkLabel: "Chancen im Verpackungsdruck",
  },
  {
    eyebrow: "Raus aus dem Preisvergleich",
    title: "Spezialdruck und Druckveredelung",
    text: "Fluoreszierende Farben, transparente Effekte, Matt-Glanz-Kontraste und besondere Materialien machen aus Standardprodukten erklärbare Premiumangebote.",
    href: "/spezialdruck-druckveredelung",
    linkLabel: "Spezialdruck als Angebot",
  },
  {
    eyebrow: "Interne Wertschöpfung",
    title: "Hausdruckerei weiterentwickeln",
    text: "Eine interne Druckerei kann mehr sein als eine Kostenstelle: kurze Wege, personalisierte Kommunikation, schnelle Kleinserien und hochwertige interne Anwendungen.",
    href: "/hausdruckerei-weiterentwickeln",
    linkLabel: "Potenziale für Hausdruckereien",
  },
] as const;

export default function OpportunitySection() {
  return (
    <section id="themen" className="bg-light-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-beyond">
            Gesucht wird das Problem, nicht die Maschine
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
            Drei Wege zu mehr Relevanz im Druckgeschäft
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Wer unter Margendruck steht, sucht nach neuen Aufträgen, klarer
            Differenzierung oder einer besseren Rolle für die eigene
            Hausdruckerei. Genau an diesen Entscheidungen setzt der
            Zukunftscheck an.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.href}
              className="flex min-h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-sm"
            >
              <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
                {opportunity.eyebrow}
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-tight">
                {opportunity.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {opportunity.text}
              </p>
              <Link
                href={opportunity.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-beyond transition-colors hover:text-primary"
              >
                {opportunity.linkLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
