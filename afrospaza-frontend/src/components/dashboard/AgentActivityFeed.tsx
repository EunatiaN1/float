"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useAgentFeed } from "@/hooks/useAgentFeed";
import { Cpu, Shield, DollarSign, Truck, AlertOctagon, Terminal } from "lucide-react";

export function AgentActivityFeed() {
  const { agents, logs } = useAgentFeed();

  const agentIcons = {
    PROCUREMENT: <Cpu size={14} className="text-orange-400" />,
    GUARD: <Shield size={14} className="text-emerald-400" />,
    TREASURY: <DollarSign size={14} className="text-blue-400" />,
    LOGISTICS: <Truck size={14} className="text-purple-400" />,
  };

  return (
    <GlassCard variant="hover" className="space-y-5">
      {/* Agents Status Chips */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Terminal size={17} className="text-orange-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Autonomous Agent Swarm
            </h3>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono">Consensus: 4/4 Ready</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {agents.map((agent) => (
            <div
              key={agent.type}
              className="p-2.5 rounded-xl bg-surface-elevated/70 border border-border flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="p-1 rounded-lg bg-surface">{agentIcons[agent.type]}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white truncate">{agent.name}</p>
                <p className="text-[10px] text-zinc-400 truncate mt-0.5">{agent.currentTask}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Agent Log Stream */}
      <div className="space-y-2 pt-2 border-t border-border/70">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
          Live Agent Telemetry Stream
        </span>

        <div className="space-y-2 max-h-64 overflow-y-auto pr-1 font-mono text-[11px]">
          {logs.map((log) => {
            const levelStyles = {
              INFO: "text-zinc-400 border-zinc-800",
              SUCCESS: "text-emerald-300 border-emerald-500/20 bg-emerald-500/5",
              WARN: "text-amber-300 border-amber-500/20 bg-amber-500/5",
              ERROR: "text-red-400 border-red-500/20 bg-red-500/5",
              SECURITY: "text-red-300 border-red-500/40 bg-red-500/10 font-bold",
            }[log.level];

            return (
              <div
                key={log.id}
                className={`p-2 rounded-lg border ${levelStyles} flex items-start gap-2.5 leading-relaxed`}
              >
                <span className="text-zinc-500 text-[10px] shrink-0">{log.timestamp}</span>
                <span className="px-1.5 py-0.2 rounded bg-black/40 text-[9px] font-bold text-zinc-300 shrink-0">
                  {log.agentType}
                </span>
                <span className="flex-1">{log.message}</span>
              </div>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}
