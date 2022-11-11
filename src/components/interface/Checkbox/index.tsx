import { CircleWavy, CircleWavyCheck } from 'phosphor-react';
import React from 'react'
import { Container } from './styles';

export default function CheckboxComponent(props: {activated?: boolean, notAllowed?: boolean}) {
    
    const HandleClick = () => {
      console.log(props.notAllowed);
        if (props.notAllowed) return
        if (checked){
          setChecked(false)
        }else{
        setChecked(true)
        }
      }

      let cursorType = ''
      if(props.notAllowed === true){
        cursorType = 'not-allowed'
      }else{
        cursorType = 'pointer'
      }

  const [checked, setChecked] = React.useState(props.activated);
  return (
    <Container isAllowed={cursorType}>
      {checked === true && <CircleWavyCheck className='checked' weight="fill" onClick={HandleClick} size={24} />}
      {checked === false && <CircleWavy onClick={HandleClick} size={24} />}
    </Container>
  )
}
