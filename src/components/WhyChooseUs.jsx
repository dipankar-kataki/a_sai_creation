import React from 'react'
import { FaStar } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className='flex lg:flex-row flex-col items-center justify-center gap-4 lg:gap-16 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/assets/background_gray.jpg")] bg-cover px-4 md:px-16 pb-8 lg:pb-0 mt-24'>
        <div>
            <img src="/assets/banner_dummy.jpg" className='lg:w-[30vw] lg:h-[90vh] my-8 object-cover' alt="" data-aos="blur-in" data-aos-once />
        </div>
        <div className='lg:w-[50vw] text-white'  data-aos="blur-in" data-aos-once>
            <h2 className='font-antic text-4xl mb-6 text-center'>Why Choose Us?</h2>
            <p className='font-antic text-xl'>We are a forerunner in the field of Entertainment Solution Services, Event Management Services, Celebrity Co-ordinations and Audio Video Production.</p>
            <ul className='flex flex-col gap-4 mt-6 font-roboto'>
                <li className='flex gap-2'><div className='mt-[5px]'><FaStar color='#D7A477' /></div> Talking of creativity and Innovation, there is no match of A Sai, as we have our own highly skilled creative team and they are given regular trainings to keep them updated with the newest international trend.</li>
                <li className='flex gap-2'><div className='mt-[5px]'><FaStar color='#D7A477' /></div>  Dedication to work is the main motto of our employee which result in a better event for you.</li>
                <li className='flex gap-2'><div className='mt-[5px]'><FaStar color='#D7A477' /></div>  We plan the Event as per your requirement and budget instead of doing it the easy way with a common budget & ideas.</li>
                <li className='flex gap-2'><div className='mt-[5px]'><FaStar color='#D7A477' /></div> We believe that a good event is always audience-centric. Vision therefore always creates and customizes the project keeping the audience in mind.</li>
            </ul>

        </div>
    </section>
  )
}

export default WhyChooseUs