const sessions = [
  {
    time: "8:00 AM",
    title: "Registration & Networking Breakfast",
    speaker: "",
    track: "General",
  },
  {
    time: "9:00 AM",
    title: "Opening Keynote: The Future of Work",
    speaker: "CEO, Forfond",
    track: "Keynote",
  },
  {
    time: "10:30 AM",
    title: "Panel: Building Resilient Organizations",
    speaker: "Industry Leaders",
    track: "Panel",
  },
  {
    time: "12:00 PM",
    title: "Lunch Break",
    speaker: "",
    track: "General",
  },
  {
    time: "1:30 PM",
    title: "Workshop: Innovation at Scale",
    speaker: "Product & Engineering Teams",
    track: "Workshop",
  },
  {
    time: "3:00 PM",
    title: "Fireside Chat: Leadership in Uncertainty",
    speaker: "Special Guest",
    track: "Fireside",
  },
  {
    time: "4:30 PM",
    title: "Closing Remarks & Networking",
    speaker: "",
    track: "General",
  },
];

const trackColors: Record<string, string> = {
  Keynote: "bg-[#B69556]/20 text-[#B69556] border-[#B69556]/30",
  Panel: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Workshop: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Fireside: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  General: "bg-white/5 text-white/40 border-white/10",
};

export default function Agenda() {
  return (
    <section id="agenda" className="bg-[#272727] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B69556] text-sm font-semibold uppercase tracking-widest mb-3">
            Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Event Agenda
          </h2>
          <p className="text-white/50 mt-4 text-lg">September 20, 2026</p>
        </div>

        <div className="space-y-3">
          {sessions.map((session, i) => (
            <div
              key={i}
              className="flex gap-6 items-start bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 transition-colors"
            >
              <div className="w-20 shrink-0 text-[#B69556] font-mono text-sm font-semibold pt-0.5">
                {session.time}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base leading-snug">
                  {session.title}
                </h3>
                {session.speaker && (
                  <p className="text-white/50 text-sm mt-1">{session.speaker}</p>
                )}
              </div>
              <span
                className={`shrink-0 text-xs border px-2.5 py-1 rounded-full font-medium ${trackColors[session.track]}`}
              >
                {session.track}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
