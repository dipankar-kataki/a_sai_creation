import React from 'react'
import EventHeader from '../components/EventHeader'
import Section from '../components/Section'
import OurClients from '../components/OurClients'
import Appointment from '../components/Appointment'
import { FaDotCircle } from "react-icons/fa";
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const BTLActivities = () => {
  return (
    <>
         <div className={`h-[60vh] font-antic text-4xl text-white flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/images/btlactivities/01.jpeg")] bg-cover bg-center`}>
            <h1>BTL Activities</h1>
         </div>
        <div className='px-4 lg:px-8 pt-16 pb-8 flex lg:flex-row flex-col-reverse gap-12'>
          <section className='lg:w-[20vw] w-full lg:block flex flex-col-reverse'>
          <div  data-aos="blur-in" data-aos-once>
              <h2 className='text-center font-semibold font-antic py-4 mb-4 bg-gray-100'>SERVICES</h2>
              <ul>
                <li>
                  <Link to={'/corporateevents'}><p className='font-roboto text-gray-400 flex items-center gap-4 pb-4 border-b-[1px] border-gray-300'><div><FaDotCircle size={10} color='#D7A477'/></div>Corporate</p></Link>
                </li>
                <li>
                  <Link to={'/roadsshows'}><p className='font-roboto text-gray-400 flex items-center gap-4 py-4 border-b-[1px] border-gray-300'><div><FaDotCircle size={10} color='#D7A477'/></div>Road Shows</p></Link>
                </li>
                <li>
                  <Link to={'/mallactivities'}><p className='font-roboto text-gray-400 flex items-center gap-4 py-4 border-b-[1px] border-gray-300'><div><FaDotCircle size={10} color='#D7A477'/></div>Mall Activities</p></Link>
                </li>
                <li>
                  <Link to={'/weddings'}><p className='font-roboto text-gray-400 flex items-center gap-4 pt-4'><div><FaDotCircle size={10} color='#D7A477'/></div>Weddings</p></Link>
                </li>
              </ul>
            </div>
            <div className='lg:mt-16 mb-16'  data-aos="blur-in" data-aos-once>
              <h2 className='text-center font-semibold font-antic py-4 mb-4 bg-gray-100'>MISSION</h2>
              <p className='font-roboto text-gray-400 text-justify'>To serve the best to the clients with complete dedication and devotion working from scratch to create the unique blue print for your entire wedding, making sure we have all the details you want to incorporate into the program. To deliver high-quality production and excellent services retain trust with clients over the long term</p>
            </div>
          </section>
          <section className='lg:w-[70vw] w-full'>
            <div  data-aos="blur-in" data-aos-once>
              <h2 className='font-roboto font-bold text-xl pb-4 mb-4 border-b-[1px] border-gray-200'>A stylish event begins long before the guests arrive. It begins with masterful planning.</h2>
              <p className='font-roboto text-gray-500 mb-2'>We have been setting a benchmark for Event Planning Company in Guwahati. Nationally known event service provider A Sai Creation brings out the best Mall Promotion Service in Guwahati. With years of experience and successful history behind us, we have established a reliable presence in the city for organizing Brand Promotion & Mall Activity in the NorthEast and beyond.</p>
              <p className='font-roboto text-gray-500 '>We understand that our clients are of paramount importance to the promotional industry and are in need of quality service providers who can take their products and brands to the masses and possible customers in the city. For this purpose, and reaching the maximum audience, we provide Mall Activities in India and create a branding structure for our clients. We make sure that the product is well researched and all the right elements are in place to the deliver the right idea and message to the people. We help in generating desired responses and build lasting impressions and connections with the audience through our strategically crafted Mall Promotion Service.</p>
            </div>
            <div className='my-6'  data-aos="blur-in" data-aos-once>
              <img src="/images/btlactivities/01.jpeg" loading='lazy' className='h-[80vh] w-[100%] object-cover' alt="" />
            </div>
            <div  data-aos="blur-in" data-aos-once>
              <p className='font-roboto text-gray-500 mb-2'>Mall activities have seen an uprise in recent years as major brands have seen the masses visiting various malls multiple times in a month and after researching the market and studying the patterns, event managing companies like us have also realized the importance of promoting the products in malls and shopping areas. Through our Mall Promotion Service in India, you can be sure of getting to the targetted audience. We approach every promotional event with utmost sincerity and execute them only after carefully strategizing the entire idea, both visually and theoretically so that the right audience is targeted and the event reaches maximum people.</p>
              <p className='font-roboto text-gray-500 mb-2'>Through understanding a company's unique brand and identifying their target audience, our team designs an event concept and coordinates all technical aspects before the event begins. Because we understand the importance of creating a continuous relationship and helping create a shared vision for more events to come, we work with our clients to clarify their ideal business outcomes and streamline the logistics.</p>
              <p className='font-roboto text-gray-500'>In an ever changing, fast-paced world, success is determined by good choices for lasting effects. Communication is essential. We strives to be the best choice of clients by helping to ease their event planning burden. Through consistent, predictable professionalism, we will ensure a worry and hassle-free event at a reasonable price.</p>
            </div>
          </section>
        </div> 
        {/* <div className='flex'>
            <div className='w-[50vw] font-antic text-3xl flex justify-center items-center text-white bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/assets/banner_dummy2.jpg")] bg-cover bg-center'>Our Mission</div>
            <div className='w-[50vw] py-20 px-16 bg-gray-100 font-roboto text-gray-500'>
              <p className='mb-8'>To serve the best to the clients with complete dedication and devotion working from scratch to create the unique blue print for your entire wedding, making sure we have all the details you want to incorporate into the program. To deliver high-quality production and excellent services retain trust with clients over the long term</p>
              <Button>Know More</Button>
            </div>
        </div> */}
        <Appointment/>
       
    </>
  )
}

export default BTLActivities