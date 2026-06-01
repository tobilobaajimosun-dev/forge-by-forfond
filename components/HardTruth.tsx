"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

type Tok = { w: string; g?: boolean; br?: number };

const tokens: Tok[] = [
  { w: "Every" }, { w: "founder" }, { w: "starts" }, { w: "with" }, { w: "a" }, { w: "vision." , br: 2 },

  { w: "But" }, { w: "somewhere" }, { w: "between" }, { w: "the" }, { w: "first" }, { w: "hire" },
  { w: "and" }, { w: "the" }, { w: "first" }, { w: "real" }, { w: "contract," },
  { w: "the", g: true }, { w: "cracks", g: true }, { w: "begin", g: true }, { w: "to", g: true }, { w: "show.", g: true, br: 2 },

  { w: "The" }, { w: "records" }, { w: "never", g: true }, { w: "kept." , g: true }, { w: "The" }, { w: "taxes" },
  { w: "never", g: true }, { w: "managed.", g: true }, { w: "The" }, { w: "payroll" }, { w: "held" }, { w: "together" }, { w: "by" }, { w: "goodwill." , br: 2 },

  { w: "Growth" }, { w: "doesn’t" }, { w: "fix" }, { w: "this." },
  { w: "It", g: true }, { w: "exposes", g: true }, { w: "it.", g: true },
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
    const delay = tokens[n]?.br ? 220 : 55;
    const id = setTimeout(() => setN((v) => v + 1), delay);
    return () => clearTimeout(id);
  }, [started, n, done]);

  return (
    <section ref={ref} className="bg-black px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>The Hard Truth</SectionLabel>

        <p
          className="mt-6"
          style={{
            fontSize: "clamp(20px, 2.6vw, 34px)",
            lineHeight: 1.45,
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {tokens.map((t, i) => {
            const shown = i < n;
            return (
              <span key={i}>
                <span
                  style={{
                    color: shown ? (t.g ? "#B69556" : "#fff") : "rgba(255,255,255,0.12)",
                    filter: shown ? "blur(0px)" : "blur(4px)",
                    transition: "color 360ms ease, filter 360ms ease",
                  }}
                >
                  {t.w}
                </span>
                {shown && t.br ? <><br /><br /></> : " "}
              </span>
            );
          })}
        </p>

        {/* Question card — glitch border */}
        <div className="mt-14 md:mt-16">
          <div
            className="glitch-border rounded-2xl border border-white/10 bg-[#0c0c0c] px-8 py-10 md:px-12 md:py-14"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          >
            <p className="text-[#B69556] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              The Real Question
            </p>
            <h3
              className="text-white tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 500 }}
            >
              Built to Be{" "}
              <span className="text-white/30">Broken.</span>{" "}
              Or Built to Scale?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
