import React from "react";
import { cn } from "@/lib/cn";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "xrpl";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function GlassButton({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  disabled,
  ...props
}: GlassButtonProps) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
    md: "px-4 py-2 text-sm rounded-xl gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-orange-glow border border-orange-400/30",
    secondary:
      "bg-surface hover:bg-surface-elevated text-zinc-200 border border-border hover:border-zinc-700",
    danger:
      "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 shadow-glass",
    ghost: "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border-transparent",
    xrpl: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 shadow-blue-glow font-medium",
  }[variant];

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
        sizeStyles,
        variantStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
