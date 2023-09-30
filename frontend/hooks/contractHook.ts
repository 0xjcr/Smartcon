import { useState, useEffect, useMemo } from "react";
import { ethers } from "ethers";

import contractAbi from "../contracts/contractAbi.json";

const useSmartContractHook = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isWalletConnectedLoading, setIsWalletConnectedLoading] =
    useState(false);

  const [hasMetamask, setHasMetamask] = useState(false);

  const [signer, setSigner] = useState<any>(null);
  const [networkName, setNetworkName] = useState<any>(null);

  // const networkName = useMemo(() => {
  //   console.log("signer", signer?.provider?.network?.name);
  //   return signer?.provider?.network?.name;
  // }, [
  //   JSON.stringify(signer),
  //   signer,
  //   signer?.provider,
  //   signer?.provider?.network,
  //   signer?.provider?.network?.name,
  // ]);
  const walletConnectionStatus = useMemo(() => {
    if (isWalletConnectedLoading) {
      return "Loading...";
    }
    if (isWalletConnected && signer) {
      return "Connected";
    }
    return "Not Connected";
  }, [isWalletConnectedLoading, isWalletConnected]);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  const [contract, setContract] = useState<any>(null);

  async function connectToWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        console.log("connecting to wallet");
        setIsWalletConnectedLoading(true);

        await window.ethereum.request({ method: "eth_requestAccounts" });
        // setIsWalletConnected(true);
        // const provider = new ethers.Web("https://rpc.sepolia.testnet");
        console.log("getting provider");
        const provider = new ethers.BrowserProvider(window.ethereum);
        // const providerBrowser = new ethers.BrowserProvider(provider);
        //
        const theSigner = await provider.getSigner();
        setSigner(() => theSigner);
        console.log("getting signer", theSigner);
        setNetworkName(theSigner.provider?._network.name);
        setIsWalletConnectedLoading(false);
        setIsWalletConnected(true);
      } catch (e) {
        console.log(e);
      } finally {
        setIsWalletConnectedLoading(false);
      }
    } else {
      setIsWalletConnected(false);
    }
  }
  // useEffect(() => {
  //   const initContract = async () => {
  //     try {
  //       // const provider = new ethers.BrowserProvider(window.ethereum);
  //       // const contractInstance = new ethers.Contract(
  //       //   contractAddress,
  //       //   abi,
  //       //   provider.getSigner(signer)
  //       // );
  //       // setContract(contractInstance);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   initContract();
  // }, [, abi, signer]);

  return {
    contract,
    signer,
    hasMetamask,
    connectToWallet,
    walletConnectionStatus,
    isWalletConnected,
    isWalletConnectedLoading,

    networkName,
  };
};

export default useSmartContractHook;
