const sessions = [
  {
    number: "01",
    tag: "Growth Mindset",
    title: "Hacking Growth in the Current Global Context",
    body: "The African business landscape has shifted. This session cuts through the noise — what global headwinds mean for SMEs, where the real opportunities are in 2026, and how to build a practical expansion plan built around smart pivots, the right partnerships, and strategic alliances that actually move the needle.",
  },
  {
    number: "02",
    tag: "Governance & Operations",
    title: "The Unglamorous Engines Behind Every Scaling Business",
    body: "Nobody scales on vision alone. This session covers the structures most founders ignore until it's too late — company setup, operational systems, compliance, people management, and corporate governance. The unglamorous work that quietly determines whether your business is built to carry the weight of growth, or broken by it.",
  },
  {
    number: "03",
    tag: "Personal Finance",
    title: "Unbundling the Myths",
    body: "Your business is growing. Your personal finances should be too. This session covers how to pay yourself correctly, permanently separate business and personal money, build personal wealth alongside your company, and protect everything you are building — pension, insurance, and beyond.",
  },
];

export default function InsideForge() {
  return (
    <section id="agenda" className="bg-[#272727] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            Inside Forge
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-black text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              What You Will
              <br />
              Walk Away With
            </h2>
            <p className="text-white/40 text-base font-light max-w-sm md:text-right">
              One day. Four intentional sessions. Expert conversations tailored
              to the real challenges businesses face.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-0" />

        {/* Sessions */}
        {sessions.map((s, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 py-12 md:py-16">
              {/* Number */}
              <div className="flex md:flex-col gap-4 md:gap-2">
                <span
                  className="font-black text-white/10 leading-none"
                  style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
                >
                  {s.number}
                </span>
                <span className="self-center md:self-start inline-block text-[#B69556] text-[10px] font-semibold uppercase tracking-[0.2em] border border-[#B69556]/30 px-2.5 py-1">
                  {s.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-black text-xl md:text-2xl leading-tight tracking-tight self-center">
                {s.title}
              </h3>

              {/* Body */}
              <p className="text-white/50 text-base font-light leading-relaxed self-center">
                {s.body}
              </p>
            </div>
            <div className="w-full h-px bg-white/10" />
          </div>
        ))}

      </div>
    </section>
  );
}
