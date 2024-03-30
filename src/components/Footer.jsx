import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";




export default function footer() {
  return (
    <div className='flex flex-col items-center gap-3 md:flex-row md:justify-between p-5 mx-4'>
        <h2 className='text-[#959595] text-sm'>Made by <span className='text-white'>Your Name</span> — Copyright 2021</h2>
        <div className='flex text-xl gap-5 text-[#959595]'>
            <FaWhatsapp />
            <IoBasketballOutline />
            <FaLinkedin />
            <FaTwitter />
            <FaBehance />
        </div>
    </div>
  )
}
