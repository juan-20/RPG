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
import Head from 'next/head'
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
          <Head>
            <title>RPG</title>
            <meta name='description' content='A ficha dos seus personagens preferidos' />
            <meta property='og:title' content='RPG' />
            <meta property='og:description' content='A ficha dos seus personagens preferidos' />
            <meta property='og:type' content='website' />
            <meta property="og:image" content='https://pbs.twimg.com/media/FgeddoVWAAEJDUv?format=png&name=360x360' />
        </Head>
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

