import React from 'react'

const Section = ({alignment, alignmentSmall, title, image, desc}) => {
  return (
    <section className={`flex lg:${alignment} ${alignmentSmall} gap-8 lg:gap-24 mx-4 lg:mx-24 mt-20`}>
        <div className='lg:w-[40vw]'>
            <h2 className='font-antic text-4xl mb-8'  data-aos="blur-in" data-aos-once>
                Our outlook is simple: you shouldn’t have to stress to create something extraordinary.
            </h2>
            <p className='font-roboto mb-8'  data-aos="blur-in" data-aos-once>At Mandy Marie Events & Production, we bring together more than 25 years of experience to design, install, and orchestrate corporate events, private parties, and weddings in traditional and unexpected venues throughout Arizona, California, and beyond.  From vineyards to private estates, backyards to ballrooms, we transform spaces and redefine the planning and design experience by curating exquisite events featuring a clean-line, garden, and residential-inspired design style that both challenges the status quo and honors long-standing traditions. </p>
            <h3 className='font-antic text-3xl' data-aos="blur-in" data-aos-once>Our goal, and favorite compliment we get often? <br /> <br /> “This is better than we could’ve ever imagined.” </h3>
        </div>
        <div>
            <img src="/assets/banner_dummy.jpg" className='w-screen lg:w-[40vw] h-[80vh] lg:h-[100vh] object-cover' alt=""  data-aos="blur-in" data-aos-once/>
        </div>
    </section>
  )
}

export default Section