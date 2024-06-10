import React from 'react'

const Section = ({alignment, alignmentSmall, info}) => {
  return (
    <section className={`flex lg:${alignment} ${alignmentSmall} gap-8 lg:gap-24 mx-4 lg:mx-24 mt-20`}>
        <div className='lg:w-[40vw]'>
            <h2 className='font-antic text-4xl mb-8'  data-aos="blur-in" data-aos-once>
                {info.title}
            </h2>
            <p className='font-roboto mb-8'  data-aos="blur-in" data-aos-once>{info.desc}</p>
            <h3 className='font-antic text-3xl' data-aos="blur-in" data-aos-once>Our goal, and favorite compliment we get often? <br /> <br /> “This is better than we could’ve ever imagined.” </h3>
        </div>
        <div>
            <img src={info.image} loading='lazy' className='w-screen lg:w-[40vw] h-[80vh] lg:h-[100vh] object-cover' alt=""  data-aos="blur-in" data-aos-once/>
        </div>
    </section>
  )
}

export default Section