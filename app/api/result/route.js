import Exam from "@/models/exam";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export  async function POST(request){
 const { id , res }  = await request.json()
   console.log(id , res)
 connectDB()

    try {
        const data = await Exam.updateOne({ _id : id} , {
            result : res
        })
        return NextResponse.json({message : "success"} , data)
    } catch (error) {
        return NextResponse.error({
            statusCode: 500,
            message: 'An error occurred while fetching exams',
          });
    }


}
export async function GET(){
    connectDB()
    try{
        const data = await Exam.find({} , "name year result");
        return NextResponse.json({ message: 'Successfully returned with exam', data });
    } catch (error) {
      console.log(error);
      return NextResponse.error({
        statusCode: 500,
        message: 'An error occurred while fetching exams',
      });
    }
}
