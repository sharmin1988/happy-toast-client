import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {

    const { image, _id, title, price, description } = service

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img
                        src={image}
                        className="object-cover w-full h-64"
                        alt=""
                    />
                </PhotoView>
            </PhotoProvider>
            <div className="p-5 border border-t-0">
                <h1 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                    {title}
                </h1>
                <p className="mb-2 text-gray-700">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>
                <p className="inline-flex items-center font-semibold ">
                    Price: ${price}
                </p>
                <br />
                <Link to={`/services/${_id}`}>
                    <button className="w-full tracking-wider px-6 font-semibold py-2.5 mt-6 text-sm text-white  bg-orange-600 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;