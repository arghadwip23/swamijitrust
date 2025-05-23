import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET(req) {
    console.log("get");
    return NextResponse.json({hi:"hello"},{status:200})
    
}

export async function POST(req){
    console.log("POST");
    const body = await req.json();

    // 1. Extract base64-encoded response
    const encodedResponse = body.response;

    // 2. Decode base64
    const decodedResponse = Buffer.from(encodedResponse, 'base64').toString('utf-8');

    // 3. Parse the JSON
    const parsedData = JSON.parse(decodedResponse);
    try {
       const client = await clientPromise
    const db = client.db('payments')
    const collection = db.collection('transections')
    const result = await collection.insertOne(parsedData)
        return NextResponse.json({status:200});
    } catch (error) {
        console.log(error);
        
    return NextResponse.json({hi:"hel;lo"},{status:500});
        
    }
}