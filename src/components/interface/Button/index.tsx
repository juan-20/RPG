import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CustomButton } from './style'

interface ButtonProps{
  label: string,
  redirect?: string
  backgroundColor: 'red'| 'green' | 'blue'
}

export default function Button(props : ButtonProps) {
  const {label, redirect, backgroundColor} = props

  let bg = ''
  if(backgroundColor === 'red') bg = '#d33f49'
  if(backgroundColor === 'blue') bg = '#5762d5'
  if(backgroundColor === 'green') bg = '#388659'

  return (
      <Link href={'/character/' + redirect}>
      <CustomButton backgroundColor={bg}>
        {label}
      </CustomButton>
      </Link>
  )
}
