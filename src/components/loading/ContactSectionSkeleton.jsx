import React from "react";

/**
 * ContactSectionSkeleton - 1-to-1 exact layout skeleton match for ContactSection
 */
export function ContactSectionSkeleton() {
  return (
    <section id="contact" className="py-20 border-t border-border/30 relative overflow-hidden">
      <div className="container space-y-12 relative z-10">
        {/* Section Header Skeleton */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="h-6 w-36 rounded-full bg-white/40 dark:bg-white/10 animate-pulse border border-white/30 dark:border-white/10" />
          <div className="h-9 w-64 rounded-xl bg-white/50 dark:bg-white/15 animate-pulse" />
          <div className="h-4 w-96 max-w-full rounded bg-white/30 dark:bg-white/10 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Info Cards Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl glass-panel shadow-xl border border-white/40 dark:border-white/15 p-6 sm:p-8 space-y-5 bg-white/30 dark:bg-white/5 animate-pulse">
              {/* Info Row 1: Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 size-12 bg-white/30 dark:bg-white/10 rounded-2xl border border-white/20" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 w-12 rounded bg-white/30 dark:bg-white/10" />
                  <div className="h-5 w-3/4 rounded bg-white/40 dark:bg-white/15" />
                </div>
              </div>

              {/* Info Row 2: Location */}
              <div className="flex items-start gap-4 pt-5 border-t border-white/15 dark:border-white/10">
                <div className="p-3 size-12 bg-white/30 dark:bg-white/10 rounded-2xl border border-white/20" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 w-16 rounded bg-white/30 dark:bg-white/10" />
                  <div className="h-5 w-2/3 rounded bg-white/40 dark:bg-white/15" />
                </div>
              </div>

              {/* Info Row 3: Availability */}
              <div className="flex items-start gap-4 pt-5 border-t border-white/15 dark:border-white/10">
                <div className="p-3 size-12 bg-white/30 dark:bg-white/10 rounded-2xl border border-white/20" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 w-20 rounded bg-white/30 dark:bg-white/10 mb-1" />
                  <div className="h-6 w-28 rounded-full bg-white/40 dark:bg-white/15" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Skeleton */}
          <div className="lg:col-span-3 rounded-3xl glass-panel shadow-xl border border-white/40 dark:border-white/15 p-6 sm:p-8 space-y-5 bg-white/30 dark:bg-white/5 animate-pulse">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <div className="h-3 w-14 rounded bg-white/30 dark:bg-white/10" />
                <div className="h-10 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20" />
              </div>
              <div className="space-y-1.5">
                <div className="h-3 w-14 rounded bg-white/30 dark:bg-white/10" />
                <div className="h-10 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="h-3 w-16 rounded bg-white/30 dark:bg-white/10" />
              <div className="h-10 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20" />
            </div>

            <div className="space-y-1.5">
              <div className="h-3 w-16 rounded bg-white/30 dark:bg-white/10" />
              <div className="h-28 rounded-2xl bg-white/40 dark:bg-white/10 border border-white/20" />
            </div>

            <div className="h-13 w-full rounded-full bg-white/50 dark:bg-white/20 border border-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionSkeleton;
