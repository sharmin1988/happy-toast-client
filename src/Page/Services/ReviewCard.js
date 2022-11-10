import { FaStar} from "react-icons/fa";

const ReviewCard = ({review}) => {
    const {UserMessage, customer, email,rating, photoURL, time, status} = review


    return (
        <div className=" flex flex-col w-full max-w-lg p-4 mx-auto divide-y rounded-md divide-gray-700 ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={review.photoURL? photoURL:''} alt="" className="object-cover w-12 h-12 rounded-full " />
                    </div>
                    <div>
                        <h4 className="font-bold">{customer ? customer: 'N/A'}</h4>
                        <h4 className="text-sm text-gray-400 font-semibold">{email}</h4>
                        <h4 className="text-xs text-gray-400 font-semibold">{time}</h4>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                   
                    <span className="text-xl font-bold">{rating}</span> <FaStar />
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>{status?status:UserMessage}</p>

            </div>
        </div>
    );
};

export default ReviewCard;