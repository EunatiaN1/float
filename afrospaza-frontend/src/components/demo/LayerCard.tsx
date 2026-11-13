import React from "react";
import { DefenseLayer } from "@/types/simulation";
import { ShieldCheck, ShieldAlert, Loader2, CheckCircle2 } from "lucide-react";

interface LayerCardProps {
  layer: DefenseLayer;
  index: number;
}

export function LayerCard({ layer, index }: LayerCardProps) {
  const statusConfig = {
    ACTIVE: {
      badge: "ARMED",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: <CheckCircle2 size={16} className="text-emerald-400" />,
      border: "border-border",
    },
    INSPECTING: {
      badge: "EVALUATING",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      icon: <Loader2 size={16} className="text-blue-400 animate-spin" />,
      border: "border-blue-500/40 bg-blue-500/5",
    },
    INTERCEPTED: {
      badge: "ATTACK BLOCKED",
      color: "text-red-400 bg-red-500/20 border-red-500/50",
      icon: <ShieldAlert size={16} className="text-red-400" />,
      border: "border-red-500/60 bg-red-500/10 shadow-lg shadow-red-500/10",
    },
    PASSED: {
      badge: "PASSED",
      color: "text-zinc-400 bg-zinc-800 border-zinc-700",
      icon: <CheckCircle2 size={16} className="text-zinc-400" />,
      border: "border-border",
    },
  }[layer.status];

  return (
    <div
      className={`p-4 rounded-xl border ${statusConfig.border} bg-surface transition-all duration-300 space-y-2`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 font-mono text-[10px] font-bold flex items-center justify-center">
            {index + 1}
          </span>
          <span className="text-xs font-bold text-white">{layer.name}</span>
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1.5 ${statusConfig.color}`}
        >
          {statusConfig.icon}
          <span>{statusConfig.badge}</span>
        </span>
      </div>

      <p className="text-[11px] text-zinc-400 leading-relaxed pl-7">
        {layer.description}
      </p>

      {layer.details && (
        <div className="mt-2 pl-7">
          <span className="text-[10px] font-mono text-red-300 bg-red-950/40 border border-red-800/50 px-2 py-1 rounded inline-block">
            Interceptor Output: {layer.details}
          </span>
        </div>
      )}
    </div>
  );
}
