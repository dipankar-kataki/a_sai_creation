import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import EventHeader from '../components/EventHeader'

const Contact = () => {
  return (
    <>
       <EventHeader title={'Contact Us'}/>
        {/* <header className='h-[80vh] flex flex-col gap-4 justify-center items-center'>
            <h1 className='font-poppins'>Contact Us</h1>
            <h2 className='font-antic text-3xl'>We Would Love To Hear From You</h2>
            <p className='font-poppins'>Let us help you create a day that is truly unforgettable.</p>
        </header> */}
        <div className='flex lg:flex-row flex-col-reverse gap-12 justify-center items-center mb-24 mt-20'>
            <iframe className='w-screen lg:w-[45vw]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5578553221344!2d91.77147997455522!3d26.178525391257626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59a204a3db3f%3A0xeeea27db7860be36!2sA%20Sai%20Creation!5e0!3m2!1sen!2sin!4v1706336484868!5m2!1sen!2sin" width="600" height="450"  loading="lazy"></iframe>
            <form action="" className='lg:w-[40vw] px-4 w-screen flex flex-col gap-12'>
                <h3 className='font-antic text-4xl'>Contact Us</h3>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-poppins text-gray-600'>Your Name</label>
                    <input type="text" className='border-b-[1px] border-gray-300 w-[80%] h-[30px] focus:outline-0'  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-poppins text-gray-600'>Your Email</label>
                    <input type="text" className='border-b-[1px] border-gray-300 w-[80%] h-[30px] focus:outline-0'  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-poppins text-gray-600'>Subject</label>
                    <input type="text" className='border-b-[1px] border-gray-300 w-[80%] h-[30px] focus:outline-0'  />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-poppins text-gray-600'>Message</label>
                    <textarea name="" id="" cols="10" rows="5" className='h-[35px] border-b-[1px] focus:outline-0 border-gray-300 w-[80%]'></textarea>
                </div>
                <div>
                    <Button>Send</Button>
                </div>
            </form>
        </div>
       
    </>
  )
}

export default Contact