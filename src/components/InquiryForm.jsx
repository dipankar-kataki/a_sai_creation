import React from 'react'
import Button from './Button'

const InquiryForm = () => {
  return (
    <section className='flex lg:flex-row flex-col items-center gap-12 mb-24'>
        <div className='relative'>
            <img src="/assets/banner_dummy2.jpg" className='lg:w-[50vw] h-[80vh] object-cover' alt=""  data-aos="blur-in" data-aos-once/>
            <div className='absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)]' ></div>
            <h2 className='absolute font-antic w-screen text-center text-4xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>We know how to make something special</h2>
        </div>
        <form action="" className='lg:w-[40vw] flex flex-col gap-12'>
            <h3 className='font-antic text-4xl'>Get the party started!</h3>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-poppins text-gray-600'>Your Name</label>
                <input type="text" className='border-b-[1px] border-gray-300 w-[90vw] lg:w-[80%] h-[30px] focus:outline-0'  />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-poppins text-gray-600'>Your Email</label>
                <input type="text" className='border-b-[1px] border-gray-300 w-[90vw] lg:w-[80%] h-[30px] focus:outline-0'  />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-poppins text-gray-600'>Subject</label>
                <input type="text" className='border-b-[1px] border-gray-300 w-[90vw] lg:w-[80%] h-[30px] focus:outline-0'  />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='font-poppins text-gray-600'>Message</label>
                <textarea name="" id="" cols="10" rows="5" className='h-[35px] w-[90vw] border-b-[1px] focus:outline-0 border-gray-300 lg:w-[80%]'></textarea>
            </div>
            <div>
                <Button>Send</Button>
            </div>
        </form>
    </section>
  )
}

export default InquiryForm