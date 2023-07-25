import { string } from 'zod'

export interface CharacterProps {
 id: string
 updatedAt: string

 name: string
 AvatarURL: string
 race: string
 level: number
 height: number
 weight: number
 eyes: string
 skin: string
 hair: string
 class: string
 background: string
 alignment: string
 age: number
 eyes: string

 atualLife: number
 temporaryLife: number
 maxLife: number
 temporaryMaxLife: number

 mana: number
 displacement: number
 ac: number
 initiative: number
 cdToAvoidMagic: number
 modAtackMagic: number
 spellCastingAttribute: string
}
