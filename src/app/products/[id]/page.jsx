"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const ProductDetail = () => {
  const searchQuery = useSearchParams()
  const data = JSON.parse(searchQuery.get('search'))
  return (

    <div className='flex  py-32 flex-row bg-white'>
      <div className='grid justify-center px-44'>
        <img className='h-[600px] w-32 ' height={1000} width={1000} src={data.image.img1} alt='' />
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{data.name}</h1>
        <p className='py-2 text-md'>{data.description}</p>

        <h2 className='text-lg font-semibold py-5'>{data.color}</h2>
        <div className='flex fldex-row gap-10  justify-start'>
          <img className='w-[250px] h-[250px]' height={500} width={500} src={data.image.img2} alt=''></img>
          <img className='w-[250px] h-[250px]' height={500} width={500} src={data.image.img2} alt=''></img>

        </div>
        <div className='flex flex-row items-center my-5'>
          <img className='w-[250px] h-[200px]' height={500} width={500} src={data.image.img4} alt=''></img>
          <h1>{data.note}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;