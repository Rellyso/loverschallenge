'use client'

import * as DropMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { ArrowSquareOut, List } from '@phosphor-icons/react'
import { MenuNavItem } from './MenuNavItems'
import Link from 'next/link'

interface MenuNavItemsProps {
  items: MenuNavItem[]
}

export function MenuNavItemsMobile({ items }: MenuNavItemsProps) {
  return (
    <DropMenu.Root modal={false}>
      <DropMenu.Trigger asChild>
        <List
          className="flex h-8 w-8 cursor-pointer rounded-md bg-zinc-950 p-1 text-zinc-50 transition-colors hover:bg-zinc-800 md:hidden"
          weight="bold"
        />
      </DropMenu.Trigger>
      <DropMenu.Portal>
        <DropMenu.Content
          align="end"
          sideOffset={5}
          className={clsx(
            'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
            'border border-zinc-800 bg-zinc-950',
          )}
        >
          {items.map(({ label, icon, href, external }, i) => (
            <DropMenu.Item
              asChild
              key={`${label}-${i}`}
              className={clsx(
                'text-md flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-2 outline-none',
                'text-zinc-300 focus:bg-zinc-900',
                'hover:bg-zinc-900',
              )}
            >
              {href ? (
                <Link
                  className="flex-grow space-x-1 text-zinc-300"
                  href={href}
                  target={external ? '_blank' : '_self'}
                >
                  {icon}
                  {label}
                  {external && <ArrowSquareOut size={12} />}
                </Link>
              ) : (
                <span className="flex-grow text-zinc-300">
                  {icon}
                  {label}
                </span>
              )}
            </DropMenu.Item>
          ))}
          <DropMenu.Item />

          <DropMenu.Arrow className="text-zinc-950" />
        </DropMenu.Content>
      </DropMenu.Portal>
    </DropMenu.Root>
  )
}
