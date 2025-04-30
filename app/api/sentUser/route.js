import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req) {
  try {
    const cookie = req.cookies.get('token');
    if (!cookie || !cookie.value) {
      return NextResponse.json({ message: "No token provided", ok: false }, { status: 401 });
    }

    const decoded = jwt.verify(cookie.value, process.env.TOKEN_SECRET);
    const id = decoded.id;

    const client = await clientPromise;
    const db = client.db('user');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ _id: new ObjectId(id) });

    if (!user) {
      return NextResponse.json({ message: "User not found", ok: false }, { status: 404 });
    }

    return NextResponse.json({ id, user }, { status: 200 });

  } catch (err) {
    return NextResponse.json({ message: err.message || "Unauthorized", ok: false }, { status: 401 });
  }
}
