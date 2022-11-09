import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {
    const service = useLoaderData()
    const { title, image, _id, description, price } = service
    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])


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

                <div>
                    {
                        reviews.map(review => <ReviewCard
                            key={review._id}
                            review= {review}
                        ></ReviewCard>)
                    }
                </div>
                <div>
                    {
                        user?.uid ?
                            <>
                                <ReviewForm service={service}></ReviewForm>
                            </>
                            :
                            <div className='text-xl font-bold text-center'>
                                <p> Please <Link to='/login' className='text-purple-600 hover:text-orange-600'>Login</Link> to add your review.</p>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;