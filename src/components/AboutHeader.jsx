import React from 'react'

const AboutHeader = () => {
  return (
    <>
    <div className='h-[95vh] grid grid-cols-3'>
         <img src="/assets/banner_dummy.jpg" className='h-[100%] object-cover' alt="" />
        <img src="/assets/banner_dummy2.jpg" className='h-[100%] object-cover' alt="" />
        <img src="/assets/banner_dummy3.jpg" className='h-[100%] object-cover' alt="" />
    </div>
    <div className='mt-24 lg:mb-24 mb-8 text-center flex flex-col items-center gap-4 px-4'>
        <h1 className='font-antic text-4xl'  data-aos="blur-in" data-aos-once>About us</h1>
        <p className='font-roboto'  data-aos="blur-in" data-aos-once>WE’RE HERE TO MAKE YOUR BIG IDEAS HAPPEN</p>
        <p className='font-antic text-3xl w-screen lg:w-[40ch] '  data-aos="blur-in" data-aos-once>Whatever special moment you’re dreaming about— from the first look to the final minutes, we’ll make sure every part of your event weekend is memorable.</p>
    </div>
    </>
  )
}

export default AboutHeader