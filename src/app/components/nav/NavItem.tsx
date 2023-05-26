'use client'

import { ArrowSquareOut } from '@phosphor-icons/react'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface Props {
  label: ReactNode
  disabled?: boolean
  href: string
  icon?: ReactNode
  external?: boolean
  mobile?: boolean
}

export function NavItem({
  label,
  href,
  external,
  disabled,
  mobile,
  icon,
}: Props) {
  const pathname = usePathname()

  const isActiveLink = pathname === href
  const navigate = disabled ? '' : href

  return (
    <Link
      className={clsx(
        'relative before:absolute before:w-full before:content-[""]',
        'before:bottom-0 before:left-0 before:bg-primary before:transition-all',
        'flex h-full items-center gap-2 px-2 font-semibold transition-colors',
        isActiveLink ? 'before:h-[2px]' : 'before:h-0',
        disabled && 'cursor-not-allowed text-zinc-400',
        mobile && ' h-full w-full items-center justify-center p-2 py-4 sm:p-4',
        mobile && 'flex-col gap-1 text-[8px]',
        mobile && isActiveLink && 'text-primary before:h-1',
      )}
      href={navigate}
      scroll={false}
      target={external ? '_blank' : '_self'}
      passHref={external}
    >
      {mobile && icon}
      {label}
      {external && !mobile && <ArrowSquareOut size={12} />}
    </Link>
  )
}
