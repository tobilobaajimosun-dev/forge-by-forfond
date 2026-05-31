export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#272727]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 h-14 flex items-center justify-between">
        <span className="text-white font-black text-sm tracking-tight uppercase">
          Forge <span className="text-[#B69556]">/</span> ForFond
        </span>

        <div className="hidden md:flex items-center gap-8 text-xs text-white/40 uppercase tracking-widest font-medium">
          <a href="#agenda" className="hover:text-white transition-colors duration-150">Agenda</a>
          <a href="#speakers" className="hover:text-white transition-colors duration-150">Speakers</a>
          <a href="#register" className="hover:text-white transition-colors duration-150">Register</a>
        </div>

        <a
          href="#register"
          className="bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.97] text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 transition-all duration-150"
        >
          Register
        </a>
      </div>
    </nav>
  );
}
