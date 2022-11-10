import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtAuthToken } from "../../../api/JwtToken";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import UseTitle from "../../../hooks/UseTitle";


const Login = () => {
    UseTitle('Login')
    const { signIn, googleSignIn, } = useContext(AuthContext)
    const [error, setError] = useState('')
    const provider = new GoogleAuthProvider()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()

    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signIn(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }

                fetch('https://happy-toast-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('happy-token', data.token)
                        form.reset()
                        navigate(from, { replace: true })
                    })

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handelGoogleSignIn = () => {
        googleSignIn(provider)
            .then((result) => {
                const user = result.user
                jwtAuthToken(user)
            })
            .catch(err => console.error(err))
    }

    return (

        <div className="min-h-screen lg:flex">
            <div className="hidden lg:block w-1/2">
                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7872.jpg?w=360&t=st=1667843933~exp=1667844533~hmac=b916c733b3add05fcbce20295c57ab7d74f5eb166c8c5f02c8c8851d6e60bb4f" alt="" />
            </div>
            <div className="bg-white min-h-screen w-full mx-auto flex lg:w-1/2 flex-col justify-center items-center">
                <div className="">
                    <form onSubmit={handelLogin}>
                        <div>
                            <span className="text-sm text-gray-900">Welcome back</span>
                            <h1 className="text-2xl lg:text-3xl font-bold text-purple-700">Login to your account</h1>
                        </div>

                        <div className="my-3">
                            <label className="block text-md mb-2" >Email</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" />
                        </div>

                        <div className="mt-5">
                            <label className="block text-md mb-2" >Password</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
                        </div>

                        <div className="flex justify-between">
                            <span className="text-xs mt-2 font-semibold text-red-700 ">{error}</span>
                        </div>
                        <div >
                            <button className="mt-4 mb-3 w-full font-semibold  bg-orange-700 hover:bg-purple-500 text-white py-2 rounded-md transition duration-100">
                                Login now
                            </button>
                        </div>
                    </form>
                    <div className="flex  space-x-2 font-semibold justify-center items-end bg-gray-600 hover:bg-gray-800 text-white py-2 rounded-md transition duration-100">
                        <button onClick={handelGoogleSignIn} >Or sign-in with google</button>
                    </div>
                </div>

                <p className='mt-4'> Don't have an account? <Link to='/signup'><span className='cursor-pointer text-sm text-blue-600'> Sign up</span></Link></p>
            </div>
        </div >

    );
};

export default Login;