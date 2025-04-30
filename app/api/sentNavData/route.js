import { NextResponse } from 'next/server';
export function GET(request) {
    let cookie = request.cookies.get('token');
    let isLoggedin = false;
    if(cookie) {
        isLoggedin = true;
    }
    return NextResponse.json(
        {
           isLoggedin: isLoggedin,
           message: "success"
        }
    );
  }