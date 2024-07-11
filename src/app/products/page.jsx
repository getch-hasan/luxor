'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Products = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className='flex flex-row  justify-between '>
      <div className='px-10 '>
        <h1 className='text-4xl font-bold py-10'>Categories</h1>
        <div className='grid justify-start'>
          <Link href="/products/it">
            <div className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('it') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
              IT
            </div>
          </Link>
        </div>
        <div className='grid justify-start'>
          <Link href="/products/confectionary">
            <div className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('confectionary') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
              Stationary
            </div>
          </Link>
        </div>
        <div className='grid justify-start'>
          <Link href="/products/garments">
            <div className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('garments') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
              Garments
            </div>
          </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>

  );
};

export default Products;