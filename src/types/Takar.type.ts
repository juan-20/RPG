type IconType ={
    url: string,
    quantity: string
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
  
  export type TakarType = {
    name: string,
    invocation: InvocationType[],
    magic: SpellsType[],
    skills: skillsType[]

  }