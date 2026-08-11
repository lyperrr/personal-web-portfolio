import React from "react";

/**
 * PortfolioCardSkeleton - 1-to-1 exact layout skeleton match for Portfolio Project Cards
 */
export function PortfolioCardSkeleton() {
  return (
    <div className="group rounded-3xl glass-card border border-white/40 dark:border-white/15 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px] overflow-hidden backdrop-blur-xl bg-white/30 dark:bg-white/5 shadow-lg relative">
      <div>
        {/* Category Badge Row Skeleton */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-md bg-white/40 dark:bg-white/15 animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/20 dark:border-white/10" />
          </div>
        </div>

        {/* Project Title Skeleton */}
        <div className="h-7 w-4/5 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse mb-3" />

        {/* Description Skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-3.5 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
          <div className="h-3.5 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
          <div className="h-3.5 w-3/4 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>

        {/* Tech Stack Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-6 w-16 rounded-full bg-white/30 dark:bg-white/10 animate-pulse border border-white/20" />
          <div className="h-6 w-20 rounded-full bg-white/30 dark:bg-white/10 animate-pulse border border-white/20" />
          <div className="h-6 w-14 rounded-full bg-white/30 dark:bg-white/10 animate-pulse border border-white/20" />
        </div>
      </div>

      {/* Action Buttons Skeleton */}
      <div className="flex items-center gap-3 pt-5 border-t border-white/15 dark:border-white/10">
        <div className="flex-1 h-9 rounded-full bg-white/50 dark:bg-white/18 animate-pulse" />
        <div className="size-9 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/15" />
      </div>
    </div>
  );
}

export default PortfolioCardSkeleton;
