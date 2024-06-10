import React from 'react'
import { FaChartPie } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { IoRocket } from "react-icons/io5";
import { IoPieChartSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";

const ServicesPoints = () => {
  return (
    <div className='mx-4 md:mx-8 mt-16'  data-aos="blur-in" data-aos-once>
        <h2 className='font-antic text-4xl mb-16'>We Have Provided Best Event Services!</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 md:gap-y-16 '>
            <div className='flex items-center gap-4'>
                <div className='bg-[#D7A477]  p-4 flex justify-center items-center rounded-full'>
                    <FaChartPie color='white' size={50}/>
                </div>
                <div>
                    <h3 className='font-antic text-bold text-xl'>Strategy & Research</h3>
                    <p className='font-roboto text-gray-400 mt-2'>Do a complete analysis of the event from client and other source</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='bg-[#D7A477]  p-4 flex justify-center items-center rounded-full'>
                    <MdAutoGraph color='white' size={50}/>
                </div>
                <div>
                    <h3 className='font-antic text-bold text-xl'>Reports & Analytics</h3>
                    <p className='font-roboto text-gray-400 mt-2'>Make client aware about the plan and keep them updated.</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='bg-[#D7A477]  p-4 flex justify-center items-center rounded-full'>
                    <IoRocket color='white' size={50}/>
                </div>
                <div>
                    <h3 className='font-antic text-bold text-xl'>Management & Marketing</h3>
                    <p className='font-roboto text-gray-400 mt-2'>Managing the event, providing adequate material and other stuff</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='bg-[#D7A477]  p-4 flex justify-center items-center rounded-full'>
                    <IoPieChartSharp color='white' size={50}/>
                </div>
                <div>
                    <h3 className='font-antic text-bold text-xl'>Infographics Content</h3>
                    <p className='font-roboto text-gray-400 mt-2'>Giving a pictural idea about the event to our client</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='bg-[#D7A477]  p-4 flex justify-center items-center rounded-full'>
                    <FaLocationArrow color='white' size={50}/>
                </div>
                <div>
                    <h3 className='font-antic text-bold text-xl'>Media Promotion</h3>
                    <p className='font-roboto text-gray-400 mt-2'>Any event is made succuessful by the way you promote the event to others</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='bg-[#D7A477]  p-4 flex justify-center items-center rounded-full'>
                    <MdContactSupport color='white' size={50}/>
                </div>
                <div>
                    <h3 className='font-antic text-bold text-xl'>Quick Support</h3>
                    <p className='font-roboto text-gray-400 mt-2'>Quick last minuite are done for our client satisfaction</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ServicesPoints