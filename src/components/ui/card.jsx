import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, children, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group rounded-3xl glass-card glass-specular-corner text-card-foreground transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Top Glossy Specular Highlight */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/60 dark:via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
      
      {/* Bottom Glossy Specular Highlight */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-l from-transparent via-white/60 dark:via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />

      {children}
    </div>
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6 sm:p-8", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-bold leading-tight tracking-tight text-xl sm:text-2xl", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 sm:p-8 pt-0", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 sm:p-8 pt-0", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
