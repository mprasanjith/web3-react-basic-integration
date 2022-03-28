import { createPortal } from "react-dom";

const ModalRoot: React.FC = ({ children }) => {
  return createPortal(children, document.getElementById("modal-root"));
};
export default ModalRoot;
