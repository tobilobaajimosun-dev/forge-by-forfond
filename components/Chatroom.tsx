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
        <path d="M12 2v20M2 12h20"/>
        <path d="M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66"/>
      </svg>
    ),
  },
  {
    title: "Growth & Innovation",
    subtitle: "Scaling Strategy",
    body: "Map the next phase of your business. Identify what to build, what to drop, and how to move without breaking what works.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 17l5-5 4 4 8-9"/>
        <circle cx="20" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Corporate Finance",
    subtitle: "Capital Raising",
    body: "Know your numbers. Build an investor-ready story. Understand what funders actually look for — before you walk into the room.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 6v6l3.5 3.5"/>
      </svg>
    ),
  },
  {
    title: "Personal Finance",
    subtitle: "Wealth Building",
    body: "Your business is an asset. Learn how to pay yourself right, separate your money, and build wealth that outlasts the company.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="9" width="20" height="13" rx="2"/>
        <path d="M7 9V7a5 5 0 0110 0v2"/>
        <circle cx="12" cy="15.5" r="1.5"/>
      </svg>
    ),
  },
  {
    title: "AI for African SMEs",
    subtitle: "Practical Implementation",
    body: "Cut through the hype. Learn which AI tools actually work for your stage, your industry, and your team right now.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="5" width="14" height="14" rx="7"/>
        <path d="M9 12h6M12 9v6"/>
      </svg>
    ),
  },
];

export default function Chatroom() {
  const [hovered, setHovered] = useState<number | null>(2); // center card active by default

  return (
    <section className="bg-[#1a1a1a] pt-20 md:pt-32 pb-0 overflow-hidden">

      {/* Top block */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto mb-14 md:mb-20">
        <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
          The Chatroom
        </p>

        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">

          {/* Headline — sized to match reference */}
          <h2
            className="font-black text-white leading-[0.94] tracking-tight shrink-0"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
          >
            Your Questions.
            <br />
            <span
              className="inline"
              style={{
                background: "#B69556",
                color: "#111",
                padding: "0 10px 2px",
                display: "inline",
              }}
            >
              One Expert.
            </span>
            <br />
            Twenty Minutes.
          </h2>

          {/* Side copy — explanatory, succinct */}
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

      {/* Cards carousel — Stripe Sessions style */}
      <div
        className="flex gap-0 overflow-x-auto px-6 md:px-16 pb-16 md:pb-24"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {cards.map((card, i) => {
          const isActive = hovered === i;
          return (
            <div
              key={i}
              className="shrink-0 flex flex-col justify-between transition-all duration-300 cursor-pointer"
              style={{
                width: "clamp(240px, 28vw, 360px)",
                minHeight: "360px",
                padding: "32px 28px",
                marginRight: "1px",
                background: isActive ? "#B69556" : "#202020",
                scrollSnapAlign: "start",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(2)}
            >
              {/* Icon */}
              <div>
                <div
                  className="mb-6 transition-colors duration-300"
                  style={{ color: isActive ? "#111" : "#B69556" }}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <p
                  className="font-bold text-lg leading-tight mb-1 transition-colors duration-300"
                  style={{ color: isActive ? "#111" : "#fff" }}
                >
                  {card.title}
                </p>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-5 transition-colors duration-300"
                  style={{ color: isActive ? "#5a4020" : "#B69556" }}
                >
                  {card.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: isActive ? "#3a2a10" : "rgba(255,255,255,0.4)" }}
                >
                  {card.body}
                </p>
              </div>

              {/* Footer */}
              <div
                className="pt-6 mt-6 transition-colors duration-300"
                style={{
                  borderTop: `1px solid ${isActive ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300"
                  style={{ color: isActive ? "#5a4020" : "rgba(255,255,255,0.2)" }}
                >
                  20-min private session
                </p>
              </div>
            </div>
          );
        })}

        {/* Right trailing space */}
        <div className="shrink-0 w-6 md:w-16" />
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}
