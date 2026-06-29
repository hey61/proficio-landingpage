const fields = [
  "Anwendungs- und Angebotsideen",
  "geeignete Zielbranchen",
  "Markt- und Wettbewerbsrecherche",
  "Content und digitale Leadgewinnung",
] as const;

export default function AiBusinessSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-darker via-dark-surface to-primary-dark px-6 py-12 text-white sm:px-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-14 lg:py-16">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-beyond">
              KI-Strategien
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight lg:text-5xl">
              Von der Maschinenchance zur Marktchance
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Eine neue Produktionsmöglichkeit schafft erst dann Wert, wenn
              daraus verständliche Angebote und erreichbare Zielgruppen
              entstehen. KI beschleunigt die Recherche und Ideenentwicklung –
              Branchenkenntnis entscheidet, was davon tragfähig ist.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:grid-cols-1">
            {fields.map((field, index) => (
              <div
                key={field}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-beyond/20 text-sm font-extrabold text-beyond">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-white/80">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
