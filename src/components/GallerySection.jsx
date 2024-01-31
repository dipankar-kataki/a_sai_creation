import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <section className='pt-16 pb-24'>
                <h1 className='text-center font-antic text-4xl'>Our Gallery</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 px-4 sm:px-16'>
                    <img src="/assets/banner_dummy.jpg" onClick={()=>setOpen(true)} loading='lazy' className='cursor-pointer' alt="" />
                    <img src="/assets/banner_dummy2.jpg" alt="" />
                    <img src="/assets/banner_dummy3.jpg" alt="" />
                </div>

            </section>
            <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
            { src: "/assets/banner_dummy.jpg" },
            { src: "/assets/banner_dummy2.jpg" },
            { src: "/assets/banner_dummy3.jpg" },
            ]}
        />
        </>
    )
}

export default GallerySection