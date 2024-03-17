import NextAuth from "next-auth/next";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            type : "credentials",
            credentials : {},
            async authorize(credentials, req){
                 const {  code  } = credentials
                 console.log(code)
                 if(code == 932609 ){
                    return new NextResponse({ res : "the  code is right"} , { status : 201})
                   
                 }else{
                    throw new Error({ error : " The code you provided is incorrect Please provide the right one."}) ;
                 }
            } ,
            async signOut(){
                return true
            } ,
            pages : {
                signIn : "/exam"
            }
          }) 
         
    ] ,
    
  
}) 
export { handler as GET , handler as POST}