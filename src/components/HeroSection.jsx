import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

export const HeroSection = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row p-10 max-w-5xl mx-auto md:py-32'>
        <div className=' md:w-3/5 flex flex-col items-center md:items-start py-5 text-center'>
            <h1 className='text-[#DEDEDE] text-xl font-bold p-2 md:text-4xl md:text-start'>Hi, I am Your NameA Product Designer based in City.</h1>
            <p className='text-[#959595] text-md md:text-xl md:text-start md:py-5'>I help businesses and companies reach their goals by designing user-centric digital  products & interactive experiences.</p>
            <button className='bg-[#959595] flex items-center justify-center gap-2 text-white py-2 mt-5 px-5 rounded-sm w-64 hover:scale-105'><MdOutlineEmail />hi@yourname.com</button>
        </div>
        <div className='md:w-2/5 flex justify-center items-center'>
            <img className='w-48 h-48 md:w-64 md:h-64 object-cover' src="./profile.png" alt="" />
        </div>
    </section>
  )
}
