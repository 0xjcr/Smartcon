import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectKitButton } from "connectkit";
const inter = Inter({ subsets: ['latin'] })
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";


const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: "demo",
    // Required
    appName: "You Create Web3 Dapp",
    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
  })
);
export default function Home() {
  return (

    <WagmiConfig config={config}>
      <ConnectKitProvider mode="dark">

        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
          <ConnectKitButton />
          <h1>HolA</h1>
        </main>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
