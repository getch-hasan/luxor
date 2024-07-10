import Image from 'next/image';
import React from 'react';

const MediaBannar = () => {
  const data = [
    { id: 1, img: '/image/1.webp', title: "Redefining the Face of the Future for Women", desription: "The motto of our lives needs to be to keep trying and to embrace change. We need to have the attitude of never giving up, and if we do that, everything can be achieved." },
    { id: 2, img: '/image/1.webp', title: "Redefining the Face of the Future for Women", desription: "The motto of our lives needs to be to keep trying and to embrace change. We need to have the attitude of never giving up, and if we do that, everything can be achieved." },
    { id: 3, img: '/image/1.webp', title: "Redefining the Face of the Future for Women", desription: "The motto of our lives needs to be to keep trying and to embrace change. We need to have the attitude of never giving up, and if we do that, everything can be achieved." },
    { id: 3, img: '/image/1.webp', title: "Redefining the Face of the Future for Women", desription: "The motto of our lives needs to be to keep trying and to embrace change. We need to have the attitude of never giving up, and if we do that, everything can be achieved." },
  ]
  return (
    <div>
      <div>
        <Image height={2000} width={2000} src={'/image/media-banner.webp'} className='w-full' ></Image>
      </div>
      <div className='grid p-44 md:grid-cols-2 justify-center md:gap-20'>
        {
          data.map(item => <>
            <div className='grid justify-center w-md'>
              <Image height={500} width={500} src={item.img} className='w-full' ></Image>
              <h1 className='text-lg py-5 font-bold'>{item.title}</h1>
              <p className='text-justify pe-20'>{item.desription}</p>
            </div>
          </>)
        }
      </div>
    </div>


  );
};

export default MediaBannar;