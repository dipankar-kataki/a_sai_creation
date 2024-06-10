import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from './Button';

const ServicesSlide = () => {
  return (
    <section className='py-24 '>
        <h2 className='text-center text-[#D7A477] font-bold font-poppins mb-8'>OUR SERVICES</h2>
        <Splide aria-label="My Favorite Images"
    options={{
        type   : 'loop',
        focus:'center',
        autoplay: true,
        breakpoints: {
            1024: {
                padding:'5rem',
            },
      }
    }}
    >
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Concerts</h3>
                <img src="/images/concerts/01.jpg" loading='lazy' alt="Image 1" className='h-[60vh] lg:h-[80vh] w-full lg:w-[80vw] m-auto object-cover '/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>BTL Activities</h3>
                <img src="/images/btlactivities/01.jpeg" loading='lazy' alt="Image 1" className='h-[60vh] lg:h-[80vh] w-full lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
        {/* <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Mall Activities</h3>
                <img src="/pictures/Mall Activities & RWA/processed-1a39b44e-be66-4792-8254-6a7fcaefa699_y2rqMysO.jpeg" alt="Image 1" className='h-[60vh] lg:h-[80vh] lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide> */}
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Weddings</h3>
                <img src="/images/weddings/07.jpeg" loading='lazy' alt="Image 1" className='h-[60vh] lg:h-[80vh] w-full lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>MICE</h3>
                <img src="/images/mice/01.jpeg" loading='lazy' alt="Image 1" className='h-[60vh] lg:h-[80vh] w-full lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Corporate Events</h3>
                <img src="/images/corporateevents/01.jpg" loading='lazy' alt="Image 1" className='h-[60vh] lg:h-[80vh] w-full lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
    </Splide>
    </section>
  )
}

export default ServicesSlide