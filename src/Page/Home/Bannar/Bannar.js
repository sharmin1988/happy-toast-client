import React from 'react';
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <header className="bg-white ">
            <div className="container px-6 py-12 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">
                            <p className="mb-2 text-orange-700 font-semibold">WellCome to "Happy Toast"!!!</p>
                            <h1 className="text-2xl font-bold text-gray-800 uppercase lg:text-5xl">Best Place To Upgrade Your Taste Bud !!</h1>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">Here on Happy Toast, I share authentic foods. You Can enjoy the super healthy tasty foods, along with family ,favorites from around .My "moto" is <br /> "foods are prepared with attention, packaged with care and <br /> delivered with love" </p>

                            <Link to ='/services'><button className="w-full tracking-wider px-6 font-semibold py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-md lg:w-auto hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Let's Get started...</button></Link>
                        </div>
                    </div>

                    <div className="flex items-center lg:justify-end justify-center  w-full mt-6 lg:mt-0 lg:w-1/2 ">
                        <img className="w-full h-full lg:max-w-lg rounded lg:pl-6" src="https://img.freepik.com/free-vector/cute-bread-chef-waving-hand-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-flat_138676-4562.jpg?size=338&ext=jpg&ga=GA1.2.1239272833.1664376337&semt=sph" alt="" />
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Bannar;