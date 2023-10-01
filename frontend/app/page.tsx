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
          // height: "100px",
          flexDirection: "column",
        }}
      >
        <img
          src="/header.png"
          alt="SmartConSwap"
          style={{ width: "auto", height: "80px", margin: "50px" }}
        />
        <div>
          {!isWalletConnected && (
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid gray",
                cursor: "pointer",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
              onClick={() => connectToWallet()}
            >
              Connect to wallet!
            </button>
          )}
          {isWalletConnected && (
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid gray",
                cursor: "pointer",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
              onClick={() => makeTheTransfer()}
            >
              Test the connection!
            </button>
          )}
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <div>
          <h1 className={styles.title}>
            Wallet Status = {walletConnectionStatus}
          </h1>
          {
            <p style={{ textAlign: "center" }}>
              Wallet is connected: {signer?.address} and using the {networkName}{" "}
              provider
            </p>
          }
        </div>
      </div>

      <ComboBox></ComboBox>
    </main>
  );
}
