import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SpellsType } from '../../../types/D&D.type'
import ToggleDemo from '../../interface/ToggleComponent/ToggleComponent';
import ToggleGroupDemo from '../../interface/ToggleComponent/ToggleComponent';
import AttacksCard from './AttacksCard/AttacksCard'
import { Container } from './styles';

type DataProps =   number[];

type AttacksType = {
    id: number
}

export default function Attacks(props: AttacksType) {
    const { id } = props

    const [data, setData] = useState<DataProps | null>(null)
    const [isLoading, setLoading] = useState(false)
    const [spells, setSpells]:any = useState('')

    useEffect(() => {
      setLoading(true)
      fetch(`${process.env.REACT_APP_BASE_URL}/api/getSpellsLevel/${id}`)
      .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    
    async function setNewType(activeType: number){
       // @ts-ignore: Unreachable type code error
       event.preventDefault();
      setSpells('')
      if (activeType === 180){
         console.log('abre tudo');
         setLoading(true)            
              const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/GetSpeelsByCharacterId/${id}`)
              .then((res) => res.json())
              .then((data) => {
                setSpells(data)
              })
            setLoading(false)
          }
          
          if (activeType === 360){
            console.log('abre magia');
            setLoading(true)            
                 const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/getTypeOfAttack/${id}/Spell`)
                 .then((res) => res.json())
                 .then((data) => {
                   setSpells(data)
                 })
               setLoading(false)
          }

              if (activeType === 171){
                console.log('abre armas');
                setLoading(true)            
                     const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/getTypeOfAttack/${id}/Attack`)
                     .then((res) => res.json())
                     .then((data) => {
                       setSpells(data)
                     })
                   setLoading(false)
      } 

      if (activeType <= 20){
        console.log('abre tudo');
         setLoading(true)            
              const response = await fetch(`/api/GetSpellsByLevel/${id}/${activeType}`)
              .then((res) => res.json())
              .then((data) => {
                setSpells(data)
              })
            setLoading(false)
      }

    }

  return (
    <Container>
        <div className="choose">
          <div className="choose-slider">
            <div onClick={() => { setNewType(180) }} className="all">
              <ToggleDemo icon='ph-selection-all' type='Word' text={'Selecionar todos'} key={'Todos'}/>
            </div>
            <div onClick={() => {setNewType(360)}} className="magic">
          <ToggleDemo icon='ph-fire' type='Word' text={'Magias'} key={'Magias'}/>
          </div>
            <div onClick={() => {setNewType(171)}} className="guns">
          <ToggleDemo icon='ph-sword' type='Word' text={'Armas'} key={'Armas'}/>
          </div>
          <p>Níveis:</p>
            {data?.map((num, index) => (
          <div key={index} onClick={() => { setNewType(num)}} className='choose-slider-levels'>
                  <ToggleDemo  type='Level' text={num} key={num}/>
          </div>
                  ))}
          </div>
        </div>
        <div className="attacks-container">
        {isLoading ? <p>Carregando...</p> :
          <>
        {spells ? (spells.map((attack: SpellsType) => (
            <AttacksCard 
             key={attack.id}
             id={attack.id}
             name={attack.name}
             duration={attack.duration}
             distance={attack.distance}
             description={attack.description}
             schoolOfMagic={attack.schoolOfMagic}
             cast={attack.cast} 
             rollAtack={attack.rollAtack}
             roolDamage={attack.rollAtack}
             testToBeMade={attack.testToBeMade}
             typeOfAttack={attack.typeOfAttack}
             ritual={attack.ritual}        
             superiorLevels={attack.superiorLevels}
             level={attack.level}
             prepared={attack.prepared}
            /> 
          ))
          )
        : (
          <>
            <p></p>
            <div className="attacks-container-response">
              <p>Escolha uma opção acima</p>
            </div>
          </>
        )
        }
        </>
          
      }
        </div>
    </Container>
  )
}
