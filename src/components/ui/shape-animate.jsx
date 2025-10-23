import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // fungsi helper Tailwind

const shapeVariants = cva("origin-center bg-primary absolute", {
  variants: {
    bgColor: {
      primary: "bg-primary/60",
      secondary: "bg-secondary/60",
      accent: "bg-accent/60",
      destructive: "bg-destructive/60",
      muted: "bg-muted/60",
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-none",
    },
    size: {
      10: "size-10",
      11: "size-11",
      12: "size-12",
      13: "size-13",
      14: "size-14",
      15: "size-15",
      16: "size-16",
      17: "size-17",
      18: "size-18",
      19: "size-19",
      20: "size-20",
    },
    animation: {
      bounce: "animate-bounce",
      spin: "animate-spin",
      ping: "animate-ping",
      pulse: "animate-pulse",
      none: "",
    },
  },
  defaultVariants: {
    shape: "square",
    size: 6,
    animation: 1,
  },
});

export function ShapeAnimate({ bgColor, shape, size, animation, className }) {
  return (
    <div className={cn(shapeVariants({ bgColor,shape, size, animation }), className)} />
  );
}
