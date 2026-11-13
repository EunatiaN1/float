// Optional configuration for EVM cross-chain bridge compatibility
export const evmBridgeConfig = {
  enabled: false,
  supportedChains: [
    { id: 1, name: "Ethereum Mainnet" },
    { id: 137, name: "Polygon" },
    { id: 8453, name: "Base" },
  ],
  xrplBridgeContract: "0x0000000000000000000000000000000000000000",
};
