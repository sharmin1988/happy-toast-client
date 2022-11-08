import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewService from './ReviewService';


const ServiceDetails = () => {
    const service = useLoaderData()
    const { title, image, _id, description, price } = service
    return (
        <div className='container px-6 py-12 mx-auto lg:flex'>
            <div className="max-w-xl lg:w-1/2 overflow-hidden bg-white rounded shadow-xl ">
                <div className="p-4">
                    <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                </div>
                <img className="object-cover w-full h-80 mt-2" src={image} alt="/" />
                <div className="flex items-center justify-between px-4 py-2 bg-orange-700">
                    <h1 className="text-lg font-bold text-white">Price: ${price}</h1>
                </div>
            </div>

            <div className='max-w-xl lg:w-1/2'>
                <div >
                    <ReviewService></ReviewService>
                </div>
                <ReviewForm></ReviewForm>
            </div>
        </div>
    );
};

export default ServiceDetails;