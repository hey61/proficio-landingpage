export default function Footer() {
  return (
    <footer className="bg-dark py-8 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="flex justify-center gap-6 flex-wrap mb-4">
        <a href="https://teamjansen.de/impressum" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-white transition-colors">
          Impressum
        </a>
        <a href="https://teamjansen.de/datenschutz" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-white transition-colors">
          Datenschutz
        </a>
        <a href="https://teamjansen.de" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-white transition-colors">
          teamjansen.de
        </a>
      </div>
      <p className="text-white/30 text-xs">
        © 2026 Team Jansen – Ideen für digitalen Erfolg. Xerox Platin Partner.
      </p>
    </footer>
  );
}
