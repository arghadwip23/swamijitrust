import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function GET(req,{ params }) {
    const work = await params.work;
    switch (work) {
        case "sentEvents":
            return await sentEvents();
        case "events":
            return await Events();
        default:
            return NextResponse.json({ message: "Invalid path" }, { status: 400 });
    }

}


async function Events(){
    const client = await clientPromise;
    const db = client.db("event");
    const collection = db.collection("events");
    try{
    const data = await collection.find({}).toArray();
    return NextResponse.json(data, { status: 200 });
    }catch(err){
        console.log(err);
        return NextResponse.json({ message: "Failed to fetch events" }, { status: 500 });
    }

}