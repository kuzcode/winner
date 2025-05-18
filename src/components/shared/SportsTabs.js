'use client';

export default function SportsTabs({ sports, onSelect, selectedId }) {
  return (
    <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar px-4">
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => onSelect?.(sport.id)}
          className={`
            px-4 py-2 rounded-full flex items-center gap-2 min-w-max transition-colors
            ${sport.id === selectedId ? 'bg-black text-white' : 'bg-[#F8F8F8] text-[#808080]'}
          `}
        >
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
          <span>{sport.name}</span>
        </button>
      ))}
    </div>
  );
} 