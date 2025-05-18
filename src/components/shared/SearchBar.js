'use client';

export default function SearchBar({ onSearch }) {
  return (
    <div className="px-4 py-3">
      <div className="bg-surface-light rounded-2xl flex items-center p-4">
        <svg
          className="w-5 h-5 text-text-secondary mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search by events, teams"
          className="bg-transparent w-full outline-none text-[15px] placeholder-text-secondary text-text-primary"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
    </div>
  );
} 