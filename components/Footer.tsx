export default function Footer() {
  return (
    <footer className="bg-[#272727] border-t border-white/[0.06] px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <p className="text-white font-black text-sm uppercase tracking-tight mb-1">
              Forge <span className="text-[#B69556]">/</span> ForFond
            </p>
            <p className="text-white/30 text-xs font-light">
              A curated experience for ambitious startups and SMEs.
            </p>
          </div>
          <a
            href="#register"
            className="inline-flex items-center justify-center bg-[#B69556] hover:bg-[#c9a96a] active:scale-[0.97] text-white font-semibold px-6 py-3 text-xs uppercase tracking-widest transition-all duration-150"
          >
            Register Now
          </a>
        </div>
        <div className="w-full h-px bg-white/[0.06] mb-8" />
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-white/25 text-xs uppercase tracking-widest">
          <span>ForFond &copy; 2026</span>
          <span>June 13, 2026 &bull; Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
