export type OrderStatus =
  | "PENDING_QUOTES"
  | "GUARD_APPROVED"
  | "ESCROW_LOCKED"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "SETTLED"
  | "INTERCEPTED_REJECTED";

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unit: string; // e.g. "bags (25kg)", "cases (12x1L)"
  unitPriceZAR: number;
  totalZAR: number;
}

export interface Order {
  id: string;
  spazaId: string;
  supplierId: string;
  supplierName: string;
  supplierAddress: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotalZAR: number;
  feeZAR: number;
  totalZAR: number;
  totalRLUSD: number;
  xrplTxHash?: string;
  escrowSequence?: number;
  paymentChannelId?: string;
  settlementMethod: "ESCROW" | "PAYMENT_CHANNEL" | "DIRECT_RLUSD";
  createdAt: string;
  deliveredAt?: string;
  notes?: string;
}
