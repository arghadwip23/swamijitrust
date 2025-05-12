import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const POST = async (req) => {
    const formData = await req.json();
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
        return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
        );
    }
    
    // Here you can handle the message, e.g., save it to a database or send an email
    try {
        const client = await clientPromise;
        const db = client.db("user");       
        const collection = db.collection("messages");
        const result = await collection.insertOne({ name, email, message });
        if (!result.acknowledged) {
            return NextResponse.json(
            { message: "Failed to send message" },
            { status: 500 }
            );
        }

      
        return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
    );
    } catch (error) {
        console.error("Error sending message:", error);
        return NextResponse.json(
        { message: "Error sending message" },
        { status: 500 }
        );
    }
    
}