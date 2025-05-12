import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';


export const POST = async (req) => {
    const formData = await req.json();
    const path = formData.path;
    if (!path) {
        return NextResponse.json({ message: 'Path is required' }, { status: 400 });
    }
    return await detailledEvent(path);

}


//this sent the detail of a event for per event page
const detailledEvent = async (id) => {
    const client = await clientPromise;
    const db = client.db('event');
    const collection = db.collection('events');
    const ImageCollection = db.collection('Images');
    const images = await ImageCollection.find({ eventid: id }).toArray();
    const result = await collection.findOne({ _id: new ObjectId(id) });
    if (result) {
        result.images = images;
        return NextResponse.json(result, { status: 200 })
    } else {
        return NextResponse.json({ message: 'Event not found' }, { status: 404 })
    }



}


//function for multiple file upload

//this is the function that will be used to upload the image



//this is the function that will be used to send the message








