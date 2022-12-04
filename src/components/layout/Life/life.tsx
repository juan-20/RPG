import { Heart, MinusCircle, PlusCircle } from 'phosphor-react'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Button from '../../interface/Button'
import { Container } from './style'
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../../../services/firebase'
import { onValue, ref, set } from 'firebase/database'

type LifeType ={
    lifeDice: string,
    characterId: number
}

type InputProp ={
  target: {
    value: number
  }
}

export default function Life(props: LifeType) {
  let {lifeDice, characterId} = props
  let totalLife
  const [changedLife, setChangedLife] = useState<any>(0)
  const q: any =  ref(db, `/characters/${characterId}/life`);
  onValue(q, (snapshot) => {
    const data = snapshot.val();
    totalLife = data.life
    
  })
  const [life, setLife] = useState<any>(totalLife)
  
  function changeLife(){
      // @ts-ignore: Unreachable type code error
      event.preventDefault();
      let newLife
    if (changedLife === 0) return
    const query =  ref(db, `/characters/${characterId}/life`);
    if (changedLife < 0) {
      newLife = parseInt(life) + parseInt(changedLife)
      setLife(newLife)
      set(query , {
        life: newLife,
      })

    }else{
      newLife =  parseInt(changedLife) + parseInt(life)
      setLife(newLife)
      set(query , {
        life: newLife,
      })
      toast.success(`Você tem ${newLife} de vida !`, {
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
    console.log(newLife);
    
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
          <p>Sua vida total: {totalLife}-{lifeDice}</p>
        </div>
      </Container></>
  )
}
