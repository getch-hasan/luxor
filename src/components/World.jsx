import Image from 'next/image';
import React from 'react';

const World = () => {
    return (
        <div className="bg-red-500 relative pt-5">
            <h1 className="text-center text-5xl font-bold">World Of Zan</h1>
            <div className="grid grid-cols-4  gap-6">
                <div className="relative overflow-hidden top-5 hover:top-10">
                    <img
                        height={500}
                        width={500}
                        className="w-full transform transition-transform duration-500 hover:translate-y-1/5"
                        src="/image/writing.webp"
                        alt="write"
                    />
                </div>
                <div className="relative overflow-hidden top-5 hover:top-10">
                    <img
                        height={500}
                        width={500}
                        className="w-full transform transition-transform duration-500 hover:translate-y-1/5"
                        src="/image/Highlighter.webp"
                        alt="highlight"
                    />
                </div>
                <div className="relative overflow-hidden top-5 hover:top-10">
                    <img
                        height={500}
                        width={500}
                        className="w-full transform transition-transform duration-500 hover:translate-y-1/5"
                        src="/image/art.webp"
                        alt="art"
                    />
                </div>
                <div className="relative overflow-hidden top-5 hover:top-10">
                    <img
                        height={500}
                        width={500}
                        className="w-full transform transition-transform duration-500 hover:translate-y-1/5"
                        src="/image/marker.webp"
                        alt="Marker"
                    />
                </div>
            </div>
        </div>
    );
};

export default World;