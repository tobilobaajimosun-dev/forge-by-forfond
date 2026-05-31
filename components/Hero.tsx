export default function HeroText() {
  return (
    <section className="bg-[#272727] px-6 md:px-16 pt-44 md:pt-56 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto text-center">

        {/* Display headline — centered, lighter + more breathing room */}
        <h1
          className="font-semibold text-white tracking-tight mb-8"
          style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 1.02 }}
        >
          Built to Be{" "}
          <span className="text-white/25">Broken.</span>
          <br />
          Or Built to Scale?
        </h1>

        {/* Supporting copy — centered, narrower for calmer rhythm */}
        <p className="text-white/45 text-lg font-light leading-relaxed max-w-xl mx-auto">
          Growth doesn&rsquo;t fix weak systems &mdash; it exposes them. Forge is
          a one-day experience for founders who&rsquo;d rather build right than
          find out the hard way.
        </p>

      </div>
    </section>
  );
}
