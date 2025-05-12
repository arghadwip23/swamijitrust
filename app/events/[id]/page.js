'use client'

import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList } from '@/components/ui/breadcrumb';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { MapPinIcon, CalendarDaysIcon } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';





export default function Event({ params }) {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = React.use(params); // ✅ unwrap the Promise

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await fetch(`/api/detailedEvent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: id }),
        });
        if (!res.ok) {
          throw new Error('Failed to fetch event data');
        }
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEventData();
    }
  }, [id]);

  // Replace with eventData once API integration is confirmed working
  const demoData = {
    id: '1',
    name: 'Animal rescue event',
    start: '2022-01-01',
    end: '2022-01-01',
    location: 'Asansol, West Bengal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc',
    thumbnail: '/childrenCr.jpg',
  };

  return (
    !loading && eventData ? <section className='pt-20'>

      <Breadcrumb className='px-4 mb-4 '>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/events">Events</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{eventData.eventName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='header grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mb-10 '>
        <AspectRatio ratio={16 / 9} className='p-4 rounded cover'>
          <Image src={eventData.eventThumbnail} alt={eventData.eventName} fill className='object-cover h-full w-full rounded-md bg-yellow-500 ' />
        </AspectRatio>
        <div className='text-left p-4 flex md:justify-center flex-col items-start '>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-left'>{eventData.eventName}</h2>
          <p className='text-left mt-4 text-gray-500 flex gap-2'><MapPinIcon />{eventData.eventLocation}</p>
          <p className='text-left mt-4 text-gray-500 flex gap-2'><CalendarDaysIcon />{eventData.eventSDate}{eventData.eventFDate && " to " + eventData.eventFDate}</p>
          <p className='text-left mt-4'>{eventData.eventDescription}</p>
        </div>


      </div>

      <h2 className='px-4 text-center py-5 text-3xl font-bold'>Glimpses of the event</h2>

      <div className="grid-container ">
        {
          eventData.images.map((img, index) => (
            <div className=' p-0 border-none hover:shadow-xl transition-all delay-200 hover:scale-105' key={index}> 
              <img className='grid-item grid-item-1' src={img.url} alt='' />
              <p>{img.caption}</p>
            </div>

          ))
        }
      </div>

    </section> : <section>
      <div className='flex justify-center items-center h-screen p-4'>
        <DotLottieReact
          src="https://lottie.host/8c7e4ef0-08e0-4929-9b3f-ddc54f68f9fc/m1fm3AsKmh.lottie"
          loop
          autoplay
          className=' w-[400] p-0 md:w-[600px] lg:w-[800px] '
        />
      </div>
    </section>
  )
}
