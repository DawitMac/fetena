"use client"

import React , { useState} from 'react'
//import { RadioGroup  , RadioGroupItem } from '../Radio'




const PracticeQuestion = ({data , open , isAnswered ,setResult ,setShowMore ,showMore , setMin , min  , checkFinish , handleFinish , selectedValue  , setSelectedValue , handleResult ,setExamResult , setIsAnswered , restart , result }) => {
  
    const [ questionResult  , setQuestionResult ] = useState(Array(data?.exam.length))
    
    
const handleExam = () =>{
  const totalResult = data?.exam.filter((item , index ) => item?.correctAnswer == questionResult[index])
                       console.log(totalResult , "totalResult")
                       //setResult(totalResult.length)
}
const handleClick = ( value ,answer) => {
                        setIsAnswered(true)
                      //setSelectedValue(choice?.value) 
                        questionResult[min] = {value , status: true}
                        if( value == answer ){
                          const totalResult = data?.exam.filter((item , index ) => item?.correctAnswer == questionResult[index]?.value)
                         
                          setResult(totalResult.length)
                        
                         // setSelectedValue("")
                        }
                        setExamResult(questionResult)
                      
                       

                      
                      if(open && item?.result == 0){
                        console.log(result)
                       handleResult(item?._id , totalResult.length)
                      }
                      
}

  return (
    <div> 
        {/* <Special />       */}
      <div className={`md:pl-8 lg:pl-8 pl-3 md:w-3/4  flex transition-all ease-in-out delay-200 duration-300`}>
    {
        data?.exam.slice(min , min + 1).map((item ,i)=>{
           const displayedText = showMore ? item?.explanation : item?.explanation?.substring(0 ,20)
          // let updatedQuestion = JSON.stringify(item?.question)
        //  updatedQuestion = updatedQuestion.replace(/ \\n/g, '\n');
         // console.log(updatedQuestion , typeof updatedQuestion)
          return( <div key={item?.correctAnswer} className='text-xl font-sans font-normal md:text-lg lg:text-xl sm:text-md sm:ml-5'>        
             <p className='whitespace-pre-wrap w-full'>{min + 1 } , {item?.question}</p>
              <div className='flex flex-col flex-wrap md:ml-2 lg:ml-20 ml-8 my-6 text-md font-mono font-normal gap-5'>
              {
                 item?.choices.map((choice , index)=>(
                  <label className={`flex md:text-lg lg:text-xl sm:text-sm gap-2 w-fit cursor-pointer px-1 ${((item?.correctAnswer == choice?.value ) && (isAnswered || questionResult[min]?.status)) ?  'bg-green-500' : (questionResult[min]?.value == choice?.value && (isAnswered || questionResult[min]?.status)) && 'bg-red-500' }`} key={index} 
                  onClick={() =>{
                   
                        handleClick(choice?.value , item?.correctAnswer)
                  } }>
                    <input type='radio' name='choice'  disabled={restart} checked={ (questionResult[min]?.value == choice.value) && 'checked' }  readOnly className='transition-all duration-200 ease-in-out cursor-pointer delay-200 '  />
                    {/* <RadioGroup defaultValue="choice">
                          <RadioGroupItem name='choice'  value={choice.value} id={choice.index} disabled={isAnswered} />
                    </RadioGroup> */}
                    <span>{choice.value}</span>
                  </label>
                  
                
                 ))
                   
                   
               }
       
              </div>
           <div className='transition-all duration-300 delay-200 ease-in'>
           {
               isAnswered &&  <div className='my-2 flex flex-col items-start justify-center'>
               <p className=' text-xl font-sans font-semibold text-amber-500'>explanation</p>
              <div className=' p-6 my-2 bg-slate-200'>
                 <p className='text-lg font-mono font-normal transition-all duration-200'>{displayedText}</p>
              </div>
              <button className='px-2 py-1 my-1 bg-slate-200 text-sm font-serif rounded-lg font-light' onClick={()=> setShowMore(!showMore)}>{!showMore ? "show more" : "show less"}</button>
              </div>
              
             }
           </div>
           <div className='flex items-center justify-center md:gap-20 gap-10 mx-auto'>
       <button onClick={()=> {
        
         if(min > 0){
           setMin(min => min - 1)
         }
         setShowMore(false)
       }} className='px-3 py-2 bg-violet-500 text-white sm:text-sm bg-blue-500 font-serif rounded-md shadow-md hover:bg-violet-500/50 hover:text-white/50 transition-all ease-out duration-200'>prev</button>
        <button onClick={()=> {
            setIsAnswered(false)
         if(min < data.exam?.length - 1){
           setMin(min => min + 1)
         }
         setShowMore(false)

       }} className='px-3 py-2 bg-violet-500 text-white sm:text-sm bg-blue-500 font-serif rounded-md shadow-md hover:bg-violet-500/50 hover:text-white/50 transition-all ease-out duration-200'>next</button>
       {
          ((min == data.exam?.length - 1)) &&
           <button ref={checkFinish} onClick={()=>{ 
            handleFinish()
          }} className='px-3 py-2 bg-red-500 sm:text-sm md:text-lg text-white font-serif rounded-md shadow-md hover:bg-red-500/50 hover:text-white/50 transition-all ease-out duration-200'>{ restart ? "Restart" : "Finish"}</button>
       }
     </div>
           </div>)
   })
  
        

     
    }

  </div>

  </div>
  )
}

export default PracticeQuestion