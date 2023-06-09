import { Transition } from '@headlessui/react'
import {
  Action,
  AlertDialogProps,
  Cancel,
  Content,
  Description,
  Overlay,
  Root,
  Title,
} from '@radix-ui/react-alert-dialog'
import clsx from 'clsx'
import { Fragment } from 'react'

interface Props extends AlertDialogProps {
  confirmMessage: string
  title: string
  description: string
  onConfirm?: () => void
  cancelMessage?: string
}

export function AlertDialog({
  title,
  children,
  cancelMessage,
  confirmMessage,
  onConfirm,
  description,
  open,
  onOpenChange,
  ...props
}: Props) {
  return (
    <Root open={open} onOpenChange={onOpenChange} {...props}>
      {/* <Trigger asChild>{children}</Trigger> */}
      <Transition.Root show={open} className="absolute">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Overlay forceMount className="fixed inset-0 z-20 bg-black/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Content
            className={clsx(
              'fixed z-50',
              'w-[95vw] max-w-md rounded-lg p-4 md:w-full',
              'left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
              'bg-white dark:bg-gray-500',
              'border-px border border-gray-400',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
            )}
          >
            <Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {title}
            </Title>
            <Description className="mt-2 py-4 text-sm font-normal text-gray-700 dark:text-gray-300">
              {description}
            </Description>
            <div className="mt-4 flex justify-end gap-2">
              <Cancel
                className={clsx(
                  'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                  'bg-gray-500 text-white transition-colors hover:bg-gray-400',
                  'border border-transparent',
                  'focus-visible:ring-blue focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
                )}
              >
                {cancelMessage || 'Cancelar'}
              </Cancel>
              <Action
                onClick={onConfirm}
                className={clsx(
                  'bg-zinc-900 text-gray-200 transition-colors hover:brightness-105',
                  'rounded-md px-2 py-1 font-semibold',
                  'focus-visible:ring-blue ring-offset-2 ring-offset-gray-500 focus:outline-none focus-visible:ring',
                )}
              >
                {confirmMessage}
              </Action>
            </div>
          </Content>
        </Transition.Child>
      </Transition.Root>
    </Root>
  )
}
