import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section className='max-w-2xl mx-auto flex flex-col items-center py-10 text-center px-5 mb-5'>
      <h1 className='text-[#DEDEDE] text-xl font-bold p-2  md:text-start'>Contact Me</h1>
      <p className='text-[#959595] text-md md:text-xl md:py-5'>If you are looking to hire a product designer, I’m currently available for freelance work</p>
      <button className='bg-[#959595] flex items-center justify-center gap-2 text-white py-2 my-5 rounded-sm w-64 hover:scale-105'><MdOutlineEmail />hi@yourname.com</button>
    </section>
  )
}
