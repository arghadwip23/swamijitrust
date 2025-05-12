import { NextResponse } from 'next/server'
import { uploadImg } from '@/lib/SupaBase';
import clientPromise from '@/lib/mongodb'


export const POST = async (req) => {
    const formData = await req.formData();
    return await handleMultiImageUpload(formData);
}


async function handleMultiImageUpload(formData) {
  const eventid = formData.get('eventname');
  const caption = formData.get('caption');
  const files = formData.getAll('images');

  if (!eventid || files.length === 0) {
    return NextResponse.json({ message: 'Missing event or images' }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db('event');
  const imagesCollection = db.collection('Images');

  const uploads = await Promise.all(
    files.map(async (file) => {
      const uploadResult = await uploadImg(file, 'eventgallery');
      if (!uploadResult.ok) return null;
      return {
        eventid,
        caption,
        url: uploadResult.message,
      };
    })
  );

  const successfulUploads = uploads.filter(Boolean);
  if (successfulUploads.length === 0) {
    return NextResponse.json({ message: 'All uploads failed' }, { status: 500 });
  }

  const insertResult = await imagesCollection.insertMany(successfulUploads);

  return NextResponse.json(
    {
      success: true,
      message: 'Images uploaded',
      uploadedCount: insertResult.insertedCount,
    },
    { status: 200 }
  );
}
