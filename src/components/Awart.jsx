import Image from 'next/image';
import React from 'react';

const Award = () => {
    return (
        <div>
            <div className='grid justify-center'>
                <h1 className='text-center text-xl md:text-5xl font-bold py-10' >Award</h1>
            </div>
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

        </div>
    );
};

export default Award;