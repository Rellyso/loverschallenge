import { Section } from '../components/Section'
import { CalendarClock } from 'lucide-react'
import { Metadata } from 'next'
import { Tabs } from '@/components/Tabs'
import { TabBatteryDayOne } from './components/TabBatteryDayOne'
import { TabBatteryDayTwo } from './components/TabBatteryDayTwo'
import { TabBatteryFinal } from './components/TabBatteryFinal'

export const metadata: Metadata = {
  title: 'Baterias e horários',
}

export default function Schedules() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center py-20">
        <div className="absolute -z-10 h-full w-full bg-lote bg-cover bg-fixed bg-center opacity-30 blur-sm" />
        <h1 className="flex items-baseline gap-4 font-anton text-5xl sm:text-8xl">
          <CalendarClock className="h-12 w-12 sm:h-24 sm:w-24" />
          Baterias
        </h1>
      </div>
      <Section
        title="Baterias"
        subtitle="Confira o horário das provas de cada nível"
        className="text-zinc-950"
      >
        {/* <div className="flex items-center justify-center gap-2 rounded-md bg-blue-300 p-4">
            <Info className="h-8 w-8 text-blue-800" />
            <span className="text-base leading-relaxed">
              Ajustamos as baterias para deixar a visualização dos horários mais
              rápida e prática! <b>Ahhhhh</b>, e agora dá pra{' '}
              <b>baixar seus horários e compartilhar nas redes</b> 💚😎
            </span>
          </div> */}
        <Tabs
          defaultValue="dayOne"
          triggers={[
            { id: 'dayOne', text: 'DAY ONE' },
            { id: 'dayTwo', text: 'DAY TWO' },
            { id: 'final', text: 'FINAL' },
          ]}
        >
          <TabBatteryDayOne />
          <TabBatteryDayTwo />
          <TabBatteryFinal />
        </Tabs>
      </Section>
    </div>
  )
}
