
import React , { useState , useEffect} from 'react'

const Timer = ({setIsAnswered , isHIdden , isAnswered}) => {

    const [ seconds , setSeconds ] = useState(0)
    const [ minutes , setMinutes ] = useState(0)
    const [ hours , setHours ] = useState(0)

    let timer 
    useEffect(()=>{
      timer = setInterval(()=>{
        setSeconds(seconds => seconds + 1)
       
      },1000)
     
      return () => {clearInterval(timer)}
    },[])

    useEffect(()=>{
        if(minutes==30){
          setIsAnswered(true)
          setOpen(true)
        }
        
       },[minutes])
  
    if(seconds == 59){
        setMinutes( minutes => minutes + 1)
        setSeconds(0)
       }
       if(minutes == 59){
        setHours( hours => hours + 1)
        setMinutes(0)
       }
       if(isAnswered){
        return () => {clearInterval(timer)}
       }

  return (
    <div>
         <div className={`fixed flex md:hidden items-center justify-center py-2 shadow bg-white/10 px-10 mt-4 ${isHIdden ? '-translate-y-full' : 'translate-y-0'}`}>
        <p className='md:text-2xl text-xl'>{ hours < 10 ? "0"+hours : hours} : { minutes < 10 ? "0"+minutes : minutes} : { seconds < 10 ? "0"+seconds : seconds}</p>
         </div>
         <div className='md:flex hidden items-center justify-center py-2 shadow bg-slate-100 px-5 flex-nowrap sm:hidden '>
        <p className='md:text-2xl lg:text-xl '>{ hours < 10 ? "0"+hours : hours} : { minutes < 10 ? "0"+minutes : minutes} : { seconds < 10 ? "0"+seconds : seconds}</p>
      </div>
    </div>
  )
}

export default Timer