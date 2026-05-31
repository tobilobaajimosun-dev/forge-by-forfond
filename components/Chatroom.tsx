const topics = [
  { label: "Legal & Compliance", sub: "Corporate Governance" },
  { label: "Accounting & Tax", sub: "" },
  { label: "Growth & Innovation", sub: "" },
  { label: "Corporate Finance", sub: "Capital Raising" },
  { label: "Personal Finance", sub: "" },
  { label: "AI for African SMEs", sub: "" },
];

export default function Chatroom() {
  return (
    <section className="bg-[#1a1a1a] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Left — copy */}
          <div>
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-8">
              The Chatroom
            </p>
            <h2
              className="font-black text-white leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              Your Questions.
              <br />
              One Expert.
              <br />
              Twenty Minutes.
            </h2>
            <div className="w-12 h-px bg-[#B69556] mb-8" />
            <p className="text-white/50 text-lg font-light leading-relaxed mb-6">
              The most powerful conversation of the day happens here. After the
              main sessions, every delegate sits privately with a specialist in
              the area most relevant to their business.
            </p>
            <p className="text-white font-semibold text-base leading-relaxed">
              No panel. No crowd. Just one focused, confidential conversation
              built entirely around you.
            </p>
          </div>

          {/* Right — topics grid */}
          <div className="flex flex-col justify-center">
            <p className="text-white/30 text-xs uppercase tracking-[0.25em] font-medium mb-6">
              Expert Consultation Areas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
              {topics.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a1a] px-5 py-6 hover:bg-[#B69556]/5 transition-colors duration-200 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B69556] mb-4 group-hover:scale-150 transition-transform duration-200" />
                  <p className="text-white font-semibold text-sm leading-snug">
                    {t.label}
                  </p>
                  {t.sub && (
                    <p className="text-white/35 text-xs mt-1">{t.sub}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
