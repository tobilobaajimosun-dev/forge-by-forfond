export default function ApplyInvite() {
  return (
    <div className="bg-[#272727] px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Buttons — 8px gap, rounded, taller */}
        <div className="flex flex-col gap-2">
          {/* Primary — Request an Invite (filled gold) */}
          <a
            href="https://tally.so/r/ZjDaXA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-full h-16 rounded-xl hover:rounded-[32px] bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.99] transition-all duration-300"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-black">
              Request an Invite
            </span>
            <span className="ml-3 text-black font-bold text-lg group-hover:translate-x-1 transition-transform duration-150">
              →
            </span>
          </a>

          {/* Secondary — View Schedule (outlined, not filled) */}
          <a
            href="#agenda"
            className="group flex items-center justify-center w-full h-16 rounded-xl hover:rounded-[32px] border border-white/20 hover:border-white/45 active:scale-[0.99] transition-all duration-300"
          >
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors duration-150">
              View Schedule
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}
