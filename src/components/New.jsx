import Image from 'next/image';
import React from 'react';

const New = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center text-5xl font-bold '> New Launches</h1>
            <div className="grid md:grid-cols-5 grid-cols-2 sm:grid-cols-3 sm:gap-7 gap-10 my-12 md:gap-20 justify-center items-center">
                <div>
                    <div className="relative bg-gray-100 rounded-lg hover:bg-red-500 transition-all duration-1000 transform hover:-translate-y-10">
                        <div className="p-4  ">
                            <div className='border-b border-5 border-black  '>
                                <img
                                    height={1000}
                                    width={1000}
                                    src="/image/dune.png"
                                    className=" transform transition-all duration-1000 hover:translate-x-1/3"
                                    alt="Pen"
                                />
                            </div>

                        </div>
                    </div>
                    <h1 className='text-center font-semibold py-2'>
                        Dunes Set</h1>
                </div>
                <div>
                    <div className="relative bg-gray-100 rounded-lg hover:bg-red-500 transition-all duration-1000 transform hover:-translate-y-10">
                        <div className="p-4  ">
                            <div className='border-b border-5 border-black  '>
                                <img
                                    height={1000}
                                    width={1000}
                                    src="/image/white.png"
                                    className=" transform transition-all duration-1000 hover:translate-x-1/3"
                                    alt="Pen"
                                />
                            </div>

                        </div>
                    </div>
                    <h1 className='text-center font-semibold py-2'>
                        White Board Marker 450</h1>
                </div>
                <div>
                    <div className="relative bg-gray-100 rounded-lg hover:bg-red-500 transition-all duration-1000 transform hover:-translate-y-10">
                        <div className="p-4  ">
                            <div className='border-b border-5 border-black  '>
                                <img
                                    height={1000}
                                    width={1000}
                                    src="/image/fine.jpg"
                                    className=" transform transition-all duration-1000 hover:translate-x-1/3"
                                    alt="Pen"
                                />
                            </div>

                        </div>
                    </div>
                    <h1 className='text-center font-semibold py-2'>
                        Fine Point Permanent Markers</h1>
                </div>
                <div>
                    <div className="relative bg-gray-100 rounded-lg hover:bg-red-500 transition-all duration-1000 transform hover:-translate-y-10">
                        <div className="p-4  ">
                            <div className='border-b border-5 border-black  '>
                                <img
                                    height={1000}
                                    width={1000}
                                    src="/image/vistsa.png"
                                    className=" transform transition-all duration-1000 hover:translate-x-1/3"
                                    alt="Pen"
                                />
                            </div>

                        </div>
                    </div>
                    <h1 className='text-center font-semibold py-2'>
                        Vista</h1>
                </div>
                <div>
                    <div className="relative bg-gray-100 rounded-lg hover:bg-red-500 transition-all duration-1000 transform hover:-translate-y-10">
                        <div className="p-4  ">
                            <div className='border-b border-5 border-black  '>
                                <img
                                    height={1000}
                                    width={1000}
                                    src="/image/pen.png"
                                    className=" transform transition-all duration-1000 hover:translate-x-1/3"
                                    alt="Pen"
                                />
                            </div>

                        </div>
                    </div>
                    <h1 className='text-center font-semibold py-2'>
                        Zan Felt Tip Colouring</h1>
                </div>

            </div>
        </div>
    );
};

export default New;