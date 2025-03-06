'use clients'
import React from 'react'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,BreadcrumbPage,BreadcrumbList } from '@/components/ui/breadcrumb';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import { MapPinIcon,CalendarDaysIcon} from 'lucide-react';



export default async function page({params}) {
  const demoData = {
    "id": "1",
    "name": "Animal rescue event",
    "start": "2022-01-01",
    "end": "2022-01-01",
    "location": "Asansol, West Bengal",
    "description": "loremimpusp dolor sit amet, consectetur adipiscing elit. Nulla nec purus euismod, fermentum nunc nec, ultricies nunc",
    "thumbnail": "/childrenCr.jpg",
  };
  const {id} = await params;
  return (
    <section className='pt-20'>
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
      <BreadcrumbPage>{id}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      <div className='header grid grid-cols-1 md:grid-cols-2 gap-2 px-4 mb-10 '>
        <AspectRatio ratio={16/9} className='p-4 rounded cover'>
          <Image src={demoData.thumbnail} alt={demoData.name} fill  className='object-cover h-full w-full rounded-md bg-yellow-500 ' />
        </AspectRatio>
        <div className='text-left p-4 flex md:justify-center flex-col items-start '>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-left'>{demoData.name}</h2>
        <p className='text-left mt-4 text-gray-500 flex gap-2'><MapPinIcon />{demoData.location}</p>
        <p className='text-left mt-4 text-gray-500 flex gap-2'><CalendarDaysIcon />{demoData.start}{demoData.end&&" to "+demoData.end}</p>
        <p className='text-left mt-4'>{demoData.description}</p>
      </div>


      </div>
  
      <h2 className='px-4 text-center py-5 text-3xl font-bold'>Glimpses of the event</h2>
      
  <div className="grid-container ">
     
  <div className='shadow-lg'>
    <img className='grid-item grid-item-1' src='https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I'm so happy today!"</p>
  </div>
  <div>
    <img className='grid-item grid-item-2' src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I see those nugs."</p>
  </div>
  <div>
    <img className='grid-item grid-item-3' src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I love you so much!"</p>
  </div>
  <div>
    <img className='grid-item grid-item-4' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I'm the baby of the house!"</p>
  </div>
  <div>
    <img className='grid-item grid-item-5' src='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"Are you gunna throw the ball?"</p>
  </div>
  <div>
    <img className='grid-item grid-item-6' src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"C'mon friend!"</p>
  </div>
  <div>
    <img className='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"A rose for mommy!"</p>
  </div>
  <div>
    <img className='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"You gunna finish that?"</p>
  </div>
  <div>
    <img className='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"We can't afford a cat!"</p>
  </div>
  <div>
    <img className='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"Dis my fren!"</p>
  </div>
</div>
      
    </section>
  )
}
