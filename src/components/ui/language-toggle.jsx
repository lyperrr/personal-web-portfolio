import React from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className = "" }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language ? i18n.language.substring(0, 2).toLowerCase() : "id";

  const handleSetLang = (lang) => {
    if (currentLang !== lang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div
      className={cn(
        "group relative inline-flex items-center h-11 sm:h-12 gap-1.5 p-1 rounded-full glass-panel glass-specular-corner-subtle border border-white/60 dark:border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur-2xl shadow-lg select-none hover:shadow-xl transition-all duration-300 shrink-0",
        className
      )}
      aria-label="Language Selector"
    >
      {/* Glossy Icon Sphere with glowing primary accent */}
      <div className="relative flex items-center justify-center size-9 sm:size-10 rounded-full bg-white/60 dark:bg-white/15 backdrop-blur-md border border-white/80 dark:border-white/25 shadow-xs text-primary shrink-0 ml-0.5 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
        <Languages className="size-4.5 sm:size-5 group-hover:rotate-12 transition-transform duration-300 z-10" />
        {/* Specular Glint Reflection */}
        <div className="absolute inset-0 rounded-full border border-white/90 dark:border-white/40 pointer-events-none [mask-image:linear-gradient(135deg,white_0%,transparent_55%)]" />
      </div>

      {/* Inner Liquid Glass Channel / Track */}
      <div className="relative flex items-center bg-black/5 dark:bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/30 dark:border-white/10 w-26 sm:w-28 h-9 sm:h-10">
        {/* Translucent Liquid Glass Active Pill (100% Symmetrical Precision) */}
        <div
          className={cn(
            "absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white/90 dark:bg-white/25 backdrop-blur-2xl border border-white dark:border-white/40 shadow-md shadow-black/10 dark:shadow-white/10 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden pointer-events-none z-0",
            currentLang === "en" ? "left-[calc(50%)]" : "left-1"
          )}
        >
          {/* Specular Highlight Sheen Mask */}
          <div className="absolute inset-0 rounded-full border border-white dark:border-white/60 pointer-events-none [mask-image:linear-gradient(135deg,white_0%,white_30%,transparent_60%)]" />
        </div>

        {/* ID Button */}
        <button
          type="button"
          onClick={() => handleSetLang("id")}
          className={cn(
            "relative z-10 flex-1 h-full flex items-center justify-center text-xs sm:text-sm font-black tracking-wider transition-colors duration-200 cursor-pointer rounded-full outline-none",
            currentLang === "id"
              ? "text-foreground font-black"
              : "text-muted-foreground/70 hover:text-foreground font-bold"
          )}
          aria-label="Bahasa Indonesia"
        >
          ID
        </button>

        {/* EN Button */}
        <button
          type="button"
          onClick={() => handleSetLang("en")}
          className={cn(
            "relative z-10 flex-1 h-full flex items-center justify-center text-xs sm:text-sm font-black tracking-wider transition-colors duration-200 cursor-pointer rounded-full outline-none",
            currentLang === "en"
              ? "text-foreground font-black"
              : "text-muted-foreground/70 hover:text-foreground font-bold"
          )}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </div>
  );
}

export default LanguageToggle;

