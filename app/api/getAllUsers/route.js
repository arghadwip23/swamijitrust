import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
export async function GET(request) {
    const client = await clientPromise;
    const db = client.db('user');
    const users = await db.collection('users').find({}).toArray();
    
    const formattedUsers = users.map(user => ({
        name: user.name,
        email: user.email,
        role:user.role.position,
        image: user.profilePic,
        joined: user.joinedAt,
        id: user._id.toString(),
    }));
    return NextResponse.json({ users: formattedUsers });
}
