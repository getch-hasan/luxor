import Image from 'next/image';
import React from 'react';


const HeroSection = () => {
    return (
        <section className='md:pt-[72px] pt-[54px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center   md:p-5 p-3 items-center'>
                <div className=''>
                    <h1 className='md:text-5xl xs:text-xl sm:text-2xl  my-5 text-red-500 text-start font-bold'>Legacy of Zan</h1>
                    <p className='text-start'>Zan is a pioneer and a brand leader in the writing instrument industry with a significant presence in the international market. Zan is exporting products to more than 106 countries across the globe including USA, Australia, Russia, UK, Europe, UAE and many other markets. Our range of products include - Kids Markers, Highlighters sustainable Stationeries, once & Personal Stationery.</p>
                    <div className='grid justify-start'>
                        <button className='md:text-3xl xs:text-xl sm:text-2xl my-10 ml-0 font-semibold bg-red-600 text-white lg:text-3xl px-5 p-2'>Explore</button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img width={500} height={500} src={"/image/map.webp"} alt="" />
                </div>
            </div>
        </section>

    );
};

export default HeroSection;