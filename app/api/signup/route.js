import { hash } from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';


function getRole(code){
    switch (code) {
        case process.env.ADMIN:
            return {role: "admin", position: "chairman"};
        case process.env.TRESURER: 
            return {role: "admin", position: "tresurer"};
        case process.env.VOLUNTEER:
            return {role: "member", position: "volunteer"}; 
        case process.env.SECRETARY: 
            return {role: "admin", position: "secretary"};

}
}

export async function POST(req) {
    const invitaionCodes = [process.env.ADMIN,process.env.TRESURER,process.env.VOLUNTEER,process.env.SECRETARY];
    try {
        const body = await req.json();
        const { name, email, password,code} = body;
        console.log(body);
         const client = await clientPromise;
         const db = client.db('user');
         const usersCollection = db.collection('users');

        // Check if the user email already exists
        if(!invitaionCodes.includes(code)) {
            return NextResponse.json({ message: "sorry! you are not allowed to signup", status: 400 ,ok: false },{ status: 400 });
        }
        const existingUser = await usersCollection.findOne({ email });
         console.log(existingUser);
        
        if (existingUser) {
            return new Response(JSON.stringify({ message: 'you have already signuped with this email', ok:false }), { status: 400 });
        }
        if (!name || !email || !password) {
            return new Response(JSON.stringify({ message: 'All fields are required' , ok:false}), { status: 400 });
        }

        



        // Hash the password
        const hashedPassword = await hash(password, 10);


        // Simulate saving user to database (replace with actual DB logic)
        const newUser = {
            id: Date.now(),
            name,
            email,
            password: hashedPassword,
            isVarified: false,
            role:getRole(code),
            joinedAt: new Date(),
            profilePic: "https://avatar.iran.liara.run/public"
        };

        try {
            await usersCollection.insertOne(newUser);
        } catch (error) {
            return Response.json({ message: "database error", status: 400 ,ok: false });
        }

        // Respond with success
        return NextResponse.json({ message: "user has successfully created", status: 200, ok: true });
    } catch (error) {
        console.error('Error during signup:', error);
        return Response.json({ message: 'Internal Server Error', status: 500 , ok: false });

    }
}


