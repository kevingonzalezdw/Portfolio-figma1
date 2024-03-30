import React from 'react'

export default function FeaturedWork() {
  return (
    <section className='max-w-5xl mx-auto px-5 pb-14'>
        <picture className='flex items-center gap-5 text-[#959595] px-5 pb-20 pt-10'>
            <img className='w-5 h-10' src="./Arrow.svg" alt="" />
            <h1 className='text-md font-semibold'>FEATURED WORK</h1>
        </picture>
        <div className='grid grid-cols-2 gap-4'>
            <div className='gap-2'>
                <img className='mt-20 py-4' src="./img1-1.png" alt="" />
                <img src="./img1-2.png" alt="" />
            </div>
            <div>
                <img className='py-4' src="./img1-3.png" alt="" />
                <img src="./img1-4.png" alt="" /> 
            </div>
        </div>
    </section>
  )
}
