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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || done) return;
    const delay = tokens[n]?.br ? 260 : 70; // a touch slower → smoother to read
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
            lineHeight: 1.5,
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
                    display: "inline-block",
                    color: shown ? (t.g ? "#B69556" : "#fff") : "rgba(255,255,255,0.10)",
                    filter: shown ? "blur(0px)" : "blur(5px)",
                    opacity: shown ? 1 : 0.5,
                    transform: shown ? "translateY(0)" : "translateY(4px)",
                    transition:
                      "color 600ms cubic-bezier(0.23,1,0.32,1), filter 600ms cubic-bezier(0.23,1,0.32,1), opacity 600ms cubic-bezier(0.23,1,0.32,1), transform 600ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                >
                  {t.w}
                </span>
                {shown && t.br ? <><br /><br /></> : " "}
              </span>
            );
          })}
        </p>

        {/* Question card — appears (blurs in) only after the text finishes */}
        <div className="mt-14 md:mt-16">
          <div
            data-show={done ? "true" : "false"}
            className="card-reveal rounded-2xl border border-white/10 bg-[#0c0c0c] px-8 py-10 md:px-12 md:py-14"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
          >
            <p className="text-[#B69556] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
              The Real Question
            </p>
            <h3
              className="text-white tracking-tight leading-[1.08]"
              style={{ fontSize: "clamp(26px, 3.6vw, 48px)", fontWeight: 500 }}
            >
              Is your business built to be{" "}
              <span className="text-white/30">broken</span>
              {" "}or built to scale?
            </h3>
            <a
              href="https://tally.so/r/ZjDaXA"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn group mt-7 inline-flex items-center gap-2.5 bg-[#B69556] hover:bg-[#c9a96a] text-black font-semibold text-sm uppercase tracking-widest px-6 h-12 transition-colors duration-150"
            >
              Come find out
              <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
