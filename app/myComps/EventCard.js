import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function EventCard({id,name,description ,thumbnail}) {
  return (
    <div className='bg-orange-500  rounded my-4 size-80 mx-auto  relative shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out'>
    <div  className={`size-80  mx-auto shadow-md rounded bg-muted n absolute`}
     style={{
        backgroundImage: `linear-gradient(to top, #060202, #f0f0f000),url("${thumbnail}")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }} >
    </div>
    <div className='absolute  bottom-[18%] translate-y-[50%] left-2 p-2 '>
        <h1 className='text-white font-bold'>{name}</h1>
        <p className='text-gray-200 text-sm'>{description}...</p>
        <Link href={`/events/${id}`} className='flex gap-1 align-middle  items-center text-white'>see more <ArrowRightIcon size={18} className=''/></Link>

      </div>
 
    </div>
  )
} 