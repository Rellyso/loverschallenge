import { Section } from '../components/Section'
import { CalendarClock, Info } from 'lucide-react'
import { batteriesDayOne } from './data/batteries'
import { BatteryCard } from './components/BatteryCard'

export default function Schedules() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <div className="absolute -z-10 h-full w-full bg-lote bg-cover bg-fixed bg-center opacity-30 blur-sm" />
        <h1 className="flex items-baseline gap-4 font-anton text-5xl sm:text-8xl">
          <CalendarClock className="h-12 w-12 sm:h-24 sm:w-24" />
          Baterias
        </h1>
      </div>
      <Section
        title="Baterias day one"
        subtitle="Confira o horário das provas do dia 1"
        className="text-zinc-950"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 rounded-md bg-blue-300 p-4">
            <Info className="h-8 w-8 text-blue-800" />
            <span className="text-base leading-relaxed">
              Ajustamos as baterias para deixar a visualização dos horários mais
              rápida e prática! <b>Ahhhhh</b>, e agora dá pra{' '}
              <b>baixar seus horários e compartilhar nas redes</b> 💚😎
            </span>
          </div>
          {batteriesDayOne.map((battery) => (
            <div key={`${battery.battery}`} className="space-y-8">
              <div className="space-y-4">
                <span className="flex items-center gap-2">
                  <h3 className="text-xl uppercase">
                    Bateria {battery.battery}
                  </h3>
                  <p className="rounded-lg bg-zinc-950 px-2 py-1 text-primary">
                    Nível {battery.level}
                  </p>
                </span>

                <BatteryCard
                  times={battery.times}
                  teams={battery.teams}
                  battery={battery.battery}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
