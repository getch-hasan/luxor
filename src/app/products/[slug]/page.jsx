import React from 'react';
import { products } from '@/data';

export async function generateStaticParams() {
  const kisuekta = ['1', '2', '3']; // Replace this with actual dynamic IDs or slugs.

  return kisuekta.map((slug) => ({
    slug: slug.toString(), // Return an object with the slug property.
  }));
}

export default function ProductDetail({ params }) {
  const data = products.find((itm) => itm.id == params.slug); // Match the product by ID.

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex py-32 flex-row bg-white'>
      <div className='grid justify-center px-44'>
        <img
          className='h-[600px] w-32'
          height={1000}
          width={1000}
          src={data.image.img1}
          alt=''
        />
      </div>
      <div>
        <h1 className='text-3xl font-bold'>{data.name}</h1>
        <p className='py-2 text-md'>{data.description}</p>
        <h2 className='text-lg font-semibold py-5'>{data.color}</h2>
        <div className='flex flex-row gap-10 justify-start'>
          <img
            className='w-[250px] h-[250px]'
            height={500}
            width={500}
            src={data.image.img2}
            alt=''
          />
          <img
            className='w-[250px] h-[250px]'
            height={500}
            width={500}
            src={data.image.img3} // Changed to img3 for variety
            alt=''
          />
        </div>
        <div className='flex flex-row items-center my-5'>
          <img
            className='w-[250px] h-[200px]'
            height={500}
            width={500}
            src={data.image.img4}
            alt=''
          />
          <h1>{data.note}</h1>
        </div>
      </div>
    </div>
  );
}
