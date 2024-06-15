import Navbar from '../components/Navbar'
import {HeroSection} from '../components/HeroSection';
import FeaturedWork from '../components/FeaturedWork';
import VisualExplorations from '../components/VisualExplorations';
import PersonalProject from '../components/PersonalProject';
import Contact from '../components/Contact';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className='bg-[#202020]'>
          <Navbar />
          <HeroSection />
          <FeaturedWork />
          <VisualExplorations />
          <PersonalProject />
          <Contact />
          <div className='bg-[#b8b8b84b] h-[1px] w-full'></div>
          <Footer />
    </main>  
  )
}