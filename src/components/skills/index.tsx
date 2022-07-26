import { Heading } from '@chakra-ui/react'
import React from 'react'
import { InvocationType, skillsType } from '../../types/Takar.type'

export default function Skills(props:{skills: skillsType}  ) {
  return (
    <div className="">
        <Heading fontSize='4xl'>{props.skills.name}</Heading> 
        <p>{props.skills.baseValue}</p>
        <p>{props.skills.adder}</p>
    </div>
  )
}
