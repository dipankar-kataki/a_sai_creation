import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import HomeAbout from '../components/HomeAbout'
import ServicesSlide from '../components/ServicesSlide'
import WorkFlow from '../components/WorkFlow'
import Footer from '../components/Footer'
import InquiryForm from '../components/InquiryForm'
import WhyChooseUs from '../components/WhyChooseUs'
import ServicesPoints from '../components/ServicesPoints'

const Home = () => {
  return (
    <>
        <Slider/>
        <HomeAbout/>
        <WhyChooseUs/>
        <ServicesPoints/>
        <ServicesSlide/>
        <WorkFlow/>
        <InquiryForm/>

    </>
  )
}

export default Home