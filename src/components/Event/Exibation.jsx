import Image from 'next/image';
import React from 'react';

const Exhibation = () => {
    return (
        <div className='md:px-72 py-10'>
            <h1 className='text-5xl text-center font-extrabold'>PAPER WORLD EXHIBITION</h1>
            <h3 className='text-3xl px-10 text-center py-10 font-semibold'>Paperworld, the biggest trade fair for the Stationery, Back to School Supplies, and Writing Instruments Industry.</h3>
            <p className=' text-3xl text-justify font-thin'>It is a one-stop solution for all stationery sourcing needs and a B2B trade platform to discover the latest market trends and developments in stationery, office supplies, writing instruments, etc. Amidst the vibrant energy of Paper world, Luxor made an indelible mark, showcasing innovation and excellence.</p>
            <div className='py-20'>
                
                <div className='grid md:grid-cols-3 grid-cols-1 sm:gap-3 md:gap-5 gap-2 justify-between'>
                    <div className='grid justify-center'>
                        <Image className='max-w-full h-full   ' width={500} height={500} src={"/image/ex1.webp"}  alt=''/>
                    </div>
                    <div className='grid justify-center'>
                        <Image className='max-w-full h-full ' width={500} height={500} src={"/image/ex2.webp"}  alt=''/>
                    </div>
                    <div className='grid justify-center'>
                        <Image className='max-w-full h-full ' width={500} height={500} src={"/image/ex3.webp"}  alt=''/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Exhibation;