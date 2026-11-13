import { create } from "zustand";
import { XRPLWalletState } from "@/types/xrpl";

interface WalletStoreState extends XRPLWalletState {
  connect: (address?: string) => void;
  disconnect: () => void;
  setNetwork: (network: "mainnet" | "testnet" | "devnet") => void;
  refreshBalances: () => Promise<void>;
}

export const useWalletStore = create<WalletStoreState>((set) => ({
  address: "rMkJ62hFhP57L93VNmG9u4c7w1aBxQ7Pky",
  network: "testnet",
  isConnected: true,
  xrpBalance: 2450.8,
  rlusdBalance: 5120.45,
  trustlineActive: true,
  activeChannelsCount: 3,

  connect: (address = "rMkJ62hFhP57L93VNmG9u4c7w1aBxQ7Pky") =>
    set({
      address,
      isConnected: true,
      xrpBalance: 2450.8,
      rlusdBalance: 5120.45,
      trustlineActive: true,
      activeChannelsCount: 3,
    }),

  disconnect: () =>
    set({
      address: null,
      isConnected: false,
      xrpBalance: 0,
      rlusdBalance: 0,
      trustlineActive: false,
      activeChannelsCount: 0,
    }),

  setNetwork: (network) => set({ network }),

  refreshBalances: async () => {
    // Simulating refreshed on-chain ledger values
    set((state) => ({
      xrpBalance: state.xrpBalance + (Math.random() * 2 - 1),
      rlusdBalance: state.rlusdBalance + (Math.random() * 5 - 2.5),
    }));
  },
}));
