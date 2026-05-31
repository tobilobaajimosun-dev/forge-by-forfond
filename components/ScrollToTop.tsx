"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Stop the browser from restoring the previous scroll position on reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Jump to the top on initial load (unless navigating to an in-page #anchor)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
