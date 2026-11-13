import React from "react";
import { cn } from "@/lib/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular";
}

export function Skeleton({
  variant = "rectangular",
  className,
  ...props
}: SkeletonProps) {
  const variantStyles = {
    text: "h-4 w-full rounded",
    rectangular: "h-12 w-full rounded-xl",
    circular: "h-10 w-10 rounded-full",
  }[variant];

  return (
    <div
      className={cn(
        "animate-pulse bg-zinc-800/60 border border-zinc-700/20",
        variantStyles,
        className
      )}
      {...props}
    />
  );
}
