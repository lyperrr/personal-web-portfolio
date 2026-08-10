import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <div className="relative w-full rounded-2xl glass-specular-corner-subtle">
      <textarea
        data-slot="textarea"
        className={cn(
          "flex min-h-[110px] w-full rounded-2xl glass-input px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none relative z-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };
