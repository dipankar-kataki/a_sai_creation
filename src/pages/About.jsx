import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/AboutHeader'
import Section from '../components/Section'
import OurClients from '../components/OurClients'
import Footer from '../components/Footer'
import Appointment from '../components/Appointment'
import EventHeader from '../components/EventHeader'

const whyUsInfo = {
  title: 'Why Us?',
  image: '/assets/banner_dummy.jpg',
  dexc: ''
}

const About = () => {
  return (
    <>
     
      <EventHeader title={'About Us'}/>
      <Section alignment='flex-row' alignmentSmall={'flex-col-reverse'}/>
      <OurClients/>
      <Section alignment='flex-row' alignmentSmall={'flex-col'}/>
      {/* <Section alignment='flex-row-reverse' alignmentSmall={'flex-col'}/> */}
      <Appointment/>
      
     
    </>
  )
}

export default About