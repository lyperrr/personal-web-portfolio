import React from "react";
import SkillCardSkeleton from "./SkillCardSkeleton";

/**
 * SkillsSectionSkeleton - Complete skeleton fallback for SkillsSection
 */
export function SkillsSectionSkeleton() {
  return (
    <section className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative">
        {/* Section Header Skeleton */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="h-6 w-32 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/10" />
          <div className="h-9 w-64 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse" />
          <div className="h-4 w-96 max-w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>

        {/* Liquid Tabs Filter Skeleton */}
        <div className="flex justify-center">
          <div className="h-11 w-80 max-w-full rounded-full glass-panel border border-white/30 dark:border-white/10 animate-pulse bg-white/30 dark:bg-white/5" />
        </div>

        {/* Grid of 8 Skill Card Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkillCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSectionSkeleton;
