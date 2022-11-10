import { CharactersType } from "../../../types/D&D.type";

export let characters: CharactersType[] = [
    {
      Id: 1,
      name: 'Takar',
      age: '61 anos e cabeça de 19',
      role: "Bruxo",
      life: 54,
      lifeDice: '7d8',
      desc: "Um meio orc vindo da realeza de mor-oka e tem vivodo como um mercenario em busca de respostas após virar um bruxo",
      armor: 16,
      displacement: '9m/29ft',
      initiative: 1,
      surname: 'Yuchiga',
      mainAtributes: [
        {
          name: 'Força',
          counter: 2,
          passive: 14
        },
        {
          name: 'Destreza',
          counter: 1,
          passive: 11,
        },
        {
          name: 'Constituição',
          counter: 2,
          passive: 15
        },
        {
          name: 'Inteligência',
          counter: 2,
          passive: 14,
        },
        {
          name: 'Sabedoria',
          counter: -2,
          passive: 7
        },
        {
          name: 'Carisma',
          counter: 4,
          passive: 18
        }

      ],
      skills: [{
        name:  'Acrobacia',
        adder: 1,
        atribute: 'DES',
        id: 1,
        proeficiency: false
      },
      {
        name:  'Arcanismo',
        adder: 5,
        atribute: 'INT',
        id: 2,
        proeficiency: true
      },
      {
        name:  'Atletismo',
        adder: 5,
        atribute: 'FOR',
        id: 3,
        proeficiency: true
      },
      {
        name:  'Atuação',
        adder: 1,
        atribute: 'CAR',
        id: 4,
        proeficiency: false
      },
      {
        name:  'Enganação',
        adder: 1,
        atribute: 'CAR',
        id: 5,
        proeficiency: false
      },
      {
        name:  'Furtividade',
        adder: 1,
        atribute: 'DES',
        id: 6,
        proeficiency: false
      },
      {
        name:  'História',
        adder: 2,
        atribute: 'INT',
        id: 7,
        proeficiency: false
      },
      {
        name:  'Intimidação',
        adder: 7,
        atribute: 'CAR',
        id: 8,
        proeficiency: true
      },
      {
        name:  'Intuição',
        adder: -2,
        atribute: 'SAB',
        id: 9,
        proeficiency: false
      },
      {
        name:  'Investigação',
        adder: -2,
        atribute: 'SAB',
        id: 10,
        proeficiency: false
      },
      {
        name:  'Lidar com Animais',
        adder: -2,
        atribute: 'SAB',
        id: 11,
        proeficiency: false
      },
      {
        name:  'Medicina',
        adder: -2,
        atribute: 'SAB',
        id: 12,
        proeficiency: false
      },
      {
        name:  'Natureza',
        adder: 2,
        atribute: 'INT',
        id: 13,
        proeficiency: false
      },
      {
        name:  'Percepção',
        adder: -2,
        atribute: 'SAB',
        id: 14,
        proeficiency: false
      },
      {
        name:  'Persuasão',
        adder: 7,
        atribute: 'CAR',
        id: 15,
        proeficiency: true
      },
      {
        name:  'Presdigitação',
        adder: 1,
        atribute: 'DES',
        id: 16,
        proeficiency: false
      },
      {
        name:  'Religião',
        adder: 2,
        atribute: 'INT',
        id: 17,
        proeficiency: false
      },
      {
        name:  'Sobrevivência',
        adder: -2,
        atribute: 'SAB',
        id: 18,
        proeficiency: false
      },
      ],
      photo: {
        id: 1,
        url: 'https://cdn.discordapp.com/attachments/1018246428369354844/1027622626186764308/takar..png',
        desc: 'Meio Orc com uma arma nas costas'
      },
      weapons: [
          {
          id: 1,
          weaponName: "katana",
          weaponType: "Espada Longa",
          dice: "1d10 + 10"
          },
          {
          id: 2,
          weaponType: "Adaga",
          dice: "1d1"
          },
      ],
      spells: [
        {
        id: 1,
        name: "Eldritch Blast",
        distance: "30 metros",
        duration: "Instantânea",
        cast: '1 ação',
        schoolOfMagic: "Evocação",
        ritual: false,
        typeOfAttack: "Spell",
        level: 0,
        description: "Um raio de energia crepitante atinge uma criatura dentro do alcance. Faça um ataque mágico à distância contra o alvo. Em um acerto, o alvo sofre 1d10 de dano de força.",
        superiorLevels: 'O feitiço cria mais de um feixe quando você alcança níveis mais altos: dois feixes no 5º nível, três feixes no 11º nível e quatro feixes no 17º nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Faça uma jogada de ataque separada para cada raio.',
        roolDamage: '1d10',
      },
        {
        id: 2,
        name: "Aopa",
        distance: "30 metros",
        duration: "Instantânea",
        cast: '1 ação',
        schoolOfMagic: "Evocação",
        ritual: false,
        typeOfAttack: "Spell",
        level: 1,
        description: "Um raio de energia crepitante atinge uma criatura dentro do alcance. Faça um ataque mágico à distância contra o alvo. Em um acerto, o alvo sofre 1d10 de dano de força.",
        superiorLevels: 'O feitiço cria mais de um feixe quando você alcança níveis mais altos: dois feixes no 5º nível, três feixes no 11º nível e quatro feixes no 17º nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Faça uma jogada de ataque separada para cada raio.',
        roolDamage: '1d10',
      },
        {
        id: 3,
        name: "Lâmina sedenta",
        description: 'Você pode atacar com sua arma de pacto duas vezes, ao invés de uma, sempre que você usar a ação Atacar no seu turno.',
        cast: "1 ação",
        distance: 'Pessoal',
        level: 5,
        typeOfAttack: 'Attack',
        ritual: false,
        schoolOfMagic: 'Pacto da Lâmina'

      },
 
      
      ]
  },
  ]