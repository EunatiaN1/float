import React from "react";
import { OrderStatus } from "@/types/order";
import { Badge } from "@/components/ui/Badge";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  const config: Record<OrderStatus, { label: string; variant: "green" | "blue" | "orange" | "yellow" | "red" }> = {
    PENDING_QUOTES: { label: "Scanning Quotes", variant: "yellow" },
    GUARD_APPROVED: { label: "Guard Approved", variant: "blue" },
    ESCROW_LOCKED: { label: "XRPL Escrow Locked", variant: "orange" },
    IN_TRANSIT: { label: "Driver Dispatched", variant: "blue" },
    DELIVERED: { label: "Delivered", variant: "green" },
    SETTLED: { label: "Escrow Finished", variant: "green" },
    INTERCEPTED_REJECTED: { label: "Guard Blocked", variant: "red" },
  };

  const item = config[status] || { label: status, variant: "blue" };

  return (
    <Badge variant={item.variant} dot>
      {item.label}
    </Badge>
  );
}
