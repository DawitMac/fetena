import Exam from './Exam'
import { getExam } from '@/app/server/actions'
import Practice from './Practice';
//import { dehydrate , HydrationBoundary , QueryClient } from '@tanstack/react-query';


 





 
export default async function Page({ params }) {
   const { subject } = params;
   const year = Number(subject[1])
 
const examination = await getExam(subject[0] , year)
  // const queryClient = await new QueryClient()
  // await queryClient.prefetchQuery({
  //   queryKey : ["exam"] ,
  //   queryFn : getExam(subject[0] , year )
  // })


if(Number(subject[2]) == 2){
  return <Practice examination={examination} />
}
  return(
    // <HydrationBoundary state={dehydrate(queryClient)}>
  <Exam examination={examination}  />
  // </HydrationBoundary>
   
  )
}



