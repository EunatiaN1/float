import React, { useState } from "react";
import { cn } from "@/lib/cn";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-medium text-white bg-zinc-900 border border-zinc-700/80 rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
