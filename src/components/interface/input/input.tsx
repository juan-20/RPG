import React, { useEffect, useState } from 'react'
import { InputStyle } from './style'

interface InputProps {
    placeholder?: string
    type: 'text' | 'email' | 'number'
    autofocus?: boolean,
    size: 'sm' | 'lg'
    value: string | number
    handleOnChange: any
}


export default function Input(props: InputProps) {
  const [searchInput, setSearchInput] = useState('');
  let {size, value, handleOnChange} = props

  let widthSize = ''
  if (size === 'lg') widthSize = '100px'
  if (size === 'sm') widthSize = '50px'

  return (
    <InputStyle 
      size={widthSize} 
      type={props.type}
      placeholder={props.placeholder} 
      autoFocus={props.autofocus} 
      value={searchInput}
      onChange={handleOnChange}
    />
  )
}
