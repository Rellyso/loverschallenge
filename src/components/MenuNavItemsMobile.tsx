import { MenuNavItem } from './MenuNavItems'
import { NavItem } from '@/app/components/nav/NavItem'
import clsx from 'clsx'

interface MenuNavItemsProps {
  items: MenuNavItem[]
}

export function MenuNavItemsMobile({ items }: MenuNavItemsProps) {
  return (
    <div
      className={clsx(
        'visible fixed bottom-0 left-0 grid w-full grid-cols-5 place-items-center bg-zinc-950/30 px-2 shadow-sm backdrop-blur-sm transition-all md:hidden',
      )}
    >
      {items.map((item) => (
        <NavItem
          external={item.external}
          key={item.label}
          href={item.href}
          icon={item.icon}
          mobile
          label={item.label}
        />
      ))}
    </div>
  )
}
