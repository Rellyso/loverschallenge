import { Wod } from '../../(homepage)/components/WodsSection'
import wods from '../../(homepage)/data/wods.json'
import { teams } from './teams'

const BATTERY_DAY_INDEX = {
  ONE: 0,
  TWO: 1,
}

export interface Team {
  id: number
  name: string
  box: string
  athletes: string[]
  level: number
  lane: number[]
  battery: number[]
}

export interface TeamBattery {
  id: number
  name: string
  box: string
  athletes: string[]
  level: number
  lane: number
}

function getTeamsDayOneByBattery(battery: number): TeamBattery[] | undefined {
  return teams
    .filter((t) => t.battery[BATTERY_DAY_INDEX.ONE] === battery)
    .map((team) => {
      return {
        ...team,
        battery: team.battery[BATTERY_DAY_INDEX.ONE],
        lane: team.lane[BATTERY_DAY_INDEX.ONE],
      }
    })
    .filter((t) => t.lane !== 0)
}

function getTeamsDayTwoByBattery(battery: number): TeamBattery[] | undefined {
  return teams
    .filter((t) => t.battery[BATTERY_DAY_INDEX.TWO] === battery)
    .map((team) => {
      return {
        ...team,
        battery: team.battery[BATTERY_DAY_INDEX.TWO],
        lane: team.lane[BATTERY_DAY_INDEX.TWO],
      }
    })
    .filter((t) => t.lane !== 0)
}

export function getWodById(wodId: number): Wod {
  return wods.find((wod) => wod.id === wodId) as Wod
}

export const batteriesDayOne = [
  {
    level: 1,
    battery: 1,
    times: ['15:30', '17:15', '19:15'],
    teams: getTeamsDayOneByBattery(1),
  },
  {
    level: 1,
    battery: 2,
    times: ['15:43', '17:30', '19:30'],
    teams: getTeamsDayOneByBattery(2),
  },
  {
    level: 1,
    battery: 3,
    times: ['15:56', '17:45', '19:45'],
    teams: getTeamsDayOneByBattery(3),
  },
  {
    level: 1,
    battery: 4,
    times: ['15:56', '18:00', '20:00'],
    teams: getTeamsDayOneByBattery(4),
  },
  {
    level: 2,
    battery: 5,
    times: ['16:22', '18:15', '20:15'],
    teams: getTeamsDayOneByBattery(5),
  },
  {
    level: 2,
    battery: 6,
    times: ['16:35', '18:30', '20:30'],
    teams: getTeamsDayOneByBattery(6),
  },
  {
    level: 3,
    times: ['16:48', '18:45', '20:45'],
    battery: 7,
    teams: getTeamsDayOneByBattery(7),
  },
]

export const batteriesDayTwo = [
  {
    level: 1,
    battery: 1,
    times: ['09:00', '13:00', '16:00'],
    teams: getTeamsDayTwoByBattery(1),
  },
  {
    level: 1,
    battery: 2,
    times: ['9:18', '17:30', '19:30'],
    teams: getTeamsDayTwoByBattery(2),
  },
  {
    level: 1,
    battery: 3,
    times: ['15:56', '17:45', '19:45'],
    teams: getTeamsDayTwoByBattery(3),
  },
  {
    level: 1,
    battery: 4,
    times: ['15:56', '18:00', '20:00'],
    teams: getTeamsDayTwoByBattery(4),
  },
  {
    level: 2,
    battery: 5,
    times: ['16:22', '18:15', '20:15'],
    teams: getTeamsDayTwoByBattery(5),
  },
  {
    level: 2,
    battery: 6,
    times: ['16:35', '18:30', '20:30'],
    teams: getTeamsDayTwoByBattery(6),
  },
  {
    level: 3,
    times: ['16:48', '18:45', '20:45'],
    battery: 7,
    teams: getTeamsDayTwoByBattery(7),
  },
]
