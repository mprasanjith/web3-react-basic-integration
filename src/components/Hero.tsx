import { useWeb3Manager } from "../context/Web3Manager";

interface HeroProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setIsOpen }) => {
  const { active } = useWeb3Manager();

  return (
    <div className="hero grow bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Web3-React Integration</h1>
          <p className="py-6">
            This is a sample integration for the Web3-react library.
          </p>

          <div className="text-accent">
            {!active ? (
              <>
                <p className="py-6">
                  To get started, sign-in using your wallet.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsOpen(true)}
                >
                  Sign-in with wallet
                </button>
              </>
            ) : (
              <p>Congratulations! You're now connected to your wallet!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
