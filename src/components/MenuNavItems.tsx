'use client'

import clsx from 'clsx'
import { ReactNode } from 'react'
import { NavItem } from '@/app/components/nav/NavItem'

export interface MenuNavItem {
  label: string
  shortcut?: string
  icon?: ReactNode
  href: string
  external?: boolean
}

interface MenuNavItemsProps {
  items: MenuNavItem[]
}

export function MenuNavItems({ items }: MenuNavItemsProps) {
  return (
    <div className={clsx('hidden h-full items-center gap-4 md:flex')}>
      {items.map((item) => {
        return (
          <NavItem
            external={item.external}
            key={`${item.label}`}
            href={item.href}
            label={item.label}
          />
        )
      })}
    </div>
  )
}
