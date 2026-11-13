"use client";

import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { BudgetCard } from "@/components/dashboard/BudgetCard";
import { RulesCard } from "@/components/dashboard/RulesCard";
import { KillSwitchCard } from "@/components/dashboard/KillSwitchCard";
import { AgentActivityFeed } from "@/components/dashboard/AgentActivityFeed";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ShieldCheck, Plus, ShoppingCart, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Spaza Control Plane"
        description="Autonomous inventory replenishment, RLUSD escrow locks, and real-time mandate guard rails for Soweto Super Spaza."
        badge="Gauteng Retail Mesh Node #0042"
        actions={
          <div className="flex items-center gap-3">
            <Link href="/demo">
              <GlassButton
                variant="secondary"
                size="sm"
                icon={<ShieldCheck size={15} className="text-orange-400" />}
              >
                Launch Attack Demo
              </GlassButton>
            </Link>
            <Link href="/orders">
              <GlassButton variant="primary" size="sm" icon={<ShoppingCart size={15} />}>
                View Active Orders
              </GlassButton>
            </Link>
          </div>
        }
      />

      {/* 4 Stats Cards */}
      <StatsGrid />

      {/* Middle Grid: Budget, Rules, Kill Switch */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BudgetCard />
        <RulesCard />
        <KillSwitchCard />
      </div>

      {/* Real-time Agent Swarm Telemetry */}
      <AgentActivityFeed />
    </div>
  );
}
