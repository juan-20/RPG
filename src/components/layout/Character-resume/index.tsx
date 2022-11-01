import React from 'react'
import Image from 'next/image'
import { Container } from './styles';
import Button from '../../interface/Button';
import Link from 'next/link';

interface CharacterResumeProps {
  name: string,
  description: string,
  age: string;
  image: string,
  role: string,
  surname?: string
}

export default function CharacterResume(props: CharacterResumeProps) {
  const {
    name,
    description,
    age,
    image,
    role,
    surname
  } = props
  return (    
    <Container>
      <p className='desc'>{description}</p>
      <div className="character-hero">
          <div className="img">
          <Image src={image}  width={180} height={180} />
          </div>
          <div className="info">
              <div className="name">
              <h1>{name}</h1>
              <p>{surname}</p>
              </div>
            <div className="role-age">
           <p>{role} - </p><p>{age}</p>
           </div>
          </div>
      </div>
          <Link href={`character/${name}`} passHref>
            <div className="btn">
              <Button size='base' backgroundColor='blue' label='Ver ficha'/>
            </div>
          </Link>
    </Container>
  )
}
