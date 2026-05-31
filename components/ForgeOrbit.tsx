"use client";

// Positions calculated for 9 items on a circle:
// angle_i = -90 + i * 40 degrees (starts at top, clockwise)
// left = 50 + 42 * cos(angle), top = 50 + 42 * sin(angle)
const items = [
  {
    label: "Accounting",
    color: "#B69556",
    // θ = -90°
    left: "50%",
    top: "8%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
  },
  {
    label: "Tax",
    color: "#B69556",
    // θ = -50°
    left: "77%",
    top: "18%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M19 5L5 19M8.5 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19.5 17.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
      </svg>
    ),
  },
  {
    label: "Marketing",
    color: "#B69556",
    // θ = -10°
    left: "91.4%",
    top: "43%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    label: "Technology",
    color: "#B69556",
    // θ = 30°
    left: "86.4%",
    top: "71%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="4" y="8" width="16" height="10" rx="2"/>
        <path d="M8 8V6a4 4 0 0 1 8 0v2"/>
        <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Design",
    color: "#B69556",
    // θ = 70°
    left: "64.4%",
    top: "89.5%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    label: "AI",
    color: "#B69556",
    // θ = 110°
    left: "35.6%",
    top: "89.5%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h-4V9.5A4 4 0 0 1 12 2z"/>
        <path d="M8 12H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2"/>
        <circle cx="9" cy="17" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="17" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Law",
    color: "#B69556",
    // θ = 150°
    left: "13.6%",
    top: "71%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5 21h14"/>
        <path d="M5 6l-3 6h6L5 6zM19 6l-3 6h6L19 6z"/>
      </svg>
    ),
  },
  {
    label: "Governance",
    color: "#B69556",
    // θ = 190°
    left: "8.6%",
    top: "43%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3"/>
        <rect x="5" y="10" width="2" height="11"/>
        <rect x="11" y="10" width="2" height="11"/>
        <rect x="17" y="10" width="2" height="11"/>
      </svg>
    ),
  },
  {
    label: "Scale",
    color: "#B69556",
    // θ = 230°
    left: "23%",
    top: "18%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l5-5 4 4 8-9"/>
        <path d="M15 7h5v5"/>
      </svg>
    ),
  },
];

export default function ForgeOrbit() {
  return (
    <section className="bg-[#111111] px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            The Room
          </p>
          <h2
            className="font-black text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Built Around the Right Expertise
          </h2>
          <p className="text-white/35 text-sm font-light mt-4 max-w-md mx-auto leading-relaxed">
            Every seat at Forge is connected to the specialist knowledge your business actually needs.
          </p>
        </div>

        {/* Orbit diagram */}
        <div className="relative mx-auto" style={{ width: "min(560px, 100%)", aspectRatio: "1 / 1" }}>

          {/* SVG rings + connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 560 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer ring */}
            <circle cx="280" cy="280" r="220" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 6"/>
            {/* Mid ring */}
            <circle cx="280" cy="280" r="160" stroke="white" strokeOpacity="0.05" strokeWidth="1"/>
            {/* Inner ring */}
            <circle cx="280" cy="280" r="90" stroke="#B69556" strokeOpacity="0.12" strokeWidth="1"/>
            {/* Center glow */}
            <circle cx="280" cy="280" r="56" fill="#B69556" fillOpacity="0.04"/>

            {/* Connection lines from center to each icon position */}
            {/* θ = -90°: (280, 60) */}
            <line x1="280" y1="280" x2="280" y2="60" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = -50°: (421, 101) */}
            <line x1="280" y1="280" x2="421" y2="101" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = -10°: (497, 242) */}
            <line x1="280" y1="280" x2="497" y2="242" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = 30°: (470, 390) */}
            <line x1="280" y1="280" x2="470" y2="390" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = 70°: (354, 487) */}
            <line x1="280" y1="280" x2="354" y2="487" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = 110°: (206, 487) */}
            <line x1="280" y1="280" x2="206" y2="487" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = 150°: (90, 390) */}
            <line x1="280" y1="280" x2="90" y2="390" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = 190°: (63, 242) */}
            <line x1="280" y1="280" x2="63" y2="242" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
            {/* θ = 230°: (139, 101) */}
            <line x1="280" y1="280" x2="139" y2="101" stroke="#B69556" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 5"/>
          </svg>

          {/* Center — Forge logo */}
          <div
            className="absolute border border-[#B69556]/25 bg-[#1a1a1a] flex flex-col items-center justify-center"
            style={{
              width: "96px",
              height: "96px",
              borderRadius: "18px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 40px rgba(182,149,86,0.08)",
            }}
          >
            <span className="text-white font-black text-lg leading-none tracking-tight">F</span>
            <span className="text-[#B69556] text-[8px] font-semibold uppercase tracking-widest mt-1">Forge</span>
          </div>

          {/* Orbit items */}
          {items.map((item) => (
            <div
              key={item.label}
              className="absolute flex flex-col items-center gap-1.5"
              style={{
                left: item.left,
                top: item.top,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Icon card */}
              <div
                className="border border-white/10 bg-[#1c1c1c] hover:border-[#B69556]/40 hover:bg-[#B69556]/5 transition-all duration-200 flex items-center justify-center"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  color: "#B69556",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                }}
              >
                {item.icon}
              </div>
              {/* Label */}
              <span
                className="text-white/40 font-medium whitespace-nowrap"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
