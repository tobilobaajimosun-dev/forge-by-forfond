"use client";

import { useEffect, useRef, useState } from "react";

const EVENT_DATE = new Date("2026-06-13T09:00:00+01:00");
const REGISTER = "https://tally.so/r/ZjDaXA";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [time, setTime] = useState(getTimeLeft());
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 120);
      // Hide nav when scrolling down past 220px; show when scrolling up
      if (y > lastY.current && y > 220) {
        setNavHidden(true);
      } else if (y < lastY.current) {
        setNavHidden(false);
      }
      lastY.current = y;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Countdown banner — appears on scroll, always stays once shown */}
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: scrolled ? "40px" : "0px", opacity: scrolled ? 1 : 0 }}
      >
        <a
          href={REGISTER}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#B69556] hover:bg-[#c9a96a] transition-colors duration-150"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-16 h-10 flex items-center justify-center gap-3 text-black">
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-widest">
              Forge &mdash; June 13, 2026
            </span>
            <span className="hidden sm:inline text-black/40">|</span>
            <span
              className="text-[11px] font-bold tabular-nums tracking-wider"
              style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
            >
              {pad(time.days)}d : {pad(time.hours)}h : {pad(time.minutes)}m : {pad(time.seconds)}s
            </span>
            <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest underline underline-offset-2">
              Request an Invite →
            </span>
          </div>
        </a>
      </div>

      {/* Nav bar — hides on scroll-down, reappears on scroll-up */}
      <div
        className="transition-all duration-300 ease-out"
        style={{
          transform: navHidden ? "translateY(-100%)" : "translateY(0)",
          opacity: navHidden ? 0 : 1,
          pointerEvents: navHidden ? "none" : "auto",
        }}
      >
        <nav className="relative border-b border-white/[0.08]">
          <div className="absolute inset-0 bg-[#000000]/70 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-16 h-16 flex items-center">

            {/* Left nav */}
            <div className="hidden md:flex items-center gap-7 text-[11px] text-white/45 uppercase tracking-widest font-medium">
              <a href="#who" className="hover:text-white transition-colors duration-150">Who Should Attend</a>
              <a href="#agenda" className="hover:text-white transition-colors duration-150">Schedule</a>
            </div>

            {/* Center logo — swoosh mark */}
            <a href="#top" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <img
                src="/forge-mark.png"
                alt="Forge"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </a>

            {/* Right nav */}
            <div className="hidden md:flex items-center gap-5 ml-auto">
              <a
                href="#faq"
                className="text-[11px] text-white/45 uppercase tracking-widest font-medium hover:text-white transition-colors duration-150"
              >
                FAQ
              </a>
              <a
                href={REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold uppercase tracking-widest px-4 py-2 border border-white/25 text-white/80 hover:bg-[#B69556] hover:border-[#B69556] hover:text-black transition-all duration-200"
              >
                Register
              </a>
            </div>

            {/* Mobile register */}
            <a
              href={REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden ml-auto text-[11px] font-semibold uppercase tracking-widest px-4 py-2 border border-white/25 text-white/80 hover:bg-[#B69556] hover:border-[#B69556] hover:text-black transition-all duration-200"
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
