import { useState, useEffect } from "react";

export function useActiveSection(sectionIds, defaultSection = "home") {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Offset for sticky navbar

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
