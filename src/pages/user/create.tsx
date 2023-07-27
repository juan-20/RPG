import { type OutputData } from '@editorjs/editorjs'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import EditorComponent from '~/components/Editor'
import Editor from '~/components/Editor'
import EditorJsRenderer from '~/components/EditorJsRenderer'

interface Inputs {
 name: string
 avatarUrl: string
 race: string
 level: number
 class: string
 alignment: string
 background: string
 age: number
 height: number
 weight: number
 eyes: string
 skin: string
 hair: string
 Atualife: number
 maxlife: number
 temporarylife: number
 mana: number
 displacement: number
 ac: number
 initiative: number
 cdToAvoidMagic: number
 modAtackMagic: number
 spellcastingAttribute: number
}

const EditorBlock = dynamic(() => import('../../components/Editor'), {
 ssr: true,
})

export default function Create() {
 const [image, setImage] = useState(null)
 const [data, setData] = useState<OutputData>()
 const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
 } = useForm<Inputs>()
 const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

 const avatarUrl = watch('avatarUrl')
 const bg = watch('background')

 function convertToBase64(e) {
  console.log(e)
  const reader = new FileReader()
  reader.readAsDataURL(e.target.files[0])
  reader.onload = () => {
   console.log(reader.result)
   setImage(reader.result)
  }
  reader.onerror = function (error) {
   console.log('Error: ', error)
  }
 }

 return (
  <main className="mb-40 space-y-40 bg-white dark:bg-gray-900">
   <div className="relative" id="home">
    <div
     aria-hidden="true"
     className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
     <div className="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px] dark:from-blue-700"></div>
     <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
    </div>
    <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
     <div className="relative ml-auto pt-36">
      <div className="mx-auto lg:w-2/3">
       <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="pb-8 text-3xl font-bold">Crie seu personagem</h2>

        <div className="flex flex-col">
         <label htmlFor="">Nome *</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          id="grid-first-name"
          defaultValue=""
          placeholder="Nome"
          {...register('name', { required: true })}
         />
         {errors.name && (
          <p className="text-xs italic text-red-500">
           Please fill out this field.
          </p>
         )}
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Avatar *</label>

         <label
          htmlFor="dropzone-file"
          className="mx-auto flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
         >
          {image === null ? (
           <>
            <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-10 w-10 text-blue-500"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             stroke-width="2"
            >
             <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
             />
            </svg>
            <h2 className="mt-4 text-xl font-medium tracking-wide text-gray-700">
             Token
            </h2>

            <p className="mt-2 tracking-wide text-gray-500">
             Upload or darg & drop your file SVG, PNG, JPG or GIF.{' '}
            </p>
           </>
          ) : (
           <>
            <img src={image} alt="" />
            <p className="mt-2 tracking-wide text-gray-500">Bonito ein!</p>
           </>
          )}

          <input
           {...register('avatarUrl', { required: true })}
           id="dropzone-file"
           type="file"
           className="hidden"
           onChange={convertToBase64}
          />
         </label>

         {errors.avatarUrl && (
          <p className="text-xs italic text-red-500">
           Please fill out this field.
          </p>
         )}
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Raça</label>
         <select
          id="countries"
          {...register('race')}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
         >
          <option selected>Choose a race</option>
          <option value="AE">Alto-elfo</option>
          <option value="AC">Anão de colina</option>
          <option value="GR">Gnomo das rochas</option>
          <option value="HL">Halfling pés leves</option>
          <option value="HU">Humano</option>
          <option value="ME">Meio-elfo</option>
          <option value="MO">Meio-orc</option>
          <option value="TI">Tiefiling</option>
         </select>
        </div>

        <div className="grid grid-cols-2 justify-center gap-2">
         <div className="col-span-1">
          <label htmlFor="">Descrição</label>
          <EditorBlock
           data={data}
           {...register('background')}
           onChange={setData}
           holder="editorjs-container"
          />
         </div>
         <div className="col-span-1 p-16">
          <label htmlFor="">Preview:</label>
          {/* {data && <EditorJsRenderer data={data} />} */}
         </div>
        </div>

        <p>{JSON.stringify(register.length)}</p>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Nível</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('level')}
          placeholder="Nível"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Classe</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('class')}
          placeholder="Classe"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Alinhamento</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('alignment')}
          placeholder="Alinhamento"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Idade</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('age')}
          placeholder="Idade"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Altura</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('height')}
          placeholder="Altura"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Peso</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('weight')}
          placeholder="Peso"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Olhos</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('eyes')}
          placeholder="Olhos"
         />
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Pele</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('skin')}
          placeholder="Pele"
         />
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Cabelo</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('hair')}
          placeholder="Cabelo"
         />
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Vida atual</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('Atualife')}
          placeholder="Vida atual"
         />
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Vida máxima</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('maxlife')}
          placeholder="Vida máxima"
         />
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Mana</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('mana')}
          placeholder="Mana"
         />
        </div>
        <div className="flex flex-col justify-start">
         <label htmlFor="">Deslocamento</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('displacement')}
          placeholder="Desclocamento"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">A.C.</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('ac')}
          placeholder="A.C."
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Iniciativa</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('initiative')}
          placeholder="10 + modificador de destreza"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">CD para evitar magia</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('cdToAvoidMagic')}
          placeholder="10 + modificador de atributo + bônus de proficiência"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Modificador para magia de atque</label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('modAtackMagic')}
          placeholder="10 + modificador de atributo + bônus de proficiência"
         />
        </div>

        <div className="flex flex-col justify-start">
         <label htmlFor="">Atributo de </label>
         <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register('spellcastingAttribute')}
          placeholder="10 + modificador de atributo + bônus de proficiência"
         />
        </div>

        <input type="submit" />
       </form>
      </div>
     </div>
    </div>
   </div>
  </main>
 )
}
