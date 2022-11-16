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
    // const { name, duration, distance, cast, description, typeOfAttack, prepared, schoolOfMagic, rollAtack, testToBeMade, ritual, level, superiorLevels, id } = props
    const { id } = props

    const [data, setData] = useState<DataProps | null>(null)
    const [isLoading, setLoading] = useState(false)

    const [all, setAll] = useState(true)
    const [magic, setMagic] = useState(false)
    const [gun, setGun] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      let url = 'http://localhost:3000'
      fetch(`${url}/api/getSpellsLevel/${id}`)
      .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    
    console.log(data)
  return (
    <Container>
        <div className="choose">
          <div className="choose-slider">
            <div onClick={() => { setAll(true) }} className="">
              <ToggleDemo icon='ph-coat-hanger' type='Word' text={'Tudo'} key={'Todos'}/>
            </div>
            <div onClick={() => { setAll(true) }} className="">
          <ToggleDemo icon='ph-fire' type='Word' text={'Magias'} key={'Magias'}/>
          </div>
            <div onClick={() => { setAll(true) }} className="">
          <ToggleDemo icon='ph-sword' type='Word' text={'Armas'} key={'Armas'}/>
          </div>
            {data?.map((num, index) => (
                <div key={num} className='choose-slider-levels'>
                  <ToggleDemo type='Level' text={num} key={num}/>
                </div>
            ))}
          </div>
        </div>

        {/* <AttacksCard 
         key={id}
         name={name}
         duration={duration}
         distance={distance}
         description={description}
         schoolOfMagic={schoolOfMagic}
         cast={cast} 
         rollAtack={rollAtack}
         roolDamage={rollAtack}
         testToBeMade={testToBeMade}
         typeOfAttack={typeOfAttack}
         ritual={ritual}        
         superiorLevels={superiorLevels}
         level={level}
         prepared={prepared}
        /> */}
    </Container>
  )
}
