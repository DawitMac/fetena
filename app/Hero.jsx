'use client'
import React, { Suspense } from 'react'

import Link from 'next/link'
import TextTypingEffectWithTexts from './TextTypingEffectWithTexts';
import Image from 'next/image';

const Hero = () => {
  const style = {
    height: 500,
  };
  return (
    <div className='flex items-center justify-center w-screen'>
    <div className='flex items-center h-screen justify-center w-full  md:px-20 px-10'>
      <div className=' text-center md:w-2/5 w-full bg-white flex flex-col items-center justify-center mx-auto gap-10'>
      <p className='md:text-5xl sm:text-5xl text-6xl  font-signiture   leading-16 text-y-2 font-bold '>Ethiopian Entrance <br /> Examination</p>
      <div className="h-16 md:h-10 sm:h-14">
          <TextTypingEffectWithTexts />
      </div>
       <button className='px-3 py-2 bg-amber-600 text-gray-100 hover:scale-105 duration-300 shadow rounded-lg mt-8'>
        <Link href='/exam'>
           Start Exam       
         </Link>
      </button>
      </div>
     <div className='w-3/5 hidden md:flex md:items-center md:justify-center mx-auto'>
      <Image src='/images/exam.png' width={500} height={500} alt="exam" />
     </div>
    </div>
    </div>
  )
}

export default Hero