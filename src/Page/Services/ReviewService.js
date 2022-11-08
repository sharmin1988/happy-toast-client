import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewService = () => {
    return (
        <div className=" flex flex-col w-full max-w-lg p-4 mx-auto divide-y rounded-md divide-gray-700 ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                    </div>
                    <div>
                        <h4 className="font-bold">Leroy Jenkins</h4>
                        <h4 className="text-sm text-gray-400 font-semibold">Leroy Jenkins</h4>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <FaStar />
                    <span className="text-xl font-bold">4.5</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>

            </div>
        </div>
    );
};

export default ReviewService;