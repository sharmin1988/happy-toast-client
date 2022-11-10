import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../hooks/UseTitle';


const ReviewForm = () => {

    UseTitle('Review form')
    const service = useLoaderData()

    const { image, title, _id, } = service
    const { user } = useContext(AuthContext)
    const { displayName, email, photoURL } = user

    const handelSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const UserMessage = form.UserMessage.value
        const rating = form.rating.value

        const review = {
            serviceId: _id,
            service: title,
            serviceImg: image,
            customer: user?.displayName,
            email,
            photoURL,
            UserMessage,
            rating,
        }


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your review successfully added. Thank You!!!')
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='my-10 lg:p-6 w-3/4 mx-auto bg-orange-200 shadow-sm rounded-xl '>
            <div className="flex flex-col p-8  rounded-xl lg:p-4 bg-gray-100">
                <form onSubmit={handelSubmit} className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center pb-2 ">
                        <span className="text-center">Hello {user.displayName ? displayName : 'N/A'}</span>
                    </div>
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-3 space-y-3">
                        <span className="text-center text-sm">How was your experience?</span>
                    </div>

                    {/* review input fields */}
                    <div className="flex flex-col w-full">
                        <input type="text" name='UserMessage' rows="3" placeholder="Type review..."
                            className="p-4 focus:outline-none rounded-md resize-none " required></input>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="rating" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" Rating number" />

                            </div>

                            <div className="relative z-0">
                                <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" email" defaultValue={user.email} readOnly />
                            </div>
                        </div>
                        <div className='w-1/2 mx-auto'>
                            <button className=" tracking-wider px-6 font-semibold py-2.5 mt-6 text-sm text-white  bg-orange-700 rounded-md lg:w-full hover:bg-purple-500 focus:outline-none focus:bg-purple-500">
                                Submit Your review</button>
                        </div>
                        {/* <p className='mt-4'> Don't have an account? <Link to={`/services/${_id}`}><span className='cursor-pointer text-sm text-blue-600'> Sign up</span></Link></p> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;