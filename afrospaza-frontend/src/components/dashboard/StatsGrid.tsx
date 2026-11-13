"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useBudget } from "@/hooks/useBudget";
import { formatZAR, formatRLUSD } from "@/lib/format";
import { Coins, CheckCircle, Shield, ShoppingBag, ArrowUpRight } from "lucide-react";

export function StatsGrid() {
  const { availableBudgetZAR, rlusdBalance } = useBudget();

  const stats = [
    {
      title: "Today's Orders Settled",
      value: "14 Orders",
      subtext: "100% on-chain delivery verified",
      icon: <ShoppingBag size={18} className="text-orange-400" />,
    },
    {
      title: "XRPL Active Escrows",
      value: "3 Escrows",
      subtext: "Value: 480.00 RLUSD locked",
      icon: <Coins size={18} className="text-blue-400" />,
    },
    {
      title: "Adversarial Threats Intercepted",
      value: "8 Attacks",
      subtext: "0 mandate breaches (100% blocked)",
      icon: <Shield size={18} className="text-emerald-400" />,
    },
    {
      title: "Avg Fulfillment Speed",
      value: "42 mins",
      subtext: "Across Soweto distribution corridors",
      icon: <CheckCircle size={18} className="text-purple-400" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <GlassCard key={i} variant="hover" className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-zinc-400">{stat.title}</span>
            <div className="p-2 rounded-xl bg-surface-elevated border border-border">
              {stat.icon}
            </div>
          </div>
          <div>
            <span className="text-2xl font-black text-white">{stat.value}</span>
            <p className="text-[11px] text-zinc-500 mt-0.5">{stat.subtext}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
