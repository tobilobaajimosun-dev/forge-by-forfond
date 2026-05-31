const speakers = [
  {
    name: "Adaeze Okafor",
    role: "CEO, Forfond",
    bio: "Visionary leader with 15+ years building transformative organizations across Africa.",
    initials: "AO",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Tunde Fashola",
    role: "Chief Product Officer",
    bio: "Product strategist obsessed with human-centered design and scalable systems.",
    initials: "TF",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Ngozi Eze",
    role: "Head of Innovation",
    bio: "Former McKinsey partner driving Forfond's innovation labs and R&D initiatives.",
    initials: "NE",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Chidi Nwachukwu",
    role: "Special Guest Speaker",
    bio: "Award-winning entrepreneur and author of 'The African Advantage'.",
    initials: "CN",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-[#272727] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B69556] text-sm font-semibold uppercase tracking-widest mb-3">
            Lineup
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured Speakers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#B69556]/30 transition-colors group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${speaker.color} flex items-center justify-center text-white font-bold text-xl mb-4`}
              >
                {speaker.initials}
              </div>
              <h3 className="text-white font-bold text-lg leading-tight">
                {speaker.name}
              </h3>
              <p className="text-[#B69556] text-sm font-medium mt-1 mb-3">
                {speaker.role}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
