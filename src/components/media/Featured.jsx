import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return (
        <div className="py-10">
            <div className='grid py-16 justify-center'>
                <h1 className='text-center font-extrabold text-5xl'>Featured Across</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 sm:gap-3 md:gap-5 gap-2 justify-between'>
                <div className='grid justify-center'>
                    <Image className='max-w-sm h-full   ' width={500} height={500} src={"/image/indian.webp"}  alt=''/>
                </div>
                <div className='grid justify-center'>
                    <Image className='max-w-sm h-full ' width={500} height={500} src={"/image/forbes.webp"} alt='' />
                </div>
                <div className='grid justify-center'>
                    <Image className='max-w-sm h-full ' width={500} height={500} src={"/image/ET.webp"}  alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Featured;