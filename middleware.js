import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const cookie = req.cookies;
  //console.log(cookie , req.cookies)
  if (cookie === undefined) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url, req.url);
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/exam/:subject*' , '/exam'],
}