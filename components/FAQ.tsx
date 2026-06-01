"use client";

import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const faqs = [
  {
    q: "What is Forge'26?",
    a: "Forge is a curated one-day experience for founders and SME owners serious about building a business that can survive growth. Three focused sessions — growth, operations, and personal finance — plus a private one-on-one consultation in The Chatroom.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Forge'26 is completely free to attend — by invitation only. There are no ticket tiers and nothing to pay. Request an invite, and if it's a fit, you're in.",
  },
  {
    q: "When and where is it?",
    a: "Forge'26 holds on June 13, 2026, in Lagos, Nigeria. It's an in-person event. The exact venue is shared with confirmed attendees ahead of the day.",
  },
  {
    q: "Who should attend?",
    a: "Founders and business owners who've built something real and know their systems need to catch up — whether they're preparing to raise, scaling operations, or simply ready to run a cleaner, stronger business.",
  },
  {
    q: "How do I get in?",
    a: "Request an invite on this page. Because seats are limited and curated, we review every request and confirm attendees directly. The earlier you request, the better your chances.",
  },
  {
    q: "What is The Chatroom?",
    a: "The most valuable twenty minutes of the day. After the sessions, you sit privately with a specialist in the area your business needs most — legal, tax, growth, corporate finance, personal finance, or AI. No panel, no audience. Just you and the right expert.",
  },
  {
    q: "Will it be live-streamed or recorded?",
    a: "No. Forge is intentionally in-person. The value is in the room — the conversations, the consultations, and the people present.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#111111] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row gap-0">

          {/* ── Left — sticky FAQ label ── */}
          <div className="md:w-[38%] md:sticky md:top-24 md:self-start mb-12 md:mb-0 md:pr-16">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="section-h">
              FAQ
            </h2>
            <p className="text-white/30 text-sm font-light leading-relaxed mt-6 max-w-[220px]">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="https://tally.so/r/ZjDaXA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B69556] hover:text-white transition-colors duration-150 underline underline-offset-4"
              >
                Request an invite and we&apos;ll be in touch.
              </a>
            </p>
          </div>

          {/* ── Right — scrollable accordion ── */}
          <div className="md:w-[62%]">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-dashed border-white/[0.12]"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                >
                  <span
                    className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-150 ${
                      open === i ? "text-white" : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center text-white/40 transition-all duration-200 mt-0.5 ${
                      open === i ? "rotate-45 text-[#B69556]" : "group-hover:text-white/70"
                    }`}
                    style={{ fontSize: "22px", lineHeight: 1 }}
                  >
                    +
                  </span>
                </button>

                {/* Answer — smooth height transition via grid trick */}
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-white/45 text-base font-light leading-relaxed pb-7">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
