import React from 'react'

export default function Covibe() {
  return (
    <section className='max-w-6xl mx-auto px-5 py-32'>
        <h1 className='text-[#959595] text-base uppercase font-bold'>covibe</h1>
        <h2 className='text-[#DEDEDE] text-xl font-bold mb-14'>Co-working spaces for<br/>tech startups</h2>
        <div className='grid grid-cols-4'>
            <div className='text-start'>
                <h2 className='text-[#959595] font-semibold uppercase text-base'>client</h2>
                <p className='text-[#DEDEDE] font-bold text-base'>Covibe</p>
            </div>
            <div className='text-start'>
                <h2 className='text-[#959595] font-semibold uppercase text-base'>role</h2>
                <p className='text-[#DEDEDE] font-bold text-base'>Product Designer</p>
            </div>
            <div className='text-start'>
                <h2 className='text-[#959595] font-semibold uppercase text-base'>industry</h2>
                <p className='text-[#DEDEDE] font-bold text-base'>Co-working</p>
            </div>
            <div className='text-start'>
                <h2 className='text-[#959595] font-semibold uppercase text-base'>duration</h2>
                <p className='text-[#DEDEDE] font-bold text-base'>2 Months</p>
            </div>
        </div>
    </section>
  )
}
