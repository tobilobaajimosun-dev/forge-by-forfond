"use client";

import { useEffect, useRef, useState } from "react";

const EVENT_DATE = new Date("2026-06-13T09:00:00+01:00");
const REGISTER = "https://tally.so/r/ZjDaXA";

function pad(n: number) {
  return String(n).padStart(2, "0");
}
function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace";

export default function HeroText() {
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // Reveal the mark fully, no motion
      if (spotRef.current) {
        spotRef.current.style.webkitMaskImage = "none";
        spotRef.current.style.maskImage = "none";
        spotRef.current.style.opacity = "0.5";
      }
      return;
    }

    function onMove(e: PointerEvent) {
      const r = stage!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width; // 0..1
      const py = (e.clientY - r.top) / r.height; // 0..1

      // Spotlight position relative to the mark image
      const spot = spotRef.current;
      if (spot) {
        const ir = spot.getBoundingClientRect();
        const mx = ((e.clientX - ir.left) / ir.width) * 100;
        const my = ((e.clientY - ir.top) / ir.height) * 100;
        const mask = `radial-gradient(circle 26% at ${mx}% ${my}%, #000 0%, rgba(0,0,0,0.6) 35%, transparent 62%)`;
        spot.style.webkitMaskImage = mask;
        spot.style.maskImage = mask;
      }

      // 3D tilt of the whole mark toward the cursor
      const tilt = tiltRef.current;
      if (tilt) {
        const rx = (0.5 - py) * 16; // deg
        const ry = (px - 0.5) * 20;
        tilt.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }

      // Follow glow
      const glow = glowRef.current;
      if (glow) {
        glow.style.left = `${px * 100}%`;
        glow.style.top = `${py * 100}%`;
        glow.style.opacity = "1";
      }
    }

    function onLeave() {
      if (tiltRef.current) tiltRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (spotRef.current) {
        const mask = "radial-gradient(circle 0% at 50% 50%, #000 0%, transparent 60%)";
        spotRef.current.style.webkitMaskImage = mask;
        spotRef.current.style.maskImage = mask;
      }
    }

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="relative bg-black min-h-screen overflow-hidden">

      {/* ── Cursor-spotlit 3D mark ── */}
      <div
        ref={stageRef}
        className="absolute inset-0"
        style={{ perspective: "1200px", cursor: "crosshair" }}
      >
        {/* Following glow */}
        <div
          ref={glowRef}
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: "460px",
            height: "460px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(182,149,86,0.14) 0%, transparent 65%)",
            opacity: 0,
            filter: "blur(8px)",
          }}
        />

        {/* Mark stage — sits in the upper-centre area */}
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[min(820px,85vw)]">
          <div
            ref={tiltRef}
            style={{ transformStyle: "preserve-3d", transition: "transform 250ms cubic-bezier(0.23,1,0.32,1)" }}
          >
            {/* Base — barely visible ghost of the mark */}
            <img
              src="/forge-mark.png"
              alt=""
              aria-hidden
              className="w-full h-auto select-none"
              draggable={false}
              style={{ opacity: 0.05 }}
            />
            {/* Spotlight — full-colour mark, revealed only under the cursor */}
            <img
              ref={spotRef}
              src="/forge-mark.png"
              alt="Forge"
              className="absolute inset-0 w-full h-auto select-none"
              draggable={false}
              style={{
                filter: "drop-shadow(0 24px 60px rgba(182,149,86,0.25))",
                WebkitMaskImage: "radial-gradient(circle 0% at 50% 50%, #000 0%, transparent 60%)",
                maskImage: "radial-gradient(circle 0% at 50% 50%, #000 0%, transparent 60%)",
              }}
            />
          </div>
        </div>

        {/* Hint */}
        <p className="absolute left-1/2 top-[42%] -translate-x-1/2 mt-[260px] text-white/15 text-[10px] uppercase tracking-[0.3em] pointer-events-none select-none">
          Move your cursor
        </p>
      </div>

      {/* ── Foreground content (bottom) ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-16 pointer-events-none">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* Bottom-left — headline + meta */}
          <div className="pointer-events-auto">
            <h1
              className="text-white font-medium tracking-tight leading-[0.95] mb-3"
              style={{ fontSize: "clamp(48px, 7vw, 104px)" }}
            >
              Forge 2026
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light mb-8 max-w-md">
              For founders building to grow.
            </p>

            {/* Meta grid — Ship style */}
            <div className="flex gap-10" style={{ fontFamily: MONO }}>
              <div className="text-[11px] md:text-xs uppercase tracking-widest leading-relaxed">
                <p className="text-white">Lagos</p>
                <p className="text-white/45">Nigeria</p>
              </div>
              <div className="text-[11px] md:text-xs uppercase tracking-widest leading-relaxed">
                <p className="text-white">June 13</p>
                <p className="text-[#B69556] tabular-nums">
                  {pad(time.d)}D.{pad(time.h)}H.{pad(time.m)}M.{pad(time.s)}S
                </p>
              </div>
            </div>
          </div>

          {/* Bottom-right — CTA */}
          <div className="pointer-events-auto flex flex-col items-start md:items-end gap-3">
            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black font-medium text-lg md:text-xl px-7 h-16 rounded-lg transition-colors duration-150"
            >
              Request an invite
              <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
            <a
              href="#agenda"
              className="text-white/40 hover:text-white text-[11px] uppercase tracking-widest transition-colors duration-150"
              style={{ fontFamily: MONO }}
            >
              Or view the schedule
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
