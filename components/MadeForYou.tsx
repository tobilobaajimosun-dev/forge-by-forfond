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
              className="pixel-btn group mt-10 inline-flex items-center gap-3 bg-[#B69556] hover:bg-[#c9a96a] text-black px-7 h-14 rounded-xl transition-colors duration-200 font-semibold text-sm uppercase tracking-widest"
            >
              Request an Invite
              <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
            </a>
          </div>

          {/* Right — twirling 3D ticket with lights */}
          <div className="lg:sticky lg:top-24 lg:self-start flex items-center justify-center py-10">
            <div className="relative" style={{ perspective: "1400px" }}>
              {/* Ambient lights */}
              <div
                className="absolute left-1/2 top-1/2 pointer-events-none ticket-float"
                style={{
                  width: "420px", height: "420px",
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle, rgba(182,149,86,0.22) 0%, transparent 62%)",
                  filter: "blur(20px)",
                }}
                aria-hidden
              />

              {/* Twirling ticket */}
              <div className="ticket-float">
                <div
                  className="ticket-twirl relative"
                  style={{ width: "260px", height: "150px", transformStyle: "preserve-3d" }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-5"
                    style={{
                      backfaceVisibility: "hidden",
                      background: "linear-gradient(135deg, #1a2535 0%, #2a2a2a 45%, #B69556 100%)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.15)",
                      border: "1px solid rgba(182,149,86,0.4)",
                    }}
                  >
                    {/* perforation line */}
                    <div className="absolute top-0 bottom-0 left-[72%] border-l border-dashed border-white/25" />
                    <div className="flex items-start justify-between">
                      <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.2em]">Admit One</span>
                      <span className="text-white/70 text-[9px] font-mono">№ 026</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-2xl leading-none tracking-tight" style={{ fontFamily: "var(--font-pixel)" }}>
                        Forge&rsquo;26
                      </p>
                      <p className="text-white/70 text-[9px] uppercase tracking-widest mt-1 font-mono">
                        June 13 &bull; Lagos
                      </p>
                    </div>
                  </div>
                  {/* Back face */}
                  <div
                    className="absolute inset-0 rounded-2xl flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: "linear-gradient(135deg, #B69556 0%, #2a2a2a 55%, #1a2535 100%)",
                      boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
                      border: "1px solid rgba(182,149,86,0.4)",
                    }}
                  >
                    <span className="text-black/80 text-sm font-bold uppercase tracking-[0.3em]">ForFond</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
