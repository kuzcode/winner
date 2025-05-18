'use client';

import { useParams } from 'next/navigation';
import { matches } from '@/lib/data/mockData';
import Link from 'next/link';
import Image from 'next/image';

export default function MatchDetail() {
  const { id } = useParams();
  const match = matches.find(m => m.id === parseInt(id)) || matches[0];

  const stats = [
    { label: 'Attack', home: 77, away: 15 },
    { label: 'Possession', home: 70, away: 30 },
    { label: 'Precision', home: 90, away: 35 },
  ];

  return (
    <main className="flex-1 pb-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="bg-surface-dark text-white p-4">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="p-2 -ml-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-lg font-medium">{match.league}</h1>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 relative">
                <Image
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-center">{match.homeTeam.name}</span>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">
                {match.homeTeam.score}:{match.awayTeam.score}
              </div>
              <div className="text-sm text-gray-400">{match.time}</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 relative">
                <Image
                  src={match.awayTeam.logo}
                  alt={match.awayTeam.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-medium text-center">{match.awayTeam.name}</span>
            </div>
          </div>
        </div>

        {/* Match Stats */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Match stats</h2>
          <div className="space-y-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{stat.home}%</span>
                  <span className="text-text-secondary">{stat.label}</span>
                  <span>{stat.away}%</span>
                </div>
                <div className="flex gap-2 h-2">
                  <div className="flex-1 bg-surface-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-orange rounded-full"
                      style={{ width: `${stat.home}%` }}
                    />
                  </div>
                  <div className="flex-1 bg-surface-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-orange rounded-full"
                      style={{ width: `${stat.away}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Score */}
        <div className="px-4">
          <h2 className="text-xl font-bold mb-4">Current Score</h2>
          <div className="bg-surface-light rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src={match.homeTeam.logo}
                    alt={match.homeTeam.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{match.homeTeam.name}</span>
              </div>
              <span className="text-2xl font-bold">{match.homeTeam.score}</span>
            </div>
            <div className="my-4 border-t border-gray-200" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{match.awayTeam.name}</span>
              </div>
              <span className="text-2xl font-bold">{match.awayTeam.score}</span>
            </div>
          </div>
        </div>

        {/* Match Result */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Match result</h2>
          <div className="grid grid-cols-3 gap-3">
            <button className="bg-surface-light py-3 rounded-xl text-center">
              <span className="font-medium">{match.odds.home}</span>
            </button>
            <button className="bg-surface-light py-3 rounded-xl text-center">
              <span className="font-medium">{match.odds.draw}</span>
            </button>
            <button className="bg-surface-light py-3 rounded-xl text-center">
              <span className="font-medium">{match.odds.away}</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 