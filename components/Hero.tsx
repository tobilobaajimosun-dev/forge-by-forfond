export default function HeroText() {
  return (
    <section className="bg-[#272727] px-6 md:px-16 pt-40 md:pt-48 pb-10 md:pb-12">
      <div className="max-w-5xl mx-auto text-center">

        {/* Display headline — centered */}
        <h1
          className="font-bold text-white leading-[0.95] tracking-tight mb-10"
          style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
        >
          Built to Be{" "}
          <span className="text-white/25">Broken.</span>
          <br />
          Or Built to Scale?
        </h1>

        {/* Supporting copy — centered */}
        <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Growth does not fix weak systems &mdash; it exposes them. Forge is a
          curated business experience for the founders who refuse to find out
          the hard way.
        </p>

      </div>
    </section>
  );
}
