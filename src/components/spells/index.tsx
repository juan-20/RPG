import type { InferGetStaticPropsType } from 'next'
import { Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { SpellsType } from '../../types/D&D.type'
import { Spells } from './styles'

export default function Speels(props: {spells: SpellsType}  ) {

  // console.log(spells)

  return (
    <Spells>
      <header>
      <Heading fontSize='4xl'>{props.spells.name}</Heading>  
      
        <div className="subHead">
          <Image src={props.spells.distance.url} width='20' height='20' />
          <p>{props.spells.distance.quantity}</p>
          <Image src={props.spells.duration.url} width='20' height='20' />
          <p>{props.spells.duration.quantity}</p>
          <Image src={props.spells.type.url} width='20' height='20' />
          <p>{props.spells.type.quantity}</p>
        </div>
      </header>
      <p>{props.spells.description}</p>
   
    </Spells>
  )
}


