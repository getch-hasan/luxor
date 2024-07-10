import Image from 'next/image';
import React from 'react';

const QualityBanner = () => {
    return (
        <div>
            <Image height={2000} width={2000} src={'/image/qualityBanner.webp'} className='w-full' ></Image>
            <Image height={2000} width={2000} src={'/image/assurance.webp'} className='w-full px-44' ></Image>
            <div className='py-10 px-20 md:px-64'>
                <p className='text-start text-xl '>Luxor is a global leader and trendsetter in the writing and coloring instrument space. An obsessive focus on quality, design and suitability ensures that every consumer has maximum writing comfort. Our wide range of products caters to a variety of needs from students to working executives to artists. In the last fifty-four years, this owner-managed-family-run business has grown manifold, responsibility and the resultant experience and expertise has made us more aware towards our share of the, for our customers and partners. </p>
                <p className='text-start text-xl py-10'>Quality that you can rely on - that forms the foundation of our manufacturing processes and marketing strategies. It is this relentless pursuit of excellence that has earned us one of the world's most exacting certifications.</p>
                <p className='text-start text-xl'> Dependability, active partnership with our customers, unparalleled and impressive product quality and timely delivery are principles on which our ideas and actions are based.</p>
            </div>
        </div>
    );
};

export default QualityBanner;