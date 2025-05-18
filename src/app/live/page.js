'use client';

import { useState } from 'react';
import SearchBar from '@/components/shared/SearchBar';
import SportsTabs from '@/components/shared/SportsTabs';
import MatchCard from '@/components/shared/MatchCard';
import { sports, matches } from '@/lib/data/mockData';

export default function LivePage() {
  const [selectedSportId, setSelectedSportId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const liveMatches = matches.filter(match => match.isLive);
  const filteredMatches = liveMatches.filter(match => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      match.league.toLowerCase().includes(query) ||
      match.homeTeam.name.toLowerCase().includes(query) ||
      match.awayTeam.name.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <SearchBar onSearch={setSearchQuery} />

      <div className="mt-4">
        <SportsTabs
          sports={sports}
          selectedId={selectedSportId}
          onSelect={setSelectedSportId}
        />

        <div className="px-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#808080]">Live Matches</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">LIVE</span>
              <div className="w-12 h-6 bg-[#4ADE80] rounded-full"></div>
            </div>
          </div>

          {filteredMatches.length > 0 ? (
            <div className="space-y-4">
              {filteredMatches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              No live matches available at the moment
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 