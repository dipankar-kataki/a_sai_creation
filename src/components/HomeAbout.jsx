import React,{useEffect} from 'react'
import Button from './Button'
import "../css/style.css"
import { useNavigate } from 'react-router-dom'


const HomeAbout = () => {
  const navigate = useNavigate()
    const clickHandler = () =>{
        navigate('/contact')
    }

 
  return (
    <div className='max-w-[1500px] m-auto'>
      <section className='flex lg:flex-row flex-col items-center justify-center gap-8 lg:gap-24 bg-[#FEFDFD]'  >
          <div className='w-[90vw] lg:w-[35vw] lg:max-w-[600px] overflow-hidden mt-[-60px] border-white border-[10px] z-[2]'>
            <img src="/images/Home/about_1.jpeg" loading='lazy' className='w-full h-[600px] object-cover lg:max-w-[600px]' alt=""  data-aos="blur-in" data-aos-once/>
          </div>
          <div>
            <h2 className='w-[80vw] lg:w-[400px] font-thin text-5xl text-center leading-[3.5rem] font-antic text-gray-700'  data-aos="blur-in" data-aos-once>We take care of preparation, you enjoy the celebration!</h2>
            <p className='text-center mt-12 font-bold text-[#D7A477] font-roboto'  data-aos="blur-in" data-aos-once>HELLO & WELCOME</p>
          </div>
      </section>
      <section className='flex lg:flex-row flex-col items-center justify-center gap-8 lg:gap-24 bg-[#FEFDFD] mt-2 lg:mt-4'    >
          <div className='flex flex-col items-center gap-4 lg:gap-6'>
            <h2 className='font-poppins' data-aos="blur-in">GET YOUR EVENT COVERED</h2>
            <p className='text-center font-roboto text-gray-500'  data-aos="blur-in" data-aos-once>The most beautiful things are not associated with money; <br />  they are memories and moments.</p>
            <Button clickHandler={clickHandler}>GET STARTED</Button>
          </div>
          <div className='relative'>
            <img src="/images/Home/about_2.jpeg" loading='lazy' className='w-[80vw] lg:w-[400px] h-[200px] object-cover' alt="" data-aos="blur-in" data-aos-once />
            <div className='absolute top-4 left-4 w-[100%] h-[100%] '></div>
          </div>
          
      </section>
    </div>
  )
}

export default HomeAbout