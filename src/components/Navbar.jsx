import React,{useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [navOpen,setNavOpen] = useState(false);

  const navOpenHandler = () => {
    setNavOpen(true);
  }
  const navCloseHandler = () => {
    setNavOpen(false);

  }
  return (
    <nav className='flex lg:flex-row flex-col justify-between lg:items-center w-full px-4 lg:px-12 py-2 absolute top-0 left-0 z-50 text-white border-b-[1px] border-[rgba(255,255,255,0.2)]'>
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <div className='flex items-center gap-4'>
            <img src="/assets/logo.png" className='w-[40px]' alt="" />
            <h2 className='font-antic font-bold text-lg'><span>A SAI</span> <span>Creation</span></h2>
          </div>
          <button className='block lg:hidden' onClick={navOpenHandler}><RxHamburgerMenu size={24}/></button>
        </div>
        <ul className='hidden lg:flex gap-8 font-semibold'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About Us</NavLink></li>
            <li className='relative submenu_container'>
              <p className='flex items-center gap-[5px] cursor-pointer'>Events <div><FaAngleDown color='white'/></div></p>
              <div className='absolute top-6 py-4 px-4 w-[200px] rounded-md font-light text-black whitespace-nowrap bg-white shadow-md submenu'>
                <ul className='flex flex-col gap-4'>
                  <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
                  <li><Link to={'/roadshows'}>Road Shows</Link></li>
                  <li><Link to={'/mallactivities'}>Mall Activities & RWA</Link></li>
                  <li><Link to={'/weddings'}>Weddings</Link></li>
                </ul>
              </div>
            </li>
            <li><a href="">Clients</a></li>
            <li><NavLink to={'/gallery'}>Our Work</NavLink></li>
            <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        </ul>

        {/* For mobile */}

        {navOpen &&  
        <div className='flex justify-center items-center flex-col absolute top-0 left-0 w-screen h-screen gap-8 font-semibold bg-[rgba(0,0,0,0.8)] text-white'>
          <button className='absolute right-8 top-8' onClick={navCloseHandler}>
           <AiOutlineClose size={24}/>
          </button>
        <ul className='flex justify-center items-center gap-6 flex-col lg:hidden'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About Us</NavLink></li>
            <li className='relative submenu_container'>
              <p className='flex items-center gap-[5px] cursor-pointer'>Events <div><FaAngleDown color='white'/></div></p>
              <div className='absolute top-6 py-4 px-4 w-[200px] rounded-md font-light text-black whitespace-nowrap bg-white shadow-md submenu'>
                <ul className='flex flex-col gap-4'>
                  <li><Link to={'/corporateevents'}>Corporate Events</Link></li>
                  <li><Link to={'/roadshows'}>Road Shows</Link></li>
                  <li><Link to={'/mallactivities'}>Mall Activities & RWA</Link></li>
                  <li><Link to={'/weddings'}>Weddings</Link></li>
                </ul>
              </div>
            </li>
            <li><a href="">Clients</a></li>
            <li><NavLink to={'/gallery'}>Our Work</NavLink></li>
            <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
        </ul>
        </div>
         }
   
    </nav>
  )
}

export default Navbar