import { Heart, MinusCircle, PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Button from '../../interface/Button'
import { Container } from './style'
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../../services/firebase'
import { onValue, ref, set } from 'firebase/database'

type LifeType ={
    totalLife: number,
    lifeDice: string,
}

type InputProp ={
  target: {
    value: number
  }
}

export default function Life(props: LifeType) {
  const {totalLife, lifeDice} = props

  const [changedLife, setChangedLife] = useState<any>(0)
  const [life, setLife] = useState<any>(totalLife)

  function changeLife(){
      // @ts-ignore: Unreachable type code error
      event.preventDefault();

    if (changedLife === 0) return
    
    const query =  ref(db, "/characters/0/life");
    if (changedLife < 0) {
      let newLife = parseInt(life) + parseInt(changedLife)
      setLife(newLife)
      set(query , {
        life: newLife,
      })

    }else{
      let newLife =  parseInt(changedLife) + parseInt(life)
      setLife(newLife)
      set(query , {
        life: newLife,
      })
    }
    



   

    toast.success(`Você tem ${life} de vida !`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
      <>
      <Container>
      <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      className='toaster-bg'
      />
        <h1>Vida</h1>

        <Heart className='heart' size={40} color="#d33f49" weight="fill" />
        <p className='lifeNumber'>{life}</p>

        <div className="changeLife">
          <p>Adicionar/Remover vida:</p>
          <div className="inputSection">
            <div className="minus">
              <MinusCircle onClick={() => { setChangedLife(changedLife - 1) } } size={32} weight="fill" />
            </div>
            <input
              type="text"
              value={changedLife}
              onChange={(e) => setChangedLife(e.target.value)}
              placeholder='0-54' />
            <div className="plus">
              <PlusCircle onClick={() => { setChangedLife(changedLife + 1) } } size={32} weight="fill" />
            </div>
          </div>
          <div className="group-button">
            <div onClick={changeLife} className="group-button-button">
              <Button size='base' label='Alterar vida' backgroundColor='brown' />
            </div>
          </div>
        </div>
      </Container></>
  )
}
