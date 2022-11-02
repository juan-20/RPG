import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import React from 'react'
import { CustomButton } from './style'

interface ButtonProps{
  label: string,
  backgroundColor: 'red'| 'green' | 'blue' | 'yellow' | 'brown'
  icon?: string,
  size: 'lg' | 'base' | 'sm'
}

export default function Button(props : ButtonProps) {
  const {label, backgroundColor, icon, size} = props

  let bg = ''
  if(backgroundColor === 'red') bg = '#d33f49'
  if(backgroundColor === 'blue') bg = '#5762d5'
  if(backgroundColor === 'green') bg = '#388659'
  if(backgroundColor === 'yellow') bg = '#D19C1D'
  if(backgroundColor === 'brown') bg = '#322214'

  let widthSize = ''
  if (size === 'base') widthSize = '150px'
  if (size === 'lg') widthSize = '300px'
  if (size === 'sm') widthSize = '50px'

  return (
    <CustomButton size={widthSize} backgroundColor={bg}>
        {icon ? (  <><Script src="https://unpkg.com/phosphor-icons"></Script><i className={icon}></i></> ) : null}
        {label}
      </CustomButton>
  )
}
