import { Modal } from '@/components/Modal'
import { Wod } from '../(homepage)/components/WodsSection'
import { SetStateAction } from 'react'
import clsx from 'clsx'

interface Props {
  activeWod: Wod | null
  isOpenModal: boolean
  onModalOpenChange: (open: boolean) => void
  setActiveWod: (value: SetStateAction<Wod | null | undefined>) => void
}

export function WodsModal({
  activeWod,
  isOpenModal,
  setActiveWod,
  onModalOpenChange,
}: Props) {
  return (
    <Modal
      title={activeWod?.name as string}
      description={activeWod?.subtitle || ''}
      open={isOpenModal}
      onOpenChange={onModalOpenChange}
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
                className={clsx(exercise.hasSpace ? 'mb-8' : '', 'flex gap-2')}
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
          {activeWod?.info.map((infoItem, i) => (
            <p className="uppercase" key={`${infoItem}#${i}`}>
              - {infoItem}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  )
}
