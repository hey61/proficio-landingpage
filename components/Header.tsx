"use client";
import Image from "next/image";

export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-darker/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/team-jansen-logo-white.png"
            alt="Team Jansen – Ideen für digitalen Erfolg"
            width={600}
            height={200}
            className="h-10 lg:h-12 w-auto max-w-[200px] lg:max-w-[240px] object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          
            href="tel:+49224292120"
            className="hidden sm:flex text-white text-sm font-semibold hover:text-beyond transition-colors"
          >
            02242 9212-0
          </a>
          <button
            onClick={() => scrollTo("kontakt")}
            className="bg-beyond text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-glow-accent"
          >
            Termin vereinbaren
          </button>
        </div>
      </div>
    </header>
  );
}
