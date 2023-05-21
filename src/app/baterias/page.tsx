import { Section } from '../components/Section'
import { CalendarClock, ScrollText } from 'lucide-react'
import { getWodById, wodBatteries } from './data/batteries'

export default function Schedules() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <div className="absolute -z-10 h-full w-full bg-lote bg-cover bg-fixed bg-center opacity-30 blur-sm" />
        <h1 className="flex items-baseline gap-4 font-anton text-8xl">
          <CalendarClock size={96} />
          Baterias
        </h1>
      </div>
      <Section
        title="Baterias day one"
        subtitle="Confira o horário das provas do dia 1"
        className="text-zinc-950"
      >
        {wodBatteries.map(({ wodId, times }) => {
          const wod = getWodById(wodId)

          return (
            <div key={`${wodId}`} className="space-y-8">
              <h2 className="mb-4 mt-8 flex items-center justify-center gap-1 text-xl font-bold uppercase md:text-2xl">
                <ScrollText />
                {wod.subtitle} - Day 1
              </h2>

              {times.map(({ time, teams, level, battery }) => (
                <div className="space-y-4" key={time}>
                  <span className="flex items-center gap-2">
                    <h3 className="text-xl uppercase">Bateria {battery}</h3>
                    <p className="rounded-lg bg-zinc-950 px-2 py-1 text-primary">
                      Nível {level}
                    </p>
                  </span>

                  <div className="flex w-full flex-col items-center gap-2 rounded-xl bg-zinc-100 p-4">
                    <span className="text-2xl font-bold">{time}</span>
                    <hr className="h-[2px] w-8 bg-zinc-950" />
                    <div className="flex w-full flex-col">
                      {teams.map((team) => {
                        return (
                          <div
                            key={team.id}
                            className="flex items-center gap-4 border-b-2 py-2 leading-tight last:border-b-0"
                          >
                            <span className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-primary p-2 leading-none">
                              0{team.lane}
                            </span>
                            <div className="flex flex-col leading-tight">
                              <h4 className="text-lg uppercase text-zinc-950">
                                {team.name}
                              </h4>
                              <p className="text-sm font-bold text-zinc-500">
                                {team.athletes[0]} e {team.athletes[1]}
                              </p>
                            </div>

                            <span className="ml-auto flex flex-col rounded-md bg-zinc-950 p-2 text-sm font-bold leading-tight text-primary">
                              {team.box}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </Section>
    </div>
  )
}