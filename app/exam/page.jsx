import React from 'react'
import ExamList from './ExamList'

//import {dehydrate , HydrationBoundary , QueryClient } from "@tanstack/react-query"
import { getData } from '../server/actions'

 



 
const Page = async() => {

  // const queryClient = await new QueryClient()
  // await queryClient.prefetchQuery({
  //   queryKey : ["exam"] ,
  //   queryFn : getData
  // })
const examination = await getData()
 //console.log(angry.examination)
  return(
    
    // <HydrationBoundary state={dehydrate(queryClient)}>
      <ExamList examination={examination}  />
  //  </HydrationBoundary>
         
  
  
    
  )
}
export default Page



