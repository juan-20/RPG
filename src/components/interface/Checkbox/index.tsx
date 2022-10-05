import React from 'react'
import { StyledCheckbox, StyledIndicator } from './styles';


export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

export default function CheckboxComponent(props: {activated?: boolean, notAllowed?: boolean}) {
    
    const HandleClick = () => {
        if (props.notAllowed) return
        if (checked){
          setChecked(false)
        }else{
        setChecked(true)
        }
      }

  const [checked, setChecked] = React.useState(props.activated);
  return (
    <Checkbox onClick={HandleClick}>
      {checked === true && <CheckboxIndicator/>}
      </Checkbox>
  )
}
