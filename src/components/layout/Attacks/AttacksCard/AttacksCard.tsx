import { type } from 'os'
import { Fire, Sword } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { SpellsType } from '../../../../types/D&D.type'
import Button from '../../../interface/Button'
import CheckboxComponent from '../../../interface/Checkbox'
import Popup from '../../PopUp'
import { Container } from './styles'

type attacksType = Omit<SpellsType, 'id'>

export default function AttacksCard(props: attacksType) {
  const { name, duration, distance, cast, description, typeOfAttack, prepared } = props

  const [attackPopUp, setAttackPopUp] = useState(false);

    return (
      
      <Container className='magic'>

        <div className="magic-header">
        <h1>{name}</h1>
        {typeOfAttack === 'Spell' ? <Fire className='fire' size={32} weight="fill" />
         : <Sword className='sword' size={32} weight="fill" />}
        
        </div>

        <div className="magic">
        <div className="magic-content">
        <span>Tipo:</span>
        <p>{cast}</p>
        </div>
        <div className="magic-content">
        <span>Distância:</span>
        <p>{distance}</p>
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
          <div className="magic-button-prepered">
            {typeOfAttack === 'Spell' ?
            <>
            <p>Preparado:</p>
            <CheckboxComponent activated={prepared} />
            </>
            :
            <p></p>
            }
          </div>
          <div onClick={() => { setAttackPopUp(true)}} className="btn">
            <Button backgroundColor='blue' label='Ver mais' icon='ph-book-open-fill' size='sm' />
            <Popup 
            target='Magic' title={name} open={attackPopUp} 
            onClose={() => setAttackPopUp(false)} 
            description={description}
            />
          </div>
        </div>
    </Container>
  )
}
