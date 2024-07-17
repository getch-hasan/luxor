import Image from 'next/image';
import React from 'react';

const EventBanner = () => {

  return (
    <div>
      <Image height={2000} width={2000} src={'/image/eventBanner.webp'} className='w-full'  alt=''></Image>
    </div>



  );
};

export default EventBanner;