'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import BetSlip from './BetSlip';

export default function MatchCard({ match }) {
  const { id, league, homeTeam, awayTeam, time, odds, isLive } = match;
  const [selectedBet, setSelectedBet] = useState(null);

  const handleBetClick = (type, odds, teamName) => {
    setSelectedBet({
      league,
      teamName: type === 'draw' ? 'Draw' : teamName,
      odds
    });
  };

  return (
    <>
      <Link href={`/match/${id}`}>
        <div className="bg-surface-light rounded-2xl p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              {isLive && (
                <>
                  <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-accent-green">LIVE</span>
                </>
              )}
              <span className="text-sm text-text-secondary">{league}</span>
            </div>
            <span className="text-sm text-text-secondary">{time}</span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src={homeTeam.logo}
                  alt={homeTeam.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-text-primary">{homeTeam.name}</span>
            </div>
            <div className="text-2xl font-bold text-text-primary">
              {homeTeam.score}:{awayTeam.score}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-medium text-text-primary">{awayTeam.name}</span>
              <div className="w-12 h-12 relative">
                <Image
                  src={awayTeam.logo}
                  alt={awayTeam.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-3 gap-3 mt-2">
        <button 
          onClick={(e) => {
            e.preventDefault();
            handleBetClick('home', odds.home, homeTeam.name);
          }}
          className="bg-background py-3 rounded-xl text-center hover:bg-surface-light transition-colors"
        >
          <span className="font-medium text-text-primary">{odds.home}</span>
        </button>
        <button 
          onClick={(e) => {
            e.preventDefault();
            handleBetClick('draw', odds.draw);
          }}
          className="bg-background py-3 rounded-xl text-center hover:bg-surface-light transition-colors"
        >
          <span className="font-medium text-text-primary">{odds.draw}</span>
        </button>
        <button 
          onClick={(e) => {
            e.preventDefault();
            handleBetClick('away', odds.away, awayTeam.name);
          }}
          className="bg-background py-3 rounded-xl text-center hover:bg-surface-light transition-colors"
        >
          <span className="font-medium text-text-primary">{odds.away}</span>
        </button>
      </div>

      {selectedBet && (
        <BetSlip bet={selectedBet} onClose={() => setSelectedBet(null)} />
      )}
    </>
  );
} 