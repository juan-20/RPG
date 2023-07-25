import React from 'react'
import { api } from '~/utils/api'
import { signIn, signOut, useSession } from 'next-auth/react'

interface SpellsCardProps {
 id: string
}

export default function SpellsCard({ id }: SpellsCardProps) {
 const { data: sessionData } = useSession()
 const spells = api.character.spellsByCharacter.useQuery(
  {
   characterId: id.toString(),
  },
  {
   enabled: sessionData?.user !== undefined,
  }
 )
 return (
  <div>
   <p>Character: {id}</p>
   {/* <p>{JSON.stringify(spells.data)}</p> */}
   {spells.data?.map((spell) => (
    <div key={spell.id}>
     <p>{spell.id}</p>
    </div>
   ))}
  </div>
 )
}
