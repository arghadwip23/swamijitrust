'use client';

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-hot-toast";

export default function UploadImage() {
  const [eventName, setEventName] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch event types on mount
  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        const res = await fetch("/api/sentEvents");
        const data = await res.json();
        
        setEventName([...data.Education, ...data.Sports, ...data.Health, ...data.Awarness, ...data.Social, ...data.Other]);
      } catch (err) {
        toast.error("Failed to fetch event types");
        console.error(err);
      }
    };
    fetchEventTypes();
  }, []);

  const handleSubmit = async () => {
    if (!selectedEvent || !image) {
      toast.error("Please select an event type and image.");
      return;
    }

    const formData = new FormData();
    formData.append("eventname", selectedEvent);
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      setUploading(true);
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Image uploaded successfully!");
        setCaption("");
        setSelectedEvent("");
        setImage(null);
      } else {
        toast.error(result.message || "Upload failed.");
      }
    } catch (err) {
      toast.error("An error occurred during upload.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div >
     

      <div className="mt-2">
        <Label htmlFor="eventType">Event Type*</Label>
        <Select value={selectedEvent} onValueChange={setSelectedEvent}>
          <SelectTrigger id="eventType">
            <SelectValue placeholder="Select event type" />
          </SelectTrigger>
          <SelectContent>
            {eventName.map((type,index) => (
              <SelectItem key={index} value={type.id}>
                {type.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <Label htmlFor="caption">Caption</Label>
        <Textarea
          id="caption"
          placeholder="Enter the caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="image">Select Image*</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setImage(e.target.files[0]);
            }
          }}
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="mt-4 w-full"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
}
