import { supabaseAdmin } from '@/lib/supabaseAdmin';

export async function uploadImg(file, folder) {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${folder}/${Date.now()}-${file.name}`;

    // Upload to Supabase
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("eventgallery")
      .upload(filename, buffer, {
        contentType: file.type,
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
