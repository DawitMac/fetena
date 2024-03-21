'use client'
import React , {useState , useEffect } from 'react'
import { Modal  } from 'antd'
import Link from 'next/link'
import { Select, Option, Button } from "@material-tailwind/react";




const ExamList = ({examination}) => {
  console.log(examination)
  const [value , setValue ] = useState("english")
  const [ open ,setOpen ] = useState(false)
  const [ selectedYear , setSelectedYear ] = useState("2014")
  const [ years , setYears ] = useState([])
  const [data , setData ] = useState(examination?.data)


  useEffect(()=>{
     const info = data?.filter((val)=> val?.name == value)
     setYears(info)
   console.log(selectedYear ,'selectedYear' , years , "years")
    
  },[value , selectedYear])

if(!data){
  return (
    <div className='flex flex-col items-center justify-center gap-20'>
    <h1 className='text-3xl font-mono my-12 pl-6 items-center text-center sm:text-start'>Challenge Yourself , Elevate Your Intelligence</h1>
   
<div width={300} height={200} className='flex lg:flex-row flex-col items-center justify-around lg:gap-4 gap-10 '  >
    <div className=' w-72 h-10  bg-gray-100/90 animate-pulse'></div>
    <div className='w-72 h-10  bg-gray-100/90 animate-pulse'></div>
    <div className='w-72 h-10  bg-gray-100/90 animate-pulse'></div>
  </div>
  <div className='w-28 h-10 bg-gray-100/90 animate-pulse rounded-lg'></div>
    </div>
  

    
  )}

  return (
    <div className='flex flex-col items-center justify-center'>
     
     
  <div className='flex flex-col items-center justify-center gap-20'>
  <h1 className='md:text-3xl text-2xl  font-bold font-mono my-12  pl-6 items-center text-center flex-wrap'>Challenge Yourself , Elevate Your Intelligence</h1>
  <div className='flex lg:flex-row flex-col items-center justify-around lg:gap-4 gap-10'>
   <div className="w-72">
      <Select label="Select Field" color="green">
        <Option>Social Science</Option>
      </Select>
    </div>
    <div className="w-72">
      <Select label="Select Subject" value={value} onChange={(val)=> setValue(val)} color="yellow">
        <Option value="english">English</Option>
        <Option value="SAT">SAT</Option>
        <Option value="geography">Geography</Option>
        <Option value="history">History</Option>
        <Option value="economics">Economics</Option>
      </Select>
    </div>
    <div className="w-72">
      <Select label="Select Year" color="red" value={selectedYear} >
 {
  years?.map((val)=>(
   <Option key={val?._id} onClick={(()=> setSelectedYear(`${val?.year}`))}>{`${val?.year}`}</Option>
  ))
 }
      </Select>
    </div>
   </div>
   <div className='flex items-center justify-center gap-12 md:gap-20'>
   <Button onClick={()=> setOpen(true)}>Start Exam</Button>
   <Link href={`/dashboard`}><Button>GoTo Dashboard</Button></Link>
   </div>
  </div>
  <Modal 
                 title='Exam Type'
                 open={open}
                 onCancel={()=>{setOpen(false)}} 
                 onOk={()=> setOpen(false)}
                 okType='default' >
          {<div className='flex flex-col items-center justify-center'>
            <p className='text-xl font-serif font-normal mt-6'>In which way do you want to take the exam ? Exam mode or Practive mode ? </p>
              <div className='m-12 p-8 flex items-center justify-center gap-6'>
                <Link href={`exam/${value}/${selectedYear}/1`}>
                  <Button>Exam Mode</Button>
                </Link>
                <Link href={`exam/${value}/${selectedYear}/2`}>
                  <Button>Practice Mode</Button>
                </Link>
              </div>
              </div>}
          </Modal>
    </div>
  )}
  


export default ExamList

 {/* <div className='grid md:grid-cols-4 sm:grid-cols-2 flex-nowrap'>
        {
          exam.map(item=>(
            <div   onClick={()=> {
              setOpen(true)
              setSelectedSubject(item.name)
              }} className='flex flex-col items-center justify-center md:gap-4 gap-2 md:m-8 m-2 rounded-xl shadow-xl hover:scale-105 duration-300 cursor-pointer' key={item.name}>

              
              <Image src={item.img} width={200} height={200} className='' alt='subject' />
             <h1 className='md:text-2xl text-xl font-serif font-bold text-White my-2'>{item.name}</h1>
            </div>
          ))
        }
      </div> 
    
    {
    exam.map(item=>(
    <div   onClick={()=> {
      setOpen(true)
      setSelectedSubject(item.name)
      }} className='flex flex-col items-center justify-center md:gap-4 gap-2 md:m-8 m-2 rounded-xl shadow-xl hover:scale-105 duration-300 cursor-pointer' key={item.name}>


       <Modal 
                 title='Exam Menu'
                 open={open}
                 onCancel={()=>{setOpen(false)}} 
                 onOk={()=> setOpen(false)}
                 okType='default' >
            {<div className='m-12 p-8 grid grid-cols-2 items-center justify-center gap-6'>
                <Link href={`exam/${selectedSubject}`}>
                   <button className='px-3 py-2 text-xl font-sans shadow rounded-lg bg-red-500 text-white'>2010</button>
                </Link>
                <button className='px-3 py-2 text-xl font-sans shadow rounded-lg bg-red-500 text-white'>2011</button>
                <button className='px-3 py-2 text-xl font-sans shadow rounded-lg bg-red-500 text-white'>2012</button>
                <button className='px-3 py-2 text-xl font-sans shadow rounded-lg bg-red-500 text-white'>2013</button>
                <button className='px-3 py-2 text-xl font-sans shadow rounded-lg bg-red-500 text-white'>2014</button>
                <button className='px-3 py-2 text-xl font-sans shadow rounded-lg bg-red-500 text-white'>2015</button>

              </div>}
          </Modal>
    
    
    */}