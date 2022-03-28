import { useWeb3React } from "@web3-react/core";

interface NavBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setIsOpen }) => {
  const { active } = useWeb3React();

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
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
