"use client";

const navigation = [
  ["Chancen", "chancen"],
  ["PX300 / PX500", "produkt"],
  ["Ablauf", "ablauf"],
  ["Über mich", "ueber-mich"],
  ["FAQ", "faq"],
] as const;

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary-darker/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#start" className="flex min-w-0 items-center gap-3 text-white">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-beyond text-xl font-extrabold shadow-glow-accent">
            P
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-wide sm:text-base">
              PROFICIO FACHCHECK
            </span>
            <span className="hidden text-[11px] text-white/50 sm:block">
              Jens Burghold / KI-Strategien
            </span>
          </span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 xl:flex">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="tel:+493614229616"
            className="hidden text-sm font-semibold text-white/75 transition-colors hover:text-white lg:block"
          >
            0361 4229616
          </a>
          <a
            href="#kontakt"
            className="rounded-lg bg-beyond px-4 py-2.5 text-center text-xs font-bold text-white shadow-glow-accent transition-all hover:-translate-y-0.5 hover:brightness-110 sm:px-5 sm:text-sm"
          >
            Potenzial prüfen
          </a>
        </div>
      </div>
    </header>
  );
}
