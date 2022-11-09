import { Fire } from 'phosphor-react'
import React from 'react'
import Button from '../../interface/Button'
import { Container } from './styles'

type AttakProp = {
  title: string,
  duration: string,
  distance: string,
  type: string,
  description: string,
  schoolOfMagic: string | undefined
}

export default function Atacks(props: AttakProp) {
  const { title, duration, distance, type } = props
  return (
    <Container className='magic'>

        <div className="magic-header">
        <h1>{title}</h1>
        <Fire className='fire' size={32} weight="fill" />
        </div>

        <div className="magic">
        <div className="magic-content">
        <span>Tipo:</span>
        <p>{type}</p>
        </div>
        <div className="magic-content">
        <span>Distância:</span>
        <p>90 metros</p>
        </div>
        <div className="magic-content">
        <span>Acertar:</span>
        <p>d20 + 8</p>
        </div>
        <div className="magic-content">
        <span>Rolagem:</span>
        <p>d10 + 9</p>
        </div>

        </div>
        <div className="magic-button">
        <Button backgroundColor='blue' label='Ver mais' icon='ph-book-open-fill' size='sm' />
        </div>
    </Container>
  )
}
