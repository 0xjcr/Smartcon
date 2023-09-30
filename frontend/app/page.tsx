'use client'
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import ComboBox from '../components/ComboBox'



export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30px',
          flexDirection: 'column',
        }}
      >
        <img
          src='/header.png'
          alt='SmartConSwap'
          style={{ width: 'auto', height: '100px', marginBottom: '100px' }}
        />
      </div>

      <ComboBox></ComboBox>
    </main>
  );
}
