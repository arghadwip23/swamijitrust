import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET(req) {
    console.log("get");
    return NextResponse.json({hi:"hello"},{status:200})
    
}

export async function POST(req){
    console.log("POST");
    const data = await req.json();
    try {
       const client = await clientPromise
    const db = client.db('payments')
    const collection = db.collection('transections')
    const result = await collection.insertOne(data)
        return NextResponse.json({status:200});
    } catch (error) {
        console.log(error);
        
    return NextResponse.json({hi:"hel;lo"},{status:500});
        
    }
}