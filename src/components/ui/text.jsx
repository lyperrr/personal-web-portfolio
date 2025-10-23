// components/ui/text.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Variants umum untuk teks dan judul
const textVariants = cva(
  "leading-5 text-foreground transition-colors [&:not(:first-child)]:mt-2",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
      },
      weight: {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
      variant: {
        primary: "bg-primary text-primary-foreground px-6 py-3",
        default: "text-foreground",
        muted: "text-muted-foreground",
        dark: "bg-black text-white px-2 py-1",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "normal",
      variant: "primary",
    },
  }
);

// Komponen Text
function Text({ className, size, weight, variant, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ size, weight, variant, className }))}
      {...props}
    />
  );
}

// Komponen Title (untuk heading)
function Title({
  className,
  level = 2,
  size,
  weight = "bold",
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : `h${level}`;

  return (
    <Comp
      data-slot="title"
      className={cn(
        textVariants({
          size: size ?? (level === 1 ? "4xl" : level === 2 ? "3xl" : "2xl"),
          weight,
          variant,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Text, Title, textVariants };
