"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// Swap these URLs for real brand photography when ready
const BEFORE_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&auto=format&fit=crop&q=80";
const AFTER_IMG =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&auto=format&fit=crop&q=80";

export default function HeroSlider() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clamped = Math.max(5, Math.min(95, ((clientX - left) / width) * 100));
    setPos(clamped);
  }, []);

  // Mouse
  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (dragging.current) moveTo(e.clientX);
  }, [moveTo]);
  const onMouseUp = () => { dragging.current = false; };

  // Touch
  const onTouchMove = useCallback((e: TouchEvent) => {
    moveTo(e.touches[0].clientX);
  }, [moveTo]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [onMouseMove, onTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden select-none cursor-ew-resize"
      onMouseDown={onMouseDown}
      onTouchStart={(e) => moveTo(e.touches[0].clientX)}
    >
      {/* ── BEFORE image (left, full width, underneath) ── */}
      <div className="absolute inset-0">
        <img
          src={BEFORE_IMG}
          alt="Before Forge"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(40%) brightness(0.75) contrast(1.1)" }}
          draggable={false}
        />
        {/* Dark gradient over left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Before label */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-opacity duration-200"
          style={{
            left: `${Math.min(pos - 4, 38)}%`,
            opacity: pos > 15 ? 1 : 0,
          }}
        >
          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">
            Before
          </p>
          <p
            className="text-white font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Forge
          </p>
        </div>
      </div>

      {/* ── AFTER image (right, clipped) ── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <img
          src={AFTER_IMG}
          alt="After Forge"
          className="w-full h-full object-cover"
          style={{
            filter: "brightness(1.05) saturate(1.1)",
          }}
          draggable={false}
        />
        {/* Dreamy golden overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(182,149,86,0.15) 0%, rgba(182,149,86,0.05) 50%, transparent 100%)",
          }}
        />
        {/* Right-side dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent" />

        {/* After label */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-opacity duration-200"
          style={{
            left: `${Math.max(pos + 4, 58)}%`,
            opacity: pos < 85 ? 1 : 0,
          }}
        >
          <p className="text-[#B69556]/70 text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">
            After
          </p>
          <p
            className="text-white font-bold leading-none tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Forge
          </p>
        </div>
      </div>

      {/* ── Slider line + handle ── */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/60 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#B69556] border-2 border-white/80 shadow-2xl flex items-center justify-center gap-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="white" className="-scale-x-100">
            <path d="M5 2L1 7l4 5M9 2l4 5-4 5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Vertical tick marks */}
        <div className="absolute top-8 -translate-x-1/2 w-px h-8 bg-white/20" />
        <div className="absolute bottom-8 -translate-x-1/2 w-px h-8 bg-white/20" />
      </div>

      {/* ── Navbar eyebrow (inside slider) ── */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
        <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-medium">
          Drag to reveal
        </p>
      </div>
    </div>
  );
}
