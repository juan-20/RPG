import { Heading } from '@chakra-ui/react'
import React from 'react'
import { InvocationType } from '../../types/Takar.type'

export default function Invocation(props:{invocation: InvocationType}  ) {
  return (
    <div className="">
        <Heading fontSize='4xl'>{props.invocation.name}</Heading> 
        <p>{props.invocation.description}</p>
    </div>
  )
}
