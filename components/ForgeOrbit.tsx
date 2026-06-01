"use client";

import SectionLabel from "@/components/SectionLabel";

// 9 expertise areas positioned on a circle (viewBox 560×560, center 280,280, r=210).
// angle_i = -90 + i*40 degrees.
const items = [
  { label: "Accounting", x: 280, y: 70, leftPct: "50%", topPct: "12.5%" },
  { label: "Tax", x: 415, y: 119, leftPct: "74.1%", topPct: "21.3%" },
  { label: "Marketing", x: 487, y: 244, leftPct: "86.96%", topPct: "43.6%" },
  { label: "Technology", x: 462, y: 385, leftPct: "82.5%", topPct: "68.75%" },
  { label: "Design", x: 352, y: 477, leftPct: "62.9%", topPct: "85.2%" },
  { label: "AI", x: 208, y: 477, leftPct: "37.1%", topPct: "85.2%" },
  { label: "Law", x: 98, y: 385, leftPct: "17.5%", topPct: "68.75%" },
  { label: "Governance", x: 73, y: 244, leftPct: "13%", topPct: "43.6%" },
  { label: "Scale", x: 145, y: 119, leftPct: "25.9%", topPct: "21.3%" },
];

const icons: Record<string, React.ReactNode> = {
  Accounting: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
  ),
  Tax: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M19 5L5 19M8.5 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19.5 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>
  ),
  Marketing: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
  ),
  Technology: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="4" y="8" width="16" height="10" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/><circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none"/></svg>
  ),
  Design: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
  ),
  AI: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z"/><path d="M8 12H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2"/><circle cx="9" cy="17" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="17" r="1" fill="currentColor" stroke="none"/></svg>
  ),
  Law: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M5 21h14"/><path d="M5 6l-3 6h6L5 6zM19 6l-3 6h6L19 6z"/></svg>
  ),
  Governance: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 21h18M3 10h18M5 6l7-3 7 3"/><rect x="5" y="10" width="2" height="11"/><rect x="11" y="10" width="2" height="11"/><rect x="17" y="10" width="2" height="11"/></svg>
  ),
  Scale: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l5-5 4 4 8-9"/><path d="M15 7h5v5"/></svg>
  ),
};

export default function ForgeOrbit() {
  return (
    <section className="bg-[#111111] px-6 md:px-16 py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SectionLabel>The Room</SectionLabel>
          </div>
          <h2 className="section-h">
            Built Around the Right Expertise
          </h2>
          <p className="text-white/35 text-sm font-light mt-4 max-w-md mx-auto leading-relaxed">
            Every seat at Forge is connected to the specialist knowledge your business actually needs.
          </p>
        </div>

        {/* Orbit diagram */}
        <div className="relative mx-auto" style={{ width: "min(560px, 100%)", aspectRatio: "1 / 1" }}>

          {/* Rotating layer: spokes + light pulses + icons */}
          <div className="orbit-spin absolute inset-0">

            {/* SVG spokes + traveling light pulses */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="pulseGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F4D9A0" stopOpacity="1" />
                  <stop offset="60%" stopColor="#B69556" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#B69556" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Rings */}
              <circle cx="280" cy="280" r="210" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="3 7" />
              <circle cx="280" cy="280" r="150" stroke="white" strokeOpacity="0.04" strokeWidth="1" />
              <circle cx="280" cy="280" r="84" stroke="#B69556" strokeOpacity="0.12" strokeWidth="1" />

              {/* Spokes + pulses */}
              {items.map((it, i) => (
                <g key={it.label}>
                  <line
                    x1="280" y1="280" x2={it.x} y2={it.y}
                    stroke="#B69556" strokeOpacity="0.12" strokeWidth="1"
                  />
                  {/* Traveling light pulse from center → icon */}
                  <circle r="5" fill="url(#pulseGlow)">
                    <animateMotion
                      dur="2.6s"
                      begin={`${i * 0.29}s`}
                      repeatCount="indefinite"
                      path={`M280,280 L${it.x},${it.y}`}
                      keyPoints="0;1"
                      keyTimes="0;1"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                    />
                    <animate
                      attributeName="opacity"
                      dur="2.6s"
                      begin={`${i * 0.29}s`}
                      repeatCount="indefinite"
                      values="0;1;1;0"
                      keyTimes="0;0.15;0.7;1"
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Icon cards — counter-rotate to stay upright */}
            {items.map((it) => (
              <div
                key={it.label}
                className="absolute"
                style={{ left: it.leftPct, top: it.topPct, transform: "translate(-50%, -50%)" }}
              >
                <div className="orbit-counter flex flex-col items-center gap-1.5">
                  <div
                    className="border border-white/10 bg-[#1c1c1c] flex items-center justify-center"
                    style={{ width: "50px", height: "50px", borderRadius: "12px", color: "#B69556", boxShadow: "0 6px 18px rgba(0,0,0,0.3)" }}
                  >
                    {icons[it.label]}
                  </div>
                  <span className="text-white/40 font-medium whitespace-nowrap" style={{ fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {it.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center — Forge logo (static, with pulsing glow) */}
          <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%)" }}>
            {/* Glow */}
            <div
              className="orbit-center-glow absolute left-1/2 top-1/2 rounded-full pointer-events-none"
              style={{
                width: "140px", height: "140px",
                background: "radial-gradient(circle, rgba(182,149,86,0.25) 0%, transparent 70%)",
              }}
            />
            {/* Logo card */}
            <div
              className="relative border border-[#B69556]/30 bg-[#111111] flex items-center justify-center"
              style={{ width: "104px", height: "104px", borderRadius: "20px", boxShadow: "0 0 40px rgba(182,149,86,0.14)" }}
            >
              <img src="/forge-mark.png" loading="lazy" alt="Forge" className="w-14 h-auto object-contain" draggable={false} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
