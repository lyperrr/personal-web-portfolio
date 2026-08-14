import React from "react";
import { motion } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";

/**
 * FadeIn component for entrance animations when elements enter viewport.
 */
export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  amount = 0.2,
  ...props
}) {
  const { isPreloaderFinished } = usePreloader();

  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={isPreloaderFinished ? "visible" : "hidden"}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container wrapper for staggered child animations
 */
export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  className = "",
  amount = 0.1,
  ...props
}) {
  const { isPreloaderFinished } = usePreloader();

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={isPreloaderFinished ? "visible" : "hidden"}
      viewport={{ once, amount }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item wrapper inside StaggerContainer
 */
export function StaggerItem({
  children,
  direction = "up",
  duration = 0.4,
  className = "",
  ...props
}) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -25 },
          visible: { opacity: 1, x: 0, transition: { duration, ease: "easeOut" } },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 25 },
          visible: { opacity: 1, x: 0, transition: { duration, ease: "easeOut" } },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1, transition: { duration, ease: "easeOut" } },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
        };
    }
  };

  return (
    <motion.div variants={getVariants()} className={className} {...props}>
      {children}
    </motion.div>
  );
}
