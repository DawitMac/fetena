'use client'
import React, { Suspense } from 'react'

import Link from 'next/link'
import TextTypingEffectWithTexts from './TextTypingEffectWithTexts';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';

const Hero = () => {
  const style = {
    height: 500,
  };
  return (
    <div className='flex md:items-center items-start justify-start  md:justify-center w-screen'>
    <div className='flex mt-[-5dvh] sm:mt-0 items-center h-[100dvh] justify-center w-full  md:px-20 px-10'>
      <div className=' text-center md:w-2/5 w-full bg-white flex flex-col items-center justify-center mx-auto gap-10'>
      <p className='md:text-5xl sm:text-5xl text-6xl font-serif sm:font-signiture  md:font-signiture   leading-16 text-y-2 font-bold '>Ethiopian Entrance <br /> Examination</p>
      <div className="h-16 md:h-10 sm:h-14 my-3">
          <TextTypingEffectWithTexts />
      </div>
        <Link href='/exam' className='sm:mt-8 mt-16'>
           <Button>Start Exam</Button>     
         </Link>
      </div>
     <div className='w-3/5 hidden md:flex md:items-center md:justify-center mx-auto'>
      <Image src='/images/exam.png' width={500} height={500} alt="exam" />
     </div>
    </div>
    </div>
  )
}

export default Hero