"use client";

import { useEffect } from "react";

/**
 * Adds a subtle shadow to the sticky nav once the page scrolls — ported
 * from the original assets/animations.js. The nav itself is always
 * `position: sticky; top: 0`, so it never leaves the viewport; this just
 * gives it a visual "lift" once there's content scrolled underneath it.
 */
export function NavScrollShadow() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    const setScrolled = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
    return () => window.removeEventListener("scroll", setScrolled);
  }, []);

  return null;
}
