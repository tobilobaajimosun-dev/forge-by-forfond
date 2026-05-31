const sessions = [
  {
    time: "9:00 AM",
    end: "9:55 AM",
    title: "Registration & Welcome Breakfast",
    description: "Arrive, connect, and settle in.",
    track: "General",
    speakers: [],
  },
  {
    time: "10:00 AM",
    end: "11:15 AM",
    title: "Session 01 — Hacking Growth in the Current Global Context",
    description:
      "What global headwinds mean for SMEs, where the real opportunities are in 2026, and how to build a practical expansion plan around smart pivots and strategic alliances.",
    track: "Growth Mindset",
    speakers: [],
  },
  {
    time: "11:15 AM",
    end: "11:30 AM",
    title: "Break",
    description: "",
    track: "Break",
    speakers: [],
  },
  {
    time: "11:30 AM",
    end: "12:45 PM",
    title: "Session 02 — The Unglamorous Engines Behind Every Scaling Business",
    description:
      "Company setup, operational systems, compliance, people management, and corporate governance — the work that quietly determines whether your business carries the weight of growth or breaks under it.",
    track: "Growth Engines",
    speakers: [],
  },
  {
    time: "12:45 PM",
    end: "1:45 PM",
    title: "Lunch Break",
    description: "",
    track: "Break",
    speakers: [],
  },
  {
    time: "1:45 PM",
    end: "3:00 PM",
    title: "Session 03 — Unbundling the Myths",
    description:
      "How to pay yourself correctly, permanently separate business and personal money, build personal wealth alongside your company, and protect everything — pension, insurance, and beyond.",
    track: "Personal Finance",
    speakers: [],
  },
  {
    time: "3:00 PM",
    end: "5:00 PM",
    title: "The Chatroom — Expert Consultations",
    description:
      "Every delegate sits privately with a specialist in their chosen area. Twenty minutes. One expert. No panel. No crowd.",
    track: "Chatroom",
    speakers: [],
  },
  {
    time: "5:00 PM",
    end: "6:00 PM",
    title: "Networking & Close",
    description: "Connect with fellow founders and the ForFond team.",
    track: "General",
    speakers: [],
  },
];

const trackColors: Record<string, string> = {
  "Growth Mindset": "text-[#B69556] border-[#B69556]/30 bg-[#B69556]/10",
  "Growth Engines": "text-blue-300 border-blue-500/30 bg-blue-500/10",
  "Personal Finance": "text-purple-300 border-purple-500/30 bg-purple-500/10",
  Chatroom: "text-[#B69556] border-[#B69556]/30 bg-[#B69556]/10",
  Break: "text-white/25 border-white/10 bg-white/5",
  General: "text-white/30 border-white/10 bg-white/5",
};

export default function Schedule() {
  return (
    <section id="agenda" className="bg-[#272727] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-0">
          <div>
            <p className="text-[#B69556] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              June 13, 2026
            </p>
            <h2
              className="font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Full Schedule
            </h2>
          </div>
          <p className="text-white/30 text-sm font-light max-w-xs md:text-right">
            All times WAT (West Africa Time, GMT+1).
            <br />Schedule subject to minor adjustments.
          </p>
        </div>

        {/* Column headers */}
        <div className="mt-12 mb-0 grid grid-cols-[120px_1fr_auto] gap-6 pb-3 border-b border-white/10">
          <span className="text-white/25 text-[10px] uppercase tracking-widest font-medium">Time</span>
          <span className="text-white/25 text-[10px] uppercase tracking-widest font-medium">Session</span>
          <span className="text-white/25 text-[10px] uppercase tracking-widest font-medium hidden md:block">Track</span>
        </div>

        {/* Sessions */}
        {sessions.map((s, i) => {
          const isBreak = s.track === "Break";
          return (
            <div
              key={i}
              className={`grid grid-cols-[120px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 py-6 border-b border-white/[0.07] group ${
                isBreak ? "opacity-40" : "hover:bg-white/[0.015] transition-colors duration-150"
              }`}
            >
              {/* Time */}
              <div className="shrink-0">
                <p
                  className="text-[#B69556] text-xs font-mono font-semibold"
                  style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
                >
                  {s.time}
                </p>
                <p
                  className="text-white/20 text-[10px] font-mono mt-0.5"
                  style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
                >
                  – {s.end}
                </p>
              </div>

              {/* Title + description */}
              <div className="min-w-0">
                <p className={`font-semibold text-sm md:text-base leading-snug ${isBreak ? "text-white/40" : "text-white"}`}>
                  {s.title}
                </p>
                {s.description && (
                  <p className="text-white/35 text-sm font-light leading-relaxed mt-2 max-w-2xl">
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
        <p className="text-white/20 text-xs font-light mt-6 uppercase tracking-widest">
          Speakers for each session to be announced
        </p>

      </div>
    </section>
  );
}
