"use client";

import React from "react";
import { useXRPLWallet } from "@/hooks/useXRPLWallet";
import { formatRLUSD, truncateHash } from "@/lib/format";
import { Wallet } from "lucide-react";

export function WalletBadge() {
  const { address, rlusdBalance, isConnected } = useXRPLWallet();

  if (!isConnected || !address) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs">
      <Wallet size={13} className="text-orange-400" />
      <span className="font-mono text-zinc-400">{truncateHash(address, 4, 4)}</span>
      <span className="text-zinc-600">•</span>
      <span className="text-white font-bold">{formatRLUSD(rlusdBalance)}</span>
    </div>
  );
}
