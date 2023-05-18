'use client'

import clsx from 'clsx'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowSquareOut } from '@phosphor-icons/react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  disabled?: boolean
}

export function NavItemExternal({ children, ...props }: Props) {
  return (
    <a
      className={clsx(
        'relative before:absolute before:w-full before:content-[""]',
        'before:bottom-0 before:left-0 before:bg-primary before:transition-all',
        'underline-offset-2 hover:underline',
        'flex h-full items-center px-2 font-semibold',
        'flex flex-nowrap gap-2',
        'text-xs md:text-base',
      )}
      {...props}
    >
      {children}
      <ArrowSquareOut weight="fill" className="text-xs md:text-base" />
    </a>
  )
}
