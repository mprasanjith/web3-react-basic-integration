import classnames from "classnames";
import ModalRoot from "./ModalRoot";

interface WalletModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, setIsOpen }) => {
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
            <button className="btn btn-block btn-outline my-2">
              Metamask
            </button>
            <button className="btn btn-block btn-outline my-2">Frame</button>
          </div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default WalletModal;
