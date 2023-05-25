import { ExternalLink, Info, Medal } from 'lucide-react'
import { Section } from '../components/Section'
import Link from 'next/link'
import clsx from 'clsx'
import { isBefore } from 'date-fns'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Classificação',
}

export default function Schedules() {
  const isBeforeDate = isBefore(new Date(), new Date('05/27/2023'))

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <div className="absolute -z-10 h-full w-full bg-lote bg-cover bg-fixed bg-center opacity-30 blur-sm" />
        <h1 className="flex items-baseline gap-4 font-anton text-5xl sm:text-8xl">
          <Medal className="h-12 w-12 sm:h-24 sm:w-24" />
          Leadboard
        </h1>
      </div>
      <Section
        title="Classificação"
        subtitle="Confira a classificação em tempo real de cada nível"
        className="text-zinc-950"
      >
        <div className="flex flex-col gap-4">
          {isBeforeDate && (
            <div className="flex items-center justify-center gap-2 rounded-md bg-yellow-300 p-4">
              <Info className="h-8 w-8 text-yellow-700" />
              <span className="text-base leading-relaxed">
                ihhhh... ainda não tá em tempo hein?! Mas só porque você veio
                até aqui, vamos deixar vc dar uma espiadinha no leadboard 👀
              </span>
            </div>
          )}
          <Link
            className={clsx(
              'from-zinc-950 to-zinc-950 transition-all hover:from-zinc-900 hover:to-zinc-950',
              'flex items-center justify-between rounded-xl bg-gradient-to-l p-4 text-zinc-50',
            )}
            target="_blank"
            href="https://keepthescore.com/board/xwqpzlwzmgzpr/"
          >
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold leading-tight">Nível 1</h2>
              <span className="leading-relaxed text-zinc-400">
                Classificação em tempo real nível 1
              </span>
            </div>

            <ExternalLink />
          </Link>
          <Link
            className={clsx(
              'from-zinc-950 to-zinc-950 transition-all hover:from-zinc-900 hover:to-zinc-950',
              'flex items-center justify-between rounded-xl bg-gradient-to-l p-4 text-zinc-50',
            )}
            target="_blank"
            href="https://keepthescore.com/board/wzmjsktysvcyr/"
          >
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold leading-tight">Nível 2</h2>
              <span className="leading-relaxed text-zinc-400">
                Classificação em tempo real nível 2
              </span>
            </div>

            <ExternalLink />
          </Link>
          <Link
            className={clsx(
              'from-zinc-950 to-zinc-950 transition-all hover:from-zinc-900 hover:to-zinc-950',
              'flex items-center justify-between rounded-xl bg-gradient-to-l p-4 text-zinc-50',
            )}
            target="_blank"
            href="https://keepthescore.com/board/aelgfnroxnr/"
          >
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold leading-tight">Nível 3</h2>
              <span className="leading-relaxed text-zinc-400">
                Classificação em tempo real nível 3
              </span>
            </div>

            <ExternalLink />
          </Link>
        </div>
      </Section>
    </div>
  )
}
