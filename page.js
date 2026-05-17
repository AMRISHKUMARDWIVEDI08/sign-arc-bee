"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "24px", fontFamily: "sans-serif" }}>
      {/* Top Bar */}
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0" }}>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "#FFD700", margin: 0 }}>SIGN ARC BEE 🐝</h1>
        <span style={{ backgroundColor: "#1E1E1E", fontSize: "12px", padding: "4px 12px", borderRadius: "9999px", color: "#a3a3a3", border: "1px solid #262626" }}>Arc Network</span>
      </div>

      {/* Main Dashboard Box */}
      <div style={{ width: "100%", maxWidth: "400px", backgroundColor: "#1C1C1C", borderRadius: "16px", padding: "24px", border: "1px solid #262626", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", margin: "16px 0" }}>
        <p style={{ color: "#a3a3a3", fontSize: "14px", marginBottom: "4px", textAlign: "center" }}>Available Balance</p>
        <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#FFD700", textAlign: "center", marginBottom: "24px", letterSpacing: "-0.05em" }}>{balance}</h2>

        {/* Copy Address Row */}
        <div style={{ backgroundColor: "#121212", borderRadius: "12px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", border: "1px solid #262626" }}>
          <span style={{ fontSize: "12px", color: "#737373", fontFamily: "monospace" }}>{address}</span>
          <button style={{ fontSize: "12px", color: "#FFD700", backgroundColor: "#1C1C1C", padding: "4px 12px", borderRadius: "8px", border: "1px solid #404040", fontWeight: "500" }}>Copy</button>
        </div>

        {/* Action Button */}
        <button style={{ width: "100%", backgroundColor: "#FFD700", color: "black", fontWeight: "bold", padding: "16px", borderRadius: "12px", border: "none", fontSize: "16px", cursor: "pointer" }}>
          Connect Fingerprint Passkey
        </button>
      </div>

      {/* Bottom Swipe Indicator */}
      <div style={{ width: "100%", maxWidth: "400px", display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "16px 0", borderTop: "1px solid #1f1f1f" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", color: "#525252", fontWeight: "bold", letterSpacing: "0.1em" }}>SWIPE FOR GAME</span>
          <span style={{ color: "#FFD700", fontSize: "18px", fontWeight: "bold" }}>→</span>
        </div>
      </div>
    </div>
  );
                   }
        
