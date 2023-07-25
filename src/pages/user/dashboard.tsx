import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import CharacterCard from '~/components/CharacterCard'
import { api } from '~/utils/api'

export default function Dashboard() {
 return (
  <main>
   <h2>Seus Personagens:</h2>
   <CharacterShow />
  </main>
 )
}

function CharacterShow() {
 const { data: sessionData } = useSession()
 const character = api.character.character.useQuery(
  undefined, // no input
  {
   enabled: sessionData?.user !== undefined,
  }
 )
 return (
  <div className="flex flex-col items-center justify-center gap-4">
   <p className="text-center text-2xl text-white">
    {character.isLoading ? (
     <span>Loading...</span>
    ) : (
     <CharacterCard
      Character={character.data}
      isError={character.isError}
      isLoading={character.isLoading}
     />
    )}
   </p>
  </div>
 )
}
