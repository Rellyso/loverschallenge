import Logo from '@/assets/logo-white.svg'
import clsx from 'clsx'
import Image from 'next/image'

export function Footer() {
  return (
    <footer
      className={clsx(
        'relative w-full overflow-hidden',
        'border-t border-t-zinc-800',
      )}
    >
      <div className="-translate-1/2 absolute left-1/2 top-full z-0 flex h-24 w-64 items-center justify-center bg-primary blur-full" />

      <div
        className={clsx(
          'relative z-10 mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-8 md:px-16',
          'flex flex-col items-center justify-between text-zinc-300 md:flex-row md:items-center',
        )}
      >
        <div className="flex flex-col gap-1">
          <Image
            className="w-32 self-center"
            src={Logo}
            alt="Lovers Challenge logo"
          />
          <h2 className="text-base md:text-xl">Lovers Challenge</h2>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-semibold">
            Página criada com {'<3'} por{' '}
            <a
              target="_blank"
              className="underline underline-offset-2 transition-all hover:text-primary"
              href="https://instagram.com/rellysondouglaas"
              rel="noreferrer"
            >
              rellyson
            </a>
          </p>

          <p className="font-body font-semibold">
            Crie a sua também{' '}
            <a
              target="_blank"
              className="underline underline-offset-2 transition-all hover:text-primary"
              href="https://wa.me/5584996531216?text=Vim+pelo+Lovers+Challenge"
              rel="noreferrer"
            >
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
