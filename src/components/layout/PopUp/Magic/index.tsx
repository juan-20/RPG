import React from 'react'
import { SpellsType } from '../../../../types/D&D.type'

// type attacksType = Omit<SpellsType, 'id'>

type attacksType ={
  description?: string
}

export default function Magic(props: attacksType) {
  const { description } = props

  return (
    <div className="">
      {description ?(
        <>
        <h1>Descrição</h1>
        <p>{description}</p>
        </>
      ): null}
    </div>
  )
}
