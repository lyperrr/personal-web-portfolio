import React from "react";
import { Text, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Reusable SectionHeader component for page sections.
 * @param {string|number} number - Watermark background number (e.g. "01", "02").
 * @param {string} [title] - Main badge text/title (e.g. "Skills & Tech Stack").
 * @param {string} [description] - Optional description text displayed under the badge.
 * @param {string} [className] - Additional wrapper styling.
 */
export function SectionHeader({
  number,
  title,
  description,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center relative space-y-2 select-none",
        className
      )}
      {...props}
    >
      {number && (
        <span className="text-6xl sm:text-8xl font-extrabold text-primary/10 tracking-widest leading-none font-mono -mb-5">
          {number}
        </span>
      )}
      {title && (
        <Badge
          variant="ghost"
          className="text-base sm:text-lg font-bold tracking-wide px-6 py-2 rounded-full glass-panel shadow-md backdrop-blur-xl backdrop-saturate-150 relative z-10 border border-white/35 dark:border-white/15 text-liquid"
        >
          {title}
        </Badge>
      )}
      {description && (
        <Text variant="muted" className="mt-3 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          {description}
        </Text>
      )}
    </div>
  );
}

export default SectionHeader;
