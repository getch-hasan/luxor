import Image from 'next/image';
import React from 'react';

const Projects = ({ data }) => {
    const { name, image } = data
    return (
        <div>
            <div className=''>


                <div class=" bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image className='max-h-[260px] rounded-lg' height={500} width={500} src={image} alt=''></Image>
                    </a>
                    <div class="p-5">
                        <h1 className='text-center text-lg font-bold'>{name}</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;