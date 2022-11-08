import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewForm = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user?.uid ?
                    <>
                        <div className="flex flex-col w-3/4 mx-auto max-w-md p-8 shadow-sm rounded-xl lg:p-4 bg-gray-100">
                            <div className="flex flex-col items-center w-full">
                                <div className="flex flex-col items-center pb-2 ">
                                    <span className="text-center">Hello {user?.displayName}</span>
                                </div>
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-3 space-y-3">
                                    <span className="text-center">How was your experience?</span>
                                </div>
                                <div className="flex flex-col w-full">
                                    <textarea rows="3" placeholder="Type review..."
                                        className="p-4 rounded-md resize-none "></textarea>
                                    <Link to='/'>
                                        <button className="w-full tracking-wider px-6 font-semibold py-2.5 mt-6 text-sm text-white  bg-orange-600 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Submit Your review</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </>
                    :
                    <div className='text-xl font-bold text-center'>
                        <p> Please <Link to='/login' className='text-purple-600 hover:text-orange-600'>Login</Link> to add your review.</p>
                    </div>
            }
        </div>
    );
};

export default ReviewForm;