import { useState } from "react";
import NavBar from "./components/Navbar";
import WalletModal from "./components/WalletModal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <div className="hero grow bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Web3-React Integration</h1>
              <p className="py-6">
                This is a sample integration for the Web3-react library. To get
                started, sign-in using your wallet.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Sign-in with wallet
              </button>
            </div>
          </div>
        </div>
      </div>

      <WalletModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
