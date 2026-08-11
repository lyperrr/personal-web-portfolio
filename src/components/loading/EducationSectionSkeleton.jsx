import React from "react";

/**
 * EducationSectionSkeleton - 1-to-1 exact layout skeleton match for EducationTimeline
 */
export function EducationSectionSkeleton() {
  return (
    <section id="education" className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative">
        {/* Section Header Skeleton */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="h-6 w-36 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/10" />
          <div className="h-9 w-64 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse" />
          <div className="h-4 w-96 max-w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>

        {/* Ordering Toggle Pill Skeleton */}
        <div className="flex justify-end max-w-5xl mx-auto">
          <div className="h-8.5 w-44 rounded-full bg-white/40 dark:bg-white/10 border border-white/30 dark:border-white/10 animate-pulse" />
        </div>

        {/* Timeline Layout Skeleton */}
        <div className="max-w-5xl mx-auto relative px-2 sm:px-4 pt-4">
          {/* Desktop Central Connecting Line Skeleton */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-border/10 rounded-full z-0 animate-pulse" />

          {/* Mobile Left Connecting Line Skeleton */}
          <div className="md:hidden absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-border/10 rounded-full z-0 animate-pulse" />

          {/* Timeline Items List Skeleton */}
          <ol className="relative z-10 space-y-12 md:space-y-16">
            {[0, 1, 2].map((index) => {
              const isEven = index % 2 === 0;

              return (
                <li key={index} className="relative flex flex-col md:flex-row items-center">
                  {/* Mobile Stepper Node Skeleton */}
                  <div className="md:hidden absolute left-0 top-6 size-12 rounded-full glass-panel flex items-center justify-center border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/10 animate-pulse z-20" />

                  {/* Desktop Center Stepper Node Skeleton */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 size-14 rounded-full glass-panel items-center justify-center border border-white/40 dark:border-white/20 bg-white/30 dark:bg-white/10 animate-pulse z-20" />

                  {/* Card Column Wrapper Skeleton */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-12" : "md:order-2 md:pl-12"}`}>
                    <div className="rounded-3xl glass-card border border-white/40 dark:border-white/15 p-6 sm:p-8 space-y-4 bg-white/30 dark:bg-white/5 backdrop-blur-xl animate-pulse shadow-xl">
                      {/* Meta Badge Row Skeleton */}
                      <div className={`flex flex-wrap items-center gap-2 border-b border-white/15 dark:border-white/10 pb-4 ${isEven ? "md:justify-end" : "justify-start"}`}>
                        <div className="h-6 w-24 rounded-full bg-white/40 dark:bg-white/10" />
                        <div className="h-6 w-20 rounded-full bg-white/40 dark:bg-white/10" />
                        <div className="h-6 w-28 rounded-full bg-white/30 dark:bg-white/10" />
                      </div>

                      {/* Institution Name & Degree Skeleton */}
                      <div className="space-y-2">
                        <div className={`h-7 w-3/4 rounded-xl bg-white/50 dark:bg-white/15 ${isEven ? "md:ml-auto" : ""}`} />
                        <div className={`h-4 w-1/2 rounded bg-white/30 dark:bg-white/10 ${isEven ? "md:ml-auto" : ""}`} />
                      </div>

                      {/* Description Skeleton */}
                      <div className="space-y-1.5 pt-1">
                        <div className="h-3.5 w-full rounded bg-white/30 dark:bg-white/10" />
                        <div className="h-3.5 w-5/6 rounded bg-white/30 dark:bg-white/10" />
                      </div>
                    </div>
                  </div>

                  {/* Empty Column for Desktop Alternating Balance */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default EducationSectionSkeleton;
