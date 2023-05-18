'use client'

import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  asChild?: boolean
}

export function Button({
  className,
  variant = 'primary',
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'rounded-md px-2 py-1 text-sm font-bold transition-all sm:px-4 sm:py-2 md:text-base',
        'flex items-center gap-1 ring-offset-2 ring-offset-black hover:opacity-80 focus:ring-1',
        variant === 'primary' && 'bg-primary text-zinc-900 ring-primary',
        variant === 'secondary' &&
          'border border-primary text-primary ring-primary ring-offset-0',
        variant === 'tertiary' && 'bg-gray-50 text-zinc-900 ring-gray-50',
        className,
      )}
      {...props}
    />
  )
}
