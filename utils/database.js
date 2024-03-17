import mongoose from "mongoose";

export const connectDB = async()=>{
try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Successfully connected to db yooohuuuu")
} catch (error) {
    console.log(error)
}    
}

