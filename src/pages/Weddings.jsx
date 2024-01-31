import React from 'react'
import EventHeader from '../components/EventHeader'
import Section from '../components/Section'
import OurClients from '../components/OurClients'
import Appointment from '../components/Appointment'
import { FaDotCircle } from "react-icons/fa";
import Button from '../components/Button'
const Weddings = () => {
  return (
    <>
        <EventHeader title={'Weddings'}/>
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
            <div className='lg:mt-16 mb-16' data-aos="blur-in" data-aos-once>
              <h2 className='text-center font-semibold font-antic py-4 mb-4 bg-gray-100'>MISSION</h2>
              <p className='font-roboto text-gray-400 text-justify'>To serve the best to the clients with complete dedication and devotion working from scratch to create the unique blue print for your entire wedding, making sure we have all the details you want to incorporate into the program. To deliver high-quality production and excellent services retain trust with clients over the long term</p>
            </div>
          </section>
          <section className='lg:w-[70vw] w-full'>
            <div data-aos="blur-in" data-aos-once>
              <h2 className='font-roboto font-bold text-xl pb-4 mb-4 border-b-[1px] border-gray-200'>We believe great events are nothing short of a piece of art.</h2>
              <p className='font-roboto text-gray-500 mb-2'>We have been serving our community for years now. We take pride in our work, therefore, with our years of experience, qualified staff, excellent coordination and planning skills, we guarantee you 100% satisfaction when you allow us to take charge of every detail. We hope to be able to service you, when we do, we will make sure that in that special day you and your guests can enjoy a grand event leaving with nothing to do except enjoy yourself.we'll take care of the rest.</p>
              <p className='font-roboto text-gray-500 '>Our mission statement is every great event starts with organized details while executing them brilliantly! Chic offers a variety of options to assist in making your wedding as perfect as you have imagined it! Whether it assisting with decor, full wedding planning or consulting that you need, we customize our packages to your needs. Let us help you so that you can enjoy your day! We travel and are not limited to just Guwahati. We are happy to come to you</p>
            </div>
            <div className='my-6' data-aos="blur-in" data-aos-once>
              <img src="/assets/banner_dummy2.jpg" className='h-[80vh] w-[100%] object-cover' alt="" />
            </div>
            <div  data-aos="blur-in" data-aos-once>
              <p className='font-roboto text-gray-500 mb-2'>Even if we have an idea of what the you wants or we have planned hundreds of similar events before, the first step is having a one on one conversation with you to find out what you wants or what you would like to accomplish during the event. During this meeting, take notes of all the logistics such as the time, desired location, date and any other key points. In addition, listen to your ideas for the catering, color scheme, theme and other visual elements they would like for the event.</p>
              <p className='font-roboto text-gray-500 mb-2'>With so many components to a wedding, we know you need a team of experienced wedding planners to take your vision and make it a reality. We are a team of trained wedding planners based in Guwahati to help you with your wedding planning process. From helping you find your perfect venue, to managing all your vendors, creating your overall wedding style to designing your floral designs and décor, selecting cuisine to stationery design~ we take care of it all! We do everything for you. We design and build your wedding based on your style and our team’s inventive imagination. Together we will collaborate with you to create a stylish unique wedding affair that is true to your personality!</p>
              <p className='font-roboto text-gray-500'>We are committed to ensuring that your personal style comes shining through. Indian weddings are elaborate and vibrant; typically consisting of several functions.We can assist with absolutely all wedding planning services, venues and locations, decorations and themes, photography and videography as well as planning your wedding budget. As an experienced wedding planner in India that believes in taking care of the tiniest but ever-so-important aesthetically-driven details, you can be sure that your wedding will be unlike another.</p>
            </div>
          </section>
        </div> 
        {/* <div className='flex'>
            <div className='w-[50vw] font-antic text-3xl flex justify-center items-center text-white bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/assets/banner_dummy2.jpg")] bg-cover bg-center'>Our Mission</div>
            <div className='w-[50vw] py-20 px-16 bg-gray-100 font-roboto text-gray-500'>
              <p className='mb-8'>We aim at becoming the leaders of the industry. By providing hassle free wedding planning services at most competent rates, we aim to spread smiles miles after miles. Thus, making each event a memorable experience!</p>
              <Button>Know More</Button>
            </div>
        </div> */}
        <Appointment/>
       
    </>
  )
}

export default Weddings