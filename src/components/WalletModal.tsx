import classnames from "classnames";
import { useWeb3React } from "@web3-react/core";

import ModalRoot from "./ModalRoot";
import { ConnectorNames, connectorsByName } from "../utils/connectors";
import { useEffect } from "react";

interface WalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, setIsOpen }) => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();

  console.log({
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  });

  useEffect(() => {
    if (active) {
      setIsOpen(false);
    }
  }, [active]);

  return (
    <ModalRoot>
      <div className={classnames("modal", { "modal-open": isOpen })}>
        <div className="modal-box relative">
          <label
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Sign-in to your wallet</h3>
          <div className="mt-4">
            {Object.keys(ConnectorNames).map((connectorName) => {
              const connectorDisplayName = ConnectorNames[connectorName];
              const connector = connectorsByName[connectorDisplayName];
              return (
                <button
                  className="btn btn-block btn-outline my-2"
                  onClick={() => {
                    activate(connector, (err) => {
                      console.log(err);
                    });
                  }}
                >
                  {connectorDisplayName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default WalletModal;
