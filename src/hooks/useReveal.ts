import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      setRevealed(true);
      return;
    }

    el.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -32px 0px",
      },
    );

    observer.observe(el);

    const safetyTimeout = window.setTimeout(() => {
      setRevealed(true);
      observer.disconnect();
    }, 1800);

    return () => {
      window.clearTimeout(safetyTimeout);
      observer.disconnect();
    };
  }, []);

  return {
    ref,
    revealClass: revealed ? "reveal is-revealed" : "reveal",
  };
}
