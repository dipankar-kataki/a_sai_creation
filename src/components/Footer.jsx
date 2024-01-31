import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#FFF8D2] text-black px-8 py-12'>
      <div className='max-w-[1500px] m-auto grid grid-cols-1 lg:grid-cols-4 gap-12'>
      <div>
        <h2 className='font-antic text-xl font-bold'>A SAI CREATION</h2>
        <p className='font-roboto text-gray-500 mt-4'>We are “SaiCreation & Associates” an Event Management Company dealing with events of all zones specializing in Corporate Events.</p>
      </div>
      <div>
        <h2 className='font-antic text-xl font-bold'>SERVICES</h2>
        <ul className='font-roboto text-gray-500 mt-4'>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
        </ul>
      </div>
      <div>
        <h2 className='font-antic text-xl font-bold'>USEFUL LINKS</h2>
        <ul className='font-roboto text-gray-500 mt-4'>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
        </ul>
      </div>
      <div>
        <h2 className='font-antic text-xl font-bold'>CONTACT US</h2>
        <ul className='font-roboto text-gray-500 mt-4'>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
          <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
        </ul>
      </div>
      </div>
    </footer>
  )
}

export default Footer