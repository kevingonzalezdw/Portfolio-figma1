import React from 'react'
import Navbar from '../components/Navbar'
import Covibe from '../components/Covibe'
import Desing from '../components/Desing'
import Solutions from '../components/Solutions'
import Conclusion from '../components/Conclusion'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <div>
      <Navbar className=""/>
      <div class="bg-center -mt-[56px]">
        <img className='w-full' src="./wallpaper.png" alt="" />
      </div>
      <Covibe />
      <Desing />
      <div className="">
        <img className='w-full' src="./desing.png" alt="" />
      </div>
      <Solutions/>
      <Conclusion/>
      <div className='bg-[#b8b8b84b] h-[1px] w-full'></div>
      <Footer />
    </div>
  )
}
