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
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-white/5 border border-white/5"
            aria-label="Toggle navigation menu"
          >
            <Menu size={18} />
          </button>

          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_12px_28px_rgba(249,115,22,0.28)] group-hover:scale-[1.03] transition-transform duration-200">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-[-0.04em] text-white">
                  Afro<span className="text-orange-400">Spaza</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-300 bg-orange-500/10 px-1.5 py-0.5 rounded-full border border-orange-400/20">
                  XRPL
                </span>
              </div>
              <span className="text-[10px] text-zinc-500 -mt-0.5 font-medium hidden sm:inline">
                Autonomous commerce mesh
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] p-1">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.02em] transition-all ${
                  isActive
                    ? "bg-orange-500/12 text-orange-300 border border-orange-400/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

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
