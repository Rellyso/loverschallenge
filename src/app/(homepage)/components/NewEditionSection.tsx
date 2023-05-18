import { Section } from '@/app/components/Section'
import { Button } from '@/app/components/buttons/Button'
import clsx from 'clsx'

export function NewEditionSection() {
  return (
    <Section
      id="edition"
      title="edição 2023"
      subtitle="Maior e cheia de novidades"
      className={clsx('flex-row bg-zinc-950 text-zinc-50')}
    >
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <div>
          <span className="text-2xl font-bold md:text-5xl">80+</span>
          <p className="text-lg text-zinc-400 md:text-2xl">Atletas inscritos</p>
        </div>

        <hr className="h-[2px] w-8 rounded-full border-none bg-zinc-600 sm:h-12 sm:w-[2px]" />

        <div>
          <span className="text-2xl font-bold md:text-5xl">18</span>
          <p className="text-lg text-zinc-400 md:text-2xl">Box participantes</p>
        </div>

        <hr className="h-[2px] w-8 rounded-full border-none bg-zinc-600 sm:h-12 sm:w-[2px]" />

        <div>
          <span className="text-2xl font-bold md:text-5xl">10</span>
          <p className="text-lg text-zinc-400 md:text-2xl">Provas 🔥</p>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <hr className="h-1 w-16 border-none bg-primary" />
          <h3 className="text-lg font-bold text-primary">
            O que vou encontrar na competição?
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-full max-w-[520px] text-base font-semibold md:text-2xl">
            Cheia de novidades, esse ano contamos com 3 modalidades e 10 provas
            incríveis e desafiadoras para sua dupla!
          </p>
          <div className="flex gap-2">
            <Button variant="tertiary" asChild>
              <a href="#categories">Ver parâmetros</a>
            </Button>
            <Button
              variant="secondary"
              asChild
              // className="bg-transparent border-zinc-100 border text-zinc-100"
            >
              <a href="#wods">Ver provas</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
