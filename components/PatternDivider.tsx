"use client";

import { useEffect, useRef } from "react";

type Glyph = {
  x: number; // % position
  y: number; // % position
  type: "triangle" | "square" | "circle" | "wave" | "chevron" | "lines" | "dots";
  color: string;
  size: number;
  rot: number;
};

const GOLD = "#B69556";
const GOLD_DIM = "#7a6238";
const WHITE = "rgba(255,255,255,0.35)";

const glyphs: Glyph[] = [
  { x: 4, y: 55, type: "triangle", color: GOLD, size: 1.0, rot: 0 },
  { x: 9, y: 40, type: "square", color: GOLD_DIM, size: 0.8, rot: 8 },
  { x: 13, y: 60, type: "circle", color: WHITE, size: 0.5, rot: 0 },
  { x: 17, y: 50, type: "triangle", color: GOLD_DIM, size: 0.7, rot: 0 },
  { x: 21, y: 52, type: "lines", color: WHITE, size: 0.9, rot: 0 },
  { x: 26, y: 38, type: "square", color: GOLD, size: 0.7, rot: 0 },
  { x: 30, y: 48, type: "wave", color: GOLD, size: 1.0, rot: 0 },
  { x: 35, y: 56, type: "dots", color: WHITE, size: 0.8, rot: 0 },
  { x: 40, y: 44, type: "chevron", color: GOLD, size: 0.9, rot: 0 },
  { x: 44, y: 58, type: "square", color: GOLD_DIM, size: 0.7, rot: 6 },
  { x: 49, y: 46, type: "triangle", color: GOLD, size: 1.1, rot: 0 },
  { x: 54, y: 54, type: "wave", color: WHITE, size: 0.9, rot: 0 },
  { x: 58, y: 40, type: "dots", color: GOLD, size: 0.7, rot: 0 },
  { x: 62, y: 56, type: "triangle", color: GOLD_DIM, size: 0.7, rot: 0 },
  { x: 66, y: 48, type: "square", color: GOLD, size: 0.8, rot: 4 },
  { x: 70, y: 44, type: "lines", color: GOLD, size: 0.9, rot: 0 },
  { x: 74, y: 58, type: "triangle", color: GOLD_DIM, size: 0.7, rot: 0 },
  { x: 78, y: 46, type: "chevron", color: WHITE, size: 0.8, rot: 0 },
  { x: 82, y: 52, type: "wave", color: GOLD, size: 1.0, rot: 0 },
  { x: 86, y: 40, type: "square", color: GOLD_DIM, size: 0.8, rot: 8 },
  { x: 91, y: 50, type: "triangle", color: GOLD, size: 1.1, rot: 0 },
  { x: 96, y: 48, type: "circle", color: GOLD, size: 0.5, rot: 0 },
];

function GlyphShape({ g }: { g: Glyph }) {
  const s = g.size;
  const common = { stroke: g.color, fill: "none", strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (g.type) {
    case "triangle":
      return <polygon points={`${30 * s},0 ${60 * s},${52 * s} 0,${52 * s}`} fill={g.color} />;
    case "square":
      return <rect width={44 * s} height={44 * s} rx={6} fill={g.color} />;
    case "circle":
      return <circle cx={14 * s} cy={14 * s} r={12 * s} fill={g.color} />;
    case "wave":
      return <path d={`M0,${20 * s} Q${20 * s},0 ${40 * s},${20 * s} Q${60 * s},${40 * s} ${80 * s},${20 * s}`} {...common} />;
    case "chevron":
      return <path d={`M0,${40 * s} L${24 * s},0 L${48 * s},${40 * s}`} {...common} />;
    case "lines":
      return (
        <g {...common}>
          <line x1={0} y1={0} x2={24 * s} y2={52 * s} />
          <line x1={14 * s} y1={0} x2={38 * s} y2={52 * s} />
          <line x1={28 * s} y1={0} x2={52 * s} y2={52 * s} />
        </g>
      );
    case "dots":
      return (
        <g fill={g.color}>
          <circle cx={8 * s} cy={8 * s} r={6 * s} />
          <circle cx={28 * s} cy={8 * s} r={6 * s} />
          <circle cx={48 * s} cy={8 * s} r={6 * s} />
        </g>
      );
  }
}

export default function PatternDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const targets = useRef(glyphs.map(() => ({ x: 0, y: 0, r: 0 })));
  const current = useRef(glyphs.map(() => ({ x: 0, y: 0, r: 0 })));
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const radius = 160;
      glyphs.forEach((g, i) => {
        const gx = (g.x / 100) * rect.width;
        const gy = (g.y / 100) * rect.height;
        const dx = gx - mx;
        const dy = gy - my;
        const dist = Math.hypot(dx, dy);
        if (dist < radius) {
          const force = (1 - dist / radius) * 60;
          const ang = Math.atan2(dy, dx);
          targets.current[i] = {
            x: Math.cos(ang) * force,
            y: Math.sin(ang) * force,
            r: (1 - dist / radius) * 40 * (i % 2 === 0 ? 1 : -1),
          };
        } else {
          targets.current[i] = { x: 0, y: 0, r: 0 };
        }
      });
    }

    function onLeave() {
      targets.current = glyphs.map(() => ({ x: 0, y: 0, r: 0 }));
    }

    function tick() {
      glyphs.forEach((_, i) => {
        const c = current.current[i];
        const t = targets.current[i];
        c.x += (t.x - c.x) * 0.12;
        c.y += (t.y - c.y) * 0.12;
        c.r += (t.r - c.r) * 0.12;
        const node = itemRefs.current[i];
        if (node) {
          node.style.transform = `translate(-50%, -50%) translate(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px) rotate(${c.r.toFixed(2)}deg)`;
        }
      });
      raf.current = requestAnimationFrame(tick);
    }

    if (!reduce) {
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      raf.current = requestAnimationFrame(tick);
    }
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden cursor-crosshair"
      style={{ height: "200px", background: "#161616" }}
    >
      {glyphs.map((g, i) => (
        <div
          key={i}
          ref={(n) => { itemRefs.current[i] = n; }}
          className="absolute"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            transform: "translate(-50%, -50%)",
            willChange: "transform",
          }}
        >
          <svg width={70 * g.size} height={70 * g.size} viewBox={`0 0 ${70 * g.size} ${70 * g.size}`} style={{ overflow: "visible" }}>
            <GlyphShape g={g} />
          </svg>
        </div>
      ))}

      {/* Hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/15 text-[10px] uppercase tracking-[0.3em] pointer-events-none select-none">
        Move your cursor
      </p>
    </div>
  );
}
