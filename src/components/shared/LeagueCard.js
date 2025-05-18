'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LeagueCard({ league }) {
  const { name, backgroundColor, textColor, image } = league;
  const [firstWord, ...restWords] = name.split(' ');

  return (
    <Link href={`/league/${name.toLowerCase().replace(' ', '-')}`}>
      <div
        className="rounded-2xl p-4 flex items-center justify-between relative overflow-hidden h-[120px]"
        style={{ backgroundColor }}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4" fill="none" stroke={textColor} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-xs font-medium" style={{ color: textColor }}>All matches</span>
          </div>
          <h2 
            className="text-2xl font-bold leading-tight" 
            style={{ color: textColor }}
          >
            {firstWord}
            <br />
            {restWords.join(' ')}
          </h2>
        </div>
        {image && (
          <div className="absolute right-0 top-0 bottom-0 w-1/2">
            <Image
              src={image}
              alt=""
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        )}
        <div 
          className="absolute inset-0" 
          style={{ background: `linear-gradient(to right, ${backgroundColor} 30%, transparent 100%)` }}
        />
      </div>
    </Link>
  );
} 