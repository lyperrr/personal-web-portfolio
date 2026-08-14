import React from "react";
import { Text } from "./text";
import { Badge } from "./badge";
import { FadeIn } from "./fade-in";
import { cn } from "@/lib/utils";

/**
 * Reusable SectionHeader component for page sections with built-in entrance animation.
 * @param {string|number} [number] - Watermark background number (e.g. "01", "02").
 * @param {string} [title] - Main badge text/title (e.g. "Skills & Tech Stack").
 * @param {string} [description] - Optional description text displayed under the badge.
 * @param {"center" | "left" | "right"} [align="center"] - Header alignment ("center", "left", or "right").
 * @param {string} [className] - Additional wrapper styling.
 */
export function SectionHeader({
  number,
  title,
  description,
  align = "center",
  className,
  ...props
}) {
  const isLeft = align === "left";
  const isRight = align === "right";

  return (
    <FadeIn
      direction="down"
      duration={0.5}
      className={cn(
        "flex flex-col relative space-y-2 select-none",
        isLeft
          ? "items-start justify-start text-left"
          : isRight
          ? "items-end justify-end text-right"
          : "items-center justify-center text-center",
        className
      )}
      {...props}
    >
      {number && (
        <span
          className={cn(
            "text-6xl sm:text-8xl font-extrabold text-primary/10 tracking-widest leading-none font-mono -mb-3 lg:-mb-5",
            isLeft ? "ml-0" : isRight ? "mr-0" : ""
          )}
        >
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
        <Text
          variant="muted"
          className={cn(
            "mt-3 max-w-xl leading-relaxed text-sm sm:text-base",
            isLeft ? "mx-0" : isRight ? "ml-auto" : "mx-auto"
          )}
        >
          {description}
        </Text>
      )}
    </FadeIn>
  );
}

export default SectionHeader;
