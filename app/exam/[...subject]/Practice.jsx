'use client'
import React , {useEffect , useState , useRef} from 'react'
//import { Geography2011 } from '@/public/data/data' 
import { Modal  } from 'antd'
//import  {data}  from '@/app/exam'

import PracticeQuestion from './PracticeQuestion'
import { getExam } from '@/app/server/actions'
import { useQuery } from '@tanstack/react-query'
import Special from './Special'
import Loadding from '@/app/Loadding'



const Practice = ({examination  , handleResult }) => {

  // const { data , error ,isLoading } = useQuery({
  //   queryKey : ["data"] , 
  //   queryFn : getExam
  //  })

  const [ selectedValue , setSelectedValue ] = useState("")
  const [ min , setMin ] = useState(0)
 
  const [ isAnswered , setIsAnswered ] = useState(false)
  const [ result , setResult ] = useState(0)
  const [ open , setOpen ] = useState(false)
  const checkFinish = useRef()
  const [ showMore , setShowMore ] = useState(false)
  const [ isHIdden , setIsHIdden] = useState(false)
  const [ examResult  , setExamResult ] = useState(Array(examination?.data.exam.length))
  const [ restart , setRestart ] = useState(false)

  

  // let timer 
  // useEffect(()=>{
  //   timer = setInterval(()=>{
  //     setSeconds(seconds => seconds + 1)
     
  //   },1000)
   
  //   return () => {clearInterval(timer)}
  // },[])
 

  useEffect(()=>{
    let prevScrollPos = window.pageYOffset;
    const handleScroll = ()=>{
      const currentScrollPos = window.pageYOffset;

      if(prevScrollPos > currentScrollPos){
        setIsHIdden(false)
      }else{
        setIsHIdden(true)
      }
      prevScrollPos = currentScrollPos
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll" , handleScroll);
  },[])
  // if(seconds == 59){
  //   setMinutes( minutes => minutes + 1)
  //   setSeconds(0)
  //  }
  //  if(minutes == 59){
  //   setHours( hours => hours + 1)
  //   setMinutes(0)
  //  }
  const handleFinish=()=>{
   // clearInterval(timer)
   setRestart(true)
        if(checkFinish.current.textContent == "Restart"){
        window.location.reload();
        }
        if(checkFinish.current.textContent == "Finish"){
          setIsAnswered(true)
          setOpen(true) 
        }   
  }

  const handleScrollToTop = () => {
    console.log("vacation to top")
    window.scrollTo({ top: -100, behavior: 'smooth' });
  };
    //  useEffect(()=>{
    //   if(minutes==30){
    //     setIsAnswered(true)
    //     setOpen(true)
    //   }
      
    //  },[minutes])
    if(!examination?.data){
        return <Loadding />
    }
    
  return (
    <div className='flex flex-col items-center justify-start h-screen max-w-screen'>
     
      {/* <div className={`fixed flex md:hidden items-center justify-center py-2 shadow bg-white/10 px-10 mt-4 ${isHIdden ? '-translate-y-full' : 'translate-y-0'}`}>
        <p className='text-2xl '>{ hours < 10 ? "0"+hours : hours} : { minutes < 10 ? "0"+minutes : minutes} : { seconds < 10 ? "0"+seconds : seconds}</p>
      </div> */}
    
      <div className='md:relative flex flex-col items-center justify-center md:mt-16 mt-20 w-full'>
        <div className='md:absolute md:left-0 md:top-0'>
           <PracticeQuestion data={examination?.data} result={result} restart={restart} setRestart={setRestart} open={open} isAnswered={isAnswered} setResult={setResult} setShowMore={setShowMore} showMore={showMore} handleResult={handleResult}  setMin={setMin}  min={min} checkFinish={checkFinish} handleFinish={handleFinish} setSelectedValue={setSelectedValue}  selectedValue={selectedValue} examResult={examResult} setIsAnswered={setIsAnswered} setExamResult={setExamResult} />
           </div>
      <div className={`md:flex hidden md:absolute md:right-0 md:top-0  flex-col items-center justify-center gap-y-10 transition-all delay-200 duration-300`}>
      {/* <div className='md:flex hidden items-center justify-center py-2 shadow bg-slate-100 px-5 flex-nowrap sm:hidden '>
        <p className='md:text-2xl lg:text-xl '>{ hours < 10 ? "0"+hours : hours} : { minutes < 10 ? "0"+minutes : minutes} : { seconds < 10 ? "0"+seconds : seconds}</p>
      </div> */}
      <div className={`grid lg:grid-cols-5 md:grid-cols-4  gap-3 ${showMore && 'lg:grid-cols-3'}`}>
        {
          examination?.data.exam.map((item , i )=>(
            <div key={i}>
                
                 
                    <div onClick={()=>{ 
                      setIsAnswered(false)
                      setMin(i)
                      setShowMore(!showMore)
                      handleScrollToTop()
                      }} key={i} className={`flex items-center justify-center w-12 h-12 border-2 p-1 cursor-pointer hover:scale-105 duration-300 hover:bg-white/50 hover:text-black/50  ${ ((examResult[i]?.value == item.correctAnswer) && (isAnswered || examResult[i]?.status)) ?  'bg-green-500/100' : ((isAnswered || examResult[i]?.status) && examResult[i]?.status ) && 'bg-red-500/100'} `}>
                      {i + 1}                                     
                    </div>
                  
                         
            </div>
          ))
        }
      </div>
      </div>
     </div> 
     
      <div className='md:hidden grid grid-cols-5 mt-2 gap-2 p-1 border-2 border-black/50 my-4 max-w-md px-2 text-sm '>
        {
         
           
                
                   examination?.data.exam.map((ex , index)=>(
                    <div onClick={()=>{ 
                     
                      setIsAnswered(false)
                      setMin(i)
                      setShowMore(!showMore)
                      handleScrollToTop()
                    
                      }} key={index} className={`flex items-center justify-center w-12 h-12 border-2 p-1 cursor-pointer hover:scale-105 duration-300 hover:bg-white/50 hover:text-black/50  ${(ex.selectedChoice && !isAnswered) ? 'bg-slate-400' : (ex.selectedChoice === ex.correctAnswer && isAnswered) ?  'bg-green-500/100' : (ex.selectedChoice === ex.selectedChoice && isAnswered) && 'bg-red-500/100'} `}>
                      {index + 1}
                    </div>
                  ))
                          
            
          
        
        }
         
      </div>
      <Modal 
                 title='Exam Result'
                 open={open}
                 onCancel={()=>{setOpen(false)}} 
                 onOk={()=> setOpen(false)}
                 okType='default' >
            {<div className='m-12 p-8 flex flex-col items-center justify-center gap-12'>
                <h1 className='text-2xl font-serif font-semibold'>Your Exam Result Is :</h1>
                <p className={`text-4xl  ${result > 3 ? 'bg-green-500 text-white' : result < 3 ? 'bg-red-500 text-white' : ''} font-sans mb-2 p-5 rounded-full `}>{result}</p>
              </div>}
          </Modal>
      
        <Special />
     
    </div>
  )
}

export default Practice