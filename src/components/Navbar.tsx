import { useWeb3Manager } from "../context/Web3Manager";
import Davatar from "@davatar/react";

interface NavBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setIsOpen }) => {
  const { active, disconnect, address, provider } = useWeb3Manager();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Web3-React Basic Integration Example
        </a>
      </div>
      <div className="flex-none gap-2">
        {!active ? (
          <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
            Sign-in with wallet
          </button>
        ) : (
          <div className="dropdown dropdown-end">
            <div className="flex items-center">
              <div className=" w-32 truncate mr-4">{address}</div>

              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Davatar size={40} address={address} provider={provider} />
                </div>
              </label>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={disconnect}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
