import React from 'react'
import { Card,CardHeader,CardContent,CardTitle,CardDescription } from '@/components/ui/card'
import Image from 'next/image'

export default function Profile({name,position,category,image}) {
  return (
    <Card className=" w-64 h-64 relative mx-auto border-none shadow-none bg-inherit">
        <CardHeader className={`bg-gray-400 aspect-[1/1]  bg-contain  w-24 rounded-[20%] mx-auto my-4 absolute z-10 left-[40%] top-5 translate-x-[-50%]`}>
            <Image fill src={image} alt={"profile pic of "+name} className=' bg-gray-400 rounded-lg' />
        </CardHeader>
        <CardContent className='text-right  bg-orange-500 w-32 h-28 rounded-md absolute z-0 left-[30%] top-[35%] flex flex-col justify-end pb-4 text-white'>
            <CardTitle className="inline ">
                {name}
            </CardTitle>
            <CardDescription className="p text-orange-50">
                {position}
            </CardDescription>
        </CardContent>
    </Card>
  )
}
