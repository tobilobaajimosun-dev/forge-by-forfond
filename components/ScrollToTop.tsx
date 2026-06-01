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
    toTop();

    // Mobile / bfcache: when the page is restored from the back-forward cache,
    // force it back to the top and reload so entrance animations replay.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        window.scrollTo(0, 0);
        // Re-run animations by reloading the persisted page
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
