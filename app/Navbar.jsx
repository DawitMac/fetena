import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-16  flex items-center justify-between px-16'>
        <p className='text-3xl text-red-500/100 font-serif'>
            Exam
        </p>
        <Link href='/signin'>
        <button className='flex items-center justify-center px-2 py-1 bg-violet-600 text-white rounded shadow hover:scale-105 hover:bg-violet-600/60'>
            Sign In
        </button>
        </Link>
       
    </div>
  )
}

export default Navbar