'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    path: '/',
    label: 'Home',
    icon: (isActive) => (
      <svg className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    path: '/sports',
    label: 'Sports',
    icon: (isActive) => (
      <svg className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18zM9.5 9.5l5 5M9.5 14.5l5-5" />
      </svg>
    )
  },
  {
    path: '/live',
    label: 'Live',
    icon: (isActive) => (
      <svg className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M9.9 15.1a4.5 4.5 0 010-6.364m6.364 0a4.5 4.5 0 010 6.364M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: (isActive) => (
      <svg className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 24 24" fill={isActive ? 'currentColor' : 'none'} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  }
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-dark text-white">
      <div className="w-full max-w-[480px] mx-auto py-4 px-6 rounded-t-3xl">
        <div className="flex justify-between">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center gap-1.5 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.icon(isActive)}
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 