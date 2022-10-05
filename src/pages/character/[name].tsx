import Image from 'next/image'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import { CharactersType } from '../../types/D&D.type'
import { Container, HeroInfo, MainAtributes } from './styles';


export default function Character({character}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Character: CharactersType = character
  console.log(Character)
  return (
    <Container>
      <HeroInfo id='t'>
      <div className="image">
      <Image id='photo' src={Character.photo.url} alt={Character.photo.desc}  width={90} height={100} />
        </div>
      <div className="text">
        <div className="">
        <p>{Character.displacement}</p>
        <p>Deslocamento</p>
        </div>
        
        <div className="">
        <p>{Character.armor}</p>
        <p>Armadura</p>
        </div>

        <div className="">
        {Character.initiative > 0 ? <p>+{Character.initiative}</p>  : <p>{Character.initiative}</p>}
        <p>Iniciativa</p>
        </div>
      </div>
      </HeroInfo>

   
        <MainAtributes>
          {Character.mainAtributes.map((mainAtribute) => (
            <div className='atributes'>
            <h1>{mainAtribute.name}</h1>
            <h6>{mainAtribute.counter}</h6>
            <p>Passiva: {mainAtribute.passive}</p>
            </div>
          ))}
        </MainAtributes>

      </Container>
  )
}

type routes ={
  params: {
    name: string
  }
}

export const getStaticProps = async (name: routes) => {
  let url = process.env.ENVIROMENT
  const res = await fetch(`${url}/api/Characters/${name.params.name}`)
   const character: CharactersType = await res.json()
   return{
     props:{
      character,
      fallback: false
     }
   }
   
 }
 export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}