import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
        <Image height={300} width={400} src="/404.svg" alt='404 illustartions' />

    </div>
  )
}
