"use client";

import React, { useState } from "react";
import { useXRPLWallet } from "@/hooks/useXRPLWallet";
import { truncateHash, formatRLUSD, formatXRP } from "@/lib/format";
import { Wallet, LogOut, ChevronDown, RefreshCw, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { GlassButton } from "@/components/ui/GlassButton";

export function WalletConnectButton() {
  const { isConnected, address, rlusdBalance, xrpBalance, connect, disconnect, refreshBalances } =
    useXRPLWallet();
  const [modalOpen, setModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshBalances();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  if (!isConnected) {
    return (
      <GlassButton
        variant="primary"
        size="sm"
        icon={<Wallet size={15} />}
        onClick={() => connect()}
      >
        Connect XRPL
      </GlassButton>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface-elevated/80 border border-border hover:border-orange-500/40 transition-all cursor-pointer text-xs"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="font-mono text-zinc-300 font-medium">
          {truncateHash(address || "", 4, 4)}
        </span>
        <span className="text-orange-400 font-bold hidden sm:inline">
          {formatRLUSD(rlusdBalance)}
        </span>
        <ChevronDown size={14} className="text-zinc-500" />
      </button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="XRPL Spaza Treasury Wallet"
        description="Connected via XRPL Crossmark / GemWallet Protocol"
      >
        <div className="space-y-5">
          <div className="p-4 rounded-xl bg-surface border border-border space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Account Address</span>
              <span className="font-mono text-white text-[11px] font-semibold">
                {address}
              </span>
            </div>

            <div className="pt-2 border-t border-border/60 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-400 block">RLUSD Stablecoin</span>
                <span className="text-lg font-bold text-white">
                  {formatRLUSD(rlusdBalance)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400 block">Native XRP Gas</span>
                <span className="text-lg font-bold text-blue-400">
                  {formatXRP(xrpBalance)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-emerald-400">
              <CheckCircle2 size={13} />
              <span>Trustline Active: Ripple USD (RLUSD)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <GlassButton
              variant="secondary"
              size="md"
              className="flex-1"
              icon={<RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />}
              onClick={handleRefresh}
            >
              Refresh Balances
            </GlassButton>
            <GlassButton
              variant="danger"
              size="md"
              className="flex-1"
              icon={<LogOut size={14} />}
              onClick={() => {
                disconnect();
                setModalOpen(false);
              }}
            >
              Disconnect
            </GlassButton>
          </div>
        </div>
      </Modal>
    </>
  );
}
