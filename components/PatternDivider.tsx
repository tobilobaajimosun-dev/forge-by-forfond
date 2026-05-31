export default function PatternDivider() {
  return (
    <div className="w-full overflow-hidden" style={{ height: "180px", background: "#1a1a1a" }}>
      <svg
        width="100%"
        height="180"
        viewBox="0 0 1440 180"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1440" height="180" fill="#1a1a1a" />

        {/* ── Large gold triangles ── */}
        <polygon points="48,148 96,60 144,148" fill="#B69556" opacity="0.92" />
        <polygon points="220,160 252,100 284,160" fill="#B69556" opacity="0.55" />
        <polygon points="640,24 700,136 580,136" fill="#B69556" opacity="0.72" />
        <polygon points="980,152 1012,92 1044,152" fill="#B69556" opacity="0.6" />
        <polygon points="1260,18 1330,148 1190,148" fill="#B69556" opacity="0.82" />
        <polygon points="1390,130 1416,76 1440,130" fill="#B69556" opacity="0.5" />
        <polygon points="760,150 790,90 820,150" fill="#B69556" opacity="0.45" />

        {/* ── Chevrons / open triangles ── */}
        <path d="M 490 100 L 520 55 L 550 100" stroke="#B69556" strokeWidth="4" fill="none" opacity="0.65" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 870 120 L 900 68 L 930 120" stroke="#B69556" strokeWidth="3.5" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 1110 90 L 1134 48 L 1158 90" stroke="white" strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round" strokeLinejoin="round"/>

        {/* ── Rounded rectangles ── */}
        <rect x="160" y="60" width="52" height="52" rx="8" fill="#B69556" opacity="0.38" />
        <rect x="360" y="32" width="36" height="36" rx="6" fill="#B69556" opacity="0.52" />
        <rect x="560" y="112" width="52" height="28" rx="6" fill="#B69556" opacity="0.32" />
        <rect x="800" y="52" width="40" height="40" rx="7" fill="#B69556" opacity="0.48" />
        <rect x="1080" y="88" width="44" height="28" rx="5" fill="#B69556" opacity="0.38" />
        <rect x="1190" y="30" width="30" height="30" rx="5" fill="#B69556" opacity="0.52" />
        <rect x="1330" y="70" width="36" height="36" rx="6" fill="#B69556" opacity="0.4" />

        {/* ── Dot clusters ── */}
        <circle cx="200" cy="40" r="8" fill="white" opacity="0.45" />
        <circle cx="316" cy="110" r="7" fill="white" opacity="0.38" />
        <circle cx="316" cy="132" r="7" fill="white" opacity="0.38" />
        <circle cx="336" cy="121" r="7" fill="white" opacity="0.35" />

        <circle cx="468" cy="44" r="6" fill="#B69556" opacity="0.72" />
        <circle cx="488" cy="44" r="6" fill="#B69556" opacity="0.72" />
        <circle cx="508" cy="44" r="6" fill="#B69556" opacity="0.72" />

        <circle cx="720" cy="108" r="9" fill="white" opacity="0.28" />
        <circle cx="744" cy="108" r="9" fill="white" opacity="0.28" />
        <circle cx="768" cy="108" r="9" fill="white" opacity="0.28" />

        <circle cx="910" cy="38" r="7" fill="#B69556" opacity="0.6" />
        <circle cx="930" cy="38" r="7" fill="#B69556" opacity="0.6" />

        <circle cx="1050" cy="130" r="8" fill="white" opacity="0.32" />
        <circle cx="1072" cy="130" r="8" fill="white" opacity="0.32" />
        <circle cx="1094" cy="130" r="8" fill="white" opacity="0.32" />

        <circle cx="1360" cy="52" r="7" fill="#B69556" opacity="0.52" />
        <circle cx="1380" cy="52" r="7" fill="#B69556" opacity="0.52" />

        {/* ── Wavy / curved lines ── */}
        <path d="M 112 100 Q 136 68 160 100 Q 184 132 208 100" stroke="white" strokeWidth="3.5" fill="none" opacity="0.28" strokeLinecap="round"/>
        <path d="M 396 44 Q 424 18 452 44 Q 480 70 508 44" stroke="#B69556" strokeWidth="3" fill="none" opacity="0.55" strokeLinecap="round"/>
        <path d="M 590 124 Q 618 92 646 124 Q 674 156 702 124" stroke="white" strokeWidth="2.5" fill="none" opacity="0.22" strokeLinecap="round"/>
        <path d="M 840 72 Q 868 40 896 72 Q 924 104 952 72" stroke="#B69556" strokeWidth="3.5" fill="none" opacity="0.48" strokeLinecap="round"/>
        <path d="M 1000 116 Q 1028 84 1056 116 Q 1084 148 1112 116" stroke="white" strokeWidth="2.5" fill="none" opacity="0.28" strokeLinecap="round"/>
        <path d="M 1148 52 Q 1176 24 1204 52 Q 1232 80 1260 52" stroke="#B69556" strokeWidth="3" fill="none" opacity="0.52" strokeLinecap="round"/>

        {/* ── Diagonal line bundles ── */}
        <line x1="270" y1="44" x2="302" y2="148" stroke="white" strokeWidth="3" opacity="0.28" strokeLinecap="round"/>
        <line x1="288" y1="44" x2="320" y2="148" stroke="white" strokeWidth="3" opacity="0.22" strokeLinecap="round"/>
        <line x1="306" y1="44" x2="338" y2="148" stroke="white" strokeWidth="3" opacity="0.18" strokeLinecap="round"/>

        <line x1="960" y1="148" x2="992" y2="44" stroke="#B69556" strokeWidth="3" opacity="0.52" strokeLinecap="round"/>
        <line x1="978" y1="148" x2="1010" y2="44" stroke="#B69556" strokeWidth="3" opacity="0.42" strokeLinecap="round"/>

        {/* ── Small filled squares ── */}
        <rect x="600" y="64" width="16" height="16" fill="white" opacity="0.22" />
        <rect x="622" y="64" width="16" height="16" fill="white" opacity="0.18" />
        <rect x="1160" y="108" width="16" height="16" fill="#B69556" opacity="0.4" />
      </svg>
    </div>
  );
}
