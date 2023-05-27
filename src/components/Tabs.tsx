'use client'

import * as T from '@radix-ui/react-tabs'
import { ReactElement } from 'react'
import { TabProps } from './Tab'
import clsx from 'clsx'

export interface ITrigger {
  id: string
  text: string
}

interface TabsProps {
  defaultValue: string
  triggers: ITrigger[]
  children: ReactElement<TabProps>[] | ReactElement<TabProps>
}

export function Tabs(props: TabsProps) {
  return (
    <T.Root
      defaultValue={props.defaultValue}
      className="shadow-blackA4 flex min-h-[500px] flex-col"
    >
      <T.List className="flex shrink-0 border-b border-primary-dark">
        {props.triggers.map((trigger) => (
          <T.Trigger
            key={trigger.id}
            value={trigger.id}
            className={clsx(
              'text-zinc-950 data-[state=active]:font-bold',
              // 'hover:bg-zinc-950 data-[state=active]:bg-zinc-950 hover:text-primary',
              'flex h-[45px] flex-1 cursor-default select-none items-center justify-center',
              'px-5 text-[15px] leading-none outline-none',
              'first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]',
              // 'transition-colors',
            )}
          >
            {trigger.text}
          </T.Trigger>
        ))}
      </T.List>
      {props.children}
    </T.Root>
  )
}
