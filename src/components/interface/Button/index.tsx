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
  const router = useRouter();
  return (
    <div
    onClick={() => {
      router.push({
     pathname: '/character',
     query: {
       name: redirect,
     }
    })}
    }
    >
      <CustomButton>
        {label}
      </CustomButton>
      </div>
  )
}
