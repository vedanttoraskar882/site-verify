import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "about", "platform", "how-it-works", "market-pricing", "faq"];

export function useActiveSection(): string {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    function updateActive() {
      const offset = 120;
      let current = "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }
      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return activeId;
}
