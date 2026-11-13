export interface SpendingRule {
  id: string;
  category: string; // e.g. "Maize & Grains", "Cooking Oil", "Dairy & Bread", "Beverages"
  maxSingleTxZAR: number;
  dailyCapZAR: number;
  allowedSellers: string[]; // Supplier wallet addresses or IDs
  requiresDoubleApproval: boolean;
  enabled: boolean;
}

export interface AgentMandate {
  spazaId: string;
  spazaName: string;
  location: string;
  totalDailyBudgetZAR: number;
  usedTodayZAR: number;
  currency: "ZAR" | "RLUSD" | "XRP";
  exchangeRateRLUSDToZAR: number;
  killSwitchActive: boolean;
  killSwitchTriggeredAt?: string;
  killSwitchReason?: string;
  autoRebalanceEnabled: boolean;
  minSafetyReserveZAR: number;
  rules: SpendingRule[];
  lastUpdated: string;
}
