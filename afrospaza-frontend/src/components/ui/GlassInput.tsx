import React from "react";
import { cn } from "@/lib/cn";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  prefixIcon?: React.ReactNode;
}

export function GlassInput({
  label,
  error,
  helperText,
  prefixIcon,
  className,
  ...props
}: GlassInputProps) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {prefixIcon && (
          <span className="absolute left-3.5 text-zinc-500 pointer-events-none">
            {prefixIcon}
          </span>
        )}
        <input
          className={cn(
            "w-full bg-surface/90 border border-border rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/50 transition-all",
            prefixIcon && "pl-10",
            error && "border-red-500/60 focus:border-red-500 focus:ring-red-500/40",
            className
          )}
          {...props}
        />
      </div>
      {error ? (
        <p className="text-xs text-red-400 font-medium">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-zinc-500">{helperText}</p>
      ) : null}
    </div>
  );
}
