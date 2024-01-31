import React from 'react'
import EventHeader from '../components/EventHeader'
import Section from '../components/Section'
import OurClients from '../components/OurClients'
import Appointment from '../components/Appointment'
import { FaDotCircle } from "react-icons/fa";
import Button from '../components/Button'
import InquiryForm from '../components/InquiryForm'
const CorporateEvents = () => {
  return (
    <>
        <EventHeader title={'Corporate Events'}/>
        <div className='px-4 lg:px-8 pt-16 pb-8 flex lg:flex-row flex-col-reverse gap-12'>
          <section className='lg:w-[20vw] w-full lg:block flex flex-col-reverse'>
            <div  data-aos="blur-in" data-aos-once>
              <h2 className='text-center font-semibold font-antic py-4 mb-4 bg-gray-100'>SERVICES</h2>
              <ul>
                <li className='font-roboto text-gray-400 flex items-center gap-4 pb-4 border-b-[1px] border-gray-300'><div><FaDotCircle size={10} color='#D7A477'/></div>Corporate</li>
                <li className='font-roboto text-gray-400 flex items-center gap-4 py-4 border-b-[1px] border-gray-300'><div><FaDotCircle size={10} color='#D7A477'/></div> Corporate</li>
                <li className='font-roboto text-gray-400 flex items-center gap-4 py-4 border-b-[1px] border-gray-300'><div><FaDotCircle size={10} color='#D7A477'/></div> Corporate</li>
                <li className='font-roboto text-gray-400 flex items-center gap-4 pt-4'><div><FaDotCircle size={10} color='#D7A477'/></div> Corporate</li>
              </ul>
            </div>
            <div className='lg:mt-16 mb-16'  data-aos="blur-in" data-aos-once>
              <h2 className='text-center font-semibold font-antic py-4 mb-4 bg-gray-100'>MISSION</h2>
              <p className='font-roboto text-gray-400 text-justify'>To serve the best to the clients with complete dedication and devotion working from scratch to create the unique blue print for your entire wedding, making sure we have all the details you want to incorporate into the program. To deliver high-quality production and excellent services retain trust with clients over the long term</p>
            </div>
          </section>
          <section className='lg:w-[70vw] w-full'>
            <div  data-aos="blur-in" data-aos-once> 
              <h2 className='font-roboto font-bold text-xl pb-4 mb-4 border-b-[1px] border-gray-200'>Organization is key for corporate events.</h2>
              <p className='font-roboto text-gray-500 mb-2'>Simply put, a corporate event is any form of event, hospitality or social activity which is organised or funded by a business entity. Businesses organise events for many reasons, they may want to educate, reward, motivate, celebrate, mark key milestones, manage organisational change or encourage collaboration. What ever the reason may be, there is an event solution.</p>
              <p className='font-roboto text-gray-500 '>Planning an event for a corporate team is different from planning a stand-alone exhibition. From a tight budget to a failure to match the company’s mission, corporate event planners are always prepared to meet any of the numerous challenges in their path.</p>
            </div>
            <div className='my-6'  data-aos="blur-in" data-aos-once>
              <img src="/assets/banner_dummy2.jpg" className='h-[80vh] w-[100%] object-cover' alt="" />
            </div>
            <div  data-aos="blur-in" data-aos-once>
              <p className='font-roboto text-gray-500 mb-2'>Because it’s the company’s mission that matters the most, don’t start planning a corporate event by focusing on your own goals. Instead, invest your efforts into clarifying the message your client wants to communicate. Organise a group meeting with stakeholders, or discuss corporate event planning ideas during one-on-one discussions with the most influential person no later than 3 months before an event. The important thing to consider is that the people you’ll be having a meeting with won’t want to sacrifice hours to talk about everything and nothing. To make a dialogue truly meaningful, prepare a list in advance of questions you’d like to ask.</p>
              <p className='font-roboto text-gray-500 mb-2'>Our keys to success include the commitment to quality by every person who is part of the team. Each of us will be responsible to push ourselves to a higher level of professionalism in three areas:</p>
              <ol className='font-roboto text-gray-500 ml-4 mb-2'>
                <li>1. Consistent, accurate fulfillment of the client's wishes.</li>
                <li>2. Competitive pricing for the quality of services offered.</li>
                <li>3. Significant profit made on each event planned.</li>
              </ol>
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

export default CorporateEvents