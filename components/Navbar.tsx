export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#272727]/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="relative max-w-6xl mx-auto px-6 md:px-16 h-14 flex items-center">

        {/* Left nav */}
        <div className="hidden md:flex items-center gap-7 text-[11px] text-white/40 uppercase tracking-widest font-medium">
          <a href="#speakers" className="hover:text-white transition-colors duration-150">Speakers</a>
          <a href="#who" className="hover:text-white transition-colors duration-150">Who Should Attend</a>
          <a href="#agenda" className="hover:text-white transition-colors duration-150">Schedule</a>
        </div>

        {/* Center logo — absolute so it's truly centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-white font-bold text-sm tracking-tight uppercase whitespace-nowrap">
            Forge <span className="text-[#B69556]">/</span> ForFond
          </span>
        </div>

        {/* Right nav */}
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <a
            href="#faq"
            className="text-[11px] text-white/40 uppercase tracking-widest font-medium hover:text-white transition-colors duration-150"
          >
            FAQ
          </a>
          <a
            href="https://luma.com/j2sbmjc7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold uppercase tracking-widest px-4 py-2 border border-white/25 text-white/70 hover:bg-[#B69556] hover:border-[#B69556] hover:text-white transition-all duration-200"
          >
            Register
          </a>
          <a
            href="#agenda"
            className="text-[11px] text-white/40 uppercase tracking-widest font-medium hover:text-white transition-colors duration-150"
          >
            See Schedule
          </a>
        </div>

        {/* Mobile: just show register */}
        <a
          href="https://luma.com/j2sbmjc7"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden ml-auto text-[11px] font-semibold uppercase tracking-widest px-4 py-2 border border-white/25 text-white/70 hover:bg-[#B69556] hover:border-[#B69556] hover:text-white transition-all duration-200"
        >
          Register
        </a>

      </div>
    </nav>
  );
}
