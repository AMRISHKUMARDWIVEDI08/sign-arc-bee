"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [balance, setBalance] = useState("0 BEE");
  const [address, setAddress] = useState("0x000...0000");

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-between p-6 font-sans select-none overflow-hidden">
      {/* Top Bar (App Name) */}
      <div className="w-full flex justify-between items-center py-4">
        <h1 className="text-xl font-bold tracking-wider text-[#FFD700]">SIGN ARC BEE 🐝</h1>
        <span className="bg-[#1E1E1E] text-xs px-3 py-1 rounded-full text-gray-400 border border-gray-800">Arc Network</span>
      </div>

      {/* Main Dashboard Box */}
      <div className="w-full max-w-md bg-[#1C1C1C] rounded-2xl p-6 border border-gray-800 shadow-2xl flex-1 flex flex-col justify-center my-4">
        <p className="text-gray-400 text-sm mb-1 text-center">Available Balance</p>
        <h2 className="text-4xl font-extrabold text-[#FFD700] text-center mb-6 tracking-tight">{balance}</h2>

        {/* Copy Address Row */}
        <div className="bg-[#121212] rounded-xl p-3 flex justify-between items-center mb-6 border border-gray-800">
          <span className="text-xs text-gray-500 font-mono tracking-wider">{address}</span>
          <button className="text-xs text-[#FFD700] bg-[#1C1C1C] px-3 py-1 rounded-lg border border-gray-700 font-medium active:scale-95 transition-transform">Copy</button>
        </div>

        {/* Action Button */}
        <button className="w-full bg-[#FFD700] text-black font-bold py-4 rounded-xl shadow-lg shadow-yellow-500/10 hover:bg-[#FFE44D] active:scale-[0.98] transition-transform text-center tracking-wide">
          Connect Fingerprint Passkey
        </button>
      </div>

      {/* Bottom Swipe Indicator */}
      <div className="w-full max-w-md flex justify-end items-center py-4 border-t border-gray-900">
        <div className="flex items-center gap-2">
          <span className="text-xs tracking-widest text-gray-500 font-bold uppercase">Swipe for Game </span>
          <motion.span 
            animate={{ x: [0, 5, 0] }} 
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="text-[#FFD700] text-lg font-bold"
          >
            →
          </motion.span>
        </div>
      </div>
    </div>
  );
    }
    
