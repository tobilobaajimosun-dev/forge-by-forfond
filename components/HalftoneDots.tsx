"use client";

import { useEffect, useRef } from "react";

/**
 * Halftone dots — renders `text` as a field of dots whose radius tracks ink
 * coverage (inspired by haaarshsingh/halftone-dots). Dots react to the cursor
 * (grow + turn gold) and breathe with a subtle idle wave. Canvas + rAF, HiDPI,
 * respects prefers-reduced-motion.
 */
export default function HalftoneDots({
  text = "FORGE",
  height = 320,
  gap = 11,
  bg = "#ece8df",
  dot = "#1c1c1c",
  accent = "#B69556",
}: {
  text?: string;
  height?: number;
  gap?: number;
  bg?: string;
  dot?: string;
  accent?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    type Cell = { x: number; y: number; base: number }; // base radius
    let cells: Cell[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let t = 0;

    function build() {
      const rect = wrap!.getBoundingClientRect();
      W = Math.max(1, Math.floor(rect.width));
      H = height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Offscreen text mask
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const octx = off.getContext("2d")!;
      octx.fillStyle = "#000";
      octx.clearRect(0, 0, W, H);
      // Fit font size to width
      let fontSize = Math.min(H * 0.62, (W / Math.max(text.length, 1)) * 1.5);
      octx.font = `800 ${fontSize}px "Hanken Grotesk", system-ui, sans-serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      // shrink to fit width with padding
      let measured = octx.measureText(text).width;
      const maxW = W * 0.9;
      if (measured > maxW) {
        fontSize *= maxW / measured;
        octx.font = `800 ${fontSize}px "Hanken Grotesk", system-ui, sans-serif`;
      }
      octx.fillText(text, W / 2, H / 2 + fontSize * 0.02);
      const data = octx.getImageData(0, 0, W, H).data;

      cells = [];
      for (let y = gap / 2; y < H; y += gap) {
        for (let x = gap / 2; x < W; x += gap) {
          // sample alpha coverage in the cell (a few taps)
          let sum = 0;
          let n = 0;
          for (let sy = -2; sy <= 2; sy += 2) {
            for (let sx = -2; sx <= 2; sx += 2) {
              const px = Math.floor(x + sx);
              const py = Math.floor(y + sy);
              if (px >= 0 && px < W && py >= 0 && py < H) {
                sum += data[(py * W + px) * 4 + 3]; // alpha
                n++;
              }
            }
          }
          const cov = n ? sum / n / 255 : 0;
          if (cov > 0.04) {
            cells.push({ x, y, base: (gap / 2) * Math.min(1, cov) * 0.95 });
          }
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, W, H);

      const R = 90; // cursor influence radius
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        let r = c.base;
        let color = dot;

        // idle breathing wave
        if (!reduce) {
          r += Math.sin(t * 0.0016 + c.x * 0.02 + c.y * 0.02) * 0.5;
        }

        // cursor interaction
        const dx = c.x - mouse.x;
        const dy = c.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < R) {
          const f = 1 - dist / R;
          r += f * (gap / 2) * 1.4;
          color = accent;
        }

        if (r <= 0.2) continue;
        ctx!.beginPath();
        ctx!.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = color;
        ctx!.fill();
      }
    }

    function loop(now: number) {
      t = now;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    build();
    draw();
    if (!reduce) raf = requestAnimationFrame(loop);

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    const ro = new ResizeObserver(() => {
      build();
      draw();
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      ro.disconnect();
    };
  }, [text, height, gap, bg, dot, accent]);

  return (
    <div ref={wrapRef} className="w-full" style={{ height }}>
      <canvas ref={canvasRef} className="block w-full cursor-crosshair" style={{ height }} />
    </div>
  );
}
