import React from 'react'
import '../css/style.css'
import Header from '../components/Header'

const Clients = () => {
  return (
    <>
        <Header title={'Our Clients'}/>
        <div className='py-20 px-4 flex justify-center items-center client_back'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-12 w-max-[1500px]'>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/1.png" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/2.png"  className='w-[180px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/3.png"  className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/4.jpg"  className='w-[180px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/5.jpg"  className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/6.jpg"  className='w-[180px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/7.jpg" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/8.jpg" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/9.png" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/10.png" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/11.png" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/12.png" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/13.jpg" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/14.jpg" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/15.png" className='w-[200px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/16.jpg" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/17.png" className='w-[250px]' loading='lazy' alt="" />
                </div>
                <div className="client_card"  data-aos="blur-in" data-aos-once >
                    <img src="/images/clients/18.png" className='w-[150px]' loading='lazy' alt="" />
                </div>

               
            </div>
        </div>
    </>
  )
}

export default Clients