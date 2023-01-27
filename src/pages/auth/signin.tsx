import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Container } from './signin.styled'

export default function signin() {
  return (
    <Container>
        <div className="login">
            <button>
                <FcGoogle size={18} />
                <p>Sign in with Google</p>
            </button>
        </div>
    </Container>
  )
}



