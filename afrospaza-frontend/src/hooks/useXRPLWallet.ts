import { useWalletStore } from "@/stores/walletStore";

export function useXRPLWallet() {
  const wallet = useWalletStore();
  return {
    ...wallet,
  };
}
