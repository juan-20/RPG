import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import CharacterResume from '../components/layout/Character-resume'
import { Body } from '../components/layout/Character-resume/styles'
import Landing from '../components/layout/Landing'
import { CharactersType } from '../types/D&D.type'
// import { characters } from './api/data/character'

export default function Home({character}: InferGetStaticPropsType<typeof getStaticProps>) {
  const characters = character
  console.log(character)
  return (
    <>
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
    {characters.length > 0 ?
    <Body>
          {characters.map((character: CharactersType) => (
            <CharacterResume 
              key={character.Id} 
              name={character.name} 
              surname={character.surname} 
              description={character.desc} 
              age={character.age} 
              image={character.photo.url}
              role={character.role} 
            />
          ))}
        </Body>
    : 'Banco de dados desconectado'  }
    </> 

    </>


  )
}



export const getStaticProps = async () => {
  const res = await fetch(`${process.env.REACT_APP_ENVIROMENT}/api/getAllCharacters`)
   const character: CharactersType[] = await res.json()
   console.log(character)
   return{
     props:{
      character,
      fallback: false
     }
   }
   
 }