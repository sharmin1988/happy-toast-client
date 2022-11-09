import React from 'react';

const MyReviewCard = ({ review }) => {

    const { service, message } = review

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden border border-orange-300 rounded-lg shadow-md ">
            <div>
                {/* <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-32 sm:h-96 dark:bg-gray-500" /> */}
                <h2 className="mb-1 text-xl font-bold">{service}</h2>
                <p className="text-sm text-gray-600">My Review: {message}</p>
            </div>
            <div className="flex justify-end">
                <div className="flex space-x-2 text-sm">
                    <button aria-label="Share this post" type="button" className="p-2 text-center text-white  bg-orange-600 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
                        Edit
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5  text-white  bg-orange-600 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;