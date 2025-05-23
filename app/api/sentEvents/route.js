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
    const result2 = [];
    let data = await collection.find({}).toArray();
    if (!data || data.length === 0) {
        return NextResponse.json({ ok:false, message: 'No events found' }, { status: 404 });
    }
    //console.log(data);
    
    data.forEach((event) => {

        result[event.eventType].push({"name":event.eventName,"id":event._id});
        result2.push({"name":event.eventName,"id":event._id});
        //console.log(result[event.eventType],event);
        

    });

    return NextResponse.json({result:result,allEvents:result2,ok:true},{ status: 200 });
    }
    catch(err){
        console.log(err);
        return NextResponse.json({ok:false, message: 'Failed to fetch events' }, { status: 500 });
    }

}