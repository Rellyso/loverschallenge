'use client'

import { Section } from '@/app/components/Section'
import { Button } from '@/app/components/buttons/Button'
import clsx from 'clsx'
import { useState } from 'react'
import wods from '../data/wods.json'
import { WodsModal } from '@/app/components/WodsModal'

export interface Workout {
  description: string
  observations?: string[]
  reps?: number
  hasSpace?: boolean
  head?: string
}

export interface Wod {
  id: number
  name: string
  time: number
  title: string
  subtitle: string
  workout: Workout[]
  info: string[]
}

export function WodsSection() {
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
    <Section
      id="wods"
      title="Provas"
      subtitle="Dá uma olhadinha nos nossos wods"
      className={clsx(
        'min-h-screen flex-row bg-zinc-50 bg-textWhite bg-bottom bg-repeat-x text-zinc-950',
      )}
    >
      <div
        className={clsx(
          'grid grid-cols-1 gap-4',
          'md:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {wods.map((wod) => (
          <div
            key={`${wod.title}-${wod.time}`}
            className={clsx(
              'flex h-full flex-col justify-between gap-8 rounded-2xl bg-primary px-6 py-8 text-zinc-950 sm:py-12 md:gap-16',
            )}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold sm:text-3xl">{wod.name}</h3>
              <p className="text-base font-normal sm:text-xl">
                {wod.title} - {wod.time}
                {"'"}
              </p>
            </div>
            <Button
              className="w-fit bg-zinc-950 text-lg text-zinc-50 md:text-2xl"
              variant="secondary"
              onClick={() => defineActiveWod(wod.id)}
            >
              Ver prova
            </Button>
          </div>
        ))}
      </div>

      {activeWod && (
        <WodsModal
          activeWod={activeWod}
          isOpenModal={isOpenModal}
          onModalOpenChange={handleChangeModalOpen}
          setActiveWod={setActiveWod}
        />
      )}
    </Section>
  )
}
