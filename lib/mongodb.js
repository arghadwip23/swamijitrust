import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing from environment variables");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function clientPromise() {
  if (cached.conn) return cached.conn;

  try {
    if (!cached.promise) {
      cached.promise = mongoose
        .connect(MONGODB_URI)
        .then((mongoose) => mongoose);
    }
  
    cached.conn = await cached.promise;
    return cached.conn;
    console.log("connected to mongodb");
    
  } catch (error) {
    cached.promise = null;
    cached.conn = null;
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
