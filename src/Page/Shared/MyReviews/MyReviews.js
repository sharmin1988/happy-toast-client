import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [user?.email])


    return (
        <div className="container  px-6 py-12 mx-auto">
            <div className="text-center">
                <h1 className='text-4xl font-bold'>Hello!!! {user.displayName ? user.displayName : "N/A"}</h1>
                <h2>You can edit or remove your REVIEWS!!!</h2>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4'>
                {
                    reviews.map(review => <MyReviewCard
                        key={review._id}
                        review={review}
                    ></MyReviewCard>)
                }
            </div>


        </div>
    );
};

export default MyReviews;