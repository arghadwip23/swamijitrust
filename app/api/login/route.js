import bcryptjs from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import { NextResponse,NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    const data = await req.json();
    const client = await clientPromise;
    const db = client.db('user');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email: data.email });

    if(!user){
        return NextResponse.json({message:"user not found",ok:false},{status:400});
    }

     const validPassword = await  bcryptjs.compare(data.password,user.password);

   if(!validPassword){
    return NextResponse.json({message:"invalid password",ok:false},{status:400});
   }


   const tokenData = {
    id: user._id,
    username: user.name,
    email: user.email,
    isAdmin: user.role.isAdmin,
    position: user.role.position,

}
const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"});

const response = NextResponse.json({
    message: "Login successful",
    success: true,
},{status: 200});
response.cookies.set("token", token, {
    httpOnly: true, 
    
})
return response;

   





}