import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

  if(token&&path=="/"){
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }

   if (path=="/dashboard" && !token) {
     return NextResponse.redirect(new URL('/login', request.nextUrl));
   }
}

export const config = {
  matcher: ['/', '/profile', '/login', '/signup', '/verifyemail',"/dashboard"],
};
