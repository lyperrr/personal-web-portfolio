import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function Breadcrumb({ className, ...props }) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn("w-fit py-2.5 px-4 rounded-full glass-panel glass-specular-corner-subtle backdrop-blur-xl bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/15 shadow-sm inline-flex items-center text-xs sm:text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn("flex flex-wrap items-center gap-1.5 sm:gap-2 break-words text-muted-foreground", className)}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ className, children, ...props }) {
  return (
    <span
      data-slot="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground font-medium flex items-center gap-1.5 cursor-pointer text-muted-foreground hover:underline", className)}
      {...props}
    >
      {children}
    </span>
  );
}

function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-bold text-foreground truncate max-w-[200px] sm:max-w-[320px]", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      data-slot="breadcrumb-separator"
      className={cn("[&>svg]:size-3.5 text-muted-foreground/60 select-none", className)}
      {...props}
    >
      {children ?? <ChevronRight className="size-3.5" />}
    </li>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
