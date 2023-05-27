'use client'

import { Tab } from '@/components/Tab'
import { batteriesDayTwo } from '../data/batteries'
import { BatteryCard } from './BatteryCard'
import { Button } from '@/app/components/buttons/Button'
import { useState } from 'react'
import { Wod } from '@/app/(homepage)/components/WodsSection'
import wods from '@/app/(homepage)/data/wods.json'
import { WodsModal } from '@/app/components/WodsModal'

export function TabBatteryDayTwo() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [activeWod, setActiveWod] = useState<Wod | null>()

  function handleChangeModalOpen(open: boolean) {
    setIsOpenModal(open)
  }

  const defineActiveWod = (id: number) => {
    if (id === activeWod?.id) {
      setActiveWod(null)
    } else {
      const activeWodShowing = wods.find((item) => item.id === id)
      setActiveWod(activeWodShowing as Wod)
      setIsOpenModal(true)
    }
  }

  return (
    <Tab triggerId="dayTwo">
      <div className="relative space-y-4">
        <span className="flex flex-wrap items-center gap-2">
          <Button
            className="border border-zinc-950"
            variant="primary"
            onClick={() => defineActiveWod(4)}
          >
            Provas 6 e 7
          </Button>
          <Button
            className="border border-zinc-950"
            variant="primary"
            onClick={() => defineActiveWod(5)}
          >
            Provas 8 e 9
          </Button>
        </span>
        {batteriesDayTwo.map((battery) => (
          <div key={`${battery.battery}`} className="space-y-8">
            <div className="space-y-4">
              <span className="flex items-center gap-2">
                <h3 className="text-xl uppercase">Bateria {battery.battery}</h3>
                <p className="rounded-lg bg-zinc-950 px-2 py-1 text-primary">
                  Nível{' '}
                  {typeof battery.level === 'number'
                    ? battery.level
                    : battery.level.join(', ')}
                </p>
              </span>
              <BatteryCard
                times={battery.times}
                teams={battery.teams}
                battery={battery.battery}
                fallbackText={battery.fallbackText}
              />
            </div>
          </div>
        ))}
      </div>
      <WodsModal
        activeWod={activeWod || null}
        isOpenModal={isOpenModal}
        onModalOpenChange={handleChangeModalOpen}
        setActiveWod={setActiveWod}
      />
    </Tab>
  )
}
