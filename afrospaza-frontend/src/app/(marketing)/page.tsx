"use client";

import React from "react";
import Link from "next/link";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { GlassButton } from "@/components/ui/GlassButton";
import {
  Zap,
  ShieldCheck,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Coins,
  Store,
  Terminal,
} from "lucide-react";

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col relative overflow-hidden">
      <BackgroundGlow />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-[0_12px_30px_rgba(249,115,22,0.3)]">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <span className="font-extrabold text-lg tracking-[-0.04em] text-white">
              Afro<span className="text-orange-400">Spaza</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
            <a href="#architecture" className="hover:text-white transition-colors">
              Agent Architecture
            </a>
            <a href="#settlement" className="hover:text-white transition-colors">
              XRPL & RLUSD
            </a>
            <a href="#defense" className="hover:text-white transition-colors">
              Guard Layer
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/demo">
              <GlassButton variant="secondary" size="sm">
                Adversarial Demo
              </GlassButton>
            </Link>
            <Link href="/dashboard">
              <GlassButton variant="primary" size="sm" icon={<ArrowRight size={14} />}>
                Launch Control Plane
              </GlassButton>
            </Link>
          </div>
        </div>
      </header>

      <section className="relative pt-24 pb-20 px-6 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-400/20 text-orange-200 text-xs font-semibold tracking-[0.12em] uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>Autonomous commerce</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-[-0.06em] leading-[0.94]">
            Minimal luxury for
            <span className="block text-gradient-orange">retail automation.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            AfroSpaza blends premium product design with autonomous AI, instant settlement, and
            strong mandate protections for township commerce across Africa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <GlassButton variant="primary" size="lg" icon={<Zap size={18} />}>
                Open Control Plane
              </GlassButton>
            </Link>
            <Link href="/demo">
              <GlassButton variant="secondary" size="lg" icon={<ShieldCheck size={18} />}>
                Run Attack Demo
              </GlassButton>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange-400" />
              Sub-second settlement
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange-400" />
              RLUSD escrow protection
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-orange-400" />
              Guardrail safety layer
            </span>
          </div>
        </div>
      </section>

      <section id="architecture" className="py-16 px-6 z-10 border-t border-white/5 bg-white/[0.015]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              System design
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.05em]">
              A refined operating layer for high-trust commerce.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">
                <Cpu size={20} className="text-orange-300" />
              </div>
              <h3 className="text-base font-bold text-white">Procurement agent</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Negotiates price, inventory, and timing across local supply corridors with precision.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4 border-orange-400/20">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-white">Mandate guard</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Validates risk policies, spending limits, and approvals before the system commits.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Coins size={20} className="text-orange-300" />
              </div>
              <h3 className="text-base font-bold text-white">Treasury layer</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Settles only on verified delivery, using XRPL rails and escrow protections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-auto py-8 border-t border-white/5 px-6 text-center text-xs text-zinc-500 z-10">
        <p>© 2026 AfroSpaza Technologies. Powered by XRP Ledger.</p>
      </footer>
    </div>
  );
}
