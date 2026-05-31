export default function Footer() {
  return (
    <footer className="bg-[#111111] px-6 md:px-16 pt-24 pb-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Large centered logo */}
        <div className="text-center mb-12">
          <p
            className="font-bold text-white uppercase tracking-tight leading-none"
            style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
          >
            Forge
          </p>
          <p
            className="font-bold uppercase tracking-[0.15em] mt-1"
            style={{
              fontSize: "clamp(14px, 2vw, 22px)",
              color: "#B69556",
            }}
          >
            by ForFond
          </p>
        </div>

        {/* Nav links — mono uppercase */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
          {[
            { label: "Speakers", href: "#speakers" },
            { label: "Who Should Attend", href: "#who" },
            { label: "Schedule", href: "#agenda" },
            { label: "FAQ", href: "#faq" },
            { label: "Apply for Invite", href: "https://luma.com/j2sbmjc7", external: true },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-white/35 hover:text-white transition-colors duration-150 text-[11px] uppercase tracking-widest font-medium"
              style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] mb-8" />

        {/* Bottom row: copyright + social */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
          <p
            className="text-white/20 text-[11px] uppercase tracking-widest"
            style={{ fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace" }}
          >
            &copy; 2026 ForFond. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {/* X / Twitter */}
            <a
              href="https://twitter.com/forfondafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white transition-colors duration-150"
              aria-label="X (Twitter)"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/forfond"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white transition-colors duration-150"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/forfond"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
