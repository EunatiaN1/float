import React from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "hover" | "orangeGlow" | "dangerGlow";
  children: React.ReactNode;
}

export function GlassCard({
  variant = "default",
  className,
  children,
  ...props
}: GlassCardProps) {
  const variantClass = {
    default: "glass-card",
    hover: "glass-card glass-card-hover",
    orangeGlow: "glass-card-orange-glow",
    dangerGlow: "glass-card-danger-glow",
  }[variant];

  return (
    <div className={cn(variantClass, "p-6", className)} {...props}>
      {children}
    </div>
  );
}
