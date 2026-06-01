"use client";

import { useEffect, useRef } from "react";

// Vertical white-textured 3D ticket. Auto twirls (left↔right + up↕down).
// Hover steers it; mobile device-tilt steers it (easter egg — no hint shown).
export default function Ticket3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cur = useRef({ rx: 0, ry: 0 });
  const target = useRef({ rx: 0, ry: 0 });
  const auto = useRef(true);
  const t = useRef(0);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onMove(e: PointerEvent) {
      auto.current = false;
      const r = wrap!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.current.ry = px * 60;
      target.current.rx = -py * 50;
    }
    function onLeave() { auto.current = true; }
    function onTilt(e: DeviceOrientationEvent) {
      if (e.gamma == null || e.beta == null) return;
      auto.current = false;
      target.current.ry = Math.max(-60, Math.min(60, e.gamma));
      target.current.rx = Math.max(-45, Math.min(45, e.beta - 45));
    }

    function tick() {
      t.current += 0.016;
      if (auto.current && !reduce) {
        target.current.ry = Math.sin(t.current * 0.5) * 40;
        target.current.rx = Math.sin(t.current * 0.8) * 12;
      }
      cur.current.rx += (target.current.rx - cur.current.rx) * 0.08;
      cur.current.ry += (target.current.ry - cur.current.ry) * 0.08;
      const floatY = auto.current ? Math.sin(t.current * 0.9) * 8 : 0;
      card!.style.transform = `translateY(${floatY.toFixed(1)}px) rotateX(${cur.current.rx.toFixed(2)}deg) rotateY(${cur.current.ry.toFixed(2)}deg)`;
      raf.current = requestAnimationFrame(tick);
    }

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    window.addEventListener("deviceorientation", onTilt);
    raf.current = requestAnimationFrame(tick);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("deviceorientation", onTilt);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Paper texture (subtle grain) as a CSS background
  const grain =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";
  const NOTCH = "#111111"; // matches section bg → reads as a punched hole
  const faceBase: React.CSSProperties = {
    backfaceVisibility: "hidden",
    borderRadius: "22px",
    background: "linear-gradient(160deg, #ffffff 0%, #f3efe6 100%)",
    boxShadow:
      "0 50px 90px rgba(0,0,0,0.55), 0 8px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.9)",
  };

  return (
    <div
      ref={wrapRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "1500px", minHeight: "540px" }}
    >
      {/* Ambient gold light */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          width: "440px", height: "440px",
          background: "radial-gradient(circle, rgba(182,149,86,0.30) 0%, transparent 62%)",
          filter: "blur(30px)",
        }}
      />
      {/* Soft ground shadow */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: "40px", width: "230px", height: "40px",
          background: "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)",
          filter: "blur(14px)",
        }}
      />

      <div
        ref={cardRef}
        className="relative"
        style={{
          width: "min(300px, 78vw)",
          height: "calc(min(300px, 78vw) * 1.5)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden flex flex-col" style={faceBase}>
          {/* paper grain */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{ backgroundImage: grain }} aria-hidden />
          {/* gold accent edge top */}
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "linear-gradient(90deg, #B69556, #e7d3a3, #B69556)" }} />

          <div className="px-6 pt-7 flex items-start justify-between">
            <span className="text-black/70 text-[10px] font-bold uppercase tracking-[0.28em]">Admit One</span>
            <span className="text-black/40 text-[9px] tabular-nums">№ 026</span>
          </div>

          <div className="px-6 mt-auto mb-7">
            <img src="/forge-mark.png" loading="lazy" alt="" aria-hidden className="w-12 h-auto mb-3 opacity-90" draggable={false} />
            <p
              className="leading-none mb-2"
              style={{ fontFamily: "var(--font-geist-pixel-circle)", fontSize: "40px", fontWeight: 500, letterSpacing: "-0.06em", color: "#16202e" }}
            >
              Forge&rsquo;26
            </p>
            <p className="text-black/55 text-[10px] uppercase tracking-[0.2em]">
              June 13, 2026 &bull; Lagos, NG
            </p>
            {/* barcode */}
            <div className="mt-4 flex items-end gap-[2px] h-9">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} style={{ width: "2px", height: `${30 + ((i * 37) % 70) * 0.55}%`, background: "rgba(0,0,0,0.7)" }} />
              ))}
            </div>
          </div>

          {/* perforation: punched holes + dashed line */}
          <div className="absolute left-0 right-0" style={{ top: "64%" }}>
            <div className="absolute left-[-13px] w-7 h-7 rounded-full" style={{ background: NOTCH, top: "-14px" }} />
            <div className="absolute right-[-13px] w-7 h-7 rounded-full" style={{ background: NOTCH, top: "-14px" }} />
            <div className="mx-4 border-t-2 border-dashed border-black/20" />
          </div>
        </div>

        {/* BACK — forge logo */}
        <div
          className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center gap-4"
          style={{ ...faceBase, transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{ backgroundImage: grain }} aria-hidden />
          <img src="/forge-mark.png" loading="lazy" alt="Forge" className="w-32 h-auto object-contain" draggable={false} />
          <span className="text-black/45 text-[9px] uppercase tracking-[0.35em]">Built to Scale</span>
        </div>
      </div>
    </div>
  );
}
