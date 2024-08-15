import Image from 'next/image';
import React from 'react';
import { IoSearch } from "react-icons/io5";
const Nabvar = () => {
    return (

        <nav
            className="flex fixed w-full z-50 mx-auto pb-4 bg-orange-400 items-center justify-between flex-wrap py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <img height={400} width={400} className='h-10 w-32' src={"/image/logo.png"} alt='' />
                </div>
            </div>

            <div className="menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">


                <div className="mx-auto text-gray-600  items-center gap-5 flex ">
                    <div>
                        <input
                            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                    </div>
                    <div>
                        <button type="submit" className=" bg-white rounded-lg text-xl p-2">
                            <IoSearch />
                        </button>
                    </div>

                </div>


            </div>

        </nav>
    )
};

export default Nabvar;