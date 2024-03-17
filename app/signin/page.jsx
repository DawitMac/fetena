'use client'
import React , { useState } from 'react'
import { handleSubmit } from '../server/actions'
import { useRouter } from 'next/navigation'


const Page = () => {
  const [err , setErr ] = useState("")
  const [ info , setInfo ]= useState(0)
  const router = useRouter()

  const handleForm = (e) => {
    e.preventDefault()
    alert("i am there")
   const status =  handleSubmit(info , setErr)
   if(status){
    router.push('/exam')
   }
  }
    
  return (
    <div className='flex items-center justify-center h-screen -mt-16 '>
    <div className='flex flex-col gap-8 items-center justify-center shadow rounded p-16 bg-gray-100/80'>
        <p className='text-4xl font-serif '>Sign In</p>
      <form onSubmit={(e)=>handleForm(e)} className='flex flex-col items-center justify-center gap-6'>
        <label className='flex flex-col items-start gap-1 justify-center'>
            Student Code
            <input onChange={(e)=> setInfo(e.target.value)} type='number' className='outline-none border border-violet-600/40 px-1 py-1 text-sm w-72'  />
        </label>
        {
          err && <p className='text-md font-sans text-red-500'>{err}</p>
        }
        <input  type='submit' className='flex items-center justify-center px-3 py-2 bg-blue-600 text-white font-mono rounded shadow cursor-pointer hover:bg-violet-600/40'/>
      
      </form>
    </div>
</div>
  )
}

export default Page