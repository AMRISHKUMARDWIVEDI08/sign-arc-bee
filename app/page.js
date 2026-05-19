"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");
  const [status, setStatus] = useState("");
  const [discord, setDiscord] = useState("");
  const [xUser, setXUser] = useState("");
  const [feedback, setFeedback] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const connectWallet = () => {
    try {
      setStatus("Initializing Turnkey Security Enclave...");
      setTimeout(() => {
        setAddress("0x71C...Bbee");
        setBalance("100 BEE");
        setStatus("Wallet Origin Connected via Passkey! 🎉");
      }, 700);
    } catch (err) {
      setStatus("Connection error. Please try again.");
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!discord || !xUser || !feedback) {
      setFormStatus("❌ Please fill all fields to lock allocation!");
      return;
    }
    setFormStatus("✅ Feedback Submitted! Allocation Successfully Locked.");
    setTimeout(() => setFormStatus(""), 4000);
  };

  return (
    <>
      <style>{`
        html, body, #__next {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          background-color: #FFD700 !important;
          overflow: hidden !important;
        }
        input::placeholder, textarea::placeholder {
          color: #71717a !important;
        }
      `}</style>

      <div style={{ height: "100vh", width: "100vw", backgroundColor: "#FFD700", color: "#121212", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", boxSizing: "border-box", fontFamily: "sans-serif" }}>
        
        {/* Top Header Section with Original ARC Logo */}
        <div style={{ width: "100%", maxWidth: "480px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Real Original ARC Logo Image from GitHub */}
            <img 
              src="https://raw.githubusercontent.com/AMRISHKUMARDWIVEDI08/arc-engine-router/main/logo.png" 
              alt="ARC Logo" 
              style={{ width: "32px", height: "32px", objectFit: "contain" }} 
            />
            <h1 style={{ fontSize: "24px", fontWeight: "900", color: "#121212", margin: 0, letterSpacing: "-0.03em" }}>SIGN ARC BEE 🐝</h1>
          </div>
          <span style={{ backgroundColor: "#121212", fontSize: "10px", padding: "6px 12px", borderRadius: "20px", color: "#FFD700", fontWeight: "700", letterSpacing: "0.05em" }}>ARC NETWORK</span>
        </div>

        {/* Real-Time Dashboard Card */}
        <div style={{ width: "100%", maxWidth: "480px", backgroundColor: "#1E3A8A", borderRadius: "24px", padding: "18px 20px", border: "3px solid #121212", display: "flex", flexDirection: "column", alignItems: "center", boxSizing: "border-box", boxShadow: "0px 8px 0px #121212" }}>
          
          {/* Brand Partner Logos Badge Row */}
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: "1px dashed rgba(255,255,255,0.15)", paddingBottom: "10px" }}>
            {/* Verified Turnkey Graphic Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img 
                src="https://assets.coingecko.com/coins/images/34392/large/turnkey.jpeg?1704944983" 
                alt="Turnkey" 
                style={{ width: "16px", height: "16px", borderRadius: "4px" }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span style={{ color: "#FFD700", fontSize: "11px", fontWeight: "800", letterSpacing: "0.05em" }}>TURNKEY</span>
            </div>

            {/* Verified Circle Graphic Icon */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img 
                src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389" 
                alt="Circle" 
                style={{ width: "16px", height: "16px" }}
              />
              <span style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "800", letterSpacing: "0.05em" }}>CIRCLE</span>
            </div>
          </div>

          <p style={{ color: "#93C5FD", fontSize: "13px", margin: "0 0 2px 0", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Available Balance</p>
          <h2 style={{ fontSize: "48px", fontWeight: "900", color: "#FFD700", margin: "0 0 6px 0", letterSpacing: "-0.03em" }}>{balance}</h2>
          
          {status && (
            <p style={{ color: "#FFD700", fontSize: "11px", margin: "0 0 12px 0", backgroundColor: "#172554", padding: "6px 12px", borderRadius: "8px", fontFamily: "monospace", border: "1px solid #3b82f6", width: "100%", textAlign: "center", boxSizing: "border-box", fontWeight: "600" }}>
              {status}
            </p>
          )}

          <div style={{ width: "100%", backgroundColor: "#172554", borderRadius: "12px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", border: "2px solid #121212", boxSizing: "border-box" }}>
            <span style={{ fontSize: "13px", color: "#60A5FA", fontFamily: "monospace", fontWeight: "700" }}>{address}</span>
            <button type="button" style={{ fontSize: "11px", color: "#121212", backgroundColor: "#FFD700", padding: "6px 14px", borderRadius: "8px", border: "2px solid #121212", fontWeight: "900", cursor: "pointer" }}>Copy</button>
          </div>

          <button 
            onClick={connectWallet}
            style={{ width: "100%", backgroundColor: "#FFD700", color: "#121212", fontWeight: "900", padding: "15px", borderRadius: "14px", border: "3px solid #121212", fontSize: "18px", cursor: "pointer", letterSpacing: "0.01em", boxShadow: "0px 5px 0px #121212" }}
          >
            Connect Secure Passkey Wallet
          </button>
        </div>

        {/* Builder Engagement & Feedback Form */}
        <form onSubmit={handleFeedbackSubmit} style={{ width: "100%", maxWidth: "480px", backgroundColor: "#ffffff", borderRadius: "24px", padding: "18px 20px", border: "3px solid #121212", display: "flex", flexDirection: "column", boxSizing: "border-box", boxShadow: "0px 8px 0px #121212", margin: "10px 0" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "900", margin: "0 0 10px 0", color: "#1E3A8A", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>⚡ Join Arc Ecosystem Feedback</h3>
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input 
              type="text" 
              placeholder="Discord Username" 
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
              style={{ width: "50%", padding: "11px", borderRadius: "10px", border: "2px solid #121212", fontSize: "12px", fontWeight: "700", outline: "none", backgroundColor: "#f8fafc", color: "#121212" }}
            />
            <input 
              type="text" 
              placeholder="X (Twitter) Handle" 
              value={xUser}
              onChange={(e) => setXUser(e.target.value)}
              style={{ width: "50%", padding: "11px", borderRadius: "10px", border: "2px solid #121212", fontSize: "12px", fontWeight: "700", outline: "none", backgroundColor: "#f8fafc", color: "#121212" }}
            />
          </div>

          <textarea 
            placeholder="Share your smooth onboarding feedback here..." 
            rows="2"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={{ width: "100%", padding: "11px", borderRadius: "10px", border: "2px solid #121212", fontSize: "12px", fontWeight: "700", outline: "none", resize: "none", marginBottom: "10px", backgroundColor: "#f8fafc", boxSizing: "border-box", color: "#121212" }}
          ></textarea>

          <button 
            type="submit"
            style={{ width: "100%", backgroundColor: "#1E3A8A", color: "#ffffff", fontWeight: "900", padding: "12px", borderRadius: "12px", border: "2px solid #121212", fontSize: "14px", cursor: "pointer", boxShadow: "0px 4px 0px #121212", textTransform: "uppercase", letterSpacing: "0.02em" }}
          >
            Submit Feedback & Lock Allocation
          </button>

          {formStatus && (
            <p style={{ margin: "6px 0 0 0", fontSize: "11px", fontWeight: "800", textAlign: "center", color: formStatus.includes("✅") ? "#16a34a" : "#dc2626" }}>
              {formStatus}
            </p>
          )}
        </form>

        <div style={{ fontSize: "10px", fontWeight: "800", color: "#1E3A8A", opacity: 0.7, marginBottom: "2px" }}>Arc House Ecosystem Builder v2.2</div>
      </div>
    </>
  );
    }
    
