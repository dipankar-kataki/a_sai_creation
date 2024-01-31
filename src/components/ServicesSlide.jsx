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
        padding:'5rem',
        type   : 'loop',
        focus:'center',
        autoplay: true
    }}
    >
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Corporate Events</h3>
                <img src="/assets/banner_dummy.jpg" alt="Image 1" className='h-[60vh] lg:h-[80vh] lg:w-[80vw] m-auto object-cover '/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Road Shows</h3>
                <img src="/assets/banner_dummy2.jpg" alt="Image 1" className='h-[60vh] lg:h-[80vh] lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Mall Activities</h3>
                <img src="/assets/banner_dummy3.jpg" alt="Image 1" className='h-[60vh] lg:h-[80vh] lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <h3 className='font-antic mb-8 text-2xl md:text-4xl font-light text-center'>Weddings</h3>
                <img src="/assets/banner_dummy3.jpg" alt="Image 1" className='h-[60vh] lg:h-[80vh] lg:w-[80vw] m-auto  object-cover '/>
            </div>
        </SplideSlide>
    </Splide>
    </section>
  )
}

export default ServicesSlide