"use client";
import { useState, useEffect } from "react";

const CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(level: "all" | "essential") {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ level, date: new Date().toISOString() }));
    setVisible(false);

    if (level === "all") {
      // Hier können später Analytics-Scripte aktiviert werden, z.B.:
      // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "0 16px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          background: "#1a1a1a",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 12,
          padding: "20px 24px",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, margin: "0 0 16px" }}>
          Diese Website verwendet technisch notwendige Cookies. Weitere Cookies werden nur mit
          Ihrer Zustimmung gesetzt.{" "}
          <a
            href="https://teamjansen.de/datenschutz"
            style={{ color: "#3b82f6", textDecoration: "underline" }}
          >
            Datenschutzerklärung
          </a>
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => accept("all")}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Alle akzeptieren
          </button>
          <button
            onClick={() => accept("essential")}
            style={{
              background: "transparent",
              color: "#999",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              padding: "10px 20px",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
