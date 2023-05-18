import { ArrowSquareOut } from '@phosphor-icons/react'
import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  url: string
  external?: boolean
  className?: string
  icon?: ReactNode
}

export function SmartLink({ children, external, url, className, icon }: Props) {
  const regEx = /^http/

  return regEx.test(url) && !external ? (
    <Link className={className} href={url}>
      {icon}
      {children}
    </Link>
  ) : (
    <a
      className={clsx(className, 'flex gap-2')}
      href={url}
      target={external ? '_blank' : undefined}
      rel="noreferrer"
    >
      {icon}
      {children}
      {external && <ArrowSquareOut size={12} />}
    </a>
  )
}
