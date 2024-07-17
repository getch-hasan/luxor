import Image from 'next/image';
import React from 'react';

const ContactBanner = () => {
    return (
        <div>

            <Image height={2000} width={2000} src={'/image/contactBanner.webp'} className='w-full' alt='' ></Image>
        </div>

    );
};

export default ContactBanner;