import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
  return (
    <div className="relative w-full rounded-2xl glass-specular-corner-subtle">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-11.5 w-full rounded-2xl glass-input px-4 py-2.5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 relative z-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
