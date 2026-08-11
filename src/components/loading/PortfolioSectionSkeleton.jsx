import React from "react";
import PortfolioCardSkeleton from "./PortfolioCardSkeleton";

/**
 * PortfolioSectionSkeleton - Apple Liquid Glass Skeleton loader for Portfolio Section
 */
export function PortfolioSectionSkeleton() {
  return (
    <section className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="h-6 w-32 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/10" />
          <div className="h-9 w-64 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse" />
          <div className="h-4 w-96 max-w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>

        {/* Filter Tabs Skeleton */}
        <div className="flex justify-center">
          <div className="h-11 w-72 max-w-full rounded-full glass-panel border border-white/30 dark:border-white/10 animate-pulse bg-white/30 dark:bg-white/5" />
        </div>

        {/* Grid of Portfolio Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <PortfolioCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSectionSkeleton;
