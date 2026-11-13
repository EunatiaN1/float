import { useMandateStore } from "@/stores/mandateStore";

export function useMandate() {
  const { mandate, updateDailyBudget, toggleKillSwitch, updateRule, addRule, recordSpend } =
    useMandateStore();

  const remainingDailyZAR = mandate.totalDailyBudgetZAR - mandate.usedTodayZAR;
  const percentUsed = Math.min(
    100,
    Math.round((mandate.usedTodayZAR / mandate.totalDailyBudgetZAR) * 100)
  );

  return {
    mandate,
    remainingDailyZAR,
    percentUsed,
    updateDailyBudget,
    toggleKillSwitch,
    updateRule,
    addRule,
    recordSpend,
  };
}
