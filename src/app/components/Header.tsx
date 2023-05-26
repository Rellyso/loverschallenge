import clsx from 'clsx'
import Image from 'next/image'
import Logo from '@/assets/logo-white.svg'
import Link from 'next/link'
import { MenuNavItem, MenuNavItems } from '@/components/MenuNavItems'
import { MenuNavItemsMobile } from '@/components/MenuNavItemsMobile'
import {
  CalendarClock,
  FileArchive,
  Home,
  Instagram,
  Trophy,
} from 'lucide-react'

const menuItems: MenuNavItem[] = [
  {
    label: 'Início',
    href: '/',
    icon: <Home />,
  },
  {
    label: 'Baterias',
    href: '/baterias',
    icon: <CalendarClock />,
  },
  {
    label: 'Classificação',
    href: '/classificacao',
    icon: <Trophy />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/crossover.lovers',
    icon: <Instagram />,
    external: true,
  },
  {
    label: 'Arquivos',
    icon: <FileArchive />,
    href: 'https://drive.google.com/drive/folders/1ZaLTIv0n-iT5q932C9SNSoV8lyTUnsWq?usp=sharing',
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
