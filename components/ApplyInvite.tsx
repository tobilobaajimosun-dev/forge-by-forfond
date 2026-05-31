export default function ApplyInvite() {
  return (
    <div className="bg-[#272727] px-4 md:px-6">
      {/* Full-bleed CTAs (Config style) — wide + tall */}
      <div className="flex flex-col gap-2.5">
        {/* Primary — Request an Invite */}
        <a
          href="https://tally.so/r/ZjDaXA"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-full h-20 md:h-24 rounded-2xl hover:rounded-[40px] bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.995] transition-all duration-300"
        >
          <span className="text-base md:text-lg font-bold uppercase tracking-[0.22em] text-black">
            Request an Invite
          </span>
          <span className="ml-4 text-black font-bold text-2xl group-hover:translate-x-1.5 transition-transform duration-150">
            →
          </span>
        </a>

        {/* Secondary — View Schedule (outlined) */}
        <a
          href="#agenda"
          className="group flex items-center justify-center w-full h-20 md:h-24 rounded-2xl hover:rounded-[40px] border border-white/20 hover:border-white/45 active:scale-[0.995] transition-all duration-300"
        >
          <span className="text-base md:text-lg font-bold uppercase tracking-[0.22em] text-white/60 group-hover:text-white transition-colors duration-150">
            View Schedule
          </span>
        </a>
      </div>
    </div>
  );
}
