"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMandate } from "@/hooks/useMandate";
import { formatZAR } from "@/lib/format";
import { ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export function RulesCard() {
  const { mandate } = useMandate();

  return (
    <GlassCard variant="hover" className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-orange-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Active Guard Rules ({mandate.rules.filter((r) => r.enabled).length})
          </h3>
        </div>
        <Link
          href="/settings"
          className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
        >
          <span>Edit Rules</span>
          <ChevronRight size={14} />
        </Link>
      </div>

      <div className="divide-y divide-border/60">
        {mandate.rules.slice(0, 3).map((rule) => (
          <div key={rule.id} className="py-2.5 flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="font-semibold text-zinc-200 block">{rule.category}</span>
              <span className="text-[11px] text-zinc-500">
                Max Single: {formatZAR(rule.maxSingleTxZAR)} • Cap: {formatZAR(rule.dailyCapZAR)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                Enforced
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
