import { ReactNode } from 'react'
import { Anton, Montserrat, Roboto_Mono as RobotoMono } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/global.tw.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Analytics } from '@/components/Analytics'
import { Metadata } from 'next'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'Lovers Challenge by Crossover',
    template: '%s | Lovers Challenge',
  },

  description:
    'Campeonato misto em Mossoró-RN oferecido pelo box Crossover. Site by: rellyson',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        id="home"
        className={clsx(
          'min-h-full w-full scroll-smooth bg-black font-body text-white',
          anton.variable,
          montserrat.variable,
          robotoMono.variable,
        )}
      >
        <Header />

        {children}

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
