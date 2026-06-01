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

const MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace";

export default function HeroText() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-black min-h-screen overflow-hidden">

      {/* ── Raycast-style pattern (black + gold) ── */}
      {/* Soft diagonal gold bands */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "repeating-linear-gradient(115deg, rgba(182,149,86,0.10) 0px, rgba(182,149,86,0.10) 2px, transparent 2px, transparent 130px)",
          filter: "blur(0.5px)",
        }}
      />
      {/* Large soft gold glows (mesh) */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: "-15%", right: "-5%", width: "60vw", height: "60vw",
          background: "radial-gradient(circle, rgba(182,149,86,0.18) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: "-20%", left: "-10%", width: "55vw", height: "55vw",
          background: "radial-gradient(circle, rgba(182,149,86,0.10) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Readability brush: darken top (nav) and bottom (text) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 22%, rgba(0,0,0,0.10) 50%, rgba(0,0,0,0.65) 82%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      {/* Soft brushed glow behind the bottom-left text block */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          left: "-10%", bottom: "-5%", width: "70vw", height: "50vh",
          background: "radial-gradient(ellipse at 30% 70%, rgba(0,0,0,0.85) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── Foreground content ── */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-end gap-10">

          {/* Bottom-left — wordmark + meta */}
          <div>
            <h1
              className="text-white leading-[0.9] mb-4"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(46px, 7vw, 100px)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Forge&rsquo;26
            </h1>

            <div className="flex gap-10" style={{ fontFamily: MONO }}>
              <div className="text-[11px] md:text-xs uppercase tracking-widest leading-relaxed">
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

          {/* Bottom-right — supporting line ABOVE the CTA */}
          <div className="flex flex-col items-start md:items-end gap-5">
            <p
              className="text-white text-lg md:text-xl font-light leading-snug max-w-sm md:text-right"
              style={{ color: "#FFFFFF" }}
            >
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
              style={{ fontFamily: MONO }}
            >
              Or view the schedule
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
