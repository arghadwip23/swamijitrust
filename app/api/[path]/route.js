import { NextResponse } from 'next/server'
import { uploadImg } from '@/lib/SupaBase';
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';

export const POST = async (req, context) => {
    const { params } = context; // ✅ context must be awaited in async function
    const path = await params.path;
    const formData = await req.formData();
    switch (path) {
        case "uploadImage":
            return await enventUpload(formData);

        case "PicUpdate":
            return await picUpdate(formData);
        default:
            return NextResponse.json({ message: 'Invalid path' }, { status: 400 });
    }

}

export const GET = async (req, context) => {
    const { params } = context; // ✅ context must be awaited in async function
    const path = await params.path;
    //const { params } = await context; // ✅ context must be awaited in async function
    // const path = params.path;
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


//this is the function that will be used to upload the image
const enventUpload = async (formdata) => {
    const file = formdata.get('image')
    if (!file) {
        return NextResponse.json({ message: 'Thumbnail is required' }, { status: 400 })
    }
    const data = await uploadImg(file, 'eventgallery');
    if (!data.ok) {
        return NextResponse.json({ message: 'Image upload failed' }, { status: 400 })
    }
    const img = {
        url: data.message,
        caption: formdata.get('caption'),
        eventid: formdata.get('eventname'),
    }
    const client = await clientPromise;
    const db = client.db('event');
    const collection = db.collection('Images');
    const result = await collection.insertOne(img);
    return NextResponse.json({
        success: true,
        message: 'Event created successfully',
        eventId: result.insertedId,
        event: img,
    }, { status: 200 })
}

async function picUpdate(data) {
    const file = data.get("file");
    const id = data.get("id");
    const client = await clientPromise;
    const db = client.db("user");
    const collection = db.collection("users");
    try {
        const uploadStat = await uploadImg(file, "profilePics");
        if (!uploadStat.ok) {
            return NextResponse.json({ ok: false, message: "Image upload failed" }, { status: 500 });
        }
        
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { profilePic: uploadStat.message } }
        );
        return NextResponse.json({ ok: true, message: "Profile Pic Updated Successfully" }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ ok:false, message: 'Failed to update profile pic' }, { status: 500 });
    }
}