import React, {useEffect} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import CorporateEvents from './pages/CorporateEvents'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MallActivities from './pages/MallActivities'
import RoadShows from './pages/RoadShows'
import Weddings from './pages/Weddings'
import AOS from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 500,
      easing: 'ease-out',
    });
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/corporateevents' element={<CorporateEvents/>}/>
            <Route path='/mallactivities' element={<MallActivities/>}/>
            <Route path='/roadshows' element={<RoadShows/>}/>
            <Route path='/weddings' element={<Weddings/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    
    </>
  )
}

export default App