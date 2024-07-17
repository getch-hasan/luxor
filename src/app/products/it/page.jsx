import React from 'react';
import Products from '../page';
import Projects from './Project';

const Its = () => {
    const data = [
        { _id: 1, name: "Mobile App", image: "/image/image.png" },
        { _id: 2, name: "Ecommerce Solutions", image: "/image/ecommerce.jpeg" },
        { _id: 3, name: "Inforamtive Website", image: "/image/ecommerce.jpeg" },
        { _id: 4, name: "IOS app development", image: "/image/image.png" },
        { _id: 5, name: "Ecommerce Solutions", image: "/image/ecommerce.jpeg" },
        { _id: 6, name: "Daynamic Website", image: "/image/image.png" }
    ];
    return (
        <Products>

            <div className='grid w-full justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 justify-start gap-10 m-12 '>
                    {
                        data.map(data => <Projects key={data._id} data={data}></Projects>)
                    }
                </div>
            </div>

        </Products>
    );
};

export default Its;