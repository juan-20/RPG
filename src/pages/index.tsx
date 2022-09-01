import type { InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/image'
import { TakarType } from '../types/D&D.type'

export default function Home({Takar}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Image src={Takar.photo[0].url} width='250px' height='300px' ></Image>
    </div>

  )
}

export const getStaticProps = async () => {
  let url = process.env.ENVIROMENT
   const res = await fetch(url + '/api/Takar')
   const Takar: TakarType = await res.json()
   return{
     props:{
       Takar,
     }
   }
   
 }