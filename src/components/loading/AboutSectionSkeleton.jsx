import React from "react";

/**
 * AboutSectionSkeleton - 1-to-1 exact layout skeleton match for AboutSection / AboutInfo
 */
export function AboutSectionSkeleton() {
  return (
    <section id="about" className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-12 sm:gap-16">
          {/* Photo Profile Frame Skeleton matching Profile Image dimensions */}
          <div className="flex-shrink-0 mx-auto lg:m-0">
            <div className="relative border border-white/40 dark:border-white/20 inline-block rounded-3xl glass-panel p-2 shadow-2xl">
              <div className="size-80 sm:size-96 rounded-2xl bg-white/30 dark:bg-white/10 animate-pulse overflow-hidden" />

              {/* Top-Right Decorative Glass Box Skeleton */}
              <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 z-20 pointer-events-none">
                <div className="size-14 sm:size-16 rounded-2xl glass-panel border border-white/60 dark:border-white/25 shadow-xl relative backdrop-blur-2xl animate-pulse" />
              </div>

              {/* Bottom-Left Decorative Glass Box Skeleton */}
              <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 z-20 pointer-events-none">
                <div className="size-12 sm:size-14 rounded-2xl glass-panel border border-white/60 dark:border-white/25 shadow-xl relative backdrop-blur-2xl animate-pulse" />
              </div>
            </div>
          </div>

          {/* About Me Description Skeleton */}
          <div className="lg:w-1/2 space-y-4 w-full">
            <div className="w-full">
              {/* Badge Skeleton */}
              <div className="h-7 w-28 rounded-full bg-white/40 dark:bg-white/10 border border-white/30 dark:border-white/10 animate-pulse mb-4" />

              {/* Title Skeleton */}
              <div className="h-9 w-3/4 sm:w-2/3 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse mb-6" />

              {/* Text Paragraph 1 Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
                <div className="h-4 w-11/12 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
                <div className="h-4 w-4/5 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
              </div>

              {/* Text Paragraph 2 Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
                <div className="h-4 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
                <div className="h-4 w-3/4 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
              </div>

              {/* Text Paragraph 3 Skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-white/30 dark:bg-white/10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionSkeleton;
