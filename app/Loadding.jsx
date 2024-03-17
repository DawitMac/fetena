"use client"
import React from 'react'
import { HashLoader } from 'react-spinners'
const Loadding = () => {
  return (
    <div className='h-screen flex items-center justify-center md:text-8xl text-xl'>
        <HashLoader color="#36d7b7" />
    </div>
  )
}

export default Loadding