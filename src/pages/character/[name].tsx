import Image from 'next/image'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import { CharactersType } from '../../types/D&D.type'


export default function Character({character}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Character: CharactersType = character
  console.log(Character)
  return (
    <div>
      <Image src={Character.photo.url} alt={Character.photo.desc}  width={180} height={180} />
      {Character.name}
      {Character.Id}
      {Character.age}
      {Character.role}
      </div>
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