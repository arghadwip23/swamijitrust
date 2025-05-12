import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

import { PhoneIcon,MailIcon,FacebookIcon,MapPinIcon} from 'lucide-react'
import ReachUsForm from './Form'

export default function Body() {
  return (
    <>
    <section className='mb-3 mt-20 lg:px-4 w-full overflow-x-hidden'>
        <div className='flex gap-2'>
            <div className='hidden md:flex  w-[50vw] pl-4 '>
                <AspectRatio ratio={4/3} className='w-full rounded-md bg-muted'>
                    <Image alt=" swamijitrust teams group photo" src="/2.png" className='object-cover rounded-md' fill/>
                </AspectRatio>
                

            </div>
            <div className='w-full px-7 flex align-middle justify-center items-center '>
                <div className='text-center md:text-left'>
                <h2 className='text-3xl font-bold text-center md:text-left w-full'>who we are</h2>
                <p className='text-gray-700 pt-2'>
                We are a NITI Aayog-recognized NGO, established in 2019, driven by a dedicated team of young professionals with a shared passion for uplifting underprivileged children. With full compliance to Indian and West Bengal government regulations (Reg. ID: 19WB56288), we focus on providing essential support, resources, and opportunities to create lasting change. Our mission is to empower communities and transform lives through impactful initiatives. Discover more about our story and vision.
                </p>
                <Button variant="link" className="mt-1 p-0" size="md">Know more about us<ArrowRight /> </Button>
                </div>
            </div>
        </div>
        <div className='flex gap-2 mt-10'>
            
            <div className='w-full px-7 flex align-middle justify-center items-center '>
                <div className='text-center md:text-right '>
                <h2 className='text-3xl font-bold text-center md:text-right w-full'>What We Stand For</h2>
                <p className='text-gray-700 md:text-right pt-2'>
                We stand for hope, compassion, and meaningful change. Our mission is to uplift underprivileged children and support vulnerable communities by providing access to education, healthcare, and essential resources. We believe in creating opportunities, nurturing potential, and breaking the cycle of poverty through dedicated efforts and sustainable initiatives. With integrity and transparency at our core, we strive to build a brighter, more equitable future for all. Join us on this journey to transform lives and bring lasting impact to those who need it most.
                </p>
                <Button variant="link" className="mt-1 p-0 items-end" size="md"> <ArrowRight className='rotate-180' />Know more about us </Button>
                </div>
            </div>
            <div className='hidden md:flex  w-[50vw] pr-4 '>
                <AspectRatio ratio={4/3} className='w-full rounded-md bg-muted'>
                    <Image alt=" swamijitrust teams group photo" src="/banner3.png" className='object-cover rounded-md' fill/>
                </AspectRatio>
                

            </div>
        </div>
    </section>
          <section className='mt-20 text-center'>
              <h2 className='text-3xl font-bold'>Our Team</h2>
              <div className='grid  px-4 md:grid-cols-3 mt-10 gap-3  w-full overflow-x-hidden'>

                  <div >
                      <div className='bg-white w-[200px] shadow-md aspect-[2/2.7] rounded-lg mx-auto'>

                          <div className='bg-orange-500 w-full aspect-[5/2] rounded-t-lg relative'>
                              <div className='bg-white rounded-[50%] p-1 top-[60%]  left-[50%] absolute translate-x-[-50%] '>
                                  <Image width={200} height={200} alt='Photo of raju Roy ' src="https://jocwcbzjqdlxytdxfdnl.supabase.co/storage/v1/object/public/eventgallery/profilePics/18.png" className='rounded-[50%] bg-gray-400 ' />
                              </div>
                          </div>
                          <div className='text-center mt-20'>
                              <h4 className='font-semibold text-lg'>Raju Roy</h4>
                              <p className='text-gray-400 text-sm'>Chairman</p>

                          </div>
                          <div className=' flex justify-evenly mt-4'>
                              <PhoneIcon className='p-0.5 hover:text-orange-500' />
                              <MailIcon className='p-0.5 hover:text-orange-500' />
                              <FacebookIcon className='p-0.5 hover:text-orange-500' />
                          </div>
                      </div>
                  </div>
                  <div >
                      <div className='bg-white w-[200px] shadow-md aspect-[2/2.7] rounded-lg mx-auto'>

                          <div className='bg-orange-500 w-full aspect-[5/2] rounded-t-lg relative'>
                              <div className='bg-white rounded-[50%] p-1 top-[60%]  left-[50%] absolute translate-x-[-50%] '>
                                  <Image width={200} height={200} alt='Photo of raju Roy ' src="https://jocwcbzjqdlxytdxfdnl.supabase.co/storage/v1/object/public/eventgallery/profilePics/19.png" className='rounded-[50%] bg-gray-400 ' />
                              </div>
                          </div>
                          <div className='text-center mt-20'>
                              <h4 className='font-semibold text-lg'>Malay Dhar</h4>
                              <p className='text-gray-400 text-sm'>Secretary</p>

                          </div>
                          <div className=' flex justify-evenly mt-4'>
                              <PhoneIcon className='p-0.5 hover:text-orange-500' />
                              <MailIcon className='p-0.5 hover:text-orange-500' />
                              <FacebookIcon className='p-0.5 hover:text-orange-500' />
                          </div>
                      </div>
                  </div>
                  <div >
                      <div className='bg-white w-[200px] shadow-xl aspect-[2/2.7] rounded-lg mx-auto'>

                          <div className='bg-orange-500 w-full aspect-[10/4] rounded-t-lg relative'>
                              <div className='bg-white rounded-[50%] p-1 top-[60%]  left-[50%] absolute translate-x-[-50%] '>
                                  <Image width={200} height={200} alt='Photo of raju Roy ' src="https://jocwcbzjqdlxytdxfdnl.supabase.co/storage/v1/object/public/eventgallery/profilePics/17.png" className='rounded-[50%] bg-gray-400 ' />
                              </div>
                          </div>
                          <div className='text-center mt-20'>
                              <h4 className='font-semibold text-lg'>Dipanjan Karmakar</h4>
                              <p className='text-gray-400 text-sm'>Treasurer</p>

                          </div>
                          <div className=' flex justify-evenly mt-4'>
                              <PhoneIcon className='p-0.5 hover:text-orange-500' />
                              <MailIcon className='p-0.5 hover:text-orange-500' />
                              <FacebookIcon className='p-0.5 hover:text-orange-500' />
                          </div>
                      </div>
                  </div>


              </div>
              <Button className="mt-10" variant="link" >know more about our team <ArrowRight /> </Button>
          </section>
          <section id='feedbac' className='mt-20 lg:mx-4 lg:rounded-md md:pr-4 bg-gradient-to-b from-orange-500 from-50% to-white to-50% py-4 border w-full'>
          
            <div className='grid md:grid-cols-2 '>
                <div className='flex flex-col align-middle justify-evenly items-center md:pb-8'>
                   <div className=' w-2/3 p-4 text-center md:text-left'>
                    <h2 className='text-white font-bold text-4xl mb-4 '>Get In Touch</h2>
                    <p className='text-white'>Feel free to contact us. Submit your queries here and we will get back to you as soon as possible </p>

                   </div>
                   <div className='w-2/3 hidden overflow-x-visible pl-4 md:flex flex-col gap-4'>
                    <p className='inline-flex gap-4 text-lg '><PhoneIcon  /> 8392064368</p>
                    <p className='inline-flex gap-3 overflow-x-visible flex-nowrap text-lg '><MailIcon /> swamijitrust@gmail.com</p>
                    <p className='inline-flex gap-4 text-lg '><MapPinIcon  /> Bogra Colony, Asansol</p>

                   </div>

                </div>
                <div className='text-center p-4 '>
                    
                    <ReachUsForm />

                </div>
            </div>

          </section>
    </>
  )
}
