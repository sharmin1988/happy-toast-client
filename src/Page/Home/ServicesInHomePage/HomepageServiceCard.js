import React from 'react';
import { Link } from 'react-router-dom';

const HomepageServiceCard = ({ service }) => {
    const { title, description, image, price } = service
    return (
        <div>
            <div className="flex w-full">
                <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={image} alt="blog" />
                    <div className="px-6 py-8">
                        <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                            <span className="">{title}</span>
                        </h4>
                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax"
                        >{description.length > 100 ? description.slice(0, 100) + '...' : description}
                        </p>
                        <p className="mt-4 text-base font-normal text-gray-500 leading-relax"
                        >Course Fee: ${price}
                        </p>
                        <Link to='/services'><button className="w-full tracking-wider px-4 font-semibold py-2.5 mt-6 text-sm text-white transition-colors duration-300 transform bg-orange-600 rounded-md  hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageServiceCard;