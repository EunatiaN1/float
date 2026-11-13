"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dummyOrders } from "@/lib/ordersData";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { OrderStatusBadge } from "@/components/orders/OrderStatusBadge";
import { XRPLHashLink } from "@/components/orders/XRPLHashLink";
import { formatZAR, formatRLUSD, formatDate } from "@/lib/format";
import { GlassButton } from "@/components/ui/GlassButton";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  Coins,
  CheckCircle2,
  Package,
  AlertTriangle,
} from "lucide-react";

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = (params?.id as string) || "ORD-8921";
  const order = dummyOrders.find((o) => o.id === orderId) || dummyOrders[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/orders">
          <GlassButton variant="secondary" size="sm" icon={<ArrowLeft size={14} />}>
            Back to Orders
          </GlassButton>
        </Link>
        <span className="text-xs text-zinc-500 font-mono">Order Details / {order.id}</span>
      </div>

      <PageHeader
        title={`Order ${order.id}`}
        description={`Fulfillment with ${order.supplierName} backstopped by XRPL escrow protocol.`}
        actions={<OrderStatusBadge status={order.status} />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Items & Totals */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Package size={16} className="text-orange-400" />
              <span>Purchased Inventory Items</span>
            </h3>

            <div className="divide-y divide-border/60">
              {order.items.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{item.name}</span>
                    <span className="text-zinc-500 text-[11px]">
                      {item.quantity} {item.unit} @ {formatZAR(item.unitPriceZAR)}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-zinc-200">
                    {formatZAR(item.totalZAR)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>{formatZAR(order.subtotalZAR)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Township Logistics & Platform Fee</span>
                <span>{formatZAR(order.feeZAR)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-border/60">
                <span>Total Settlement Amount</span>
                <div className="text-right">
                  <div>{formatZAR(order.totalZAR)}</div>
                  <div className="text-xs font-mono text-blue-400 font-normal">
                    {formatRLUSD(order.totalRLUSD)}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Guard Verification Audit Trail */}
          <GlassCard className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Mandate Pre-Flight Audit Trail</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-surface-elevated/80 border border-border flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-zinc-200">Policy Check: Budget Limits Respected</p>
                  <p className="text-zinc-400 text-[11px]">
                    Total order cost {formatZAR(order.totalZAR)} verified below daily single-tx limit and cumulative category ceiling.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-elevated/80 border border-border flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold text-zinc-200">Whitelist Check: Vetted Township Supplier</p>
                  <p className="text-zinc-400 text-[11px]">
                    Vendor XRPL account <span className="font-mono text-orange-400">{order.supplierAddress}</span> matched verified identity registry.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Column: XRPL Escrow & Logistics */}
        <div className="space-y-6">
          {/* XRPL Escrow Details */}
          <GlassCard className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Coins size={16} className="text-blue-400" />
              <span>XRPL Settlement Escrow</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-zinc-500 block text-[11px]">Settlement Method</span>
                <span className="font-bold text-zinc-200">{order.settlementMethod}</span>
              </div>

              {order.escrowSequence && (
                <div>
                  <span className="text-zinc-500 block text-[11px]">Escrow Sequence</span>
                  <span className="font-mono text-white font-bold">#{order.escrowSequence}</span>
                </div>
              )}

              <div>
                <span className="text-zinc-500 block text-[11px]">XRPL Transaction Hash</span>
                <XRPLHashLink hash={order.xrplTxHash} />
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px]">Escrow Condition</span>
                <span className="text-zinc-400 font-mono text-[10px] break-all block bg-surface p-2 rounded border border-border">
                  A02580209C7B...CRYPTOCONDITION...
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Logistics Dispatch */}
          <GlassCard className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Truck size={16} className="text-purple-400" />
              <span>Township Last-Mile Logistics</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-500">Assigned Driver</span>
                <span className="font-bold text-zinc-200">Bongani Dlamini</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Vehicle</span>
                <span className="text-zinc-300">Toyota Hilux (GP-829-SPZ)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Current Checkpoint</span>
                <span className="text-orange-400 font-medium">Zone 6 Soweto Depot</span>
              </div>
            </div>

            {order.notes && (
              <p className="text-[11px] text-zinc-400 italic pt-2 border-t border-border">
                &ldquo;{order.notes}&rdquo;
              </p>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
