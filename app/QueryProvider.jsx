"use client"

import React , {useState} from 'react'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import  { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const QueryProvider = ({children}) => {
  
 const [ queryClient ] = useState(()=> new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider