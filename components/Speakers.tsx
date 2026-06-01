"use client";

import { useState } from "react";

// Replace photo URLs with real speaker photos when available.
// These are high-quality placeholder headshots — apply B&W via CSS filter.
const speakers = [
  {
    name: "Chidi Nwachukwu",
    title: "Legal & Compliance / Corporate Governance",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Amara Osei",
    title: "Accounting & Tax",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Tunde Fashola",
    title: "Growth & Innovation",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Ngozi Adeyemi",
    title: "Corporate Finance & Capital Raising",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Kwame Mensah",
    title: "Personal Finance",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Adaeze Okafor",
    title: "AI for African SMEs",
    photo:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=80",
  },
];

export default function Speakers() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="speakers"
      className="bg-[#111111] px-6 md:px-16 py-24 md:py-36"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              The Lineup
            </p>
            <h2
              className="font-bold text-white leading-[0.92] tracking-tight"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontFamily:
                  "var(--font-body)",
              }}
            >
              Expert
              <br />
              Consultants
            </h2>
          </div>
          <p className="text-white/25 text-xs uppercase tracking-widest font-medium">
            Speakers TBA — full lineup
            <br />
            announced before June 13
          </p>
        </div>

        {/* Main panel */}
        <div className="flex flex-col md:flex-row border border-white/10">

          {/* Left — speaker list */}
          <div className="flex-1 md:w-[55%] divide-y divide-white/[0.07]">
            {speakers.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-4 transition-colors duration-150 group ${
                  active === i ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                }`}
              >
                <div>
                  <p
                    className={`text-sm md:text-base font-semibold uppercase tracking-wider transition-colors duration-150 ${
                      active === i ? "text-white" : "text-white/30"
                    }`}
                    style={{
                      fontFamily:
                        "var(--font-body)",
                    }}
                  >
                    {s.name}
                  </p>
                  <p
                    className={`text-xs uppercase tracking-widest mt-1 transition-colors duration-150 ${
                      active === i ? "text-[#B69556]" : "text-white/20"
                    }`}
                    style={{
                      fontFamily:
                        "var(--font-body)",
                    }}
                  >
                    {s.title}
                  </p>
                </div>

                {/* Active indicator */}
                <div
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-150 ${
                    active === i ? "bg-[#B69556] scale-150" : "bg-white/10"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right — photo panel */}
          <div className="hidden md:block md:w-[45%] relative overflow-hidden bg-[#0a0a0a]">
            {speakers.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: active === i ? 1 : 0 }}
              >
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter:
                      "grayscale(100%) brightness(0.8) contrast(1.15)",
                  }}
                  draggable={false}
                />
                {/* Subtle gold tint overlay on active */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(182,149,86,0.12) 0%, transparent 60%)",
                  }}
                />
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p
                    className="text-white text-xs uppercase tracking-widest font-semibold"
                    style={{
                      fontFamily:
                        "var(--font-body)",
                    }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="text-[#B69556] text-[10px] uppercase tracking-widest mt-1"
                    style={{
                      fontFamily:
                        "var(--font-body)",
                    }}
                  >
                    {s.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/[0.06] pt-6">
          <p className="text-white/25 text-xs uppercase tracking-widest">
            Full facilitator profiles published ahead of June 13, 2026
          </p>
          <a
            href="#register"
            className="text-[#B69556] text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors duration-150"
          >
            Register to be notified →
          </a>
        </div>

      </div>
    </section>
  );
}
