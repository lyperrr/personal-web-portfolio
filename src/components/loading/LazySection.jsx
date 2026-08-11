import React, { useState, useEffect, useRef } from "react";

/**
 * LazySection - IntersectionObserver based scroll-loader that shows Apple Liquid Glass
 * Skeleton loader first when scrolled into view, then smoothly reveals the real section.
 */
export function LazySection({
  children,
  fallback,
  delay = 750, // Situation-based dynamic loading delay
  rootMargin = "120px", // Trigger preload before section enters viewport
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (isVisible) {
      // Dynamic situation delay so skeleton is displayed smoothly when scrolled into view
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div ref={sectionRef} className="min-h-[200px] relative">
      {!isLoaded ? (
        <div className="transition-opacity duration-500 ease-out opacity-100">
          {fallback}
        </div>
      ) : (
        <div className="animate-in fade-in duration-700 ease-out">
          {children}
        </div>
      )}
    </div>
  );
}

export default LazySection;
