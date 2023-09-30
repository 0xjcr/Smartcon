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
    makeTheTransfer,
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
          style={{ width: "auto", height: "80px", margin: "50px" }}
        />
        <button
          onClick={() => {
            // Your swap logic here
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "1px solid gray",
            cursor: "pointer",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            marginBottom: "150px",
          }}
        >
          text here
        </button>
      </div>

      <div>
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
        {
          <p>
            Wallet is connected: {signer?.address} and using the {networkName}{" "}
            provider
          </p>
        }
        <button onClick={() => makeTheTransfer()}>Test the connection!</button>
      </div>

      <ComboBox></ComboBox>
    </main>
  );
}
