import { Heading } from '@chakra-ui/react'
import React from 'react'
import { skillsType } from '../../types/D&D.type'
import { Container } from './styles'

export default function Skills(props:{skills: skillsType}  ) {
  return (
    <Container className="">
      <div className="content">
        <Heading fontSize='sm'>{props.skills.name}</Heading> 
        
        {props.skills.adder > 0 ? (
          <Heading id='adder' fontSize='3xl'>+{props.skills.adder}</Heading>
          ) :(
            <Heading  id='adder' fontSize='3xl'>{props.skills.adder}</Heading>
            )
          }
          <span>{props.skills.baseValue}</span>
          </div>
    </Container>
  )
}
