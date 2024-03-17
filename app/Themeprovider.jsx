'use client'
import React from 'react'
import { ThemeProvider } from "@material-tailwind/react";


const Themeprovider = ({children}) => {
  return (
   <ThemeProvider>{children}</ThemeProvider>
  )
}

export default Themeprovider