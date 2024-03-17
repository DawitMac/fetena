'use client'
import React , {useEffect , useState , useRef} from 'react'
import { Modal  } from 'antd'
import Question from './Question'
import Timer from './Timer'
import Special from './Special'
import Loadding from '@/app/Loadding'
import { handleResult } from '@/app/server/actions'



const Exam = ({examination  }) => {

  const [ selectedValue , setSelectedValue ] = useState("")
  const [ min , setMin ] = useState(0)
 
  const [ isAnswered , setIsAnswered ] = useState(false)
  const [ result , setResult ] = useState(0)
  const [ open , setOpen ] = useState(false)
  const checkFinish = useRef()
  const [ showMore , setShowMore ] = useState(false)
  const [ isHIdden , setIsHIdden] = useState(false)
  const [ examResult  , setExamResult ] = useState(Array(examination?.data.exam.length))
 

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

  const handleFinish=()=>{
      
        if(checkFinish.current.textContent == "Restart"){
        window.location.reload();
        }
        if(checkFinish.current.textContent == "Finish"){
          setIsAnswered(true)
          setOpen(true) 
          if(examination?.data.result == 0)
          handleResult(examination?.data._id , result)
        }   
  }

  const handleScrollToTop = () => {
    console.log("vacation to top")
    window.scrollTo({ top: -100, behavior: 'smooth' });
  };
    if(!examination?.data){
        return <Loadding />
    }
    
  return (
    <div className='flex flex-col items-center justify-start h-screen max-w-screen'>
     
      {/* <div className={`fixed flex md:hidden items-center justify-center py-2 shadow bg-white/10 px-10 mt-4 ${isHIdden ? '-translate-y-full' : 'translate-y-0'}`}>
        <p className='text-2xl '>{ hours < 10 ? "0"+hours : hours} : { minutes < 10 ? "0"+minutes : minutes} : { seconds < 10 ? "0"+seconds : seconds}</p>
      </div> */}
    
        <div className='md:hidden flex items-center justify-center text-center'><Timer setIsAnswered={setIsAnswered} isHIdden={isHIdden}/></div>
      <div className='md:relative flex flex-col items-center justify-center md:mt-16 mt-20 w-full'>
        <div className='md:absolute md:left-0 md:top-0'>
           <Question data={examination?.data} open={open} isAnswered={isAnswered} setResult={setResult} result={result} setShowMore={setShowMore} showMore={showMore}  setMin={setMin}  min={min} checkFinish={checkFinish} handleFinish={handleFinish} setSelectedValue={setSelectedValue}  selectedValue={selectedValue} examResult={examResult} />
           </div>
      <div className={`md:flex hidden md:absolute md:right-0 md:top-0  flex-col items-center justify-center gap-y-10 transition-all delay-200 duration-300`}>
      {/* <div className='md:flex hidden items-center justify-center py-2 shadow bg-slate-100 px-5 flex-nowrap sm:hidden '>
        <p className='md:text-2xl lg:text-xl '>{ hours < 10 ? "0"+hours : hours} : { minutes < 10 ? "0"+minutes : minutes} : { seconds < 10 ? "0"+seconds : seconds}</p>
      </div> */}
      <Timer setIsAnswered={setIsAnswered} isHIdden={isHIdden} isAnswered={isAnswered}  />
      <div className={`grid lg:grid-cols-5 md:grid-cols-4  gap-3 ${showMore && 'lg:grid-cols-3'}`}>
        {
          examination?.data.exam.map((item , i )=>(
            <div key={i}>
                
                 
                    <div onClick={()=>{ 
                      setMin(i)
                      setShowMore(!showMore)
                      handleScrollToTop()
                      }} key={i} className={`flex items-center justify-center w-12 h-12 border-2 p-1 cursor-pointer hover:scale-105 duration-300 hover:bg-white/50 hover:text-black/50  ${(examResult[i] && !isAnswered) ? 'bg-gray-400' : (examResult[i] == item.correctAnswer && isAnswered) ?  'bg-green-500/100' :(isAnswered) && 'bg-red-500/100'} `}>
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
                     
                      handleScrollToTop()
                      setMin(index)
                      setShowMore(!showMore)
                    
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

export default Exam