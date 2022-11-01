import { X } from 'phosphor-react'
import React from 'react'
import Guns from './Guns/guns'
import Inventory from './Invertory'
import Magic from './Magic'
import { Container } from './style'

type PopUpProps= {
  onClose: any
  open: boolean,
  title: string,
  target: 'Inventory' | 'Guns' | 'Magic'
}

export default function Popup(props: PopUpProps ) {
  let {onClose, open, title, target} = props
  if (!open) return null;
  
  return (
    <Container onClick={onClose} className='popup'>
        <div onClick={(e) => {
          e.stopPropagation();
        }}
         className="popup-inner">
          <div className="popup-header">
            <h1>{title}</h1>
            <X className='popup-header-close' onClick={onClose} size={30} />
          </div>
          <main>
            {target === 'Magic' ? <Magic/> : null}
            {target === 'Inventory' ? <Inventory/> : null}
            {target === 'Guns' ? <Guns/> : null}
          </main>
        </div>
    </Container>
  )
}
