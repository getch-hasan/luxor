"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Products from '../page';
import Image from 'next/image';
import Link from 'next/link';

const Stationary = () => {
    const searchParams = useSearchParams();
    const subcategory = searchParams.get('subcategory');
    const data = [
        {
            id: 1,
            name: "KONARK",
            description: "Konark is a premium ball pen that boasts a finely executed engraved design, a designer body with a flawless twist mechanism, and a charismatic refill. This exquisite pen is elegantly packaged, making it an ideal gift choice.",
            category: "pen",
            color: "No available colors",
            image: {
                img1: '/image/konrak.png',
                img2: '/image/Finely_Engraved_Design.webp',
                img4: '/image/know.webp'
            }
        },
        {
            id: 2,
            name: "GRAVITAS",
            description: "Gravitas is a shiny matte black roller pen, distinguished by its finished gunmetal cap and trim. This roller pen is equipped with a non-dry German refill and is elegantly presented in an attractive gift package.",
            category: "pen",
            color: "No available colors",
            image: {
                img1: '/image/1.png',
                img2: '/image/Finely_Engraved_Design.webp',
                img4: '/image/know.webp'
            },
            note: 'Renowned for their exceptional durability and long-lasting quality, metal luxury pens are crafted from premium materials, ensuring their robustness and longevity.'
        },
        {
            id: 3,
            name: "ROVER",
            description: "The Rover ball pen is a luminous and gleaming writing instrument with a chrome clip and trims. Its twist mechanism operates with a blue charismatic refill, and it is beautifully presented in an attractive gift package.",
            category: "pen",
            color: "No available colors",
            image: {
                img1: '/image/1 (1).png',
                img2: '/image/Finely_Engraved_Design.webp',
                img3: '/image/Perfect_For_Gifting.webp',
                img4: '/image/know.webp'
            },
            note: 'Renowned for their exceptional durability and long-lasting quality, metal luxury pens are crafted from premium materials, ensuring their robustness and longevity.'
        },
        {
            id: 4,
            name: "ROVER",
            description: "The Rover ball pen is a luminous and gleaming writing instrument with a chrome clip and trims. Its twist mechanism operates with a blue charismatic refill, and it is beautifully presented in an attractive gift package.",
            category: "highlighter",
            color: "No available colors",
            image: {
                img1: '/image/1 (1).png',
                img2: '/image/Finely_Engraved_Design.webp',
                img3: '/image/Perfect_For_Gifting.webp',
                img4: '/image/know.webp'
            },
            note: 'Renowned for their exceptional durability and long-lasting quality, metal luxury pens are crafted from premium materials, ensuring their robustness and longevity.'
        },
        // Add more products with different categories
    ];

    const filteredData = subcategory
        ? data.filter(item => item.category === subcategory)
        : data;

    return (
        <Products>
            <div className='grid sm:grid-cols-2 sx:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 mt-5'>
                {filteredData.map((item) => (
                    <Link href={`/products/${item.id}?search=${JSON.stringify(item)}`} key={item.id}>
                        <div key={item.id} className='overflow-hidden rounded-lg shadow-xl'>
                            <div className='p-10 relative transform transition-transform duration-700 hover:scale-110' style={{ willChange: 'transform' }}>
                                <div className='grid justify-center'>
                                    <Image
                                        height={1000}
                                        width={1000}
                                        src={item.image.img1}
                                        className='h-[500px] w-24'
                                        alt={item.name}
                                    />
                                </div>
                                <h1 className='text-2xl font-bold mb-2 absolute top-8 left-8'>{item.name}</h1>
                                <p className='mb-4'>
                                    {item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}
                                </p>
                            </div>
                        </div></Link>
                ))}
            </div>
        </Products>
    );
};

export default Stationary;
