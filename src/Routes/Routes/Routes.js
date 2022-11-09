import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login/Login";
import SignUp from "../../Page/Login/SignUp/SignUp";
import Blog from "../../Page/Other/Blog/Blog";
import ErrorPage from "../../Page/Other/Error/ErrorPage";
import ReviewForm from "../../Page/Services/ReviewForm";
import ServiceDetails from "../../Page/Services/ServiceDetails";
import Services from "../../Page/Services/Services";
import AddServices from "../../Page/Shared/AddService/AddServices";
import MyReviews from "../../Page/Shared/MyReviews/MyReviews";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/addReview/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivateRoutes><ReviewForm></ReviewForm></PrivateRoutes>
            },
            {
                path: '/myReviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },

    {
        path:'/*',
        element: <ErrorPage></ErrorPage>,
    }
])

export default router