import { NextResponse } from 'next/server';
import Exam from '@/models/exam';
import { connectDB } from '@/utils/database';

export async function GET(request) {
  await connectDB();

  try {
    const data = await Exam.find({} , "name year");
    return NextResponse.json({ message: 'Successfully returned with exam', data });
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      statusCode: 500,
      message: 'An error occurred while fetching exams',
    });
  }

}


export async function POST(request){
  const { name , year } = await request.json()
  await connectDB();

  try {
    const data = await Exam.findOne({name , year});
    return NextResponse.json({ message: 'Successfully returned with exam', data });
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      statusCode: 500,
      message: 'An error occurred while fetching exams',
    });
  }
}

//MONGODB_URI = mongodb+srv://dawit:dave1234@cluster0.evvv5hq.mongodb.net/?retryWrites=true&w=majority
