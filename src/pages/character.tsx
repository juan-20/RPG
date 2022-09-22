import { useRouter } from 'next/router';
import React from 'react'

export default function Character() {
    const router = useRouter();
    const { name } = router.query;
    console.log(name)
  return (
    <div>{name}</div>
  )
}
