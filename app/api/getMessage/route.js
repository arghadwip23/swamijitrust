import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async()=>{
    try {
        const client = await clientPromise;
        const db = client.db('user');
        const collection = db.collection('messages');
        const data = await collection.find({}).toArray();
        return NextResponse.json({message:data},{status:200});



    } catch (error) {
        return NextResponse.json({message:[]},{status:500});
    }
}