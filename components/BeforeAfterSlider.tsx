"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-primary-darker shadow-2xl">
        <Image
          src="/images/07-blumen-slider-beyond-cmyk.png"
          alt="Illustrative Darstellung einer erweiterten Farbwirkung"
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src="/images/07-blumen-slider-beyond-cmyk.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover saturate-[0.55] contrast-[0.9] -hue-rotate-[5deg]"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-extrabold text-primary shadow-xl">
            ‹ ›
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(event) => setSliderPosition(Number(event.target.value))}
          aria-label="Illustrativen Vergleich zwischen Standard-CMYK und erweiterter Farbwirkung verschieben"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-primary-darker/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
          Standard CMYK
        </span>
        <span className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-beyond/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:text-sm">
          Erweiterte Farbwirkung
        </span>
      </div>
      <p className="mt-3 text-center text-xs leading-relaxed text-muted">
        Illustrative Bildschirmdarstellung. Die tatsächliche Wirkung von
        Spezialfarben und Lacken lässt sich verbindlich nur an einem realen
        Druckmuster beurteilen.
      </p>
    </div>
  );
}
