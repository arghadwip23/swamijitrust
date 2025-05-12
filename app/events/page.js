import React from 'react'
import Image from 'next/image'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,BreadcrumbPage,BreadcrumbList } from '@/components/ui/breadcrumb';
import EventCard from '../myComps/EventCard';
import { getEvents } from '@/lib/Actions';

import Link from 'next/link';

export default async function page() {
const dummyData=[
  {
    "_id": "1",
    "name": "Animal rescue event",  
    "description": "loremimpusp dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc",
    "thumbnail": "/childrenCr.jpg", 
  },
  {
    "_id": "2",
    "name": "Children's day celebration",
    "description": "loremimpusp dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc",
    "thumbnail": "https://picsum.photos/800",
  },
  {
    "_id": "3",
    "name": "Children's day celebration",
    "description": "loremimpusp dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc",
    "thumbnail": "https://picsum.photos/400/300",
  },
  {
    "_id": "4",
    "name": "Children's day celebration",
    "description": "loremimpusp dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc",
    "thumbnail": "https://picsum.photos/700",
  }
];
const Data = await getEvents();

  return (
    <>
    <Breadcrumb className='px-4 mb-4 pt-20 '>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Events</BreadcrumbPage>
        </BreadcrumbItem>
        
      </BreadcrumbList>
    </Breadcrumb>
    <header className='flex flex-col md:flex-row w-full px-4 py-2 bg-white lg:px-20'>
      <div className='text-center  md:text-left px-4 flex flex-col justify-center flex-1 md:basis-1/2 lg:pl-10'>
        <h1 className='text-3xl font-bold lg:text-5xl'>Our Events</h1>
        <p className='text-gray-500'>Our events bring people together through sports, culture, and social initiatives, fostering growth and positivity. Join us in making a meaningful impact!</p>

      </div>
      <div className=" flex-2 md:flex-1/2">
       <Image width={500} height={500} alt='hero svg image' src="/event.svg" className='mx-auto' />
      </div>

    </header>
   <section>
    
    <div className='grid  px-4 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-3  w-full overflow-x-hidden lg:px-20'>
      {Data.map((event)=>(
        <EventCard key={event._id} id={event._id} name={event.name} description={event.description.slice(0,60)} thumbnail={event.thumbnail}  />
      ))}

    </div>
   </section>
    
    </>
  )
}
