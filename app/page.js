"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFD700", color: "#1E3A8A", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", boxSizing: "border-box", fontFamily: "sans-serif", width: "100%" }}>
      
      {/* Top Bar - Expanded for desktop screen widths */}
      <div style={{ width: "100%", maxWidth: "600px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "bold", color: "#1E3A8A", margin: 0 }}>SIGN ARC BEE 🐝</h1>
        <span style={{ backgroundColor: "#1E3A8A", fontSize: "14px", padding: "8px 16px", borderRadius: "20px", color: "#FFD700", border: "1px solid #1E3A8A", fontWeight: "600" }}>Arc Network</span>
      </div>

      {/* Main Dashboard Box - Increased maxWidth to look filled in desktop mode */}
      <div style={{ width: "100%", maxWidth: "600px", backgroundColor: "#1E3A8A", borderRadius: "28px", padding: "40px 30px", border: "1px solid #172554", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", boxShadow: "0px 20px 40px rgba(30,58,138,0.4)", margin: "auto 0" }}>
        <p style={{ color: "#93C5FD", fontSize: "16px", margin: "0 0 12px 0", fontWeight: "500" }}>Available Balance</p>
        <h2 style={{ fontSize: "56px", fontWeight: "800", color: "#FFD700", margin: "0 0 30px 0", letterSpacing: "-0.02em" }}>{balance}</h2>

        {/* Copy Address Row */}
        <div style={{ width: "100%", backgroundColor: "#172554", borderRadius: "16px", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", border: "1px solid #1e3a8a", boxSizing: "border-box" }}>
          <span style={{ fontSize: "14px", color: "#60A5FA", fontFamily: "monospace", letterSpacing: "0.05em" }}>{address}</span>
          <button style={{ fontSize: "13px", color: "#FFD700", backgroundColor: "#1E3A8A", padding: "8px 18px", borderRadius: "12px", border: "1px solid #3b82f6", fontWeight: "600", cursor: "pointer" }}>Copy</button>
        </div>

        {/* Action Button - Text color fixed to dark blue for high visibility */}
        <button style={{ width: "100%", backgroundColor: "#FFD700", color: "#1E3A8A", fontWeight: "800", padding: "18px", borderRadius: "18px", border: "none", fontSize: "18px", cursor: "pointer", letterSpacing: "0.02em" }}>
          Connect Fingerprint Passkey
        </button>
      </div>

      {/* Bottom Swipe Indicator */}
      <div style={{ width: "100%", maxWidth: "600px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "auto", paddingTop: "30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "14px", color: "#1E3A8A", fontWeight: "bold", letterSpacing: "0.15em" }}>SWIPE FOR GAME</span>
          <span style={{ color: "#1E3A8A", fontSize: "22px", fontWeight: "bold" }}>→</span>
        </div>
      </div>

    </div>
  );
}
