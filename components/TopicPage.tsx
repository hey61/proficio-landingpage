import Link from "next/link";
import Footer from "@/components/Footer";

type TopicPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  heroCtaLabel?: string;
  introTitle: string;
  intro: string[];
  challengesTitle: string;
  challenges: Array<{ title: string; text: string }>;
  opportunitiesTitle: string;
  opportunitiesIntro: string;
  opportunities: Array<{ title: string; text: string }>;
  decisionSection?: {
    eyebrow?: string;
    title: string;
    intro?: string;
    items: Array<{ title: string; text: string }>;
  };
  checkItems: string[];
  technologyTitle: string;
  technologyText: string[];
  faqs?: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ href: string; label: string }>;
  closing?: {
    title: string;
    text: string;
    ctaLabel: string;
  };
};

export default function TopicPage({
  eyebrow,
  title,
  lead,
  heroCtaLabel = "Potenzial persönlich prüfen",
  introTitle,
  intro,
  challengesTitle,
  challenges,
  opportunitiesTitle,
  opportunitiesIntro,
  opportunities,
  decisionSection,
  checkItems,
  technologyTitle,
  technologyText,
  faqs,
  relatedLinks,
  closing = {
    title: "Sie müssen die nächste Maschine noch nicht kennen",
    text: "Beschreiben Sie Ihre Ausgangslage. Ich ordne Anwendungen, Zielgruppen, Vermarktung und die technisch sinnvollen nächsten Schritte persönlich ein.",
    ctaLabel: "Kostenlosen Erstcheck starten",
  },
}: TopicPageProps) {
  return (
    <>
      <header className="border-b border-white/10 bg-primary-darker text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-beyond text-xl font-extrabold shadow-glow-accent">
              Z
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-wide sm:text-base">
                ZUKUNFTSCHECK
              </span>
              <span className="hidden text-[11px] text-white/50 sm:block">
                für Druckdienstleister · Jens Burghold
              </span>
            </span>
          </Link>
          <Link
            href="/#kontakt"
            className="rounded-lg bg-beyond px-4 py-2.5 text-xs font-bold text-white shadow-glow-accent transition-all hover:brightness-110 sm:px-5 sm:text-sm"
          >
            Zukunft prüfen
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-primary-darker py-20 text-white lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-beyond">
              {eyebrow}
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 lg:text-xl">
              {lead}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#kontakt"
                className="rounded-lg bg-beyond px-7 py-4 text-center text-base font-bold text-white shadow-glow transition-all hover:brightness-110"
              >
                {heroCtaLabel}
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-white/25 bg-white/10 px-7 py-4 text-center text-base font-semibold text-white transition-colors hover:bg-white/20"
              >
                Zum Zukunftscheck
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              {introTitle}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-light-bg py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              {challengesTitle}
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {challenges.map((challenge, index) => (
                <article
                  key={challenge.title}
                  className="rounded-2xl border border-border bg-white p-7"
                >
                  <div className="text-sm font-extrabold tracking-widest text-beyond">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {challenge.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
                {opportunitiesTitle}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {opportunitiesIntro}
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {opportunities.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="rounded-2xl border border-border p-7"
                >
                  <h3 className="text-xl font-bold">{opportunity.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {opportunity.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {decisionSection && (
          <section className="bg-light-bg py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                {decisionSection.eyebrow && (
                  <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    {decisionSection.eyebrow}
                  </div>
                )}
                <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
                  {decisionSection.title}
                </h2>
                {decisionSection.intro && (
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    {decisionSection.intro}
                  </p>
                )}
              </div>
              <ol className="mt-12 grid gap-5 lg:grid-cols-5">
                {decisionSection.items.map((item, index) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-border bg-white p-6"
                  >
                    <div className="text-sm font-extrabold tracking-widest text-beyond">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="bg-primary-darker py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-beyond">
                Zukunftscheck
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
                Was wir vor einer Investition klären
              </h2>
            </div>
            <ul className="grid gap-3">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-relaxed text-white/80"
                >
                  <span className="mr-3 text-beyond">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              {technologyTitle}
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {technologyText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {faqs && faqs.length > 0 && (
          <section className="bg-light-bg py-20 lg:py-28">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Orientierung vor dem Erstgespräch
                </div>
                <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
                  Häufige Fragen
                </h2>
              </div>
              <div className="mt-12 grid gap-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-2xl border border-border bg-white p-6 sm:p-7"
                  >
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={`${faqs?.length ? "bg-white" : "bg-light-bg"} py-16`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Weitere relevante Themen</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-primary transition-colors hover:border-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-dark to-primary py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              {closing.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {closing.text}
            </p>
            <Link
              href="/#kontakt"
              className="mt-9 inline-flex rounded-lg bg-beyond px-7 py-4 text-base font-bold text-white shadow-glow-accent transition-all hover:brightness-110"
            >
              {closing.ctaLabel}
            </Link>
          </div>
        </section>
      </main>

      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <Footer />
    </>
  );
}
