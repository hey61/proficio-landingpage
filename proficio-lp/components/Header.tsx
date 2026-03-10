"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-darker/95 backdrop-blur-lg shadow-lg"
          : "bg-primary-darker/80 backdrop-blur-md"
      }`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logos/team-jansen-logo-white.png"
            alt="Team Jansen – Ideen für digitalen Erfolg"
            width={160}
            height={40}
            className="max-h-10 w-auto"
            priority
          />
          <span className="hidden sm:inline text-white/50 text-xs">
            Xerox Platin Partner
          </span>
        </div>
        <div className="flex items-center gap-4 lg:gap-6">
          <a
            href="tel:+49224292120"
            className="text-white text-sm lg:text-base font-semibold flex items-center gap-2 hover:text-beyond transition-colors"
          >
            <span className="hidden sm:inline">📞 02242 9212-0</span>
            <span className="sm:hidden">📞</span>
          </a>
          <button
            onClick={() => scrollTo("kontakt")}
            className="bg-beyond text-white rounded-lg px-4 lg:px-5 py-2.5 text-sm font-semibold hover:brightness-110 hover:scale-105 transition-all shadow-glow-accent"
          >
            Termin vereinbaren
          </button>
        </div>
      </div>
    </header>
  );
}
