import SectionLabel from "@/components/SectionLabel";

const sessions = [
  {
    time: "9:00 AM",
    end: "9:55 AM",
    title: "Registration & Welcome Breakfast",
    description: "Arrive, connect, and settle in.",
    track: "General",
  },
  {
    time: "10:00 AM",
    end: "11:15 AM",
    title: "Session 01 — Hacking Growth in the Current Global Context",
    description:
      "What global headwinds mean for SMEs, where the real opportunities are in 2026, and how to build a practical expansion plan around smart pivots and strategic alliances.",
    track: "Growth Mindset",
  },
  {
    time: "11:15 AM",
    end: "11:30 AM",
    title: "Break",
    description: "",
    track: "Break",
  },
  {
    time: "11:30 AM",
    end: "12:45 PM",
    title: "Session 02 — The Unglamorous Engines Behind Every Scaling Business",
    description:
      "Company setup, operational systems, compliance, people management, and corporate governance — the work that quietly determines whether your business carries the weight of growth or breaks under it.",
    track: "Growth Engines",
  },
  {
    time: "12:45 PM",
    end: "1:45 PM",
    title: "Lunch Break",
    description: "",
    track: "Break",
  },
  {
    time: "1:45 PM",
    end: "3:00 PM",
    title: "Session 03 — Unbundling the Myths",
    description:
      "How to pay yourself correctly, permanently separate business and personal money, build personal wealth alongside your company, and protect everything — pension, insurance, and beyond.",
    track: "Personal Finance",
  },
  {
    time: "3:00 PM",
    end: "5:00 PM",
    title: "The Chatroom — Expert Consultations",
    description:
      "Every delegate sits privately with a specialist in their chosen area. Twenty minutes. One expert. No panel. No crowd.",
    track: "Chatroom",
  },
  {
    time: "5:00 PM",
    end: "6:00 PM",
    title: "Networking & Close",
    description: "Connect with fellow founders and the ForFond team.",
    track: "General",
  },
];

const GOLD_PILL = "text-[#8a6d33] border-[#B69556]/50 bg-[#B69556]/15";

const trackColors: Record<string, string> = {
  "Growth Mindset": GOLD_PILL,
  "Growth Engines": GOLD_PILL,
  "Personal Finance": GOLD_PILL,
  Chatroom: GOLD_PILL,
  Break: "text-black/30 border-black/10 bg-black/[0.03]",
  General: "text-black/35 border-black/10 bg-black/[0.03]",
};

export default function Schedule() {
  return (
    <section id="agenda" className="bg-[#f4f1ea] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-0">
          <div>
            <SectionLabel dark>June 13, 2026</SectionLabel>
            <h2
              className="font-bold text-[#1a1a1a] leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Full Schedule
            </h2>
          </div>
          <p className="text-black/40 text-sm font-light max-w-xs md:text-right">
            All times WAT (West Africa Time, GMT+1).
            <br />Schedule subject to minor adjustments.
          </p>
        </div>

        {/* Column headers */}
        <div className="mt-12 mb-0 grid grid-cols-[120px_1fr_auto] gap-6 pb-3 border-b border-black/15">
          <span className="text-black/35 text-[10px] uppercase tracking-widest font-medium">Time</span>
          <span className="text-black/35 text-[10px] uppercase tracking-widest font-medium">Session</span>
          <span className="text-black/35 text-[10px] uppercase tracking-widest font-medium hidden md:block">Track</span>
        </div>

        {/* Sessions */}
        {sessions.map((s, i) => {
          const isBreak = s.track === "Break";
          return (
            <div
              key={i}
              className={`grid grid-cols-[120px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 py-6 border-b border-black/[0.08] group ${
                isBreak ? "opacity-50" : "hover:bg-black/[0.02] transition-colors duration-150"
              }`}
            >
              {/* Time */}
              <div className="shrink-0">
                <p
                  className="text-[#8a6d33] text-xs font-semibold"
                  style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
                >
                  {s.time}
                </p>
                <p
                  className="text-black/30 text-[10px] mt-0.5"
                  style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
                >
                  – {s.end}
                </p>
              </div>

              {/* Title + description */}
              <div className="min-w-0">
                <p className={`font-semibold text-sm md:text-base leading-snug ${isBreak ? "text-black/40" : "text-[#1a1a1a]"}`}>
                  {s.title}
                </p>
                {s.description && (
                  <p className="text-black/45 text-sm font-light leading-relaxed mt-2 max-w-2xl">
                    {s.description}
                  </p>
                )}
              </div>

              {/* Track badge */}
              <div className="hidden md:flex items-start pt-0.5 shrink-0">
                {!isBreak && s.track !== "General" && (
                  <span className={`text-[10px] font-semibold uppercase tracking-widest border px-2.5 py-1 ${trackColors[s.track]}`}>
                    {s.track}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Footer note */}
        <p className="text-black/30 text-xs font-light mt-6 uppercase tracking-widest">
          Speakers for each session to be announced
        </p>

      </div>
    </section>
  );
}
