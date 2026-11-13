"use client";

import React from "react";
import Link from "next/link";
import { Order } from "@/types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { XRPLHashLink } from "./XRPLHashLink";
import { formatZAR, formatRLUSD, formatDate } from "@/lib/format";
import { ChevronRight, ArrowUpRight } from "lucide-react";

interface OrderTableProps {
  orders: Order[];
}

export function OrderTable({ orders }: OrderTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-surface">
      <table className="w-full text-left text-xs">
        <thead className="bg-surface-elevated/70 text-zinc-400 font-semibold border-b border-border">
          <tr>
            <th className="py-3 px-4">Order ID</th>
            <th className="py-3 px-4">Supplier</th>
            <th className="py-3 px-4">Items Summary</th>
            <th className="py-3 px-4">Total (ZAR / RLUSD)</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">XRPL Tx Hash</th>
            <th className="py-3 px-4">Created</th>
            <th className="py-3 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 text-zinc-200">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <td className="py-3.5 px-4 font-mono font-bold text-white">
                <Link href={`/orders/${order.id}`} className="hover:text-orange-400">
                  {order.id}
                </Link>
              </td>
              <td className="py-3.5 px-4">
                <div className="font-semibold text-zinc-200">{order.supplierName}</div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  {order.supplierAddress.slice(0, 10)}...
                </div>
              </td>
              <td className="py-3.5 px-4">
                <span className="text-zinc-300">
                  {order.items.map((i) => `${i.quantity}x ${i.name}`).join(", ")}
                </span>
              </td>
              <td className="py-3.5 px-4">
                <div className="font-bold text-white">{formatZAR(order.totalZAR)}</div>
                <div className="text-[10px] text-blue-400 font-mono">
                  {formatRLUSD(order.totalRLUSD)}
                </div>
              </td>
              <td className="py-3.5 px-4">
                <OrderStatusBadge status={order.status} />
              </td>
              <td className="py-3.5 px-4">
                <XRPLHashLink hash={order.xrplTxHash} />
              </td>
              <td className="py-3.5 px-4 text-zinc-400">
                {formatDate(order.createdAt)}
              </td>
              <td className="py-3.5 px-4 text-right">
                <Link
                  href={`/orders/${order.id}`}
                  className="p-1.5 rounded-lg bg-surface-elevated hover:bg-orange-500/20 text-zinc-400 hover:text-orange-400 inline-flex items-center transition-colors"
                >
                  <ChevronRight size={15} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
