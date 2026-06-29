import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LegalPageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-4 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-beyond text-xl font-extrabold text-white">
              P
            </span>
            <span>
              <span className="block text-sm font-extrabold tracking-wide">
                PROFICIO FACHCHECK
              </span>
              <span className="block text-[11px] text-muted">
                Jens Burghold / KI-Strategien
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Zur Startseite
          </Link>
        </div>
      </header>

      <main className="bg-light-bg py-16 lg:py-24">
        <article className="mx-auto max-w-4xl rounded-2xl border border-border bg-white px-5 py-9 shadow-sm sm:px-9 lg:px-12">
          <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">{title}</h1>
          <div className="mt-10 space-y-9 leading-relaxed text-muted">{children}</div>
        </article>
      </main>

      <Footer />
    </>
  );
}
