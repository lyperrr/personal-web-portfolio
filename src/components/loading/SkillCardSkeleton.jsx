import React from "react";

/**
 * SkillCardSkeleton - Apple Liquid Glass Skeleton loader for individual Skill Cards
 */
export function SkillCardSkeleton() {
  return (
    <div className="relative rounded-3xl glass-card border border-white/30 dark:border-white/10 p-6 flex flex-col justify-between h-[280px] overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/5 shadow-md">
      {/* Specular Top Line Skeleton */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/40 dark:bg-white/20 animate-pulse" />

      <div>
        {/* Top Header: Logo slot & Level Badge Skeleton */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="size-14 rounded-2xl bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/10" />
          <div className="w-20 h-6 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/20 dark:border-white/10" />
        </div>

        {/* Skill Name Skeleton */}
        <div className="h-5 w-3/4 rounded-lg bg-white/50 dark:bg-white/15 animate-pulse mb-2" />

        {/* Category Tag Skeleton */}
        <div className="h-3 w-1/3 rounded bg-white/30 dark:bg-white/10 animate-pulse mb-4" />

        {/* Description Skeleton */}
        <div className="space-y-1.5 mb-4">
          <div className="h-3 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
          <div className="h-3 w-4/5 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>
      </div>

      {/* Meter Bar Section Skeleton */}
      <div className="pt-3.5 border-t border-white/15 dark:border-white/10">
        <div className="flex justify-between items-center mb-2">
          <div className="h-3 w-16 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
          <div className="h-3 w-8 rounded bg-white/40 dark:bg-white/15 animate-pulse" />
        </div>
        <div className="h-3 w-full rounded-full bg-black/10 dark:bg-white/5 border border-white/20 dark:border-white/10 animate-pulse p-0.5 overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-white/40 dark:bg-white/20" />
        </div>
      </div>
    </div>
  );
}

export default SkillCardSkeleton;
