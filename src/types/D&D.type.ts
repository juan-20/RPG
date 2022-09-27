export type CharactersType ={
      Id: number,
      name: string
      surname?: string
      role: string
      desc: string
      age: string
      photo: ImageType
      weapons: WeaponsType[]
      spells?: SpellsType[]
}

export type TakarType = {
  name: string,
  photo: ImageType[]
  invocation: InvocationType[],
  magic: SpellsType[],
  skills: skillsType[]

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
    name: string,
    baseValue: number;
    adder: number
    id: number;
    
  }

  export type ImageType ={
    url: string,
    desc?: string,
    id: number
  }
  