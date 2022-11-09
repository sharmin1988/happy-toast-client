import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Happy.png'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="px-4 py-3 mx-auto bg-black sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <Link to='/' className="inline-flex items-center mr-8">
                        <img className='h-10' src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-orange-500 ">
                            Happy Toast
                        </span>
                    </Link>
                    <ul className=" items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link to='/services' className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-orange-500">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to='/faq' className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-orange-500">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to='/blog' className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-orange-500">
                                Blog
                            </Link>
                        </li>

                    </ul>
                </div>
                <ul className="items-center hidden space-x-8 lg:flex">

                    {
                        user?.uid ?
                            <>
                                <li>
                                    <Link to='/myReviews' className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-orange-500">
                                        My Reviews
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/addService' className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-orange-500">
                                        Add Service
                                    </Link>
                                </li>

                                <li>
                                    <button>
                                        <Link onClick={handleLogOut} to='/' className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-purple-600 focus:shadow-outline focus:outline-none">
                                            Logout
                                        </Link>
                                    </button>
                                </li>
                            </>

                            : <>
                                <li>
                                    <Link to='/login' className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-orange-500">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/signup' className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                    }


                </ul>

                {/* ------- For mobile display--------- */}
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link to='/' className="inline-flex items-center mr-8">
                                            <img className='h-10' src={logo} alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 ">
                                                Happy Toast
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link to='/services' className="font-medium tracking-wide text-orange-700 transition-colors duration-200 hover:text-orange-500">
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/faq' className="font-medium tracking-wide text-orange-700 transition-colors duration-200 hover:text-orange-500">
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/blog' className="font-medium tracking-wide text-orange-700 transition-colors duration-200 hover:text-orange-500">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/about' className="font-medium tracking-wide text-orange-700 transition-colors duration-200 hover:text-orange-500">
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/login' className="font-medium tracking-wide text-orange-700 transition-colors duration-200 hover:text-orange-500">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/signup' className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-purple-600 focus:shadow-outline focus:outline-none">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;