"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShieldCheck,
  PackageSearch,
  Store,
  Sliders,
  X,
  ExternalLink,
  Coins,
  Cpu,
} from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { siteConfig } from "@/config/site";
import { useBudget } from "@/hooks/useBudget";
import { formatZAR, formatRLUSD } from "@/lib/format";

const navItems = [
  { label: "Control Plane", href: "/dashboard", icon: LayoutDashboard },
  { label: "Adversarial Demo", href: "/demo", icon: ShieldCheck, badge: "Live Attack" },
  { label: "Orders & Escrows", href: "/orders", icon: PackageSearch },
  { label: "Vetted Sellers", href: "/sellers", icon: Store },
  { label: "Mandate Rules", href: "/settings", icon: Sliders },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  const { availableBudgetZAR, rlusdBalance } = useBudget();

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed md:sticky top-0 md:top-16 left-0 z-50 md:z-30 h-screen md:h-[calc(100vh-4rem)] w-64 bg-surface border-r border-border p-4 flex flex-col justify-between transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Mobile Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-border md:hidden">
            <span className="font-bold text-white text-sm">Navigation</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 text-zinc-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Spaza Store Identity Pill */}
          <div className="p-3 mb-5 rounded-xl bg-surface-elevated/70 border border-border">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                Active Node
              </span>
            </div>
            <p className="text-xs font-bold text-white truncate">
              {siteConfig.spazaProfile.name}
            </p>
            <p className="text-[10px] text-zinc-400 truncate">
              {siteConfig.spazaProfile.zone}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={17} className={isActive ? "text-orange-400" : "text-zinc-400"} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Sidebar: Budget Headroom & XRPL Telemetry */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="p-3 rounded-xl bg-surface-elevated/60 border border-border space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                <Coins size={13} className="text-orange-400" />
                Remaining Daily Cap
              </span>
              <span className="text-white font-bold">{formatZAR(availableBudgetZAR)}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-zinc-400 font-medium flex items-center gap-1.5">
                <Cpu size={13} className="text-blue-400" />
                RLUSD Liquidity
              </span>
              <span className="text-blue-400 font-bold">{formatRLUSD(rlusdBalance)}</span>
            </div>
          </div>

          <a
            href="https://testnet.xrpl.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-[11px] text-zinc-500 hover:text-zinc-300 px-2 py-1 transition-colors"
          >
            <span>XRPL Testnet Explorer</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </aside>
    </>
  );
}
