import React from 'react'
import Navbar from '../components/Navbar'
import AboutHeader from '../components/AboutHeader'
import Section from '../components/Section'
import OurClients from '../components/OurClients'
import Footer from '../components/Footer'
import Appointment from '../components/Appointment'
import EventHeader from '../components/EventHeader'
import whyusimage from '/assets/banner_dummy2.jpg' 
import Header from '../components/Header'

const whyUsInfo = {
  title: 'Why Us?',
  image: {whyusimage},
  desc: <div>
            <p>We are a forerunner in the field of Entertainment Solution Services, Event Management Services, Celebrity Co-ordinations and Audio Video Production.</p>
            <ul>
              <li>Talking of creativity and Innovation, there is no match of A Sai, as we have our own highly skilled creative team and they are given regular trainings to keep them updated with the newest international trend</li>
              <li>Dedication to work is the main motto of our employee which result in a better event for you.</li>
              <li>We plan the Event as per your requirement and budget instead of doing it the easy way with a common budget & ideas.</li>
            </ul>
        </div>
}

const About = () => {
  return (
    <>
     
      <Header title={'About Us'}/>
      <section className={`flex lg:flex-row flex-col-reverse gap-8 lg:gap-24 mx-4 lg:mx-24 mt-20`}>
          <div className='lg:w-[40vw]'>
              <h2 className='font-antic text-4xl mb-8'  data-aos="blur-in" data-aos-once>Why Us?</h2>
              <div>
                <p className='font-antic text-lg'>We are a forerunner in the field of Entertainment Solution Services, Event Management Services, Celebrity Co-ordinations and Audio Video Production.</p>
                <ul className='flex flex-col gap-4 my-6 font-roboto text-gray-500'>
                    <li>Talking of creativity and Innovation, there is no match of A Sai, as we have our own highly skilled creative team and they are given regular trainings to keep them updated with the newest international trend</li>
                    <li>Dedication to work is the main motto of our employee which result in a better event for you.</li>
                    <li>We plan the Event as per your requirement and budget instead of doing it the easy way with a common budget & ideas.</li>
                </ul>
              </div>
              <h3 className='font-antic text-3xl' data-aos="blur-in" data-aos-once>Our goal, and favorite compliment we get often? <br />“This is better than we could’ve ever imagined.” </h3>
          </div>
          <div>
              <img src='/images/btlactivities/02.jpeg' loading='lazy' className='w-screen lg:w-[40vw] h-[80vh] lg:h-[100vh] object-cover' alt=""  data-aos="blur-in" data-aos-once/>
          </div>
      </section>
      <OurClients/>
      <section className={`flex lg:flex-row-reverse flex-col-reverse gap-8 lg:gap-24 mx-4 lg:mx-24 mt-20`}>
          <div className='lg:w-[40vw]'>
              <h2 className='font-antic text-4xl mb-8'  data-aos="blur-in" data-aos-once>Let us tell you who are we ?</h2>
              <div>
                <p className='font-antic text-lg'>Taking into consideration of the changing Scenario, Event Management has become the integral part of Society. Event is a way of celebration, ideas and innovations.</p>
                <ul className='flex flex-col gap-4 my-6 font-roboto text-gray-500'>
                    <li>We as a Event Management Company would like to add some pride to your event called Life.</li>
                    <li>An Event Management provides a broad range of services, thanks to our in-house and associates talents & solutions. Whether you require event concepts, event management, exhibitions and stage designs or video productions, we can provide you with your needs completely</li>
                    <li>Our expertise in weddings and allied events help us provide a superior décor and gives us an upper hand</li>
                </ul>
              </div>
              <h3 className='font-antic text-3xl' data-aos="blur-in" data-aos-once>Our goal, and favorite compliment we get often? <br />“This is better than we could’ve ever imagined.” </h3>
          </div>
          <div>
              <img src='/images/weddings/03.jpeg' loading='lazy' className='w-screen lg:w-[40vw] h-[80vh] lg:h-[100vh] object-cover' alt=""  data-aos="blur-in" data-aos-once/>
          </div>
      </section>
      <Appointment/>
      
     
    </>
  )
}

export default About