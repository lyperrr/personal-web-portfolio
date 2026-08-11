import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold w-fit max-w-full text-wrap shrink-0 [&>svg]:size-3.5 gap-1.5 [&>svg]:pointer-events-none focus-visible:ring-2 focus-visible:ring-ring/40 transition-all duration-300 rounded-full glass-specular-corner-subtle relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border border-white/40 dark:border-white/20 bg-white/80 dark:bg-white/15 text-foreground backdrop-blur-xl shadow-xs font-bold",
        secondary:
          "border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/10 text-secondary-foreground backdrop-blur-md",
        destructive:
          "border border-transparent bg-destructive text-white shadow-xs [a&]:hover:bg-destructive/90",
        outline:
          "border border-white/40 dark:border-white/20 text-foreground bg-white/40 dark:bg-white/10 backdrop-blur-md shadow-xs font-semibold",
        outlineBottom:
          "border border-white/40 dark:border-white/20 bg-white/40 dark:bg-white/10 text-foreground rounded-full px-4 py-1.5 backdrop-blur-md shadow-xs font-semibold",
        ghost:
          "border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/10 text-foreground backdrop-blur-md backdrop-saturate-150 shadow-xs",
        glass:
          "border border-white/40 dark:border-white/15 bg-white/50 dark:bg-white/15 text-foreground backdrop-blur-xl backdrop-saturate-150 shadow-xs font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export { Badge, badgeVariants };
