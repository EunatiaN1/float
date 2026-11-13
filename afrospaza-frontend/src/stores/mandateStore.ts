import { create } from "zustand";
import { AgentMandate, SpendingRule } from "@/types/mandate";

const initialMandate: AgentMandate = {
  spazaId: "spaza_soweto_0042",
  spazaName: "Soweto Super Spaza & Wholesale",
  location: "Zone 6, Soweto, Gauteng",
  totalDailyBudgetZAR: 25000,
  usedTodayZAR: 14250,
  currency: "ZAR",
  exchangeRateRLUSDToZAR: 18.25,
  killSwitchActive: false,
  autoRebalanceEnabled: true,
  minSafetyReserveZAR: 4000,
  lastUpdated: new Date().toISOString(),
  rules: [
    {
      id: "rule_1",
      category: "Maize & Grains",
      maxSingleTxZAR: 8000,
      dailyCapZAR: 12000,
      allowedSellers: ["sup_khayelitsha_01", "sup_johannesburg_wholesalers"],
      requiresDoubleApproval: false,
      enabled: true,
    },
    {
      id: "rule_2",
      category: "Cooking Oil & Essentials",
      maxSingleTxZAR: 5000,
      dailyCapZAR: 8000,
      allowedSellers: ["sup_johannesburg_wholesalers"],
      requiresDoubleApproval: false,
      enabled: true,
    },
    {
      id: "rule_3",
      category: "Dairy & Perishables",
      maxSingleTxZAR: 3000,
      dailyCapZAR: 5000,
      allowedSellers: ["sup_soweto_dairy"],
      requiresDoubleApproval: true,
      enabled: true,
    },
    {
      id: "rule_4",
      category: "Beverages & Soft Drinks",
      maxSingleTxZAR: 4500,
      dailyCapZAR: 7000,
      allowedSellers: ["sup_amalgamated_bev"],
      requiresDoubleApproval: false,
      enabled: true,
    },
  ],
};

interface MandateStoreState {
  mandate: AgentMandate;
  setMandate: (mandate: AgentMandate) => void;
  updateDailyBudget: (newBudget: number) => void;
  toggleKillSwitch: (reason?: string) => void;
  updateRule: (ruleId: string, updates: Partial<SpendingRule>) => void;
  addRule: (rule: SpendingRule) => void;
  recordSpend: (amountZAR: number) => void;
}

export const useMandateStore = create<MandateStoreState>((set) => ({
  mandate: initialMandate,
  setMandate: (mandate) => set({ mandate }),
  updateDailyBudget: (newBudget) =>
    set((state) => ({
      mandate: { ...state.mandate, totalDailyBudgetZAR: newBudget, lastUpdated: new Date().toISOString() },
    })),
  toggleKillSwitch: (reason = "Manual operator toggle") =>
    set((state) => {
      const active = !state.mandate.killSwitchActive;
      return {
        mandate: {
          ...state.mandate,
          killSwitchActive: active,
          killSwitchTriggeredAt: active ? new Date().toISOString() : undefined,
          killSwitchReason: active ? reason : undefined,
          lastUpdated: new Date().toISOString(),
        },
      };
    }),
  updateRule: (ruleId, updates) =>
    set((state) => ({
      mandate: {
        ...state.mandate,
        rules: state.mandate.rules.map((r) => (r.id === ruleId ? { ...r, ...updates } : r)),
        lastUpdated: new Date().toISOString(),
      },
    })),
  addRule: (rule) =>
    set((state) => ({
      mandate: {
        ...state.mandate,
        rules: [...state.mandate.rules, rule],
        lastUpdated: new Date().toISOString(),
      },
    })),
  recordSpend: (amountZAR) =>
    set((state) => ({
      mandate: {
        ...state.mandate,
        usedTodayZAR: state.mandate.usedTodayZAR + amountZAR,
        lastUpdated: new Date().toISOString(),
      },
    })),
}));
