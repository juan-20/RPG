import React, { useEffect, useState } from 'react'
import { InputStyle } from './style'

interface InputProps {
    placeholder?: string
    type: 'text' | 'email' 
    onSubmit: (value: string) => void;
}

interface eType {
  key: string
}


export default function Input(props: InputProps) {
  const [searchInput, setSearchInput] = useState('');

  function search (){
    // console.log(searchInput)
    props.onSubmit(searchInput);
  }

  useEffect(() => {
    document.addEventListener('keydown', detectKey, true)
  }, [])
  
  const detectKey = (e: eType) =>  {
    if (e.key === 'Enter'){
      search()
    }
  }
  return (
    <InputStyle type={props.type}
      value={searchInput}
      onChange={(e) => {
        setSearchInput(e.target.value);
        props.onSubmit(e.target.value);
      } }
      placeholder={props.placeholder} />
  )
}
