import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useActiveSection(sectionIds, defaultSection = "home") {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. If currently on a detail page route like /portfolio/:slug, highlight 'portfolio'
    if (location.pathname.startsWith("/portfolio/")) {
      setActiveSection("portfolio");
      return;
    }

    const handleScroll = () => {
      if (location.pathname !== "/") return;

      const scrollY = window.scrollY;

      // Force activeSection to "home" if scrolled to top
      if (scrollY < 150) {
        setActiveSection("home");
        return;
      }

      const targetLine = 160;
      let activeId = null;

      for (let i = 0; i < sectionIds.length; i++) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= targetLine + 100 && rect.bottom > targetLine) {
            activeId = sectionId;
            break;
          }
        }
      }

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

    handleScroll();
    const interval = setInterval(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearInterval(interval);
    };
  }, [sectionIds, location.pathname]);

  // Robust smooth scroll execution helper with multi-stage retry
  const performScroll = useCallback((targetId) => {
    const attempts = [0, 50, 150, 300];
    attempts.forEach((delay) => {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, delay);
    });
  }, []);

  // Handle automatic smooth scroll when arriving at "/" with a hash (e.g. /#portfolio or /#about)
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.replace("#", "");
      performScroll(targetId);
    }
  }, [location.pathname, location.hash, performScroll]);

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();

    setActiveSection(sectionId);

    if (location.pathname !== "/") {
      // If currently on a detail page, navigate back to homepage with section hash
      navigate(`/#${sectionId}`);
    } else {
      // If on homepage, perform direct smooth scroll & update URL hash
      performScroll(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return { activeSection, scrollToSection };
}
