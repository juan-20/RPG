import React from 'react'
import type { CharacterProps } from '~/types/types'



interface CharacterCardProps{
    Character: CharacterProps[] | undefined,
    isError: boolean,
    isLoading: boolean,
}

export default function CharacterCard({ 
    Character, 
    isError,
    isLoading,
    }: CharacterCardProps) {
  return (
    <div>
        {Character?.map((character) => (
            <div key={character.id}>
                <p>Nome: {character.name}</p>
                <p>Raça: {character.race}</p>
                <p>Classe: {character.class}</p>
                <p>Raça: {character.race}</p>
            </div>
        ))}
    </div>
  )
}
