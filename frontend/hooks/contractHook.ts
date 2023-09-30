import { useState, useEffect, useMemo } from "react";
import { ethers } from "ethers";

import contractAbi from "../contracts/contractAbi.json";
import { CONSTANTS } from "../utils/constants";
const useSmartContractHook = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isWalletConnectedLoading, setIsWalletConnectedLoading] =
    useState(false);

  const [hasMetamask, setHasMetamask] = useState(false);

  const [signer, setSigner] = useState<any>(null);
  const [networkName, setNetworkName] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState<any>(null);

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
        setSigner(await provider.getSigner());
        console.log("getting signer", signer);
        setNetworkName(theSigner.provider?._network.name);
        setWalletAddress(await theSigner.getAddress());
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

  async function makeTheTransfer() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      CONSTANTS.STORAGE_CONTRACT_ADDRESS,
      contractAbi,
      signer
    );
    const params = {
      receiver: walletAddress,
      swapParams: {
        tokenIn: walletAddress,
        tokenOut: walletAddress,
        tokenAmounts: 7000000,
      },
      tokenOut: walletAddress,
      tokenAmounts: 7000000,
    };
    // const ccipSendTrigger = await contract.ccipSend(`12532609583862916517`, params);

    const destinationChainSelector = `12532609583862916517`; // Replace with the destination chain selector
    const receiver = walletAddress; // Replace with the receiver address
    const data = "0x"; // Replace with the data to send
    const tokenAmounts = [
      {
        token: ethers.ZeroAddress, // "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", // Replace with the token address
        amount: ethers.parseEther("0.0030"), // Replace with the token amount
      },
    ];
    const feeToken = "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06"; // Replace with the fee token address
    const functionSelector = ethers.id("CCIP EVMExtraArgsV1").slice(0, 10);
    const textraArgs = ethers.AbiCoder.defaultAbiCoder().encode(
      ["uint256", "bool"],
      [1000000, false]
    ); // for transfers to EOA gas limit is 0
    const encodedExtraArgs = `${functionSelector}${textraArgs.slice(2)}`;

    const extraArgs = encodedExtraArgs; //"0xA0Ab9EB68C3e5D080a073e7D49a61c2b840Dce80"; // Replace with any extra arguments

    const overrides = {
      value: ethers.parseEther("0.01"), // Replace with the amount of Ether to send
      gasLimit: 1000000, // Replace with the gas limit,
      gasPrice: 1000000000, // Replace with the gas price
    };

    const message = {
      receiver: ethers.AbiCoder.defaultAbiCoder().encode(
        ["address"],
        [receiver]
      ),
      data: ethers.AbiCoder.defaultAbiCoder().encode(["string"], [""]), // no data
      tokenAmounts: tokenAmounts,
      feeToken: feeToken ? feeToken : ethers.ZeroAddress,
      extraArgs: encodedExtraArgs,
    };
    const tx = await contract.ccipSend(
      destinationChainSelector,
      message,
      // { receiver, data, tokenAmounts, feeToken, extraArgs },
      overrides
    );

    console.log(tx);

    //     12532609583862916517
    // 0x6bF305787Eb784Bf5Ea9ff2358aE24756639d766
    // ["0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",0,3000,0,"0xA0Ab9EB68C3e5D080a073e7D49a61c2b840Dce80"]
    // 0xbFA2ACd33ED6EEc0ed3Cc06bF1ac38d22b36B9e9
    // 700000000000000
    // ccipSend
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
    makeTheTransfer,
  };
};

export default useSmartContractHook;
