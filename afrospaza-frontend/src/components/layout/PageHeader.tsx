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
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        {badge && (
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full mb-2">
            {badge}
          </span>
        )}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
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
