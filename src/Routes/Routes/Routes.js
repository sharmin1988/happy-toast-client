import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login/Login";
import SignUp from "../../Page/Login/SignUp/SignUp";
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
                element: <Services></Services>
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
    }
])

export default router