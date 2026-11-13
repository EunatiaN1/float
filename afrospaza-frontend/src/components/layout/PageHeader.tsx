import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  actions?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  badge,
  actions,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 rounded-2xl border border-white/5 bg-white/[0.015] px-4 py-4 md:px-5 md:py-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
      <div>
        {badge && (
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300 bg-orange-500/10 border border-orange-400/20 px-2.5 py-1 rounded-full mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-[-0.05em]">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
    </div>
  );
}
