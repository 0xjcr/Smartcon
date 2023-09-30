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
          style={{ width: 'auto', height: '100px', margin: '50px' }}
        />
        <button
          onClick={() => {
            // Your swap logic here
          }}
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '8px',
            border: '1px solid gray',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            marginBottom: '180px',
            
          }}
        >
          text here
        </button>
      </div>

      <ComboBox></ComboBox>
    </main>
  );
}
