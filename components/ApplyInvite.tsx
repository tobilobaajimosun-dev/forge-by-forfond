export default function ApplyInvite() {
  return (
    <div className="bg-[#272727] px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Copy line */}
        <p className="text-white/40 text-sm font-light pb-4 pt-0">
          Applications are now open. Seats are limited and curated for quality.
        </p>

        {/* Full-width apply button */}
        <a
          href="https://luma.com/j2sbmjc7"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-full py-5 bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.99] transition-all duration-150"
        >
          <span className="text-sm font-black uppercase tracking-[0.25em] text-black">
            Apply for an Invite
          </span>
          <span className="ml-3 text-black font-bold text-lg group-hover:translate-x-1 transition-transform duration-150">
            →
          </span>
        </a>

        {/* Secondary — see schedule */}
        <a
          href="#agenda"
          className="flex items-center justify-center w-full py-5 bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors duration-150 mt-px"
        >
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors duration-150">
            View Schedule
          </span>
        </a>

      </div>
    </div>
  );
}
