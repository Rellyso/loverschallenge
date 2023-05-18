import { ReactNode } from 'react'

interface NumberContainerProps {
  children: ReactNode
}

export function NumberContainer({ children }: NumberContainerProps) {
  return <span className="rounded-md bg-zinc-900 px-2 py-1">{children}</span>
}
