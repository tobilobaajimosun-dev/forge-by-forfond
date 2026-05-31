"use client";

import { useRef, useEffect, ReactNode, CSSProperties } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  style,
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already visible (e.g. above fold on load) — reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      el.setAttribute("data-visible", "true");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-visible="false"
      className={`reveal-block ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
