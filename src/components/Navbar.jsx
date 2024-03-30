import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-[#323232] w-ful h-14'>
    <navbar className="flex justify-between mx-auto items-center text-white p-2 px-8 md:px-14 lg:px-20 xl:px-32 backdrop-blur-xl">
      <picture className='flex items-center gap-2'>
        <img href="/" className='w-9 h-9 cursor-pointer' src="./logo.svg" alt="" />
        <h1 className='hidden md:block font-semibold hover:text-[#959595]'><a href="/">Logo Home</a></h1>
      </picture>
      <ul className='flex gap-5'>
        <li><a className='hover:text-[#959595]' href="/">Home</a></li>
        <li><a className='hover:text-[#959595]' href="/Work">Work</a></li>
        <li><a className='hover:text-[#959595]' href="#">Contact</a></li>
      </ul>
    </navbar>
    </div>

  )
}
