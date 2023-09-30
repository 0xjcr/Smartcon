"use client";
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import ComboBox from "@/components/ComboBox";
import useSmartContractHook from "@/hooks/contractHook";

export default function Home() {
  const {
    walletConnectionStatus,
    connectToWallet,
    isWalletConnected,
    isWalletConnectedLoading,
    signer,
    networkName,
  } = useSmartContractHook();
  return (
    <main className={styles.main}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
          flexDirection: "column",
        }}
      >
        <img
          src="/header.png"
          alt="SmartConSwap"
          style={{ width: "auto", height: "100px", marginBottom: "100px" }}
        />

        <h1 className={styles.title}>
          Wallet Status = {walletConnectionStatus}
        </h1>
        {!isWalletConnected && (
          <button
            onClick={() => connectToWallet()}
            disabled={isWalletConnected || isWalletConnectedLoading}
          >
            Connect to wallet!
          </button>
        )}
        {isWalletConnected && (
          <p>
            Wallet is connected: {signer.address} and using the {networkName}{" "}
            provider
          </p>
        )}
      </div>

      <ComboBox></ComboBox>
    </main>
  );
}
