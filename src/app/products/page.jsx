'use client';
import React from 'react';
import Categories from '@/components/products/Categories';

const Products = ({ children }) => {

  return (
    <div className='flex flex-row  justify-between '>
     <Categories></Categories>
      <div>
        {children}
      </div>
    </div>

  );
};

export default Products;