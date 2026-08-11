import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-sm font-semibold transition-all duration-300 active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/40 rounded-full relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-white/85 dark:bg-white/18 text-foreground border border-white/70 dark:border-white/25 backdrop-blur-2xl shadow-md hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-white/10 hover:bg-white dark:hover:bg-white/28 font-bold cursor-pointer",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-sm hover:shadow-lg hover:shadow-destructive/30 cursor-pointer",
        outline:
          "border border-white/50 dark:border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur-xl text-foreground hover:bg-white/70 dark:hover:bg-white/20 shadow-sm hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-white/10 hover:border-primary/40 cursor-pointer",
        secondary:
          "bg-white/30 dark:bg-white/10 text-foreground border border-white/30 dark:border-white/15 backdrop-blur-md hover:bg-white/50 dark:hover:bg-white/20 shadow-xs hover:shadow-md cursor-pointer",
        ghost:
          "hover:bg-white/10 dark:hover:bg-white/10 hover:text-foreground backdrop-blur-xs cursor-pointer",
        glass:
          "bg-white/80 dark:bg-white/15 text-foreground border border-white/60 dark:border-white/25 backdrop-blur-2xl shadow-md hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-white/10 cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline cursor-pointer",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4 text-sm",
        sm: "h-8.5 gap-1.5 px-3.5 text-xs has-[>svg]:px-3",
        md: "h-10 px-5 py-2.5 text-sm font-semibold has-[>svg]:px-4",
        lg: "h-11.5 px-6.5 text-base font-semibold has-[>svg]:px-5",
        xl: "h-13 px-8 text-base font-bold has-[>svg]:px-6",
        "2xl": "h-14.5 px-10 text-lg font-bold has-[>svg]:px-7",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8.5 rounded-full",
        "icon-lg": "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

/* eslint-disable-next-line react-refresh/only-export-components */
export { Button, buttonVariants };
