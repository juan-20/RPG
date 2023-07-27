import React, { memo, useCallback, useEffect, useRef } from 'react'
import Header from '@editorjs/header'
import EditorJS, { type OutputData } from '@editorjs/editorjs'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'
import Quote from '@editorjs/quote'
import Table from '@editorjs/table'

export const EDITOR_TOOLS = {
 header: Header,
 list: {
  class: List,
  inlineToolbar: true,
  config: {
   defaultStyle: 'unordered',
  },
  embed: Embed,
  quote: Quote,
  table: {
   class: Table,
   inlineToolbar: true,
   config: {
    rows: 2,
    cols: 3,
   },
  },
 },
}

//props
interface Props {
 data?: OutputData
 onChange(val: OutputData): void
 holder: string
}

const Editor = ({ data, onChange, holder }: Props) => {
 //add a reference to editor
 const ref = useRef<EditorJS>()

 //initialize editorjs
 useEffect(() => {
  //initialize editor if we don't have a reference
  if (!ref.current) {
   const editor = new EditorJS({
    holder: holder,
    tools: {
     header: Header,
     list: {
      class: List,
      inlineToolbar: true,
      config: {
       defaultStyle: 'unordered',
      },
     },
     embed: Embed,
     quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
       quotePlaceholder: 'Enter a quote',
       captionPlaceholder: "Quote's author",
      },
     },
    },
    data,
    async onChange(api, event) {
     const data = await api.saver.save()
     onChange(data)
    },
    hideToolbar: false,
   })
   ref.current = editor
  }

  //add a return function handle cleanup
  return () => {
   if (ref.current?.destroy) {
    ref.current.destroy()
   }
  }
 }, [])

 return (
  <div
   id={holder}
   className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
  />
 )
}

export default memo(Editor)
