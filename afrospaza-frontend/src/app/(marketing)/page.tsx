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
      <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-18 px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-orange-glow">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <span className="font-extrabold text-lg text-white">
              Afro<span className="text-orange-500">Spaza</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
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

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>Autonomous Spaza Micro-Commerce Powered by XRPL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Decentralized Retail <br />
            <span className="text-gradient-orange">Replenishment Mesh</span> for Africa.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            AfroSpaza empowers informal township merchants with autonomous AI procurement agents,
            instant stablecoin settlement on <strong>XRP Ledger (RLUSD)</strong>, and tamper-proof
            mandate guard rails.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <GlassButton variant="primary" size="lg" icon={<Zap size={18} />}>
                Open Spaza Control Plane
              </GlassButton>
            </Link>
            <Link href="/demo">
              <GlassButton variant="secondary" size="lg" icon={<ShieldCheck size={18} />}>
                Run Adversarial Attack Demo
              </GlassButton>
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Sub-second XRPL Finality
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              RLUSD Escrow Protection
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              Prompt Injection Defense Matrix
            </span>
          </div>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section id="architecture" className="py-16 px-6 z-10 border-t border-border/80 bg-surface/40">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Autonomous Multi-Agent Mesh
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Three autonomous micro-agents collaborate under strict cryptographic constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                <Cpu size={20} className="text-orange-400" />
              </div>
              <h3 className="text-base font-bold text-white">Agent 1: Procurement</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Scans local wholesale price books across township distribution hubs, negotiating bulk
                maize, sunflower oil, and dairy rates in real time.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4 border-orange-500/30">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <ShieldCheck size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white">Layer: Mandate Guard</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pre-flight validation engine that verifies daily budgets, single tx ceilings, vetted
                whitelists, and adversarial prompt injection before execution.
              </p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
                <Coins size={20} className="text-blue-400" />
              </div>
              <h3 className="text-base font-bold text-white">Agent 2: Treasury</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Creates XRPL Escrows and Payment Channels in Ripple USD (RLUSD), ensuring money only
                moves upon verified delivery receipt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-border px-6 text-center text-xs text-zinc-500 z-10">
        <p>© 2026 AfroSpaza Technologies. Powered by XRP Ledger.</p>
      </footer>
    </div>
  );
}
