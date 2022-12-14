import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../hooks/UseTitle';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {

    UseTitle('Service-details')
    const service = useLoaderData()
    const { title, image, _id, description, price, } = service
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://happy-toast-server.vercel.app/myReviews?_id=${service?._id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [service?._id])

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-800"></div>
    }

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
                        reviews?.length === 0 ?
                            <>
                                <div className="text-xl text-center my-3 font-semibold text-red-600">No reviews are added!! ...yet!!
                                </div>
                            </>
                            : reviews && reviews
                                .sort((a, b) => a.time > b.time ? -1 : 1)
                                .map(review => <ReviewCard
                                    key={review._id}
                                    review={review}
                                ></ReviewCard>)
                    }
                </div>
                <div>
                    {
                        user?.uid ?
                            <>
                                <div className='w-1/2 mx-auto '>
                                    <Link to={`/addReview/${_id}`}>
                                        <button className="tracking-wider w-full px-6 font-semibold py-2.5 mt-6 text-sm text-white  bg-orange-600 rounded-md  hover:bg-purple-500 focus:outline-none focus:bg-purple-500">ADD review</button>
                                    </Link>
                                </div>
                            </>
                            :
                            <div className='text-xl font-bold text-center'>
                                <p> Please <Link to={`/addReview/${_id}`} className='text-purple-600 hover:text-orange-600'>Login</Link> to add your review.</p>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;