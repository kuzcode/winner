'use client';

import { useState } from 'react';
import SearchBar from '@/components/shared/SearchBar';
import LeagueCard from '@/components/shared/LeagueCard';
import MatchCard from '@/components/shared/MatchCard';
import SportsTabs from '@/components/shared/SportsTabs';
import { leagues, sports, matches } from '@/lib/data/mockData';

export default function Home() {
  const [selectedSportId, setSelectedSportId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMatches = matches.filter(match => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      match.league.toLowerCase().includes(query) ||
      match.homeTeam.name.toLowerCase().includes(query) ||
      match.awayTeam.name.toLowerCase().includes(query)
    );
  });

  return (
    <main className="flex-1 pb-24">
      <div className="max-w-screen-2xl mx-auto">
        <SearchBar onSearch={setSearchQuery} />

        {/* Featured Leagues */}
        <div className="px-4 grid grid-cols-2 gap-4 mb-8">
          {leagues.map(league => (
            <LeagueCard key={league.id} league={league} />
          ))}
        </div>

        {/* Top Events Section */}
        <div>
          <div className="px-4 flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-text-secondary">Top Events</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">LIVE</span>
              <div className="w-12 h-6 bg-accent-green rounded-full"></div>
            </div>
          </div>

          <SportsTabs
            sports={sports}
            selectedId={selectedSportId}
            onSelect={setSelectedSportId}
          />

          <div className="px-4 space-y-4">
            {filteredMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
