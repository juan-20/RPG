import { Heart, MinusCircle, PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'
import Button from '../../interface/Button'
import Input from '../../interface/input/input'
import { Container } from './style'

type LifeType ={
    totalLife: number,
    lifeDice: string,
}

export default function Life(props: LifeType) {
  const {totalLife, lifeDice} = props

  const [changedLife, setChangedLife] : any = useState(0)


  return (
    <Container className="life">
    <h1>Vida</h1>

    <Heart className='heart' size={40} color="#d33f49" weight="fill" />
    <p className='life'>{totalLife}</p>

    <div className="changeLife">
    <p>Adicionar/Remover vida:</p>
    <div className="inputSection">
        <div className="minus">
         <MinusCircle onClick={()=> {setChangedLife(changedLife - 1)}} size={32} weight="fill" />
        </div>
        <input 
        type="text"
        value={changedLife}
        onChange={(e) => setChangedLife(e.target.value)}
        placeholder='0-54'
        />
        <div className="plus">
         <PlusCircle onClick={()=> {setChangedLife(changedLife + 1)}} size={32} weight="fill" />
        </div>
    </div>
    <div className="group-button">
      <Button size='base' label='Alterar vida' backgroundColor='brown' />
      <p>{changedLife}</p>
    </div>
    </div>
  </Container>
  )
}
