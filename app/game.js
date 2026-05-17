"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRIVIA_QUESTIONS = [
  { id: 1, text: "is arc network built for modular embedded wallets?", answer: true },
  { id: 2, text: "does turnkey require traditional passwords for users?", answer: false },
  { id: 3, text: "can you sign web3 transactions with a device passkey?", answer: true }
];

export default function CryptoTrivia({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleSwipe = (direction) => {
    const currentQuestion = TRIVIA_QUESTIONS[currentIndex];
    const userAnswer = direction === "right"; // right = true, left = false

    if (userAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 10);
    }

    if (currentIndex < TRIVIA_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      alert(`game over! your final score: ${score + (userAnswer === currentQuestion.answer ? 10 : 0)} bee`);
      setCurrentIndex(0);
      setScore(0);
      onBack();
    }
  };

  if (currentIndex >= TRIVIA_QUESTIONS.length) return null;

  return (
    <div className="w-full max-w-md bg-[#1C1C1C] rounded-2xl p-6 border border-gray-800 shadow-2xl flex flex-col items-center justify-between min-h-[400px]">
      {/* Game Header */}
      <div className="w-full flex justify-between items-center mb-6">
        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">BEE TRIVIA</span>
        <span className="text-sm font-extrabold text-[#FFD700] bg-[#121212] px-3 py-1 rounded-lg border border-gray-800">{score} XP</span>
      </div>

      {/* Question Card Box */}
      <div className="w-full bg-[#121212] rounded-xl p-8 border border-gray-800 text-center flex-1 flex items-center justify-center mb-6 min-h-[180px]">
        <p className="text-lg font-medium text-gray-200 tracking-wide">
          {TRIVIA_QUESTIONS[currentIndex].text}
        </p>
      </div>

      {/* Control Instruction Buttons */}
      <div className="w-full grid grid-cols-2 gap-4">
        <button 
          onClick={() => handleSwipe("left")}
          className="bg-transparent border border-red-500/30 text-red-400 font-bold py-3 rounded-xl active:bg-red-950/20 active:scale-95 transition-transform text-sm tracking-wide"
        >
          ← FALSE (Swipe Left)
        </button>
        <button 
          onClick={() => handleSwipe("right")}
          className="bg-transparent border border-green-500/30 text-green-400 font-bold py-3 rounded-xl active:bg-green-950/20 active:scale-95 transition-transform text-sm tracking-wide"
        >
          TRUE (Swipe Right) →
        </button>
      </div>
    </div>
  );
        }
    
