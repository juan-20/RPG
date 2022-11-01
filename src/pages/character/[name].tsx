import Image from 'next/image'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import React, { useState } from 'react'
import { CharactersType } from '../../types/D&D.type'
import { Container, HeroInfo, MainAtributes, SkillsAndLife } from '../../../styles/styles';
import CheckboxComponent from '../../components/interface/Checkbox';
import Input from '../../components/interface/input/input';
import Button from '../../components/interface/Button';
import Invertory from '../../components/layout/PopUp';
import { X } from 'phosphor-react';
import Popup from '../../components/layout/PopUp';



export default function Character({character}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Character: CharactersType = character

  
  const [gunsPopUp, setGunsPopUp] = useState(false);
  const [inventoryPopUp, setinventoryPopUp] = useState(false);
  const [magicPopUp, setMagicPopUp] = useState(false);
  return (
    <Container>
      <HeroInfo id='t'>
      <div className="image">
      <Image id='photo' src={Character.photo.url} alt={Character.photo.desc}  width={100} height={100} />
        </div>
      <div className="text">
        <div className="">
        <p>{Character.displacement}</p>
        <p>Deslocamento</p>
        </div>
        
        <div className="">
        <p>{Character.armor}</p>
        <p>Armadura</p>
        </div>

        <div className="">
        {Character.initiative > 0 ? <p>+{Character.initiative}</p>  : <p>{Character.initiative}</p>}
        <p>Iniciativa</p>
        </div>
      </div>

      <div className="button-group">
        <div onClick={() => {setGunsPopUp(true)}} className="guns">
        <Button size='sm' backgroundColor='blue' label='Armas' icon='ph-sword' />
        </div>

        <div onClick={() => {setinventoryPopUp(true)}}  
             className="inventory">
          <Button size='sm' backgroundColor='green' label='Inventario' icon='ph-backpack' />
        </div>

        <div  onClick={() => {setMagicPopUp(true)}}
              className="magic">
        <Button size='sm' backgroundColor='yellow' label='Magias' icon='ph-magic-wand' />
        </div>

          <Popup target='Guns' title='Armas' open={gunsPopUp} onClose={() => setGunsPopUp(false)}/> 
          <Popup target='Inventory' title='Inventário' open={inventoryPopUp} onClose={() => setinventoryPopUp(false)}/> 
          <Popup target='Magic' title='Magia' open={magicPopUp} onClose={() => setMagicPopUp(false)}/> 
      </div>

      </HeroInfo>

   
        <MainAtributes>
          {Character.mainAtributes.map((mainAtribute) => (
            <div key={mainAtribute.name} className='atributes'>
              <h1>{mainAtribute.name}</h1>
              <h6>{mainAtribute.counter}</h6>
              <p>Passiva: {mainAtribute.passive}</p>
            </div>
          ))}
        </MainAtributes>

        <SkillsAndLife>
          <div className="skills">
          <div className="title">
            <h1>Pericias</h1>
          </div>
            {Character.skills.map((skill)=> (
              <div className='skill' key={skill.id}>
                <CheckboxComponent notAllowed={true} activated={skill.proeficiency} key={skill.id} />
                {skill.adder >= 1 ? <p className='adder'>+{skill.adder}</p>  : <p className='adder'>{skill.adder}</p>}
                
                <p className='name'>{skill.name}</p>
                <p className='atribute'>({skill.atribute})</p>
              </div>
            ))}
          </div>
          <div className="life">
            <h1>Vida</h1>
            <p>Adicionar/Remover vida:</p>
            <Input type='number' placeholder='0-54' onSubmit={() => {}} />
            <p>7d8 = 54</p>
            <div className="group-button">
              <Button size='base' label='Descanso Longo' backgroundColor='red'/>
              <Button size='base' label='Tomar dano' backgroundColor='green'/>
              <Button size='base' label='Recuperar vida' backgroundColor='blue'/>
            </div>
          </div>
        </SkillsAndLife>

      </Container>
  )
}

type routes ={
  params:{
    name: string
  }
}

export const getStaticProps = async (name: routes) => {
  let url = process.env.ENVIROMENT
  const res = await fetch(`${url}/api/Characters/${name.params.name}`)
   const character: CharactersType = await res.json()
   return{
     props:{
      character,
      fallback: false
     }
   }
   
 }
 export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}