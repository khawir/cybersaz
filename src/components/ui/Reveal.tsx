"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Fade + rise as the element enters the viewport. Re-implements the old
 * assets/animations.js IntersectionObserver behavior as a client component.
 * Server-rendered markup has no hiding class (visible if JS never runs).
 * Hidden/visible state is applied by directly toggling the DOM node's
 * className inside useLayoutEffect/the observer callback — an imperative
 * sync with an external system (IntersectionObserver), not React state —
 * so there's no extra render and no flash of visible-then-hidden content.
 */
export function Reveal({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    el.classList.add("reveal-hidden");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-hidden");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--i": index } as CSSProperties;

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
