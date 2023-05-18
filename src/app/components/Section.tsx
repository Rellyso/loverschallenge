import clsx from 'clsx'
import { ReactNode } from 'react'

interface SectionProps {
  title?: string
  subtitle?: string
  id?: string
  className?: string
  children: ReactNode
}

export function Section({
  children,
  title,
  id,
  className,
  subtitle,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'flex w-full flex-col gap-8 bg-primary p-8 md:p-16',
        className,
      )}
    >
      {title && (
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-anton text-4xl uppercase md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg font-normal md:text-xl">{subtitle}</p>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        {children}
      </div>
    </section>
  )
}
