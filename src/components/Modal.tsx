import { Transition } from '@headlessui/react'
import { X } from '@phosphor-icons/react'
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
  confirmMessage?: string
  title: string
  description: string
  onConfirm?: () => void
  cancelMessage?: string
  onDismiss?: () => void
  className?: string
}

export function Modal({
  title,
  children,
  cancelMessage,
  confirmMessage,
  onConfirm,
  description,
  open,
  onOpenChange,
  onDismiss,
  className,
  ...props
}: Props) {
  const handleDismiss = () => {
    onDismiss?.()
    onOpenChange?.(false)
  }

  return (
    <Root open={open} onOpenChange={onOpenChange} {...props}>
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
          <Overlay
            onPointerDown={handleDismiss}
            forceMount
            className="fixed inset-0 z-20 bg-black/50"
          />
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
            onEscapeKeyDown={handleDismiss}
            className={clsx(
              'fixed z-50',
              'w-[95vw] max-w-lg rounded-lg px-4 py-8 md:max-w-2xl md:px-6 md:py-12',
              'left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
              'bg-zinc-950',
              'border-px border border-zinc-700',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
              className,
            )}
          >
            <X
              size={24}
              weight="bold"
              className="absolute right-2 top-2 cursor-pointer rounded-full p-1 text-zinc-100 hover:bg-zinc-200/30"
              onClick={handleDismiss}
            />

            <Title className="text-2xl font-extrabold text-zinc-50 md:text-4xl">
              {title}
            </Title>
            <Description className="my-1 text-sm font-normal text-zinc-300 md:text-base">
              {description}
            </Description>

            {children}

            {confirmMessage && (
              <>
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
              </>
            )}
          </Content>
        </Transition.Child>
      </Transition.Root>
    </Root>
  )
}
