// app/api/events/route.js (or route.ts)
import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import clientPromise from '@/lib/mongodb'

export async function POST(req) {
  try {
    const formData = await req.formData()

    // Extract text fields
    const eventName = formData.get('eventName')
    const eventSDate = formData.get('eventSDate')
    const eventFDate = formData.get('eventFDate')
    const eventLocation = formData.get('eventLocation')
    const eventType = formData.get('eventType')
    const eventDescription = formData.get('eventDescription')

    // Extract file
    const file = formData.get('eventThumbnail')
    if (!file) {
      return NextResponse.json({ message: 'Thumbnail is required' }, { status: 400 })
    }

    // Convert Blob to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const filename = `events/${Date.now()}-${file.name}`

    // Upload to Supabase
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from('eventgallery')
      .upload(filename, buffer, { contentType: file.type })

    if (uploadError) {
      return NextResponse.json({ message: 'Image upload failed' }, { status: 500 })
    }

    const { publicUrl } = supabaseAdmin.storage
      .from('eventgallery')
      .getPublicUrl(filename).data

    if (!publicUrl) {
      return NextResponse.json({ message: 'Failed to get public URL' }, { status: 500 })
    }

    // Save event data to MongoDB
    const eventDoc = {
      eventName,
      eventSDate,
      eventFDate,
      eventLocation,
      eventType,
      eventDescription,
      eventThumbnail: publicUrl,
      createdAt: new Date(),
    }

    const client = await clientPromise
    const db = client.db('event')
    const collection = db.collection('events')
    const result = await collection.insertOne(eventDoc)

    return NextResponse.json({
      success: true,
      message: 'Event created successfully',
      eventId: result.insertedId,
      event: eventDoc,
    }, { status: 200 })
  } catch (err) {
    console.error('Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
