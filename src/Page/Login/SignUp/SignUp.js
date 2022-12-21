import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtAuthToken } from '../../../api/JwtToken';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../../hooks/UseTitle';

const SignUp = () => {
    UseTitle('SignUp')
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handelSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                handelUpdateUserProfile(name, photoURL)
                jwtAuthToken(user)
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handelUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => { })
    }

    return (

        <div className="min-h-screen my-6 lg:flex ">
            <div className="hidden lg:block w-1/2">
                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=360&t=st=1667843867~exp=1667844467~hmac=fd50b4186ea4ee934f0b15c8fe164c54be70140efd5da3f91adbd233a2374a17" alt="" />
            </div>
            <div className="bg-white min-h-screen w-full max-w-md mx-auto flex lg:w-1/2 flex-col justify-center items-center">
                <div className="">
                    <form onSubmit={handelSignUp}>
                        <div>
                            <span className="text-sm text-gray-900">Welcome to Happy Toast !!!</span>
                            <h1 className="text-2xl lg:text-3xl font-bold text-purple-700">
                                Sign Up  <br />to create new account</h1>
                        </div>

                        <div className="my-3">
                            <label className="block text-md mb-2" >Name</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="name" placeholder="name" required />
                        </div>

                        <div className="my-3">
                            <label className="block text-md mb-2" >Photo-Url</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="photoURL" placeholder="photoURL" required />
                        </div>

                        <div className="my-3">
                            <label className="block text-md mb-2" >Email</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" required />
                        </div>

                        <div className="mt-5">
                            <label className="block text-md mb-2" >Password</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" required />
                        </div>

                        <div className="flex justify-between">    
                            <span className="text-xs mt-2 font-semibold text-red-700 ">{error}</span>
                        </div>
                        <div className="">
                            <button className="mt-4 mb-3 w-full font-semibold  bg-orange-700 hover:bg-purple-500 text-white py-2 rounded-md transition duration-100">
                                Sign Up
                            </button>                           
                        </div>
                    </form>
                </div>

                <p className='mt-2'>Already have an account? <Link to='/login'><span className='cursor-pointer text-sm text-blue-700'> Login</span></Link></p>
            </div>
        </div >

    );
};

export default SignUp;