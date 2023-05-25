'use client'
import { useRef } from 'react'
import { Team } from '../data/batteries'
import { toPng } from 'html-to-image'
import clsx from 'clsx'
import Logo from '@/assets/logo-primary.svg'
import Image from 'next/image'
import { Button } from '@/app/components/buttons/Button'
import { ArrowDownToLine, ArrowRightLeft } from 'lucide-react'

interface BatteryCardProps {
  times: string[]
  battery: number
  teams: Team[]
}

export function BatteryCard({ teams, times, battery }: BatteryCardProps) {
  const cardRef = useRef(null)

  async function downloadBattery() {
    if (!cardRef.current) return
    const dataUrl = await toPng(cardRef.current, {
      pixelRatio: 3,
    })

    // download
    const link = document.createElement('a')
    link.download = `day-one#battery${battery}.png`
    link.href = dataUrl
    link.click()
  }

  return (
    <div className="relative flex w-full flex-col items-center rounded-xl bg-zinc-100 p-4">
      <div className="sticky top-0 mb-2 flex w-full justify-center gap-2 pt-2 backdrop-blur-sm">
        {times.map((time, i) => (
          <div className="flex items-center gap-2" key={time}>
            {i !== 0 && <ArrowRightLeft className="w-4 text-zinc-950" />}

            <div className={clsx('flex flex-col items-center gap-2')}>
              <span className="text-2xl font-bold">{time}</span>
              <hr className="h-[2px] w-8 bg-zinc-950" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col">
        {teams.map((team) => {
          return (
            <div
              key={team.id}
              className="flex items-center gap-4 border-b-2 py-2 leading-tight last:border-b-0 sm:flex-nowrap"
            >
              <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-primary p-2 text-sm leading-none sm:h-10 sm:w-10 sm:text-base">
                0{team.lane}
              </span>
              <div className="flex flex-col leading-tight">
                <h4 className="text-base uppercase text-zinc-950 sm:text-lg">
                  {team.name}
                </h4>
                <p className="text-xs font-bold uppercase text-zinc-500 sm:text-sm">
                  {team.athletes[0]} e {team.athletes[1]}
                </p>
              </div>

              <span className="ml-auto flex flex-col rounded-md bg-zinc-950 p-2 text-xs font-bold uppercase leading-tight text-primary sm:text-sm">
                {team.box}
              </span>
            </div>
          )
        })}
      </div>

      <Button onClick={downloadBattery} className="mt-2">
        <ArrowDownToLine className="h-5 w-5" />
        Baixar horários
      </Button>

      {/* download section */}
      <div className={clsx('absolute -right-full ', 'h-0 w-0 overflow-hidden')}>
        <div
          ref={cardRef}
          className="bg-green flex aspect-[9/16] w-[750px] flex-col items-center justify-center gap-4 bg-primary bg-textGreen bg-bottom bg-repeat-x px-10 py-8"
        >
          <span className="flex items-center gap-2 text-2xl">
            <Image src={Logo} alt="Logo lovers Challenge" className="w-24" />
            Bateria <b>#{battery}</b>
          </span>

          <h2 className="mb-2 text-4xl">Horários</h2>

          <div className="flex w-full flex-col items-center rounded-xl bg-zinc-100 p-4 ">
            <div className="sticky top-0 mb-2 flex w-full justify-center gap-4 pt-2 backdrop-blur-sm">
              {times.map((time, i) => (
                <div
                  className={clsx('flex flex-col items-center gap-2')}
                  key={time}
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-semibold leading-none">
                      {i + 1}
                    </span>
                    <span className="text-2xl font-bold">{time}</span>
                  </div>
                  <hr className="h-[2px] w-8 bg-zinc-950" />
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col">
              {teams.map((team) => {
                return (
                  <div
                    key={team.id}
                    className="flex items-center gap-4 border-b-2 py-2 leading-tight last:border-b-0 sm:flex-nowrap"
                  >
                    <span className="flex h-8 w-8 flex-col items-center justify-center rounded-full bg-primary p-2 text-sm leading-none sm:h-10 sm:w-10 sm:text-base">
                      0{team.lane}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <h4 className="text-base uppercase text-zinc-950 sm:text-lg">
                        {team.name}
                      </h4>
                      <p className="text-xs font-bold uppercase text-zinc-500 sm:text-sm">
                        {team.athletes[0]} e {team.athletes[1]}
                      </p>
                    </div>

                    <span className="ml-auto flex w-40 flex-col rounded-md bg-zinc-950 p-2 text-center text-xs font-bold uppercase leading-tight text-primary sm:text-sm">
                      {team.box}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
