"use client";

import React from "react";
import { useXRPLWallet } from "@/hooks/useXRPLWallet";
import { ChevronDown } from "lucide-react";

export function NetworkSwitcher() {
  const { network, setNetwork } = useXRPLWallet();

  return (
    <div className="relative inline-block">
      <select
        value={network}
        onChange={(e) => setNetwork(e.target.value as "mainnet" | "testnet" | "devnet")}
        aria-label="Select XRPL network"
        className="appearance-none bg-surface-elevated text-xs font-semibold text-zinc-300 border border-border rounded-xl pl-3 pr-7 py-1.5 focus:outline-none focus:border-orange-500/50 cursor-pointer"
      >
        <option value="testnet">XRPL Testnet</option>
        <option value="mainnet">XRPL Mainnet</option>
        <option value="devnet">XRPL Devnet</option>
      </select>
      <ChevronDown
        size={12}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
      />
    </div>
  );
}
