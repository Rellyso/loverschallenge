import { Wod } from '../../(homepage)/components/WodsSection'
import wods from '../../(homepage)/data/wods.json'

interface Team {
  id: number
  name: string
  box: string
  athletes: string[]
  level: number
  lane: number
}

const teams = [
  // bateria 1 - nível 1
  {
    id: 1,
    name: 'O bela e a fera',
    box: 'Box 490',
    athletes: ['ALDENOR', 'THAYNARA'],
    battery: 1,
    lane: 1,
    level: 1,
  },
  {
    id: 2,
    name: 'Uma barbie e meia',
    box: 'Crossover',
    athletes: ['ROBERTO', 'MARIANA'],
    level: 1,
    battery: 1,
    lane: 2,
  },
  {
    id: 3,
    name: 'IdealGraff',
    box: 'CS BOX',
    athletes: ['ALMIR', 'RENATA'],
    level: 1,
    battery: 1,
    lane: 3,
  },
  {
    id: 4,
    name: 'Meu iaiá / meu ioiô',
    box: 'Box RL',
    athletes: ['BRENDOW', 'LORENA'],
    level: 1,
    battery: 1,
    lane: 4,
  },
  {
    id: 5,
    name: 'Nervosinho e Sem Coragem',
    box: 'Box Luminus',
    athletes: ['IGOR', 'GABRIELI'],
    level: 1,
    battery: 1,
    lane: 5,
  },
  {
    id: 6,
    name: 'Só vim pelo LPO',
    box: 'Crossover',
    athletes: ['LUAN', 'VITÓRIA'],
    level: 1,
    battery: 1,
    lane: 6,
  },
  // bateria 2 - nível 1
  {
    id: 7,
    name: 'Irmãos metralha',
    athletes: ['Carlos', 'Liandra'],
    box: 'Box TEC',
    level: 1,
    battery: 2,
    lane: 1,
  },
  {
    id: 8,
    name: 'Cadê o café?',
    athletes: ['Carvalhos', 'Isnayara'],
    box: 'Sertão e CT58',
    level: 1,
    battery: 2,
    lane: 2,
  },
  {
    id: 9,
    name: 'Unidos no amor e no WÓDio',
    athletes: ['José Gonçalo', 'Giovanna'],
    box: 'Box 030',
    level: 1,
    battery: 2,
    lane: 3,
  },
  {
    id: 10,
    name: 'De última hora',
    athletes: ['Paulo', 'Yascara'],
    box: 'Coliseu e Pardus',
    level: 1,
    battery: 2,
    lane: 4,
  },
  {
    id: 11,
    name: 'Se gritar eu faço',
    athletes: ['Eduardo', 'Mariana'],
    box: 'Box Selva',
    level: 1,
    battery: 2,
    lane: 5,
  },
  {
    id: 12,
    name: 'A Bela e a Fera',
    athletes: ['Guilherme', 'Ingrid'],
    box: 'Box TEC',
    level: 1,
    battery: 2,
    lane: 6,
  },
  // Bateria 3 - Nível 1
  {
    id: 13,
    name: 'Biscoiteiros',
    athletes: ['Alexandre', 'Maria Luiza'],
    box: 'Box TEC',
    level: 1,
    battery: 3,
    lane: 1,
  },
  {
    id: 14,
    name: 'Me espere',
    athletes: ['Samuel', 'Suiane'],
    box: 'Box 030',
    level: 1,
    battery: 3,
    lane: 2,
  },
  {
    id: 15,
    name: 'Só vim pela camisa',
    athletes: ['Francisco Carlos', 'Maria Giselle'],
    box: 'Box 490',
    level: 1,
    battery: 3,
    lane: 3,
  },
  {
    id: 16,
    name: 'Team Alfa Performance',
    athletes: ['Pedro', 'Thalia'],
    box: 'One Cross',
    level: 1,
    battery: 3,
    lane: 4,
  },
  {
    id: 17,
    name: 'Boxtecmeuamô',
    athletes: ['Pedro', 'Monica'],
    box: 'Box TEC',
    level: 1,
    battery: 3,
    lane: 5,
  },
  {
    id: 18,
    name: 'M&Ms',
    athletes: ['João Victor', 'Mariana'],
    box: 'Box TEC',
    level: 1,
    battery: 3,
    lane: 6,
  },
  // Bateria 4 - Nível 1
  {
    id: 19,
    name: 'Pedro e Bianca',
    athletes: ['Pedro', 'Bianca'],
    box: 'Crossover',
    level: 1,
    battery: 4,
    lane: 1,
  },
  {
    id: 20,
    name: '100% héteros',
    athletes: ['Jamerson', 'Denyse'],
    box: 'Camaleão',
    level: 1,
    battery: 4,
    lane: 2,
  },
  {
    id: 21,
    name: 'Team Guepardus',
    athletes: ['Alberto', 'Lara'],
    box: 'Box Pardus',
    level: 1,
    battery: 4,
    lane: 3,
  },
  {
    id: 22,
    name: 'Poli&Chinelo',
    athletes: ['Raellyson', 'Ilana'],
    box: 'Box 490 e Box Tec',
    level: 1,
    battery: 4,
    lane: 4,
  },
  {
    id: 23,
    name: 'Team Coliseu',
    athletes: ['Mizael', 'Lara'],
    box: 'Coliseu',
    level: 1,
    battery: 4,
    lane: 5,
  },
  {
    id: 24,
    name: 'Vivemos para se divertir',
    athletes: ['Sávio', 'Francisca Dara'],
    box: 'Box 490',
    level: 1,
    battery: 4,
    lane: 6,
  },
  // bateria 5 - Nível 2
  {
    id: 25,
    name: 'AMRAPendido',
    athletes: ['Guilherme', 'Melissa'],
    box: 'Heroes e 030',
    level: 2,
    battery: 5,
    lane: 1,
  },
  {
    id: 26,
    name: 'As Cabras (030)',
    athletes: ['Erick Cassiano', 'Oskarine'],
    box: 'Box 030',
    level: 2,
    battery: 5,
    lane: 2,
  },
  {
    id: 27,
    name: 'OnLion',
    athletes: ['Pedro Lucas', 'Francisca'],
    box: 'Box Selva e Sertão',
    level: 2,
    battery: 5,
    lane: 3,
  },
  {
    id: 28,
    name: 'Cobaias do Sertão',
    athletes: ['Pedro Lucas', 'Francisca'],
    box: 'Sertão',
    level: 2,
    battery: 5,
    lane: 4,
  },
  {
    id: 29,
    name: 'Creatina e BetaAlanina',
    athletes: ['José Flávio', 'Renata'],
    box: 'Box 490',
    level: 2,
    battery: 5,
    lane: 5,
  },
  {
    id: 30,
    name: 'Máquina e Motor',
    athletes: ['Francisco Lucas', 'Benise Lima'],
    box: 'Box 490',
    level: 2,
    battery: 5,
    lane: 6,
  },
  // Bateria 6 - Nível 2
  {
    id: 31,
    name: 'CJN30',
    athletes: ['Vital Bruno', 'Ruby'],
    box: 'Box 030',
    level: 2,
    battery: 6,
    lane: 1,
  },
  {
    id: 32,
    name: 'Team no limite',
    athletes: ['Aildo', 'Nyáskara'],
    box: 'Box 030',
    level: 2,
    battery: 6,
    lane: 2,
  },
  {
    id: 33,
    name: 'Black e White',
    athletes: ['João Paulo', 'Ana Alícia'],
    box: 'Armazém Box',
    level: 2,
    battery: 6,
    lane: 3,
  },
  {
    id: 34,
    name: 'Os cunhados',
    athletes: ['Tarlean', 'Stefanny'],
    box: 'Crossover',
    level: 2,
    battery: 6,
    lane: 4,
  },
  {
    id: 35,
    name: 'Perdidos de tudo!',
    athletes: ['Felipe', 'Clarissa'],
    box: 'Box Santa',
    level: 2,
    battery: 6,
    lane: 5,
  },
  {
    id: 36,
    name: 'Casal subimarino',
    athletes: ['Alisson', 'Magda'],
    box: 'Box 490',
    level: 2,
    battery: 6,
    lane: 6,
  },
  // Bateria 7 - Nível 3
  {
    id: 37,
    name: 'Rivo & Trill',
    athletes: ['Christiano', 'Dayane'],
    box: 'Box 786',
    level: 3,
    battery: 7,
    lane: 1,
  },
  {
    id: 38,
    name: 'COFFEE LOVERS',
    athletes: ['Diego Fred', 'Eduarda'],
    box: 'Box Santa',
    level: 3,
    battery: 7,
    lane: 2,
  },
  {
    id: 39,
    name: 'PardusPHS',
    athletes: ['Layo Lano', 'Roberta'],
    box: 'Pardus',
    level: 3,
    battery: 7,
    lane: 3,
  },
  {
    id: 40,
    name: 'Biscoito e Tiktok',
    athletes: ['Talyson', 'Victoria'],
    box: 'Box TEC',
    level: 3,
    battery: 7,
    lane: 4,
  },
  {
    id: 41,
    name: 'Depois de Aracati foi só ladeira',
    athletes: ['André', 'Cynthia'],
    box: 'Demacia e One Cross',
    level: 3,
    battery: 7,
    lane: 5,
  },
  {
    id: 42,
    name: 'Team Pardus',
    athletes: ['Lucas Ericles', 'Amanda'],
    box: 'Pardus e Luminus',
    level: 3,
    battery: 7,
    lane: 6,
  },
  {
    id: 43,
    name: 'Café com Leite',
    athletes: ['Lucas Gabriel', 'Gabrielle'],
    box: 'CT 786',
    level: 3,
    battery: 7,
    lane: 7,
  },
]

function getTeamsByBattery(battery: number): Team[] {
  return teams.filter((t) => t.battery === battery)
}

export function getWodById(wodId: number): Wod {
  return wods.find((wod) => wod.id === wodId) as Wod
}

export const wodBatteries = [
  {
    wodId: 1,
    times: [
      {
        level: 1,
        battery: 1,
        time: '15:30',
        teams: getTeamsByBattery(1),
      },
      {
        level: 1,
        battery: 2,
        time: '15:43',
        teams: getTeamsByBattery(2),
      },
      {
        level: 1,
        battery: 3,
        time: '15:56',
        teams: getTeamsByBattery(3),
      },
      {
        level: 1,
        battery: 4,
        time: '16:09',
        teams: getTeamsByBattery(4),
      },
      {
        level: 2,
        battery: 5,
        time: '16:22',
        teams: getTeamsByBattery(5),
      },
      {
        level: 2,
        battery: 6,
        time: '16:35',
        teams: getTeamsByBattery(6),
      },
      {
        level: 3,
        time: '16:48',
        battery: 7,
        teams: getTeamsByBattery(7),
      },
    ],
  },
  {
    wodId: 2,
    times: [
      {
        level: 1,
        time: '17:15',
        battery: 1,
        teams: getTeamsByBattery(1),
      },
      {
        level: 1,
        time: '17:30',
        battery: 2,
        teams: getTeamsByBattery(2),
      },
      {
        level: 1,
        time: '17:45',
        battery: 3,
        teams: getTeamsByBattery(3),
      },
      {
        level: 1,
        time: '18:00',
        battery: 4,
        teams: getTeamsByBattery(4),
      },
      {
        level: 2,
        time: '18:15',
        battery: 5,
        teams: getTeamsByBattery(5),
      },
      {
        level: 2,
        time: '18:30',
        battery: 6,
        teams: getTeamsByBattery(6),
      },
      {
        level: 3,
        time: '18:45',
        battery: 7,
        teams: getTeamsByBattery(7),
      },
    ],
  },
  {
    wodId: 4,
    times: [
      {
        level: 1,
        battery: 1,
        time: '19:15',
        teams: getTeamsByBattery(1),
      },
      {
        level: 1,
        time: '19:30',
        battery: 2,
        teams: getTeamsByBattery(2),
      },
      {
        level: 1,
        time: '19:45',
        battery: 3,
        teams: getTeamsByBattery(3),
      },
      {
        level: 1,
        time: '20:00',
        battery: 4,
        teams: getTeamsByBattery(4),
      },
      {
        level: 2,
        time: '20:15',
        battery: 5,
        teams: getTeamsByBattery(5),
      },
      {
        level: 2,
        time: '20:30',
        battery: 6,
        teams: getTeamsByBattery(6),
      },
      {
        level: 3,
        time: '20:45',
        battery: 7,
        teams: getTeamsByBattery(7),
      },
    ],
  },
]