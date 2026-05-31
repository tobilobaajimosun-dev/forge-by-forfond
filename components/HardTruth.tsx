export default function HardTruth() {
  return (
    <section className="bg-[#1a1a1a] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-12">
          The Hard Truth
        </p>

        {/* Pull quote */}
        <blockquote
          className="font-black text-white leading-[1.05] tracking-tight mb-16"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          &ldquo;The thing that eventually breaks a growing business was often
          broken long before the growth came.&rdquo;
        </blockquote>

        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Body copy — two columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <p className="text-white/55 text-lg font-light leading-relaxed">
            Most founders discover too late that the records never properly
            kept, the taxes never strategically managed, the payroll systems
            never structured, the HR foundations never built — these are not
            problems growth solves.
          </p>
          <div>
            <p className="text-white/55 text-lg font-light leading-relaxed mb-8">
              They are the fault lines growth reveals. And by then, the cost of
              fixing them is far greater than the cost of building them right
              the first time.
            </p>
            <p className="text-white font-semibold text-lg leading-relaxed">
              Forge by ForFond was created for the founders who intend to build
              right, from the beginning.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
