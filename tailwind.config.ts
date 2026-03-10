// tailwind.config.ts
// Proficio Landingpage – Design-Token von Mia
// Stand: 10.03.2026 | V2.0 – MIT ECHTEN TEAM-JANSEN-FARBEN
// 
// Farben extrahiert aus: xtj_Logo_cmyk.ai + Xerox Platinum Badge

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === TEAM JANSEN BRAND (aus Logo extrahiert) ===
        primary: {
          DEFAULT: "#2F65AF",   // Team Jansen Blau (Hauptfarbe)
          light: "#4A7DC4",     // Hover-States, hellere Variante
          dark: "#1E4A85",      // Dunkle Sektionen, Footer
          darker: "#122F57",    // Problem-Sektion, Conversion Zone
        },

        // === TEAM JANSEN SEKUNDÄRFARBEN (aus Logo-Bildmarke) ===
        "tj-cyan": "#10BBEF",   // Logo-Quadrat: Hellblau
        "tj-green": "#94C11F",  // Logo-Quadrat: Limettengrün
        "tj-red": "#E30613",    // Logo-Quadrat: Rot

        // === XEROX ===
        "xerox-red": "#DA2013", // Xerox Platinum Badge Rot

        // === BEYOND CMYK AKZENT ===
        beyond: "#FF2D8A",      // Fluorescent Pink – Impact-Zahlen, CTA, Glow

        // === NEUTRAL ===
        dark: {
          DEFAULT: "#0F172A",   // Dunkle Hintergründe
          surface: "#1E293B",   // Cards auf dunklem Grund
        },
        "light-bg": "#F8FAFC",  // FAQ, Trust-Sektion
        foreground: "#1E293B",  // Primärer Text auf hell
        muted: "#64748B",       // Sekundärer Text
        border: "#E2E8F0",      // Trennlinien, Borders
        success: "#10B981",     // Check-Icons Produktvergleich
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },

      fontSize: {
        "impact": ["6rem", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "800" }],
        "impact-lg": ["8rem", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "800" }],
      },

      boxShadow: {
        "glow": "0 0 40px rgba(255, 45, 138, 0.3)",
        "glow-lg": "0 0 60px rgba(255, 45, 138, 0.4)",
        "glow-accent": "0 4px 14px rgba(255, 45, 138, 0.25)",
        "top": "0 -4px 6px -1px rgba(0, 0, 0, 0.1)",
      },

      backgroundImage: {
        "hero-overlay": "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.8))",
      },

      animation: {
        "bounce-slow": "bounce 1.5s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
