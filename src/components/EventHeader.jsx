import React from 'react'

const EventHeader = ({title}) => {
  return (
    <div className='h-[60vh] font-antic text-4xl text-white flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/assets/banner_dummy2.jpg")] bg-cover bg-center'>
        <h1>{title}</h1>
    </div>
  )
}

export default EventHeader