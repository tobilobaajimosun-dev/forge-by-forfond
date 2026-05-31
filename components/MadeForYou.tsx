const criteria = [
  {
    no: "01",
    title: "You've built something real",
    body: "You're a founder or SME owner past the idea stage — and you can feel that your systems need to catch up before the next phase of growth.",
  },
  {
    no: "02",
    title: "Growth is outpacing your processes",
    body: "Your business is moving faster than your structure can keep up with. You notice the cracks before anyone else does.",
  },
  {
    no: "03",
    title: "You're preparing to raise or scale",
    body: "You want to attract investment or expand operations — but you know your financial and operational foundations aren't investor-ready yet.",
  },
  {
    no: "04",
    title: "You want mechanics, not motivation",
    body: "You're done with hype. You want practical, structured knowledge you can implement the very next morning.",
  },
  {
    no: "05",
    title: "You want a room of true peers",
    body: "You want to sit with founders and experts who think at your level and build to the same standard.",
  },
];

export default function MadeForYou() {
  return (
    <section id="who" className="bg-[#1a1a1a] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-24">
          <div>
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              Who This Is For
            </p>
            <h2
              className="font-bold text-white leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 78px)" }}
            >
              You&rsquo;re Ambitious
              &mdash; and You Know
              It&rsquo;s Time
            </h2>
          </div>
          <div className="md:pt-4 md:self-end">
            <p className="text-white/45 text-lg font-light leading-relaxed">
              Forge isn&rsquo;t for everyone, and that&rsquo;s the point. It&rsquo;s
              built for a specific kind of founder — one who is serious about
              building something that lasts. If any of these sound like you,
              you belong in the room.
            </p>
          </div>
        </div>

        {/* Criteria — 2-col card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
          {criteria.map((c) => (
            <div
              key={c.no}
              className="bg-[#1a1a1a] p-8 md:p-10 hover:bg-white/[0.015] transition-colors duration-200 group"
            >
              <div className="flex items-start gap-5">
                <span
                  className="font-bold leading-none shrink-0"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "rgba(182,149,86,0.5)" }}
                >
                  {c.no}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-lg leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="text-white/45 text-base font-light leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Last cell — CTA to balance the 6-cell grid (5 criteria + 1 CTA) */}
          <div className="bg-[#B69556] p-8 md:p-10 flex flex-col justify-between">
            <h3 className="text-black font-bold text-xl leading-snug">
              Sound like you?
            </h3>
            <a
              href="https://luma.com/j2sbmjc7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-black font-bold text-sm uppercase tracking-widest group/cta"
            >
              Request an Invite
              <span className="group-hover/cta:translate-x-1 transition-transform duration-150">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
