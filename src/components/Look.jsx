import Image from 'next/image';
import React from 'react';

const Look = () => {
    return (
        <div>
            <div className="grid justify-center">
                <h1 className="text-center text-xl md:text-5xl font-bold py-10">Looks</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-40 justify-center">
                <div className="relative group">
                    <div className="relative w-full h-64">
                        <Image
                            className="w-full h-full  rounded-md object-cover"
                            src="/image/bg.webp"
                            layout="fill"
                            alt="Background Image"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <h1 className=" text-2xl font-bold md:text-3xl lg:text-5xl text-center">How to choose the best Highlighters</h1>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="relative w-full h-64">
                        <Image
                            className="w-full h-full rounded-md object-cover"
                            src="/image/bg.webp"
                            layout="fill"
                            alt="Background Image"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <h1 className=" text-2xl font-bold md:text-3xl lg:text-5xl text-center">How to choose the best Highlighters</h1>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="relative w-full h-64">
                        <Image
                            className="w-full h-full rounded-md object-cover"
                            src="/image/bg.webp"
                            layout="fill"
                            alt="Background Image"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <h1 className=" text-2xl font-bold md:text-3xl lg:text-5xl text-center">How to choose the best Highlighters</h1>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Look;
