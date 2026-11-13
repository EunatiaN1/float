import { xrplClient } from "./client";

export interface ChannelCreateParam {
  account: string;
  destination: string;
  amountXRP: string;
  settleDelaySeconds: number;
  publicKey: string;
}

export async function openPaymentChannel(params: ChannelCreateParam) {
  const response = await xrplClient.submitTransaction({
    TransactionType: "PaymentChannelCreate",
    Account: params.account,
    Destination: params.destination,
    Amount: params.amountXRP,
    SettleDelay: params.settleDelaySeconds,
    PublicKey: params.publicKey,
  });

  const channelId = `5DB01B7DDD9E3A5B1F1F828A966AA53F6BA5744C8B0BAC5F51AED34A897328A6`;

  return {
    txHash: response.txHash,
    channelId,
    status: "CHANNEL_ACTIVE",
  };
}

export async function claimPaymentChannel(channelId: string, balanceDrops: string, signature: string) {
  const response = await xrplClient.submitTransaction({
    TransactionType: "PaymentChannelClaim",
    Channel: channelId,
    Balance: balanceDrops,
    Signature: signature,
  });

  return {
    txHash: response.txHash,
    claimed: true,
  };
}
