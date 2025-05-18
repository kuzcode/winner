export const userData = {
  balance: 12580,
  currency: 'USDT',
  username: 'John Doe',
};

export const leagues = [
  {
    id: 1,
    name: 'PREMIER LEAGUE',
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    image: '/images/premier-league-bg.svg',
  },
  {
    id: 2,
    name: 'UEFA LEAGUE',
    backgroundColor: '#1E4ED8',
    textColor: '#FFFFFF',
    image: '/images/uefa-league-bg.svg',
  },
];

export const sports = [
  { id: 1, name: 'Football', active: true },
  { id: 2, name: 'Basketball', active: false },
  { id: 3, name: 'Tennis', active: false },
  { id: 4, name: 'Hockey', active: false },
  { id: 5, name: 'Baseball', active: false },
];

export const matches = [
  {
    id: 1,
    league: 'Premier League',
    homeTeam: {
      name: 'Chelsea',
      logo: '/images/teams/chelsea.svg',
      score: 1
    },
    awayTeam: {
      name: 'Leicester C',
      logo: '/images/teams/leicester.svg',
      score: 2
    },
    time: '49:30',
    odds: {
      home: 1.8,
      draw: 2.1,
      away: 1.3
    },
    isLive: true
  },
  {
    id: 2,
    league: 'UEFA Europa League',
    homeTeam: {
      name: 'Arsenal',
      logo: '/images/teams/arsenal.svg',
      score: 0
    },
    awayTeam: {
      name: 'Roma',
      logo: '/images/teams/roma.svg',
      score: 1
    },
    time: '12:42',
    odds: {
      home: 1.6,
      draw: 2.4,
      away: 1.9
    },
    isLive: true
  }
]; 