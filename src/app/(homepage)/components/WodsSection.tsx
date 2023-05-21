'use client'

import { Section } from '@/app/components/Section'
import { Button } from '@/app/components/buttons/Button'
import { Modal } from '@/components/Modal'
import clsx from 'clsx'
import { useState } from 'react'
import wods from '../data/wods.json'

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
            key={wod.title}
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

      <Modal
        title={activeWod?.name as string}
        description={activeWod?.subtitle || ''}
        open={isOpenModal}
        onOpenChange={setIsOpenModal}
        onDismiss={() => setActiveWod(null)}
      >
        <div className="mt-6 flex flex-col gap-4 rounded-2xl px-6 text-zinc-100">
          <span className="self-center bg-zinc-200 px-1 text-2xl font-extrabold text-zinc-950">
            {activeWod?.title} - {activeWod?.time}
            {"'"}
          </span>
          <div className="flex flex-col gap-2 text-lg">
            {activeWod?.workout.map((exercise, i) => (
              <div
                className="flex flex-col gap-2"
                key={`${exercise.description}-${i}`}
              >
                {exercise.head && (
                  <span className="w-fit bg-primary px-1 text-sm font-semibold italic text-zinc-950">
                    {exercise.head}
                  </span>
                )}
                <div
                  className={clsx(
                    exercise.hasSpace ? 'mb-8' : '',
                    'flex gap-2',
                  )}
                >
                  {exercise.reps && (
                    <p className="text-xl font-semibold">{exercise.reps}</p>
                  )}
                  <span className="text-xl font-normal uppercase">
                    {exercise.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <span className="mt-8 self-center bg-primary px-1 text-xl font-extrabold text-zinc-950">
            INFO
          </span>

          <div className="flex flex-col gap-2 text-base">
            {activeWod?.info.map((infoItem) => (
              <p className="uppercase" key={infoItem}>
                - {infoItem}
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </Section>
  )
}
