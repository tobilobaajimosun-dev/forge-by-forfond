"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const toTop = () => {
      if (!window.location.hash) window.scrollTo(0, 0);
    };
    // Force top across the load lifecycle (covers slow mobile hydration)
    toTop();
    requestAnimationFrame(toTop);
    window.addEventListener("load", toTop);

    // Returning via the back-forward cache (mobile): snap back to top, no reload
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted && !window.location.hash) window.scrollTo(0, 0);
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("load", toTop);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
