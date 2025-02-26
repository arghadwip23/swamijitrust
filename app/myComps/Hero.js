import React from 'react'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'


export default function Hero() {
  return (
    <section className=' pt-20 md:pt-4 min-h-[60vh] w-full flex justify-between  '>
        <div className='flex flex-col justify-center text-left items-center flex-1 px-4 '>
            <h1 className='text-5xl font-bold text-center lg:text-6xl '>Bring <span className='text-orange-500'>Smiles</span> and Change Lives!</h1>
            <h4 className='text-lg md:font-semibold text-center mt-5 mb-3 text-gray-600 p lg:px-4  xl:px-40'>Your support can light up lives and create lasting change. By contributing, you help provide education, healthcare, and opportunities to those in need empowering individuals and building stronger, happier communities</h4>
            <div className=' w-full flex gap-4 align-middle items-center justify-center mt-6'>
            <Button size="lg" className="text-lg">Get started</Button>
            <Button size="lg" variant="link" className="text-lg underline">second action <ArrowRight className='text-xl' size={30} /> </Button>
            </div>
            <div className=' hidden md:flex w-full  justify-between mt-10 gap-2 md:px-8 md:mt-20 lg:px-12 lg:mt-30'>
              <div className=' text-center'>
                <h2 className='text-3xl text-orange-300 font-bold'>20+</h2>
                <p className='text-gray-400'>Event hosted succesfully</p>
              </div>
              <div className='text-center'>
                <h2 className='text-3xl text-orange-300 font-bold'>15+</h2>
                <p className='text-gray-400'>Team members</p>
              </div>
              <div className=' text-center'>
                <h2 className='text-3xl text-orange-300 font-bold'>1000+</h2>
                <p className='text-gray-400'>directly benifited peoples</p>
              </div>

            </div>
        </div>
        <div className=' h-[85vh] w-[400px] flex-none p-0 hidden lg:block overflow-hidden'>
        
        <AspectRatio ratio={9/16} >
            <Image
                src="/heroImage.png"
                alt="Photo by Drew Beamer"
                layout='fill'
                objectFit='cover'
                className="rounded-md "
            />
        </AspectRatio>

        </div>
       

    </section>
  )
}
