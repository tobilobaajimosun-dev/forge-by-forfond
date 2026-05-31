import HalftoneDots from "@/components/HalftoneDots";
import SectionLabel from "@/components/SectionLabel";

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
    <section id="who" className="bg-[#ece8df] px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">

        {/* Header — Column style */}
        <div className="mb-8">
          <SectionLabel dark>Who This Is For</SectionLabel>
          <h2
            className="font-bold text-[#1a1a1a] leading-[0.98] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(34px, 5vw, 64px)" }}
          >
            You&rsquo;re ambitious &mdash; and you know it&rsquo;s time.
          </h2>
        </div>

        {/* Halftone dots band — interactive */}
        <div className="rounded-2xl overflow-hidden border border-black/[0.08] mb-14">
          <HalftoneDots text="AMBITIOUS" height={300} bg="#e7e2d6" dot="#1c1c1c" accent="#B69556" />
        </div>

        {/* Intro line */}
        <p className="text-black/55 text-lg font-light leading-relaxed max-w-2xl mb-14">
          Forge isn&rsquo;t for everyone, and that&rsquo;s the point. It&rsquo;s built
          for a specific kind of founder — one who is serious about building
          something that lasts. If any of these sound like you, you belong in the room.
        </p>

        {/* Criteria — clean rows on light bg */}
        <div className="border-t border-black/10">
          {criteria.map((c) => (
            <div
              key={c.no}
              className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_1.2fr] gap-5 md:gap-12 py-8 border-b border-black/10 group"
            >
              <span
                className="font-bold leading-none"
                style={{ fontSize: "clamp(24px, 2.6vw, 36px)", color: "rgba(138,109,51,0.7)" }}
              >
                {c.no}
              </span>
              <h3 className="text-[#1a1a1a] font-semibold text-lg md:text-xl leading-snug self-center">
                {c.title}
              </h3>
              <p className="text-black/50 text-base font-light leading-relaxed self-center">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <a
            href="https://tally.so/r/ZjDaXA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-black text-white px-7 h-14 rounded-xl hover:rounded-[28px] transition-all duration-300 font-bold text-sm uppercase tracking-widest"
          >
            Request an Invite
            <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
          </a>
          <p className="text-black/40 text-sm">Sound like you? Seats are limited and curated.</p>
        </div>

      </div>
    </section>
  );
}
