"use client";

import { useEffect, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const EVENT_DATE = new Date("2026-06-13T09:00:00+01:00");

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

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: pad(time.days) },
    { label: "Hours", value: pad(time.hours) },
    { label: "Minutes", value: pad(time.minutes) },
    { label: "Seconds", value: pad(time.seconds) },
  ];

  return (
    <section className="bg-[#272727] px-6 md:px-16 pt-8 pb-20 md:pb-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Label */}
        <SectionLabel>Counting Down</SectionLabel>
        <p className="text-white/35 text-sm font-light mb-10">
          June 13, 2026 &bull; Lagos, Nigeria
        </p>

        {/* Timer units — centered, semibold */}
        <div className="flex items-end justify-center gap-2 md:gap-4">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-end gap-2 md:gap-4">
              <div className="text-center">
                <div
                  className="font-semibold text-white tabular-nums leading-none"
                  style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
                >
                  {u.value}
                </div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mt-2">
                  {u.label}
                </p>
              </div>
              {i < units.length - 1 && (
                <span
                  className="text-[#B69556] font-semibold pb-6 md:pb-8 opacity-50"
                  style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
