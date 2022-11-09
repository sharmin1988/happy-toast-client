import React from 'react';

const MyReviewCard = ({ review, handelDelete, handelUpdate}) => {
    // console.log(review)
    const { service, UserMessage, _id, serviceImg, status  } = review

  
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden border border-orange-300 rounded-lg shadow-md ">
            <div>
                <img src={serviceImg} alt="" className="object-cover w-full mb-4 h-16 sm:h-24 dark:bg-gray-500" />
                <h2 className="mb-1 text-sm font-bold">{service}</h2>
                <p className="text-lg text-gray-600">{status?status : UserMessage}</p>
            </div>
            <div className="flex justify-end">
                <div className="flex space-x-2 text-sm">
                    <button onClick={() => handelUpdate(_id)} type="button" className="p-2 text-center text-white  bg-orange-600 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
                        Edit
                    </button>
                    <button onClick={() => handelDelete(_id)} type="button" className="flex items-center p-1 space-x-1.5  text-white  bg-orange-600 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
                        DELETE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;