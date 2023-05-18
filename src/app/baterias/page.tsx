import Image from 'next/image'
import LogoPrimary from '../../assets/logo-primary.svg'

export default function Schedules() {
  return (
    <div className="z-10 flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="absolute flex h-56 w-56 items-center justify-center bg-primary blur-full" />
      <div className="z-10 flex flex-col items-center space-y-4">
        <Image src={LogoPrimary} alt="Logo lovers challenge" />
        <h1 className="font-anton text-2xl">Em breve!</h1>
      </div>
    </div>
  )
}
