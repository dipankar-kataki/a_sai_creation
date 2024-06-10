import React from 'react'
import EventHeader from '../components/EventHeader'
import Section from '../components/Section'
import OurClients from '../components/OurClients'
import Appointment from '../components/Appointment'
import { FaDotCircle } from "react-icons/fa";
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Mice = () => {
  return (
    <>
         <div className={`h-[60vh] font-antic text-4xl text-white flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/images/mice/01.jpeg")] bg-cover bg-center`}>
            <h1>MICE</h1>
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
              <p className='font-roboto text-gray-400 text-justify'>One of the biggest event trends of event of today is the event roadshow. This event marketing tactic has become increasingly popular as a go-to solution and has the potential to elevate a company’s overall event strategy.</p>
            </div>
          </section>
          <section className='lg:w-[70vw] w-full'>
            <div  data-aos="blur-in" data-aos-once>
              <h2 className='font-roboto font-bold text-xl pb-4 mb-4 border-b-[1px] border-gray-200'>An Efficient mode of promoting</h2>
              <p className='font-roboto text-gray-500 mb-2'>Planning any event involves juggling a lot of moving parts, but the geographical spread of roadshows means there are even more moving parts to keep track of. Taking on such an event can prove to be very effective for you and your team or business strategy, but it requires quality planning from all angles. Whether you’re looking to launch a new product, educate your delegates, raise funds for a charity, recognise achievements or something else entirely, below are some key considerations to produce a successful roadshow.</p>
              <p className='font-roboto text-gray-500 '>Creating new, unique and compelling experiences is key to a successful event, and repeating these experiences for each event is the challenge for roadshow organisers. Making the message creative, engaging and consistent is the cornerstone of every successful event, regardless of what kind of event it is. People remember experiences where their senses have been engaged. Research has shown us that the more senses you engage, the more memorable the event is. Lean on your production partner to help you create a memorable experience for your attendees. They will help you find a solution that can be replicated to ensure attendees will receive the same experience regardless of where they attend your event.</p>
            </div>
            <div className='my-6'  data-aos="blur-in" data-aos-once>
              <img src="/images/mice/01.jpeg" className='h-[80vh] w-[100%] object-cover' alt="" />
            </div>
            <div  data-aos="blur-in" data-aos-once>
              <p className='font-roboto text-gray-500 mb-2'>We are a reliable Roadshow Event Management Service Provider. Promotion is the major part of marketing and this Roadshow Event Management is incorporated in the modern ways of promotion. In the Roadshow Event Management, our company organizes the promotion event that takes place on roads with the use of vehicles like Cars, MinVan, Pickup trucks etc. The professionals repeatedly disseminate the information about the product, company, service, etc. with the help of demos, etc.</p>
              <p className='font-roboto text-gray-500 mb-2'>Roadshow events may attract hundreds of prospective buyers interested in learning more about the offering. The events may include multimedia presentations and question-and-answer sessions with several of the company's officers present. Many companies take advantage of the internet and post videos of the roadshow presentations online. In addition to the larger roadshow events, companies may also hold smaller, private meetings in the months and weeks leading up to the IPO</p>
              <p className='font-roboto text-gray-500'>Probably the single most important part of the roadshows is the content. These events allow speakers to get on the main stage and talk about the latest industry trends. The valuable content presented by thought leaders is why people show up. Attendees must leave work early in order to attend these events, which are commonly held on weekday evenings, so make your event worth their while! If the content is valuable, these attendees will keep coming back for more year after year…and they’ll tell their colleagues to join, too.</p>
            </div>
          </section>
        </div> 
        {/* <div className='flex'>
            <div className='w-[50vw] font-antic text-3xl flex justify-center items-center text-white bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/assets/banner_dummy2.jpg")] bg-cover bg-center'>Our Mission</div>
            <div className='w-[50vw] py-20 px-16 bg-gray-100 font-roboto text-gray-500'>
              <p className='mb-8'>One of the biggest event trends of event of today is the event roadshow. This event marketing tactic has become increasingly popular as a go-to solution and has the potential to elevate a company’s overall event strategy.</p>
              <Button>Know More</Button>
            </div>
        </div> */}
        <Appointment/>
       
    </>
  )
}

export default Mice