import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import Landing from '../components/Landing'
import { CharactersResume } from '../components/Landing/styles'
import { CharactersType, TakarType } from '../types/D&D.type'

export default function Home({characters}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(characters)
  return (
    <>
    <Landing />
    <div className="">
        {characters.map((character: CharactersType) => (
    <>
            <CharactersResume>
            </CharactersResume>
            <div className="">
                <h1>{character.name}</h1>
            </div></>
          ))}
          </div>

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