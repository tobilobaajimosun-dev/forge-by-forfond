const criteria = [
  {
    roman: "i.",
    bold: "You are a startup founder or SME owner",
    rest: " who has built something real and knows it needs stronger systems before the next phase.",
  },
  {
    roman: "ii.",
    bold: "Your business is growing faster than your processes",
    rest: " can keep up with — and you feel the cracks before anyone else does.",
  },
  {
    roman: "iii.",
    bold: "You want to raise funding, attract investment, or scale operations",
    rest: " but know your financial and operational foundations aren't investor-ready yet.",
  },
  {
    roman: "iv.",
    bold: "You are tired of motivation without mechanics",
    rest: " and want practical, structured knowledge you can implement the next morning.",
  },
  {
    roman: "v.",
    bold: "You want to be in a room with founders and experts",
    rest: " who are thinking at the same level and building at the same standard.",
  },
];

export default function MadeForYou() {
  return (
    <section className="bg-[#272727] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-8">
          Made for You If
        </p>

        <div className="mb-16 md:mb-24">
          <h2
            className="font-black text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}
          >
            You Are
            <br />
            Ambitious
          </h2>
          <h2
            className="font-black leading-[0.92] tracking-tight"
            style={{
              fontSize: "clamp(48px, 8vw, 110px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            }}
          >
            and You Know
            <br />
            It&rsquo;s Time
          </h2>
        </div>

        <div className="w-full h-px bg-white/10 mb-0" />

        {/* Criteria list */}
        {criteria.map((c, i) => (
          <div key={i}>
            <div className="flex gap-6 md:gap-12 py-8 md:py-10 items-start">
              <span className="text-[#B69556] font-mono text-sm font-semibold w-8 shrink-0 pt-1">
                {c.roman}
              </span>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                <span className="text-white font-semibold">{c.bold}</span>
                {c.rest}
              </p>
            </div>
            <div className="w-full h-px bg-white/[0.06]" />
          </div>
        ))}

      </div>
    </section>
  );
}
