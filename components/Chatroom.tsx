"use client";

import { useRef } from "react";

const cards = [
  {
    title: "Legal & Compliance",
    subtitle: "Corporate Governance",
    body: "Understand your obligations. Structure your company correctly. Navigate compliance before it becomes a costly crisis.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="4" y="4" width="20" height="20" rx="2"/>
        <path d="M9 10h10M9 14h6M9 18h8"/>
      </svg>
    ),
  },
  {
    title: "Accounting & Tax",
    subtitle: "Strategic Tax Planning",
    body: "Stop reacting to tax season. Build an accounting structure that works for your business at every stage of growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 4v20M4 14h20M7 7l14 14M21 7L7 21"/>
      </svg>
    ),
  },
  {
    title: "Growth & Innovation",
    subtitle: "Scaling Strategy",
    body: "Map the next phase of your business. Identify what to build, what to drop, and how to move without breaking what works.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 20l6-6 4 4 8-10"/>
        <circle cx="22" cy="8" r="2"/>
      </svg>
    ),
  },
  {
    title: "Corporate Finance",
    subtitle: "Capital Raising",
    body: "Know your numbers. Build an investor-ready story. Understand what funders actually look for — before you walk into the room.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="14" cy="14" r="10"/>
        <path d="M14 8v6l4 4"/>
      </svg>
    ),
  },
  {
    title: "Personal Finance",
    subtitle: "Wealth Building",
    body: "Your business is an asset. Learn how to pay yourself right, separate your money, and build wealth that outlasts the company.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="10" width="22" height="14" rx="2"/>
        <path d="M8 10V7a6 6 0 0112 0v3"/>
        <circle cx="14" cy="17" r="2"/>
      </svg>
    ),
  },
  {
    title: "AI for African SMEs",
    subtitle: "Practical Implementation",
    body: "Cut through the hype. Learn which AI tools actually work for your stage, your industry, and your team right now.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="6" width="16" height="16" rx="8"/>
        <path d="M10 14h8M14 10v8"/>
      </svg>
    ),
  },
];

export default function Chatroom() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#1a1a1a] pt-24 md:pt-36 pb-0 overflow-hidden">

      {/* Top — headline block */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto mb-16 md:mb-20">

        <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-8">
          The Chatroom
        </p>

        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">

          {/* Large headline with inline highlight boxes */}
          <h2
            className="font-black text-white leading-[0.92] tracking-tight shrink-0"
            style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
          >
            Your Questions.
            <br />
            <span
              className="inline-block px-3 py-1 mr-2"
              style={{ background: "rgba(182,149,86,0.15)", color: "#fff" }}
            >
              One Expert.
            </span>
            <br />
            Twenty Minutes.
          </h2>

          {/* Supporting copy */}
          <div className="max-w-sm">
            <p className="text-white/45 text-base font-light leading-relaxed mb-5">
              The most powerful conversation of the day happens here. After the
              main sessions, every delegate sits privately with a specialist in
              the area most relevant to their business.
            </p>
            <p className="text-white font-semibold text-base leading-relaxed">
              No panel. No crowd. Just one focused, confidential conversation
              built entirely around you.
            </p>
          </div>

        </div>
      </div>

      {/* Cards — full-width horizontal scroll, bleeds to edges */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 md:px-16 pb-16 md:pb-24"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Left spacer so first card aligns to content margin on wide screens */}
        <div className="shrink-0 w-0 md:w-0" />

        {cards.map((card, i) => (
          <div
            key={i}
            className="shrink-0 w-[280px] md:w-[340px] border border-white/[0.08] p-7 flex flex-col gap-6 hover:border-[#B69556]/40 transition-colors duration-200 group"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Icon */}
            <div className="text-[#B69556]/60 group-hover:text-[#B69556] transition-colors duration-200">
              {card.icon}
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-white font-bold text-lg leading-tight mb-1">
                {card.title}
              </p>
              <p className="text-[#B69556] text-xs uppercase tracking-widest font-medium mb-4">
                {card.subtitle}
              </p>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {card.body}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-white/20 text-xs uppercase tracking-widest font-medium">
                20-min private session
              </p>
            </div>
          </div>
        ))}

        {/* Right trailing space */}
        <div className="shrink-0 w-6 md:w-16" />
      </div>

      {/* Hide scrollbar globally for this element */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

    </section>
  );
}
