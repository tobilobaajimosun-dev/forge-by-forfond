"use client";

import { useEffect, useState } from "react";

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
    <section className="bg-[#272727] px-6 md:px-16 py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-2">
              Counting Down
            </p>
            <p className="text-white/35 text-sm font-light">
              June 13, 2026 &bull; Lagos, Nigeria
            </p>
          </div>

          {/* Timer units */}
          <div className="flex items-end gap-2 md:gap-3">
            {units.map((u, i) => (
              <div key={u.label} className="flex items-end gap-2 md:gap-3">
                <div className="text-center">
                  <div
                    className="font-bold text-white tabular-nums leading-none"
                    style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
                  >
                    {u.value}
                  </div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mt-1">
                    {u.label}
                  </p>
                </div>
                {i < units.length - 1 && (
                  <span
                    className="text-[#B69556] font-bold pb-6 md:pb-8 opacity-60"
                    style={{ fontSize: "clamp(24px, 4vw, 48px)" }}
                  >
                    .
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
