import React from 'react'
import { Card,CardHeader,CardContent,CardTitle,CardDescription } from '@/components/ui/card'
import Image from 'next/image'

export default function Profile({name,position,category,image}) {
  return (
    <Card className="  size-40 md:size-64 relative mx-auto border-none shadow-none bg-inherit ">
        <CardHeader className={` aspect-[1/1]  bg-contain  w-16 md:w-24  mx-auto my-4 absolute z-10 left-[40%] top-5 translate-x-[-50%]`}>
            <Image fill src={image} alt={"profile pic of "+name} className=' bg-gray-400 rounded-lg' />
        </CardHeader>
        <CardContent className='text-right  bg-orange-500 w-28 h-24 md:w-32 md:h-28 rounded-md absolute z-0 left-[30%] top-[35%] flex flex-col justify-end pb-2 text-white'>
            <CardTitle className="w-full  text-sm md:text-md lg:text-md">
                {name}
            </CardTitle>
            <CardDescription className="text-sm text-orange-50">
                {position}
            </CardDescription>
        </CardContent>
    </Card>
  )
}
