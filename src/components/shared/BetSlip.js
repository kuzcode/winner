'use client';

import { useState } from 'react';

export default function BetSlip({ bet, onClose }) {
  const [amount, setAmount] = useState('');
  const possibleWin = amount ? (parseFloat(amount) * bet.odds).toFixed(2) : '0.00';

  const predefinedAmounts = [50, 100, 500, 1000, 5000];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4 pb-8 z-50 shadow-lg">
      <div className="max-w-screen-2xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Ticket</h3>
          <button onClick={onClose} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Bet Details */}
        <div className="bg-surface-light rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-text-secondary">{bet.league}</span>
            <button className="text-text-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">{bet.teamName}</span>
            <span className="text-accent-orange font-medium">{bet.odds}</span>
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {predefinedAmounts.map((preAmount) => (
              <button
                key={preAmount}
                onClick={() => setAmount(preAmount.toString())}
                className="px-4 py-2 bg-surface-light rounded-xl min-w-max font-medium hover:bg-gray-200 transition-colors"
              >
                ${preAmount}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="bg-surface-light rounded-2xl p-4">
                <div className="text-sm text-text-secondary mb-1">Input</div>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-transparent text-lg font-medium outline-none"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-surface-light rounded-2xl p-4">
                <div className="text-sm text-text-secondary mb-1">Output</div>
                <div className="text-lg font-medium">${possibleWin}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Place Bet Button */}
        <button 
          className="w-full bg-accent-orange text-white py-4 rounded-2xl font-medium disabled:opacity-50"
          disabled={!amount || parseFloat(amount) <= 0}
        >
          Place bet
        </button>
      </div>
    </div>
  );
} 