import { AgentMandate, SpendingRule } from "@/types/mandate";

export interface PreFlightCheckResult {
  allowed: boolean;
  code:
    | "APPROVED"
    | "KILL_SWITCH_ACTIVE"
    | "DAILY_BUDGET_EXCEEDED"
    | "SINGLE_TX_LIMIT_EXCEEDED"
    | "UNVETTED_SELLER"
    | "SAFETY_RESERVE_BREACH"
    | "SUSPICIOUS_PAYLOAD";
  reason: string;
  evaluatedRule?: SpendingRule;
}

export function validateOrderPreFlight(
  orderTotalZAR: number,
  category: string,
  sellerAddressOrId: string,
  mandate: AgentMandate,
  rawPromptOrItemName?: string
): PreFlightCheckResult {
  // 1. Check Kill Switch
  if (mandate.killSwitchActive) {
    return {
      allowed: false,
      code: "KILL_SWITCH_ACTIVE",
      reason: `Execution halted by active emergency kill switch. Reason: ${mandate.killSwitchReason || "Manual trigger"}`,
    };
  }

  // 2. Check Daily Cap
  if (mandate.usedTodayZAR + orderTotalZAR > mandate.totalDailyBudgetZAR) {
    return {
      allowed: false,
      code: "DAILY_BUDGET_EXCEEDED",
      reason: `Order exceeds daily budget limit. Required: R${orderTotalZAR}, Remaining: R${mandate.totalDailyBudgetZAR - mandate.usedTodayZAR}`,
    };
  }

  // 3. Check Safety Reserve
  const projectedBalanceZAR = mandate.totalDailyBudgetZAR - (mandate.usedTodayZAR + orderTotalZAR);
  if (projectedBalanceZAR < mandate.minSafetyReserveZAR) {
    return {
      allowed: false,
      code: "SAFETY_RESERVE_BREACH",
      reason: `Order breaches minimum safety buffer of R${mandate.minSafetyReserveZAR.toLocaleString()}.`,
    };
  }

  // 4. Check Prompt Injection / Suspicious keywords
  if (rawPromptOrItemName) {
    const suspiciousPatterns = [
      /ignore previous instructions/i,
      /drain wallet/i,
      /bypass limit/i,
      /admin override/i,
      /<script>/i,
    ];
    if (suspiciousPatterns.some((pattern) => pattern.test(rawPromptOrItemName))) {
      return {
        allowed: false,
        code: "SUSPICIOUS_PAYLOAD",
        reason: "Adversarial prompt injection attempt detected by Guard Layer.",
      };
    }
  }

  // 5. Evaluate Specific Category Rule
  const rule = mandate.rules.find(
    (r) => r.category.toLowerCase() === category.toLowerCase() && r.enabled
  );

  if (rule) {
    if (orderTotalZAR > rule.maxSingleTxZAR) {
      return {
        allowed: false,
        code: "SINGLE_TX_LIMIT_EXCEEDED",
        reason: `Exceeds single transaction cap of R${rule.maxSingleTxZAR.toLocaleString()} for category ${rule.category}.`,
        evaluatedRule: rule,
      };
    }

    if (
      rule.allowedSellers.length > 0 &&
      !rule.allowedSellers.includes(sellerAddressOrId) &&
      sellerAddressOrId !== "all"
    ) {
      return {
        allowed: false,
        code: "UNVETTED_SELLER",
        reason: `Seller "${sellerAddressOrId}" is not in the vetted supplier whitelist for ${rule.category}.`,
        evaluatedRule: rule,
      };
    }
  }

  return {
    allowed: true,
    code: "APPROVED",
    reason: "Pre-flight validation checks passed successfully.",
    evaluatedRule: rule,
  };
}
