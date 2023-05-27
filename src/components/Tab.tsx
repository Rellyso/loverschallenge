'use client'

import { Content } from '@radix-ui/react-tabs'
import { ReactNode } from 'react'

export interface TabProps {
  triggerId: string
  children: ReactNode
}

export function Tab(props: TabProps) {
  return (
    <Content
      className="grow rounded-b-md pt-5 outline-none"
      value={props.triggerId}
    >
      {props.children}
    </Content>
  )
}
