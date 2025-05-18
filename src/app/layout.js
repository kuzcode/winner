import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WINBET - Sports Betting App',
  description: 'Place your bets on your favorite sports events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <div className="w-full max-w-[480px] mx-auto flex-1">
            {children}
          </div>
          <Navigation />
        </div>
      </body>
    </html>
  )
}
