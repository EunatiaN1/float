export const XRPL_NETWORKS = {
  mainnet: {
    name: "XRPL Mainnet",
    ws: "wss://xrplcluster.com",
    rpc: "https://xrplcluster.com",
    explorer: "https://livenet.xrpl.org",
  },
  testnet: {
    name: "XRPL Testnet",
    ws: "wss://s.altnet.rippletest.net:51233",
    rpc: "https://s.altnet.rippletest.net:51234",
    explorer: "https://testnet.xrpl.org",
  },
  devnet: {
    name: "XRPL Devnet",
    ws: "wss://s.devnet.rippletest.net:51233",
    rpc: "https://s.devnet.rippletest.net:51234",
    explorer: "https://devnet.xrpl.org",
  },
};

export const RLUSD_CONFIG = {
  currencyCode: "524C555344000000000000000000000000000000", // HEX for 'RLUSD'
  symbol: "RLUSD",
  testnetIssuer: "rQhWct2fv4Vc4KRjRgMrxa8xPN9Zx9iLKV",
  mainnetIssuer: "rMxCKbEDmqr76QuheSUMdEGf4B9xJ8m5De",
};

export const DEFAULT_EXCHANGE_RATE_RLUSD_ZAR = 18.25; // 1 RLUSD = ~18.25 ZAR
