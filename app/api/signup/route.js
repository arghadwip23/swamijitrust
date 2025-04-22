import { hash } from 'bcryptjs';
import { clientPromise } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { username, email, password } = body;
        console.log(body);
        
        
         const db = clientPromise('user');
         const usersCollection = db.collection('users');
         console.log(db,usersCollection);
         

// Check if the user email already exists
const existingUser = await usersCollection.findOne({ email });
if (existingUser) {
    return new Response(JSON.stringify({ error: 'Email already exists' }), { status: 400 });
}
        if (!username || !email || !password) {
            return new Response (JSON.stringify({ error: 'All fields are required' }), { status: 400 });
        }

        // Hash the password
        const hashedPassword = await hash(password, 10);


        //check the user

        // Simulate saving user to database (replace with actual DB logic)
        const newUser = {
            id: Date.now(),
            username,
            email,
            password: hashedPassword,
            isVarified:false,
            profilePic:""
        };
       
        try {
            usersCollection.insertOne(newUser);
        } catch (error) {
            return Response.json({message:"database error",status:200});
        }

        // Respond with success
        return NextResponse.json({message:"hi hello",status:200,ok:true});
    } catch (error) {
        return Response.json({ error: 'Internal Server Error' , status: 500 });
    }
}