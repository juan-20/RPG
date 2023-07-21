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
                <p>{character.name}</p>
            </div>
        ))}
    </div>
  )
}
