import { xrplClient } from "./client";
import { RLUSD_CONFIG } from "@/lib/constants";

export async function setRLUSDTrustline(accountAddress: string, limitAmount = "1000000000") {
  const response = await xrplClient.submitTransaction({
    TransactionType: "TrustSet",
    Account: accountAddress,
    LimitAmount: {
      currency: "RLUSD",
      issuer: RLUSD_CONFIG.testnetIssuer,
      value: limitAmount,
    },
  });

  return {
    txHash: response.txHash,
    active: true,
    currency: "RLUSD",
  };
}
