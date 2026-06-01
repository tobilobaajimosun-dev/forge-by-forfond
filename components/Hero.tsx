"use client";

import { useEffect, useState } from "react";

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

export default function HeroText() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-black min-h-screen overflow-hidden">

      {/* ── Animated Raycast-style pattern ── */}
      {/* Drifting diagonal gold bands */}
      <div
        className="hero-bands absolute inset-[-20%] pointer-events-none"
        aria-hidden
        style={{
          background:
            "repeating-linear-gradient(125deg, rgba(182,149,86,0.12) 0px, rgba(182,149,86,0.12) 3px, transparent 3px, transparent 140px)",
          filter: "blur(0.4px)",
        }}
      />
      {/* Moving light sweep across the bands */}
      <div
        className="hero-sweep absolute pointer-events-none"
        aria-hidden
        style={{
          top: "-30%", left: 0, width: "55%", height: "160%",
          background:
            "linear-gradient(125deg, transparent, rgba(255,240,210,0.16) 45%, rgba(182,149,86,0.22) 55%, transparent)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />
      {/* Pulsing mesh glows */}
      <div
        className="hero-glow absolute pointer-events-none"
        aria-hidden
        style={{
          top: "-15%", right: "-5%", width: "60vw", height: "60vw",
          background: "radial-gradient(circle, rgba(182,149,86,0.20) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="hero-glow absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: "-20%", left: "-10%", width: "55vw", height: "55vw",
          background: "radial-gradient(circle, rgba(120,150,200,0.10) 0%, transparent 60%)",
          filter: "blur(60px)", animationDelay: "2s",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Event logo icon — glowing swoosh centerpiece */}
      <div
        className="absolute left-1/2 top-[38%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden
      >
        <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "520px", height: "520px", maxWidth: "85vw", maxHeight: "85vw",
            background: "radial-gradient(circle, rgba(182,149,86,0.22) 0%, transparent 60%)", filter: "blur(30px)" }}
        />
        <img
          src="/forge-mark.png"
          alt="Forge"
          className="ticket-float relative w-[clamp(220px,42vw,460px)] h-auto"
          draggable={false}
          style={{ filter: "drop-shadow(0 30px 70px rgba(182,149,86,0.30))" }}
        />
      </div>
      {/* Grain / noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Readability brush ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.20) 24%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.60) 80%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* ── Foreground content ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-start gap-10">

          {/* Left — wordmark + meta */}
          <div className="hero-in" style={{ animationDelay: "120ms" }}>
            <h1
              className="text-white leading-[0.9] mb-4"
              style={{
                fontFamily: "var(--font-geist-pixel-circle)",
                fontSize: "clamp(44px, 6.5vw, 96px)",
                fontWeight: 500,
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              Forge&rsquo;26
            </h1>

            <div className="flex gap-10">
              <div className="text-[11px] md:text-xs uppercase tracking-widest leading-relaxed tabular-nums">
                <p className="text-white">Lagos</p>
                <p className="text-white/55">Nigeria</p>
              </div>
              <div className="text-[11px] md:text-xs uppercase tracking-widest leading-relaxed">
                <p className="text-white">June 13</p>
                <p className="text-[#B69556] tabular-nums">
                  {pad(time.d)}D.{pad(time.h)}H.{pad(time.m)}M.{pad(time.s)}S
                </p>
              </div>
            </div>
          </div>

          {/* Right — supporting line above CTA (top-aligned with the wordmark) */}
          <div className="hero-in flex flex-col items-start md:items-end gap-5" style={{ animationDelay: "260ms" }}>
            <p className="text-white text-base md:text-lg font-light leading-snug max-w-sm md:text-right">
              The room where growth &amp; scale-oriented founders build what lasts.
            </p>
            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn group inline-flex items-center gap-3 bg-[#B69556] hover:bg-[#c9a96a] text-black font-medium text-lg md:text-xl px-7 h-16 transition-colors duration-150"
            >
              Request an invite
              <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
            <a
              href="#agenda"
              className="text-white/50 hover:text-white text-[11px] uppercase tracking-widest transition-colors duration-150"
            >
              Or view the schedule
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
