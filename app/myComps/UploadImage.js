'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/input';




export default function UploadImage() {
  const [eventOptions, setEventOptions] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [caption, setCaption] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/sentEvents');
        const data = await res.json();
        const allEvents = [
          ...data.Education,
          ...data.Sports,
          ...data.Health,
          ...data.Awarness,
          ...data.Social,
          ...data.Other,
        ];
        setEventOptions(allEvents);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch event types');
      }
    }
    fetchEvents();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = async () => {
    if (!selectedEvent || images.length === 0) {
      toast.error('Please select an event and at least one image.');
      return;
    }

    const formData = new FormData();
    formData.append('eventname', selectedEvent);
    formData.append('caption', caption);
    images.forEach((file) => {
      formData.append('images', file);
    });

    try {
      setUploading(true);
      const res = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        toast.success('Images uploaded successfully!');
        setSelectedEvent('');
        setCaption('');
        setImages([]);
      } else {
        toast.error(result.message || 'Upload failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred during upload');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="eventType">Event Type*</label>
        <select
          id="eventType"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="block w-full border p-2"
        >
          <option value="">Select event type</option>
          {eventOptions.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="caption">Caption</label>
        <textarea
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Enter caption"
          className="w-full border p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="images">Select Images*</label>
        <Input
          id="images"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={uploading}
        className="w-full bg-blue-600 text-white py-2"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}
