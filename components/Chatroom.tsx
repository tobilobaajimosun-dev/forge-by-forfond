"use client";

import { useState } from "react";

const cards = [
  {
    title: "Legal & Compliance",
    subtitle: "Corporate Governance",
    body: "Understand your obligations. Structure your company correctly. Navigate compliance before it becomes a costly crisis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M7 8h10M7 12h6M7 16h8"/>
      </svg>
    ),
  },
  {
    title: "Accounting & Tax",
    subtitle: "Strategic Tax Planning",
    body: "Stop reacting to tax season. Build an accounting structure that works for your business at every stage of growth.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v20M2 12h20"/><path d="M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66"/>
      </svg>
    ),
  },
  {
    title: "Growth & Innovation",
    subtitle: "Scaling Strategy",
    body: "Map the next phase of your business. Identify what to build, what to drop, and how to move without breaking what works.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 17l5-5 4 4 8-9"/><circle cx="20" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Corporate Finance",
    subtitle: "Capital Raising",
    body: "Know your numbers. Build an investor-ready story. Understand what funders actually look for — before you walk into the room.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 6v6l3.5 3.5"/>
      </svg>
    ),
  },
  {
    title: "Personal Finance",
    subtitle: "Wealth Building",
    body: "Your business is an asset. Learn how to pay yourself right, separate your money, and build wealth that outlasts the company.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="9" width="20" height="13" rx="2"/><path d="M7 9V7a5 5 0 0110 0v2"/><circle cx="12" cy="15.5" r="1.5"/>
      </svg>
    ),
  },
  {
    title: "AI for African SMEs",
    subtitle: "Practical Implementation",
    body: "Cut through the hype. Learn which AI tools actually work for your stage, your industry, and your team right now.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="5" width="14" height="14" rx="7"/><path d="M9 12h6M12 9v6"/>
      </svg>
    ),
  },
];

// Highlighter span — gold underline mark behind text
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(transparent 65%, rgba(182,149,86,0.55) 65%)",
        display: "inline",
      }}
    >
      {children}
    </span>
  );
}

export default function Chatroom() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-[#1a1a1a] pt-20 md:pt-32 pb-0 overflow-hidden">

      {/* Top block */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto mb-14 md:mb-20">
        <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
          The Chatroom
        </p>

        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">

          {/* Headline — each line has gold highlighter underneath */}
          <h2
            className="font-bold text-white leading-[1.05] tracking-tight shrink-0"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
          >
            <Highlight>Your Questions.</Highlight>
            <br />
            <Highlight>One Expert.</Highlight>
            <br />
            <Highlight>Twenty Minutes.</Highlight>
          </h2>

          {/* Side copy */}
          <div className="max-w-xs pt-1 md:pt-2">
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              After the main sessions, every delegate sits privately with a
              specialist in the exact area their business needs most. No
              audience. No agenda but yours.
            </p>
            <p className="text-white/80 text-sm font-semibold leading-relaxed">
              Pick your area. Bring your real question.
              Walk out with a clear next step.
            </p>
          </div>

        </div>
      </div>

      {/* Staggered cards — alternating Y offset + shadow + overlap */}
      <div
        className="flex overflow-x-auto px-6 md:px-16 pb-24"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          alignItems: "flex-start",
          paddingBottom: "80px",   // room for shadow
          paddingTop: "12px",       // room for shadow on top
        }}
      >
        {cards.map((card, i) => {
          const isActive = hovered === i;
          // Alternating stagger: even = high, odd = low
          const staggerY = i % 2 === 0 ? 0 : 48;

          return (
            <div
              key={i}
              className="shrink-0 flex flex-col justify-between cursor-pointer"
              style={{
                width: "clamp(230px, 26vw, 320px)",
                minHeight: "340px",
                padding: "28px 24px",
                borderRadius: "18px",
                // Overlap adjacent cards slightly
                marginRight: "-12px",
                marginTop: staggerY,
                zIndex: isActive ? 10 : i,
                background: isActive ? "#B69556" : "#202020",
                boxShadow: isActive
                  ? "0 16px 40px rgba(0,0,0,0.28)"
                  : "0 8px 24px rgba(0,0,0,0.18)",
                transition:
                  "background 250ms cubic-bezier(0.23,1,0.32,1), box-shadow 250ms cubic-bezier(0.23,1,0.32,1), z-index 0ms",
                scrollSnapAlign: "start",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon */}
              <div>
                <div
                  className="mb-5"
                  style={{
                    color: isActive ? "#111" : "#B69556",
                    transition: "color 250ms ease",
                  }}
                >
                  {card.icon}
                </div>

                <p
                  className="font-bold text-base leading-tight mb-1"
                  style={{
                    color: isActive ? "#111" : "#fff",
                    transition: "color 250ms ease",
                  }}
                >
                  {card.title}
                </p>
                <p
                  className="text-[10px] uppercase tracking-widest font-semibold mb-4"
                  style={{
                    color: isActive ? "#5a3d10" : "#B69556",
                    transition: "color 250ms ease",
                  }}
                >
                  {card.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: isActive ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.38)",
                    transition: "color 250ms ease",
                  }}
                >
                  {card.body}
                </p>
              </div>

              {/* Footer */}
              <div
                className="pt-5 mt-5"
                style={{
                  borderTop: `1px solid ${isActive ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.06)"}`,
                  transition: "border-color 250ms ease",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold"
                  style={{
                    color: isActive ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.18)",
                    transition: "color 250ms ease",
                  }}
                >
                  20-min private session
                </p>
              </div>
            </div>
          );
        })}

        <div className="shrink-0 w-8 md:w-16" />
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}
