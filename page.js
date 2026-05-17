"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");

  return (
    <>
      {/* CSS injection to break default layout restrictions */}
      <style>{`
        html, body, #__next {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background-color: #FFD700 !important;
          overflow-x: hidden;
        }
      `}</style>

      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFD700", color: "#1E3A8A", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", boxSizing: "border-box", fontFamily: "sans-serif" }}>
        
        {/* Top Bar - Expanded for desktop screen widths */}
        <div style={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1E3A8A", margin: 0 }}>SIGN ARC BEE 🐝</h1>
          <span style={{ backgroundColor: "#1E3A8A", fontSize: "14px", padding: "8px 16px", borderRadius: "20px", color: "#FFD700", border: "1px solid #1E3A8A", fontWeight: "600" }}>Arc Network</span>
        </div>

        {/* Main Dashboard Box - Large width layout for desktop view */}
        <div style={{ width: "100%", maxWidth: "800px", backgroundColor: "#1E3A8A", borderRadius: "28px", padding: "60px 40px", border: "1px solid #172554", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", boxShadow: "0px 25px 50px rgba(30,58,138,0.25)", margin: "auto 0" }}>
          <p style={{ color: "#93C5FD", fontSize: "18px", margin: "0 0 12px 0", fontWeight: "500" }}>Available Balance</p>
          <h2 style={{ fontSize: "72px", fontWeight: "800", color: "#FFD700", margin: "0 0 40px 0", letterSpacing: "-0.02em" }}>{balance}</h2>

          {/* Copy Address Row */}
          <div style={{ width: "100%", backgroundColor: "#172554", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", border: "1px solid #1e3a8a", boxSizing: "border-box" }}>
            <span style={{ fontSize: "15px", color: "#60A5FA", fontFamily: "monospace", letterSpacing: "0.05em" }}>{address}</span>
            <button style={{ fontSize: "14px", color: "#FFD700", backgroundColor: "#1E3A8A", padding: "10px 24px", borderRadius: "12px", border: "1px solid #3b82f6", fontWeight: "600", cursor: "pointer" }}>Copy</button>
          </div>

          {/* Action Button - Text color fixed to Royal Blue */}
          <button style={{ width: "100%", backgroundColor: "#FFD700", color: "#1E3A8A", fontWeight: "800", padding: "22px", borderRadius: "18px", border: "none", fontSize: "22px", cursor: "pointer", letterSpacing: "0.02em" }}>
            Connect Fingerprint Passkey
          </button>
        </div>

        {/* Bottom Swipe Indicator */}
        <div style={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "auto", paddingTop: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px", color: "#1E3A8A", fontWeight: "bold", letterSpacing: "0.15em" }}>SWIPE FOR GAME</span>
            <span style={{ color: "#1E3A8A", fontSize: "22px", fontWeight: "bold" }}>→</span>
          </div>
        </div>

      </div>
    </>
  );
}
