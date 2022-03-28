import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3React } from "@web3-react/core";
import { createContext, useContext, useState } from "react";
import { providers } from "ethers";
import { useEagerConnect, useInactiveListener } from "../hooks/useEagerConnect";
import { ConnectorNames, connectorsByName } from "../utils/connectors";

interface Web3ManagerContext {
  connector: AbstractConnector | null;
  activatingConnector: AbstractConnector | null;
  connectTo?: (connectorName: ConnectorNames) => void;
  disconnect?: () => void;
  chainId?: number;
  address?: string;
  active: boolean;
  provider?: providers.Web3Provider | null;
}

const Web3ManagerContext = createContext<Web3ManagerContext>({
  activatingConnector: null,
  active: false,
  connector: null,
});

const Web3Manager: React.FC = ({ children }) => {
  const {
    connector,
    chainId,
    account: address,
    active,
    activate,
    deactivate,
    library: provider,
  } = useWeb3React();
  const [activatingConnector, setActivatingConnector] =
    useState<AbstractConnector>(null);

  const triedEager = useEagerConnect();
  useInactiveListener(!!triedEager || !!activatingConnector);

  function connectTo(connectorName: ConnectorNames) {
    const connector = connectorsByName[connectorName];

    setActivatingConnector(connector);
    activate(connector, (error) => {
      if (error) setActivatingConnector(null);
    });
  }

  function disconnect() {
    deactivate();
  }

  return (
    <Web3ManagerContext.Provider
      value={{
        connector,
        chainId,
        address,
        active,
        connectTo,
        disconnect,
        activatingConnector,
        provider,
      }}
    >
      {children}
    </Web3ManagerContext.Provider>
  );
};

export const useWeb3Manager = () => useContext(Web3ManagerContext);

export default Web3Manager;
