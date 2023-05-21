'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Logo from '@/assets/logo-white.svg'
import Link from 'next/link'
import { MenuNavItem, MenuNavItems } from '@/components/MenuNavItems'
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { MenuNavItemsMobile } from '@/components/MenuNavItemsMobile'

const menuItems: MenuNavItem[] = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Baterias',
    href: '/baterias',
  },
  {
    label: 'Leadboard',
    href: '/classificacao',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/crossover.lovers',
    icon: <InstagramLogo />,
    external: true,
  },
  {
    label: 'Grupo atletas',
    icon: <WhatsappLogo />,
    href: 'https://chat.whatsapp.com/Dk05DuNxkYtIuMTeQvnyOh?fbclid=PAAaZgE1xY3dpmtj3o1SRVh6cbJP5kC1Y3ZcYCez8G9cA_MRu6TRgX-8NZVTE',
    external: true,
  },
]

export function Header() {
  return (
    <header
      className={clsx(
        'absolute left-0 top-0 z-50 flex h-16 w-full items-center px-8 md:px-16',
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Lovers Challenge logo" />
        </Link>

        <MenuNavItemsMobile items={menuItems} />
        <MenuNavItems items={menuItems} />
      </div>
    </header>
  )
}
