import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login/Login";
import SignUp from "../../Page/Login/SignUp/SignUp";
import ErrorPage from "../../Page/Other/Error/ErrorPage";
import ServiceDetails from "../../Page/Services/ServiceDetails";
import Services from "../../Page/Services/Services";
import AddServices from "../../Page/Shared/AddService/AddServices";
import MyReviews from "../../Page/Shared/MyReviews/MyReviews";

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
                path: '/myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addService',
                element: <AddServices></AddServices>
            },
            {
                path: '/blog',
                element: <Services></Services>
            },
        ]
    },

    {
        path:'/*',
        element: <ErrorPage></ErrorPage>,
    }
])

export default router