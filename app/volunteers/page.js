import React from 'react'
import Image from 'next/image'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,BreadcrumbPage,BreadcrumbList } from '@/components/ui/breadcrumb';
import Profile from '../myComps/Profile';

export default function page() {

const demo =[
  {
    name:'Rahul Roy',
    position:'CEO',
    category:'Management',
    image:'/raju.png'
  },
  {
    name:'Rahul',
    position:'CEO',
    category:'Management',
    image:'/team2.jpg'
  },
  {
    name:"arun",
    position:"lead",
    category:"Management",
    image:'/team3.jpg'
  }
];

  return (
    <>
    <Breadcrumb className='px-4 mb-4 pt-20 '>
         <BreadcrumbList>
           <BreadcrumbItem>
             <BreadcrumbLink href="/">Home</BreadcrumbLink>
           </BreadcrumbItem>
           <BreadcrumbSeparator />
           <BreadcrumbItem>
             <BreadcrumbPage>Volunteers</BreadcrumbPage>
           </BreadcrumbItem>
           
         </BreadcrumbList>
       </Breadcrumb>
       <header className='flex flex-col md:flex-row w-full px-4 py-2 bg-gray-100 lg:px-20'>
         <div className='text-center  md:text-left px-4 flex flex-col justify-center flex-1 md:basis-1/2 lg:pl-10'>
           <h1 className='text-3xl font-bold lg:text-5xl'>Our Team</h1>
           <p className='text-gray-500 mt-3 lg:pr-20'>Meet our our enthusiast and active team membrs. the soul of our ngo , They have always given their best for the uplift of the socity,#f97316Volunteer for India aims to uplift the underprivileged population and solve pertinent social issues affecting the city through structured volunteering programs. </p>
   
         </div>
         <div className=" flex-2 md:flex-1/2">
          <Image width={400} height={400} alt='hero svg image' src="/teamHero.svg" className='mx-auto p-10' />
         </div>
   
       </header>
       <section className='bg-yellow-50'>
        <h2 className='px-10 md:px-20 text-2xl font-semibold'>our leaders:</h2>
        <div className='leaders grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-20  bg-yellow-50'>
          {
            demo.map((item,index)=>(
              <Profile key={index} name={item.name} position={item.position} category={item.category} image={item.image} />
            ))
}

        </div>
       </section>
    
    
    </>
  )
}
