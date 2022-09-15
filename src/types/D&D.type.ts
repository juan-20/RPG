export type CharactersType ={
      Id: number,
      name: string
      surname?: string
      desc: string
      age: string
      photo: ImageType
      weapons: WeaponsType[]
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
    name: string,
    id: number
    description: string,
    type: IconType,
    distance: IconType,
    duration: IconType
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
  