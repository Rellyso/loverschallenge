import { ReactNode } from 'react'

interface NumberContainerProps {
  children: ReactNode
}

export function NumberContainer({ children }: NumberContainerProps) {
  return <span className="bg-zinc-900 py-1 px-2 rounded-md">{children}</span>
}
