import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomepageServiceCard from './HomepageServiceCard';

const ServicesInHomePage = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    })

    return (
        <section className="my-4 container px-6 py-10 mx-auto">
            <h2 className='text-3xl text-center font-bold mb-6'>My services</h2>
            <div className="flex flex-wrap mx-auto md:flex-nowrap w-3/4">
                {
                    services.map(service => <HomepageServiceCard
                        key={service._id}
                        service={service}
                    ></HomepageServiceCard>)
                }
                <div className='ml-6 flex items-center'>
                    <Link to = '/services' className='btn btn-link text-lg font-semibold'>
                        <button >See All</button>
                        </Link>
                </div>

            </div>
        </section>
    );
};

export default ServicesInHomePage;