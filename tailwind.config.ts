// tailwind.config.ts
// Proficio Fachcheck – eigenständiges Designsystem
// Stand: 29.06.2026

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D4AFF",
          light: "#8B72FF",
          dark: "#34248A",
          darker: "#0B1020",
        },
        beyond: "#D81B70",
        dark: {
          DEFAULT: "#0F172A",
          surface: "#182235",
        },
        "light-bg": "#F7F8FC",
        foreground: "#172033",
        muted: "#5F6B7C",
        border: "#DDE2EA",
        success: "#0B8F67",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },

      fontSize: {
        "impact": ["6rem", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "800" }],
        "impact-lg": ["8rem", { lineHeight: "1", letterSpacing: "-0.05em", fontWeight: "800" }],
      },

      boxShadow: {
        "glow": "0 0 40px rgba(216, 27, 112, 0.3)",
        "glow-lg": "0 0 60px rgba(216, 27, 112, 0.4)",
        "glow-accent": "0 4px 18px rgba(216, 27, 112, 0.28)",
        "top": "0 -4px 6px -1px rgba(0, 0, 0, 0.1)",
      },

      backgroundImage: {
        "hero-overlay": "linear-gradient(90deg, rgba(7, 12, 26, 0.97) 0%, rgba(7, 12, 26, 0.88) 45%, rgba(7, 12, 26, 0.55) 75%, rgba(7, 12, 26, 0.78) 100%)",
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
