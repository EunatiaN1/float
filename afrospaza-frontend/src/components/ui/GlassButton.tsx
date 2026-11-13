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
      "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-[0_10px_30px_rgba(249,115,22,0.28)] border border-orange-300/20",
    secondary:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-orange-400/30 shadow-[0_10px_20px_rgba(0,0,0,0.2)]",
    danger:
      "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 shadow-glass",
    ghost: "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border-transparent",
    xrpl: "bg-orange-500/10 hover:bg-orange-500/15 text-orange-300 border border-orange-400/30 font-medium",
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
