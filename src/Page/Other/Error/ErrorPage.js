import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center  sm:p-6 bg-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto  space-y-8 text-center sm:max-w-lg">
                <img src="https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1900.jpg?w=740&t=st=1667844111~exp=1667844711~hmac=262851b517f9b6261b762dc1ba289b0d0f789c5dad54b18bface96903f9a9b64" alt="" />
                <p className="text-2xl font-bold">Sorry !!! Page Not Found....!!!</p>
                <Link to='/'>
                    <button className="w-full tracking-wider px-6 font-semibold py-2.5 text-sm text-white  bg-orange-600 rounded-md  hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Back to the homepage</button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;