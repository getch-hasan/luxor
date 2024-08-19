import Image from 'next/image';
import React from 'react';

const Environment = () => {
    return (
        <div>
            <div className='grid justify-center'>
                <h1 className='md:text-5xl lg:text-5xl font-semibold text-green-500 sm:text-2xl'>Let&apos;s Save The <br />
                    Environment With Zan</h1>
            </div>
            <p className='px-20 py-10'>Evolution of humans has done nothing but harm to our planet, the number of non-biodegradable dumps we have made is turning our planet hostile and non-biodegradable & plastic products are the prime reasons behind our planet&apos;s vulnerability. Acknowledging the harm we have caused to our planet has made everyone quite aware & active about following ways to endure a life without causing loss to our surroundings and therefore the demand for eco-friendly products is on rise, especially in the international market. <br />
                Zan International takes a step ahead with an e&apos;ort & aim to help our planet breathe well, by adding stationeries that are made of recycled materials to our range of drawing and writing instruments.</p>
            <div className='' >
                <div className='grid grid-cols-3 sm:gap-5 md:gap-10 justify-between'>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/Quality.webp"} alt='Quality stationeries' />
                    </div>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/cicle.gif"} alt='Recycling cycle' />
                    </div>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/3r.webp"} alt='Reduce, Reuse, Recycle' />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:3 md:gap-10 justify-around'>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/Eco.webp"} alt='Eco-friendly products' />
                    </div>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/100Quality.webp"} alt='100% Quality' />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:gap-1 md:gap-3 lg:gap-5 lg:px-56 sm:px-16 justify-center'>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/Smooth.webp"} alt='Smooth writing experience' />
                    </div>
                    <div className='grid justify-center'>
                        <img className='max-w-[250px]' width={500} height={500} src={"/image/100Quality.webp"} alt='High-quality stationeries' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Environment;
