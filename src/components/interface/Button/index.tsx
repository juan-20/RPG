import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CustomButton } from './style'

interface ButtonProps{
  label: string,
  redirect?: string
}

export default function Button(props : ButtonProps) {
  const {label, redirect} = props
  return (
      <Link href={'/character/' + redirect}>
      <CustomButton>
        {label}
      </CustomButton>
      </Link>
  )
}
