import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    UseTitle('Services')
    const services = useLoaderData()
    return (
        <div>
            <h2 className='text-3xl font-bold my-8 text-center'>All Services</h2>
            <div className="px-4 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                    ></ServiceCard>)
                }


                </div>
            </div>
        </div>
    );
};

export default Services;