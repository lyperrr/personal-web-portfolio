import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui";

export function LanguageToggle({ className = "" }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : "id";
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSetLang = (lang) => {
    if (currentLang !== lang) {
      i18n.changeLanguage(lang);
    }
    setIsOpen(false);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative inline-flex items-center shrink-0", className)}>
      {!isOpen ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsOpen(true)}
              className="group h-11 sm:h-12 px-4 rounded-full shadow-sm flex items-center gap-2 cursor-pointer"
              aria-label="Select Language"
            >
              <Languages className="size-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-black uppercase tracking-wider text-foreground">
                {currentLang}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            {currentLang === "id" ? "Bahasa Indonesia" : "English"}
          </TooltipContent>
        </Tooltip>
      ) : (
        <div
          className="group relative inline-flex items-center h-11 sm:h-12 gap-1.5 p-1 rounded-full glass-panel glass-specular-corner-subtle border border-white/60 dark:border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur-2xl shadow-lg select-none transition-all duration-300 animate-in fade-in zoom-in-95"
          aria-label="Language Selector"
        >
          {/* Glossy Icon Sphere Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="relative size-9 sm:size-10 rounded-full text-primary shrink-0 ml-0.5 hover:scale-105 transition-transform duration-300 p-0 border-none shadow-none"
            aria-label="Close Language Selector"
          >
            <Languages className="size-4.5 sm:size-5 z-10" />
            <div className="absolute inset-0 rounded-full border border-white/90 dark:border-white/40 pointer-events-none [mask-image:linear-gradient(135deg,white_0%,transparent_55%)]" />
          </Button>

          {/* Inner Liquid Glass Channel / Track */}
          <div className="relative flex items-center bg-black/5 gap-1 dark:bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/30 dark:border-white/10 w-26 sm:w-28 h-9 sm:h-10">

            {/* ID Button */}
            <Button
              variant={currentLang === "id" ? "default" : "ghost"}
              onClick={() => handleSetLang("id")}
              className={cn(
                "relative z-10 flex-1 h-full p-0 flex items-center justify-center text-xs sm:text-sm font-black tracking-wider transition-all duration-200 cursor-pointer rounded-full outline-none border border-transparent shadow-none",
                currentLang === "id"
                  ? "bg-white/90 dark:bg-white/25 text-foreground font-black shadow-xs border-white/40 dark:border-white/20"
                  : "bg-transparent text-muted-foreground/70 hover:text-foreground hover:bg-white/10 font-bold"
              )}
              aria-label="Bahasa Indonesia"
            >
              ID
            </Button>

            {/* EN Button */}
            <Button
              variant={currentLang === "en" ? "default" : "ghost"}
              onClick={() => handleSetLang("en")}
              className={cn(
                "relative z-10 flex-1 h-full p-0 flex items-center justify-center text-xs sm:text-sm font-black tracking-wider transition-all duration-200 cursor-pointer rounded-full outline-none border border-transparent shadow-none",
                currentLang === "en"
                  ? "bg-white/90 dark:bg-white/25 text-foreground font-black shadow-xs border-white/40 dark:border-white/20"
                  : "bg-transparent text-muted-foreground/70 hover:text-foreground hover:bg-white/10 font-bold"
              )}
              aria-label="English"
            >
              EN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;

