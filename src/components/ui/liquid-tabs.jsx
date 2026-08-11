import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable LiquidTabs component featuring fluid spring-animated active glass pill & hover fluid morphing.
 * Supports both "horizontal" (default) and "vertical" orientations.
 */
export function LiquidTabs({
  tabs,
  activeTab,
  onChangeTab,
  className,
  orientation = "horizontal",
}) {
  const containerRef = useRef(null);
  const isVertical = orientation === "vertical";
  const [activePillStyle, setActivePillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const [hoverPillStyle, setHoverPillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });
  const [hoveredTab, setHoveredTab] = useState(null);

  // Update active pill position dynamically with exact element offsets
  useEffect(() => {
    const updateActivePill = () => {
      const container = containerRef.current;
      if (!container) return;

      const activeIndex = tabs.findIndex(
        (tab) => (typeof tab === "string" ? tab : tab.id) === activeTab
      );

      if (activeIndex !== -1) {
        const tabElements = container.querySelectorAll("button[data-tab-button]");
        const activeElement = tabElements[activeIndex];

        if (activeElement) {
          setActivePillStyle({
            left: activeElement.offsetLeft,
            top: activeElement.offsetTop,
            width: activeElement.offsetWidth,
            height: activeElement.offsetHeight,
            opacity: 1,
          });
        }
      }
    };

    updateActivePill();
    window.addEventListener("resize", updateActivePill);
    return () => window.removeEventListener("resize", updateActivePill);
  }, [activeTab, tabs, orientation]);

  // Handle tab hover
  const handleMouseEnter = (id, element) => {
    if (id === activeTab) {
      setHoverPillStyle((prev) => ({ ...prev, opacity: 0 }));
      setHoveredTab(null);
      return;
    }

    setHoveredTab(id);
    if (element) {
      setHoverPillStyle({
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
    setHoverPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex p-1.5 glass-panel glass-specular-corner mx-auto shadow-xl border border-white/40 dark:border-white/15 select-none backdrop-blur-2xl bg-white/40 dark:bg-white/5",
        isVertical
          ? "flex-col items-center gap-1.5 rounded-[2.25rem] w-fit"
          : "flex-wrap items-center justify-center gap-1 rounded-3xl sm:rounded-full max-w-full w-fit",
        className
      )}
    >
      {/* Fluid Hover Liquid Glass Pill */}
      <div
        className="absolute rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/15 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none z-0 overflow-hidden"
        style={
          isVertical
            ? {
              top: `${hoverPillStyle.top}px`,
              height: `${hoverPillStyle.height}px`,
              left: "6px",
              right: "6px",
              opacity: hoveredTab ? hoverPillStyle.opacity : 0,
            }
            : {
              left: `${hoverPillStyle.left}px`,
              top: `${hoverPillStyle.top}px`,
              width: `${hoverPillStyle.width}px`,
              height: `${hoverPillStyle.height}px`,
              opacity: hoveredTab ? hoverPillStyle.opacity : 0,
            }
        }
      >
        <div className="absolute inset-0 rounded-full border border-white/70 dark:border-white/40 pointer-events-none [mask-image:linear-gradient(135deg,white_0%,white_25%,transparent_45%,transparent_55%,white_75%,white_100%)]" />
      </div>

      {/* Active Translucent Liquid Glass Pill */}
      <div
        className="absolute rounded-full bg-white/85 dark:bg-white/18 backdrop-blur-2xl border border-white/70 dark:border-white/25 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none z-0 overflow-hidden"
        style={
          isVertical
            ? {
              top: `${activePillStyle.top}px`,
              height: `${activePillStyle.height}px`,
              left: "6px",
              right: "6px",
              opacity: activePillStyle.opacity,
            }
            : {
              left: `${activePillStyle.left}px`,
              top: `${activePillStyle.top}px`,
              width: `${activePillStyle.width}px`,
              height: `${activePillStyle.height}px`,
              opacity: activePillStyle.opacity,
            }
        }
      >
        <div className="absolute inset-0 rounded-full border border-white dark:border-white/60 pointer-events-none [mask-image:linear-gradient(135deg,white_0%,white_25%,transparent_45%,transparent_55%,white_75%,white_100%)]" />
      </div>

      {tabs.map((tab) => {
        const id = typeof tab === "string" ? tab : tab.id;
        const label = typeof tab === "string" ? tab : tab.name || tab.label;
        const icon = typeof tab === "object" ? tab.icon : null;
        const isActive = id === activeTab;

        return (
          <button
            key={id}
            data-tab-button
            onClick={() => onChangeTab(id)}
            onMouseEnter={(e) => handleMouseEnter(id, e.currentTarget)}
            className={cn(
              "relative z-10 flex items-center justify-center rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
              isVertical ? "p-3" : "px-3.5 sm:px-5 py-2",
              isActive
                ? "text-foreground font-bold text-liquid"
                : "text-foreground/80 hover:text-foreground"
            )}
          >
            {icon || label}
          </button>
        );
      })}
    </div>
  );
}

export default LiquidTabs;
