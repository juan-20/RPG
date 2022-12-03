import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Button from '../components/interface/Button'
import CharacterResume from '../components/layout/Character-resume'
import { Body } from '../components/layout/Character-resume/styles'
import Landing from '../components/layout/Landing'
import { CharactersType } from '../types/D&D.type'
// import { characters } from './api/data/character'

export default function Home({character}: InferGetStaticPropsType<typeof getStaticProps>) {
  const characters = character
  const {data: session} = useSession()
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
    <Body>
      {session ? 
      <p>Oi, {session.user?.name}</p>
       :
      
      <div className="register">
        <h3>Novo por aqui? Faça seu registro!</h3>
        {/* TODO: Criar componente que passa email para exibir os personagens do ususario (igual do /account)  */}
        <div onClick={() => signIn()} className="btn">
          <Button
          backgroundColor='brown'
          label='Entrar'
          size='lg'
          />
        </div>
      </div>
      }
      <div className="title">
        <h1>
          Todos personagens:
        </h1>
      </div>
      <div className="characters">
    {characters.length > 0 ?
      <>
          {characters.map((character: CharactersType) => (
            <><CharacterResume
              key={character.Id}
              name={character.name}
              surname={character.surname}
              description={character.desc}
              age={character.age}
              image={character.photo.url}
              role={character.role} />
      </>
          ))}
      </>
          : 'Banco de dados desconectado'  }
      </div>
        </Body>
    </> 

    </>


  )
}



export const getStaticProps = async () => {
  
  const res = await fetch(`${process.env.REACT_APP_SSR}/api/getAllCharacters`)
   const character: CharactersType[] = await res.json()
   return{
     props:{
      character,
      fallback: false
     }
   }
   
 }