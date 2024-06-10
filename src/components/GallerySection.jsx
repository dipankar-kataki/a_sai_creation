import React,{useState} from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Tabs } from 'flowbite-react';

const galleryImages = [
    {src: "/images/btlactivities/01.jpeg"},
    {src: "/images/btlactivities/02.jpeg"},
    {src: "/images/btlactivities/03.jpeg"},
    {src: "/images/weddings/01.jpeg"},
    {src: "/images/weddings/02.jpeg"},
    {src: "/images/weddings/03.jpeg"},
    {src: "/images/weddings/04.jpeg"},
    {src: "/images/weddings/05.jpeg"},
    {src: "/images/weddings/06.jpg"},
    {src: "/images/weddings/07.jpeg"}, 
    {src: "/images/corporateevents/01.jpg"},
    {src: "/images/corporateevents/02.jpeg"},
    {src: "/images/corporateevents/03.jpg"},
    {src: "/images/corporateevents/04.jpeg"},
    {src: "/images/mice/01.jpeg"},
    {src: "/images/mice/02.jpeg"},
    {src: "/images/mice/03.jpeg"},
    {src: "/images/mice/04.jpeg"}
];
const btlImages = [
    {src: "/images/btlactivities/01.jpeg"},
    {src: "/images/btlactivities/02.jpeg"},
    {src: "/images/btlactivities/03.jpeg"},
];
const weddingImages = [
    {src: "/images/weddings/01.jpeg"},
    {src: "/images/weddings/02.jpeg"},
    {src: "/images/weddings/03.jpeg"},
    {src: "/images/weddings/04.jpeg"},
    {src: "/images/weddings/05.jpeg"},
    {src: "/images/weddings/06.jpg"},
    {src: "/images/weddings/07.jpeg"}, 
]
const corporateImages = [
    {src: "/images/corporateevents/01.jpg"},
    {src: "/images/corporateevents/02.jpeg"},
    {src: "/images/corporateevents/03.jpg"},
    {src: "/images/corporateevents/04.jpeg"},
    
]
const miceImages = [
    {src: "/images/mice/01.jpeg"},
    {src: "/images/mice/02.jpeg"},
    {src: "/images/mice/03.jpeg"},
    {src: "/images/mice/04.jpeg"},
]

const GallerySection = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
  
    const openDept = (dept) => {
      setSelectedDepartment(dept);
    };
 
    const galleryHandler = (index) => {
        setOpen(true);
        setIndex(index)

    }
    console.log(open)
    return (
        <>
        <section className='mx-4 my-8'>
            <div className="tab flex justify-start gap-4 flex-wrap px-4 sm:px-16" data-aos="fade-right" data-aos-once={true}>
                        <button
                        className={`tablinks ${selectedDepartment === 'all' ? `bg-[#D8A67A] text-white` : 'bg-gray-200 text-black'} px-4 py-2 rounded-lg`}
                        onClick={() => openDept('all')}
                        >
                        All Photos
                        </button>
                        <button
                        className={`tablinks ${selectedDepartment === 'btl' ? `bg-[#D8A67A] text-white` : 'bg-gray-200 text-black'} px-4 py-2 rounded-lg`}
                        onClick={() => openDept('btl')}
                        >
                        BTL Activities
                        </button>
                        <button
                        className={`tablinks ${selectedDepartment === 'weddings' ? `bg-[#D8A67A] text-white` : 'bg-gray-200 text-black'} px-4 py-2 rounded-lg`}
                        onClick={() => openDept('weddings')}
                        >
                        Weddings
                        </button>
                        <button
                        className={`tablinks ${selectedDepartment === 'corporate' ? `bg-[#D8A67A] text-white` : 'bg-gray-200 text-black'} px-4 py-2 rounded-lg`}
                        onClick={() => openDept('corporate')}
                        >
                        Corporate Activities
                        </button>
                        <button
                        className={`tablinks ${selectedDepartment === 'mice' ? `bg-[#D8A67A] text-white` : 'bg-gray-200 text-black'} px-4 py-2 rounded-lg`}
                        onClick={() => openDept('mice')}
                        >
                        MICE
                        </button>
            </div>

            {selectedDepartment == 'all' && 
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 px-4 sm:px-16'>
                        {galleryImages.map((image,index)=>(
                            <img src={image.src} onClick={()=>galleryHandler(index)}  loading='lazy' className='cursor-pointer h-[270px] w-[90vw] lg:w-[30vw] md:w-[45vw] object-cover ' data-aos="blur-in" data-aos-once  alt="" />

                        ))} 
                    </div>
                    <Lightbox
                    index={index}
                    open={open}
                    close={() => setOpen(false)}
                    slides={galleryImages}/>
                </>
            
            }
             {selectedDepartment == 'btl' && 
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 px-4 sm:px-16'>
                        {btlImages.map((image,index)=>(
                            <img src={image.src} onClick={()=>galleryHandler(index)}  loading='lazy' className='cursor-pointer h-[270px] w-[90vw] lg:w-[30vw] md:w-[45vw] object-cover ' data-aos="blur-in" data-aos-once  alt="" />

                        ))} 
                    </div>
                    <Lightbox
                    index={index}
                    open={open}
                    close={() => setOpen(false)}
                    slides={btlImages}/>
                </>
            
            }
            {selectedDepartment == 'weddings' && 
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 px-4 sm:px-16'>
                        {weddingImages.map((image,index)=>(
                            <img src={image.src} onClick={()=>galleryHandler(index)}  loading='lazy' className='cursor-pointer h-[270px] w-[90vw] lg:w-[30vw] md:w-[45vw] object-cover ' data-aos="blur-in" data-aos-once  alt="" />

                        ))} 
                    </div>
                    <Lightbox
                    index={index}
                    open={open}
                    close={() => setOpen(false)}
                    slides={weddingImages}/>
                </>
            
            }
            {selectedDepartment == 'corporate' && 
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 px-4 sm:px-16'>
                        {corporateImages.map((image,index)=>(
                            <img src={image.src} onClick={()=>galleryHandler(index)}  loading='lazy' className='cursor-pointer h-[270px] w-[90vw] lg:w-[30vw] md:w-[45vw] object-cover ' data-aos="blur-in" data-aos-once  alt="" />

                        ))} 
                    </div>
                    <Lightbox
                    index={index}
                    open={open}
                    close={() => setOpen(false)}
                    slides={corporateImages}/>
                </>
            
            }
            {selectedDepartment == 'mice' && 
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 px-4 sm:px-16'>
                        {miceImages.map((image,index)=>(
                            <img src={image.src} onClick={()=>galleryHandler(index)}  loading='lazy' className='cursor-pointer h-[270px] w-[90vw] lg:w-[30vw] md:w-[45vw] object-cover ' data-aos="blur-in" data-aos-once  alt="" />

                        ))} 
                    </div>
                    <Lightbox
                    index={index}
                    open={open}
                    close={() => setOpen(false)}
                    slides={miceImages}/>
                </>
            
            }

          </section>
        </>
    )
}

export default GallerySection