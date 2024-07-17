import Image from 'next/image';
import React from 'react';

const Partner = () => {
    return (
        <div>
            <div className='grid justify-center'>
                <h1 className='text-center text-xl md:text-5xl font-bold py-10' >Be Our Partner or Reseller</h1>
            </div>
            <div className='grid justify-center items-center'>
                <Image className='w-[1000px] p-10' height={1000} width={1000} src={"/image/Partner.webp"} alt='' />
            </div>
        </div>
    );
};

export default Partner;