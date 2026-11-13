import { XRPL_NETWORKS } from "@/lib/constants";

export function getTxExplorerUrl(txHash: string, network: "mainnet" | "testnet" | "devnet" = "testnet"): string {
  const base = XRPL_NETWORKS[network].explorer;
  return `${base}/transactions/${txHash}`;
}

export function getAccountExplorerUrl(address: string, network: "mainnet" | "testnet" | "devnet" = "testnet"): string {
  const base = XRPL_NETWORKS[network].explorer;
  return `${base}/accounts/${address}`;
}
