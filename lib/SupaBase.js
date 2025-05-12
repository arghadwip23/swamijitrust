import { supabaseAdmin } from '@/lib/supabaseAdmin';
import sharp from 'sharp';



export async function uploadImg(file, folder) {
  try {
    // const arrayBuffer = await file.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);
    const buffer = Buffer.from(await file.arrayBuffer());

    const optimizedImage = await sharp(buffer)
      .rotate()              // Rotate the image to correct orientation
      .resize({
        width: 1024,
        height: 1024,
        fit: 'inside'
      })              // Resize to max 1024px width
      .webp({ quality: 75 })     // Convert to WebP with 75% quality
      .toBuffer();


    const filename = `${folder}/compressed-${Date.now()}.webp`;

    // Upload to Supabase
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("eventgallery")
      .upload(filename, optimizedImage, {
        contentType: "image/webp",
        upsert: false, // prevents overwriting
      });

    if (uploadError || !uploadData) {
      return { ok: false, message: 'Image upload failed', error: uploadError };
    }

    // Get the public URL
    const { data: publicUrlData, error: urlError } = supabaseAdmin.storage
      .from("eventgallery")
      .getPublicUrl(filename);

    if (urlError || !publicUrlData?.publicUrl) {
      return { ok: false, message: 'Failed to get public URL', error: urlError };
    }

    return { ok: true, message: publicUrlData.publicUrl };
  } catch (err) {
    console.error('Upload error:', err);
    return { ok: false, message: 'Unexpected error occurred', error: err };
  }
}
