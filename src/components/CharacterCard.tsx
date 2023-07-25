import React from 'react'
import type { CharacterProps } from '~/types/types'
import { api } from '~/utils/api'
import SpellsCard from './SpellsCard'

interface CharacterCardProps {
 Character: CharacterProps[] | undefined
 isError: boolean
 isLoading: boolean
}

export default function CharacterCard({
 Character,
 isError,
 isLoading,
}: CharacterCardProps) {
 console.log(Character)
 return (
  <div>
   {Character?.map((character) => (
    <div key={character.id}>
     <img src={character.AvatarURL} alt={character.name} />
     <p>Nome: {character.name}</p>
     <p>Raça: {character.race}</p>
     <p>Classe: {character.class}</p>
     <p>Raça: {character.race}</p>
     {/* <GetSpells /> */}
    </div>
   ))}
  </div>
 )
}
