type IconType ={
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
  
  export type TakarType = {
    name: string,
    photo: ImageType[]
    invocation: InvocationType[],
    magic: SpellsType[],
    skills: skillsType[]

  }