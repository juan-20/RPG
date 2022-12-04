export type CharactersType ={
      Id: number,
      name: string,
      life: LifeProp,
      lifeDice: string,
      createdBy: string
      surname?: string
      role: string
      desc: string
      age: string
      armor: number
      initiative: number
      displacement: string
      level?: number
      mainAtributes: MainAtributes[]
      skills: skillsType[]
      photo: ImageType
      // weapons: WeaponsType[]
      spells: SpellsType[]
      inventory?: ItemsType[]
}


export type LifeProp ={
  life: number
}

export type PreparedProp ={
  prepared: boolean
}

export type ItemsType ={
  id: number,
  name: string,
  description: string
}

export type MainAtributes = {
  name: string
  counter: number
  passive: number
}

export type WeaponsType={
  weaponType?: string,
  id: number,
  weaponName?: string,
  dice?: string
  cursed?: boolean,
}


export type IconType ={
    url: string,
    quantity: string
  }

export type LifeType = {
  totalLife: number,
  AtualLife: number,
  dice: string
}
  
export type SpellsType = {
    id: number,
    name: string,
    distance: '1,5 quilômetro' | 'Pessoal' | '150 metros' | '30 metros' | '18 metros' | '45 metros' |'3 metros' | '45 metros' | 'Toque' | '36 metros' | '9 metros' ,
    description: string,
    typeOfAttack: 'Spell' | 'Attack' 
    duration?: 'Instantânea'| '1 minuto' | '1 rodada' | '10 minutos' | '1 hora' | '24 horas' | '8 horas' ,
    schoolOfMagic?: string,
    cast?: '1 ação' | '1 reação' | '1 hora' | '1 minuto' | '1 ação bônus',
    rollAtack?: string,
    roolDamage?: string
    testToBeMade?: string,
    ritual?: boolean,
    superiorLevels?: string
    level?: number,
    prepared?: PreparedProp

    // arma
    weaponType?: string,
    dice?: string
    damageDice?: string
    cursed?: boolean,
  }
  export type InvocationType = {
    name: string,
    id: number
    description: string,
  }

  export type skillsType ={
    id: number;
    name: string,
    atribute: string;
    adder: number;
    proeficiency: boolean
  }

  export type ImageType ={
    url: string,
    desc?: string,
    id: number
  }
  