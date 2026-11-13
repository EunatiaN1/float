"use client";

import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SimulationControls } from "@/components/demo/SimulationControls";
import { AttackVisualizer } from "@/components/demo/AttackVisualizer";
import { TerminalLog } from "@/components/demo/TerminalLog";
import { useSimulation } from "@/hooks/useSimulation";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldCheck, AlertOctagon, CheckCircle2 } from "lucide-react";

export default function AdversarialDemoPage() {
  const { layers, isRunning, results, activeLogs, runSimulation, resetLayers } =
    useSimulation();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Adversarial Attack Simulation"
        description="Verify how AfroSpaza's 4-layer defense matrix detects and neutralizes prompt injection, unvetted counterfeiters, and budget overspend exploits before any RLUSD is moved."
        badge="Zero-Trust Test Suite"
      />

      {/* Control Area */}
      <GlassCard className="space-y-6">
        <SimulationControls
          onRunAttack={runSimulation}
          onReset={resetLayers}
          isRunning={isRunning}
        />
      </GlassCard>

      {/* Middle Grid: Layers + Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="space-y-4">
          <AttackVisualizer layers={layers} />
        </GlassCard>

        <TerminalLog logs={activeLogs} />
      </div>

      {/* Interception History */}
      {results.length > 0 && (
        <GlassCard className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Intercepted Attacks ({results.length})
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface-elevated/80 text-zinc-400 font-semibold border-b border-border">
                <tr>
                  <th className="py-2.5 px-3">Timestamp</th>
                  <th className="py-2.5 px-3">Attack Vector</th>
                  <th className="py-2.5 px-3">Intercepting Layer</th>
                  <th className="py-2.5 px-3">Reason</th>
                  <th className="py-2.5 px-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {results.map((res) => (
                  <tr key={res.id} className="text-zinc-200">
                    <td className="py-2.5 px-3 font-mono text-zinc-500">{res.timestamp}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{res.attackType}</td>
                    <td className="py-2.5 px-3 text-orange-400 font-medium">{res.interceptingLayer}</td>
                    <td className="py-2.5 px-3 text-zinc-400 max-w-xs truncate">{res.reason}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                        {res.actionTaken}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      )}
    </div>
  );
}
