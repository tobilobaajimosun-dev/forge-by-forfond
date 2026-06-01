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
const HIDDEN_MASK = "radial-gradient(circle 0% at 50% 50%, #000 0%, transparent 60%)";

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
      if (spotRef.current) {
        spotRef.current.style.webkitMaskImage = "none";
        spotRef.current.style.maskImage = "none";
        spotRef.current.style.opacity = "0.4";
        spotRef.current.style.filter = "none";
      }
      return;
    }

    function onMove(e: PointerEvent) {
      const r = stage!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const spot = spotRef.current;
      if (spot) {
        const ir = spot.getBoundingClientRect();
        const mx = ((e.clientX - ir.left) / ir.width) * 100;
        const my = ((e.clientY - ir.top) / ir.height) * 100;
        // Soft, blurred spotlight reveal
        const mask = `radial-gradient(circle 22% at ${mx}% ${my}%, #000 0%, rgba(0,0,0,0.55) 40%, transparent 68%)`;
        spot.style.webkitMaskImage = mask;
        spot.style.maskImage = mask;
      }

      const tilt = tiltRef.current;
      if (tilt) {
        const rx = (0.5 - py) * 14;
        const ry = (px - 0.5) * 18;
        tilt.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }

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
        spotRef.current.style.webkitMaskImage = HIDDEN_MASK;
        spotRef.current.style.maskImage = HIDDEN_MASK;
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

      {/* ── Cursor-spotlit 3D mark (fully blended into black) ── */}
      <div ref={stageRef} className="absolute inset-0" style={{ perspective: "1200px", cursor: "crosshair" }}>
        {/* Following glow */}
        <div
          ref={glowRef}
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            width: "480px",
            height: "480px",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(182,149,86,0.12) 0%, transparent 65%)",
            opacity: 0,
            filter: "blur(10px)",
          }}
        />

        <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 w-[min(820px,85vw)]">
          <div ref={tiltRef} style={{ transformStyle: "preserve-3d", transition: "transform 280ms cubic-bezier(0.23,1,0.32,1)" }}>
            {/* Spotlight — full-colour mark, revealed only under the cursor, with a soft blur */}
            <img
              ref={spotRef}
              src="/forge-mark.png"
              alt="Forge"
              className="w-full h-auto select-none"
              draggable={false}
              style={{
                filter: "drop-shadow(0 24px 60px rgba(182,149,86,0.28)) blur(0.6px)",
                WebkitMaskImage: HIDDEN_MASK,
                maskImage: HIDDEN_MASK,
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Foreground content (bottom) — aligned to nav left edge ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-12 md:pb-16 pointer-events-none">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          {/* Bottom-left — headline + meta */}
          <div className="pointer-events-auto">
            <h1
              className="text-white tracking-tight leading-[0.95] mb-3"
              style={{ fontSize: "clamp(48px, 7vw, 108px)", fontWeight: 300 }}
            >
              Forge&rsquo;26
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-light mb-8 max-w-md">
              The room where growth-minded founders build what scales.
            </p>

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

          {/* Bottom-right — gold glitch CTA */}
          <div className="pointer-events-auto flex flex-col items-start md:items-end gap-3">
            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="glitch-border group inline-flex items-center gap-3 bg-[#B69556] hover:bg-[#c9a96a] text-black font-medium text-lg md:text-xl px-7 h-16 rounded-lg transition-colors duration-150"
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
