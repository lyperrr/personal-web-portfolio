import React from "react";

/**
 * HeroSectionSkeleton - 1-to-1 exact layout skeleton match for HeroSection
 */
export function HeroSectionSkeleton() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-24 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] relative">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto w-full">
            {/* Apple Liquid Glass Badge Skeleton */}
            <div className="h-9 w-32 rounded-full bg-white/40 dark:bg-white/10 border border-white/30 dark:border-white/10 animate-pulse mb-6 -rotate-3" />

            {/* Glowing Name Title Skeleton */}
            <div className="h-14 sm:h-18 md:h-20 w-3/4 max-w-lg rounded-2xl bg-white/50 dark:bg-white/15 animate-pulse mb-6 -rotate-3" />

            {/* Role Subtitle Skeleton */}
            <div className="h-7 w-2/3 max-w-sm rounded-xl bg-white/40 dark:bg-white/10 animate-pulse mb-4" />

            {/* Bio Description Lines Skeleton */}
            <div className="sm:w-4/5 w-full space-y-2 mb-10">
              <div className="h-4 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
              <div className="h-4 w-11/12 mx-auto rounded bg-white/30 dark:bg-white/10 animate-pulse" />
            </div>

            {/* CTA Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 z-10 justify-center">
              <div className="h-13 w-44 rounded-full bg-white/50 dark:bg-white/18 border border-white/30 dark:border-white/15 animate-pulse" />
              <div className="h-13 w-44 rounded-full bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/15 animate-pulse" />
            </div>

            {/* Mouse Icon Skeleton */}
            <div className="mt-14 size-10 rounded-full bg-white/30 dark:bg-white/10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionSkeleton;
