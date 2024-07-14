import React, { ComponentPropsWithRef, FormEvent } from 'react'

interface Props extends ComponentPropsWithRef<'input'> {
  text?: string
  callback?: (e: FormEvent<HTMLInputElement>) => any
}

export default function Input({ text, className, callback, type, name }: Readonly<Props>) {
  return (
    <input type={type} id={name} onChange={callback} className={className} placeholder={text}/>
  )
}
