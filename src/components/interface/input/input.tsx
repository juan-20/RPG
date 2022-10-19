import React, { useEffect, useState } from 'react'
import { InputStyle } from './style'

interface InputProps {
    placeholder?: string
    type: 'text' | 'email' 
    onSubmit: (value: string) => void
    autofocus?: boolean
}

export default function Input(props: InputProps) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <InputStyle autoFocus={props.autofocus} type={props.type}
      value={searchInput}
      onChange={(e) => {
        setSearchInput(e.target.value);
        props.onSubmit(e.target.value);
      } }
      placeholder={props.placeholder} />
  )
}
