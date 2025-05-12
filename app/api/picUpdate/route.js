import { NextResponse } from 'next/server'
import { uploadImg } from '@/lib/SupaBase';
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';

export const POST = async (req) => {
    const formData = await req.formData();
    return await picUpdate(formData);
    
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