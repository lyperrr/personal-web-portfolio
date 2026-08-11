import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/**
 * BackToTop Component:
 * - Desktop (>= md): Shown inside Footer header with side="top" tooltip
 * - Mobile (< md): Floating button in bottom-right corner of viewport (no tooltip)
 */
export function BackToTop({ scrollToSection, className, variant = "floating" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e) => {
    if (scrollToSection) {
      scrollToSection(e, "home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Desktop Footer Version with Tooltip
  if (variant === "desktop-footer") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon-lg"
            onClick={handleClick}
            className={cn(
              "rounded-full cursor-pointer shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-white/50 dark:border-white/20 shrink-0 hidden md:flex",
              className
            )}
            aria-label="Back to Top"
          >
            <ArrowUp className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          Back to Top
        </TooltipContent>
      </Tooltip>
    );
  }

  // Mobile Floating Version (No Tooltip)
  const floatingButton = (
    <Button
      variant="outline"
      size="icon-lg"
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        left: "auto",
        zIndex: 99999,
      }}
      className={cn(
        "md:hidden size-12 rounded-full shadow-2xl glass-panel glass-specular-corner backdrop-blur-2xl bg-white/85 dark:bg-white/18 border border-white/50 dark:border-white/20 text-foreground transition-all duration-300 active:scale-95 flex items-center justify-center pointer-events-auto",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none",
        className
      )}
      aria-label="Back to Top"
    >
      <ArrowUp className="size-5 text-primary" />
    </Button>
  );

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(floatingButton, document.body);
}

export default BackToTop;
