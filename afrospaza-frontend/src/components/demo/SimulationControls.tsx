"use client";

import React from "react";
import { GlassButton } from "@/components/ui/GlassButton";
import { AttackType } from "@/types/simulation";
import { ShieldAlert, Zap, AlertTriangle, Repeat, UserX } from "lucide-react";

interface SimulationControlsProps {
  onRunAttack: (type: AttackType) => void;
  onReset: () => void;
  isRunning: boolean;
}

export function SimulationControls({
  onRunAttack,
  onReset,
  isRunning,
}: SimulationControlsProps) {
  const attacks: { type: AttackType; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      type: "PROMPT_INJECTION",
      label: "Prompt Injection Attack",
      desc: "Simulate a hijacked prompt attempting to drain wallet via hidden instructions.",
      icon: <Zap size={15} className="text-amber-400" />,
    },
    {
      type: "OVERSPEND_EXPLOIT",
      label: "Mandate Budget Overspend",
      desc: "Inject an order exceeding both single tx limit and daily ZAR category caps.",
      icon: <AlertTriangle size={15} className="text-red-400" />,
    },
    {
      type: "UNVETTED_SELLER",
      label: "Unvetted Counterparty",
      desc: "Simulate a quote from a rogue address not on the township merchant whitelist.",
      icon: <UserX size={15} className="text-purple-400" />,
    },
    {
      type: "REPLAY_ESCROW",
      label: "XRPL Double-Claim Replay",
      desc: "Test consensus rejection when replay-attacking an already-settled escrow sequence.",
      icon: <Repeat size={15} className="text-blue-400" />,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">
            Trigger Adversarial Attack Vectors
          </h3>
          <p className="text-xs text-zinc-400">
            Select an exploit vector to test AfroSpaza&apos;s multi-layered defense architecture.
          </p>
        </div>
        <GlassButton
          variant="secondary"
          size="sm"
          onClick={onReset}
          disabled={isRunning}
        >
          Reset Matrix
        </GlassButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {attacks.map((att) => (
          <button
            key={att.type}
            disabled={isRunning}
            onClick={() => onRunAttack(att.type)}
            className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border hover:border-orange-500/40 text-left transition-all hover:bg-surface-elevated disabled:opacity-50 cursor-pointer flex items-start gap-3 group"
          >
            <div className="p-2 rounded-lg bg-surface border border-border group-hover:scale-105 transition-transform shrink-0 mt-0.5">
              {att.icon}
            </div>
            <div>
              <span className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors block">
                {att.label}
              </span>
              <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                {att.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
