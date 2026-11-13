"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useBudget } from "@/hooks/useBudget";
import { formatZAR, formatRLUSD } from "@/lib/format";
import { ShieldCheck, TrendingUp, AlertTriangle } from "lucide-react";

export function BudgetCard() {
  const {
    totalBudgetZAR,
    spentTodayZAR,
    availableBudgetZAR,
    rlusdBalance,
    bufferHealth,
    minSafetyReserveZAR,
  } = useBudget();

  const percentUsed = Math.min(100, Math.round((spentTodayZAR / totalBudgetZAR) * 100));

  const healthBadge = {
    EXCELLENT: { text: "Optimal Buffer", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    STABLE: { text: "Stable Reserve", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    WARNING: { text: "Safety Threshold", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    CRITICAL: { text: "Depleted Cap", color: "text-red-400 bg-red-500/10 border-red-500/20" },
  }[bufferHealth];

  return (
    <GlassCard variant="hover" className="space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Autonomous Daily Mandate
        </span>
        <span
          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${healthBadge.color}`}
        >
          {healthBadge.text}
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline justify-between">
          <span className="text-3xl font-extrabold text-white tracking-tight">
            {formatZAR(availableBudgetZAR)}
          </span>
          <span className="text-xs text-zinc-500">
            Remaining of {formatZAR(totalBudgetZAR)}
          </span>
        </div>
        <p className="text-xs text-zinc-400">
          Backstopped by <strong className="text-orange-400">{formatRLUSD(rlusdBalance)}</strong> in XRPL treasury
        </p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-zinc-800/80 rounded-full h-2.5 overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              percentUsed > 85 ? "bg-red-500" : percentUsed > 60 ? "bg-amber-500" : "bg-orange-500"
            }`}
            style={{ width: `${percentUsed}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-zinc-500">
          <span>Spent today: {formatZAR(spentTodayZAR)} ({percentUsed}%)</span>
          <span>Safety Floor: {formatZAR(minSafetyReserveZAR)}</span>
        </div>
      </div>
    </GlassCard>
  );
}
