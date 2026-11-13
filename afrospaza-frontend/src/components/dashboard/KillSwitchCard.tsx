"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { useMandate } from "@/hooks/useMandate";
import { GlassButton } from "@/components/ui/GlassButton";
import { Modal } from "@/components/ui/Modal";
import { Power, ShieldAlert, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/useToast";

export function KillSwitchCard() {
  const { mandate, toggleKillSwitch } = useMandate();
  const { toast } = useToast();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleToggle = () => {
    toggleKillSwitch(mandate.killSwitchActive ? "Manual operator resume" : "Manual emergency freeze");
    if (!mandate.killSwitchActive) {
      toast.error("Kill Switch Activated", "All agent settlements and orders halted.");
    } else {
      toast.success("Kill Switch Disengaged", "Autonomous agent operations resumed.");
    }
    setConfirmModalOpen(false);
  };

  return (
    <>
      <GlassCard
        variant={mandate.killSwitchActive ? "dangerGlow" : "hover"}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Power
              size={18}
              className={mandate.killSwitchActive ? "text-red-400 animate-pulse" : "text-zinc-400"}
            />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Emergency Kill Switch
            </h3>
          </div>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded ${
              mandate.killSwitchActive
                ? "bg-red-500/20 text-red-400 border border-red-500/40"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }`}
          >
            {mandate.killSwitchActive ? "ACTIVE FREEZE" : "SYSTEM ARMED"}
          </span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          Instantly freezes all autonomous procurement, cancels pending quote negotiations, and blocks XRPL escrow locks.
        </p>

        <div>
          <GlassButton
            variant={mandate.killSwitchActive ? "primary" : "danger"}
            size="md"
            className="w-full"
            icon={<Power size={15} />}
            onClick={() => setConfirmModalOpen(true)}
          >
            {mandate.killSwitchActive ? "Resume Autonomous Operations" : "Trigger Emergency Freeze"}
          </GlassButton>
        </div>
      </GlassCard>

      <Modal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        title={mandate.killSwitchActive ? "Resume Operations?" : "Confirm Emergency Kill Switch?"}
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-200">
            <AlertTriangle size={18} className="text-red-400 shrink-0 mt-0.5" />
            <p>
              {mandate.killSwitchActive
                ? "Resuming will reactivate all autonomous micro-agents and enable pending order settlements."
                : "Freezing halts all agent activity immediately and drops active quote negotiations. Funds on XRPL remain safe."}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <GlassButton
              variant="secondary"
              size="md"
              className="flex-1"
              onClick={() => setConfirmModalOpen(false)}
            >
              Cancel
            </GlassButton>
            <GlassButton
              variant={mandate.killSwitchActive ? "primary" : "danger"}
              size="md"
              className="flex-1"
              onClick={handleToggle}
            >
              {mandate.killSwitchActive ? "Yes, Resume" : "Yes, Trigger Freeze"}
            </GlassButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
