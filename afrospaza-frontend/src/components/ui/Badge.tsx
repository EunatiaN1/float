import React from "react";
import { cn } from "@/lib/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "orange" | "green" | "blue" | "red" | "yellow" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    orange: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    red: "bg-red-500/15 text-red-400 border-red-500/30",
    yellow: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    neutral: "bg-zinc-800/60 text-zinc-300 border-zinc-700/50",
  }[variant];

  const dotColors = {
    orange: "bg-orange-400",
    green: "bg-emerald-400",
    blue: "bg-blue-400",
    red: "bg-red-400",
    yellow: "bg-amber-400",
    neutral: "bg-zinc-400",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium border rounded-full",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        variantStyles,
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dotColors)} />}
      {children}
    </span>
  );
}
