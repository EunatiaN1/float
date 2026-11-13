import { xrplClient } from "./client";

export interface EscrowCreateParam {
  account: string;
  destination: string;
  amountDropsOrRLUSD: string;
  condition?: string;
  cancelAfterSeconds?: number;
  finishAfterSeconds?: number;
}

export async function createEscrow(params: EscrowCreateParam) {
  // In real XRPL this constructs an EscrowCreate transaction
  const response = await xrplClient.submitTransaction({
    TransactionType: "EscrowCreate",
    Account: params.account,
    Destination: params.destination,
    Amount: params.amountDropsOrRLUSD,
    CancelAfter: params.cancelAfterSeconds ? Math.floor(Date.now() / 1000) + params.cancelAfterSeconds : undefined,
  });

  return {
    txHash: response.txHash,
    sequence: 48921,
    status: "ESCROW_LOCKED",
  };
}

export async function finishEscrow(owner: string, escrowSequence: number, fulfillment?: string) {
  const response = await xrplClient.submitTransaction({
    TransactionType: "EscrowFinish",
    Owner: owner,
    OfferSequence: escrowSequence,
    Fulfillment: fulfillment,
  });

  return {
    txHash: response.txHash,
    settled: true,
  };
}
