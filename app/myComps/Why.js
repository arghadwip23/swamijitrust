import React from 'react'
import { FilePenIcon,BadgeIndianRupeeIcon,BookCheckIcon,TrendingUpIcon} from 'lucide-react'
export default function Why() {
  return (
    <section className='mt-4 mb-2 lg:px-10'>
        <h2 className=' text-center text-3xl font-bold p-4'>why to donate us </h2>
        <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2'>
            <div className='px-2 '>
                <div className='aspect-square w-10 rounded-md rotate-45 shadow-lg flex  justify-center items-center z-10 bg-orange-50 mx-auto' > <FilePenIcon className='-rotate-45 text-orange-500' size={20} /></div>
                <div className='p-2 z-2 rounded  text-center shadow-md'>
                <h4 className='font-semibold text-lg text-orange-500'>Trusted & Legal</h4>
                <p className='text-sm text-gray-600'>We are a legally registered NGO, fully acknowledged by the Indian national government, ensuring your donations are in safe and credible hands.</p>
                </div>
            </div>
            <div className='px-2 '>
                <div className='aspect-square w-10 rounded-md rotate-45 shadow-lg flex  justify-center items-center z-10 bg-orange-50 mx-auto' > <BadgeIndianRupeeIcon className='-rotate-45 text-orange-500' size={20} /></div>
                <div className='p-2 z-2 rounded  text-center shadow-md'>
                <h4 className='font-semibold text-lg text-orange-500'>Tax Benefits</h4>
                <p className='text-sm text-gray-600'>All donations are eligible for tax deductions under Indian tax laws, allowing you to contribute while saving on taxes.</p>
                </div>
            </div>
            <div className='px-2 md:hidden lg:block'>
                <div className='aspect-square w-10 rounded-md rotate-45 shadow-lg flex  justify-center items-center z-10 bg-orange-50 mx-auto' > <TrendingUpIcon className='-rotate-45 text-orange-500' size={20} /></div>
                <div className='p-2 z-2 rounded  text-center shadow-md'>
                <h4 className='font-semibold text-lg text-orange-500'>Real Impact</h4>
                <p className='text-sm text-gray-600'>Your contributions directly support food, shelter, education, and healthcare for underprivileged children, creating lasting change.</p>
                </div>
            </div>
            <div className='px-2 '>
                <div className='aspect-square w-10 rounded-md rotate-45 shadow-lg flex  justify-center items-center z-10 bg-orange-50 mx-auto' > <BookCheckIcon className='-rotate-45 text-orange-500' size={20} /></div>
                <div className='p-2 z-2 rounded  text-center shadow-md'>
                <h4 className='font-semibold text-lg text-orange-500'>Transparency and Trust</h4>
                <p className='text-sm text-gray-600'>We maintain complete transparency with regular reports and updates, showing exactly how your donations make a difference.</p>
                </div>
            </div>
            
            
        </div>
    </section>
  )
}
