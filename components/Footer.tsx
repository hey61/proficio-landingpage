import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="text-base font-bold">Jens Burghold / KI-Strategien</div>
            <div className="mt-1 text-sm text-white/50">Proficio Fachcheck</div>
            <address className="mt-4 text-sm not-italic leading-relaxed text-white/50">
              Gustav-Tauschek-Straße 2 · 99099 Erfurt
              <br />
              <a className="hover:text-white" href="tel:+493614229616">
                +49 361 4229616
              </a>{" "}
              ·{" "}
              <a
                className="hover:text-white"
                href="mailto:jens@proficio-digitaldruck.de"
              >
                jens@proficio-digitaldruck.de
              </a>
            </address>
          </div>

          <nav aria-label="Rechtliche Informationen" className="flex flex-wrap gap-5">
            <Link
              href="/impressum"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="mt-9 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/30">
          © 2026 Jens Burghold / KI-Strategien. Eigenständiges Informations- und
          Vermittlungsangebot; keine offizielle Website von Xerox. Xerox® und
          Proficio™ sind Marken von Xerox beziehungsweise der jeweiligen
          Rechteinhaber.
        </div>
      </div>
    </footer>
  );
}
