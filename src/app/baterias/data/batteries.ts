import { Wod } from '../../(homepage)/components/WodsSection'
import wods from '../../(homepage)/data/wods.json'
import { teams } from './teams'

const BATTERY_INDEX = {
  ONE: 0,
  TWO: 1,
  FINAL: 2,
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
    .filter((t) => t.battery[BATTERY_INDEX.ONE] === battery)
    .map((team) => {
      return {
        ...team,
        battery: team.battery[BATTERY_INDEX.ONE],
        lane: team.lane[BATTERY_INDEX.ONE],
      }
    })
    .filter((t) => t.lane !== 0)
}

function getTeamsDayTwoByBattery(battery: number): TeamBattery[] | undefined {
  return teams
    .filter((t) => t.battery[BATTERY_INDEX.TWO] === battery)
    .map((team) => {
      return {
        ...team,
        battery: team.battery[BATTERY_INDEX.TWO],
        lane: team.lane[BATTERY_INDEX.TWO],
      }
    })
    .filter((t) => t.lane !== 0)
}

function getTeamsFinalByBattery(battery: number): TeamBattery[] | undefined {
  return teams
    .filter((t) => t.battery[BATTERY_INDEX.TWO] === battery)
    .map((team) => {
      return {
        ...team,
        battery: team.battery[BATTERY_INDEX.TWO],
        lane: team.lane[BATTERY_INDEX.TWO],
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
    times: ['09:00', '13:00'],
    teams: getTeamsDayTwoByBattery(1),
    fallbackText: '23° ao 20° do day one',
  },
  {
    level: 1,
    battery: 2,
    times: ['9:18', '13:10'],
    teams: getTeamsDayTwoByBattery(2),
    fallbackText: '19° ao 16° do day one',
  },
  {
    level: 1,
    battery: 3,
    times: ['9:36', '13:20'],
    teams: getTeamsDayTwoByBattery(3),
    fallbackText: '15° ao 12° do day one',
  },
  {
    level: 1,
    battery: 4,
    times: ['9:54', '13:30'],
    teams: getTeamsDayTwoByBattery(4),
    fallbackText: '11° ao 8° do day one',
  },
  {
    level: 1,
    battery: 5,
    times: ['10:12', '13:40'],
    teams: getTeamsDayTwoByBattery(5),
    fallbackText: '7° ao 4° do day one',
  },
  {
    level: 1,
    battery: 6,
    times: ['10:30', '13:50'],
    teams: getTeamsDayTwoByBattery(6),
    fallbackText: '3° ao 1° do day one',
  },
  {
    level: 2,
    battery: 7,
    times: ['10:50', '14:20'],
    teams: getTeamsDayTwoByBattery(7),
    fallbackText: '13° ao 10° do day one',
  },
  {
    level: 2,
    battery: 8,
    times: ['11:08', '14:30'],
    teams: getTeamsDayTwoByBattery(8),
    fallbackText: '9° ao 6° do day one',
  },
  {
    level: 2,
    battery: 9,
    times: ['11:26', '14:40'],
    teams: getTeamsDayTwoByBattery(9),
    fallbackText: '5° ao 2° do day one',
  },
  {
    level: [2, 3],
    battery: 10,
    times: ['11:44', '15:00'],
    teams: getTeamsDayTwoByBattery(10),
    fallbackText: '1° do nível 2 + 7° ao 5° do day one',
  },
  {
    level: 3,
    battery: 10,
    times: ['12:02', '15:10'],
    teams: getTeamsDayTwoByBattery(11),
    fallbackText: '4° ao 1° do day one',
  },
]

export const batteriesFinal = [
  {
    level: 1,
    battery: 1,
    times: ['16:00'],
    teams: getTeamsFinalByBattery(1),
    fallbackText: '1° ao 4° se classificam',
  },
  {
    level: 2,
    battery: 2,
    times: ['16:15'],
    teams: getTeamsFinalByBattery(2),
    fallbackText: '1° ao 4° se classificam',
  },
  {
    level: 3,
    battery: 3,
    times: ['16:30'],
    teams: getTeamsFinalByBattery(3),
    fallbackText: '1° ao 4° se classificam',
  },
]
