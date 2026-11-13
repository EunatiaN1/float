"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { WalletConnectButton } from "@/components/wallet/WalletConnectButton";
import { NetworkSwitcher } from "@/components/wallet/NetworkSwitcher";
import { Menu, Zap, ShieldAlert } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { useMandateStore } from "@/stores/mandateStore";

export function Navbar() {
  const pathname = usePathname();
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const killSwitchActive = useMandateStore((s) => s.mandate.killSwitchActive);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      {killSwitchActive && (
        <div className="bg-red-500/20 border-b border-red-500/40 px-4 py-1.5 flex items-center justify-center gap-2 text-xs font-semibold text-red-300">
          <ShieldAlert size={14} className="text-red-400 animate-pulse" />
          <span>EMERGENCY KILL SWITCH ACTIVE — All autonomous agent spend paused.</span>
        </div>
      )}

      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left: Mobile hamburger + Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5"
            aria-label="Toggle navigation menu"
          >
            <Menu size={20} />
          </button>

          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-orange-glow group-hover:scale-105 transition-transform">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-white">
                  Afro<span className="text-orange-500">Spaza</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/30">
                  XRPL
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 -mt-0.5 font-medium hidden sm:inline">
                Township Autonomous Agent Mesh
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Top Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Network + XRPL Wallet */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <NetworkSwitcher />
          </div>
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
}
