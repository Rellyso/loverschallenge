import clsx from 'clsx'
import Image from 'next/image'

import { Countdown } from '../../components/Countdown'
import MoveDown from '@/assets/move-down-icon.svg'
import { Button } from '@/app/components/buttons/Button'

export function Hero() {
  return (
    <main
      className={clsx(
        'flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-8',
        'md:flex-row md:flex-nowrap md:justify-around',
        'h-[calc(100vh)] w-full bg-gradient-main px-8 md:px-16',
      )}
    >
      <Image
        className="absolute bottom-12 w-5 animate-bounce md:w-10"
        src={MoveDown}
        alt="move-down"
      />

      <div className="mt-5 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className={clsx('max-w-2xl font-anton text-3xl sm:text-5xl')}>
            Segunda edição do melhor campeonato misto
          </h1>
          <p className="text-sm font-medium text-primary sm:text-lg">
            by{' '}
            <a
              className="underline underline-offset-2"
              href="https://instagram.com/ctcrossover"
            >
              crossover crostrainning
            </a>
          </p>
        </div>

        <div className="flex gap-4">
          <Button className="text-lg md:text-2xl" asChild>
            <a href="#categories">Saiba mais</a>
          </Button>
          <Button className="text-lg md:text-2xl" variant="secondary" asChild>
            Leadboard
          </Button>
        </div>
      </div>
      <Countdown />

      <video
        src="/assets/videobg.mp4"
        autoPlay
        playsInline
        loop
        muted
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
    </main>
  )
}
