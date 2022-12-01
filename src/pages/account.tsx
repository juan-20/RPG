import { InferGetStaticPropsType } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';
import { SignOut, User } from 'phosphor-react';
import React, { useState } from 'react'
import { Container } from '../../styles/account.style';
import Button from '../components/interface/Button';
import { CharactersType } from '../types/D&D.type';

export default function Account({character}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {data: session, status} = useSession({required: true})

  let data: any
  const [characters, setCharacters] = useState<CharactersType[]>()
  
  let arr: CharactersType[] = []
  async function search(){

     character.map((character) => {
       let owner = character.createdBy === session?.user?.email
       if(owner === false) return
       arr.push(character)
       data = [...new Set(arr)]
       setCharacters(data)
     })
  }

  if(session){
    return (
      <Container>
        <div className="hero">
          <Image 
          className='hero-image'
          width={150} height={150} quality={100}
          src={session.user?.image!} 
          alt={session.user?.name!+ 'Foto'} />
          <h1>{session.user?.name}</h1>
        <SignOut className='hero-exit' onClick={() => signOut()} size={32}/>
        </div>
        <div className="characters">
        {characters ? 
         <div className="characters-link">
         <div className="characters-link-title">
           <h1>Seus Personagens</h1>
           <p>Seus queridos personagens criados</p>
         </div>

         <div className="characters-link-slider">
         <div className="characters-link-slider-card">
         {characters?.map((e) => (
           <Link 
           href={`/character/${e.name}`}
           key={e.Id}>
               <div className="characters-link-slider-card-content">
             <Image 
             width={120}
             height={120}
             src={e.photo.url}
             alt={e.photo.desc}
             />
             <p>{e.name}</p>
             </div>
           </Link>
         ))}
         </div>
         </div>
         </div>
        : 
        <div onClick={() => {search()}} className="characters-showButton">
          <div className="characters-showButton-visible">
        <Button 
        backgroundColor='green'
        label='Mostrar personagens'
        size='lg'
        />
        </div>
                 <div className="characters-link-card">
       
          
               <div className="characters-link-card-content">
               <User size={120} />
             <p >User name </p>
             </div>
               <div className="characters-link-card-content">
               <User size={120} />
             <p >User name </p>
             </div>
               <div className="characters-link-card-content">
               <User size={120} />
             <p >User name </p>
             </div>
         </div>
        </div>
        }
        {/* TODO: Create Related characters */}
        {/* <h1>Veja outros personagens</h1> */}
        </div>

      
      </Container>
    )
  }else{
    return (
      <div>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    )
  }
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