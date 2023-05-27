'use client'
import { Tab } from '@/components/Tab'
import { batteriesFinal } from '../data/batteries'
import { BatteryCard } from './BatteryCard'
import { Button } from '@/app/components/buttons/Button'
import wods from '@/app/(homepage)/data/wods.json'
import { WodsModal } from '@/app/components/WodsModal'
import { useState } from 'react'
import { Wod } from '@/app/(homepage)/components/WodsSection'

export function TabBatteryFinal() {
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
    <Tab triggerId="final">
      <div className="space-y-4">
        <span className="flex flex-wrap items-center gap-2">
          <Button
            className="border border-zinc-950"
            variant="primary"
            onClick={() => defineActiveWod(5)}
          >
            Prova 10
          </Button>
        </span>
        {batteriesFinal.map((battery) => (
          <div key={`${battery.battery}`} className="space-y-8">
            <div className="space-y-4">
              <span className="flex items-center gap-2">
                <h3 className="text-xl uppercase">Bateria {battery.battery}</h3>
                <p className="rounded-lg bg-zinc-950 px-2 py-1 text-primary">
                  Nível {battery.level}
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
