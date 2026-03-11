"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden aspect-[4/3] rounded-2xl cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Beyond CMYK (full, underneath) */}
      <Image
        src="/images/07-blumen-slider-beyond-cmyk.png"
        alt="Blumenarrangement in lebendigen Beyond CMYK Farben – erweiterter Farbraum"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 640px"
      />

      {/* Standard CMYK (clipped, on top) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src="/images/07-blumen-slider-beyond-cmyk.png"
          alt="Blumenarrangement in Standard CMYK Farben"
          fill
          className="object-cover saturate-[0.55] contrast-[0.9] -hue-rotate-[5deg]"
          sizes="(max-width: 768px) 100vw, 640px"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-sm font-bold text-gray-600">⟨ ⟩</span>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-4 left-4 text-sm font-semibold text-white bg-dark/60 backdrop-blur-sm px-3 py-1.5 rounded-full z-20">
        Standard CMYK
      </span>
      <span className="absolute bottom-4 right-4 text-sm font-semibold text-white bg-beyond/80 backdrop-blur-sm px-3 py-1.5 rounded-full z-20">
        Beyond CMYK
      </span>
    </div>
  );
}
