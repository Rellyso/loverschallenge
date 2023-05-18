'use client'

import { Section } from '@/app/components/Section'
import { Button } from '@/app/components/buttons/Button'
import clsx from 'clsx'
import data from '../data/parameters.json'
import { Fragment, useState } from 'react'
import { Modal } from '@/components/Modal'

import arrowsUp from '@/assets/arrows-up.svg'
import Image from 'next/image'

interface ParameterLevel {
  level: number
  description: string
  parameters: {
    exercise: string
    info: string
  }[]
  gymnastic: {
    exercise: string
    info: string
  }[]
}

export function CategoriesSection() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [activeParameterLevel, setActiveParameterLevel] =
    useState<ParameterLevel | null>()

  const defineActiveParameterLevel = (level: number) => {
    if (level === activeParameterLevel?.level) {
      setActiveParameterLevel(null)
    } else {
      const activeParameter = data.find((item) => item.level === level)
      setActiveParameterLevel(activeParameter)
      setIsOpenModal(true)
    }
  }

  return (
    <Section
      id="categories"
      title="Categorias"
      subtitle="Conheça as categorias da edição 2023"
      className={clsx(
        'relative min-h-screen bg-textGreen bg-bottom bg-repeat-x text-zinc-900',
      )}
    >
      <Image
        className="absolute -bottom-20 right-6"
        src={arrowsUp}
        alt="setas para cima"
      />

      <div
        className={clsx(
          'grid grid-cols-1 gap-4',
          'md:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {data.map(({ level, description }) => (
          <div
            key={level}
            className={clsx(
              'flex h-full flex-col justify-between gap-8 rounded-2xl bg-zinc-950 px-6 py-8 sm:py-12 md:gap-16',
            )}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-extrabold text-zinc-50 sm:text-4xl">
                Nível {level}
              </h3>
              <p className="text-base font-normal text-zinc-50 sm:text-xl">
                {description}
              </p>
            </div>
            <Button
              className="w-fit text-lg md:text-2xl"
              variant="tertiary"
              onClick={() => defineActiveParameterLevel(level)}
            >
              Ver parâmetros
            </Button>
          </div>
        ))}
      </div>

      <Modal
        title="Parâmetros"
        description={`Nível ${activeParameterLevel?.level}`}
        open={isOpenModal}
        onOpenChange={setIsOpenModal}
        onDismiss={() => setActiveParameterLevel(null)}
      >
        <div className="flex flex-col gap-4 rounded-2xl px-6 py-12 text-zinc-100">
          <h3 className="text-4xl font-extrabold text-zinc-50">
            Nível {activeParameterLevel?.level}
          </h3>
          <div className="grid grid-cols-2 gap-1 text-lg">
            <span></span>
            <span className="w-min bg-zinc-50 px-1 font-semibold text-zinc-950">
              M/F
            </span>
            {activeParameterLevel?.parameters.map((parameter) => (
              <Fragment key={parameter.exercise}>
                <p>{parameter.exercise}</p>
                <span className="font-semibold">{parameter.info}</span>
              </Fragment>
            ))}
          </div>

          <span className="w-min bg-zinc-50 px-1 text-xl font-semibold text-zinc-950">
            GINÁSTICOS
          </span>

          <div className="grid grid-cols-2 gap-1">
            {activeParameterLevel?.gymnastic.map((gym) => (
              <Fragment key={gym.exercise}>
                <p>{gym.exercise}</p>
                <span className="font-semibold">{gym.info}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </Modal>
    </Section>
  )
}
