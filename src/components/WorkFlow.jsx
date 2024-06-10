import React from 'react'
import { BsFillBalloonHeartFill } from "react-icons/bs";

const WorkFlow = () => {
  return (
    <section className='px-4 md:px-8 lg:px-28 pb-24 max-w-[1500px] m-auto'>
        <h2 className='w-[15ch] font-antic text-4xl mb-16'  data-aos="blur-in" data-aos-once>No-fuss event management to celebrate the big day</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'> 
            <div className='flex flex-col gap-2'  data-aos="blur-in" data-aos-once>
                <div>
                    <BsFillBalloonHeartFill size={35} color='#D7A477'/>
                </div>
                <h3 className='font-antic text-gray-800'>PLANNING</h3>
                <p className='text-gray-400 font-roboto'>Setting objectives, tasks, resources, and timelines.</p>
            </div>
            <div className='flex flex-col gap-2'  data-aos="blur-in" data-aos-once>
                <div>
                    <BsFillBalloonHeartFill size={35} color='#D7A477'/>
                </div>
                <h3 className='font-antic text-gray-800'>ORGANISING</h3>
                <p className='text-gray-400 font-roboto'> Structuring resources, roles, workflows for goal achievement.</p>
            </div>
            <div className='flex flex-col gap-2'  data-aos="blur-in" data-aos-once>
                <div>
                    <BsFillBalloonHeartFill size={35} color='#D7A477'/>
                </div>
                <h3 className='font-antic text-gray-800'>TRAIL</h3>
                <p className='text-gray-400 font-roboto'> Testing plan effectiveness through experiments or trials.</p>
            </div>
            <div className='flex flex-col gap-2'  data-aos="blur-in" data-aos-once>
                <div>
                    <BsFillBalloonHeartFill size={35} color='#D7A477'/>
                </div>
                <h3 className='font-antic text-gray-800'>RESULTS</h3>
                <p className='text-gray-400 font-roboto'> Outcomes measured against objectives, informing future actions.</p>
            </div>
        </div>
    </section>
  )
}

export default WorkFlow