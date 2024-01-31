import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Appointment = () => {
  const navigate = useNavigate();
  const clickHandler = () =>{
    navigate('/contact')
}
  return (
    <section className='flex flex-col items-center justify-center mt-16 gap-8 relative bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("/assets/banner_dummy2.jpg")] bg-cover py-16 text-white'>
        <p className='font-roboto'  data-aos="blur-in" data-aos-once>Book an Appointment</p>
        <h2 className='font-antic text-3xl text-center w-screen  lg:w-[40ch]'  data-aos="blur-in" data-aos-once>The celebration you’ve dreamt up in your head is likely a lot more elaborate and layered with details</h2>
        <Button clickHandler={clickHandler}>Book an appointment</Button>
    </section>
  )
}

export default Appointment