import { AbstractConnector } from "@web3-react/abstract-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export enum ConnectorNames {
  Injected = "MetaMask",
  WalletConnect = "WalletConnect",
}

export enum Networks {
  Mainnet = 1,
}

export const RPC_URLS = {
  [Networks.Mainnet]: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
};

console.log({ RPC_URLS });

export const injected = new InjectedConnector({
  supportedChainIds: [Networks.Mainnet],
});

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  chainId: Networks.Mainnet,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const connectorsByName: {
  [connectorName in ConnectorNames]: AbstractConnector;
} = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};
