'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  disabled?: boolean
  href: string
  external?: boolean
}

export function NavItem({ children, href, external, disabled }: Props) {
  const pathname = usePathname()

  const isActiveLink = pathname === href
  const navigate = disabled ? '' : href

  return (
    <Link
      className={clsx(
        'relative before:absolute before:w-full before:content-[""]',
        'before:bottom-0 before:left-0 before:bg-primary before:transition-all',
        'flex h-full items-center gap-2 px-2 font-semibold',
        isActiveLink ? 'before:h-[2px]' : 'before:h-0',
        disabled && 'cursor-not-allowed text-zinc-400',
      )}
      href={navigate}
      scroll={false}
      target={external ? '_blank' : '_self'}
      passHref={external}
    >
      {children}
      {external && <ArrowSquareOut size={12} />}
    </Link>
  )
}
