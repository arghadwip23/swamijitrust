'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Addevent({ user, role }) {
  const [formdata, setFormdata] = useState({
    eventName: "",
    eventSDate: "",
    eventFDate: "",
    eventLocation: "",
    eventDescription: "",
    eventType: "",
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);

  const eventTypes = ["Education", "Sports", "Health", "Awarness", "Social", "Other"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnailFile) {
      toast.error("Please upload a thumbnail.");
      return;
    }

    const data = new FormData();
    Object.entries(formdata).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("eventThumbnail", thumbnailFile);
    
    toast.promise(
      fetch('/api/addEvent', {
        method: 'POST',
        body: data,
      }).then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      }),
      {
        loading: "Uploading and saving event...",
        success: "Event added successfully!",
        error: (err) => err.message || "Failed to add event.",
      }
    );
  };

  return (
    <section>
     <form onSubmit={handleSubmit} className="p-2">
  <h1 className="font-semibold text-3xl">Add New Events</h1>

  <div className="mt-2">
    <Label htmlFor="eventName">Event Name</Label>
    <Input
      id="eventName"
      placeholder="Enter the name of the event"
      required
      onChange={(e) => setFormdata({ ...formdata, eventName: e.target.value })}
    />
  </div>

  <div className="mt-2">
    <Label htmlFor="eventSDate">Event Start Date</Label>
    <Input
      type="date"
      id="eventSDate"
      placeholder="Select the start date"
      required
      onChange={(e) => setFormdata({ ...formdata, eventSDate: e.target.value })}
    />
  </div>

  <div className="mt-2">
    <Label htmlFor="eventFDate">Event Finish Date</Label>
    <Input
      type="date"
      id="eventFDate"
      placeholder="Select the finish date"
      required
      onChange={(e) => setFormdata({ ...formdata, eventFDate: e.target.value })}
    />
  </div>

  <div className="mt-2">
    <Label htmlFor="eventLocation">Event Location</Label>
    <Input
      id="eventLocation"
      placeholder="Enter the event location"
      required
      onChange={(e) => setFormdata({ ...formdata, eventLocation: e.target.value })}
    />
  </div>

  <div className="mt-2">
    <Label htmlFor="eventType">Event Type</Label>
    <Select onValueChange={(value) => setFormdata({ ...formdata, eventType: value })}>
      <SelectTrigger id="eventType">
        <SelectValue placeholder="Select event type" />
      </SelectTrigger>
      <SelectContent>
        {eventTypes.map((type) => (
          <SelectItem key={type} value={type}>{type}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

  <div className="mt-2">
    <Label htmlFor="eventThumbnail">Event Thumbnail</Label>
    <Input
      type="file"
      id="eventThumbnail"
      accept="image/*"
      placeholder="Upload an image"
      required
      onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
    />
  </div>

  <div className="mt-2">
    <Label htmlFor="eventDescription">Event Description</Label>
    <Textarea
      id="eventDescription"
      placeholder="Briefly describe the event"
      required
      onChange={(e) => setFormdata({ ...formdata, eventDescription: e.target.value })}
    />
  </div>

  <Button className="mt-2" type="submit">Add this event</Button>
</form>

    </section>
  );
}
