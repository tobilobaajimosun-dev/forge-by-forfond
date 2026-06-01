const sessions = [
  {
    number: "01",
    tag: "Growth",
    title: "Where to grow in 2026",
    body: "The market has shifted. We map where the real opportunities are, and how to expand without overreaching.",
  },
  {
    number: "02",
    tag: "Operations",
    title: "Systems that hold under pressure",
    body: "Structure, compliance, operations, people. The quiet work that decides whether growth lifts your business or breaks it.",
  },
  {
    number: "03",
    tag: "Finance",
    title: "Pay yourself properly",
    body: "Separate your money, build personal wealth, and protect it — pension, insurance, and everything in between.",
  },
];

import SectionLabel from "@/components/SectionLabel";

// Card surface tones — slightly different so stacked cards read as distinct layers
const cardBg = ["#2e2e2e", "#333031", "#383031"];

export default function InsideForge() {
  return (
    <section
      id="inside"
      className="px-6 md:px-16 pt-24 md:pt-36 pb-24 md:pb-32"
      style={{ background: "linear-gradient(to bottom, #1a1a1a 0%, #000000 140px)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <SectionLabel>Inside Forge</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-semibold text-white leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(38px, 5.5vw, 72px)" }}
            >
              What you&rsquo;ll
              <br />
              walk away with
            </h2>
            <p className="text-white/40 text-base font-light max-w-sm md:text-right">
              One day. Three sessions. Real answers to the
              things that actually keep founders up at night.
            </p>
          </div>
        </div>

        {/* Stacking cards — each sticks at an increasing offset so the
            number + title of the card beneath stays peeking out */}
        <div className="relative">
          {sessions.map((s, i) => (
            <div
              key={i}
              className="sticky"
              style={{
                top: `${96 + i * 72}px`,
                marginBottom: i === sessions.length - 1 ? 0 : "32px",
              }}
            >
              <div
                className="rounded-2xl border border-white/[0.08] overflow-hidden"
                style={{
                  background: cardBg[i],
                  boxShadow: "0 -8px 40px rgba(0,0,0,0.35)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12 p-8 md:p-12">
                  {/* Number + tag — always visible peek zone */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                    <span
                      className="font-bold leading-none"
                      style={{
                        fontSize: "clamp(44px, 5vw, 72px)",
                        color: "rgba(182,149,86,0.9)",
                      }}
                    >
                      {s.number}
                    </span>
                    <span className="inline-block text-[#B69556] text-[10px] font-semibold uppercase tracking-[0.2em] border border-[#B69556]/30 px-2.5 py-1 whitespace-nowrap">
                      {s.tag}
                    </span>
                  </div>

                  {/* Title + body */}
                  <div>
                    <h3 className="text-white font-semibold text-2xl md:text-3xl leading-tight tracking-tight mb-5">
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer so the last card can settle before the section ends */}
          <div style={{ height: "120px" }} />
        </div>

      </div>
    </section>
  );
}
