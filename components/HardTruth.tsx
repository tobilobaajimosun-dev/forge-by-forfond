"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

// Story as word tokens. `br: 2` = paragraph break, `g` = gold emphasis.
type Tok = { w: string; g?: boolean; br?: number };

const tokens: Tok[] = [
  { w: "Every" }, { w: "founder" }, { w: "starts" }, { w: "with" }, { w: "a" }, { w: "vision." , br: 2 },

  { w: "But" }, { w: "somewhere" }, { w: "between" }, { w: "the" }, { w: "first" }, { w: "hire" },
  { w: "and" }, { w: "the" }, { w: "first" }, { w: "real" }, { w: "contract," },
  { w: "the", g: true }, { w: "cracks", g: true }, { w: "begin", g: true }, { w: "to", g: true }, { w: "show.", g: true, br: 2 },

  { w: "The" }, { w: "records" }, { w: "never", g: true }, { w: "kept." , g: true }, { w: "The" }, { w: "taxes" },
  { w: "never", g: true }, { w: "managed.", g: true }, { w: "The" }, { w: "payroll" }, { w: "held" }, { w: "together" }, { w: "by" }, { w: "goodwill." , br: 2 },

  { w: "Growth" }, { w: "doesn’t" }, { w: "fix" }, { w: "this." },
  { w: "It", g: true }, { w: "exposes", g: true }, { w: "it.", g: true, br: 2 },

  { w: "Forge" }, { w: "is" }, { w: "for" }, { w: "the" }, { w: "founders" }, { w: "who" },
  { w: "build", g: true }, { w: "right", g: true }, { w: "—", g: true }, { w: "from", g: true }, { w: "the", g: true }, { w: "start.", g: true },
];

export default function HardTruth() {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);
  const done = n >= tokens.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(tokens.length);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || done) return;
    const t = tokens[n];
    // Pause a little longer at paragraph breaks
    const delay = t?.br ? 260 : 60;
    const id = setTimeout(() => setN((v) => v + 1), delay);
    return () => clearTimeout(id);
  }, [started, n, done]);

  return (
    <section ref={ref} className="bg-[#161616] px-6 md:px-16 py-28 md:py-40">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>The Hard Truth</SectionLabel>

        <p
          className="mt-6"
          style={{
            fontSize: "clamp(26px, 3.8vw, 50px)",
            lineHeight: 1.32,
            fontWeight: 500,
            letterSpacing: "-0.015em",
          }}
        >
          {tokens.map((t, i) => {
            const shown = i < n;
            return (
              <span key={i}>
                <span
                  style={{
                    color: shown ? (t.g ? "#B69556" : "#fff") : "transparent",
                    transition: "color 200ms ease",
                  }}
                >
                  {t.w}
                </span>
                {shown && t.br ? <><br /><br /></> : " "}
              </span>
            );
          })}
          {/* Typewriter caret */}
          {!done && (
            <span
              className="caret-blink"
              style={{
                display: "inline-block",
                width: "3px",
                height: "0.95em",
                background: "#B69556",
                transform: "translateY(0.12em)",
              }}
            />
          )}
        </p>
      </div>
    </section>
  );
}
