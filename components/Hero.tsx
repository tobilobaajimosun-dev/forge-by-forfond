export default function HeroText() {
  return (
    <section className="relative bg-[#272727] px-6 md:px-16 pt-44 md:pt-56 pb-16 md:pb-24 overflow-hidden">

      {/* ── Background pattern layers ── */}

      {/* Halftone dots — top-right cluster, fades toward centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(182,149,86,0.28) 1.1px, transparent 1.6px)",
          backgroundSize: "22px 22px",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 100% 0%, #000 0%, transparent 55%)",
          maskImage:
            "radial-gradient(120% 120% at 100% 0%, #000 0%, transparent 55%)",
        }}
      />

      {/* Halftone dots — bottom-left cluster */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 0% 100%, #000 0%, transparent 50%)",
          maskImage:
            "radial-gradient(120% 120% at 0% 100%, #000 0%, transparent 50%)",
        }}
      />

      {/* Soft gold glow behind the headline */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden
        style={{
          width: "70vw",
          maxWidth: "900px",
          height: "420px",
          background:
            "radial-gradient(ellipse at center, rgba(182,149,86,0.10) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Faint top hairline glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(182,149,86,0.25), transparent)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1
          className="font-semibold text-white tracking-tight mb-8"
          style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 1.02 }}
        >
          Built to Be{" "}
          <span className="text-white/25">Broken.</span>
          <br />
          Or Built to Scale?
        </h1>

        <p className="text-white/45 text-lg font-light leading-relaxed max-w-xl mx-auto">
          Growth doesn&rsquo;t fix weak systems &mdash; it exposes them. Forge is
          a one-day experience for founders who&rsquo;d rather build right than
          find out the hard way.
        </p>
      </div>
    </section>
  );
}
