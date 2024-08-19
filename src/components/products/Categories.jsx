"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Categories = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [openCategory, setOpenCategory] = useState(null);

    const handleToggle = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const handleSubcategory = (subcategory) => {
        router.push(`/products/stationary?subcategory=${subcategory.toLowerCase()}`);
    };

    return (
        <div className='px-10'>
            <h1 className='text-4xl font-bold py-10'>Categories</h1>
            <div className='grid justify-start'>
                <Link href="/products/it">
                    <div className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('it') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
                        IT
                    </div>
                </Link>
            </div>
            <div className='grid justify-start'>
                <Link href={'/products/stationary'} onClick={() => handleToggle('stationary')} className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('stationary') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
                    Stationary
                </Link>
                {openCategory === 'stationary' && (
                    <div className='border-x mb-5 border-b border-slate-300'>
                        <ul className='px-5 pb-2 '>
                            <li><button onClick={() => handleSubcategory('pen')} className={`mb-2 font-semibold ${pathname.includes('pen') ? 'border-b-4 border-blue-800' : ''}`}>Pen</button></li>
                            <li><button onClick={() => handleSubcategory('highlighter')} className={`mb-2 font-semibold ${pathname.includes('highlighter') ? 'border-b-4 border-blue-800' : ''}`}>Highlighter</button></li>
                        </ul>
                    </div>
                )}
            </div>
            <div className='grid justify-start'>
                <Link href="/products/garments">
                    <div className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('garments') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
                        Garments
                    </div>
                </Link>
            </div>
            <div className='grid justify-start'>
                <Link href="/products/medical">
                    <div className={`p-5 mb-2 rounded-md w-64 font-semibold ${pathname.includes('medical') ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>
                       Medical
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Categories;
