import { useState, useEffect } from "react";

export function useActiveSection(sectionIds, defaultSection = "home") {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. If at top of page (Hero section), force activeSection to "home"
      if (scrollY < 150) {
        setActiveSection("home");
        return;
      }

      // 2. Use getBoundingClientRect() to find which section is currently active on screen
      // Target viewport line is 160px from top (just below fixed navbar)
      const targetLine = 160;
      let activeId = null;

      for (let i = 0; i < sectionIds.length; i++) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // A section is active if its top is at or above targetLine AND its bottom is still below targetLine
          if (rect.top <= targetLine + 100 && rect.bottom > targetLine) {
            activeId = sectionId;
            break;
          }
        }
      }

      // Fallback: If no section strictly matches targetLine, pick the section with top closest above targetLine
      if (!activeId) {
        let bestDistance = -Infinity;
        for (let i = 0; i < sectionIds.length; i++) {
          const sectionId = sectionIds[i];
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= targetLine + 200 && rect.top > bestDistance) {
              bestDistance = rect.top;
              activeId = sectionId;
            }
          }
        }
      }

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Run check immediately + periodic interval to accommodate lazy-loaded section renders
    handleScroll();
    const interval = setInterval(handleScroll, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearInterval(interval);
    };
  }, [sectionIds]);

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return { activeSection, scrollToSection };
}
