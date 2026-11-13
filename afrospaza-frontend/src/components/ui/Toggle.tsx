import React from "react";
import { cn } from "@/lib/cn";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: ToggleProps) {
  return (
    <label className={cn("inline-flex items-center gap-3 cursor-pointer", disabled && "opacity-50 cursor-not-allowed")}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500/50",
          checked ? "bg-orange-500" : "bg-zinc-800"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
      {(label || description) && (
        <div className="flex flex-col">
          {label && <span className="text-sm font-semibold text-zinc-200">{label}</span>}
          {description && <span className="text-xs text-zinc-500">{description}</span>}
        </div>
      )}
    </label>
  );
}
