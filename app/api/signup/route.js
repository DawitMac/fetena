import { NextResponse } from 'next/server';
import { connectDB } from '@/utils/database';

export async function POST(request) {
     const { name } = await request.json()
    connectDB()
     console.log(name)
     return NextResponse.json({result : "it's successful wohoooo"})
}