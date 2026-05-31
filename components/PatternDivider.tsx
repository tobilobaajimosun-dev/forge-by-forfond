"use client";

import { useEffect, useRef } from "react";

type Glyph = {
  x: number; // % position (center)
  y: number; // % position (center)
  type: "bar" | "arrow" | "peak" | "chevron-up";
  color: string;
  size: number; // scale multiplier
  rot: number;
};

const GOLD = "#B69556";
const GOLD_DIM = "#7a6238";
const WHITE = "rgba(255,255,255,0.30)";

// A growth ramp: ascending bars left→right, an upward arrow, ascending peaks.
// Big, recognizable shapes that read as "scale / growth".
const glyphs: Glyph[] = [
  // Ascending bar chart (growth) — bars get taller toward the right
  { x: 6, y: 64, type: "bar", color: GOLD_DIM, size: 0.55, rot: 0 },
  { x: 11, y: 60, type: "bar", color: GOLD_DIM, size: 0.72, rot: 0 },
  { x: 16, y: 55, type: "bar", color: GOLD, size: 0.9, rot: 0 },
  { x: 21, y: 48, type: "bar", color: GOLD, size: 1.12, rot: 0 },
  { x: 26, y: 40, type: "bar", color: GOLD, size: 1.36, rot: 0 },
  // Upward arrow shooting up out of the chart
  { x: 34, y: 42, type: "arrow", color: WHITE, size: 1.3, rot: 0 },
  // Ascending mountain peaks (scaling)
  { x: 46, y: 60, type: "peak", color: GOLD_DIM, size: 0.8, rot: 0 },
  { x: 53, y: 50, type: "peak", color: GOLD, size: 1.1, rot: 0 },
  { x: 60, y: 38, type: "peak", color: GOLD, size: 1.45, rot: 0 },
  // Up-chevrons climbing
  { x: 72, y: 58, type: "chevron-up", color: WHITE, size: 0.9, rot: 0 },
  { x: 77, y: 48, type: "chevron-up", color: GOLD, size: 1.1, rot: 0 },
  { x: 82, y: 38, type: "chevron-up", color: GOLD, size: 1.3, rot: 0 },
  // Second ascending arrow at the far right
  { x: 92, y: 44, type: "arrow", color: GOLD, size: 1.2, rot: 0 },
];

function GlyphShape({ g }: { g: Glyph }) {
  const s = g.size;
  switch (g.type) {
    case "bar":
      // Vertical growth bar, anchored bottom
      return <rect x={0} y={0} width={26} height={90 * s} rx={5} fill={g.color} />;
    case "arrow": {
      const u = 70 * s;
      return (
        <g stroke={g.color} fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round">
          {/* shaft */}
          <line x1={u * 0.1} y1={u} x2={u * 0.9} y2={u * 0.12} />
          {/* head */}
          <polyline points={`${u * 0.5},${u * 0.06} ${u * 0.92},${u * 0.08} ${u * 0.9},${u * 0.5}`} />
        </g>
      );
    }
    case "peak":
      // Filled mountain/triangle
      return <polygon points={`${42 * s},0 ${84 * s},${72 * s} 0,${72 * s}`} fill={g.color} />;
    case "chevron-up":
      return (
        <path
          d={`M0,${36 * s} L${30 * s},0 L${60 * s},${36 * s}`}
          stroke={g.color}
          fill="none"
          strokeWidth={7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
      style={{ height: "260px", background: "#161616" }}
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
          <svg width={90 * g.size} height={90 * g.size} viewBox={`0 0 ${90 * g.size} ${90 * g.size}`} style={{ overflow: "visible" }}>
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
