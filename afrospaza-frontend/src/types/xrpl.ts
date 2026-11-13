export interface XRPLWalletState {
  address: string | null;
  network: "mainnet" | "testnet" | "devnet";
  isConnected: boolean;
  xrpBalance: number;
  rlusdBalance: number;
  trustlineActive: boolean;
  activeChannelsCount: number;
}

export interface XRPLTransactionSummary {
  hash: string;
  type: "Payment" | "EscrowCreate" | "EscrowFinish" | "PaymentChannelCreate" | "PaymentChannelClaim";
  sender: string;
  destination: string;
  amount: string;
  currency: string;
  feeDrops: string;
  ledgerIndex: number;
  timestamp: string;
  validated: boolean;
}
