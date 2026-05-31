import SectionLabel from "@/components/SectionLabel";

const criteria = [
  {
    no: "01",
    title: "You've built something real",
    body: "You're past the idea stage — and you can feel your systems need to catch up.",
  },
  {
    no: "02",
    title: "Growth is outpacing your processes",
    body: "Things are moving faster than your structure can keep up with. You feel the cracks first.",
  },
  {
    no: "03",
    title: "You're getting ready to raise or scale",
    body: "You want investment or expansion — but your foundations aren't investor-ready yet.",
  },
  {
    no: "04",
    title: "You want mechanics, not motivation",
    body: "You're done with hype. You want things you can actually use the next morning.",
  },
  {
    no: "05",
    title: "You want a room of real peers",
    body: "Founders and experts who think at your level and build to the same standard.",
  },
];

export default function MadeForYou() {
  return (
    <section id="who" className="bg-[#1a1a1a] px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">

          {/* Left — text list */}
          <div>
            <SectionLabel>Who This Is For</SectionLabel>
            <h2
              className="font-semibold text-white leading-[1.02] tracking-tight mb-10 max-w-xl"
              style={{ fontSize: "clamp(34px, 4.5vw, 60px)" }}
            >
              You&rsquo;re ambitious &mdash; and you know it&rsquo;s time.
            </h2>

            <div className="border-t border-white/10">
              {criteria.map((c) => (
                <div
                  key={c.no}
                  className="flex gap-5 md:gap-7 py-6 border-b border-white/[0.08]"
                >
                  <span
                    className="font-semibold leading-none shrink-0 pt-1"
                    style={{ fontSize: "18px", color: "rgba(182,149,86,0.8)" }}
                  >
                    {c.no}
                  </span>
                  <div>
                    <h3 className="text-white font-medium text-lg leading-snug mb-1.5">
                      {c.title}
                    </h3>
                    <p className="text-white/45 text-base font-light leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://tally.so/r/ZjDaXA"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 bg-[#B69556] hover:bg-[#c9a96a] text-black px-7 h-14 rounded-xl hover:rounded-[28px] transition-all duration-300 font-semibold text-sm uppercase tracking-widest"
            >
              Request an Invite
              <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
          </div>

          {/* Right — supporting image (sticky on desktop) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&auto=format&fit=crop&q=80"
                alt="Founders in conversation"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%) brightness(0.82) contrast(1.08)" }}
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(182,149,86,0.18), transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-medium text-base leading-snug">
                  A curated room of founders building at the same standard.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
