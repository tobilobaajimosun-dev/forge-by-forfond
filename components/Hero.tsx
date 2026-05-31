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
          className="font-bold text-white leading-[0.92] tracking-tight mb-10"
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

        {/* Supporting copy */}
        <div className="max-w-2xl">
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
            Growth does not fix weak systems &mdash; it exposes them. Forge is
            a curated business experience for the founders who refuse to find
            out the hard way.
          </p>
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
