import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import CharacterResume from '../components/layout/Character-resume'
import { Body } from '../components/layout/Character-resume/styles'
import Landing from '../components/layout/Landing'
import { CharactersType, TakarType } from '../types/D&D.type'

export default function Home({characters}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(characters)
  return (
    <>
    <Landing />

    <Body>
        {characters.map((character: CharactersType) => (
            <CharacterResume name={character.name} surname={character.surname} description={character.desc} age={character.age} image={character.photo.url}
             role={character.role}/>
          ))}
    </Body>

    </>

  )
}

export const getStaticProps = async () => {
  let url = process.env.ENVIROMENT
   const res = await fetch(url + '/api/Characters')
   const characters: CharactersType[] = await res.json()
   return{
     props:{
      characters,
     }
   }
   
 }