"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Products from '../page'; // Ensure this import path is correct
import Link from 'next/link';
import { products } from '@/data';

const Stationary = () => {
    const searchParams = useSearchParams();
    const subcategory = searchParams.get('subcategory');

    const data =products

    const filteredData = subcategory
        ? data.filter(item => item.category === subcategory)
        : data;

    return (
        <Products>
            <div className="grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 mt-5">
                {filteredData.map((item) => (
                    <Link href={`/products/${item.id}?search=${encodeURIComponent(JSON.stringify(item))}`} key={item.id}>
                        <div className="overflow-hidden rounded-lg shadow-xl">
                            <div className="p-5 relative transform transition-transform duration-700 hover:scale-105" style={{ willChange: 'transform' }}>
                                <div className="flex justify-center">
                                    <img
                                        src={item.image.img1}
                                        className="h-64 w-full object-contain"
                                        alt={item.name}
                                    />
                                </div>
                                <h1 className="text-xl font-bold mt-4">{item.name}</h1>
                                <p className="mt-2">
                                    {item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Products>
    );
};

export default Stationary;
