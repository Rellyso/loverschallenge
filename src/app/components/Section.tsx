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
        'w-full bg-primary p-8 md:p-16 flex flex-col gap-8',
        className,
      )}
    >
      {title && (
        <div className="w-full max-w-screen-xl flex items-center justify-between mx-auto">
          <div className="flex items-start flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-anton uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl font-normal">{subtitle}</p>
            )}
          </div>
        </div>
      )}

      <div className="w-full max-w-screen-xl flex mx-auto flex-col">
        {children}
      </div>
    </section>
  )
}
