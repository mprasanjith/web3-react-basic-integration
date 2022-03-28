import { useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import NavBar from "./components/Navbar";
import WalletModal from "./components/WalletModal";
import Hero from "./components/Hero";
import Web3Manager from "./context/Web3Manager";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function getLibrary(provider: providers.ExternalProvider) {
    const library = new providers.Web3Provider(provider);
    return library;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3Manager>
        <div className="flex flex-col min-h-screen">
          <NavBar isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          <Hero isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>

        <WalletModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </Web3Manager>
    </Web3ReactProvider>
  );
}
