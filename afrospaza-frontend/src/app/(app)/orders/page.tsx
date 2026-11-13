"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { OrderTable } from "@/components/orders/OrderTable";
import { dummyOrders } from "@/lib/ordersData";
import { Order } from "@/types/order";
import { GlassButton } from "@/components/ui/GlassButton";
import { Plus, Filter, Download } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export default function OrdersPage() {
  const [filter, setFilter] = useState<string>("ALL");

  const filteredOrders =
    filter === "ALL"
      ? dummyOrders
      : dummyOrders.filter((o) => (filter === "ACTIVE" ? o.status === "ESCROW_LOCKED" || o.status === "IN_TRANSIT" : o.status === filter));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Orders & Escrow Ledger"
        description="Every purchase is negotiated by autonomous procurement agents, guarded by pre-flight mandate rules, and secured via XRPL smart escrows in RLUSD."
        badge="Immutable On-Chain Ledger"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex p-1 bg-surface border border-border rounded-xl">
          {["ALL", "ACTIVE", "DELIVERED", "SETTLED", "INTERCEPTED_REJECTED"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === tab
                  ? "bg-orange-500 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab === "INTERCEPTED_REJECTED" ? "Blocked" : tab}
            </button>
          ))}
        </div>

        <span className="text-xs text-zinc-500">
          Showing {filteredOrders.length} of {dummyOrders.length} transactions
        </span>
      </div>

      {/* Order Table */}
      <OrderTable orders={filteredOrders} />
    </div>
  );
}
