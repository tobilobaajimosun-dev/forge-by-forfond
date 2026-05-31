export default function PatternDivider() {
  return (
    <div className="w-full overflow-hidden bg-[#272727]" style={{ height: "96px" }}>
      <svg
        width="100%"
        height="96"
        viewBox="0 0 1440 96"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background */}
        <rect width="1440" height="96" fill="#1a1a1a" />

        {/* ── Gold shapes ── */}
        {/* Triangles */}
        <polygon points="40,72 64,32 88,72" fill="#B69556" opacity="0.9" />
        <polygon points="180,80 196,52 212,80" fill="#B69556" opacity="0.5" />
        <polygon points="620,20 644,68 596,68" fill="#B69556" opacity="0.7" />
        <polygon points="960,76 976,48 992,76" fill="#B69556" opacity="0.6" />
        <polygon points="1280,24 1304,72 1256,72" fill="#B69556" opacity="0.8" />
        <polygon points="1380,68 1396,40 1412,68" fill="#B69556" opacity="0.5" />

        {/* Rounded rectangles */}
        <rect x="120" y="36" width="36" height="36" rx="6" fill="#B69556" opacity="0.35" />
        <rect x="340" y="20" width="24" height="24" rx="4" fill="#B69556" opacity="0.5" />
        <rect x="490" y="52" width="40" height="20" rx="4" fill="#B69556" opacity="0.3" />
        <rect x="760" y="32" width="28" height="28" rx="5" fill="#B69556" opacity="0.45" />
        <rect x="1100" y="44" width="32" height="20" rx="4" fill="#B69556" opacity="0.35" />
        <rect x="1200" y="18" width="20" height="20" rx="3" fill="#B69556" opacity="0.5" />

        {/* Circles / dots */}
        <circle cx="160" cy="24" r="6" fill="white" opacity="0.5" />
        <circle cx="270" cy="60" r="5" fill="white" opacity="0.4" />
        <circle cx="270" cy="76" r="5" fill="white" opacity="0.4" />
        <circle cx="286" cy="68" r="5" fill="white" opacity="0.4" />
        <circle cx="440" cy="30" r="4" fill="#B69556" opacity="0.7" />
        <circle cx="456" cy="30" r="4" fill="#B69556" opacity="0.7" />
        <circle cx="472" cy="30" r="4" fill="#B69556" opacity="0.7" />
        <circle cx="700" cy="56" r="7" fill="white" opacity="0.3" />
        <circle cx="720" cy="56" r="7" fill="white" opacity="0.3" />
        <circle cx="740" cy="56" r="7" fill="white" opacity="0.3" />
        <circle cx="870" cy="24" r="5" fill="#B69556" opacity="0.6" />
        <circle cx="886" cy="24" r="5" fill="#B69556" opacity="0.6" />
        <circle cx="1050" cy="68" r="6" fill="white" opacity="0.35" />
        <circle cx="1066" cy="68" r="6" fill="white" opacity="0.35" />
        <circle cx="1082" cy="68" r="6" fill="white" opacity="0.35" />
        <circle cx="1340" cy="36" r="5" fill="#B69556" opacity="0.5" />
        <circle cx="1356" cy="36" r="5" fill="#B69556" opacity="0.5" />

        {/* Wavy / curved lines */}
        <path d="M 100 56 Q 120 36 140 56 Q 160 76 180 56" stroke="white" strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round"/>
        <path d="M 380 28 Q 400 12 420 28 Q 440 44 460 28" stroke="#B69556" strokeWidth="2.5" fill="none" opacity="0.55" strokeLinecap="round"/>
        <path d="M 540 64 Q 560 44 580 64 Q 600 84 620 64" stroke="white" strokeWidth="2" fill="none" opacity="0.25" strokeLinecap="round"/>
        <path d="M 800 40 Q 820 20 840 40 Q 860 60 880 40" stroke="#B69556" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round"/>
        <path d="M 1000 60 Q 1020 44 1040 60 Q 1060 76 1080 60" stroke="white" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round"/>
        <path d="M 1150 30 Q 1170 14 1190 30 Q 1210 46 1230 30" stroke="#B69556" strokeWidth="2.5" fill="none" opacity="0.5" strokeLinecap="round"/>

        {/* Diagonal line groups */}
        <line x1="300" y1="28" x2="320" y2="72" stroke="white" strokeWidth="2.5" opacity="0.3" strokeLinecap="round"/>
        <line x1="314" y1="28" x2="334" y2="72" stroke="white" strokeWidth="2.5" opacity="0.25" strokeLinecap="round"/>
        <line x1="328" y1="28" x2="348" y2="72" stroke="white" strokeWidth="2.5" opacity="0.2" strokeLinecap="round"/>

        <line x1="920" y1="72" x2="940" y2="28" stroke="#B69556" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
        <line x1="934" y1="72" x2="954" y2="28" stroke="#B69556" strokeWidth="2.5" opacity="0.4" strokeLinecap="round"/>

        {/* Arrow / chevron shapes */}
        <path d="M 660 48 L 680 28 L 700 48" stroke="#B69556" strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 1310 52 L 1330 28 L 1350 52" stroke="white" strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Small filled squares */}
        <rect x="566" y="38" width="12" height="12" fill="white" opacity="0.25" />
        <rect x="582" y="38" width="12" height="12" fill="white" opacity="0.2" />
        <rect x="1440" y="0" width="0" height="0" />
      </svg>
    </div>
  );
}
