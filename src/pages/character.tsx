import { useRouter } from 'next/router';
import React from 'react'

export default function character() {
    const router = useRouter();
    const { name } = router.query;
    console.log(name)
  return (
    <div>{name}</div>
  )
}
