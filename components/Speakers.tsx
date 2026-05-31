const expertAreas = [
  { area: "Legal & Compliance", detail: "Corporate Governance" },
  { area: "Accounting & Tax", detail: "Strategic Tax Planning" },
  { area: "Growth & Innovation", detail: "Scaling Strategy" },
  { area: "Corporate Finance", detail: "Capital Raising" },
  { area: "Personal Finance", detail: "Wealth Building" },
  { area: "AI for African SMEs", detail: "Practical Implementation" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#272727] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              The Lineup
            </p>
            <h2
              className="font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Facilitators &amp;
              <br />
              Expert Consultants
            </h2>
          </div>
          <p className="text-white/35 text-sm font-light max-w-xs md:text-right leading-relaxed">
            Speakers will be announced shortly.
            <br />
            Each expert is hand-selected for depth of
            practice, not profile.
          </p>
        </div>

        <div className="w-full h-px bg-white/10 mb-0" />

        {/* Expert areas as a teaser grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {expertAreas.map((e, i) => (
            <div
              key={i}
              className="border-b border-r border-white/[0.06] px-0 py-10 md:px-8 group hover:bg-white/[0.02] transition-colors duration-200"
              style={{
                borderRight: (i + 1) % 3 === 0 ? "none" : undefined,
                borderBottom:
                  i >= expertAreas.length - 3 ? "none" : undefined,
              }}
            >
              <div className="flex items-start gap-5">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 shrink-0 border border-white/10 flex items-center justify-center group-hover:border-[#B69556]/30 transition-colors duration-200">
                  <span className="text-white/20 text-xs font-mono uppercase">
                    TBA
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-base leading-tight mb-1">
                    {e.area}
                  </p>
                  <p className="text-white/35 text-xs uppercase tracking-widest">
                    {e.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-16 border border-[#B69556]/20 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <p className="text-white/50 text-sm font-light leading-relaxed">
            Full speaker lineup and facilitator profiles will be published
            ahead of June 13, 2026.
          </p>
          <a
            href="#register"
            className="shrink-0 text-[#B69556] text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors duration-150"
          >
            Register to be notified →
          </a>
        </div>

      </div>
    </section>
  );
}
