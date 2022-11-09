import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../../hooks/UseTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    UseTitle('My Reviews')
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [user?.email])


    const handelDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {

            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success('Successfully DELETED!!')
                        const remaining = reviews.filter(ord => ord._id !== id)
                        setReviews(remaining)
                    }

                })

        }
    }


    return (
        <div className="container  px-6 py-12 mx-auto">
            <div className="text-center">
                <h1 className='text-4xl font-bold'>Hello!!! {user.displayName ? user.displayName : "N/A"}</h1>
                <h2>You can edit or remove your REVIEWS!!!</h2>

            </div>
            {
                reviews.length === 0 ?
                <h1 className='text-2xl text-red-600 font-bold'>No reviews were added!!!!</h1>

                :
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-4'>
                        {
                            reviews.map(review => <MyReviewCard
                                key={review._id}
                                review={review}
                                handelDelete={handelDelete}
                            ></MyReviewCard>)
                        }
                    </div>
            }



        </div>
    );
};

export default MyReviews;