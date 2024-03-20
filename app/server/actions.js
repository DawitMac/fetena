import axios from 'axios'
import { signIn } from 'next-auth/react'

const apiUrl = process.env.NEXTAUTH_URL
export async function handleSubmit(code , setErr){
  
 
  try {
    const res = await signIn("credentials" , { code , callbackUrl: `${window.location.origin}/exam` , redirect : false})
    if(!res?.ok){
      setErr("wrong code")
    }else{
      return res?.ok
    }
  } catch (error) {
    console.log(error)
  }
}


export async function getData() {
    
    try {
      const {data} = await axios.get(`${apiUrl}/api/getexam`) 
      return data
    } catch (error) {
      console.log(error)
    }
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
    //console.log(data)
      // if (!res.ok) {
      //   // This will activate the closest `error.js` Error Boundary
      //   throw new Error('Failed to fetch data')
      // }
     
     
    }
    export async function getResult() {
    
      try {
        const {data} = await axios.get(`${apiUrl}/api/result`) 
        return data
      } catch (error) {
        console.log(error)
      }
       
       
       
      }

   export async function getExam( name , year ) {
 
      const {data} = await axios.post(`${apiUrl}/api/getexam` , { name , year}) 
       // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
    
      // if (!res.ok) {
      //   // This will activate the closest `error.js` Error Boundary
      //   throw new Error('Failed to fetch data')
      // }
     
      return data
    }
    export async function handleResult( id , res ){
      const {data} = await axios.post(`${apiUrl}/api/result` , { id , res}) 
        console.log(data)
      }