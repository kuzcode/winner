'use client';

import { userData } from '@/lib/data/mockData';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="w-full max-w-[480px] mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-2xl tracking-wide text-text-primary">WINBET</h1>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-text-primary">{userData.balance.toLocaleString()}</span>
          <span className="text-lg font-medium text-text-secondary">{userData.currency}</span>
        </div>
      </div>
    </header>
  );
} 