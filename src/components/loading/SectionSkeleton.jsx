import React from "react";

/**
 * SectionSkeleton - Generic Apple Liquid Glass Skeleton loader fallback for lazy-loaded sections
 */
export function SectionSkeleton() {
  return (
    <section className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="h-6 w-32 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/10" />
          <div className="h-9 w-64 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse" />
          <div className="h-4 w-96 max-w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>

        {/* Content Box Skeleton */}
        <div className="rounded-3xl glass-card border border-white/30 dark:border-white/10 p-8 sm:p-12 min-h-[300px] flex flex-col justify-center items-center gap-4 bg-white/30 dark:bg-white/5 backdrop-blur-xl animate-pulse">
          <div className="h-8 w-48 rounded-xl bg-white/40 dark:bg-white/15" />
          <div className="h-4 w-3/4 max-w-md rounded bg-white/30 dark:bg-white/10" />
          <div className="h-4 w-1/2 max-w-xs rounded bg-white/30 dark:bg-white/10" />
        </div>
      </div>
    </section>
  );
}

export default SectionSkeleton;
