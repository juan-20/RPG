import { onValue, ref, set } from 'firebase/database'
import { type } from 'os'
import { CookingPot, Fire, Sword } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { db } from '../../../../services/firebase'
import { SpellsType } from '../../../../types/D&D.type'
import Button from '../../../interface/Button'
import CheckboxComponent from '../../../interface/Checkbox'
import Popup from '../../PopUp'
import { Container } from './styles'

type attacksType = SpellsType

export default function AttacksCard(props: attacksType) {
  const { name, duration, id, distance, cast, description, typeOfAttack, prepared, level } = props

  const [attackPopUp, setAttackPopUp] = useState(false);


  type resProp = {
    prepared: boolean
  }
  let res: resProp

  function PrepareSpell(){

  const query =  ref(db, `/characters/0/spells/${id}/prepared`);
  onValue(query, (snapshot) => {
    const data = snapshot.val();
    res = data
    console.log(res);
   })

  const test =  ref(db, `/characters/0/spells/${id}`);
  onValue(query, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
   })

   if (res.prepared === true) {
    console.log('ta true e vou deixar falso')
    set(query , {
      prepared: false,
    })
    document.getElementById(`${id}+Prepared`)!.classList.remove("fill")  
    document.getElementById(`${id}+Prepared`)!.classList.add("unfill")  
    return
  }
  if (res.prepared === false) {
    console.log('ta false e agora ta preparado')
    set(query , {
      prepared: true,
    })
    document.getElementById(`${id}+Prepared`)!.classList.remove("unfill")  
    document.getElementById(`${id}+Prepared`)!.classList.add("fill")  
    return
   }
}


    return (
      
      <Container className='magic'>

        <div className="magic-header">
        <h1>{name}, {id}</h1>
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
        {level ? 
        <>
          <span>Nível:</span>
          <p>{level}</p>
        </>
        : null}
        </div>
        <div className="magic-content">
        <span>Rolagem:</span>
        <p>d10 + 9</p>
        </div>

        </div>
        <div className="magic-button">
          <div className="magic-button-prepered">
            {typeOfAttack === 'Spell' && prepared?.prepared === true ?
            <>
            <CookingPot onClick={() => {PrepareSpell()} } size={32} weight='fill' />
            {/* TODO: adicionar tooltip */}
            </>
            :
            <CookingPot id={`${id}+Prepared`} onClick={() => {PrepareSpell()} } size={32} />
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
