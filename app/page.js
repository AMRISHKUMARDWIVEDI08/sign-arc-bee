"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFD700", color: "#1E3A8A", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", boxSizing: "border-box", fontFamily: "sans-serif" }}>
      
      {/* Top Bar */}
      <div style={{ width: "100%", maxWidth: "400px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#1E3A8A", margin: 0 }}>SIGN ARC BEE 🐝</h1>
        <span style={{ backgroundColor: "#1E3A8A", fontSize: "12px", padding: "6px 14px", borderRadius: "20px", color: "#FFD700", border: "1px solid #1E3A8A", fontWeight: "600" }}>Arc Network</span>
      </div>

      {/* Main Dashboard Box (Now Beautiful Royal Blue) */}
      <div style={{ width: "100%", maxWidth: "400px", backgroundColor: "#1E3A8A", borderRadius: "24px", padding: "30px 20px", border: "1px solid #172554", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "40px", boxSizing: "border-box", boxShadow: "0px 15px 35px rgba(30,58,138,0.3)" }}>
        <p style={{ color: "#93C5FD", fontSize: "14px", margin: "0 0 8px 0" }}>Available Balance</p>
        <h2 style={{ fontSize: "42px", fontWeight: "800", color: "#FFD700", margin: "0 0 24px 0", letterSpacing: "-0.02em" }}>{balance}</h2>

        {/* Copy Address Row */}
        <div style={{ width: "100%", backgroundColor: "#172554", borderRadius: "14px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", border: "1px solid #1e3a8a", boxSizing: "border-box" }}>
          <span style={{ fontSize: "12px", color: "#60A5FA", fontFamily: "monospace" }}>{address}</span>
          <button style={{ fontSize: "11px", color: "#FFD700", backgroundColor: "#1E3A8A", padding: "6px 14px", borderRadius: "10px", border: "1px solid #3b82f6", fontWeight: "600" }}>Copy</button>
        </div>

        {/* Action Button */}
        <button style={{ width: "100%", backgroundColor: "#FFD700", color: "#1E3A8A", fontWeight: "bold", padding: "16px", borderRadius: "16px", border: "none", fontSize: "16px", cursor: "pointer", fontWeight: "700" }}>
          Connect Fingerprint Passkey
        </button>
      </div>

      {/* Bottom Swipe Indicator */}
      <div style={{ width: "100%", maxWidth: "400px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "auto", paddingBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "12px", color: "#1E3A8A", fontWeight: "bold", letterSpacing: "0.1em" }}>SWIPE FOR GAME</span>
          <span style={{ color: "#1E3A8A", fontSize: "18px", fontWeight: "bold" }}>→</span>
        </div>
      </div>

    </div>
  );
                }
        
