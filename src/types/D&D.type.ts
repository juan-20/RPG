export type CharactersType ={
      Id: number,
      name: string,
      life: number,
      lifeDice: string,
      surname?: string
      role: string
      desc: string
      age: string
      armor: number
      initiative: number
      displacement: string
      mainAtributes: MainAtributes[]
      skills: skillsType[]
      photo: ImageType
      weapons: WeaponsType[]
      spells: SpellsType[]
}

export type MainAtributes = {
  name: string
  counter: number
  passive: number
}

export type WeaponsType={
  weaponType: string,
  id: number,
  weaponName?: string,
  dice: string
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
    description: string,
    type: string,
    distance: string,
    duration: string,
    schoolOfMagic?: string
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
  