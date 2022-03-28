import classnames from "classnames";
import { useEffect } from "react";
import ModalRoot from "./ModalRoot";
import { ConnectorNames } from "../utils/connectors";
import { useWeb3Manager } from "../context/Web3Manager";

interface WalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, setIsOpen }) => {
  const { active, connectTo } = useWeb3Manager();

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
            {Object.values(ConnectorNames).map((connectorName) => {
              return (
                <button
                  className="btn btn-block btn-outline my-2"
                  onClick={() => connectTo(connectorName)}
                >
                  {connectorName}
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
