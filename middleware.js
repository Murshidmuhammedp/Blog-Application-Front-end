// import { NextResponse } from "next/server";

// export function middleware(request) {
//     const token = request.cookies.get("token");

//     console.log(token, "token retrieved from cookie");

//     // Redirect to the home page if token is not present
//     if (!token) {
//         return NextResponse.redirect(new URL('/', request.url));
//     }

//     // If token is present, continue with the request
//     return NextResponse.next();
// }

import { NextResponse } from 'next/server'
import { authenticate } from 'auth-provider'
 
export function middleware(request) {
  const isAuthenticated = authenticate(request)
 
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/signin', request.url))
}
 
export const config = {
  matcher: '/dashboard/:path*',
}
