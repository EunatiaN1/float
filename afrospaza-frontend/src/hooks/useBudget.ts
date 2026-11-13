import { useMandateStore } from "@/stores/mandateStore";
import { useWalletStore } from "@/stores/walletStore";

export function useBudget() {
  const mandate = useMandateStore((s) => s.mandate);
  const rlusdBalance = useWalletStore((s) => s.rlusdBalance);
  const xrpBalance = useWalletStore((s) => s.xrpBalance);

  const totalBudgetZAR = mandate.totalDailyBudgetZAR;
  const spentTodayZAR = mandate.usedTodayZAR;
  const availableBudgetZAR = Math.max(0, totalBudgetZAR - spentTodayZAR);

  const rlusdToZAR = mandate.exchangeRateRLUSDToZAR;
  const totalWalletValueZAR = rlusdBalance * rlusdToZAR + xrpBalance * 11.4;

  const bufferHealth: "EXCELLENT" | "STABLE" | "WARNING" | "CRITICAL" =
    availableBudgetZAR > mandate.minSafetyReserveZAR * 2
      ? "EXCELLENT"
      : availableBudgetZAR > mandate.minSafetyReserveZAR
      ? "STABLE"
      : availableBudgetZAR > 0
      ? "WARNING"
      : "CRITICAL";

  return {
    totalBudgetZAR,
    spentTodayZAR,
    availableBudgetZAR,
    rlusdBalance,
    xrpBalance,
    totalWalletValueZAR,
    bufferHealth,
    minSafetyReserveZAR: mandate.minSafetyReserveZAR,
    exchangeRateRLUSDToZAR: rlusdToZAR,
  };
}
