"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Forge by ForFond?",
    a: "Forge is a curated one-day business experience designed for startup founders and SME owners who are serious about building systems that can survive growth. It brings together three focused sessions — covering growth strategy, governance & operations, and personal finance — alongside private expert consultations in The Chatroom.",
  },
  {
    q: "When and where is Forge taking place?",
    a: "Forge by ForFond holds on June 13, 2026. It is an in-person event. Venue details will be communicated to registered attendees ahead of the date.",
  },
  {
    q: "Who should attend Forge?",
    a: "Forge is built for founders and business owners who have built something real and know it needs stronger foundations before the next phase — whether that is raising funding, scaling operations, or simply running a cleaner, more structured business.",
  },
  {
    q: "How do I register and what does a ticket include?",
    a: "You can register directly on this page. Your ticket includes access to all three main sessions, a private 20-minute consultation in The Chatroom with an expert in your chosen area, and the full Forge experience. Ticket tiers include Standard, VIP, and Corporate Table (10 seats).",
  },
  {
    q: "What is The Chatroom?",
    a: "The Chatroom is the private consultation segment of Forge. Every delegate is matched one-on-one with a specialist — covering Legal & Compliance, Accounting & Tax, Growth & Innovation, Corporate Finance & Capital Raising, Personal Finance, or AI for African SMEs. Twenty minutes. No panel. No audience. Just you and the right expert.",
  },
  {
    q: "Will Forge be live-streamed or recorded?",
    a: "Forge is designed as an intentionally in-person experience. There are no plans for a live stream or recording. The value of the day is in the room — the conversations, the consultations, and the calibre of people present.",
  },
  {
    q: "Can my company sponsor or partner with Forge?",
    a: "Yes. If your organisation is interested in sponsorship or partnership opportunities at Forge, reach out to the ForFond team directly. Sponsorship opportunities are limited and curated to align with the quality of the experience.",
  },
  {
    q: "What is the refund and cancellation policy?",
    a: "Refund and cancellation details will be communicated upon registration. Given the limited and curated nature of the event, we encourage delegates to confirm their attendance before registering. Transfers to another attendee are accommodated where possible.",
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
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              Questions
            </p>
            <h2
              className="font-bold text-white leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 120px)" }}
            >
              FAQ
            </h2>
            <p className="text-white/30 text-sm font-light leading-relaxed mt-6 max-w-[220px]">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="#register"
                className="text-[#B69556] hover:text-white transition-colors duration-150 underline underline-offset-4"
              >
                Register and we&apos;ll be in touch.
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
