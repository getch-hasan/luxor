import Image from 'next/image';
import React from 'react';

const Environmetn = () => {
    return (
        <div>
            <div className='grid justify-center'>
                <h1 className='md:text-5xl lg:text-5xl font-semibold text-green-500 sm:text-2xl'>Let's Save The <br />
                    Environment With Luxor</h1>
            </div>
            <p className='px-20 py-10'>Evolution of humans has done nothing but harm to our planet, the number of non-biodegradable dumps we have made is turning our planet hostile and non-biodegradable & plastic products are the prime reasons behind our planet's vulnerability. Acknowledging the harm we have caused to our planet has made everyone quite aware & active about following ways to endure a life without causing loss to our surroundings and therefore the demand for eco-friendly products is on rise, especially in the international market. <br />
                Luxor International takes a step ahead with an e‘ort & aim to help our planet breathe well, by adding stationeries that are made of recycled materials to our range of drawing and writing instruments</p>
            <div className='' >
                <div className='grid grid-cols-3 sm:gap-5 md:gap-10 justify-between'>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px]   ' width={500} height={500} src={"/image/Quality.webp"} />
                    </div>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px] ' width={500} height={500} src={"/image/cicle.gif"} />
                    </div>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px] ' width={500} height={500} src={"/image/3r.webp"} />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:3 md:gap-10 justify-around'>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px] ' width={500} height={500} src={"/image/Eco.webp"} />
                    </div>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px] ' width={500} height={500} src={"/image/100Quality.webp"} />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:gap-1 md:gap-3 lg:gap-5 lg:px-56 sm:px-16 justify-center'>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px] ' width={500} height={500} src={"/image/Smooth.webp"} />
                    </div>
                    <div className='grid justify-center'>
                        <Image className='max-w-[250px] ' width={500} height={500} src={"/image/100Quality.webp"} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Environmetn;