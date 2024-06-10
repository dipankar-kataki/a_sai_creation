import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from './Button';
import '../css/animation.css'
import { useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate()
    const clickHandler = () =>{
        navigate('/contact')
    }
  return (
    <Splide aria-label="My Favorite Images"
    options={{
        autoplay:true,
        type: 'loop',
        interval:8000,
        pauseOnHover: false,
        pauseOnFocus:false
    }}
    >
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <img src="/images/Home/slider_1.jpg" alt="Image 1" loading='lazy' className='h-[130vh] w-screen object-cover scaleanimation'/>
                <div className='absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)]' ></div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] text-white flex flex-col gap-12 items-center'>
                    <h2 className='font-light text-4xl md:text-6xl w-screen md:w-[18ch] text-center  font-antic'>A Good Life is a Collection of Happy Moments</h2>
                    <Button clickHandler={clickHandler}>Lets Celebrate</Button>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <img src="/images/Home/slider_2.jpeg" alt="Image 1" loading='lazy' className='h-[130vh] w-screen object-cover scaleanimation'/>
                <div className='absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)]' ></div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] text-white flex flex-col gap-12 items-center'>
                    <h2 className='font-light text-4xl md:text-6xl w-screen md:w-[18ch] text-center font-antic'>A Good Life is a Collection of Happy Moments</h2>
                    <Button clickHandler={clickHandler}>Lets Celebrate</Button>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='relative overflow-hidden'>
                <img src="/images/Home/slider_3.jpeg" alt="Image 1" loading='lazy' className='h-[130vh] w-screen object-cover scaleanimation'/>
                <div className='absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)]' ></div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] text-white flex flex-col gap-12 items-center'>
                    <h2 className='font-light text-4xl md:text-6xl w-screen md:w-[18ch] text-center font-antic'>A Good Life is a Collection of Happy Moments</h2>
                    <Button clickHandler={clickHandler}>Lets Celebrate</Button>
                </div>
            </div>
        </SplideSlide>
    </Splide>
  )
}

export default Slider