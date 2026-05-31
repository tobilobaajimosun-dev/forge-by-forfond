export default function ClosingCTA() {
  return (
    <section className="bg-[#1a1a1a] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Big closing statement */}
        <div className="mb-20 md:mb-28">
          <h2
            className="font-black text-white leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: "clamp(40px, 7vw, 96px)" }}
          >
            Your Business
            <br />
            Will Grow.
          </h2>
          <h2
            className="font-black leading-[0.92] tracking-tight"
            style={{
              fontSize: "clamp(40px, 7vw, 96px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(182,149,86,0.5)",
            }}
          >
            The Question is Whether
            <br />
            It&rsquo;s Built to Handle That Growth.
          </h2>
        </div>

        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Event details + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Event card */}
          <div className="border border-white/10 p-8 md:p-10">
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-8">
              Mark Your Calendar
            </p>

            <div className="space-y-5">
              <div className="flex gap-6 items-baseline border-b border-white/[0.06] pb-5">
                <span className="text-white/30 text-xs uppercase tracking-widest w-20 shrink-0">Date</span>
                <span className="text-white font-black text-2xl md:text-3xl tracking-tight">June 13, 2026</span>
              </div>
              <div className="flex gap-6 items-baseline border-b border-white/[0.06] pb-5">
                <span className="text-white/30 text-xs uppercase tracking-widest w-20 shrink-0">Event</span>
                <span className="text-white font-semibold text-base">Forge by ForFond</span>
              </div>
              <div className="flex gap-6 items-baseline border-b border-white/[0.06] pb-5">
                <span className="text-white/30 text-xs uppercase tracking-widest w-20 shrink-0">Format</span>
                <span className="text-white/70 text-base">Curated in-person experience</span>
              </div>
              <div className="flex gap-6 items-baseline">
                <span className="text-white/30 text-xs uppercase tracking-widest w-20 shrink-0">For</span>
                <span className="text-white/70 text-base">Ambitious startups &amp; SMEs</span>
              </div>
            </div>
          </div>

          {/* CTA block */}
          <div className="flex flex-col justify-between">
            <p className="text-white/50 text-lg font-light leading-relaxed mb-10">
              Seats are intentionally limited. Forge is not a conference — it is
              a curated room of founders who are serious about building
              something that lasts.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.97] text-white font-semibold px-8 py-5 text-sm uppercase tracking-widest transition-all duration-150"
              >
                Reserve Your Seat
              </a>
              <p className="text-white/25 text-xs text-center uppercase tracking-widest">
                June 13, 2026 &bull; Lagos, Nigeria
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
