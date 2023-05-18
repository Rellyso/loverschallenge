'use client'
import { differenceInSeconds } from 'date-fns'
import { NumberContainer } from './NumberContainer'
import { Fragment, useEffect, useState } from 'react'
import clsx from 'clsx'

const TIME_COUNT = {
  days: 60 * 60 * 24,
  hours: 60 * 60,
  minutes: 60,
  seconds: 60,
}

export function Countdown() {
  const [currentSeconds, setCurrentSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const secondsDifference = differenceInSeconds(
        new Date('05-27-2023'),
        new Date(),
      )

      setCurrentSeconds(secondsDifference)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const daysAmount = Math.floor(currentSeconds / TIME_COUNT.days)
  const restSecondsOfDaysAmount = currentSeconds % TIME_COUNT.days
  const hoursAmount = Math.floor(restSecondsOfDaysAmount / TIME_COUNT.hours)
  const restOfHoursAmount = currentSeconds % TIME_COUNT.hours
  const minutesAmount = Math.floor(restOfHoursAmount / TIME_COUNT.minutes)
  const secondsAmount = Math.floor(currentSeconds % 60)

  const counterIterator = [
    {
      key: 'Horas',
      value: hoursAmount,
    },
    {
      key: 'Minutos',
      value: minutesAmount,
    },
    {
      key: 'Segundos',
      value: secondsAmount,
    },
  ].filter(({ key, value }) => !(key === 'Dias' && value === 0))

  return (
    <div className="flex flex-col justify-end gap-2 text-right md:justify-center">
      <h2 className="text-xl font-bold sm:text-4xl">
        Começa em {daysAmount} dias
      </h2>
      <div
        className={clsx(
          'flex items-center justify-center gap-1 font-mono text-2xl font-bold leading-tight text-gray-100',
          'sm:text-4xl md:text-6xl',
        )}
      >
        {counterIterator.map(({ key, value }, i) => {
          const counterValue = String(value).padStart(2, '0')

          return (
            <Fragment key={key}>
              {i !== 0 && <div className="w-4 text-primary md:w-8">:</div>}
              <NumberContainer>{counterValue[0]}</NumberContainer>
              <NumberContainer>{counterValue[1]}</NumberContainer>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
