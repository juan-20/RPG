// export const getStaticProps = async () => {
//   let url = process.env.ENVIROMENT
//    const res = await fetch(url + '/api/Characters')
//    const characters: CharactersType[] = await res.json()
//    return{
//      props:{
//       characters,
//       fallback: false
//      }
//    }
   
//  }

import type { InferGetStaticPropsType } from 'next'
import CharacterResume from '../components/layout/Character-resume'
import { Body } from '../components/layout/Character-resume/styles'
import Landing from '../components/layout/Landing'
import { CharactersType } from '../types/D&D.type'
import { characters } from './api/data/character'

// {characters}: InferGetStaticPropsType<typeof getStaticProps>

export default function Home() {
  
  return (
    <>
    {characters.length > 0 ?
    <>
    <Landing />
    <Body>
          {characters.map((character: CharactersType) => (
            <CharacterResume key={character.Id} name={character.name} surname={character.surname} description={character.desc} age={character.age} image={character.photo.url}
              role={character.role} />
          ))}
        </Body>
    </>
    : 'eita kkk'  }

    </>


  )
}

