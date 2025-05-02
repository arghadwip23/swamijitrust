import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';


export async function GET(req) {
    try{
    const client = await clientPromise;
    const db = client.db('event');      
    const collection = db.collection('events');
    const result = {
        Education: [],
        Sports: [],
        Health: [],
        Awarness: [],
        Social: [],
        Other: [],
    }
    let data = await collection.find({}).toArray();
    data.forEach((event) => {
        result[event.eventType].push(event.eventName);

    });

    return NextResponse.json(result,{ status: 200 });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({ message: 'Failed to fetch events' }, { status: 500 });
    }

}