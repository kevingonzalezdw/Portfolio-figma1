import  {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import {HeroSection} from './components/HeroSection';
import FeaturedWork from './components/FeaturedWork';
import VisualExplorations from './components/VisualExplorations';
import PersonalProject from './components/PersonalProject';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Work from './pages/Work';

function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
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
    }
    />
    <Route path='/Work' element={
      <main className='bg-[#202020]'>
        <Work />
      </main>

    }></Route>
  </Routes>

    </BrowserRouter>

  );
}

export default App;
