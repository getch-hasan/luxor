import Image from 'next/image';
import React from 'react';

const Award = () => {
    return (
        <div>
            <div className='grid justify-center'>
                <h1 className='text-center text-xl md:text-5xl font-bold py-10' >Award & Recognitions</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 sm:gap-5 md:gap-10 gap-2 justify-between'>
                <div className='grid justify-center'>
                    <Image className='max-w-[250px]   ' width={500} height={500} src={"/image/award1.webp"} alt='' />
                </div>
                <div className='grid justify-center'>
                    <Image className='max-w-[250px] ' width={500} height={500} src={"/image/award2.webp"} alt='' />
                </div>
                <div className='grid justify-center'>
                    <Image className='max-w-[250px] ' width={500} height={500} src={"/image/award3.webp"} alt='' />
                </div>
            </div>

        </div>
    );
};

export default Award;