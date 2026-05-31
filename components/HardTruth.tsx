"use client";

import { useEffect, useRef, useState } from "react";

const QUOTE =
  "The thing that eventually breaks a growing business was often broken long before the growth came.";

const words = QUOTE.split(" ");

export default function HardTruth() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(0); // number of words shown
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  // Trigger when section scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(words.length);
      setDone(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Type words in one by one
  useEffect(() => {
    if (!started) return;
    if (revealed >= words.length) {
      setDone(true);
      return;
    }
    const id = setTimeout(() => setRevealed((n) => n + 1), 95);
    return () => clearTimeout(id);
  }, [started, revealed]);

  return (
    <section ref={ref} className="bg-[#161616] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <p className="flex items-center gap-3 text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-12">
          <span className="inline-block w-8 h-px bg-[#B69556]/60" />
          The Hard Truth
        </p>

        {/* Word-by-word reveal headline with caret */}
        <h2
          className="font-bold text-white leading-[1.05] tracking-tight mb-16 min-h-[1.05em]"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          <span aria-hidden className="sr-only">{QUOTE}</span>
          <span aria-hidden>&ldquo;</span>
          {words.map((w, i) => (
            <span
              key={i}
              className="transition-all duration-300"
              style={{
                opacity: i < revealed ? 1 : 0,
                filter: i < revealed ? "blur(0px)" : "blur(8px)",
                color: i < revealed ? "#fff" : "transparent",
              }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
          <span aria-hidden>{done ? "”" : ""}</span>
          {/* Blinking caret while typing */}
          {!done && (
            <span
              className="inline-block align-baseline ml-1 caret-blink"
              style={{
                width: "0.07em",
                height: "0.92em",
                background: "#B69556",
                transform: "translateY(0.06em)",
              }}
            />
          )}
        </h2>

        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Body copy — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <p className="text-white/45 text-lg font-light leading-relaxed">
            Most founders discover too late that the records never properly
            kept, the taxes never strategically managed, the payroll systems
            never structured, the HR foundations never built &mdash; these are
            not problems growth solves.
          </p>
          <div>
            <p className="text-white/45 text-lg font-light leading-relaxed mb-8">
              They are the fault lines growth reveals. And by then, the cost of
              fixing them is far greater than the cost of building them right
              the first time.
            </p>
            <p className="text-white font-semibold text-lg leading-relaxed">
              Forge by ForFond was created for the founders who intend to build
              right, from the beginning.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
