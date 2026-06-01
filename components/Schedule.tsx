import SectionLabel from "@/components/SectionLabel";

type Item = {
  time: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  muted?: boolean; // breaks / logistics
};

const programme: Item[] = [
  {
    time: "8:00 – 9:30 AM",
    title: "Registration, Breakfast & Networking",
    body: "Arrive, check in, enjoy breakfast, and connect with fellow founders, business leaders, and industry professionals before the day's sessions begin.",
    muted: true,
  },
  {
    time: "9:30 – 9:45 AM",
    title: "Opening & Welcome",
    body: "An introduction to Forge'26, the day's programme, and what attendees can expect from the experience.",
  },
  {
    time: "9:45 – 11:00 AM",
    title: "Session 1 — Growth Mindset",
    subtitle: "Built for Growth in a Changing World",
    body: "Explore the realities of building and scaling businesses in today's economic environment:",
    bullets: [
      "Understanding the African SME landscape",
      "Identifying emerging growth opportunities",
      "Navigating uncertainty and change",
      "Building practical expansion strategies",
      "Leveraging partnerships and strategic alliances",
    ],
  },
  {
    time: "11:00 – 11:30 AM",
    title: "Networking Break",
    body: "Refreshments and networking.",
    muted: true,
  },
  {
    time: "11:30 – 1:00 PM",
    title: "Session 2 — Growth Engines",
    subtitle: "Governance & Operations for Sustainable Scale",
    body: "Discover the systems that enable businesses to grow sustainably:",
    bullets: [
      "Organizational structure and business readiness",
      "Operational systems that scale",
      "Governance and accountability frameworks",
      "Compliance as a growth enabler",
      "Building effective people systems",
      "Avoiding common operational pitfalls",
    ],
  },
  {
    time: "1:00 – 2:00 PM",
    title: "Lunch & Networking",
    body: "Enjoy lunch while connecting with fellow attendees, exhibitors, and business leaders.",
    muted: true,
  },
  {
    time: "2:00 – 2:45 PM",
    title: "Session 3 — Personal Finance",
    subtitle: "Building Personal Wealth Alongside Business Success",
    body: "Learn practical approaches to personal financial management:",
    bullets: [
      "Separating personal and business finances",
      "Founder compensation strategies",
      "Building long-term personal wealth",
      "Insurance, pension, and financial protection",
      "Managing personal finances during business challenges",
    ],
  },
  {
    time: "2:45 – 2:55 PM",
    title: "Expert Consultation Briefing",
    body: "An overview of the expert consultation experience and session allocations.",
    muted: true,
  },
  {
    time: "2:55 – 4:25 PM",
    title: "Expert Consultation Sessions",
    body: "A series of private small-group consultations with specialists across key business functions. Consultation areas include:",
    bullets: [
      "Legal & Compliance",
      "Corporate Governance",
      "Accounting & Tax",
      "Growth & Innovation",
      "Corporate Finance & Capital Raising",
      "Personal Finance",
      "AI for African SMEs",
    ],
  },
  {
    time: "4:35 – 4:50 PM",
    title: "Closing Session",
    body: "Key insights from the day, closing reflections, and next steps for attendees.",
  },
  {
    time: "4:50 – 6:00 PM",
    title: "Cocktail Reception & Networking",
    body: "Wrap up the day with refreshments, conversations, and meaningful connections with fellow founders, experts, and business leaders.",
    muted: true,
  },
];

export default function Schedule() {
  return (
    <section id="agenda" className="bg-[#f4f1ea] px-6 md:px-16 py-24 md:py-36">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel dark>June 13, 2026</SectionLabel>
            <h2 className="section-h" style={{ color: "#1a1a1a" }}>
              The Day, Hour by Hour
            </h2>
          </div>
          <p className="text-black/40 text-sm font-light max-w-xs md:text-right">
            All times WAT (West Africa Time, GMT+1).
            <br />Schedule subject to minor adjustments.
          </p>
        </div>

        {/* Programme rows */}
        <div className="border-t border-black/15">
          {programme.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-10 py-7 border-b border-black/[0.09]"
            >
              {/* Time */}
              <div className="shrink-0">
                <p className="text-[#8a6d33] text-sm font-semibold tabular-nums">{s.time}</p>
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className={`font-semibold text-lg md:text-xl leading-snug ${s.muted ? "text-black/55" : "text-[#1a1a1a]"}`}>
                  {s.title}
                </h3>
                {s.subtitle && (
                  <p className="text-[#8a6d33] text-sm font-medium mt-1">{s.subtitle}</p>
                )}
                {s.body && (
                  <p className="text-black/55 text-[15px] font-light leading-relaxed mt-2.5 max-w-2xl">
                    {s.body}
                  </p>
                )}
                {s.bullets && (
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 max-w-2xl">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-black/55 text-[14px] font-light leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#B69556] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-black/30 text-xs font-light mt-6 uppercase tracking-widest">
          Speakers for each session to be announced
        </p>

      </div>
    </section>
  );
}
