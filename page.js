"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");

  return (
    <>
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

      <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#FFD700", color: "#121212", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px", boxSizing: "border-box", fontFamily: "sans-serif" }}>
        
        {/* Top Bar - Color changed to SOLID BLACK */}
        <div style={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "900", color: "#121212", margin: 0, letterSpacing: "-0.03em" }}>SIGN ARC BEE 🐝</h1>
          <span style={{ backgroundColor: "#121212", fontSize: "14px", padding: "8px 16px", borderRadius: "20px", color: "#FFD700", fontWeight: "700" }}>Arc Network</span>
        </div>

        {/* Main Dashboard Box */}
        <div style={{ width: "100%", maxWidth: "800px", backgroundColor: "#1E3A8A", borderRadius: "32px", padding: "60px 40px", border: "2px solid #121212", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", boxShadow: "0px 25px 50px rgba(0,0,0,0.3)", margin: "auto 0" }}>
          <p style={{ color: "#93C5FD", fontSize: "20px", margin: "0 0 12px 0", fontWeight: "600" }}>Available Balance</p>
          <h2 style={{ fontSize: "80px", fontWeight: "900", color: "#FFD700", margin: "0 0 40px 0", letterSpacing: "-0.04em" }}>{balance}</h2>

          {/* Copy Address Row */}
          <div style={{ width: "100%", backgroundColor: "#172554", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "45px", border: "1px solid #3b82f6", boxSizing: "border-box" }}>
            <span style={{ fontSize: "16px", color: "#60A5FA", fontFamily: "monospace", letterSpacing: "0.05em" }}>{address}</span>
            <button style={{ fontSize: "14px", color: "#FFD700", backgroundColor: "#1E3A8A", padding: "10px 24px", borderRadius: "12px", border: "1px solid #3b82f6", fontWeight: "700" }}>Copy</button>
          </div>

          {/* ACTION BUTTON - TEXT COLOR SIGNED TO SOLID BLACK (#121212) */}
          <button style={{ width: "100%", backgroundColor: "#FFD700", color: "#121212", fontWeight: "900", padding: "26px", borderRadius: "20px", border: "3px solid #121212", fontSize: "24px", cursor: "pointer", letterSpacing: "0.02em", boxShadow: "0px 8px 0px #121212" }}>
            Connect Fingerprint Passkey
          </button>
        </div>

        {/* Bottom Swipe Indicator */}
        <div style={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "auto", paddingTop: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "16px", color: "#121212", fontWeight: "900", letterSpacing: "0.15em" }}>SWIPE FOR GAME</span>
            <span style={{ color: "#121212", fontSize: "26px", fontWeight: "900" }}>→</span>
          </div>
        </div>

      </div>
    </>
  );
          }
          
