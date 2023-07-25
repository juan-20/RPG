import { useSession } from 'next-auth/react';
import React from 'react'

export default function Profile() {
    const { data: sessionData } = useSession();
  return (
    <div>
        <h1>Profile</h1>
        <p>{sessionData?.user.name}</p>


    </div>
  )
}
