import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vielen Dank",
  robots: { index: false, follow: false },
};

export default function DankePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-darker px-4 py-16">
      <div className="max-w-xl text-center text-white">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-3xl font-bold text-success">
          ✓
        </div>
        <h1 className="mt-7 text-3xl font-bold lg:text-4xl">
          Ihre Zukunftscheck-Anfrage ist angekommen.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          Ich prüfe Ihre Angaben persönlich und melde mich bei Ihnen. Ihre Daten
          werden nicht automatisch an einen Umsetzungspartner weitergegeben.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
          <h2 className="font-bold">Was passiert jetzt?</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-white/60">
            <li>
              1. Ich ordne Ihre Ausgangslage, Ihr Ziel und mögliche
              Geschäftschancen ein.
            </li>
            <li>2. Offene Fragen klären wir direkt miteinander.</li>
            <li>
              3. Technik oder Partner kommen erst ins Spiel, wenn sie zur
              Geschäftsidee passen und Sie zugestimmt haben.
            </li>
          </ol>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-beyond px-6 py-3.5 font-bold shadow-glow-accent"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
