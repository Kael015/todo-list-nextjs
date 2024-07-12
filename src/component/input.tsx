import React, { ComponentPropsWithRef } from 'react'

interface Props extends ComponentPropsWithRef<'input'> {
    text?: string
    callback?: () => any
  }

export default function Input({ text, className, callback, type }: Readonly<Props>) {
  return (
    <input type={type} onChange={callback} className={className} placeholder={text}/>
  )
}
