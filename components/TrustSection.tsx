"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Inline SVG: Deutschland-Karte mit 3 Standorten                    */
/*  Koordinatensystem: lon 5.8-15.1E -> x 0-400, lat 55.1-47.2N -> y 0-520 */
/*  Hennef  (7.28E, 50.77N) -> x=64,  y=285                          */
/*  Kassel  (9.49E, 51.32N) -> x=159, y=249                          */
/*  Erfurt  (11.03E, 50.98N) -> x=225, y=271                         */
/* ------------------------------------------------------------------ */

function GermanyMap() {
  const cities = [
    { name: "Hennef", subtitle: "Köln / Bonn", x: 64, y: 285 },
    { name: "Kassel", subtitle: "Nordhessen", x: 159, y: 249 },
    { name: "Erfurt", subtitle: "Thüringen", x: 225, y: 271 },
  ];

  const germanyPath = `
    M120,7 L120,13 L138,20 L160,18 L176,20 L194,33 L210,50 L219,59
    L230,48 L241,46 L255,46 L267,46 L280,53 L295,52 L310,53 L325,48
    L340,46 L352,60 L361,79 L364,95 L366,112 L372,138 L379,165
    L381,185 L383,204 L383,220 L383,237 L390,255 L396,270 L387,276
    L370,285 L350,296 L330,306 L306,316 L290,320 L280,322 L275,332
    L271,342 L275,360 L280,380 L288,401 L300,410 L310,414 L320,422
    L327,428 L322,450 L316,468 L310,487 L303,492 L297,494 L285,494
    L275,494 L255,500 L245,504 L232,507 L218,507 L202,507 L192,512
    L185,514 L175,508 L163,500 L160,496 L159,494 L142,490 L125,487
    L115,490 L103,494 L90,494 L77,494 L75,482 L73,468 L78,448
    L82,438 L86,428 L95,414 L103,401 L96,398 L86,395 L68,392
    L55,390 L43,388 L35,378 L26,368 L28,358 L30,349 L22,340
    L13,329 L10,319 L9,309 L6,296 L4,283 L6,276 L9,270 L12,258
    L14,248 L17,237 L28,227 L38,221 L43,217 L41,210 L39,204
    L44,198 L48,194 L52,191 L52,178 L52,165 L55,152 L58,145
    L60,138 L56,128 L52,118 L55,108 L60,99 L72,96 L82,94
    L95,92 L99,82 L103,72 L105,58 L107,48 L108,39 L113,22 Z
  `;

  return (
    <svg
      viewBox="0 0 400 530"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm"
      role="img"
      aria-label="Deutschlandkarte mit Team Jansen Standorten: Hennef, Kassel und Erfurt"
    >
      {/* Germany silhouette */}
      <path
        d={germanyPath}
        fill="#f3f4f6"
        stroke="#d1d5db"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Connecting lines between cities */}
      <line x1={64} y1={285} x2={159} y2={249} stroke="#2563eb" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
      <line x1={159} y1={249} x2={225} y2={271} stroke="#2563eb" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />

      {/* City markers */}
      {cities.map((city) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r="14" fill="#2563eb" opacity="0.08" />
          <circle cx={city.x} cy={city.y} r="9" fill="#2563eb" opacity="0.15" />
          <circle cx={city.x} cy={city.y} r="5" fill="#2563eb" />
          <circle cx={city.x} cy={city.y} r="2" fill="white" />
        </g>
      ))}

      {/* Hennef: label to the right */}
      <text x={64 + 14} y={285 - 4} fontSize="13" fontWeight="600" fill="#1e293b" fontFamily="system-ui, sans-serif">
        Hennef
      </text>
      <text x={64 + 14} y={285 + 10} fontSize="10" fill="#64748b" fontFamily="system-ui, sans-serif">
        Köln / Bonn
      </text>

      {/* Kassel: label above */}
      <text x={159} y={249 - 18} textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b" fontFamily="system-ui, sans-serif">
        Kassel
      </text>
      <text x={159} y={249 - 6} textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="system-ui, sans-serif">
        Nordhessen
      </text>

      {/* Erfurt: label to the right */}
      <text x={225 + 14} y={271 - 4} fontSize="13" fontWeight="600" fill="#1e293b" fontFamily="system-ui, sans-serif">
        Erfurt
      </text>
      <text x={225 + 14} y={271 + 10} fontSize="10" fill="#64748b" fontFamily="system-ui, sans-serif">
        Thüringen
      </text>
    </svg>
  );
}

export default function TrustSection() {
  return (
    <section id="vertrauen" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-12 text-center">
          Ihr Proficio-Partner in <span className="text-primary">Deutschland</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Badge */}
          <div>
            <p className="text-base lg:text-lg leading-relaxed mb-5">
              Team Jansen ist Deutschlands größter Xerox Vertragspartner – und trägt den{" "}
              <strong>Xerox Platinum Status</strong>, die höchste Partnerstufe. Mit rund 60 Mitarbeitern,
              über 2.000 Kunden und einer Xerox-Konzession, die bis 1987 zurückreicht.
            </p>
            <p className="text-base lg:text-lg text-muted leading-relaxed mb-8">
              Full-Service: Von der Beratung über Installation und Workflow-Integration bis zur
              Schulung Ihres Teams. Inklusive Finanzierungs- und Leasingoptionen.
            </p>

            {/* Platinum Badge */}
            <div className="mb-8">
              <Image
                src="/badges/xerox-platinum-badge.png"
                alt="Xerox Platin Autorisierter Vertragspartner"
                width={200}
                height={170}
                className="w-auto h-auto max-w-[180px]"
              />
            </div>

            {/* Trust Metrics */}
            <div className="flex gap-10 flex-wrap">
              {[
                ["60+", "Mitarbeiter"],
                ["2.000+", "Kunden"],
                ["Seit 1987", "Xerox-Partner"],
              ].map(([n, l], i) => (
                <div key={i}>
                  <div className="text-2xl font-extrabold text-primary">{n}</div>
                  <div className="text-sm text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Inline SVG Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <GermanyMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
