import  history  from '@/app/exam.json'
import { connectDB } from '@/utils/database';
import mongoose from 'mongoose'
import { NextResponse } from 'next/server';
import Exam from '@/models/exam';

export async function GET(request){
   // const { name , year , exam } = await request.json()
   // console.log(name , year , exam )
    // mongoose.set('strictQuery', false);
    connectDB()
        try {
        const result = await Exam.create(history)
         console.log('Success')
        console.log(result)
        } catch (error) {
         console.log(error)
        }
        return NextResponse.json({message : "successfully returned"})
} 

