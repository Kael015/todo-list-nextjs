import React, { ComponentPropsWithRef, ReactNode } from 'react'

interface Props extends ComponentPropsWithRef<'button'> {
  text?: string
  callback?: () => any
}

export default function Button({ text, className, callback, type }: Readonly<Props>) {
  return (
    <button className={className} onClick={callback} type={type}>
      {text}
    </button>
  )
}
