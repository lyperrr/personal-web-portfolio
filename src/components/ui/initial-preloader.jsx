import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";

export function InitialPreloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { setPreloaderFinished } = usePreloader();

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    let isMounted = true;

    // Realistic multi-stage progress steps: [targetProgress, durationToTarget, pauseDurationAfter]
    const steps = [
      [28, 300, 150],  // Step 1: 0% -> 28% in 300ms, pause 150ms
      [64, 380, 180],  // Step 2: 28% -> 64% in 380ms, pause 180ms
      [89, 320, 150],  // Step 3: 64% -> 89% in 320ms, pause 150ms
      [100, 250, 300], // Step 4: 89% -> 100% in 250ms, hold 300ms
    ];

    let currentStepIndex = 0;
    let currentVal = 0;

    const runStep = () => {
      if (!isMounted || currentStepIndex >= steps.length) {
        if (isMounted) {
          setIsLoading(false);
          document.body.style.overflow = "";
        }
        return;
      }

      const [targetVal, stepDuration, pauseDuration] = steps[currentStepIndex];
      const startVal = currentVal;
      const startTime = performance.now();

      const animateSubStep = (now) => {
        if (!isMounted) return;
        const elapsed = now - startTime;
        const ratio = Math.min(1, elapsed / stepDuration);
        const nextVal = Math.floor(startVal + (targetVal - startVal) * ratio);

        currentVal = nextVal;
        setProgress(nextVal);

        if (ratio < 1) {
          requestAnimationFrame(animateSubStep);
        } else {
          // Finished sub-step, pause before next step
          setTimeout(() => {
            currentStepIndex++;
            runStep();
          }, pauseDuration);
        }
      };

      requestAnimationFrame(animateSubStep);
    };

    runStep();

    return () => {
      isMounted = false;
      document.body.style.overflow = "";
    };
  }, []);

  const handleExitComplete = () => {
    setPreloaderFinished();
    if (onFinish) onFinish();
  };

  // Format number as 2 digits or 3 digits: "00", "05", "42", "100"
  const formattedProgress = progress < 10 ? `0${progress}` : `${progress}`;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isLoading && (
        <motion.div
          key="awwwards-preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.87, 0, 0.13, 1] },
          }}
          className="fixed inset-0 z-[999999] flex flex-col justify-between p-6 sm:p-12 bg-background text-foreground select-none"
        >
          {/* Top Header Row */}
          <div className="flex items-center justify-between z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <img
                src="/dark_logo.svg"
                alt="Willy Permana Logo"
                className="h-7 dark:hidden"
              />
              <img
                src="/light_logo.svg"
                alt="Willy Permana Logo"
                className="h-7 hidden dark:block"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground hidden sm:block"
            >
              CREATIVE DEVELOPER PORTFOLIO
            </motion.span>
          </div>

          {/* Center / Giant Minimal Awwwards Counter */}
          <div className="my-auto flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-baseline"
            >
              <span className="text-8xl sm:text-[14rem] md:text-[17rem] font-black tracking-tighter font-mono leading-none select-none text-foreground drop-shadow-sm">
                {formattedProgress}
              </span>
              <span className="text-2xl sm:text-5xl font-extrabold text-primary font-mono ml-2">
                %
              </span>
            </motion.div>
          </div>

          {/* Bottom Footer Row & Ultra-thin Progress Line */}
          <div className="space-y-4 z-10">
            {/* Minimal Progress Line Indicator */}
            <div className="w-full h-[2px] bg-foreground/10 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-primary transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
              <span>LOADING EXPERIENCE</span>
              <span className="font-mono">{formattedProgress} / 100</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InitialPreloader;
