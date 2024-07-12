'use client';
import React, { useState } from 'react' 
import Button from '@/component/button'
import { useRouter } from 'next/navigation';

function Login() {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (input !== null || input !== '') {
      router.push('/todo')
    }
  }
  
  return (
    <div className="flex min-h-screen flex-col m-auto items-center py-24">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='flex flex-col justify-between'>
          <input placeholder='Username' className='text-black border border-white border-rounded' onChange={(e) => setInput(e.target.value)}  type='text'/>
          <Button text='Login' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3' callback={handleLogin}/>
        </div>
      </form>
    </div>
  )
}

export default Login