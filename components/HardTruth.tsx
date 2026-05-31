"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/SectionLabel";

// The story, line by line. `g` marks gold-emphasized fragments.
type Frag = { t: string; g?: boolean };
const story: Frag[][] = [
  [{ t: "Every founder starts with a vision." }],
  [
    { t: "But somewhere between the first hire and the first real contract, " },
    { t: "the cracks begin to show.", g: true },
  ],
  [
    { t: "The records " },
    { t: "never properly kept.", g: true },
    { t: " The taxes " },
    { t: "never strategically managed.", g: true },
    { t: " The payroll held together by goodwill." },
  ],
  [
    { t: "Growth does not fix these things. " },
    { t: "It exposes them.", g: true },
  ],
  [
    { t: "And by the time you feel it, the cost of fixing is " },
    { t: "far greater", g: true },
    { t: " than the cost of building right." },
  ],
  [
    { t: "Forge exists for the founders who " },
    { t: "refuse to find out the hard way.", g: true },
  ],
];

function StoryLine({ frags, index }: { frags: Frag[]; index: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        fontSize: "clamp(28px, 4.2vw, 56px)",
        lineHeight: 1.18,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        opacity: vis ? 1 : 0.12,
        filter: vis ? "blur(0px)" : "blur(5px)",
        transform: vis ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${index * 40}ms`,
      }}
    >
      {frags.map((f, i) => (
        <span key={i} style={{ color: f.g ? "#B69556" : vis ? "#fff" : "rgba(255,255,255,0.5)" }}>
          {f.t}
        </span>
      ))}
    </p>
  );
}

export default function HardTruth() {
  return (
    <section className="bg-[#161616] px-6 md:px-16 py-28 md:py-40">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>The Hard Truth</SectionLabel>

        <div className="space-y-8 md:space-y-12 mt-6">
          {story.map((line, i) => (
            <StoryLine key={i} frags={line} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
