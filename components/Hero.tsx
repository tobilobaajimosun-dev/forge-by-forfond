export default function HeroText() {
  return (
    <section className="bg-[#272727] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-10">
          ForFond &mdash; June 13, 2026
        </p>

        {/* Display headline */}
        <h1
          className="font-black text-white leading-[0.92] tracking-tight mb-10"
          style={{ fontSize: "clamp(56px, 10vw, 130px)" }}
        >
          Built to Be
          <br />
          <span className="text-white/25">Broken.</span>
          <br />
          Or Built to
          <br />
          Scale?
        </h1>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-10" />

        {/* Supporting copy + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Growth doesn&apos;t fix weak systems &mdash; it exposes them. Forge
            is a curated one-day experience for founders who are done patching
            cracks and ready to build for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#register"
              className="inline-flex items-center justify-center bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.97] text-white font-semibold px-7 py-4 text-sm tracking-wide transition-all duration-150"
            >
              Reserve Your Seat
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 active:scale-[0.97] text-white/70 hover:text-white font-semibold px-7 py-4 text-sm tracking-wide transition-all duration-150"
            >
              See the Agenda →
            </a>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-20">
          <div className="w-full h-px bg-white/10 mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 text-white/35 text-xs uppercase tracking-widest font-medium">
            <span>One Day &bull; Four Sessions</span>
            <span>Governance &bull; Operations &bull; Finance &bull; Funding</span>
            <span className="sm:ml-auto text-[#B69556]/60">June 13, 2026 &bull; Lagos, Nigeria</span>
          </div>
        </div>

      </div>
    </section>
  );
}
