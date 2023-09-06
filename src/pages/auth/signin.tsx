import Link from 'next/link'
import React from 'react'
import { cn } from '~/utils/utils'
import type { GetServerSidePropsContext } from 'next'
import { type InferGetServerSidePropsType } from 'next/types'
import { authOptions } from '~/server/auth'
import { getServerSession } from 'next-auth'
import { getProviders, signIn } from 'next-auth/react'
import { Icons } from '~/components/Icons'
import { ChevronLeft } from 'lucide-react'
import { env } from '~/env.mjs'

export default function signin() {
 //   {
 //  providers,
 // }: InferGetServerSidePropsType<typeof getServerSideProps>
 return (
  <div className="absolute inset-0">
   <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
    {/* <Link
     href="/"
     className={cn(buttonVariants({ variant: 'ghost' }), '-mt-20 self-start')}
    >
     <ChevronLeft className="mr-2 h-4 w-4" />
     Home
    </Link> */}
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
     <div className="flex flex-col space-y-2 text-center">
      <Icons.logo className="mx-auto h-6 w-6" />
      <h1 className="text-2xl font-semibold tracking-tight">
       Bem-vindo de volta!
      </h1>
      <p className="mx-auto max-w-xs text-sm">
       Ao continuar você aceita cpom os nossos Termos de Uso e Política de
       Privacidade.
      </p>
     </div>
     {/* {Object.values(providers).map((provider) => (
      <button
       onClick={() =>
        signIn(provider.id, { callbackUrl: 'http://localhost:3000/dashboard' })
       }
       key={provider.name}
       className={`text-white ${
        provider.name === 'Google'
         ? 'bg-[#050708]  hover:bg-[#050708]/90  focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-[#050708]/50'
         : 'bg-[#5865F2]  hover:bg-[#5865F2]/90  focus:ring-[#5865F2]/50 dark:hover:bg-[#5865F2]/30 dark:focus:ring-[#5865F2]/50'
       }  mb-2 mr-2  inline-flex items-center justify-around rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4`}
      >
       {provider.name === 'Google' ? (
        <Icons.google className="h-6 w-6" />
       ) : (
        <Icons.discord className="h-6 w-6" />
       )}
       <p className="">Sign in with {provider.name}</p>
      </button>
     ))} */}

     <button
      onClick={() =>
       signIn('Google', { callbackUrl: `${env.NEXTAUTH_URL}/dashboard` })
      }
      className={`mb-2 mr-2  inline-flex  items-center justify-around rounded-lg
        bg-[#050708] px-5  py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-[#050708]/50`}
     >
      <Icons.google className="h-6 w-6" />
      <p className="">Sign in with Google</p>
     </button>
     <button
      onClick={() =>
       signIn('Discord', { callbackUrl: `${env.NEXTAUTH_URL}/dashboard` })
      }
      className={`mb-2  mr-2  inline-flex items-center justify-around rounded-lg bg-[#5865F2]  px-5 py-2.5 text-center text-sm font-medium hover:bg-[#5865F2]/90 focus:outline-none focus:ring-4 focus:ring-[#5865F2]/50 dark:hover:bg-[#5865F2]/30 dark:focus:ring-[#5865F2]/50 `}
     >
      <Icons.discord className="h-6 w-6" />
      <p className="">Sign in with Discord</p>
     </button>

     <p className="text-muted-foreground px-8 text-center text-sm">
      Nunca te vi,{' '}
      <Link
       href="/auth/signup"
       className="hover:text-brand text-sm underline underline-offset-4"
      >
       Crie sua conta
      </Link>
     </p>
    </div>
   </div>
  </div>
 )
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//  const session = await getServerSession(context.req, context.res, authOptions)

//  // If the user is already logged in, redirect.
//  // Note: Make sure not to redirect to the same page
//  // To avoid an infinite loop!
//  //  if (session) {
//  //   return { redirect: { destination: '/dashboard' } }
//  //  }

//  const providers = await getProviders()

//  return {
//   props: {
//    providers: providers ?? [],
//    fallback: false,
//   },
//  }
// }
