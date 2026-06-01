"use client";

import { useEffect, useRef } from "react";

// Vertical 3D ticket: auto twirls (left↔right + up↕down); cursor hover steers
// the rotation; on mobile, device tilt steers it. Lights/glow around it.
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
      const px = (e.clientX - r.left) / r.width - 0.5; // -0.5..0.5
      const py = (e.clientY - r.top) / r.height - 0.5;
      target.current.ry = px * 60; // left/right
      target.current.rx = -py * 50; // up/down
    }
    function onLeave() {
      auto.current = true;
    }
    function onTilt(e: DeviceOrientationEvent) {
      if (e.gamma == null || e.beta == null) return;
      auto.current = false;
      target.current.ry = Math.max(-60, Math.min(60, e.gamma)); // left/right tilt
      target.current.rx = Math.max(-45, Math.min(45, (e.beta - 45))); // front/back tilt
    }

    function tick() {
      t.current += 0.016;
      if (auto.current && !reduce) {
        // gentle continuous twirl + float
        target.current.ry = Math.sin(t.current * 0.5) * 38;
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

  const NOTCH = "#1a1a1a"; // matches section bg → reads as a cut hole

  return (
    <div
      ref={wrapRef}
      className="relative flex items-center justify-center"
      style={{ perspective: "1500px", minHeight: "520px", cursor: "grab" }}
    >
      {/* Ambient lights */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          width: "440px", height: "440px",
          background: "radial-gradient(circle, rgba(182,149,86,0.26) 0%, transparent 62%)",
          filter: "blur(26px)",
        }}
      />

      {/* Ticket */}
      <div
        ref={cardRef}
        className="relative"
        style={{ width: "300px", height: "440px", transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            borderRadius: "20px",
            background: "linear-gradient(150deg, #16202e 0%, #20232a 42%, #8a6d33 78%, #B69556 100%)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.16)",
            border: "1px solid rgba(182,149,86,0.45)",
          }}
        >
          {/* top stub */}
          <div className="px-6 pt-6 flex items-start justify-between">
            <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.25em]">Admit One</span>
            <span className="text-white/60 text-[9px] font-mono">№ 026</span>
          </div>

          {/* main */}
          <div className="px-6 mt-auto mb-6">
            <p
              className="text-white leading-none mb-2"
              style={{ fontFamily: "var(--font-geist-pixel-circle)", fontSize: "40px", fontWeight: 600 }}
            >
              Forge&rsquo;26
            </p>
            <p className="text-white/75 text-[10px] uppercase tracking-[0.2em] font-mono">
              June 13, 2026 &bull; Lagos, NG
            </p>
            {/* barcode */}
            <div className="mt-4 flex items-end gap-[2px] h-9 opacity-80">
              {Array.from({ length: 38 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: "2px",
                    height: `${30 + ((i * 37) % 70) * 0.55}%`,
                    background: "rgba(0,0,0,0.55)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* perforation cut line (~68% height) */}
          <div className="absolute left-0 right-0" style={{ top: "66%" }}>
            <div className="absolute left-[-12px] w-6 h-6 rounded-full" style={{ background: NOTCH, top: "-12px" }} />
            <div className="absolute right-[-12px] w-6 h-6 rounded-full" style={{ background: NOTCH, top: "-12px" }} />
            <div className="mx-3 border-t-2 border-dashed border-black/30" />
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "20px",
            background: "linear-gradient(150deg, #B69556 0%, #8a6d33 28%, #20232a 70%, #16202e 100%)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            border: "1px solid rgba(182,149,86,0.45)",
          }}
        >
          <img src="/forge-mark.png" alt="Forge" className="w-28 h-auto object-contain mb-1" draggable={false} />
          <span className="text-black/70 text-[9px] uppercase tracking-[0.3em]">Built to Scale</span>
        </div>
      </div>

      {/* Hint */}
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/25 text-[9px] uppercase tracking-[0.3em] pointer-events-none">
        Drag / tilt to spin
      </p>
    </div>
  );
}
